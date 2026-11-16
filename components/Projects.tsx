"use client";

import { useCallback, useEffect, useRef, useState, type MouseEvent, type PointerEvent, type ReactNode } from "react";
import { useLang } from "@/lib/i18n";
import Cover from "./Cover";

const AUTOPLAY_MS = 7000;

type Origin = { x: string; y: string };

/** Divide el título en letras para animarlas al entrar. */
function Chars({ text, suffix }: { text: string; suffix?: ReactNode }) {
  const words = text.split(" ");
  return (
    <>
      {words.map((word, w) => (
        <span className="word" key={w}>
          {Array.from(word).map((ch, i) => (
            <span className="char" key={i}>
              <span style={{ ["--d" as string]: `${(w * 4 + i) * 35 + 350}ms` }}>{ch}</span>
            </span>
          ))}
          {/* el sufijo va pegado a la última palabra para que no quede solo */}
          {w === words.length - 1 && suffix}
        </span>
      ))}
    </>
  );
}

/**
 * Carrusel de trabajos a pantalla completa (100vh).
 * Cada proyecto tiene su color; el siguiente entra con un círculo que se expande
 * desde donde hiciste clic (o desde el costado), mientras el anterior se queda debajo.
 */
export default function Projects() {
  const { t } = useLang();
  const items = t.work.items;
  const n = items.length;

  const [index, setIndex] = useState(0);
  const [prev, setPrev] = useState<number | null>(null);
  const [origin, setOrigin] = useState<Origin>({ x: "50%", y: "50%" });
  const [run, setRun] = useState(0); // fuerza reinicio de animaciones
  const [paused, setPaused] = useState(false);
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const dragX = useRef<number | null>(null);

  const go = useCallback(
    (dir: 1 | -1, o?: Origin) => {
      setPrev(index);
      setIndex((index + dir + n) % n);
      setOrigin(o ?? { x: dir === 1 ? "100%" : "0%", y: "50%" });
      setRun((r) => r + 1);
    },
    [index, n]
  );

  const goTo = (i: number) => {
    if (i === index) return;
    setPrev(index);
    setIndex(i);
    setOrigin({ x: "50%", y: "100%" });
    setRun((r) => r + 1);
  };

  // Autoplay solo cuando la sección está en pantalla
  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const io = new IntersectionObserver(([e]) => setVisible(e.isIntersecting), { threshold: 0.5 });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    if (paused || !visible) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = setTimeout(() => go(1), AUTOPLAY_MS);
    return () => clearTimeout(id);
  }, [paused, visible, go, run]);

  const clickNav = (dir: 1 | -1) => (e: MouseEvent<HTMLButtonElement>) => {
    const r = sectionRef.current?.getBoundingClientRect();
    if (!r) return go(dir);
    go(dir, { x: `${e.clientX - r.left}px`, y: `${e.clientY - r.top}px` });
  };

  const onPointerDown = (e: PointerEvent) => {
    dragX.current = e.clientX;
  };
  const onPointerUp = (e: PointerEvent) => {
    if (dragX.current === null) return;
    const dx = e.clientX - dragX.current;
    dragX.current = null;
    if (Math.abs(dx) > 60) go(dx < 0 ? 1 : -1);
  };

  const current = items[index];

  return (
    <section
      className={`work theme-${current.theme}`}
      id="work"
      ref={sectionRef}
      aria-roledescription="carousel"
      aria-label={t.work.title}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onPointerDown={onPointerDown}
      onPointerUp={onPointerUp}
      onKeyDown={(e) => {
        if (e.key === "ArrowRight") go(1);
        if (e.key === "ArrowLeft") go(-1);
      }}
      tabIndex={0}
    >
      <div className="work-slides">
        {items.map((p, i) => {
          const isCurrent = i === index;
          const isPrev = i === prev;
          if (!isCurrent && !isPrev) return null;
          return (
            <article
              key={isCurrent ? `c-${i}-${run}` : `p-${i}`}
              className={`slide theme-${p.theme} ${isCurrent ? "is-current" : "is-prev"} ${run === 0 ? "is-first" : ""}`}
              style={{ ["--cx" as string]: origin.x, ["--cy" as string]: origin.y }}
              aria-roledescription="slide"
              aria-label={`${i + 1} / ${n}`}
              aria-hidden={!isCurrent}
            >
              <div className="slide-inner">
                <div className="slide-text">
                  <p className="slide-kind mono">
                    <span>
                      {String(i + 1).padStart(2, "0")} / {String(n).padStart(2, "0")}
                    </span>
                    <span>{p.kind}</span>
                    {p.period && <span>{p.period}</span>}
                  </p>
                  <h3 className="slide-title">
                    <Chars
                      text={p.title}
                      suffix={
                        p.contact ? (
                          <span className="slide-heart" aria-label="corazón">
                            &lt;3
                          </span>
                        ) : undefined
                      }
                    />
                  </h3>
                  <p className="slide-desc">{p.desc}</p>
                  {p.url && (
                    <a href={p.url} target="_blank" rel="noopener noreferrer" className="slide-link">
                      {p.linkLabel ?? t.work.view} <span>↗</span>
                    </a>
                  )}
                  {p.contact && (
                    <a href="#contact" className="btn slide-cta">
                      {t.nav.cta} <span className="btn-arrow">→</span>
                    </a>
                  )}
                </div>
                <div className="slide-visual">
                  <Cover shapes={p.cover} accent={p.accent} className="slide-cover" image={p.logo} imageAlt={p.title} />
                </div>
              </div>
            </article>
          );
        })}
      </div>

      <div className="work-ui">
        <div className="work-head">
          <span className="mono">{t.work.label}</span>
          <h2>{t.work.title}</h2>
        </div>

        <div className="work-controls">
          <div className="work-progress" aria-hidden>
            {items.map((p, i) => (
              <button
                key={p.title}
                type="button"
                className={`work-dot ${i === index ? "is-active" : ""}`}
                onClick={() => goTo(i)}
                aria-label={`${i + 1}`}
                tabIndex={-1}
              >
                <span
                  key={i === index ? `bar-${run}` : "bar"}
                  className="work-bar"
                  data-paused={paused || !visible}
                  style={{ ["--ms" as string]: `${AUTOPLAY_MS}ms` }}
                />
              </button>
            ))}
          </div>
          <div className="work-arrows">
            <button type="button" onClick={clickNav(-1)} aria-label={t.work.prev}>
              ←
            </button>
            <button type="button" onClick={clickNav(1)} aria-label={t.work.next}>
              →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";

import { useEffect, useRef, useState } from "react";
import { useLang } from "@/lib/i18n";
import Reveal from "./Reveal";
import SectionHead from "./SectionHead";
import Cover from "./Cover";

export default function Projects() {
  const { t } = useLang();
  const [active, setActive] = useState<number | null>(null);
  const previewRef = useRef<HTMLDivElement>(null);
  const items = t.work.items;

  // La portada sigue al cursor (solo desktop)
  useEffect(() => {
    const el = previewRef.current;
    if (!el || !window.matchMedia("(pointer: fine)").matches) return;
    let x = 0,
      y = 0,
      cx = 0,
      cy = 0,
      raf = 0;
    const onMove = (e: MouseEvent) => {
      x = e.clientX;
      y = e.clientY;
    };
    const loop = () => {
      cx += (x - cx) * 0.14;
      cy += (y - cy) * 0.14;
      el.style.transform = `translate3d(${cx}px, ${cy}px, 0)`;
      raf = requestAnimationFrame(loop);
    };
    window.addEventListener("mousemove", onMove);
    raf = requestAnimationFrame(loop);
    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <section className="section projects" id="work">
      <div className="container">
        <SectionHead index="04" label={t.work.label} title={t.work.title} />

        <ul className="project-list" onMouseLeave={() => setActive(null)}>
          {items.map((p, i) => {
            const Inner = (
              <>
                <span className="project-num mono">0{i + 1}</span>
                <Cover shapes={p.cover} accent={p.accent} className="project-thumb" />
                <span className="project-title">{p.title}</span>
                <span className="project-desc">{p.desc}</span>
                <span className="project-kind mono">{p.kind}</span>
                <span className="project-arrow" aria-hidden>
                  →
                </span>
              </>
            );
            return (
              <Reveal as="li" key={p.title} delay={70 * i} className={active === i ? "is-active" : ""}>
                <div className="project-row-wrap" onMouseEnter={() => setActive(i)}>
                  {p.url ? (
                    <a className="project-row" href={p.url} target="_blank" rel="noopener noreferrer">
                      {Inner}
                    </a>
                  ) : (
                    <div className="project-row">{Inner}</div>
                  )}
                </div>
              </Reveal>
            );
          })}
        </ul>
      </div>

      <div className={`project-preview ${active !== null ? "is-on" : ""}`} ref={previewRef} aria-hidden>
        <div className="project-preview-inner">
          {items.map((p, i) => (
            <Cover
              key={p.title}
              shapes={p.cover}
              accent={p.accent}
              className={`project-preview-cover ${active === i ? "is-current" : ""}`}
            />
          ))}
          <span className="project-preview-label mono">{active !== null && items[active].url ? t.work.view : t.work.soon}</span>
        </div>
      </div>
    </section>
  );
}

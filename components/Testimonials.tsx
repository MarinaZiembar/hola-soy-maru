"use client";

import { useEffect, useState } from "react";
import { useLang } from "@/lib/i18n";
import SectionHead from "./SectionHead";
import Reveal from "./Reveal";
import Shape from "./Shape";

export default function Testimonials() {
  const { t } = useLang();
  const items = t.testimonials.items;
  const [i, setI] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const id = setInterval(() => setI((v) => (v + 1) % items.length), 6000);
    return () => clearInterval(id);
  }, [paused, items.length]);

  const go = (d: number) => setI((v) => (v + d + items.length) % items.length);
  const item = items[i];

  return (
    <section
      className="section testimonials"
      id="testimonials"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="container">
        <SectionHead label={t.testimonials.label} title={t.testimonials.title} light />

        <Reveal className="quote-wrap">
          <Shape name="quarter" className="quote-mark" fill="var(--yellow)" />
          <figure className="quote" key={`${i}-${item.quote}`} aria-live="polite">
            <blockquote>{item.quote}</blockquote>
            <figcaption className="mono">
              {item.name} — {item.role}
            </figcaption>
          </figure>

          <div className="quote-controls mono">
            <button type="button" onClick={() => go(-1)} aria-label="Anterior">
              ←
            </button>
            <span>
              {String(i + 1).padStart(2, "0")} / {String(items.length).padStart(2, "0")}
            </span>
            <button type="button" onClick={() => go(1)} aria-label="Siguiente">
              →
            </button>
            <span className="quote-progress" key={`p-${i}-${paused}`} data-paused={paused} />
          </div>
        </Reveal>
      </div>
    </section>
  );
}

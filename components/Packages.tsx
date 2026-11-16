"use client";

import { useState } from "react";
import { useLang } from "@/lib/i18n";
import type { ShapeName } from "@/lib/content";
import Reveal from "./Reveal";
import SectionHead from "./SectionHead";
import Shape from "./Shape";

const glyphs: { s: ShapeName; c: string }[] = [
  { s: "square", c: "var(--blue)" },
  { s: "circle", c: "var(--red)" },
  { s: "triangle", c: "var(--yellow)" },
];

export default function Packages() {
  const { t } = useLang();
  const [open, setOpen] = useState<number>(0);

  return (
    <section className="section packages" id="packages">
      <div className="container">
        <SectionHead index="04" label={t.packages.label} title={t.packages.title} aside={t.packages.sub} />

        <div className="pack-list">
          {t.packages.items.map((p, i) => {
            const isOpen = open === i;
            return (
              <Reveal key={i} delay={80 * i} className={`pack ${isOpen ? "is-open" : ""}`}>
                <button
                  type="button"
                  className="pack-head"
                  aria-expanded={isOpen}
                  aria-controls={`pack-${i}`}
                  onClick={() => setOpen(isOpen ? -1 : i)}
                >
                  <span className="pack-num mono">0{i + 1}</span>
                  <Shape name={glyphs[i].s} className="pack-glyph" fill={glyphs[i].c} />
                  <span className="pack-title">{p.title}</span>
                  <span className="pack-toggle" aria-hidden />
                </button>
                <div className="pack-body" id={`pack-${i}`}>
                  <div className="pack-body-inner">
                    <p className="pack-desc">{p.desc}</p>
                    <ul className="pack-items mono">
                      {p.items.map((it) => (
                        <li key={it}>{it}</li>
                      ))}
                    </ul>
                    <a href="#contact" className="pill pill--small">
                      <span className="pill-fill" aria-hidden />
                      <span className="pill-label">{t.packages.cta}</span>
                      <span className="pill-arrow" aria-hidden>
                        →
                      </span>
                    </a>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

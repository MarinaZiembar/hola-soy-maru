"use client";

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

export default function Services() {
  const { t } = useLang();

  return (
    <section className="section services" id="services">
      <div className="container">
        <SectionHead index="04" label={t.services.label} title={t.services.title} aside={t.services.aside} />

        <div className="services-grid">
          {t.services.items.map((s, i) => (
            <Reveal key={i} delay={90 * i} className="service">
              <div className="service-top">
                <span className="mono service-num">0{i + 1}</span>
                <Shape name={glyphs[i].s} className="service-glyph" fill={glyphs[i].c} />
              </div>
              <h3>{s.title}</h3>
              <p className="service-desc">{s.desc}</p>
              <p className="service-ideal">
                <span className="mono">{t.services.idealLabel}</span>
                {s.ideal}
              </p>
              <ul className="service-items">
                {s.items.map((it) => (
                  <li key={it}>{it}</li>
                ))}
              </ul>
              <a href="#contact" className="btn btn--outline">
                {t.services.cta} <span className="btn-arrow">→</span>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

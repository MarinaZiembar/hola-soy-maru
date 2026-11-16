"use client";

import { useLang } from "@/lib/i18n";
import type { ShapeName } from "@/lib/content";
import Reveal from "./Reveal";
import SectionHead from "./SectionHead";
import Shape from "./Shape";

const shapes: { s: ShapeName; c: string }[] = [
  { s: "diamond", c: "var(--yellow)" },
  { s: "quarter", c: "var(--paper)" },
  { s: "square", c: "var(--red)" },
  { s: "half", c: "var(--paper)" },
];

/** Sección con fondo de color (azul). */
export default function Benefits() {
  const { t } = useLang();

  return (
    <section className="section benefits" id="benefits">
      <div className="container">
        <SectionHead index="01" label={t.benefits.label} title={t.benefits.title} light />
        <div className="benefits-grid">
          {t.benefits.items.map((b, i) => (
            <Reveal key={i} delay={90 * i} className="benefit">
              <Shape name={shapes[i].s} className={`benefit-shape benefit-shape--${i}`} fill={shapes[i].c} />
              <h3>{b.title}</h3>
              <p>{b.desc}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

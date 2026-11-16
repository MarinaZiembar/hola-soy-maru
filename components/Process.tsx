"use client";

import { useLang } from "@/lib/i18n";
import type { ShapeName } from "@/lib/content";
import Reveal from "./Reveal";
import SectionHead from "./SectionHead";
import Shape from "./Shape";

// Cada paso es una forma que "se completa": círculo → semicírculos → cuadrado → anillo
const icons: { s: ShapeName; accent?: string }[] = [
  { s: "circle" },
  { s: "half", accent: "var(--yellow)" },
  { s: "square" },
  { s: "ring", accent: "var(--red)" },
];

export default function Process() {
  const { t } = useLang();
  const n = t.process.steps.length;

  return (
    <section className="section process" id="process">
      <div className="container">
        <SectionHead index="02" label={t.process.label} title={t.process.title} light />

        <Reveal as="ol" className="process-list">
          {t.process.steps.map((s, i) => (
            <li key={i} className="process-step" style={{ ["--i" as string]: i }}>
              <div className="process-icon">
                <Shape name={icons[i].s} className={`process-shape process-shape--${i}`} fill={icons[i].accent} />
              </div>
              <span className="process-count mono">
                0{i + 1} / 0{n}
              </span>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
            </li>
          ))}
        </Reveal>
      </div>
    </section>
  );
}

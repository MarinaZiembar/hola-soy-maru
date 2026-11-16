"use client";

import { useLang } from "@/lib/i18n";
import type { ShapeName } from "@/lib/content";
import Shape from "./Shape";

const seps: { s: ShapeName; c: string }[] = [
  { s: "circle", c: "var(--red)" },
  { s: "square", c: "var(--paper)" },
  { s: "triangle", c: "var(--yellow)" },
  { s: "half", c: "var(--paper)" },
  { s: "diamond", c: "var(--blue)" },
  { s: "quarter", c: "var(--paper)" },
];

export default function Marquee() {
  const { t } = useLang();

  return (
    <div className="marquee" aria-hidden>
      <div className="marquee-track">
        {[0, 1].map((k) => (
          <div className="marquee-group" key={k}>
            {t.marquee.map((w, i) => (
              <span className="marquee-item" key={`${k}-${i}`}>
                <span>{w}</span>
                <Shape name={seps[i % seps.length].s} className="marquee-shape" fill={seps[i % seps.length].c} />
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

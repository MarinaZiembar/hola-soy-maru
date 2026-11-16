"use client";

import { useState } from "react";
import { useLang } from "@/lib/i18n";
import Reveal from "./Reveal";
import SectionHead from "./SectionHead";

export default function Faq() {
  const { t } = useLang();
  const [open, setOpen] = useState<number>(0);

  return (
    <section className="section faq" id="faq">
      <div className="container faq-layout">
        <SectionHead label={t.faq.label} title={t.faq.title} />
        <div className="faq-list">
          {t.faq.items.map((f, i) => {
            const isOpen = open === i;
            return (
              <Reveal key={i} delay={70 * i} className={`faq-item ${isOpen ? "is-open" : ""}`}>
                <button
                  type="button"
                  className="faq-q"
                  aria-expanded={isOpen}
                  aria-controls={`faq-${i}`}
                  onClick={() => setOpen(isOpen ? -1 : i)}
                >
                  <span>{f.q}</span>
                  <span className="faq-toggle" aria-hidden />
                </button>
                <div className="faq-a" id={`faq-${i}`}>
                  <div>
                    <p>{f.a}</p>
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

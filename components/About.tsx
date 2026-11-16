"use client";

import { useLang } from "@/lib/i18n";
import { LINKEDIN_URL } from "@/lib/content";
import Reveal from "./Reveal";
import Shape from "./Shape";

const inlineColors = ["var(--red)", "var(--yellow)", "var(--paper)"];

export default function About() {
  const { t } = useLang();
  let shapeCount = 0;

  return (
    <section className="section about" id="about">
      <div className="container">
        <Reveal className="section-meta section-meta--light">
          <span className="mono">(02)</span>
          <span className="mono">{t.about.label}</span>
          <span className="section-rule" />
        </Reveal>

        <Reveal as="h2" className="about-statement" delay={80}>
          {t.about.statement.map((part, i) =>
            typeof part === "string" ? (
              <span key={i}>{part} </span>
            ) : (
              <Shape
                key={i}
                name={part.shape}
                className="inline-shape"
                fill={inlineColors[shapeCount++ % inlineColors.length]}
              />
            )
          )}
        </Reveal>

        <div className="about-grid">
          {/* Composición geométrica. TODO: tu foto va en .about-photo */}
          <Reveal className="about-visual">
            <div className="about-cell about-photo">
              {/* <img src="/maru.jpg" alt="Maru" /> */}
              <span className="mono">foto.jpg</span>
            </div>
            <div className="about-cell">
              <Shape name="quarter" className="about-shape spin-slow" />
            </div>
            <div className="about-cell bg-ink">
              <Shape name="circle" className="about-shape breathe" fill="var(--red)" />
            </div>
            <div className="about-cell">
              <Shape name="triangle" className="about-shape" />
            </div>
          </Reveal>

          <div className="about-text">
            {t.about.body.map((p, i) => (
              <Reveal as="p" key={i} delay={100 * i}>
                {p}
              </Reveal>
            ))}

            <Reveal as="dl" className="facts" delay={200}>
              {t.about.facts.map((f) => (
                <div key={f.k}>
                  <dt className="mono">{f.k}</dt>
                  <dd>{f.v}</dd>
                </div>
              ))}
            </Reveal>

            <Reveal delay={260}>
              <a className="pill pill--light" href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer">
                <span className="pill-fill" aria-hidden />
                <span className="pill-label">{t.about.button}</span>
                <span className="pill-arrow" aria-hidden>
                  ↗
                </span>
              </a>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";

import { useLang } from "@/lib/i18n";
import { LINKEDIN_URL } from "@/lib/content";
import Reveal from "./Reveal";
import Shape from "./Shape";
import Avatar from "./Avatar";

const inlineColors = ["var(--red)", "var(--blue)", "var(--yellow)"];

export default function About() {
  const { t } = useLang();
  let shapeCount = 0;

  return (
    <section className="section about" id="about">
      <div className="container">
        <Reveal className="section-meta">
                    <span className="mono">{t.about.label}</span>
          <span className="section-rule" />
        </Reveal>

        <Reveal as="h2" className="about-statement" delay={80}>
          {t.about.statement.map((part, i) => {
            if (typeof part !== "string") return null;
            const next = t.about.statement[i + 1];
            const words = part.split(" ");
            const last = words.pop();
            // la forma va pegada a la última palabra para que nunca quede sola en una línea
            return (
              <span key={i} className="about-line">
                {words.length > 0 && `${words.join(" ")} `}
                <span className="nowrap">
                  {last}
                  {next && typeof next !== "string" && (
                    <Shape
                      name={next.shape}
                      className="inline-shape"
                      fill={inlineColors[shapeCount++ % inlineColors.length]}
                    />
                  )}
                </span>{" "}
              </span>
            );
          })}
        </Reveal>

        <div className="about-grid">
          {/* Composición geométrica con el avatar de Maru */}
          <Reveal className="about-visual">
            <Avatar />
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
              <a className="pill" href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer">
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

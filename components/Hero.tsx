"use client";

import { Fragment } from "react";
import { useLang } from "@/lib/i18n";
import Kinetic from "./Kinetic";
import Wink from "./Wink";

/** Divide en palabras (no se cortan) y letras (cada una entra animada). */
function Split({ text, base = 0, strongLast = false }: { text: string; base?: number; strongLast?: boolean }) {
  let n = base;
  const words = text.split(" ");
  return (
    <>
      {words.map((word, w) => (
        <Fragment key={w}>
        {w > 0 && " "}
        <span className={`word ${strongLast && w === words.length - 1 ? "word--strong" : ""}`} aria-hidden>
          {Array.from(word).map((ch, i) => (
            <span className="char" key={i}>
              <span style={{ ["--d" as string]: `${n++ * 40}ms` }}>{ch}</span>
            </span>
          ))}
        </span>
        </Fragment>
      ))}
    </>
  );
}

export default function Hero() {
  const { t, lang } = useLang();

  return (
    <section className="hero" id="top">
      <div className="hero-copy">
        <p className="hero-eyebrow mono">
          <i className="pulse" /> {t.hero.eyebrow}
        </p>

        <h1 className="hero-title" key={lang} aria-label={`${t.hero.title1} ${t.hero.title2} ;)`}>
          <span className="hero-row hero-row--caps">
            <Split text={t.hero.title1} />
          </span>{" "}
          <span className="hero-row">
            <span className="hero-word">
              <Split text={t.hero.title2} base={t.hero.title1.length} strongLast />
            </span>
            <Wink className="hero-wink" />
          </span>
        </h1>

        <h2 className="hero-headline" key={`h-${lang}`}>
          {/* lo que va entre **asteriscos** sale en negrita */}
          {t.hero.headline.split("**").map((chunk, i) => (i % 2 ? <strong key={i}>{chunk}</strong> : chunk))}
        </h2>
        <p className="hero-sub">{t.hero.sub}</p>

        <div className="hero-actions">
          <a href="#contact" className="btn">
            {t.hero.cta} <span className="btn-arrow">→</span>
          </a>
          <a href="#work" className="link-arrow">
            {t.hero.secondary} <span>↓</span>
          </a>
        </div>

        <ul className="hero-trust mono">
          {t.hero.trust.map((x) => (
            <li key={x}>{x}</li>
          ))}
        </ul>
      </div>

      <Kinetic className="hero-kinetic" />
    </section>
  );
}

"use client";

import { useLang } from "@/lib/i18n";
import TileGrid from "./TileGrid";
import Wink from "./Wink";

/** Divide en palabras (no se cortan) y letras (cada una entra animada). */
function Split({ text, base = 0 }: { text: string; base?: number }) {
  let n = base;
  return (
    <>
      {text.split(" ").map((word, w) => (
        <span className="word" key={w} aria-hidden>
          {Array.from(word).map((ch, i) => (
            <span className="char" key={i}>
              <span style={{ ["--d" as string]: `${n++ * 40}ms` }}>{ch}</span>
            </span>
          ))}
        </span>
      ))}
    </>
  );
}

export default function Hero() {
  const { t, lang } = useLang();

  return (
    <section className="hero" id="top">
      <div className="hero-top mono">
        <span>{t.hero.role}</span>
        <span className="hero-available">
          <i className="pulse" /> {t.hero.available}
        </span>
      </div>

      <h1 className="hero-title" key={lang} aria-label={`${t.hero.title1} ${t.hero.title2} ;)`}>
        <span className="hero-row hero-row--1">
          <span className="hero-word">
            <Split text={t.hero.title1} />
          </span>
          <TileGrid className="hero-tiles" />
        </span>
        <span className="hero-row hero-row--2">
          <span className="hero-word">
            <Split text={t.hero.title2} base={t.hero.title1.length} />
          </span>
          <Wink className="hero-wink" />
        </span>
      </h1>

      <div className="hero-bottom">
        <p className="hero-sub">{t.hero.sub}</p>

        <a href="#contact" className="round-cta" aria-label={t.hero.cta}>
          <svg viewBox="0 0 100 100" className="round-cta-text" aria-hidden>
            <defs>
              <path id="cta-circle" d="M50,50 m-37,0 a37,37 0 1,1 74,0 a37,37 0 1,1 -74,0" />
            </defs>
            <text>
              <textPath href="#cta-circle" textLength="228" lengthAdjust="spacing">
                {`${t.hero.cta} — ${t.hero.cta} — `}
              </textPath>
            </text>
          </svg>
          <span className="round-cta-arrow" aria-hidden>
            ↘
          </span>
        </a>

        <a href="#about" className="hero-scroll mono">
          <span className="hero-scroll-line" />
          {t.hero.scroll}
        </a>
      </div>
    </section>
  );
}

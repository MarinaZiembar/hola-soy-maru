"use client";

import { useEffect, useState } from "react";
import { useLang } from "@/lib/i18n";
import Wink from "./Wink";

export default function Header() {
  const { t, lang, setLang } = useLang();
  const [open, setOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [atTop, setAtTop] = useState(true);

  // Se esconde al bajar y aparece al subir
  useEffect(() => {
    let last = window.scrollY;
    const onScroll = () => {
      const y = window.scrollY;
      setHidden(y > last && y > 160);
      setAtTop(y < 40);
      last = y;
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  const links = [
    { href: "#work", label: t.nav.work },
    { href: "#process", label: t.nav.process },
    { href: "#about", label: t.nav.about },
    { href: "#services", label: t.nav.services },
    { href: "#faq", label: t.nav.faq },
  ];

  return (
    <header className={`header ${hidden && !open ? "is-hidden" : ""} ${open ? "is-open" : ""} ${atTop && !open ? "is-top" : ""}`}>
      <a href="#top" className="logo" aria-label="Hola soy Maru — inicio">
        <Wink className="logo-wink" label="Hola soy Maru" bold />
      </a>

      <nav className="nav" aria-label="Principal">
        {links.map((l, i) => (
          <a key={l.href} href={l.href} onClick={() => setOpen(false)} style={{ ["--i" as string]: i }}>
            <span className="nav-index mono">0{i + 1}</span>
            <span className="nav-label">
              <span data-text={l.label}>{l.label}</span>
            </span>
          </a>
        ))}
        <a href="#contact" className="nav-cta-mobile" onClick={() => setOpen(false)} style={{ ["--i" as string]: links.length }}>
          {t.nav.cta} →
        </a>
      </nav>

      <div className="header-actions">
        <div className="lang mono" role="group" aria-label="Idioma / Language">
          <button type="button" aria-pressed={lang === "es"} onClick={() => setLang("es")}>
            ES
          </button>
          <span aria-hidden>/</span>
          <button type="button" aria-pressed={lang === "en"} onClick={() => setLang("en")}>
            EN
          </button>
        </div>
        <a href="#contact" className="btn btn--small header-cta">
          {t.nav.cta}
        </a>
        <button
          type="button"
          className="burger"
          aria-label="Menu"
          aria-expanded={open}
          onClick={() => setOpen((o) => !o)}
        >
          <span />
          <span />
        </button>
      </div>
    </header>
  );
}

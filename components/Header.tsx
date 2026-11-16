"use client";

import { useEffect, useState } from "react";
import { useLang } from "@/lib/i18n";

function useBuenosAiresTime() {
  const [time, setTime] = useState<string | null>(null);
  useEffect(() => {
    const fmt = new Intl.DateTimeFormat("es-AR", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
      timeZone: "America/Argentina/Buenos_Aires",
    });
    const tick = () => setTime(fmt.format(new Date()));
    tick();
    const id = setInterval(tick, 15_000);
    return () => clearInterval(id);
  }, []);
  return time;
}

export default function Header() {
  const { t, lang, setLang } = useLang();
  const [open, setOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const time = useBuenosAiresTime();

  // Se esconde al bajar y aparece al subir
  useEffect(() => {
    let last = window.scrollY;
    const onScroll = () => {
      const y = window.scrollY;
      setHidden(y > last && y > 160);
      last = y;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  const links = [
    { href: "#about", label: t.nav.about },
    { href: "#projects", label: t.nav.projects },
    { href: "#process", label: t.nav.process },
    { href: "#packages", label: t.nav.packages },
    { href: "#contact", label: t.nav.contact },
  ];

  return (
    <header className={`header ${hidden && !open ? "is-hidden" : ""} ${open ? "is-open" : ""}`}>
      <a href="#top" className="logo" aria-label="Hola soy Maru">
        <span className="logo-mark" aria-hidden>
          <i />
          <i />
        </span>
        maru
      </a>

      <span className="header-clock mono" aria-hidden>
        {t.hero.city} {time ?? "--:--"}
      </span>

      <nav className="nav" aria-label="Principal">
        {links.map((l, i) => (
          <a key={l.href} href={l.href} onClick={() => setOpen(false)} style={{ ["--i" as string]: i }}>
            <span className="nav-index mono">0{i + 1}</span>
            <span className="nav-label">
              <span data-text={l.label}>{l.label}</span>
            </span>
          </a>
        ))}
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

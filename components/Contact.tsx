"use client";

import { useState } from "react";
import { useLang } from "@/lib/i18n";
import { EMAIL, LINKEDIN_URL } from "@/lib/content";
import Reveal from "./Reveal";
import Shape from "./Shape";

export default function Contact() {
  const { t } = useLang();
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      window.location.href = `mailto:${EMAIL}`;
    }
  };

  return (
    <section className="contact" id="contact">
      <div className="contact-orbit" aria-hidden>
        <Shape name="circle" className="orbit orbit--1" fill="var(--red)" />
        <Shape name="square" className="orbit orbit--2" fill="var(--blue)" />
        <Shape name="triangle" className="orbit orbit--3" fill="var(--yellow)" />
      </div>

      <div className="container contact-inner">
        <Reveal className="section-meta section-meta--light">
          <span className="mono">(06)</span>
          <span className="mono">{t.contact.label}</span>
          <span className="section-rule" />
        </Reveal>

        <Reveal as="h2" className="contact-title" delay={80}>
          {t.contact.title}
        </Reveal>

        <Reveal className="contact-row" delay={160}>
          <p>{t.contact.sub}</p>
          <div className="contact-actions">
            <a href={`mailto:${EMAIL}`} className="pill pill--light">
              <span className="pill-fill" aria-hidden />
              <span className="pill-label">{t.contact.write}</span>
              <span className="pill-arrow" aria-hidden>
                ↗
              </span>
            </a>
            <button type="button" className="copy mono" onClick={copy}>
              {copied ? t.contact.copied : t.contact.copy}
            </button>
          </div>
        </Reveal>

        <Reveal delay={220}>
          <a href={`mailto:${EMAIL}`} className="contact-email">
            {EMAIL}
          </a>
        </Reveal>
      </div>

      <footer className="footer container mono">
        <span>© {new Date().getFullYear()} — {t.footer.made}</span>
        <span className="footer-links">
          <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
          <a href="#top">{t.footer.top} ↑</a>
        </span>
      </footer>
    </section>
  );
}

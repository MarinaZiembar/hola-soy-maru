"use client";

import { useEffect, useRef } from "react";
import type { ShapeName } from "@/lib/content";
import Shape from "./Shape";

type F = { s: ShapeName; c: string; x: number; y: number; size: number; rot: number };

// Posiciones fijas (en % de la sección) para que no se tapen con el texto principal
const FLOATERS: F[] = [
  { s: "circle", c: "var(--red)", x: 84, y: 8, size: 54, rot: 0 },
  { s: "square", c: "var(--blue)", x: 93, y: 30, size: 30, rot: 18 },
  { s: "triangle", c: "var(--yellow)", x: 72, y: 22, size: 36, rot: -12 },
  { s: "half", c: "var(--paper)", x: 58, y: 6, size: 40, rot: 30 },
  { s: "ring", c: "var(--red)", x: 90, y: 55, size: 46, rot: 0 },
  { s: "diamond", c: "var(--yellow)", x: 64, y: 48, size: 26, rot: 0 },
  { s: "quarter", c: "var(--blue)", x: 78, y: 70, size: 44, rot: 90 },
  { s: "circle", c: "var(--paper)", x: 96, y: 80, size: 16, rot: 0 },
  { s: "square", c: "var(--red)", x: 70, y: 86, size: 18, rot: 40 },
  { s: "triangle", c: "var(--paper)", x: 38, y: 12, size: 20, rot: 160 },
  { s: "circle", c: "var(--yellow)", x: 50, y: 48, size: 22, rot: 0 },
  { s: "diamond", c: "var(--blue)", x: 86, y: 90, size: 24, rot: 0 },
];

const RADIUS = 200; // px de alcance del cursor
const PUSH = 70; // px máximos que se corren

/** Formitas desparramadas que flotan y se apartan del cursor. */
export default function Floaters() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = ref.current;
    if (!root || !window.matchMedia("(pointer: fine)").matches) return;
    const section = root.parentElement;
    if (!section) return;
    const items = Array.from(root.querySelectorAll<HTMLElement>(".floater"));
    let raf = 0;

    const onMove = (e: MouseEvent) => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        for (const el of items) {
          const r = el.getBoundingClientRect();
          const cx = r.left + r.width / 2 - parseFloat(el.style.getPropertyValue("--px") || "0");
          const cy = r.top + r.height / 2 - parseFloat(el.style.getPropertyValue("--py") || "0");
          const dx = cx - e.clientX;
          const dy = cy - e.clientY;
          const d = Math.hypot(dx, dy);
          if (d < RADIUS && d > 0) {
            const f = (1 - d / RADIUS) * PUSH;
            el.style.setProperty("--px", `${((dx / d) * f).toFixed(1)}px`);
            el.style.setProperty("--py", `${((dy / d) * f).toFixed(1)}px`);
            el.style.setProperty("--spin", `${(dx > 0 ? 1 : -1) * f * 1.2}deg`);
          } else {
            el.style.setProperty("--px", "0px");
            el.style.setProperty("--py", "0px");
            el.style.setProperty("--spin", "0deg");
          }
        }
      });
    };
    const onLeave = () => {
      for (const el of items) {
        el.style.setProperty("--px", "0px");
        el.style.setProperty("--py", "0px");
        el.style.setProperty("--spin", "0deg");
      }
    };

    section.addEventListener("mousemove", onMove);
    section.addEventListener("mouseleave", onLeave);
    return () => {
      section.removeEventListener("mousemove", onMove);
      section.removeEventListener("mouseleave", onLeave);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div className="floaters" ref={ref} aria-hidden>
      {FLOATERS.map((f, i) => (
        <span
          key={i}
          className={`floater ${f.x >= 78 ? "floater--edge" : ""}`}
          style={{
            left: `${f.x}%`,
            top: `${f.y}%`,
            width: f.size,
            height: f.size,
            ["--rot" as string]: `${f.rot}deg`,
            ["--dur" as string]: `${5 + (i % 4) * 1.3}s`,
            ["--delay" as string]: `${-i * 0.7}s`,
          }}
        >
          <span className="floater-inner">
            <Shape name={f.s} fill={f.c} />
          </span>
        </span>
      ))}
    </div>
  );
}

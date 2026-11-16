"use client";

import { useEffect, useRef } from "react";

/**
 * Composición cinética: una "máquina" Bauhaus de 3x3 donde cada pieza
 * se desliza, gira, se da vuelta o cambia de forma en loop.
 * Además reacciona al mouse con un poco de parallax.
 */
export default function Kinetic({ className = "" }: { className?: string }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || !window.matchMedia("(pointer: fine)").matches) return;
    let raf = 0;
    const onMove = (e: MouseEvent) => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        el.style.setProperty("--mx", ((e.clientX / window.innerWidth - 0.5) * 2).toFixed(3));
        el.style.setProperty("--my", ((e.clientY / window.innerHeight - 0.5) * 2).toFixed(3));
      });
    };
    window.addEventListener("mousemove", onMove);
    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div className={`kinetic ${className}`} ref={ref} aria-hidden>
      <div className="k-guides">
        {Array.from({ length: 9 }).map((_, i) => (
          <span key={i} />
        ))}
      </div>
      <span className="k k-circle" style={{ ["--depth" as string]: 18 }} />
      <span className="k k-square" style={{ ["--depth" as string]: -14 }} />
      <span className="k k-half" style={{ ["--depth" as string]: 10 }} />
      <span className="k k-pill" style={{ ["--depth" as string]: -22 }} />
      <span className="k k-quarter" style={{ ["--depth" as string]: 26 }} />
      <span className="k k-ring" style={{ ["--depth" as string]: -10 }}>
        <i />
      </span>
      <span className="k k-dot" style={{ ["--depth" as string]: 40 }} />
    </div>
  );
}

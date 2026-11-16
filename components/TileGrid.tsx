"use client";

import { useEffect, useState } from "react";
import type { ShapeName } from "@/lib/content";
import Shape from "./Shape";

type Tone = "ink" | "paper" | "red" | "blue" | "yellow";
type Tile = { shape: ShapeName | null; rot: number; fg: Tone; bg: Tone; v: number };

const SHAPES: ShapeName[] = ["circle", "half", "quarter", "square", "triangle", "ring", "diamond"];
const ACCENTS: Tone[] = ["red", "blue", "yellow"];

// Estado inicial fijo (igual en server y cliente → sin errores de hidratación)
const INITIAL: Tile[] = [
  { shape: "quarter", rot: 0, fg: "ink", bg: "paper", v: 0 },
  { shape: "circle", rot: 0, fg: "red", bg: "paper", v: 0 },
  { shape: null, rot: 0, fg: "ink", bg: "paper", v: 0 },
  { shape: "half", rot: 180, fg: "paper", bg: "ink", v: 0 },
  { shape: "square", rot: 0, fg: "ink", bg: "paper", v: 0 },
  { shape: "ring", rot: 0, fg: "ink", bg: "paper", v: 0 },
  { shape: "triangle", rot: 90, fg: "ink", bg: "paper", v: 0 },
  { shape: "quarter", rot: 180, fg: "blue", bg: "paper", v: 0 },
  { shape: "circle", rot: 0, fg: "paper", bg: "ink", v: 0 },
  { shape: null, rot: 0, fg: "ink", bg: "paper", v: 0 },
  { shape: "half", rot: 0, fg: "ink", bg: "paper", v: 0 },
  { shape: "diamond", rot: 0, fg: "yellow", bg: "ink", v: 0 },
];

const pick = <T,>(arr: T[]) => arr[Math.floor(Math.random() * arr.length)];

function randomTile(v: number): Tile {
  const dark = Math.random() < 0.22;
  const accent = Math.random() < 0.2;
  return {
    shape: Math.random() < 0.12 ? null : pick(SHAPES),
    rot: pick([0, 90, 180, 270]),
    bg: dark ? "ink" : "paper",
    fg: accent ? pick(ACCENTS) : dark ? "paper" : "ink",
    v,
  };
}

/** Grilla tipo Bauhaus: las fichas cambian solas y giran al pasar el mouse. */
export default function TileGrid({ className = "" }: { className?: string }) {
  const [tiles, setTiles] = useState<Tile[]>(INITIAL);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let v = 1;
    const id = setInterval(() => {
      setTiles((prev) => {
        const next = [...prev];
        next[Math.floor(Math.random() * next.length)] = randomTile(v++);
        return next;
      });
    }, 1400);
    return () => clearInterval(id);
  }, []);

  const spin = (i: number) =>
    setTiles((prev) => prev.map((t, j) => (j === i ? { ...t, rot: t.rot + 90 } : t)));

  return (
    <div className={`tiles ${className}`} aria-hidden>
      {tiles.map((t, i) => (
        <div key={i} className={`tile bg-${t.bg}`} onMouseEnter={() => spin(i)}>
          {t.shape && (
            <span key={t.v} className={`tile-shape fg-${t.fg}`} style={{ ["--rot" as string]: `${t.rot}deg` }}>
              <Shape name={t.shape} />
            </span>
          )}
        </div>
      ))}
    </div>
  );
}

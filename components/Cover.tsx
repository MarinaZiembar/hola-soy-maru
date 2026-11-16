import type { ShapeName } from "@/lib/content";
import Shape from "./Shape";

type Props = {
  shapes: [ShapeName, ShapeName, ShapeName, ShapeName];
  accent: "red" | "blue" | "yellow";
  className?: string;
};

/** Portada generativa 2x2 para proyectos sin imagen. Una sola forma lleva color. */
export default function Cover({ shapes, accent, className = "" }: Props) {
  return (
    <div className={`cover ${className}`} aria-hidden>
      {shapes.map((s, i) => (
        <div key={i} className={`cover-cell ${i === 3 ? "bg-ink" : ""}`}>
          <Shape
            name={s}
            fill={i === 1 ? `var(--${accent})` : i === 3 ? "var(--paper)" : "var(--ink)"}
            style={{ rotate: `${i * 90}deg` }}
          />
        </div>
      ))}
    </div>
  );
}

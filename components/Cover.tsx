import type { ShapeName } from "@/lib/content";
import Shape from "./Shape";

type Props = {
  shapes: [ShapeName, ShapeName, ShapeName, ShapeName];
  accent: "red" | "blue" | "yellow";
  className?: string;
  /** imagen cuadrada: reemplaza toda la composición */
  image?: string;
  imageAlt?: string;
};

/** Portada generativa 2x2. Una sola forma lleva color, o el logo del proyecto si hay. */
export default function Cover({ shapes, accent, className = "", image, imageAlt = "" }: Props) {
  // con imagen: ocupa todo el cuadrado
  if (image) {
    return (
      <div className={`cover cover--image ${className}`}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={image} alt={imageAlt} loading="lazy" draggable={false} />
      </div>
    );
  }
  return (
    <div className={`cover ${className}`}>
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

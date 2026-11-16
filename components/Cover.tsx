import type { ShapeName } from "@/lib/content";
import Shape from "./Shape";

type Props = {
  shapes: [ShapeName, ShapeName, ShapeName, ShapeName];
  accent: "red" | "blue" | "yellow";
  className?: string;
  /** logo circular: reemplaza la forma de color (celda 2) */
  image?: string;
  imageAlt?: string;
};

/** Portada generativa 2x2. Una sola forma lleva color, o el logo del proyecto si hay. */
export default function Cover({ shapes, accent, className = "", image, imageAlt = "" }: Props) {
  return (
    <div className={`cover ${className}`}>
      {shapes.map((s, i) => (
        <div key={i} className={`cover-cell ${i === 3 ? "bg-ink" : ""}`}>
          {image && i === 1 ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img src={image} alt={imageAlt} className="cover-logo" loading="lazy" />
          ) : (
            <Shape
              name={s}
              fill={i === 1 ? `var(--${accent})` : i === 3 ? "var(--paper)" : "var(--ink)"}
              style={{ rotate: `${i * 90}deg` }}
            />
          )}
        </div>
      ))}
    </div>
  );
}

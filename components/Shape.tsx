import type { CSSProperties } from "react";
import type { ShapeName } from "@/lib/content";

type Props = {
  name: ShapeName;
  className?: string;
  style?: CSSProperties;
  /** color de relleno; por defecto currentColor */
  fill?: string;
};

/** Formas geométricas básicas en un viewBox de 100x100. */
export default function Shape({ name, className, style, fill = "currentColor" }: Props) {
  return (
    <svg viewBox="0 0 100 100" className={className} style={style} aria-hidden focusable="false">
      {name === "circle" && <circle cx="50" cy="50" r="50" fill={fill} />}
      {name === "half" && <path d="M0 100 A50 50 0 0 1 100 100 Z" transform="translate(0 -25)" fill={fill} />}
      {name === "quarter" && <path d="M0 0 H100 A100 100 0 0 1 0 100 Z" fill={fill} />}
      {name === "square" && <rect width="100" height="100" fill={fill} />}
      {name === "triangle" && <path d="M0 100 L50 0 L100 100 Z" fill={fill} />}
      {name === "ring" && <circle cx="50" cy="50" r="37" fill="none" stroke={fill} strokeWidth="26" />}
      {name === "diamond" && <path d="M50 0 L100 50 L50 100 L0 50 Z" fill={fill} />}
    </svg>
  );
}

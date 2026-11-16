/** El ";)" hecho con formas: un cuadrado que guiña, un cuarto de círculo y un semi-anillo. */
export default function Wink({ className = "", label = ";)", bold = false }: { className?: string; label?: string; bold?: boolean }) {
  if (bold) {
    // versión más gruesa para el logo
    return (
      <span className={`wink ${className}`} aria-label={label} role="img">
        <svg viewBox="0 0 146 140">
          <rect className="wink-eye" x="2" y="14" width="36" height="36" />
          <path className="wink-comma" d="M2 82 H38 A36 36 0 0 1 2 118 Z" />
          <path className="wink-smile" d="M68 12 A57 57 0 0 1 68 126" fill="none" strokeWidth="30" />
        </svg>
      </span>
    );
  }
  return (
    <span className={`wink ${className}`} aria-label={label} role="img">
      <svg viewBox="0 0 140 140">
        <rect className="wink-eye" x="6" y="22" width="26" height="26" />
        <path className="wink-comma" d="M6 86 H32 A26 26 0 0 1 6 112 Z" />
        <path className="wink-smile" d="M64 8 A62 62 0 0 1 64 132" fill="none" strokeWidth="22" />
      </svg>
    </span>
  );
}

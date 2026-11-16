/** El ";)" hecho con formas: un cuadrado que guiña, un cuarto de círculo y un semi-anillo. */
export default function Wink({ className = "" }: { className?: string }) {
  return (
    <span className={`wink ${className}`} aria-label=";)" role="img">
      <svg viewBox="0 0 120 140">
        <rect className="wink-eye" x="6" y="22" width="26" height="26" />
        <path className="wink-comma" d="M6 86 H32 A26 26 0 0 1 6 112 Z" />
        <path className="wink-smile" d="M64 8 A62 62 0 0 1 64 132" fill="none" strokeWidth="22" />
      </svg>
    </span>
  );
}

/**
 * Avatar geométrico de Maru (de hombros para arriba).
 * Pelo corto con flequillo, pañuelito con nudo, anteojos redondos, septum y aros.
 * Animación: mira a un lado y al otro, inclina la cabeza, parpadea y sonríe.
 */
export default function Avatar({ className = "" }: { className?: string }) {
  const skin = "#f6d2b8";
  const skinShade = "#e9b897";
  const hair = "#3b2419";
  const ink = "#141414";

  return (
    <svg viewBox="18 22 164 178" className={`avatar ${className}`} role="img" aria-label="Avatar de Maru">
      {/* fondo */}
      <circle cx="100" cy="104" r="78" fill="var(--blue)" />
      <circle className="av-spark" cx="164" cy="44" r="7" fill="var(--red)" />
      <rect className="av-spark av-spark--2" x="28" y="52" width="11" height="11" fill="var(--paper)" />

      {/* hombros (buzo) */}
      <path d="M30 200 V184 Q30 160 64 153 L100 160 L136 153 Q170 160 170 184 V200 Z" fill={ink} />
      <path d="M86 152 L100 168 L114 152 Z" fill="#2a2f4a" />

      {/* cuello */}
      <rect x="88" y="128" width="24" height="30" rx="6" fill={skin} />
      <rect x="88" y="128" width="24" height="10" fill={skinShade} />

      {/* cabeza (se inclina) */}
      <g className="av-head">
        {/* orejas + aros */}
        <circle cx="61" cy="104" r="8" fill={skin} />
        <circle cx="139" cy="104" r="8" fill={skin} />
        <circle cx="60" cy="122" r="8" fill="none" stroke="var(--yellow)" strokeWidth="2.4" />
        <circle cx="140" cy="122" r="8" fill="none" stroke="var(--yellow)" strokeWidth="2.4" />

        {/* cara */}
        <ellipse cx="100" cy="102" rx="38" ry="43" fill={skin} />

        {/* pelo: casquete corto + flequillo recto en zigzag */}
        <path
          d="M60 104 Q57 58 100 52 Q143 58 140 104 L135 104 Q134 84 128 78 L124 86 L118 77 L112 86 L106 77 L100 86 L94 77 L88 86 L82 77 L76 86 L72 79 Q66 86 65 104 Z"
          fill={hair}
        />

        {/* pañuelito: vincha negra con puntitos + nudo */}
        <path d="M61 82 Q100 46 139 82 L136 74 Q100 38 64 74 Z" fill={ink} />
        <g fill="var(--paper)">
          <circle cx="76" cy="69" r="1.6" />
          <circle cx="88" cy="61" r="1.6" />
          <circle cx="100" cy="58" r="1.6" />
          <circle cx="112" cy="61" r="1.6" />
          <circle cx="124" cy="69" r="1.6" />
          <circle cx="82" cy="66" r="1" />
          <circle cx="118" cy="66" r="1" />
        </g>
        <g className="av-knot">
          <path d="M108 50 L94 40 L96 54 Z" fill={ink} />
          <path d="M110 50 L126 44 L118 57 Z" fill={ink} />
          <circle cx="108" cy="51" r="4.5" fill={ink} />
          <circle cx="117" cy="49" r="1.2" fill="var(--paper)" />
        </g>

        {/* cejas */}
        <rect className="av-brow" x="76" y="85" width="16" height="3.4" rx="1.7" fill={hair} transform="rotate(-6 84 86)" />
        <rect className="av-brow" x="108" y="85" width="16" height="3.4" rx="1.7" fill={hair} transform="rotate(6 116 86)" />

        {/* ojos (se mueven y parpadean) */}
        <g className="av-eyes">
          <g className="av-blink">
            <circle cx="85" cy="101" r="4.2" fill={ink} />
            <circle cx="115" cy="101" r="4.2" fill={ink} />
            <circle cx="86.5" cy="99.5" r="1.3" fill="#fff" />
            <circle cx="116.5" cy="99.5" r="1.3" fill="#fff" />
          </g>
        </g>

        {/* anteojos redondos */}
        <g fill="none" stroke={ink} strokeWidth="2.6">
          <circle cx="84" cy="101" r="14" />
          <circle cx="116" cy="101" r="14" />
          <path d="M98 99 Q100 96 102 99" />
          <path d="M70 99 L62 97" />
          <path d="M130 99 L138 97" />
        </g>

        {/* nariz */}
        <path d="M100 106 L96 118 L102 118" fill="none" stroke={skinShade} strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />

        {/* septum */}
        <circle cx="99.5" cy="121.5" r="3.2" fill="none" stroke="#9aa0a6" strokeWidth="1.8" />

        {/* cachetes */}
        <circle cx="74" cy="118" r="6" fill="var(--red)" opacity="0.22" />
        <circle cx="126" cy="118" r="6" fill="var(--red)" opacity="0.22" />

        {/* boca: sonrisa suave ↔ sonrisa grande */}
        <path className="av-smile" d="M89 127 Q100 136 111 127" fill="none" stroke={ink} strokeWidth="2.6" strokeLinecap="round" />
        <path className="av-grin" d="M88 126 Q100 142 112 126 Z" fill={ink} />
        <path className="av-grin" d="M91 127.5 H109 Q108 131 100 131.5 Q92 131 91 127.5 Z" fill="#fff" />
      </g>
    </svg>
  );
}

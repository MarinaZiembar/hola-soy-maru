/**
 * Avatar de Maru en estilo retrato plano/geométrico (de hombros para arriba).
 * Cabeza alargada con la cara partida en dos tonos, pelo corto marrón claro con flequillo,
 * pañuelito con nudo, anteojos redondos finos, ojos verde militar, septum y aros.
 * Animación: mira a un lado y al otro, parpadea, levanta las cejas y sonríe.
 */
export default function Avatar({ className = "" }: { className?: string }) {
  const skin = "#f7d3bb";
  const skinShade = "#eebc9f";
  const nose = "#f0a088";
  const hair = "#a57a52";
  const hairShade = "#8a633f";
  const ink = "#141414";
  const navy = "#24283d";
  const eye = "#56613a"; // verde militar

  return (
    <svg viewBox="45 38 310 310" preserveAspectRatio="xMidYMid slice" className={`avatar ${className}`} role="img" aria-label="Avatar de Maru">
      <defs>
        <clipPath id="av-face">
          <rect x="138" y="92" width="124" height="190" rx="60" />
        </clipPath>
      </defs>

      {/* fondo */}
      <rect x="0" y="0" width="400" height="400" fill="var(--blue)" />

      {/* hombros: buzo en bloques */}
      <path d="M60 400 L84 340 Q96 312 140 304 L200 300 L260 304 Q304 312 316 340 L340 400 Z" fill={navy} />
      <path d="M200 300 L260 304 Q304 312 316 340 L340 400 L200 400 Z" fill={ink} opacity="0.55" />
      <path d="M150 304 L200 372 L250 304 L232 300 L200 336 L168 300 Z" fill={ink} />

      {/* cuello */}
      <rect x="172" y="250" width="56" height="62" fill={skinShade} />
      <path d="M172 300 L200 336 L228 300 Z" fill={skinShade} />

      <g className="av-head">
        {/* orejas + aros */}
        <path d="M138 178 a14 18 0 0 0 0 36 Z" fill={skin} />
        <path d="M262 178 a14 18 0 0 1 0 36 Z" fill={skinShade} />
        <circle cx="132" cy="226" r="12" fill="none" stroke="var(--yellow)" strokeWidth="3" />
        <circle cx="268" cy="226" r="12" fill="none" stroke="var(--yellow)" strokeWidth="3" />

        {/* cara partida en dos tonos */}
        <rect x="138" y="92" width="124" height="190" rx="60" fill={skin} />
        <rect x="200" y="92" width="62" height="190" fill={skinShade} clipPath="url(#av-face)" />

        {/* pelo: casquete + flequillo recto con corte en diagonal + patillas */}
        <path d="M132 186 V150 Q132 72 200 70 Q268 72 268 150 V186 L258 186 V146 L142 146 V186 Z" fill={hair} />
        <path d="M200 70 Q268 72 268 150 V186 L258 186 V146 L200 146 Z" fill={hairShade} />
        <path d="M142 112 H258 V140 L236 150 L214 138 L192 152 L170 138 L150 150 L142 146 Z" fill={hair} />
        <path d="M200 112 H258 V140 L236 150 L214 138 L200 146 Z" fill={hairShade} />

        {/* pañuelito: vincha con puntitos + nudo */}
        <path d="M134 116 Q200 64 266 116 L266 100 Q200 48 134 100 Z" fill={ink} />
        <g fill="var(--paper)">
          <circle cx="152" cy="98" r="2.6" />
          <circle cx="172" cy="86" r="2.6" />
          <circle cx="194" cy="80" r="2.6" />
          <circle cx="216" cy="81" r="2.6" />
          <circle cx="238" cy="88" r="2.6" />
          <circle cx="254" cy="99" r="2.6" />
          <circle cx="162" cy="96" r="1.5" />
          <circle cx="206" cy="90" r="1.5" />
          <circle cx="246" cy="98" r="1.5" />
        </g>
        <g className="av-knot">
          <path d="M224 70 L198 50 L204 78 Z" fill={ink} />
          <path d="M228 70 L258 56 L246 82 Z" fill={ink} />
          <circle cx="226" cy="71" r="8" fill={ink} />
          <circle cx="244" cy="66" r="2" fill="var(--paper)" />
        </g>

        {/* cejas */}
        <g className="av-brow">
          <rect x="152" y="160" width="32" height="4" rx="2" fill={hairShade} />
          <rect x="216" y="160" width="32" height="4" rx="2" fill={hairShade} />
        </g>

        {/* ojos verde militar (miran y parpadean) */}
        <g className="av-blink">
          <circle cx="168" cy="186" r="9" fill="#fff" />
          <circle cx="232" cy="186" r="9" fill="#fff" />
          <g className="av-eyes">
            <circle cx="168" cy="186" r="6" fill={eye} />
            <circle cx="232" cy="186" r="6" fill={eye} />
            <circle cx="168" cy="186" r="2.6" fill={ink} />
            <circle cx="232" cy="186" r="2.6" fill={ink} />
          </g>
          <path d="M157 180 Q168 172 179 180" fill="none" stroke={ink} strokeWidth="2" strokeLinecap="round" />
          <path d="M221 180 Q232 172 243 180" fill="none" stroke={ink} strokeWidth="2" strokeLinecap="round" />
        </g>

        {/* anteojos redondos finos */}
        <g fill="none" stroke={ink} strokeWidth="2.4">
          <circle cx="168" cy="186" r="22" />
          <circle cx="232" cy="186" r="22" />
          <path d="M190 184 H210" />
          <path d="M146 182 L136 178" />
          <path d="M254 182 L264 178" />
        </g>

        {/* nariz: rectángulo redondeado */}
        <rect x="191" y="170" width="18" height="56" rx="9" fill={nose} />

        {/* septum */}
        <circle cx="200" cy="232" r="5" fill="none" stroke="#a9aeb3" strokeWidth="2.4" />

        {/* cachetes */}
        <circle cx="160" cy="226" r="12" fill="var(--red)" opacity="0.18" />
        <circle cx="240" cy="226" r="12" fill="var(--red)" opacity="0.18" />

        {/* boca */}
        <path className="av-smile" d="M184 250 Q200 260 216 250" fill="none" stroke={ink} strokeWidth="2.6" strokeLinecap="round" />
        <path className="av-grin" d="M182 247 Q200 270 218 247 Z" fill="#c2412a" />
        <path className="av-grin" d="M186 248 H214 Q211 254 200 254.5 Q189 254 186 248 Z" fill="#fff" />
      </g>
    </svg>
  );
}

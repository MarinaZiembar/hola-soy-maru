/**
 * Avatar de Maru en estilo retrato plano/geométrico (de hombros para arriba).
 * Cabeza alargada con la cara partida en dos tonos, pelo corto marrón claro con flequillo,
 * pañuelito con nudo, anteojos redondos finos, ojos verde militar, septum y aros dorados,
 * hombros descubiertos con los laurelitos tatuados en las clavículas.
 * Animación: mira a un lado y al otro, inclina la cabeza, parpadea y levanta las cejas.
 */
export default function Avatar({ className = "" }: { className?: string }) {
  const skin = "#f7d3bb";
  const skinShade = "#eebc9f";
  const nose = "#f0a088";
  const hair = "#a57a52";
  const hairShade = "#8a633f";
  const ink = "#141414";
    const eye = "#56613a"; // verde militar

  return (
    <svg viewBox="28 30 344 344" preserveAspectRatio="xMidYMid slice" className={`avatar ${className}`} role="img" aria-label="Avatar de Maru">
      <defs>
        <clipPath id="av-face">
          <rect x="138" y="92" width="124" height="190" rx="60" />
        </clipPath>
      </defs>

      {/* fondo */}
      <rect x="0" y="0" width="400" height="400" fill="var(--blue)" />

      {/* hombros descubiertos (cara/cuerpo partidos en dos tonos) */}
      <path d="M58 400 Q70 336 150 322 L172 300 H228 L250 322 Q330 336 342 400 Z" fill={skin} />
      <path d="M200 300 H228 L250 322 Q330 336 342 400 H200 Z" fill={skinShade} />
      <rect x="172" y="250" width="56" height="62" fill={skin} />
      <rect x="200" y="250" width="28" height="62" fill={skinShade} />
      <path d="M172 262 H228 V276 Q200 288 172 276 Z" fill={skinShade} opacity="0.7" />

      {/* tatuajes de clavícula: dos laurelitos */}
      <g fill="none" stroke={ink} strokeWidth="1.6" strokeLinecap="round">
        <g className="av-laurel" transform="translate(0 -8)">
          <path d="M138 346 Q156 334 176 336" />
          <path d="M146 341 q-2 -8 4 -10 q2 7 -4 10 Z" />
          <path d="M156 337 q-1 -8 5 -9 q1 7 -5 9 Z" />
          <path d="M166 336 q0 -8 6 -8 q0 7 -6 8 Z" />
          <path d="M150 340 q4 7 10 5 q-4 -6 -10 -5 Z" />
          <path d="M161 337 q5 6 10 4 q-4 -6 -10 -4 Z" />
        </g>
        <g className="av-laurel" transform="translate(400 -8) scale(-1 1)">
          <path d="M138 346 Q156 334 176 336" />
          <path d="M146 341 q-2 -8 4 -10 q2 7 -4 10 Z" />
          <path d="M156 337 q-1 -8 5 -9 q1 7 -5 9 Z" />
          <path d="M166 336 q0 -8 6 -8 q0 7 -6 8 Z" />
          <path d="M150 340 q4 7 10 5 q-4 -6 -10 -5 Z" />
          <path d="M161 337 q5 6 10 4 q-4 -6 -10 -4 Z" />
        </g>
      </g>

      {/* top con escote amplio (como el retrato de referencia) */}
      <path d="M40 400 L46 344 Q200 372 354 344 L360 400 Z" fill="var(--red)" />
      <path d="M200 358 Q280 356 354 344 L360 400 H200 Z" fill="#d93d16" />

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

        {/* ojos: puntito verde militar con línea de párpado (miran y parpadean) */}
        <g className="av-blink">
          <g className="av-eyes">
            <circle cx="168" cy="188" r="5.5" fill={eye} />
            <circle cx="232" cy="188" r="5.5" fill={eye} />
          </g>
          <path d="M156 180 H180" stroke={ink} strokeWidth="2" strokeLinecap="round" />
          <path d="M220 180 H244" stroke={ink} strokeWidth="2" strokeLinecap="round" />
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
        <circle cx="200" cy="232" r="5" fill="none" stroke="var(--yellow)" strokeWidth="2.6" />

        {/* cachetes */}
        <circle cx="160" cy="226" r="12" fill="var(--red)" opacity="0.18" />
        <circle cx="240" cy="226" r="12" fill="var(--red)" opacity="0.18" />

        {/* boca: una línea */}
        <path d="M188 252 H212" stroke={ink} strokeWidth="2.6" strokeLinecap="round" />
      </g>
    </svg>
  );
}

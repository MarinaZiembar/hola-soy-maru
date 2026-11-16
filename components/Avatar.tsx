/**
 * Avatar de Maru en estilo retrato plano/geométrico (de hombros para arriba).
 * Cara angulosa partida en dos tonos, pelo corto marrón claro con flequillo en picos
 * y costados rapados, pañuelito con nudo, anteojos redondos finos, ojos verde militar,
 * septum y aros dorados, remera roja.
 * Animación: mirada curiosa que recorre a los lados y hacia arriba, cejas que se levantan
 * y parpadeo.
 */
export default function Avatar({ className = "" }: { className?: string }) {
  const skin = "#f2c4a4";
  const skinShade = "#e6ae8c";
  const nose = "#e79a80";
  const noseShade = "#d9876d";
  const hair = "#a57a52";
  const hairShade = "#8c643f";
  const ink = "#141414";
  const eye = "#5b6b2e"; // verde militar
  const red = "#ff4a1c";
  const redShade = "#d93d16";
  const gold = "var(--yellow)";

  return (
    <svg viewBox="40 46 320 320" className={`avatar ${className}`} role="img" aria-label="Avatar de Maru">
      {/* fondo */}
      <rect x="0" y="0" width="400" height="400" fill="var(--blue)" />

      {/* remera: hombros en trapecio, partida en dos tonos */}
      <path d="M84 400 V350 L124 314 L182 298 Q200 312 218 298 L276 314 L316 350 V400 Z" fill={red} />
      <path d="M200 306 Q210 304 218 298 L276 314 L316 350 V400 H200 Z" fill={redShade} />

      {/* cuello */}
      <path d="M180 250 H220 V300 Q200 314 180 300 Z" fill={skin} />
      <path d="M200 250 H220 V300 Q210 307 200 308 Z" fill={skinShade} />
      <path d="M180 262 L200 276 L220 262 V250 H180 Z" fill={noseShade} opacity="0.35" />

      <g className="av-head">
        {/* orejas + aros */}
        <path d="M146 172 H134 L130 198 L140 214 H148 Z" fill={skin} />
        <path d="M254 172 H266 L270 198 L260 214 H252 Z" fill={skinShade} />
        <circle cx="134" cy="222" r="11" fill="none" stroke={gold} strokeWidth="3.2" />
        <circle cx="266" cy="222" r="11" fill="none" stroke={gold} strokeWidth="3.2" />

        {/* cara angulosa (dos tonos) */}
        <path d="M146 130 H254 V222 L224 262 H176 L146 222 Z" fill={skin} />
        <path d="M200 130 H254 V222 L224 262 H200 Z" fill={skinShade} />

        {/* pelo: casquete + costados rapados + flequillo en picos */}
        <path d="M140 196 V128 Q140 92 200 90 Q260 92 260 128 V196 H252 V150 H148 V196 Z" fill={hair} />
        <path d="M200 90 Q260 92 260 128 V196 H252 V150 H200 Z" fill={hairShade} />
        <g fill={hairShade} opacity="0.55">
          {[156, 164, 172, 180, 188].map((y) => (
            <g key={y}>
              <circle cx="143" cy={y} r="1" />
              <circle cx="257" cy={y} r="1" />
            </g>
          ))}
        </g>
        <path d="M148 128 H252 V152 H236 L226 136 L214 152 H200 L192 130 L178 152 H148 Z" fill={hair} />
        <path d="M200 128 H252 V152 H236 L226 136 L214 152 H200 Z" fill={hairShade} />

        {/* pañuelito: vincha con puntitos + nudo */}
        <path d="M140 132 Q200 92 260 124 L262 108 Q200 74 138 116 Z" fill={ink} />
        <g fill="var(--paper)">
          <circle cx="152" cy="118" r="2.6" />
          <circle cx="170" cy="106" r="2.6" />
          <circle cx="190" cy="100" r="2.6" />
          <circle cx="212" cy="99" r="2.6" />
          <circle cx="234" cy="104" r="2.6" />
          <circle cx="252" cy="113" r="2.6" />
          <circle cx="180" cy="110" r="1.5" />
          <circle cx="224" cy="108" r="1.5" />
        </g>
        <g className="av-knot">
          <path d="M226 92 L206 68 L210 98 Z" fill={ink} />
          <path d="M232 92 L262 76 L248 104 Z" fill={ink} />
          <circle cx="229" cy="94" r="8" fill={ink} />
          <circle cx="246" cy="86" r="2" fill="var(--paper)" />
          <circle cx="253" cy="92" r="1.4" fill="var(--paper)" />
        </g>

        {/* cejas arqueadas (se levantan: gesto curioso) */}
        <g className="av-brow" fill={hairShade}>
          <path d="M156 166 Q170 156 186 162 L185 167 Q170 162 157 171 Z" />
          <path d="M214 162 Q230 156 244 166 L243 171 Q230 162 215 167 Z" />
        </g>

        {/* ojos: círculos verde militar (miran y parpadean) */}
        <g className="av-blink">
          <g className="av-eyes">
            <circle cx="172" cy="187" r="8.5" fill={eye} />
            <circle cx="228" cy="187" r="8.5" fill={eye} />
          </g>
        </g>

        {/* anteojos redondos finos */}
        <g fill="none" stroke={ink} strokeWidth="2.4">
          <circle cx="172" cy="187" r="22" />
          <circle cx="228" cy="187" r="22" />
          <path d="M194 184 Q200 179 206 184" />
          <path d="M150 182 L146 178" />
          <path d="M250 182 L254 178" />
        </g>

        {/* nariz: trapecio en dos tonos */}
        <path d="M195 178 H205 L214 228 H186 Z" fill={nose} />
        <path d="M200 178 H205 L214 228 H200 Z" fill={noseShade} />

        {/* septum dorado */}
        <circle cx="200" cy="234" r="6" fill="none" stroke={gold} strokeWidth="3" />

        {/* cachetes */}
        <circle cx="163" cy="222" r="11" fill="var(--red)" opacity="0.2" />
        <circle cx="237" cy="222" r="11" fill="var(--red)" opacity="0.2" />

        {/* boca: sonrisa suave */}
        <path d="M184 247 Q200 256 216 247" fill="none" stroke="#9c4a35" strokeWidth="3" strokeLinecap="round" />
      </g>
    </svg>
  );
}

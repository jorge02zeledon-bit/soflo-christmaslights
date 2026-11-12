/**
 * Illustrated South Florida home at night: roofline lights, wrapped palms,
 * a wreath, pathway stakes. Used in the hero and as a gallery placeholder.
 */
type Palette = "warm" | "candy" | "multi" | "cool";

const PALETTES: Record<Palette, string[]> = {
  warm: ["#ffe39a", "#ffe39a", "#ffd56f"],
  candy: ["#ffffff", "#e4572e"],
  multi: ["#f6c453", "#e4572e", "#2fa36b", "#6fb7ff"],
  cool: ["#dfe9ff", "#bcd4ff"],
};

function bulbsAlong(x1: number, y1: number, x2: number, y2: number, n: number, colors: string[], offset = 0) {
  return Array.from({ length: n }, (_, i) => {
    const t = i / (n - 1);
    return (
      <circle
        key={`${x1}-${y1}-${i}`}
        className="bulb"
        cx={x1 + (x2 - x1) * t}
        cy={y1 + (y2 - y1) * t}
        r="2.4"
        fill={colors[(i + offset) % colors.length]}
        style={{ color: colors[(i + offset) % colors.length] }}
      />
    );
  });
}

function Palm({ x, baseY, h, colors }: { x: number; baseY: number; h: number; colors: string[] }) {
  const top = baseY - h;
  const wraps = Math.floor(h / 14);
  return (
    <g>
      <path d={`M${x - 5} ${baseY} Q ${x} ${top + h / 2} ${x + 2} ${top}`} stroke="#1a2742" strokeWidth="9" fill="none" strokeLinecap="round" />
      {Array.from({ length: wraps }, (_, i) => {
        const t = i / wraps;
        const cy = baseY - t * h;
        const bend = (1 - Math.pow(1 - t, 2)) * 7;
        return (
          <ellipse
            key={i}
            className="bulb"
            cx={x - 5 + bend}
            cy={cy}
            rx="6"
            ry="2"
            fill="none"
            stroke={colors[i % colors.length]}
            strokeWidth="1.6"
            style={{ color: colors[i % colors.length] }}
          />
        );
      })}
      {[-1, -0.5, 0, 0.5, 1].map((d, i) => (
        <path
          key={i}
          d={`M${x + 2} ${top} q ${d * 30} ${-18 + Math.abs(d) * 6} ${d * 46} ${8 + Math.abs(d) * 14}`}
          stroke="#1f3b35"
          strokeWidth="7"
          fill="none"
          strokeLinecap="round"
        />
      ))}
    </g>
  );
}

export function HouseScene({ palette = "warm", className = "", variant = "home" }: { palette?: Palette; className?: string; variant?: "home" | "estate" | "commercial" | "palms" | "megatree" }) {
  const colors = PALETTES[palette];
  return (
    <svg viewBox="0 0 640 400" className={className} role="img" aria-label="Illustration of a South Florida home decorated with professionally installed Christmas lights">
      <defs>
        <linearGradient id="skyGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#0b1222" />
          <stop offset="1" stopColor="#1a2742" />
        </linearGradient>
        <linearGradient id="ground" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#15213a" />
          <stop offset="1" stopColor="#0b1222" />
        </linearGradient>
        <radialGradient id="moon">
          <stop offset="0" stopColor="#ffffff" />
          <stop offset="1" stopColor="#dfe9ff" />
        </radialGradient>
        <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="3" result="b" />
          <feMerge>
            <feMergeNode in="b" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
      <rect width="640" height="400" fill="url(#skyGrad)" />
      {Array.from({ length: 40 }, (_, i) => (
        <circle key={i} cx={(i * 97) % 640} cy={(i * 53) % 150 + 10} r={(i % 3) * 0.4 + 0.5} fill="#ffffff" opacity={0.35 + (i % 4) * 0.12} />
      ))}
      <circle cx="560" cy="60" r="22" fill="url(#moon)" opacity="0.9" />
      <rect y="300" width="640" height="100" fill="url(#ground)" />

      {variant === "megatree" ? (
        <g filter="url(#glow)">
          {Array.from({ length: 11 }, (_, i) => {
            const y = 110 + i * 18;
            const half = 10 + i * 11;
            return bulbsAlong(320 - half, y, 320 + half, y, 4 + i * 2, colors, i);
          })}
          <circle cx="320" cy="98" r="6" fill="#f6c453" className="bulb" />
          <path d="M160 300 Q 320 160 480 300" stroke="#26365a" strokeWidth="6" fill="none" />
          {bulbsAlong(170, 296, 320, 165, 16, colors)}
          {bulbsAlong(320, 165, 470, 296, 16, colors)}
        </g>
      ) : variant === "commercial" ? (
        <g>
          <rect x="120" y="140" width="400" height="160" fill="#111b31" />
          <rect x="120" y="140" width="400" height="18" fill="#1a2742" />
          {[0, 1, 2, 3, 4].map((i) => (
            <rect key={i} x={140 + i * 78} y="175" width="52" height="70" fill="#f6c45322" stroke="#26365a" />
          ))}
          <rect x="300" y="235" width="40" height="65" fill="#0b1222" stroke="#26365a" />
          <g filter="url(#glow)">
            {bulbsAlong(120, 140, 520, 140, 34, colors)}
            {bulbsAlong(120, 158, 520, 158, 34, colors, 1)}
            {bulbsAlong(120, 140, 120, 300, 14, colors)}
            {bulbsAlong(520, 140, 520, 300, 14, colors)}
            {[0, 1, 2, 3, 4].map((i) => bulbsAlong(140 + i * 78, 175, 192 + i * 78, 175, 5, colors, i))}
          </g>
          <Palm x={70} baseY={300} h={150} colors={colors} />
          <Palm x={580} baseY={300} h={170} colors={colors} />
        </g>
      ) : (
        <g>
          {/* house body */}
          {variant === "estate" && <rect x="430" y="150" width="130" height="150" fill="#111b31" />}
          {variant === "estate" && <path d="M420 152 L495 95 L570 152 Z" fill="#1a2742" />}
          <rect x="140" y="190" width="300" height="110" fill="#111b31" />
          <path d="M125 192 L290 95 L455 192 Z" fill="#1a2742" />
          <rect x="190" y="150" width="80" height="60" fill="#0f1830" />
          <path d="M180 152 L230 118 L280 152 Z" fill="#1f2d4d" />
          {/* door and windows */}
          <rect x="275" y="240" width="40" height="60" rx="2" fill="#0b1222" stroke="#26365a" />
          <rect x="170" y="225" width="55" height="40" fill="#f6c4532e" stroke="#26365a" />
          <rect x="365" y="225" width="55" height="40" fill="#f6c4532e" stroke="#26365a" />
          <rect x="205" y="160" width="40" height="30" fill="#f6c45320" stroke="#26365a" />
          {variant === "estate" && <rect x="465" y="200" width="60" height="45" fill="#f6c4532e" stroke="#26365a" />}
          {/* wreath */}
          <circle cx="295" cy="258" r="9" fill="none" stroke="#2fa36b" strokeWidth="4" />
          <circle cx="295" cy="250" r="1.6" fill="#e4572e" />
          <g filter="url(#glow)">
            {/* roofline lights */}
            {bulbsAlong(125, 192, 290, 95, 22, colors)}
            {bulbsAlong(290, 95, 455, 192, 22, colors, 1)}
            {bulbsAlong(180, 152, 230, 118, 7, colors)}
            {bulbsAlong(230, 118, 280, 152, 7, colors, 1)}
            {bulbsAlong(140, 192, 440, 192, 26, colors)}
            {variant === "estate" && bulbsAlong(420, 152, 495, 95, 10, colors)}
            {variant === "estate" && bulbsAlong(495, 95, 570, 152, 10, colors, 1)}
            {variant === "estate" && bulbsAlong(440, 152, 560, 152, 10, colors)}
            {/* garland on columns */}
            {bulbsAlong(260, 240, 260, 300, 6, colors)}
            {bulbsAlong(330, 240, 330, 300, 6, colors)}
            {/* pathway */}
            {[0, 1, 2, 3, 4].map((i) => (
              <g key={i}>
                <line x1={300 - i * 10} y1={310 + i * 16} x2={300 - i * 10} y2={320 + i * 16} stroke="#26365a" strokeWidth="2" />
                <circle className="bulb" cx={300 - i * 10} cy={310 + i * 16} r="2.4" fill={colors[0]} style={{ color: colors[0] }} />
                <line x1={320 + i * 12} y1={310 + i * 16} x2={320 + i * 12} y2={320 + i * 16} stroke="#26365a" strokeWidth="2" />
                <circle className="bulb" cx={320 + i * 12} cy={310 + i * 16} r="2.4" fill={colors[0]} style={{ color: colors[0] }} />
              </g>
            ))}
          </g>
          {/* palms */}
          <Palm x={70} baseY={300} h={180} colors={colors} />
          <Palm x={110} baseY={300} h={130} colors={colors} />
          {variant === "palms" && <Palm x={520} baseY={300} h={160} colors={colors} />}
          <Palm x={590} baseY={300} h={200} colors={colors} />
        </g>
      )}
      {/* path */}
      <path d="M290 300 L250 400 L380 400 L330 300 Z" fill="#141f38" />
    </svg>
  );
}

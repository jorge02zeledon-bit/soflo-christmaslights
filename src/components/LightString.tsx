/**
 * A decorative string of twinkling bulbs. Pure SVG, no JS; the twinkle is CSS.
 */
const COLORS = ["#f6c453", "#e4572e", "#2fa36b", "#f6c453", "#6fb7ff", "#ffe39a"];

export function LightString({ count = 40, className = "" }: { count?: number; className?: string }) {
  const bulbs = Array.from({ length: count }, (_, i) => i);
  return (
    <svg
      className={`h-full w-full ${className}`}
      viewBox={`0 0 ${count * 20} 24`}
      preserveAspectRatio="none"
      aria-hidden="true"
      focusable="false"
    >
      <path
        d={bulbs.map((i) => `${i === 0 ? "M" : "Q"} ${i * 20 + (i === 0 ? 0 : 10)} ${i === 0 ? 2 : 8} ${i === 0 ? "" : `${i * 20 + 20} 2`}`).join(" ")}
        fill="none"
        stroke="#26365a"
        strokeWidth="1.2"
      />
      {bulbs.map((i) => (
        <g key={i} className="bulb" style={{ color: COLORS[i % COLORS.length] }}>
          <line x1={i * 20 + 10} y1="7" x2={i * 20 + 10} y2="11" stroke="#26365a" strokeWidth="1.5" />
          <ellipse cx={i * 20 + 10} cy="15" rx="3.2" ry="4.6" fill="currentColor" />
        </g>
      ))}
    </svg>
  );
}

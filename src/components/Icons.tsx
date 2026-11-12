import type { Service } from "@/content/site";

const common = {
  width: 28,
  height: 28,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true,
};

export function ServiceIcon({ name }: { name: Service["icon"] }) {
  switch (name) {
    case "roof":
      return (
        <svg {...common}>
          <path d="M3 11l9-7 9 7" />
          <path d="M5 10v9h14v-9" />
          <circle cx="7" cy="12.5" r=".9" fill="currentColor" />
          <circle cx="12" cy="12.5" r=".9" fill="currentColor" />
          <circle cx="17" cy="12.5" r=".9" fill="currentColor" />
        </svg>
      );
    case "palm":
      return (
        <svg {...common}>
          <path d="M12 21v-9" />
          <path d="M12 12c-1-4-4-5-7-4 2 0 4 2 5 4" />
          <path d="M12 12c1-4 4-5 7-4-2 0-4 2-5 4" />
          <path d="M12 12c-3-2-6 0-7 3 2-1 4-1 6 0" />
          <path d="M12 12c3-2 6 0 7 3-2-1-4-1-6 0" />
          <path d="M12 12V7" />
        </svg>
      );
    case "wreath":
      return (
        <svg {...common}>
          <circle cx="12" cy="13" r="6.5" />
          <circle cx="12" cy="13" r="3" />
          <path d="M9.5 5.5L12 8l2.5-2.5" />
          <path d="M10 5.5h4" />
          <circle cx="7" cy="11" r=".8" fill="currentColor" />
          <circle cx="17" cy="11" r=".8" fill="currentColor" />
          <circle cx="12" cy="19" r=".8" fill="currentColor" />
        </svg>
      );
    case "business":
      return (
        <svg {...common}>
          <path d="M3 21h18" />
          <path d="M5 21V8l7-4 7 4v13" />
          <path d="M9 21v-5h6v5" />
          <path d="M9 11h2M13 11h2M9 14h2M13 14h2" />
        </svg>
      );
    case "tree":
      return (
        <svg {...common}>
          <path d="M12 3l4 6h-2l3 4h-2l3 4H6l3-4H7l3-4H8z" />
          <path d="M12 17v4" />
          <circle cx="12" cy="3" r=".9" fill="currentColor" />
        </svg>
      );
    case "repair":
      return (
        <svg {...common}>
          <path d="M14.5 6.5a3.5 3.5 0 004.9 4.9L21 13l-2 2-1.6-1.6" />
          <path d="M9 15l-5 5" />
          <path d="M14.5 6.5L7 14" />
          <path d="M3 21l1-4 3 3z" />
        </svg>
      );
  }
}

export function Check() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="mt-0.5 shrink-0 text-gold">
      <path d="M5 12l4 4L19 7" />
    </svg>
  );
}

export function Star() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2.5l2.9 6.2 6.8.8-5 4.7 1.3 6.7L12 17.6 6 20.9l1.3-6.7-5-4.7 6.8-.8z" />
    </svg>
  );
}

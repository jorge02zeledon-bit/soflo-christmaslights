import type { ReactNode } from "react";

export function Section({
  id,
  eyebrow,
  title,
  intro,
  children,
  className = "",
  align = "left",
}: {
  id?: string;
  eyebrow?: string;
  title: string;
  intro?: string;
  children?: ReactNode;
  className?: string;
  align?: "left" | "center";
}) {
  const centered = align === "center";
  return (
    <section id={id} className={`mx-auto max-w-7xl px-5 py-20 sm:px-8 ${className}`}>
      <div className={`max-w-3xl ${centered ? "mx-auto text-center" : ""}`}>
        {eyebrow && <p className="eyebrow">{eyebrow}</p>}
        <h2 className="mt-3 text-3xl font-semibold sm:text-4xl md:text-5xl">{title}</h2>
        {intro && <p className="mt-5 text-lg leading-relaxed text-mist-dim">{intro}</p>}
      </div>
      {children && <div className="mt-12">{children}</div>}
    </section>
  );
}

export function PageHero({ eyebrow, title, intro, children }: { eyebrow: string; title: string; intro: string; children?: ReactNode }) {
  return (
    <section className="sky border-b border-white/5">
      <div className="mx-auto max-w-7xl px-5 pb-16 pt-20 sm:px-8 sm:pt-24">
        <p className="eyebrow">{eyebrow}</p>
        <h1 className="mt-4 max-w-3xl text-4xl font-semibold leading-[1.05] sm:text-5xl md:text-6xl">{title}</h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-mist-dim">{intro}</p>
        {children && <div className="mt-8 flex flex-wrap gap-3">{children}</div>}
      </div>
    </section>
  );
}

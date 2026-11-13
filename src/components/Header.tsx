"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { business, nav } from "@/content/site";
import { LightString } from "@/components/LightString";

export function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const close = () => setOpen(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/5 bg-night-950/80 backdrop-blur supports-[backdrop-filter]:bg-night-950/70">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-5 overflow-hidden opacity-90">
        <LightString count={48} />
      </div>
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-5 pb-4 pt-6 sm:px-8">
        <Link href="/" className="flex items-center gap-3" aria-label={`${business.name} home`}>
          <Logo />
          <span className="font-display text-lg font-semibold leading-none sm:text-xl">
            SoFlo <span className="text-gold">Christmas Lights</span>
          </span>
        </Link>

        <nav aria-label="Primary" className="hidden items-center gap-6 text-sm font-medium text-mist-dim lg:flex">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`transition hover:text-mist ${pathname === item.href ? "text-mist" : ""}`}
              aria-current={pathname === item.href ? "page" : undefined}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a href={business.phoneHref} className="text-sm font-semibold text-mist hover:text-gold">
            {business.phone}
          </a>
          <Link href="/quote" className="btn btn-primary">
            Get a free quote
          </Link>
        </div>

        <button
          type="button"
          className="btn btn-ghost px-3 py-2 lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
            {open ? (
              <path d="M6 6l12 12M18 6L6 18" />
            ) : (
              <path d="M4 7h16M4 12h16M4 17h16" />
            )}
          </svg>
        </button>
      </div>

      {open && (
        <div id="mobile-nav" className="border-t border-white/5 bg-night-900 lg:hidden">
          <nav aria-label="Mobile" className="mx-auto flex max-w-7xl flex-col px-5 py-4 sm:px-8">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-lg px-3 py-3 text-base font-medium text-mist hover:bg-white/5"
                onClick={close}
              >
                {item.label}
              </Link>
            ))}
            <div className="mt-3 flex flex-col gap-3 border-t border-white/5 pt-4">
              <a href={business.phoneHref} className="btn btn-ghost">
                Call {business.phone}
              </a>
              <Link href="/quote" className="btn btn-primary" onClick={close}>
                Get a free quote
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}

function Logo() {
  return (
    <svg width="36" height="36" viewBox="0 0 48 48" aria-hidden="true" className="shrink-0">
      <circle cx="24" cy="24" r="23" fill="#111b31" stroke="#f6c453" strokeWidth="1.5" />
      <path d="M10 30 L24 14 L38 30" fill="none" stroke="#e8ecf5" strokeWidth="2.2" strokeLinejoin="round" />
      <path d="M12 30h24" stroke="#e8ecf5" strokeWidth="2.2" />
      {[14, 19, 24, 29, 34].map((x, i) => (
        <circle key={x} cx={x} cy={30 + ((i % 2) * 2 + 2)} r="1.8" fill={i % 2 ? "#e4572e" : "#f6c453"} />
      ))}
      <path d="M16 22 L24 14 L32 22" fill="none" stroke="#f6c453" strokeWidth="1.2" />
      <circle cx="24" cy="36" r="1.6" fill="#2fa36b" />
    </svg>
  );
}

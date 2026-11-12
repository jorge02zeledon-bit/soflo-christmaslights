import Link from "next/link";
import { business, nav } from "@/content/site";
import { LightString } from "@/components/LightString";
import { cacheLife } from "next/cache";

async function CopyrightYear() {
  "use cache";
  cacheLife("days");
  return <>{new Date().getFullYear()}</>;
}

export function Footer() {
  return (
    <footer className="relative mt-24 border-t border-white/5 bg-night-900">
      <div className="pointer-events-none absolute inset-x-0 -top-3 h-6 overflow-hidden">
        <LightString count={60} />
      </div>
      <div className="mx-auto grid max-w-7xl gap-12 px-5 pb-10 pt-16 sm:px-8 md:grid-cols-4">
        <div className="md:col-span-2">
          <p className="font-display text-2xl font-semibold">
            SoFlo <span className="text-gold">Christmas Lights</span>
          </p>
          <p className="mt-3 max-w-md text-sm leading-relaxed text-mist-dim">{business.description}</p>
          <div className="mt-5 flex flex-wrap gap-3">
            <Link href="/quote" className="btn btn-primary">
              Get a free quote
            </Link>
            <a href={business.phoneHref} className="btn btn-ghost">
              {business.phone}
            </a>
          </div>
        </div>

        <div>
          <p className="eyebrow">Explore</p>
          <ul className="mt-4 space-y-2 text-sm text-mist-dim">
            {nav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="hover:text-mist">
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/quote" className="hover:text-mist">
                Request a quote
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <p className="eyebrow">Contact</p>
          <ul className="mt-4 space-y-2 text-sm text-mist-dim">
            <li>
              <a href={business.phoneHref} className="hover:text-mist">
                {business.phone}
              </a>
            </li>
            <li>
              <a href={`mailto:${business.email}`} className="hover:text-mist">
                {business.email}
              </a>
            </li>
            <li>{business.hours}</li>
            <li>
              Based in {business.address.locality}, {business.address.region}
            </li>
            <li className="flex gap-4 pt-2">
              <a href={business.social.instagram} className="hover:text-mist" rel="noopener noreferrer" target="_blank">
                Instagram
              </a>
              <a href={business.social.facebook} className="hover:text-mist" rel="noopener noreferrer" target="_blank">
                Facebook
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/5">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-5 py-5 text-xs text-mist-dim sm:flex-row sm:items-center sm:justify-between sm:px-8">
          <p>
            © <CopyrightYear /> {business.name}. Licensed &amp; insured. Serving Miami-Dade, Broward and Palm
            Beach.
          </p>
          <p>{business.season}</p>
        </div>
      </div>
    </footer>
  );
}

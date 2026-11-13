import type { Metadata } from "next";
import Link from "next/link";
import { PageHero, Section } from "@/components/Section";
import { FaqJsonLd, FaqList } from "@/components/Faq";
import { HouseScene } from "@/components/HouseScene";
import { Check } from "@/components/Icons";
import { QuoteForm } from "@/components/QuoteForm";
import { business, commercial } from "@/content/site";

export const metadata: Metadata = {
  title: "Commercial Christmas Light Installation",
  description:
    "Commercial holiday lighting for South Florida businesses, HOAs, restaurants, condos and office parks. Site walk, rendered plan, after-hours install, certificates of insurance and priority maintenance.",
};

export default function CommercialPage() {
  return (
    <>
      <PageHero eyebrow={commercial.eyebrow} title={commercial.title} intro={commercial.intro}>
        <Link href="#commercial-quote" className="btn btn-primary">
          Request a site walk
        </Link>
        <a href={business.phoneHref} className="btn btn-ghost">
          Call {business.phone}
        </a>
      </PageHero>

      <section className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-20 sm:px-8 lg:grid-cols-2">
        <div>
          <p className="eyebrow">For businesses & associations</p>
          <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">Built for properties that can&apos;t afford downtime</h2>
          <ul className="mt-8 space-y-5">
            {commercial.highlights.map((h) => (
              <li key={h.title} className="flex gap-3">
                <Check />
                <div>
                  <p className="font-semibold">{h.title}</p>
                  <p className="mt-1 text-sm leading-relaxed text-mist-dim">{h.text}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className="card overflow-hidden rounded-[1.5rem] lg:order-first">
          <HouseScene palette="warm" variant="commercial" className="h-auto w-full" />
        </div>
      </section>

      <section className="border-y border-white/5 bg-night-900/60">
        <Section eyebrow="Who we work with" title="Properties we light" className="py-20">
          <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {commercial.clientTypes.map((c) => (
              <li key={c} className="card flex items-center gap-3 px-5 py-4 text-sm font-medium">
                <span className="h-2 w-2 rounded-full bg-gold shadow-glow-sm" aria-hidden="true" />
                {c}
              </li>
            ))}
          </ul>
        </Section>
      </section>

      <Section eyebrow="How it works" title="From site walk to lit sign in two weeks">
        <ol className="grid gap-8 md:grid-cols-4">
          {commercial.process.map((p) => (
            <li key={p.step}>
              <span className="font-display text-5xl font-semibold text-gold/30">{p.step}</span>
              <h3 className="mt-2 text-xl font-semibold">{p.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-mist-dim">{p.text}</p>
            </li>
          ))}
        </ol>
      </Section>

      <section className="border-y border-white/5 bg-night-900/60">
        <Section eyebrow="Commercial FAQ" title="Questions property managers ask" className="py-20">
          <FaqList items={[...commercial.faqs]} />
        </Section>
      </section>

      <section id="commercial-quote" className="scroll-mt-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 py-20 sm:px-8 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="eyebrow">Commercial quote</p>
            <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">Request a site walk</h2>
            <p className="mt-5 leading-relaxed text-mist-dim">
              Tell us about the property and we schedule a 30-minute walk-through, then send a rendered plan and itemized
              proposal within two business days.
            </p>
            <ul className="mt-8 space-y-3 text-sm text-mist-dim">
              <li>✓ Certificate of insurance on request</li>
              <li>✓ After-hours and overnight installs</li>
              <li>✓ Multi-year pricing available</li>
            </ul>
          </div>
          <QuoteForm variant="commercial" />
        </div>
      </section>

      <FaqJsonLd items={[...commercial.faqs]} />
    </>
  );
}

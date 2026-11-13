import type { Metadata } from "next";
import Link from "next/link";
import { PageHero, Section } from "@/components/Section";
import { PackageCard, ServiceCard } from "@/components/Cards";
import { FaqJsonLd, FaqList } from "@/components/Faq";
import { CtaBand } from "@/components/CtaBand";
import { HouseScene } from "@/components/HouseScene";
import { Check } from "@/components/Icons";
import { QuoteForm } from "@/components/QuoteForm";
import { business, packages, residential, services } from "@/content/site";

export const metadata: Metadata = {
  title: "Residential Christmas Light Installation",
  description:
    "All-inclusive Christmas light installation for South Florida homes: roofline, palm wraps, wreaths, pathways and yard displays, with repairs and January takedown included.",
};

export default function ResidentialPage() {
  const homeServices = residential.serviceSlugs
    .map((slug) => services.find((s) => s.slug === slug))
    .filter((s): s is (typeof services)[number] => Boolean(s));

  return (
    <>
      <PageHero eyebrow={residential.eyebrow} title={residential.title} intro={residential.intro}>
        <Link href="#residential-quote" className="btn btn-primary">
          Get a free home quote
        </Link>
        <Link href="/pricing" className="btn btn-ghost">
          See packages
        </Link>
      </PageHero>

      <section className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-20 sm:px-8 lg:grid-cols-2">
        <div className="card overflow-hidden rounded-[1.5rem]">
          <HouseScene palette="warm" variant="estate" className="h-auto w-full" />
        </div>
        <div>
          <p className="eyebrow">For homeowners</p>
          <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">What every home install includes</h2>
          <ul className="mt-8 space-y-5">
            {residential.highlights.map((h) => (
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
      </section>

      <section className="border-y border-white/5 bg-night-900/60">
        <Section eyebrow="Home services" title="Pick what fits your house" className="py-20">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {homeServices.map((s) => (
              <ServiceCard key={s.slug} service={s} />
            ))}
          </div>
        </Section>
      </section>

      <Section
        eyebrow="Home packages"
        title="Three ways to start"
        intro="Starting prices for a typical South Florida home. Your written quote is exact and itemized."
        align="center"
      >
        <div className="grid gap-6 lg:grid-cols-3">
          {packages.map((p) => (
            <PackageCard key={p.name} pkg={p} />
          ))}
        </div>
      </Section>

      <section className="border-y border-white/5 bg-night-900/60">
        <Section eyebrow="Homeowner FAQ" title="Common questions from homeowners" className="py-20">
          <FaqList items={[...residential.faqs]} />
          <p className="mt-6 text-sm text-mist-dim">
            <Link href="/faq" className="font-semibold text-gold">
              Read all FAQs →
            </Link>
          </p>
        </Section>
      </section>

      <section id="residential-quote" className="scroll-mt-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 py-20 sm:px-8 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="eyebrow">Free home quote</p>
            <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">Tell us about your home</h2>
            <p className="mt-5 leading-relaxed text-mist-dim">
              A few details and we send a written quote within one business day. Prefer to talk?{" "}
              <a href={business.phoneHref} className="font-semibold text-gold">
                Call or text {business.phone}
              </a>
              .
            </p>
          </div>
          <QuoteForm compact />
        </div>
      </section>

      <FaqJsonLd items={[...residential.faqs]} />
      <CtaBand />
    </>
  );
}

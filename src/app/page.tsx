import Link from "next/link";
import { HouseScene } from "@/components/HouseScene";
import { Section } from "@/components/Section";
import { GalleryCard, PackageCard, ServiceCard } from "@/components/Cards";
import { FaqList } from "@/components/Faq";
import { CtaBand } from "@/components/CtaBand";
import { QuoteForm } from "@/components/QuoteForm";
import { business, faqs, gallery, packages, processSteps, services, serviceAreas, whyUs } from "@/content/site";
import { Check } from "@/components/Icons";

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="sky relative overflow-hidden border-b border-white/5">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 pb-20 pt-16 sm:px-8 lg:grid-cols-[1.05fr_1fr] lg:pb-28 lg:pt-24">
          <div>
            <p className="eyebrow">Miami-Dade · Broward · Palm Beach</p>
            <h1 className="mt-4 text-4xl font-semibold leading-[1.05] sm:text-5xl lg:text-6xl xl:text-7xl">
              Christmas lights,{" "}
              <span className="bg-gradient-to-r from-gold via-gold-soft to-gold bg-clip-text text-transparent">
                installed like art.
              </span>
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-mist-dim">
              We design, install, maintain and take down custom holiday lighting for South Florida homes and businesses.
              Commercial-grade LEDs, no ladders, no tangled strands, no stress.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/quote" className="btn btn-primary">
                Get a free quote
              </Link>
              <Link href="/gallery" className="btn btn-ghost">
                See our work
              </Link>
            </div>
            <dl className="mt-12 grid grid-cols-2 gap-6 sm:grid-cols-4">
              {business.stats.map((s) => (
                <div key={s.label}>
                  <dt className="font-display text-2xl font-semibold text-mist sm:text-3xl">{s.value}</dt>
                  <dd className="mt-1 text-xs text-mist-dim sm:text-sm">{s.label}</dd>
                </div>
              ))}
            </dl>
          </div>
          <div className="relative">
            <div className="absolute -inset-6 rounded-[2rem] bg-gold/10 blur-3xl" aria-hidden="true" />
            <div className="card relative overflow-hidden rounded-[1.5rem]">
              <HouseScene palette="warm" className="h-auto w-full" />
            </div>
          </div>
        </div>
      </section>

      {/* Residential vs commercial */}
      <section className="mx-auto max-w-7xl px-5 pt-20 sm:px-8">
        <div className="grid gap-6 lg:grid-cols-2">
          <Link href="/residential" className="card card-hover group relative flex flex-col overflow-hidden">
            <div className="aspect-[16/7] w-full overflow-hidden bg-night-900">
              <HouseScene palette="warm" variant="home" className="h-full w-full object-cover" />
            </div>
            <div className="flex flex-1 flex-col p-7">
              <p className="eyebrow">Residential</p>
              <h2 className="mt-2 text-2xl font-semibold sm:text-3xl">Homes, townhomes &amp; condos</h2>
              <p className="mt-3 text-sm leading-relaxed text-mist-dim">
                All-inclusive packages from $449. Rooflines, palms, wreaths and yard displays, designed on a photo of your
                home, with free repairs and January takedown.
              </p>
              <span className="mt-5 text-sm font-semibold text-gold group-hover:text-gold-soft">
                Residential lighting →
              </span>
            </div>
          </Link>
          <Link href="/commercial" className="card card-hover group relative flex flex-col overflow-hidden">
            <div className="aspect-[16/7] w-full overflow-hidden bg-night-900">
              <HouseScene palette="warm" variant="commercial" className="h-full w-full object-cover" />
            </div>
            <div className="flex flex-1 flex-col p-7">
              <p className="eyebrow">Commercial</p>
              <h2 className="mt-2 text-2xl font-semibold sm:text-3xl">Businesses, HOAs &amp; properties</h2>
              <p className="mt-3 text-sm leading-relaxed text-mist-dim">
                Storefronts, restaurants, office parks and HOA entrances. Site walk, rendered plan, after-hours install,
                certificates of insurance and priority maintenance.
              </p>
              <span className="mt-5 text-sm font-semibold text-gold group-hover:text-gold-soft">
                Commercial lighting →
              </span>
            </div>
          </Link>
        </div>
      </section>

      {/* Services */}
      <Section
        id="services"
        eyebrow="What we do"
        title="Everything from the roofline to the palms"
        intro="Pick a package or mix and match. Every install includes the lights, hardware, in-season repairs and January takedown."
      >
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <ServiceCard key={s.slug} service={s} />
          ))}
        </div>
      </Section>

      {/* Process */}
      <section className="border-y border-white/5 bg-night-900/60">
        <Section eyebrow="How it works" title="Four steps, zero ladders" className="py-20">
          <ol className="grid gap-8 md:grid-cols-4">
            {processSteps.map((p) => (
              <li key={p.step} className="relative">
                <span className="font-display text-5xl font-semibold text-gold/30">{p.step}</span>
                <h3 className="mt-2 text-xl font-semibold">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-mist-dim">{p.text}</p>
              </li>
            ))}
          </ol>
        </Section>
      </section>

      {/* Packages */}
      <Section
        id="pricing"
        eyebrow="Packages"
        title="Transparent pricing, all-inclusive"
        intro="Starting prices for a typical South Florida home. Your written quote is exact and itemized."
        align="center"
      >
        <div className="grid gap-6 lg:grid-cols-3">
          {packages.map((p) => (
            <PackageCard key={p.name} pkg={p} />
          ))}
        </div>
        <p className="mt-8 text-center text-sm text-mist-dim">
          Founding-season rates. Returning clients re-install for roughly 60–70% of year-one pricing.{" "}
          <Link href="/pricing" className="font-semibold text-gold">
            Full pricing details →
          </Link>
        </p>
      </Section>

      {/* Gallery preview */}
      <section className="border-y border-white/5 bg-night-900/60">
        <Section
          eyebrow="Looks we install"
          title="Pick a style, we fit it to your home"
          intro="Illustrated examples of the most requested looks. Photos of this season's installs are added here as they go up."
          className="py-20"
        >
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {gallery.slice(0, 3).map((g, i) => (
              <GalleryCard key={g.title} item={g} index={i} />
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link href="/gallery" className="btn btn-ghost">
              View the full gallery
            </Link>
          </div>
        </Section>
      </section>

      {/* Why us */}
      <Section
        eyebrow="Why us"
        title="A new local company with old-fashioned standards"
        intro="We're starting our first season in South Florida, and we intend to earn every review the hard way: by showing up, doing clean work and answering the phone."
      >
        <div className="grid gap-6 sm:grid-cols-2">
          {whyUs.map((w) => (
            <div key={w.title} className="card flex gap-4 p-6">
              <Check />
              <div>
                <h3 className="text-lg font-semibold">{w.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-mist-dim">{w.text}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Areas */}
      <section className="border-y border-white/5 bg-night-900/60">
        <Section eyebrow="Service area" title="From Jupiter to Cutler Bay" className="py-20">
          <div className="grid gap-8 md:grid-cols-3">
            {serviceAreas.map((a) => (
              <div key={a.county}>
                <h3 className="text-lg font-semibold">{a.county}</h3>
                <p className="mt-2 text-sm leading-relaxed text-mist-dim">{a.cities.slice(0, 8).join(" · ")}</p>
              </div>
            ))}
          </div>
          <p className="mt-8 text-sm text-mist-dim">
            Not listed?{" "}
            <Link href="/service-areas" className="font-semibold text-gold">
              See the full list
            </Link>{" "}
            or ask, we often travel for larger projects.
          </p>
        </Section>
      </section>

      {/* FAQ */}
      <Section eyebrow="FAQ" title="Good questions, straight answers">
        <FaqList items={faqs.slice(0, 5)} />
        <p className="mt-6 text-sm text-mist-dim">
          <Link href="/faq" className="font-semibold text-gold">
            Read all FAQs →
          </Link>
        </p>
      </Section>

      {/* Quote */}
      <section id="quote" className="border-t border-white/5 bg-night-900/60">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 py-20 sm:px-8 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="eyebrow">Free quote</p>
            <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">Tell us about your home</h2>
            <p className="mt-5 leading-relaxed text-mist-dim">
              A few details and we’ll send a written quote within one business day. Prefer to talk?{" "}
              <a href={business.phoneHref} className="font-semibold text-gold">
                Call or text {business.phone}
              </a>
              .
            </p>
            <ul className="mt-8 space-y-3 text-sm text-mist-dim">
              <li>✓ No obligation, no pushy follow-ups</li>
              <li>✓ Photo mock-up before install day</li>
              <li>✓ Licensed, insured, local crews</li>
            </ul>
          </div>
          <QuoteForm compact />
        </div>
      </section>

      <div className="mt-24">
        <CtaBand />
      </div>
    </>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/Section";
import { PackageCard } from "@/components/Cards";
import { CtaBand } from "@/components/CtaBand";
import { Check } from "@/components/Icons";
import { packages, pricingNotes } from "@/content/site";

export const metadata: Metadata = {
  title: "Pricing & Packages",
  description:
    "All-inclusive Christmas light installation packages for South Florida homes, from $899. Lights, install, maintenance, takedown and storage included.",
};

export default function PricingPage() {
  return (
    <>
      <PageHero
        eyebrow="Pricing"
        title="All-inclusive packages, no surprises"
        intro="You never buy lights. Each price covers professional-grade LEDs, custom cutting, installation, in-season repairs and January takedown. Your written quote is exact."
      >
        <Link href="/quote" className="btn btn-primary">
          Get my exact quote
        </Link>
      </PageHero>
      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8">
        <div className="grid gap-6 lg:grid-cols-3">
          {packages.map((p) => (
            <PackageCard key={p.name} pkg={p} />
          ))}
        </div>
        <div className="card mt-14 p-8">
          <h2 className="text-2xl font-semibold">What’s included and how pricing works</h2>
          <ul className="mt-6 grid gap-4 md:grid-cols-2">
            {pricingNotes.map((n) => (
              <li key={n} className="flex gap-3 text-sm leading-relaxed text-mist-dim">
                <Check />
                <span>{n}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>
      <CtaBand />
    </>
  );
}

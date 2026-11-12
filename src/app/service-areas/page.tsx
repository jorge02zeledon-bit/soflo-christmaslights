import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/Section";
import { CtaBand } from "@/components/CtaBand";
import { serviceAreas } from "@/content/site";

export const metadata: Metadata = {
  title: "Service Areas",
  description: "Christmas light installation in Miami-Dade, Broward and Palm Beach counties, including Coral Gables, Pinecrest, Weston, Fort Lauderdale, Parkland and Boca Raton.",
};

export default function ServiceAreasPage() {
  return (
    <>
      <PageHero
        eyebrow="Service areas"
        title="Serving all of South Florida"
        intro="Our crews are based in Broward and run routes north to Jupiter and south to Cutler Bay. If your city isn't listed, ask: we regularly travel for larger projects."
      >
        <Link href="/quote" className="btn btn-primary">
          Check my address
        </Link>
      </PageHero>
      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8">
        <div className="grid gap-6 md:grid-cols-3">
          {serviceAreas.map((a) => (
            <div key={a.county} className="card p-7">
              <h2 className="text-xl font-semibold">{a.county}</h2>
              <ul className="mt-4 grid grid-cols-2 gap-x-4 gap-y-2 text-sm text-mist-dim">
                {a.cities.map((c) => (
                  <li key={c}>{c}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
      <CtaBand />
    </>
  );
}

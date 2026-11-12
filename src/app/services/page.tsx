import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/Section";
import { ServiceCard } from "@/components/Cards";
import { CtaBand } from "@/components/CtaBand";
import { services } from "@/content/site";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Roofline lighting, palm and tree wraps, wreaths and garland, commercial displays, mega trees, plus maintenance, takedown and storage. Professional Christmas light installation in South Florida.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Full-service holiday lighting, start to finish"
        intro="Every service below includes commercial-grade LED lights we own and maintain, professional installation, free in-season repairs and takedown in January."
      >
        <Link href="/quote" className="btn btn-primary">
          Get a free quote
        </Link>
        <Link href="/pricing" className="btn btn-ghost">
          See packages
        </Link>
      </PageHero>
      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8">
        <div className="grid gap-6 md:grid-cols-2">
          {services.map((s) => (
            <div key={s.slug} id={s.slug} className="scroll-mt-28">
              <ServiceCard service={s} detailed />
            </div>
          ))}
        </div>
      </section>
      <CtaBand />
    </>
  );
}

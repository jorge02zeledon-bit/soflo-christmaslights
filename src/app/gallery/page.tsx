import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/Section";
import { GalleryCard } from "@/components/Cards";
import { CtaBand } from "@/components/CtaBand";
import { gallery } from "@/content/site";

export const metadata: Metadata = {
  title: "Gallery",
  description: "Recent Christmas light installations across Miami-Dade, Broward and Palm Beach: rooflines, wrapped palms, wreaths, commercial displays and mega trees.",
};

export default function GalleryPage() {
  return (
    <>
      <PageHero
        eyebrow="Gallery"
        title="Recent installs across South Florida"
        intro="A sample of this season's rooflines, palm wraps, storefronts and yard displays. Every one was designed with the homeowner from a photo mock-up before install day."
      >
        <Link href="/quote" className="btn btn-primary">
          Get a display like this
        </Link>
      </PageHero>
      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {gallery.map((g, i) => (
            <GalleryCard key={g.title} item={g} index={i} />
          ))}
        </div>
      </section>
      <CtaBand />
    </>
  );
}

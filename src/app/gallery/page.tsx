import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/Section";
import { GalleryCard } from "@/components/Cards";
import { CtaBand } from "@/components/CtaBand";
import { gallery } from "@/content/site";

export const metadata: Metadata = {
  title: "Gallery",
  description: "Christmas light styles we install across Miami-Dade, Broward and Palm Beach: rooflines, wrapped palms, wreaths, commercial displays and mega trees.",
};

export default function GalleryPage() {
  return (
    <>
      <PageHero
        eyebrow="Gallery"
        title="The looks we install"
        intro="Illustrated examples of our most requested styles: rooflines, palm wraps, storefronts and yard displays. Photos from this season's installs will be added here as they go up, and you'll see a mock-up of your own home before install day."
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

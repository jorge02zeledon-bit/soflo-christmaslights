import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/Section";
import { FaqJsonLd, FaqList } from "@/components/Faq";
import { CtaBand } from "@/components/CtaBand";
import { business, faqs } from "@/content/site";

export const metadata: Metadata = {
  title: "FAQ",
  description: "Answers about booking, pricing, repairs, insurance, roof safety, takedown and payment for Christmas light installation in South Florida.",
};

export default function FaqPage() {
  return (
    <>
      <PageHero
        eyebrow="FAQ"
        title="Good questions, straight answers"
        intro={`Can't find what you need? Call or text ${business.phone} and a real person will answer.`}
      >
        <Link href="/quote" className="btn btn-primary">
          Get a free quote
        </Link>
      </PageHero>
      <section className="mx-auto max-w-4xl px-5 py-20 sm:px-8">
        <FaqList items={faqs} />
      </section>
      <FaqJsonLd items={faqs} />
      <CtaBand />
    </>
  );
}

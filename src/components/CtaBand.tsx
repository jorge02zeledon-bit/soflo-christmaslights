import Link from "next/link";
import { business } from "@/content/site";

export function CtaBand() {
  return (
    <section className="mx-auto max-w-7xl px-5 sm:px-8">
      <div className="card relative overflow-hidden px-6 py-14 text-center sm:px-12">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(600px_200px_at_50%_0%,rgba(246,196,83,0.18),transparent)]" />
        <p className="eyebrow">Limited install dates</p>
        <h2 className="mx-auto mt-3 max-w-2xl text-3xl font-semibold sm:text-4xl">
          Book now and your lights are up before the neighbors even start untangling theirs.
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-mist-dim">
          Free written quote within one business day. {business.season}
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Link href="/quote" className="btn btn-primary">
            Get a free quote
          </Link>
          <a href={business.phoneHref} className="btn btn-ghost">
            Call {business.phone}
          </a>
        </div>
      </div>
    </section>
  );
}

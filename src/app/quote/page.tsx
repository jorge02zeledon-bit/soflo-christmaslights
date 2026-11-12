import type { Metadata } from "next";
import { QuoteForm } from "@/components/QuoteForm";
import { business } from "@/content/site";

export const metadata: Metadata = {
  title: "Get a Free Quote",
  description: "Request a free, written Christmas light installation quote for your South Florida home or business. Reply within one business day.",
};

export default function QuotePage() {
  return (
    <section className="sky">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-20 sm:px-8 lg:grid-cols-[0.8fr_1.2fr]">
        <div>
          <p className="eyebrow">Free quote</p>
          <h1 className="mt-4 text-4xl font-semibold leading-[1.05] sm:text-5xl">Let’s light up your home</h1>
          <p className="mt-6 leading-relaxed text-mist-dim">
            Share a few details and we’ll reply with a written, itemized quote within one business day. If you have photos
            of the front of your home, reply to our email with them and we’ll include a lighting mock-up.
          </p>
          <div className="card mt-8 p-6 text-sm">
            <p className="font-semibold">Prefer to talk?</p>
            <p className="mt-2 text-mist-dim">
              <a href={business.phoneHref} className="font-semibold text-gold">
                {business.phone}
              </a>
              <br />
              <a href={`mailto:${business.email}`} className="text-gold">
                {business.email}
              </a>
              <br />
              {business.hours}
            </p>
          </div>
          <ul className="mt-8 space-y-3 text-sm text-mist-dim">
            <li>✓ Licensed and insured crews</li>
            <li>✓ Lights, install, repairs and takedown included</li>
            <li>✓ 50% deposit holds your date, balance after you see it lit</li>
          </ul>
        </div>
        <QuoteForm />
      </div>
    </section>
  );
}

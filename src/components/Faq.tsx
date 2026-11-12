export function FaqList({ items }: { items: { q: string; a: string }[] }) {
  return (
    <div className="divide-y divide-white/10 rounded-2xl border border-white/10">
      {items.map((item) => (
        <details key={item.q} className="faq group px-6 py-5">
          <summary className="flex items-center justify-between gap-4 text-left text-base font-semibold sm:text-lg">
            {item.q}
            <svg className="chev shrink-0 text-gold" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M6 9l6 6 6-6" />
            </svg>
          </summary>
          <p className="mt-3 max-w-3xl leading-relaxed text-mist-dim">{item.a}</p>
        </details>
      ))}
    </div>
  );
}

export function FaqJsonLd({ items }: { items: { q: string; a: string }[] }) {
  const data = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((i) => ({
      "@type": "Question",
      name: i.q,
      acceptedAnswer: { "@type": "Answer", text: i.a },
    })),
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />;
}

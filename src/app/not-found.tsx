import Link from "next/link";

export default function NotFound() {
  return (
    <section className="sky">
      <div className="mx-auto max-w-3xl px-5 py-32 text-center sm:px-8">
        <p className="eyebrow">404</p>
        <h1 className="mt-4 text-4xl font-semibold sm:text-5xl">That page’s lights are out</h1>
        <p className="mt-5 text-mist-dim">The page you’re looking for doesn’t exist or has moved.</p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Link href="/" className="btn btn-primary">
            Back home
          </Link>
          <Link href="/quote" className="btn btn-ghost">
            Get a quote
          </Link>
        </div>
      </div>
    </section>
  );
}

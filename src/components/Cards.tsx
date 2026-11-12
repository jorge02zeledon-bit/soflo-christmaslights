import Link from "next/link";
import type { GalleryItem, Package, Service } from "@/content/site";
import { Check, ServiceIcon, Star } from "@/components/Icons";
import { HouseScene } from "@/components/HouseScene";

export function ServiceCard({ service, detailed = false }: { service: Service; detailed?: boolean }) {
  return (
    <article className="card card-hover flex h-full flex-col p-6">
      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gold/10 text-gold">
        <ServiceIcon name={service.icon} />
      </div>
      <h3 className="mt-5 text-xl font-semibold">{service.title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-mist-dim">{service.summary}</p>
      {detailed ? (
        <ul className="mt-5 space-y-2 text-sm">
          {service.details.map((d) => (
            <li key={d} className="flex gap-2">
              <Check />
              <span>{d}</span>
            </li>
          ))}
        </ul>
      ) : (
        <Link href={`/services#${service.slug}`} className="mt-5 text-sm font-semibold text-gold hover:text-gold-soft">
          Learn more →
        </Link>
      )}
    </article>
  );
}

export function PackageCard({ pkg }: { pkg: Package }) {
  return (
    <article
      className={`card card-hover relative flex h-full flex-col p-7 ${pkg.highlighted ? "border-gold/50 bg-gradient-to-b from-gold/10 to-transparent" : ""}`}
    >
      {pkg.highlighted && (
        <span className="absolute -top-3 left-6 rounded-full bg-gold px-3 py-1 text-xs font-bold uppercase tracking-wide text-night-950">
          Most popular
        </span>
      )}
      <h3 className="text-xl font-semibold">{pkg.name}</h3>
      <p className="mt-1 text-sm text-mist-dim">{pkg.priceNote}</p>
      <p className="mt-5 font-display text-4xl font-semibold text-gold">{pkg.price}</p>
      <p className="mt-4 text-sm leading-relaxed text-mist-dim">{pkg.description}</p>
      <ul className="mt-6 space-y-2.5 text-sm">
        {pkg.features.map((f) => (
          <li key={f} className="flex gap-2">
            <Check />
            <span>{f}</span>
          </li>
        ))}
      </ul>
      <Link href="/quote" className={`btn mt-8 w-full ${pkg.highlighted ? "btn-primary" : "btn-ghost"}`}>
        Quote this package
      </Link>
    </article>
  );
}

export function TestimonialCard({ t }: { t: { quote: string; name: string; location: string; package: string } }) {
  return (
    <figure className="card flex h-full flex-col p-6">
      <div className="flex gap-0.5 text-gold" aria-label="5 out of 5 stars">
        {[0, 1, 2, 3, 4].map((i) => (
          <Star key={i} />
        ))}
      </div>
      <blockquote className="mt-4 flex-1 text-[15px] leading-relaxed text-mist">“{t.quote}”</blockquote>
      <figcaption className="mt-5 text-sm">
        <span className="font-semibold">{t.name}</span>
        <span className="text-mist-dim">
          {" "}
          · {t.location} · {t.package}
        </span>
      </figcaption>
    </figure>
  );
}

const SCENE_MAP: Record<GalleryItem["scene"], { variant: "home" | "estate" | "commercial" | "palms" | "megatree"; palette: "warm" | "candy" | "multi" | "cool" }> = {
  roofline: { variant: "home", palette: "warm" },
  estate: { variant: "estate", palette: "warm" },
  palms: { variant: "palms", palette: "cool" },
  commercial: { variant: "commercial", palette: "warm" },
  wreath: { variant: "home", palette: "candy" },
  megatree: { variant: "megatree", palette: "multi" },
};

export function GalleryCard({ item, index }: { item: GalleryItem; index: number }) {
  const scene = SCENE_MAP[item.scene];
  const palette = index % 7 === 6 ? "multi" : scene.palette;
  return (
    <figure className="card card-hover overflow-hidden">
      <div className="aspect-[16/10] w-full overflow-hidden bg-night-900">
        {item.src ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={item.src} alt={item.title} className="h-full w-full object-cover" loading="lazy" />
        ) : (
          <HouseScene variant={scene.variant} palette={palette} className="h-full w-full" />
        )}
      </div>
      <figcaption className="p-5">
        <p className="font-semibold">{item.title}</p>
        <p className="mt-1 text-sm text-mist-dim">{item.location}</p>
        <div className="mt-3 flex flex-wrap gap-2">
          {item.tags.map((tag) => (
            <span key={tag} className="rounded-full border border-white/10 px-2.5 py-0.5 text-xs text-mist-dim">
              {tag}
            </span>
          ))}
        </div>
      </figcaption>
    </figure>
  );
}

import type { Metadata, Viewport } from "next";
import { Fraunces, Inter } from "next/font/google";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { business } from "@/content/site";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  display: "swap",
  axes: ["opsz", "SOFT"],
});

export const metadata: Metadata = {
  metadataBase: new URL(business.url),
  title: {
    default: `${business.name} | Christmas Light Installation in South Florida`,
    template: `%s | ${business.name}`,
  },
  description: business.description,
  keywords: [
    "Christmas light installation",
    "holiday lighting",
    "Christmas lights Miami",
    "Christmas lights Fort Lauderdale",
    "Christmas lights Boca Raton",
    "palm tree lighting",
    "roofline lighting",
    "South Florida",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: business.name,
    title: `${business.name} | Christmas Light Installation`,
    description: business.description,
  },
  twitter: {
    card: "summary_large_image",
    title: business.name,
    description: business.tagline,
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#070b16",
};

const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "HomeAndConstructionBusiness",
  name: business.name,
  description: business.description,
  url: business.url,
  telephone: business.phone,
  email: business.email,
  foundingDate: String(business.founded),
  address: {
    "@type": "PostalAddress",
    addressLocality: business.address.locality,
    addressRegion: business.address.region,
    addressCountry: business.address.country,
  },
  areaServed: ["Miami-Dade County", "Broward County", "Palm Beach County"],
  openingHours: "Mo-Sa 08:00-19:00",
  priceRange: "$$",
  sameAs: [business.social.instagram, business.social.facebook],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${inter.variable} ${fraunces.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-gold focus:px-4 focus:py-2 focus:text-night-950"
        >
          Skip to content
        </a>
        <Header />
        <main id="main" className="flex-1">
          {children}
        </main>
        <Footer />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
        />
      </body>
    </html>
  );
}

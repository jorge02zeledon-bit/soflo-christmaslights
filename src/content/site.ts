/**
 * Single source of truth for everything a business owner would want to edit:
 * contact details, service area, packages, prices, FAQs and gallery captions.
 * Change values here and every page updates.
 */

export const business = {
  name: "SoFlo Christmas Lights",
  shortName: "SoFlo Lights",
  tagline: "Professional Christmas light installation across South Florida",
  description:
    "Custom-fit, professionally installed Christmas lights for homes and businesses in Miami-Dade, Broward and Palm Beach. We design, install, maintain, take down and store your display so all you do is enjoy it.",
  phone: "(786) 564-1647",
  phoneHref: "tel:+17865641647",
  email: "jorge01zeledon@gmail.com",
  // Set NEXT_PUBLIC_SITE_URL in production; this is only the fallback.
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://soflochristmaslights.com",
  address: {
    locality: "Fort Lauderdale",
    region: "FL",
    country: "US",
  },
  hours: "Mon – Sat, 8am – 7pm",
  season: "Installs run October through mid-December. Takedowns in January.",
  social: {
    instagram: "https://instagram.com/soflochristmaslights",
    instagramHandle: "@soflochristmaslights",
  },
  /** Short trust points shown under the hero. Keep them honest and specific. */
  stats: [
    { value: "Free", label: "Written quote in 1 business day" },
    { value: "48 hr", label: "Repair guarantee all season" },
    { value: "$0", label: "Lights to buy or store" },
    { value: "Local", label: "Owner-operated, insured crew" },
  ],
} as const;

export const nav = [
  { href: "/residential", label: "Residential" },
  { href: "/commercial", label: "Commercial" },
  { href: "/services", label: "Services" },
  { href: "/pricing", label: "Pricing" },
  { href: "/gallery", label: "Gallery" },
  { href: "/faq", label: "FAQ" },
] as const;

/** Links shown in the footer in addition to the main nav. */
export const footerLinks = [{ href: "/service-areas", label: "Service Areas" }] as const;

export type Service = {
  slug: string;
  title: string;
  summary: string;
  details: string[];
  icon: "roof" | "palm" | "wreath" | "business" | "tree" | "repair";
};

export const services: Service[] = [
  {
    slug: "roofline",
    title: "Roofline & Architectural Lighting",
    summary:
      "Crisp, custom-cut C9 lines along every ridge, eave and gable, clipped so they look painted on.",
    details: [
      "Commercial-grade C9 LED bulbs, cut to the exact length of your roofline",
      "Color options: warm white, cool white, red & white, multicolor, or custom",
      "Hidden wiring, matched clips for tile, shingle, metal and flat roofs",
      "Timer or smart controller included",
    ],
    icon: "roof",
  },
  {
    slug: "palms-and-trees",
    title: "Palm & Tree Wrapping",
    summary:
      "Tight, even trunk wraps and canopy lighting that turn your palms into the focal point of the street.",
    details: [
      "Spiral trunk wraps on royal, coconut, foxtail and date palms",
      "Canopy and branch wraps for oaks, mahoganies and ficus",
      "Mini-light and C7 options to match your roofline color",
      "Safe, tree-friendly attachment, no nails or screws",
    ],
    icon: "palm",
  },
  {
    slug: "wreaths-and-garland",
    title: "Wreaths, Garland & Accents",
    summary:
      "Pre-lit wreaths, garland on columns and railings, and ground stakes to light pathways and hedges.",
    details: [
      "Lit wreaths from 24\" to 72\" for gables, garages and entries",
      "Garland for columns, railings, balconies and doorways",
      "Pathway stakes, hedge nets and landscape uplighting",
      "Bows and ornaments in classic red, gold or coastal tones",
    ],
    icon: "wreath",
  },
  {
    slug: "commercial",
    title: "Commercial & HOA Displays",
    summary:
      "Storefronts, office parks, restaurants, HOA entrances and condo buildings, scheduled around your hours.",
    details: [
      "Site walk and lighting plan with a rendered mock-up",
      "Lift and bucket-truck work for multi-story buildings",
      "After-hours installs, certificates of insurance on request",
      "Multi-year contracts with locked-in pricing",
    ],
    icon: "business",
  },
  {
    slug: "yard-displays",
    title: "Yard Displays & Mega Trees",
    summary:
      "Statement pieces that make the neighbors stop: mega trees, lit arches, and animated figures.",
    details: [
      "12' to 30' mega trees built from LED light strands",
      "Lit archways over driveways and walkways",
      "Reindeer, sleighs, nativity scenes and inflatables staged and secured",
      "Hurricane-season aware staking and ballast",
    ],
    icon: "tree",
  },
  {
    slug: "maintenance",
    title: "Maintenance, Takedown & Storage",
    summary:
      "If a bulb goes out, we come back. After the holidays we take everything down and store it for you.",
    details: [
      "Free service calls all season long, fixed within 48 hours",
      "Takedown scheduled in January, no ladders for you",
      "Labeled, climate-controlled storage until next season",
      "Early-bird rebooking discounts for returning clients",
    ],
    icon: "repair",
  },
];

export const processSteps = [
  {
    step: "01",
    title: "Free quote",
    text: "Send us your address and a few photos, or book a 15-minute site visit. You get a written quote within one business day.",
  },
  {
    step: "02",
    title: "Design together",
    text: "We mark up a photo of your home with the lines, colors and accents you want, and adjust until you love it.",
  },
  {
    step: "03",
    title: "Install day",
    text: "Our insured crew installs in a few hours, tests every strand after dark, and sets your timer.",
  },
  {
    step: "04",
    title: "Enjoy, then relax",
    text: "We handle any repairs all season. In January we take it all down and store it for next year.",
  },
] as const;

export type Package = {
  name: string;
  price: string;
  priceNote: string;
  description: string;
  features: string[];
  highlighted?: boolean;
};

export const packages: Package[] = [
  {
    name: "Classic Roofline",
    price: "from $449",
    priceNote: "Most single-story homes",
    description:
      "Clean C9 roofline lighting on the front of the home. The look that started it all.",
    features: [
      "Front roofline, eaves and gables",
      "Choice of warm white, cool white or multicolor",
      "Timer included",
      "Install, maintenance and takedown",
    ],
  },
  {
    name: "Signature",
    price: "from $849",
    priceNote: "Best value for most homes",
    description:
      "Full roofline plus wrapped palms and a lit wreath for a complete, balanced display.",
    features: [
      "Full front & side rooflines",
      "Up to 3 palm or tree wraps",
      "One 36\" lit wreath or garland accent",
      "Pathway or hedge lighting",
      "Smart controller with app scheduling",
      "Install, maintenance, takedown and storage",
    ],
    highlighted: true,
  },
  {
    name: "Showstopper",
    price: "from $1,599",
    priceNote: "Two-story homes, estates & corner lots",
    description:
      "Every roofline, every palm, plus a yard centerpiece. Fully custom, designed with you.",
    features: [
      "All rooflines, dormers and peaks",
      "Unlimited palm, tree and hedge wraps",
      "Mega tree, arches or animated display",
      "Garland on columns, railings and balconies",
      "Priority install window",
      "Install, maintenance, takedown and storage",
    ],
  },
];

export const pricingNotes = [
  "Founding-season pricing: we're a new local company and these are our first-year rates. Book early and your price is locked for the season.",
  "Prices include professional-grade LED lights, all hardware, installation, in-season maintenance and January takedown. You never buy or store lights.",
  "Returning clients re-install at roughly 60–70% of the first-year price because the lights are already cut to your home.",
  "Two-story homes, tile roofs and flat roofs may carry a small lift or safety surcharge; it is always itemized on your quote.",
  "Commercial and HOA pricing is quoted after a site walk.",
];

/**
 * Why-us points shown on the home page in place of reviews until the first
 * season's customers can be quoted.
 */
export const whyUs = [
  {
    title: "Owner on every job",
    text: "You deal with the person who designs, installs and stands behind your display, not a call center.",
  },
  {
    title: "Professional-grade LEDs",
    text: "Commercial C9 bulbs and mini lights that stay bright, run cool and use a fraction of the power of store-bought strands.",
  },
  {
    title: "Repairs within 48 hours",
    text: "If a bulb or section goes dark, text us. We come back and fix it free, usually the next day.",
  },
  {
    title: "Takedown and storage included",
    text: "In January we take everything down, label it and store it. Next year's install is faster and cheaper.",
  },
] as const;

export const serviceAreas = [
  {
    county: "Miami-Dade County",
    cities: [
      "Miami",
      "Coral Gables",
      "Pinecrest",
      "Palmetto Bay",
      "Key Biscayne",
      "Miami Beach",
      "Doral",
      "Aventura",
      "Kendall",
      "Cutler Bay",
      "Miami Lakes",
      "Hialeah",
    ],
  },
  {
    county: "Broward County",
    cities: [
      "Fort Lauderdale",
      "Weston",
      "Davie",
      "Plantation",
      "Pembroke Pines",
      "Hollywood",
      "Parkland",
      "Coral Springs",
      "Cooper City",
      "Southwest Ranches",
      "Lighthouse Point",
      "Pompano Beach",
    ],
  },
  {
    county: "Palm Beach County",
    cities: [
      "Boca Raton",
      "Delray Beach",
      "Boynton Beach",
      "Wellington",
      "West Palm Beach",
      "Palm Beach Gardens",
      "Jupiter",
      "Lake Worth Beach",
    ],
  },
];

export const faqs = [
  {
    q: "When should I book?",
    a: "Our calendar fills from early October. Booking by mid-October gets you the best install dates and early-bird pricing. We do take late bookings through the first week of December when crews have room.",
  },
  {
    q: "Do I have to buy the lights?",
    a: "No. Every package includes commercial-grade LED lights that we own, cut and maintain. You pay for the service, not the inventory, and you never need a garage shelf for tangled strands again.",
  },
  {
    q: "What if a bulb or section goes out?",
    a: "Call or text us. Repairs are free all season and we aim to fix anything within 48 hours, usually faster. Most issues are resolved in a single quick visit.",
  },
  {
    q: "Are you licensed and insured?",
    a: "Yes. We carry general liability and workers' compensation coverage, and we can provide a certificate of insurance for HOAs and commercial properties on request.",
  },
  {
    q: "How are the lights attached? Will it damage my roof or palms?",
    a: "We use clips designed for your exact roof type (barrel tile, flat tile, shingle, metal or flat) and never use nails, screws or staples. Palms are wrapped with soft ties that come off clean in January.",
  },
  {
    q: "Can I pick colors and a style?",
    a: "Absolutely. We'll mark up a photo of your home showing the lines, bulb colors and accents before install day. Warm white is the most popular, but red and white, multicolor and custom color schemes are all available.",
  },
  {
    q: "When do the lights come down?",
    a: "Takedowns run from the first week of January through the end of the month. Tell us if you prefer earlier or later and we'll schedule around you.",
  },
  {
    q: "What about hurricane season or storms?",
    a: "Our season starts after peak hurricane season, but South Florida storms still happen. Everything is secured for wind, and if a storm damages your display we repair it at no charge.",
  },
  {
    q: "How is payment handled?",
    a: "A 50% deposit reserves your install date; the balance is due after the lights are installed and you've seen them lit. We accept card, Zelle and check.",
  },
];

export type GalleryItem = {
  title: string;
  /** Short subtitle: the look, or the city once it is a real photo. */
  subtitle: string;
  tags: string[];
  /** Palette used to render the placeholder scene until a real photo is added. */
  scene: "roofline" | "palms" | "estate" | "commercial" | "wreath" | "megatree";
  /** Optional path under /public, e.g. "/gallery/coral-gables.jpg". */
  src?: string;
};

export const gallery: GalleryItem[] = [
  { title: "Warm white roofline + wrapped palms", subtitle: "The classic South Florida look", tags: ["Roofline", "Palms"], scene: "roofline" },
  { title: "Two-story, every peak outlined", subtitle: "Garland on columns, wreath on the gable", tags: ["Roofline", "Garland", "Wreath"], scene: "estate" },
  { title: "Cool white palm spiral wraps", subtitle: "Trunk wraps that stand on their own", tags: ["Palms"], scene: "palms" },
  { title: "Storefront & patio façade", subtitle: "Restaurants, offices and HOA entrances", tags: ["Commercial"], scene: "commercial" },
  { title: "Red & white candy-cane roofline", subtitle: "With pathway stakes to the front door", tags: ["Roofline", "Pathway"], scene: "wreath" },
  { title: "Mega tree with lit driveway arch", subtitle: "A yard centerpiece the street notices", tags: ["Yard Display", "Mega Tree"], scene: "megatree" },
  { title: "Multicolor classic", subtitle: "Traditional colors on barrel tile", tags: ["Roofline"], scene: "roofline" },
  { title: "Commercial building with palms", subtitle: "Multi-story façades and medians", tags: ["Commercial", "Palms"], scene: "commercial" },
  { title: "Balcony garland and oversized wreath", subtitle: "Condos and townhomes", tags: ["Garland", "Wreath"], scene: "wreath" },
];

/* ------------------------------------------------------------------ */
/* Residential and commercial pages                                    */
/* ------------------------------------------------------------------ */

export const residential = {
  eyebrow: "Residential",
  title: "Holiday lighting for your home, handled start to finish",
  intro:
    "Rooflines, palms, wreaths, pathways and yard displays for single-family homes, townhomes and condos across South Florida. We bring the lights, install them, fix anything that goes dark, and take it all down in January.",
  highlights: [
    {
      title: "Designed on a photo of your home",
      text: "Before install day you see a mock-up showing exactly which lines get lit, in which colors, so there are no surprises after dark.",
    },
    {
      title: "Nothing to buy, nothing to store",
      text: "We own the lights, clips and controllers. You pay one all-inclusive price and never touch a tangled strand.",
    },
    {
      title: "Roof-safe installation",
      text: "Clips matched to barrel tile, flat tile, shingle or metal. No nails, screws or staples, and soft ties on palms.",
    },
    {
      title: "Set-and-forget timers",
      text: "Lights come on at dusk and off when you choose. Signature and Showstopper packages add app control from your phone.",
    },
    {
      title: "Free repairs all season",
      text: "A bulb out or a section dark? Text us and we are back within 48 hours, usually the next day, at no charge.",
    },
    {
      title: "Takedown in January",
      text: "We schedule removal around you, label everything and store it, so next year's install is quicker and cheaper.",
    },
  ],
  serviceSlugs: ["roofline", "palms-and-trees", "wreaths-and-garland", "yard-displays", "maintenance"],
  faqs: [
    {
      q: "Do you work with HOA rules?",
      a: "Yes. Tell us your HOA's guidelines on colors, dates or placement and we design within them. We can also provide a certificate of insurance if your association asks for one.",
    },
    {
      q: "Can you match what my neighbors have?",
      a: "Absolutely. Send us a photo of a display you like and we will quote the same look fitted to your home.",
    },
    {
      q: "Do I need to be home for the install?",
      a: "No. We only need access to an outdoor outlet and the front of the property. Most installs take two to four hours and we text you photos when the lights are tested after dark.",
    },
  ],
} as const;

export const commercial = {
  eyebrow: "Commercial",
  title: "Holiday lighting that brings customers through the door",
  intro:
    "Storefronts, restaurants, office parks, HOA entrances, condo buildings, car dealerships and churches. We plan, install and maintain commercial displays on your schedule, with the paperwork your property manager expects.",
  highlights: [
    {
      title: "Site walk and rendered plan",
      text: "We walk the property with you, measure, and deliver a lighting plan with a visual mock-up and an itemized proposal.",
    },
    {
      title: "Installed around your hours",
      text: "Early mornings, after close or overnight. We stage equipment so your entrances, parking and customers are never blocked.",
    },
    {
      title: "Lift and bucket-truck capable",
      text: "Multi-story façades, tall palms, signage and parking-lot trees are all within reach, with fall protection on every job.",
    },
    {
      title: "Certificates of insurance",
      text: "General liability and workers' compensation documentation sent to your landlord, HOA or property manager on request.",
    },
    {
      title: "Priority maintenance",
      text: "Commercial displays get same-day or next-day response, because a dark sign on a Friday night costs you money.",
    },
    {
      title: "Multi-year pricing",
      text: "Lock in your rate for two or three seasons. Returning displays install faster and cost less each year.",
    },
  ],
  clientTypes: [
    "Restaurants & bars",
    "Retail storefronts & plazas",
    "HOA entrances & medians",
    "Condo & apartment buildings",
    "Office parks & medical centers",
    "Car dealerships",
    "Hotels & event venues",
    "Churches & schools",
  ],
  process: [
    { step: "01", title: "Site walk", text: "A 30-minute visit to measure, check power and hear what you want the property to say in December." },
    { step: "02", title: "Proposal", text: "A rendered plan with itemized pricing, install dates and maintenance terms, usually within two business days." },
    { step: "03", title: "Install", text: "Scheduled around your operating hours, tested after dark, controllers set to your schedule." },
    { step: "04", title: "Season support & removal", text: "Priority repairs through the season, then removal and storage in January on a date you choose." },
  ],
  faqs: [
    {
      q: "How is commercial pricing determined?",
      a: "By linear footage of lit roofline and signage, number and height of trees, lift requirements and install-hour constraints. Every proposal is itemized so you can adjust scope before approving.",
    },
    {
      q: "Can you invoice the business or the HOA?",
      a: "Yes. We invoice the entity of your choice, accept ACH, card and check, and can split billing across seasons for multi-year agreements.",
    },
    {
      q: "What about permits and landlord approval?",
      a: "Most temporary holiday lighting does not require a permit, but we check local rules for your address and supply whatever your landlord or association needs to sign off.",
    },
    {
      q: "How early should a business book?",
      a: "Commercial installs are scheduled first, typically late October through mid-November so the display is up before Thanksgiving. Contact us by early October for the best dates.",
    },
  ],
} as const;

# SoFlo Christmas Lights

Marketing website for a South Florida Christmas light installation business.
Built with Next.js 16 (App Router), React 19, TypeScript and Tailwind CSS 4.

## Pages

| Route | Purpose |
| --- | --- |
| `/` | Home: hero, services, process, packages, gallery preview, reviews, service area, FAQ, quote form |
| `/residential` | Home-owner page: what's included, home services, packages, homeowner FAQ, quote form |
| `/commercial` | Business page: benefits, property types, commercial process, FAQ, commercial quote form |
| `/services` | All six services with details |
| `/pricing` | Three packages plus pricing notes |
| `/gallery` | Install gallery (illustrated placeholders until photos are added) |
| `/service-areas` | Cities served by county |
| `/faq` | Full FAQ with FAQ structured data |
| `/quote` | Quote request form |

Also generated: `/sitemap.xml`, `/robots.txt`, a favicon and an Open Graph share image.

## Edit the content

Everything a business owner would change lives in one file:
**`src/content/site.ts`**. Phone, email, hours, social links, services, packages
and prices, why-us points, cities, FAQs and gallery captions all come from there.
Quote-form dropdown options live in `src/content/quote-options.ts`.

There is no reviews section yet. Once the first customers are in, add a
`testimonials` array to `site.ts` and a section on the home page.

### Adding real photos

Drop images into `public/gallery/` and set `src` on the matching entry in the
`gallery` array in `src/content/site.ts`, for example
`src: "/gallery/coral-gables.jpg"`. Entries without `src` show an illustrated
night scene instead.

## Quote form

The form posts to a Server Action (`src/app/actions/quote.ts`) that validates
the fields, drops spam using a honeypot field, and emails the request through
[Resend](https://resend.com). Without `RESEND_API_KEY` and `QUOTE_TO_EMAIL`
set, submissions are logged to the server console so the site still works.

## Run locally

```bash
npm install
cp .env.example .env.local
npm run dev
```

Open http://localhost:3000.

## Deploy

Push to GitHub and import the repository in Vercel. Set these environment
variables in the Vercel project:

- `NEXT_PUBLIC_SITE_URL`: your production URL
- `RESEND_API_KEY`, `QUOTE_TO_EMAIL`, `QUOTE_FROM_EMAIL`: quote form delivery

No database or other services are required.

## Scripts

- `npm run dev`: development server
- `npm run build`: production build
- `npm run start`: serve the production build
- `npm run lint`: ESLint

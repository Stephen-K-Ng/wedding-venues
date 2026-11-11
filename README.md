# VenueFind: Napa & Sonoma wedding directory

Existing Claude-built MVP continued in place. Next.js App Router, React, TypeScript and Tailwind; 50 static venue records in `lib/venues.ts`. No paid APIs or new runtime dependencies added.

## Run in VS Code

Open this project folder, open Terminal, then run `npm ci` and `npm run dev`. Visit http://localhost:3000. `app/` contains pages, `components/` reusable UI, and `lib/` data and validation.

Checks: `npm run lint`, `npm run build`, `node --experimental-strip-types --test tests/inquiries.test.mjs` (Node 24).

## Inquiry storage setup

Inquiries are disabled by default. The disabled view does not collect contact information.

1. Use an existing Supabase project or create one under your own account. Review its current plan and terms yourself; no paid subscription is required by this code.
2. Apply `database/inquiries.sql` once in its SQL editor. This creates a private table and a service-only, transaction-safe submission function. No public SELECT or INSERT policies exist.
3. Copy `.env.example` to `.env.local` locally; add the same values to Vercel's server environment. Use the project's URL and server service-role key, a random 32+ byte hash secret, and an operator support email. Never commit keys or put them in NEXT_PUBLIC variables.
4. Set INQUIRIES_ENABLED=true only after testing the SQL and establishing an operator workflow for reviewing requests. Rebuild/redeploy after changing settings because venue detail pages are pre-rendered.
5. Submit synthetic data first. Confirm one private database row, no public read access, the fourth request per email within an hour gets 429, and service outages never display success. Verify on a preview deployment before enabling production.
6. The directory operator reviews requests in Supabase; this implementation does not email venues or offer booking. Review requests regularly and delete resolved inquiries within 90 days. Retention is an operator procedure, not an automated job.

The API enforces same-origin JSON requests, a 12KB streamed body cap, server validation, a honeypot, consent and a persistent three-per-email/hour limit. The limit does not stop distributed spam with different email addresses; add a managed challenge before promoting collection widely. Personal data is not logged by application code. An ambiguous network timeout can leave a saved row even if the browser reports an error; operator review may need to deduplicate retries.

## Content and SEO

Original records and numeric routes are retained. Inherited prices are explicitly unverified prototype estimates; Stanly Ranch instead uses a source-linked quote policy checked 2026-11-10. No unsupported ratings/review counts are displayed. Photos are stock inspiration. Capacities, amenities, addresses, descriptions and wedding eligibility need venue-by-venue verification. Original data is retained for future research, not treated as proof.

The official Stanly policy is https://auberge.com/stanly-ranch/weddings-faq/ (date-dependent prices and required room blocks). It does not support the old $175/person figure. Other listings have no recorded price source.

Sitemap, robots and canonical metadata use the confirmed production domain https://wedding-venues-one.vercel.app. Update all three when using a custom domain. Honeymoon is an editorial planning preview without live offers, rates or affiliate links.

## Next priorities

1. Verify wedding eligibility and official source links for the first 5–10 listings before expanding. Replace stock imagery only with licensed venue photos.
2. Connect and test private inquiry storage, configure support and retention, then enable collection.
3. Add dated itemized pricing evidence, with separate site fees, catering minimums and mandatory extras. Treat unknown totals as unknown.
4. Persist all filters in the URL and add a local shortlist after the data is trustworthy.
5. Curate sourced honeymoon stays after venue discovery and inquiries are validated.

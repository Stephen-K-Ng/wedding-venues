# MVP takeover audit — 2026-11-10

## Authority and baseline

Repository: https://github.com/Stephen-K-Ng/wedding-venues
Production: https://wedding-venues-one.vercel.app
Vercel project: stephen-k-ngs-projects/wedding-venues
Baseline commit: 4799c78 (production deployment CfbszpuAcBFuHnHasphcBx4StarE).
The prior conversation's proposed project name was an example; the Vercel dashboard and repository are the authority for the actual build.

## Existing implementation

Next.js 16 App Router + React 19, Tailwind 4, local TypeScript data, statically generated numeric venue details and client-side filters. 50 regional listings. No backend, Supabase configuration, API routes, account system, wishlist, booking, review system or actual owner dashboard in the baseline. The tour and wishlist buttons had no handlers. Owner form had no persistence. SEO had generic metadata only.

## First improvement

Preserved design, routes and venue records. Removed unsupported review/rating displays and adoption claims; marked estimates, unverified details and stock images. Added one official pricing-policy source without inventing a price. Normalized budget buckets to the displayed bands. Repeated search navigation remounts the results client so results update. Added accessible search/filter labels, mobile layout adjustments, canonical metadata, sitemap, robots, privacy notice and a honeymoon planning preview.

Added server-side inquiry validation and a private Supabase RPC integration, transactional per-email limits and honest disabled/error/success states. Disabled until database, server secrets, operator support address and explicit feature flag are configured. No inquiries are forwarded and no paid service was provisioned.

## Remaining limits

All 50 records require content research; a named winery in the seed data is not proof that it hosts weddings. No full venue accuracy audit or image-rights verification has been completed. Price sorting still sorts inherited prototype estimates, explicitly labeled as such. The official-source Stanly listing has no public price displayed. Search navigation resets other filters; full shareable filter state is a later increment.

Database migration and live persisted-lead testing require the user's Supabase project setup. Honeymoon is a planning preview. The current host account displays Hobby; hosting plan suitability should be checked before commercial launch. No purchase or account upgrade is part of this work.

## Verification and handoff

- Production build passed using webpack: 61 generated pages including 50 venue details; TypeScript passed. Turbopack could not bind its internal build port in this environment, so the build script uses Next's supported webpack mode. Removed unused Google font download; existing system font styling remains.
- ESLint and three inquiry-validation tests passed.
- Local browser verified home, Stanly detail, honeymoon and repeated search from Stanly to Viansa (one correct result each).
- HTTP checks passed for home, search, two detail pages, honeymoon, owner submission, privacy, sitemap (55 URLs), robots and unknown-venue 404.
- API checks passed for foreign origin 403, invalid consent/venue/JSON 400, oversized body 413 and disconnected storage 503. No lead was claimed saved. Live SQL, persistent rate limiting and database access policies remain unverified until database setup.
- Framework updated from 16.1.6 to 16.4.6 with matching lint configuration and compatible dependency fixes. `npm audit --omit=dev`: zero vulnerabilities. Full audit still reports seven moderate development-tool findings in the typescript-eslint/minimatch dependency chain; no forced major changes were applied.
- Publishing access check failed: GitHub rejected the computer's existing credentials. No branch or deployment was published, and production is unchanged. Restore GitHub sign-in, push this review branch, verify the Vercel preview, then merge/promote only after preview checks pass.

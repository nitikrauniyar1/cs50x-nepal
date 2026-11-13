# CS50x Nepal: public website (Next.js, JavaScript, Tailwind)

A locally routed, multi-page redesign of the CS50x Nepal / CS50 AI site. It needs no database, CMS, API keys, or remote fonts. It uses fast system font fallbacks.

## Run it
```bash
npm install
npm run dev        # http://localhost:3000
```
Production: `npm run build && npm start`. Lint: `npm run lint`.

Requires Node.js 18.17 or newer. `npm install` needs internet once; after that the site runs offline.

## Deploy
Any Node host (Vercel, Netlify, a VPS with `npm start`). Optionally set `NEXT_PUBLIC_SITE_URL` (see `.env.example`) so the sitemap, robots.txt and Open Graph URLs use your domain.

## Edit content (no component changes needed)
All in `src/data/`: `courses.js` (intro, outcomes, syllabus), `instructors.js`, `mentors.js` (plus guest speakers), `supporters.js`, `testimonials.js`, `faqs.js`, `links.js` (URLs, nav, footer).

**FAQ:** only questions answerable from verified site content are included. The official site lists 13; add the rest to `faqs.js` as `{ q, a }` objects.

## Replace images
Everything is referenced from `src/config/images.js`. Put your file in `public/images/...` and update the path there, or overwrite the file keeping its name.
- Logo: `public/images/brand/logo-mark.svg` is used in the header and footer; `src/app/icon.svg` is the browser favicon.
- Portraits: generic placeholders. Per person, add `photo: "/images/people/name.jpg"` in `instructors.js`.
- Partner logos: add `logo: "/images/partners/file.svg"` in `supporters.js` (names show as text until then).
- Social share image: `public/images/og/og-cover.png` (1200x630).

## Structure
`src/app` (layout, page, sitemap, robots) · `src/components` (sections) · `src/data` (content) · `src/config/images.js`.

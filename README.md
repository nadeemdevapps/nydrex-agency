# Nydrex

A founder-led software studio website built with React, TanStack Start and Tailwind CSS. The design follows `NYDREX_BUILD_BRIEF.md`: paper and ink surfaces, a restrained mint accent, Outfit typography, IBM Plex Mono labels, and original software interface compositions.

## Public pages

| Route       | Content                                               |
| ----------- | ----------------------------------------------------- |
| `/`         | Introduction, services, process, founders and FAQs    |
| `/services` | Six service categories with direct section links      |
| `/work`     | Intentional Coming Soon page                          |
| `/about`    | Company principle, process and three founders         |
| `/contact`  | Project brief form and direct founder contact options |

Crawler resources: `/robots.txt`, `/sitemap.xml`, `/llms.txt` and `/llms-full.txt`. Unknown pages return HTTP 404 with a custom page and `noindex` metadata.

## Project enquiry

The form validates the brief locally, shows a review, and prepares a WhatsApp message addressed to Nadeem. The visitor sends the message in WhatsApp; preparing or copying a brief does not deliver it. Business, email and budget are optional. A supplied email is validated. No enquiry data is stored on a server or in browser storage.

All founder contacts come from `src/lib/site.ts`. No company email, client claims, testimonials, addresses or social accounts are invented. Accounts and database storage are disabled.

## Development and verification

```sh
npm install
npm run dev
npm run typecheck
npm test
npm run build
```

`startup.sh` starts the development server, returns when it is already healthy, and supports the App Builder restart contract. Keep the environment wrapper and preview bridge intact. External Grok branding is disabled for the independent Nydrex site.

To check the production output:

```sh
npm run preview:restart
node scripts/browser-smoke.mjs http://127.0.0.1:8081/ /workspace/screenshots/built.png
npm run preview:stop
```

The browser smoke helper needs Playwright Chromium available in the environment. The production target is Vercel, configured in `vite.config.ts` and `vercel.json`; build output is generated into `.vercel/output` and intentionally excluded from Git.

`npm test` includes content and enquiry regression checks. Generic platform identity tests run in an isolated fixture directory so they cannot accidentally read Nydrex's real share card and identity.

## Assets and content

- Self-hosted WOFF2 fonts and their OFL licenses live in `public/fonts/`.
- `public/favicon.svg` and `public/og.jpg` contain the Nydrex brand assets.
- Page copy, service anchors and founder contact data live in `src/lib/site.ts`.
- Illustrations live in `src/components/illustrations/`.
- The platform injector owns social metadata using `src/lib/og/site.json`.

## Independent launch configuration

The approved public URL is `https://nydrex.qd.je`, configured once in `src/lib/og/site.json`. Canonical links, structured data, crawler documents and the absolute share-card URL use that origin, including when testing through internal or Vercel preview hosts. Changing domains means updating that field and rebuilding.

External Grok script injection is disabled with the supported `VITE_GROK_EXTENSIONS=0` flag and the baked `extensions: false` identity. The latter also works in a serverless deployment without workspace files or runtime environment flags. Existing preview tooling and `.grok` skills/references are retained. The browser's native install flow uses a Nydrex manifest, mint/ink icons and an Apple touch icon. The platform install tutorial is not intercepted for this independent site.

Production HTML gets a fresh CSP nonce per response. Framework and JSON-LD scripts share that nonce; external scripts, objects and cross-origin frames are restricted. Inline styles remain allowed for component positioning. Nonce-bearing HTML is private and not cached. The server also supplies `nosniff`, referrer policy, permissions policy and `SAMEORIGIN` framing; `vercel.json` applies these base headers to static assets at the edge. Development permits Vite hot reload and the live-preview embedder.

Unused auth, database, connector and multiplayer code and dependencies have been removed. No database migration runs during builds. The stable shell provider remains a passthrough. `.github/workflows/verify.yml` runs typecheck, tests, build and the brand gate for main pushes and pull requests.

See `docs/AUDIT.md` for the verification record. Domain/DNS connection and public deployment have not been performed by this change.

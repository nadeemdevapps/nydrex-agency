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

The form validates the brief locally, shows a review, and prepares a WhatsApp message addressed to Nadeem. The visitor sends the message in WhatsApp; preparing or copying a brief does not deliver it. Business and budget are optional. No enquiry data is stored on a server or in browser storage.

All founder contacts come from `src/lib/site.ts`. No company email, client claims, testimonials, addresses or social accounts are invented. Accounts and database storage are disabled.

## Development and verification

```sh
npm install
npm run dev
npm run typecheck
npm test
npm run build
```

`startup.sh` starts the development server, returns when it is already healthy, and supports the App Builder restart contract. Keep the environment wrapper and platform preview/branding integrations intact.

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

See `docs/AUDIT.md` for the final verification record. No public domain or hosting deployment has been configured as part of this audit.

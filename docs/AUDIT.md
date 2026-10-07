# Nydrex launch audit — 7 October 2026

The independent-site pass follows commit `abec76c` and addresses the six requested
pre-launch improvements. The website is verified as a production build; no public
deployment or DNS change was made.

## Changes

1. **External branding disabled.** The supported `VITE_GROK_EXTENSIONS=0` flag
   and baked `extensions: false` identity prevent `extensions.js` injection,
   including without runtime environment flags or workspace files. Platform
   preview support and useful `.grok` skills/references remain.
2. **Nydrex home-screen identity.** Manifest name/short name are Nydrex on every
   host. Colors, 192/512px PNG icons and 180px Apple icon use the existing mark.
   Independent visitors use native browser install UI, not the Grok tutorial.
3. **Approved public origin.** `https://nydrex.qd.je` is the single configured
   domain for all five canonicals, Organization/WebSite URL, Organization logo,
   share card and robots/sitemap/AI documents. Untrusted forwarded hosts cannot
   replace the configured domain.
4. **Security headers.** Production SSR uses fresh 128-bit nonces; all framework
   and JSON-LD scripts carry the corresponding nonce. CSP restricts script,
   image, font, connection, framing, form, base and object sources. Inline styles
   remain permitted for component positioning. HTML is private/no-store to avoid
   nonce reuse. Server and Vercel edge config add nosniff, referrer, permissions
   and framing policies. Development permits HMR and preview embedding.
5. **Unused infrastructure removed.** Removed unused auth/database/connectors/
   multiplayer code, auth migrations, database bootstrap/OAuth plugins and their
   direct dependencies. Installation removed 126 dependency packages. The shell
   passthrough provider, preview bridge and PWA/OG helpers remain. Added GitHub
   Actions verification for pushes to main and pull requests.
6. **Email optional.** Blank/whitespace email is accepted and omitted from the
   WhatsApp brief. Supplied email is validated and included. Required phone and
   other project fields still validate; edit/review behavior preserves values.

## Verification

| Check | Result |
| --- | --- |
| Production build | Pass |
| TypeScript | Pass |
| Unit/regression tests | 183 pass, 0 fail |
| Targeted ESLint | Pass |
| Brand gate | Pass, no warnings |
| Five dev routes, desktop/mobile | HTTP 200, visible content, clean console, no overflow |
| Five built routes, desktop/mobile | Pass, no divergence from dev baselines |
| Visual inspection | All five pages at 1280×800 and 390×844 |
| Production interactions under CSP | Optional-email handoff, review/edit and mobile menu/Escape pass |
| Email validation | Blank accepted, invalid rejected, valid included |
| Founder handoff | Nadeem's exact WhatsApp URL and encoded brief verified |
| Canonicals/schema/OG | Approved domain on all five pages in dev and built output |
| Production headers/nonces | Enforced CSP, same nonce on scripts, base headers and no-store verified |
| Manifest and icons | Correct name/colors/asset dimensions, preview/custom/Vercel hosts |
| Crawler documents | Correct approved-domain content |
| Unknown route | HTTP 404, custom title and noindex |
| Platform install query | Normal Nydrex home page for independent site |

The earlier 258-test result included suites belonging to the removed auth,
connector, migration and multiplayer infrastructure. The current 183-test suite
covers retained tooling plus additional Nydrex identity, enquiry, canonical,
schema and CSP regressions. GitHub Actions is configured; remote run status is
separate from these locally completed checks.

QA screenshots/verdicts are under `/workspace/screenshots/launch-*`; production
comparisons use `launch-built-*`. Icons were rasterized from the existing SVG,
not replaced with a generated logo.

## Launch state

`nydrex.qd.je` is configured in source. Hosting deployment, domain binding and DNS
verification remain launch work. The contact flow prepares a local WhatsApp
message; delivery happens only when the visitor presses Send in WhatsApp. No
visitor data is stored or sent by the website itself.

Security implementation references: [Vercel header configuration](https://vercel.com/docs/project-configuration/vercel-json)
and [TanStack's CSP example](https://github.com/TanStack/router/tree/main/e2e/react-start/csp).

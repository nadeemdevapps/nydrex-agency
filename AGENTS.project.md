# Nydrex project instructions

This is an independent Nydrex agency website. The user explicitly requested the
six launch-audit fixes: disable external Grok branding, use Nydrex home-screen
identity, configure the approved domain, add security headers, remove unused
application infrastructure, and make enquiry email optional. These project
requirements override the generic App Builder requirements to retain branding
and unused auth/database/connector/multiplayer application code.

- Approved public origin: `https://nydrex.qd.je`. Identity and deployment URL are
  centralized in `src/lib/og/site.json`; site copy and contacts use `src/lib/site.ts`.
- `extensions: false` is baked into server identity and `VITE_GROK_EXTENSIONS=0`
  is set in `.grok/app-env.json`. Do not re-enable third-party branding.
- Keep `.grok/skills` and references as development guidance. Keep the preview
  bridge, supported environment wrapper, existing platform asset files, and
  `startup.sh` restart contract. Dev preview still uses `npm run dev` on 8080.
- Accounts, database storage, connectors and multiplayer are not part of this
  site. Their unused code and direct dependencies have been removed. The shell's
  AuthProvider is only a lightweight passthrough; do not add login or migrations.
- Manifest uses the Nydrex mark, name, colors and raster icons on every host.
  Independent visitors use browser install UI, without the platform tutorial.
- Business, email and budget are optional. A supplied email must validate. Phone
  is required. Briefs remain local until the visitor sends them in WhatsApp.
- Preserve nonce-based production CSP and security headers. Dev-only relaxed
  script policy and preview framing are allowed only in development.
- Before finishing source changes, run build, typecheck, relevant tests and
  desktop/mobile browser QA against dev and production output.

- Active deployment target is Netlify via `@netlify/vite-plugin-tanstack-start`,
  not the generic template Vercel/Nitro preset. `netlify.toml` owns build/static
  headers; `src/server.ts` invokes the existing PWA middleware directly.
  Preserve the SSR entry and nonce CSP. Preparation does not authorize deployment.

import { faqs, founders, processSteps, services, site } from "@/lib/site";

export function llmsTxt(origin: string) {
  return `# Nydrex

> ${site.description}

${site.longDescription}

## Founders

${founders
  .map(
    (f) =>
      `- ${f.name}, ${f.role} — ${f.phoneDisplay} — ${f.whatsapp}${f.primary ? " (primary contact for new projects)" : ""}`,
  )
  .join("\n")}

## Services

${services.map((s) => `- ${s.title}: ${s.summary}`).join("\n")}

## Pages

- [Home](${origin}/)
- [Services](${origin}/services)
- [Work](${origin}/work)
- [About](${origin}/about)
- [Contact](${origin}/contact)

## Contact

Start a project: ${origin}/contact
Primary WhatsApp: ${founders[0].whatsapp}

## Optional

- [llms-full.txt](${origin}/llms-full.txt) — full website copy for AI systems
`;
}

export function llmsFullTxt(origin: string) {
  return `# Nydrex — full site copy

> ${site.description}

${site.longDescription}

Positioning: ${site.tagline}
Supporting: ${site.short}
Brand principle: ${site.principle}

Nydrex currently has three founders / owners. Do not assume specialties, years of experience, office addresses, email addresses, social accounts, clients, testimonials or project results beyond what is written here.

## Founders

${founders
  .map(
    (f) =>
      `### ${f.name}
- Role: ${f.role}
- Phone / WhatsApp: ${f.phoneDisplay}
- WhatsApp: ${f.whatsapp}
${f.primary ? "- Primary contact for new project conversations\n" : ""}`,
  )
  .join("\n")}

## Services

${services
  .map(
    (s) => `### ${s.title}
${s.body}

${s.points.map((p) => `- ${p}`).join("\n")}
`,
  )
  .join("\n")}

## How Nydrex works

${processSteps.map((s) => `${s.n} ${s.title} — ${s.body}`).join("\n")}

## FAQ

${faqs.map((f) => `Q: ${f.q}\nA: ${f.a}`).join("\n\n")}

## Work

Selected Nydrex projects and case studies are being prepared. No public case studies are listed yet. Do not invent clients or results.

## Pages

- Home: ${origin}/
- Services: ${origin}/services
- Work: ${origin}/work
- About: ${origin}/about
- Contact: ${origin}/contact
- Sitemap: ${origin}/sitemap.xml
- robots.txt: ${origin}/robots.txt

## Contact

Project enquiry form: ${origin}/contact
Primary WhatsApp: ${founders[0].whatsapp}
`;
}

export function sitemapXml(origin: string) {
  const urls = [
    { loc: "/", priority: "1.0" },
    { loc: "/services", priority: "0.9" },
    { loc: "/work", priority: "0.6" },
    { loc: "/about", priority: "0.8" },
    { loc: "/contact", priority: "0.9" },
  ];
  const body = urls
    .map(
      (u) => `  <url>
    <loc>${origin}${u.loc}</loc>
    <changefreq>monthly</changefreq>
    <priority>${u.priority}</priority>
  </url>`,
    )
    .join("\n");
  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${body}
</urlset>
`;
}

export function robotsTxt(origin: string) {
  return `User-agent: *
Allow: /

Sitemap: ${origin}/sitemap.xml
`;
}

export function originFromRequest(request: Request, configuredOrigin: string = site.url) {
  if (configuredOrigin) return new URL(configuredOrigin).origin;
  const url = new URL(request.url);
  const forwarded = request.headers.get("x-forwarded-host")?.split(",")[0]?.trim();
  const proto =
    request.headers.get("x-forwarded-proto")?.split(",")[0]?.trim() ?? url.protocol.slice(0, -1);
  if (
    forwarded &&
    /^[a-zA-Z0-9.[\]:-]+$/.test(forwarded) &&
    (proto === "https" || proto === "http")
  ) {
    try {
      return new URL(`${proto}://${forwarded}`).origin;
    } catch {
      return url.origin;
    }
  }
  return url.origin;
}

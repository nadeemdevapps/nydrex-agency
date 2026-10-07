import { createFileRoute } from "@tanstack/react-router";
import { originFromRequest, sitemapXml } from "@/lib/llms";

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: ({ request }) =>
        new Response(sitemapXml(originFromRequest(request)), {
          headers: {
            "content-type": "application/xml; charset=utf-8",
            "cache-control": "public, max-age=3600",
          },
        }),
    },
  },
});

import { createFileRoute } from "@tanstack/react-router";
import { originFromRequest, robotsTxt } from "@/lib/llms";

export const Route = createFileRoute("/robots.txt")({
  server: {
    handlers: {
      GET: ({ request }) =>
        new Response(robotsTxt(originFromRequest(request)), {
          headers: {
            "content-type": "text/plain; charset=utf-8",
            "cache-control": "public, max-age=3600",
          },
        }),
    },
  },
});

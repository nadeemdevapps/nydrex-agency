import { createFileRoute } from "@tanstack/react-router";
import { llmsTxt, originFromRequest } from "@/lib/llms";

export const Route = createFileRoute("/llms.txt")({
  server: {
    handlers: {
      GET: ({ request }) =>
        new Response(llmsTxt(originFromRequest(request)), {
          headers: {
            "content-type": "text/plain; charset=utf-8",
            "cache-control": "public, max-age=3600",
          },
        }),
    },
  },
});

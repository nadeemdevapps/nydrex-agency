import { createFileRoute } from "@tanstack/react-router";
import { llmsFullTxt, originFromRequest } from "@/lib/llms";

export const Route = createFileRoute("/llms-full.txt")({
  server: {
    handlers: {
      GET: ({ request }) =>
        new Response(llmsFullTxt(originFromRequest(request)), {
          headers: {
            "content-type": "text/plain; charset=utf-8",
            "cache-control": "public, max-age=3600",
          },
        }),
    },
  },
});

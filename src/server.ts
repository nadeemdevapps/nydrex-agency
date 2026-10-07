import { createStartHandler, defaultStreamHandler } from "@tanstack/react-start/server";
import { contentSecurityPolicy } from "@/lib/security";

// The framework passes the same request-specific nonce to its SSR scripts.
const handler = createStartHandler((context) => {
  context.responseHeaders.set(
    "Content-Security-Policy",
    contentSecurityPolicy(context.router.options.ssr?.nonce ?? "", import.meta.env.DEV),
  );
  return defaultStreamHandler(context);
});

export default {
  async fetch(request: Request) {
    const response = await handler(request);
    const headers = new Headers(response.headers);
    headers.set("X-Content-Type-Options", "nosniff");
    headers.set("Referrer-Policy", "strict-origin-when-cross-origin");
    headers.set("Permissions-Policy", "camera=(), microphone=(), geolocation=()");
    if (!import.meta.env.DEV) headers.set("X-Frame-Options", "SAMEORIGIN");
    // Nonces must not be reused by a CDN response cache.
    if (headers.get("content-type")?.includes("text/html")) {
      headers.set("Cache-Control", "private, no-store");
    }
    return new Response(response.body, {
      status: response.status,
      statusText: response.statusText,
      headers,
    });
  },
};

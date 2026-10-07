/** A fresh CSP nonce is created for each server render; never sent from the client. */
export function createCspNonce() {
  const bytes = new Uint8Array(16);
  crypto.getRandomValues(bytes);
  return Array.from(bytes, (byte) => byte.toString(16).padStart(2, "0")).join("");
}

export function contentSecurityPolicy(nonce: string, development = false) {
  const scriptSources = development
    ? "'self' 'unsafe-inline' 'unsafe-eval'"
    : `'self' 'nonce-${nonce}'`;
  return [
    "default-src 'self'",
    `script-src ${scriptSources}`,
    "style-src 'self' 'unsafe-inline'", // Radix positioning and illustration styles
    "img-src 'self' data:",
    "font-src 'self'",
    `connect-src 'self'${development ? " ws: wss:" : ""}`,
    "object-src 'none'",
    "base-uri 'none'",
    "form-action 'self'",
    `frame-ancestors 'self'${development ? " https://grok.com https://*.grok.com https://*.grok.me" : ""}`,
  ].join("; ");
}

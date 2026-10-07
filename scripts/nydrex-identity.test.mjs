import assert from "node:assert/strict";
import test from "node:test";
import { readFileSync, existsSync } from "node:fs";
import { renderWebManifest, injectGrokPwaHead, snapshotOgIdentity } from "./grok-pwa-shared.mjs";

const identity = JSON.parse(readFileSync(new URL("../src/lib/og/site.json", import.meta.url)));

test("Nydrex manifest keeps its identity on preview, Vercel and custom domains", () => {
  for (const host of ["nydrex.qd.je", "website.vercel.app", "localhost:8080", "preview.grok.me"]) {
    const manifest = JSON.parse(renderWebManifest(host, identity));
    assert.equal(manifest.name, "Nydrex");
    assert.equal(manifest.short_name, "Nydrex");
    assert.equal(manifest.theme_color, "#C6EF7A");
    assert.equal(manifest.background_color, "#F5F5F2");
    for (const icon of manifest.icons) {
      assert.ok(existsSync(new URL(`../public${icon.src}`, import.meta.url)));
      const png = readFileSync(new URL(`../public${icon.src}`, import.meta.url));
      const size = Number(icon.sizes.split("x")[0]);
      assert.equal(png.readUInt32BE(16), size);
      assert.equal(png.readUInt32BE(20), size);
    }
  }
});

test("baked independent identity suppresses external branding without runtime env or filesystem", () => {
  const before = process.env.VITE_GROK_EXTENSIONS;
  process.env.VITE_GROK_EXTENSIONS = "1";
  try {
    const site = snapshotOgIdentity().site;
    const html = injectGrokPwaHead('<html><head><title>Nydrex</title><script src="https://grok.com/grok-app-builder/extensions.js" defer></script></head><body></body></html>', {
      site,
      host: "deployment.vercel.app",
      cwd: "/directory-that-does-not-exist",
    });
    assert.doesNotMatch(html, /grok-app-builder\/extensions\.js/);
    assert.match(html, /https:\/\/nydrex.qd.je\/og.jpg/);
    assert.match(html, /href="\/apple-touch-icon.png"/);
    assert.match(html, /apple-mobile-web-app-title" content="Nydrex"/);
    assert.equal(JSON.parse(renderWebManifest("deployment.vercel.app", site)).name, "Nydrex");
  } finally {
    if (before === undefined) delete process.env.VITE_GROK_EXTENSIONS;
    else process.env.VITE_GROK_EXTENSIONS = before;
  }
});

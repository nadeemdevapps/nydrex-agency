import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";
import ts from "typescript";
import { z } from "zod";

// Run the actual TypeScript content modules without loading the web server.
async function readModule(path, imports = {}) {
  const source = await readFile(new URL(path, import.meta.url), "utf8");
  const output = ts.transpileModule(source, {
    compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2022 },
  }).outputText;
  const exports = {};
  new Function("require", "exports", output)((name) => {
    assert.ok(name in imports, `Unexpected import: ${name}`);
    return imports[name];
  }, exports);
  return exports;
}
const content = await readModule("../src/lib/site.ts");
const enquiry = await readModule("../src/lib/enquiry.ts", { zod: { z }, "@/lib/site": content });
const crawlers = await readModule("../src/lib/llms.ts", { "@/lib/site": content });
const example = {
  name: "Website audit",
  business: "",
  phone: "+92 325 1473646",
  email: "audit@example.com",
  need: "Web application",
  budget: "",
  details: "A customer portal for requests and approvals, with notifications.",
};

test("all six services have unique anchors, including custom software", () => {
  assert.equal(content.services.length, 6);
  assert.equal(new Set(content.services.map((service) => service.slug)).size, 6);
  assert.ok(content.services.every((service) => /^[a-z]+(?:-[a-z]+)*$/.test(service.slug)));
  assert.equal(content.services[0].slug, "custom-software");
});

test("founder contacts match the supplied brief exactly", () => {
  assert.deepEqual(
    content.founders.map(({ name, phoneDisplay, whatsapp }) => ({ name, phoneDisplay, whatsapp })),
    [
      { name: "Nadeem", phoneDisplay: "+92 325 1473646", whatsapp: "https://wa.me/923251473646" },
      { name: "Moazam", phoneDisplay: "+92 325 5701685", whatsapp: "https://wa.me/923255701685" },
      { name: "Abdullah", phoneDisplay: "+92 318 0290447", whatsapp: "https://wa.me/923180290447" },
    ],
  );
});

test("optional business and budget may be omitted, while required fields are validated", () => {
  assert.ok(enquiry.enquirySchema.safeParse(example).success);
  for (const field of ["name", "phone", "email", "need", "details"]) {
    assert.equal(
      enquiry.enquirySchema.safeParse({ ...example, [field]: "" }).success,
      false,
      field,
    );
  }
  for (const phone of ["abcdefghi", "-------", "123456", "1234567890123456", "1234567+"]) {
    assert.equal(enquiry.enquirySchema.safeParse({ ...example, phone }).success, false, phone);
  }
  assert.equal(
    enquiry.enquirySchema.safeParse({ ...example, need: "Invented option" }).success,
    false,
  );
  assert.equal(
    enquiry.enquirySchema.safeParse({ ...example, details: "x".repeat(3001) }).success,
    false,
  );
});

test("WhatsApp handoff preserves punctuation, multiline text and international contact", () => {
  const data = {
    ...example,
    name: "A & B",
    details: "A CRM integration.\nKeep + signs, & punctuation and Urdu: سلام",
  };
  const url = new URL(enquiry.enquiryWhatsAppUrl(data));
  assert.equal(url.origin + url.pathname, "https://wa.me/923251473646");
  assert.equal(url.searchParams.get("text"), enquiry.formatEnquiryBrief(data));
  assert.match(url.searchParams.get("text"), /Budget: To be discussed/);
});

test("crawler files expose the five real pages and exact founder information", () => {
  const origin = "https://example.com";
  for (const page of ["/", "/services", "/work", "/about", "/contact"]) {
    assert.ok(crawlers.sitemapXml(origin).includes(`<loc>${origin}${page}</loc>`));
    assert.ok(crawlers.llmsTxt(origin).includes(`${origin}${page}`));
  }
  for (const founder of content.founders) {
    assert.ok(crawlers.llmsFullTxt(origin).includes(founder.phoneDisplay));
    assert.ok(crawlers.llmsFullTxt(origin).includes(founder.whatsapp));
  }
  assert.match(crawlers.robotsTxt(origin), /Allow: \/\n/);
});

test("public origins respect valid proxy headers and reject malformed hosts", () => {
  assert.equal(
    crawlers.originFromRequest(
      new Request("http://internal.test/", {
        headers: { "x-forwarded-host": "nydrex.example", "x-forwarded-proto": "https, http" },
      }),
    ),
    "https://nydrex.example",
  );
  assert.equal(
    crawlers.originFromRequest(
      new Request("http://internal.test/", {
        headers: { "x-forwarded-host": "bad.example&malformed" },
      }),
    ),
    "http://internal.test",
  );
});

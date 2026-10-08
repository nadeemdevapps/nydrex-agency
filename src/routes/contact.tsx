import { createFileRoute } from "@tanstack/react-router";
import { ContactForm } from "@/components/contact-form";
import { SiteShell } from "@/components/site-shell";
import { pageHead, site } from "@/lib/site";

export const Route = createFileRoute("/contact")({
  component: ContactPage,
  head: () => pageHead(site.titles.contact, site.descriptions.contact, "/contact"),
});

function ContactPage() {
  return (
    <SiteShell>
      <main id="main" className="mx-auto w-full max-w-3xl px-5 py-16 sm:px-8">
        <h1 className="text-4xl font-medium tracking-tight sm:text-6xl">
          Tell us what you need built.
        </h1>
        <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
          Send a project brief and we will follow up. Prefer a message?{" "}
          <a
            href="#founder-contacts"
            className="text-foreground underline decoration-border underline-offset-4 hover:decoration-foreground"
          >
            Reach a founder directly.
          </a>
        </p>
        <div className="mt-12">
          <ContactForm />
        </div>
      </main>
    </SiteShell>
  );
}

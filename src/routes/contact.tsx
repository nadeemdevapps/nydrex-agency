import { createFileRoute } from "@tanstack/react-router";
import { ContactForm } from "@/components/contact-form";
import { SiteShell } from "@/components/site-shell";
import { founders, pageHead, primaryFounder, site } from "@/lib/site";

export const Route = createFileRoute("/contact")({
  component: ContactPage,
  head: () => pageHead(site.titles.contact, site.descriptions.contact, "/contact"),
});

function ContactPage() {
  return (
    <SiteShell>
      <main id="main" className="mx-auto max-w-6xl px-5 py-16 sm:px-8">
        <p className="font-mono text-xs tracking-widest text-muted-foreground uppercase">
          Contact
        </p>
        <h1 className="mt-4 max-w-3xl text-4xl font-medium tracking-tight sm:text-6xl">
          Tell us what you need built.
        </h1>
        <p className="mt-5 max-w-xl text-lg text-muted-foreground">
          Send a project brief and we will follow up. Prefer a message? WhatsApp
          {` ${primaryFounder.name}`} — he is the primary contact for new work.
        </p>

        <div className="mt-12 grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <ContactForm />
          </div>
          <aside className="lg:col-span-5">
            <div className="rounded-xl border border-border bg-mist p-6 sm:p-8">
              <p className="font-mono text-xs tracking-widest text-muted-foreground uppercase">
                WhatsApp
              </p>
              <p className="mt-3 text-sm text-muted-foreground">
                Each founder can be reached directly. For a new project, start with{" "}
                {primaryFounder.name}.
              </p>
              <ul className="mt-6 space-y-4">
                {founders.map((f) => (
                  <li
                    key={f.name}
                    className="rounded-2xl border border-border bg-card p-4"
                  >
                    <div className="flex items-baseline justify-between gap-3">
                      <p className="font-medium">{f.name}</p>
                      <p className="font-mono text-micro tracking-widest text-muted-foreground uppercase">
                        {f.primary ? "Primary" : "Founder"}
                      </p>
                    </div>
                    <a
                      href={`tel:${f.phoneTel}`}
                      className="mt-1 block text-sm text-muted-foreground hover:text-foreground"
                    >
                      {f.phoneDisplay}
                    </a>
                    <a
                      href={f.whatsapp}
                      className="mt-3 inline-flex text-sm font-medium hover:underline"
                    >
                      Message on WhatsApp
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </main>
    </SiteShell>
  );
}

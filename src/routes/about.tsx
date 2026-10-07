import { createFileRoute } from "@tanstack/react-router";
import { CtaBand } from "@/components/cta-band";
import { SiteShell } from "@/components/site-shell";
import { founders, pageHead, processSteps, site } from "@/lib/site";

export const Route = createFileRoute("/about")({
  component: AboutPage,
  head: () => pageHead(site.titles.about, site.descriptions.about),
});

function AboutPage() {
  return (
    <SiteShell>
      <main id="main">
        <section className="mx-auto max-w-6xl px-5 pt-16 pb-12 sm:px-8">
          <p className="font-mono text-xs tracking-widest text-muted-foreground uppercase">
            About
          </p>
          <h1 className="mt-4 max-w-3xl text-4xl font-medium tracking-tight sm:text-6xl">
            Small team. Direct involvement.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            {site.longDescription} Planning and development stay with the founders
            rather than disappearing into a long chain of handoffs.
          </p>
        </section>

        <section className="px-5 sm:px-8">
          <div className="mx-auto max-w-6xl rounded-2xl bg-secondary px-8 py-14 text-secondary-foreground sm:px-14">
            <p className="font-mono text-xs tracking-widest text-primary uppercase">
              Principle
            </p>
            <blockquote className="mt-4 max-w-3xl text-3xl font-medium tracking-tight sm:text-4xl">
              {site.principle}
            </blockquote>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-5 py-20 sm:px-8">
          <h2 className="text-3xl font-medium tracking-tight">Founders</h2>
          <p className="mt-3 max-w-xl text-muted-foreground">
            Three owners. Same title. Direct lines.
          </p>
          <ul className="mt-10 grid gap-4 lg:grid-cols-3">
            {founders.map((f) => (
              <li
                key={f.name}
                className="rounded-xl border border-border bg-card p-7 shadow-border"
              >
                <div className="flex size-14 items-center justify-center rounded-2xl bg-mist text-2xl font-medium">
                  {f.name.slice(0, 1)}
                </div>
                <p className="mt-6 text-2xl font-medium">{f.name}</p>
                <p className="text-sm text-muted-foreground">{f.role}</p>
                <div className="mt-6 space-y-1.5 text-sm">
                  <a href={`tel:${f.phoneTel}`} className="block hover:underline">
                    {f.phoneDisplay}
                  </a>
                  <a href={f.whatsapp} className="block text-muted-foreground hover:text-foreground">
                    WhatsApp
                  </a>
                </div>
              </li>
            ))}
          </ul>
        </section>

        <section className="border-t border-border">
          <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8">
            <h2 className="text-3xl font-medium tracking-tight">How the work is done</h2>
            <ol className="mt-10 divide-y divide-border border-y border-border">
              {processSteps.map((step) => (
                <li
                  key={step.n}
                  className="grid gap-3 py-8 sm:grid-cols-[5rem_8rem_1fr] sm:items-baseline"
                >
                  <span className="font-mono text-xs tracking-widest text-muted-foreground">
                    {step.n}
                  </span>
                  <h3 className="text-lg font-medium">{step.title}</h3>
                  <p className="text-muted-foreground">{step.body}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <CtaBand title="Talk to the people who will build it." />
      </main>
    </SiteShell>
  );
}

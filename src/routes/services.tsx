import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CtaBand } from "@/components/cta-band";
import { SiteShell } from "@/components/site-shell";
import { ServiceVisual } from "@/components/illustrations/service-visuals";
import { pageHead, services, site } from "@/lib/site";

export const Route = createFileRoute("/services")({
  component: ServicesPage,
  head: () => pageHead(site.titles.services, site.descriptions.services, "/services"),
});

function ServicesPage() {
  return (
    <SiteShell>
      <main id="main">
        <section className="mx-auto max-w-6xl px-5 pt-16 pb-10 sm:px-8">
          <p className="font-mono text-xs tracking-widest text-muted-foreground uppercase">
            Services
          </p>
          <h1 className="mt-4 max-w-3xl text-4xl font-medium tracking-tight sm:text-6xl">
            Custom systems, built around the work.
          </h1>
          <p className="mt-5 max-w-xl text-lg text-muted-foreground">
            Six ways we help. The through-line is the same: replace a messy process
            with software people can actually use.
          </p>
        </section>

        <div className="mx-auto max-w-6xl px-5 pb-8 sm:px-8">
          <nav aria-label="Service sections" className="flex flex-wrap gap-2">
            {services.map((s) => (
              <a
                key={s.slug}
                href={`#${s.slug}`}
                className="rounded-full border border-border bg-card px-3.5 py-2 text-sm whitespace-nowrap hover:bg-mist"
              >
                {s.navLabel}
              </a>
            ))}
          </nav>
        </div>

        {services.map((s, i) => (
          <section
            key={s.slug}
            id={s.slug}
            className={`scroll-mt-24 ${i % 2 === 1 ? "bg-mist/50" : ""}`}
          >
            <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 py-16 sm:px-8 lg:grid-cols-2">
              <div className={i % 2 === 1 ? "lg:order-2" : ""}>
                <p className="font-mono text-xs tracking-widest text-muted-foreground uppercase">
                  {String(i + 1).padStart(2, "0")}
                </p>
                <h2 className="mt-3 text-3xl font-medium tracking-tight">{s.title}</h2>
                <p className="mt-4 text-muted-foreground">{s.body}</p>
                <ul className="mt-6 space-y-2">
                  {s.points.map((p) => (
                    <li key={p} className="flex gap-3 text-sm">
                      <span className="mt-2 size-1.5 shrink-0 rounded-full bg-primary" />
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
              <div className={i % 2 === 1 ? "lg:order-1" : ""}>
                <ServiceVisual slug={s.slug} />
              </div>
            </div>
          </section>
        ))}

        <section className="mx-auto flex max-w-6xl flex-col items-start gap-4 px-5 py-16 sm:px-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-md text-muted-foreground">
            Not sure which of these you need? Describe the problem. We will tell you
            if a custom system is the right answer.
          </p>
          <Button asChild>
            <Link to="/contact">
              Start a project
              <ArrowRight />
            </Link>
          </Button>
        </section>

        <CtaBand />
      </main>
    </SiteShell>
  );
}

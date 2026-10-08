import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { CtaBand } from "@/components/cta-band";
import { JsonLd } from "@/components/json-ld";
import { SiteShell } from "@/components/site-shell";
import { AutomationFlow } from "@/components/illustrations/automation-flow";
import { BentoStudio } from "@/components/illustrations/bento-studio";
import { ComponentBoard } from "@/components/illustrations/component-board";
import { HeroSystem } from "@/components/illustrations/hero-system";
import { SystemMap } from "@/components/illustrations/system-map";
import { faqJsonLd } from "@/lib/seo";
import { faqs, founders, pageHead, processSteps, services, site } from "@/lib/site";

export const Route = createFileRoute("/")({
  component: Home,
  head: () => pageHead(site.titles.home, site.descriptions.home, "/"),
});

function Home() {
  return (
    <SiteShell>
      <JsonLd data={faqJsonLd()} />
      <main id="main">
        <section className="mx-auto grid max-w-6xl items-center gap-10 px-5 pt-14 pb-8 sm:px-8 lg:grid-cols-2 lg:pt-20 lg:pb-12">
          <div>
            <h1 className="text-5xl font-medium tracking-tight sm:text-6xl lg:text-7xl">
              Ideas become{" "}
              <span className="underline decoration-primary decoration-4 underline-offset-8">
                systems
              </span>
              .
            </h1>
            <p className="mt-6 max-w-md text-lg leading-relaxed text-muted-foreground">
              {site.short}
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Button asChild size="lg">
                <Link to="/contact">
                  Start a project
                  <ArrowRight />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link to="/services">See services</Link>
              </Button>
            </div>
          </div>
          <HeroSystem />
        </section>

        <section className="border-y border-border">
          <div className="mx-auto flex max-w-6xl flex-wrap gap-x-8 gap-y-2 px-5 py-4 font-mono text-meta tracking-widest text-muted-foreground uppercase sm:px-8">
            <span>Custom software</span>
            <span>Web apps</span>
            <span>Automation</span>
            <span>Dashboards</span>
            <span>Mobile</span>
            <span>Local systems</span>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-5 py-20 sm:px-8">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-medium tracking-tight sm:text-4xl">
              Software for the work that currently lives in inboxes, chats and spreadsheets.
            </h2>
          </div>
          <div className="mt-12">
            <BentoStudio />
          </div>
          <div className="mt-16 grid gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => (
              <Link
                key={s.slug}
                to="/services"
                hash={s.slug}
                className="bg-background p-6 transition-[background-color] duration-150 ease-out hover:bg-mist"
              >
                <h3 className="text-base font-medium">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {s.summary}
                </p>
              </Link>
            ))}
          </div>
        </section>

        <section className="bg-mist/60 py-20">
          <div className="mx-auto max-w-6xl px-5 sm:px-8">
            <div className="grid items-end gap-8 lg:grid-cols-2">
              <div>
                <h2 className="text-3xl font-medium tracking-tight sm:text-4xl">
                  From the first request to the work that runs itself.
                </h2>
              </div>
              <p className="max-w-md text-muted-foreground">
                Most useful products are a path: someone asks, someone sees it, someone acts,
                and the next time it happens without the same friction.
              </p>
            </div>
            <div className="mt-10">
              <SystemMap />
            </div>
            <div className="mt-10">
              <AutomationFlow />
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-5 py-20 sm:px-8">
          <h2 className="max-w-xl text-3xl font-medium tracking-tight sm:text-4xl">
            A short path from the problem to a working system.
          </h2>
          <ol className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {processSteps.map((step) => (
              <li key={step.n}>
                <p className="font-mono text-xs tracking-widest text-muted-foreground">
                  {step.n}
                </p>
                <h3 className="mt-3 text-xl font-medium">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {step.body}
                </p>
              </li>
            ))}
          </ol>
        </section>

        <section className="border-y border-border py-20">
          <div className="mx-auto max-w-6xl px-5 sm:px-8">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <h2 className="max-w-lg text-3xl font-medium tracking-tight sm:text-4xl">
                  The kind of software people actually touch.
                </h2>
              </div>
              <p className="max-w-sm text-sm text-muted-foreground">
                Search, schedules, alerts, repeating work, assignment — small pieces that add
                up to a system.
              </p>
            </div>
            <div className="mt-10">
              <ComponentBoard />
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-5 py-20 sm:px-8">
          <h2 className="text-3xl font-medium tracking-tight sm:text-4xl">
            Small team. Direct involvement.
          </h2>
          <p className="mt-4 max-w-xl text-muted-foreground">
            Nydrex is led by three founders. You work with the people building the system.
          </p>
          <ul className="mt-10 grid gap-4 sm:grid-cols-3">
            {founders.map((f) => (
              <li
                key={f.name}
                className="rounded-xl border border-border bg-card p-6 shadow-border"
              >
                <div className="flex size-12 items-center justify-center rounded-2xl bg-primary font-semibold text-primary-foreground">
                  {f.name.slice(0, 1)}
                </div>
                <p className="mt-5 text-lg font-medium">{f.name}</p>
                <p className="text-sm text-muted-foreground">{f.role}</p>
                <a
                  href={f.whatsapp}
                  className="mt-4 inline-block text-sm hover:underline"
                >
                  {f.phoneDisplay}
                </a>
                <a
                  href={`mailto:${f.email}`}
                  className="mt-1 block text-sm break-words text-muted-foreground hover:text-foreground hover:underline"
                >
                  {f.email}
                </a>
              </li>
            ))}
          </ul>
        </section>

        <section className="mx-auto grid max-w-6xl gap-10 px-5 py-20 sm:px-8 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <h2 className="text-3xl font-medium tracking-tight sm:text-4xl">
              Before you write.
            </h2>
            <p className="mt-4 text-muted-foreground">
              A few straight answers. If you would rather talk, WhatsApp is open.
            </p>
          </div>
          <div className="lg:col-span-7">
            <Accordion type="single" collapsible>
              {faqs.map((item) => (
                <AccordionItem key={item.q} value={item.q}>
                  <AccordionTrigger>{item.q}</AccordionTrigger>
                  <AccordionContent>{item.a}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        <CtaBand />
      </main>
    </SiteShell>
  );
}

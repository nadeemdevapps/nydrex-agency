import { Link } from "@tanstack/react-router";
import { ArrowRight, ArrowUp, ArrowUpRight, Mail, MessageCircle } from "lucide-react";
import { Logo } from "@/components/logo";
import { Button } from "@/components/ui/button";
import { founders, nav, primaryFounder, services, site } from "@/lib/site";

const footerLink =
  "group flex min-h-11 items-center justify-between gap-3 rounded-lg py-2 text-sm text-muted-foreground transition-colors duration-150 hover:text-foreground motion-reduce:transition-none";

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-mist">
      <div className="mx-auto max-w-6xl px-5 pt-12 sm:px-8 sm:pt-16">
        <div className="grid grid-cols-3 gap-x-6 gap-y-10 border-b border-border pb-10 lg:grid-cols-12 lg:gap-12 lg:pb-12">
          <div className="col-span-3 lg:col-span-4">
            <Link
              to="/"
              aria-label="Nydrex home"
              className="inline-flex min-h-11 items-center rounded-lg"
            >
              <Logo />
            </Link>
            <p className="mt-5 max-w-sm text-3xl font-medium tracking-tight text-foreground sm:text-4xl">
              {site.tagline}
            </p>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted-foreground">
              {site.short}
            </p>
            <Button asChild className="mt-6">
              <Link to="/contact">
                Start a project
                <ArrowRight />
              </Link>
            </Button>
          </div>
          <nav aria-label="Footer pages" className="lg:col-span-2">
            <h2 className="text-sm font-semibold text-foreground">Explore</h2>
            <ul className="mt-3">
              <li>
                <Link to="/" className={footerLink}>
                  Home
                  <ArrowUpRight className="size-3.5 shrink-0 opacity-0 transition-opacity group-hover:opacity-100 group-focus-visible:opacity-100" />
                </Link>
              </li>
              {nav.map((item) => (
                <li key={item.to}>
                  <Link to={item.to} className={footerLink}>
                    {item.label}
                    <ArrowUpRight className="size-3.5 shrink-0 opacity-0 transition-opacity group-hover:opacity-100 group-focus-visible:opacity-100" />
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <nav aria-label="Footer services" className="col-span-2 lg:col-span-6">
            <h2 className="text-sm font-semibold text-foreground">What we build</h2>
            <ul className="mt-3 grid gap-x-8 sm:grid-cols-2 lg:gap-x-6">
              {services.map((service) => (
                <li key={service.slug}>
                  <Link to="/services" hash={service.slug} className={footerLink}>
                    {service.title}
                    <ArrowUpRight className="size-3.5 shrink-0 opacity-0 transition-opacity group-hover:opacity-100 group-focus-visible:opacity-100" />
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div id="founder-contacts" className="scroll-mt-24 py-10 lg:py-12">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h2 className="text-xl font-medium tracking-tight">Talk directly to the founders.</h2>
              <p className="mt-2 text-sm text-muted-foreground">
                For a new project, start with {primaryFounder.name}.
              </p>
            </div>
            <Link
              to="/contact"
              className="inline-flex min-h-11 items-center gap-2 self-start rounded-lg text-sm font-medium hover:underline sm:self-auto"
            >
              All contact options
              <ArrowUpRight className="size-4" />
            </Link>
          </div>
          <ul className="mt-6 grid gap-4 md:grid-cols-3">
            {founders.map((founder) => (
              <li
                key={founder.name}
                className="min-w-0 rounded-xl bg-card p-5 shadow-border transition-[box-shadow] duration-200 hover:shadow-border-hover motion-reduce:transition-none"
              >
                <div className="flex items-center gap-3">
                  <span
                    aria-hidden="true"
                    className="flex size-10 shrink-0 items-center justify-center rounded-full bg-sage-soft text-sm font-medium text-primary-foreground"
                  >
                    {founder.name.charAt(0)}
                  </span>
                  <div>
                    <h3 className="text-base font-medium">{founder.name}</h3>
                    <p className="mt-0.5 text-xs text-muted-foreground">{founder.role}</p>
                  </div>
                </div>
                <div className="mt-4 border-t border-border pt-2">
                  <a
                    href={founder.whatsapp}
                    aria-label={`Message ${founder.name} on WhatsApp: ${founder.phoneDisplay}`}
                    className="group flex min-h-11 items-center gap-2.5 rounded-lg text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    <MessageCircle
                      aria-hidden="true"
                      className="size-4 shrink-0 group-hover:text-primary-foreground"
                    />
                    <span>{founder.phoneDisplay}</span>
                    <ArrowUpRight aria-hidden="true" className="ml-auto size-3.5 shrink-0" />
                  </a>
                  <a
                    href={`mailto:${founder.email}`}
                    className="flex min-h-11 items-center gap-2.5 rounded-lg py-2 text-xs text-muted-foreground transition-colors hover:text-foreground hover:underline"
                  >
                    <Mail aria-hidden="true" className="size-4 shrink-0" />
                    <span className="min-w-0 break-words">
                      {founder.email.split("@")[0]}
                      <wbr />@{founder.email.split("@")[1]}
                    </span>
                  </a>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col gap-4 border-t border-border py-5 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Nydrex</p>
          <p className="max-w-sm leading-relaxed sm:text-center">{site.principle}</p>
          <a
            href="#main"
            className="inline-flex min-h-11 items-center gap-2 self-start rounded-full border border-border px-4 text-foreground transition-colors hover:bg-primary sm:self-auto"
          >
            Back to top
            <ArrowUp className="size-3.5" />
          </a>
        </div>
      </div>
    </footer>
  );
}

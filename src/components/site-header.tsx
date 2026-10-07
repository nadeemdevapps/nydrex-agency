import { useEffect, useId, useState } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import * as Dialog from "@radix-ui/react-dialog";
import { ArrowRight, Menu, X } from "lucide-react";
import { Logo } from "@/components/logo";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { nav, services } from "@/lib/site";

const serviceIcons: Record<string, string> = {
  "custom-software": "01",
  "web-apps": "02",
  automation: "03",
  "tools-dashboards": "04",
  mobile: "05",
  "local-business": "06",
};

export function SiteHeader() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const menuId = useId();

  useEffect(() => {
    setServicesOpen(false);
    setMobileOpen(false);
  }, [pathname]);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-3 focus:z-50 focus:rounded-full focus:bg-primary focus:px-4 focus:py-2 focus:text-sm focus:text-primary-foreground"
      >
        Skip to content
      </a>
      <div
        className="relative mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:h-[4.25rem] sm:px-8"
        onMouseLeave={() => setServicesOpen(false)}
      >
        <Link
          to="/"
          aria-label="Nydrex home"
          className="relative z-10 rounded-lg focus-visible:outline-none"
        >
          <Logo />
        </Link>

        <nav
          className="absolute inset-x-0 hidden items-center justify-center gap-1 md:flex"
          aria-label="Primary"
        >
          {nav.map((item) =>
            item.hasMenu ? (
              <button
                key={item.to}
                type="button"
                className={cn(
                  "rounded-full px-3.5 py-2 text-sm font-medium text-muted-foreground transition-[color,background-color] duration-150 ease-out hover:bg-mist hover:text-foreground",
                  (pathname.startsWith("/services") || servicesOpen) &&
                    "text-foreground",
                )}
                aria-expanded={servicesOpen}
                aria-controls={menuId}
                onMouseEnter={() => setServicesOpen(true)}
                onFocus={() => setServicesOpen(true)}
                onClick={() => setServicesOpen((v) => !v)}
              >
                {item.label}
              </button>
            ) : (
              <Link
                key={item.to}
                to={item.to}
                onMouseEnter={() => setServicesOpen(false)}
                className={cn(
                  "rounded-full px-3.5 py-2 text-sm font-medium text-muted-foreground transition-[color,background-color] duration-150 ease-out hover:bg-mist hover:text-foreground",
                  pathname === item.to && "text-foreground",
                )}
              >
                {item.label}
              </Link>
            ),
          )}
        </nav>

        <div className="relative z-10 flex items-center gap-2">
          <Button asChild size="sm" className="hidden sm:inline-flex">
            <Link to="/contact">
              Start a project
              <ArrowRight />
            </Link>
          </Button>
          <Button asChild size="sm" className="sm:hidden">
            <Link to="/contact">Start</Link>
          </Button>

          <Dialog.Root open={mobileOpen} onOpenChange={setMobileOpen}>
            <Dialog.Trigger asChild>
              <Button
                variant="outline"
                size="icon"
                className="md:hidden"
                aria-label="Open menu"
              >
                <Menu />
              </Button>
            </Dialog.Trigger>
            <Dialog.Portal>
              <Dialog.Overlay className="fixed inset-0 z-50 bg-ink/30 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0" />
              <Dialog.Content className="fixed inset-y-0 right-0 z-50 flex w-[min(100%,22rem)] flex-col bg-background p-6 shadow-border focus:outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right">
                <div className="flex items-center justify-between">
                  <Dialog.Title className="text-base font-semibold">Menu</Dialog.Title>
                  <Dialog.Close asChild>
                    <Button variant="outline" size="icon" aria-label="Close menu">
                      <X />
                    </Button>
                  </Dialog.Close>
                </div>
                <nav className="mt-8 flex flex-col gap-1" aria-label="Mobile">
                  {nav.map((item) => (
                    <Link
                      key={item.to}
                      to={item.to}
                      className="rounded-2xl px-3 py-3 text-lg font-medium hover:bg-mist"
                    >
                      {item.label}
                    </Link>
                  ))}
                </nav>
                <div className="mt-6 border-t border-border pt-6">
                  <p className="font-mono text-xs tracking-widest text-muted-foreground uppercase">
                    Services
                  </p>
                  <ul className="mt-3 space-y-1">
                    {services.map((s) => (
                      <li key={s.slug}>
                        <Link
                          to="/services"
                          hash={s.slug}
                          className="block rounded-xl px-3 py-2.5 text-sm text-muted-foreground hover:bg-mist hover:text-foreground"
                        >
                          {s.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
                <Button asChild className="mt-auto w-full">
                  <Link to="/contact">
                    Start a project
                    <ArrowRight />
                  </Link>
                </Button>
              </Dialog.Content>
            </Dialog.Portal>
          </Dialog.Root>
        </div>
      </div>

      <div
        id={menuId}
        hidden={!servicesOpen}
        className={cn(
          "absolute inset-x-0 top-full hidden border-b border-border bg-background md:block",
          !servicesOpen && "pointer-events-none",
        )}
        onMouseEnter={() => setServicesOpen(true)}
      >
        {servicesOpen ? (
          <div className="mx-auto grid max-w-6xl grid-cols-2 gap-2 px-8 py-6 lg:grid-cols-3">
            <div className="col-span-2 flex flex-col justify-between rounded-2xl bg-mist p-6 lg:col-span-1">
              <div>
                <p className="font-mono text-xs tracking-widest text-muted-foreground uppercase">
                  Product
                </p>
                <p className="mt-3 text-xl font-medium tracking-tight">
                  Software, systems and tools — built around the work.
                </p>
              </div>
              <Link
                to="/services"
                className="mt-8 inline-flex items-center gap-2 text-sm font-medium"
              >
                All services
                <ArrowRight className="size-4" />
              </Link>
            </div>
            {services.map((s) => (
              <Link
                key={s.slug}
                to="/services"
                hash={s.slug}
                className="group rounded-2xl p-4 transition-[background-color] duration-150 ease-out hover:bg-mist"
              >
                <p className="font-mono text-[11px] tracking-widest text-muted-foreground uppercase">
                  {serviceIcons[s.slug]}
                </p>
                <p className="mt-2 text-sm font-medium text-foreground">{s.title}</p>
                <p className="mt-1 text-sm leading-snug text-muted-foreground">
                  {s.short}
                </p>
              </Link>
            ))}
          </div>
        ) : null}
      </div>
    </header>
  );
}

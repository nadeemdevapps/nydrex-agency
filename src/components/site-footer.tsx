import { Link } from "@tanstack/react-router";
import { Logo } from "@/components/logo";
import { founders, nav, services, site } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto grid max-w-6xl gap-12 px-5 py-16 sm:px-8 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <Logo />
          <p className="mt-5 max-w-sm text-sm leading-relaxed text-muted-foreground">
            {site.longDescription}
          </p>
        </div>
        <div className="grid grid-cols-2 gap-10 sm:grid-cols-3 lg:col-span-7">
          <div>
            <p className="font-mono text-xs tracking-widest text-muted-foreground uppercase">
              Pages
            </p>
            <ul className="mt-4 space-y-2.5">
              {nav.map((item) => (
                <li key={item.to}>
                  <Link
                    to={item.to}
                    className="text-sm text-foreground/80 hover:text-foreground"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  to="/contact"
                  className="text-sm text-foreground/80 hover:text-foreground"
                >
                  Start a project
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <p className="font-mono text-xs tracking-widest text-muted-foreground uppercase">
              Services
            </p>
            <ul className="mt-4 space-y-2.5">
              {services.map((s) => (
                <li key={s.slug}>
                  <Link
                    to="/services"
                    hash={s.slug}
                    className="text-sm text-foreground/80 hover:text-foreground"
                  >
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="col-span-2 sm:col-span-1">
            <p className="font-mono text-xs tracking-widest text-muted-foreground uppercase">
              Founders
            </p>
            <ul className="mt-4 space-y-3">
              {founders.map((f) => (
                <li key={f.name}>
                  <p className="text-sm font-medium">{f.name}</p>
                  <a
                    href={f.whatsapp}
                    className="text-sm text-muted-foreground hover:text-foreground"
                  >
                    {f.phoneDisplay}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="border-t border-border">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-5 py-6 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between sm:px-8">
          <p>© {new Date().getFullYear()} Nydrex</p>
          <p className="font-mono text-xs">{site.principle}</p>
        </div>
      </div>
    </footer>
  );
}

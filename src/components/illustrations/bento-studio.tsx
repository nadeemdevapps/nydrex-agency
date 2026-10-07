import { Bell, Bookmark, FileText } from "lucide-react";
import { LogoMark } from "@/components/logo";

export function BentoStudio() {
  return (
    <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4 lg:grid-rows-2">
      <div className="flex items-center justify-center rounded-2xl border border-border bg-card p-6 shadow-border sm:p-8">
        <div className="rotate-[-8deg]">
          <LogoMark className="size-14 sm:size-20 shadow-border" />
        </div>
      </div>

      <div className="overflow-hidden rounded-2xl bg-ink">
        <svg viewBox="0 0 200 200" className="size-full text-primary" aria-hidden="true">
          <rect width="200" height="200" fill="var(--color-ink)" />
          <path
            d="M20 160 C60 40, 140 40, 180 160"
            fill="none"
            stroke="var(--color-primary)"
            strokeWidth="2"
          />
          <path
            d="M30 40 L90 110 L50 170"
            fill="none"
            stroke="var(--color-sage-soft)"
            strokeWidth="1.5"
          />
          <circle cx="140" cy="70" r="18" fill="var(--color-primary)" />
          <rect x="120" y="120" width="46" height="28" rx="8" fill="var(--color-card)" />
        </svg>
      </div>

      <div className="col-span-2 row-span-2 flex flex-col justify-between overflow-hidden rounded-2xl bg-primary p-5 text-primary-foreground sm:p-8">
        <p className="font-mono text-xs tracking-widest uppercase opacity-70">
          Inside a Nydrex system
        </p>
        <div className="relative mx-auto mt-6 h-40 w-full max-w-xs sm:h-48">
          <WikiCard className="absolute top-8 left-2 rotate-[-8deg] opacity-80 sm:left-4" title="Handbook" />
          <WikiCard className="absolute top-4 left-6 rotate-[-2deg] opacity-90 sm:left-10" title="Playbooks" />
          <WikiCard className="absolute top-0 left-10 rotate-3 sm:left-16" title="Operations" active />
        </div>
        <p className="mt-6 max-w-sm text-sm leading-relaxed text-primary-foreground/80">
          Knowledge, tasks and daily work live in one place — searchable, assignable,
          and connected to the rest of the system.
        </p>
      </div>

      <div className="rounded-2xl border border-border bg-card p-5 shadow-border">
        <p className="font-mono text-xs tracking-widest text-muted-foreground uppercase">
          New module
        </p>
        <p className="mt-2 text-lg font-medium leading-tight">Security policies</p>
        <p className="mt-2 flex items-center gap-1.5 text-xs text-muted-foreground">
          <FileText className="size-3.5" /> 5 pages
        </p>
        <div className="mt-4 flex items-center justify-between">
          <span className="flex size-8 items-center justify-center rounded-full bg-primary text-primary-foreground">
            +
          </span>
          <span className="rounded-full bg-sage-soft px-2.5 py-1 text-xs text-primary-foreground">
            Internal
          </span>
        </div>
      </div>

      <div className="flex items-center justify-center rounded-2xl border border-border bg-card shadow-border">
        <div className="relative">
          <Bookmark className="size-10 text-ink sm:size-12" strokeWidth={1.25} />
          <Bell className="absolute -right-2 -bottom-1 size-5 text-ink sm:size-6" strokeWidth={1.5} />
        </div>
      </div>
    </div>
  );
}

function WikiCard({
  className,
  title,
  active,
}: {
  className?: string;
  title: string;
  active?: boolean;
}) {
  return (
    <div
      className={`w-44 rounded-2xl border border-border bg-card p-4 text-foreground shadow-border sm:w-52 ${className ?? ""}`}
    >
      <p className="font-mono text-xs tracking-widest text-muted-foreground uppercase">
        Wiki
      </p>
      <div className="mt-3 space-y-1.5 text-sm">
        <p className="text-muted-foreground">Employee resources</p>
        <p
          className={`flex items-center justify-between rounded-lg px-2 py-1 ${active ? "bg-mist font-medium" : ""}`}
        >
          {title}
          <span className="text-muted-foreground">›</span>
        </p>
        <p className="text-muted-foreground">Daily playbook</p>
      </div>
    </div>
  );
}

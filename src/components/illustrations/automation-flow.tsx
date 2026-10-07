import {
  ArrowDown,
  ArrowRight,
  Bell,
  Blocks,
  Cable,
  ClipboardList,
  Monitor,
  Wrench,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { LogoMark } from "@/components/logo";

export function AutomationFlow() {
  return (
    <div
      className="overflow-hidden rounded-2xl border border-border bg-mist p-6 sm:p-10"
      aria-hidden="true"
    >
      <p className="font-mono text-xs tracking-widest text-muted-foreground uppercase">
        One connected system
      </p>
      <div className="mt-8 flex flex-col items-center gap-5 md:flex-row md:gap-4">
        <div className="w-full space-y-3 md:flex-1">
          <Node label="Business problem" note="Understand the work" icon={ClipboardList} />
          <Node label="Existing tools" note="Connect what you already use" icon={Wrench} />
        </div>
        <Connector />
        <div className="flex w-full items-center gap-4 rounded-2xl bg-primary p-5 text-primary-foreground md:w-auto md:flex-1">
          <LogoMark className="size-10 shrink-0" />
          <div>
            <p className="text-lg font-medium">Nydrex</p>
            <p className="mt-1 text-xs">Plan. Build. Connect.</p>
          </div>
        </div>
        <Connector />
        <div className="w-full space-y-3 md:flex-1">
          <Node label="Web application" note="A place to get the work done" icon={Monitor} />
          <Node label="Dashboard" note="See what needs attention" icon={Blocks} />
          <Node label="Automation" note="The next handoff happens" icon={Cable} />
        </div>
      </div>
      <p className="mt-8 flex items-center gap-2 text-xs text-muted-foreground">
        <Bell className="size-3.5" /> Information reaches the right person, at the right step.
      </p>
    </div>
  );
}

function Connector() {
  return (
    <span className="text-muted-foreground">
      <ArrowDown className="size-5 md:hidden" strokeWidth={1.25} />
      <ArrowRight className="hidden size-5 md:block" strokeWidth={1.25} />
    </span>
  );
}

function Node({ label, note, icon: Icon }: { label: string; note: string; icon: LucideIcon }) {
  return (
    <div className="flex items-center gap-3 rounded-xl bg-card p-4 text-foreground shadow-border">
      <span className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-mist">
        <Icon className="size-4" strokeWidth={1.5} />
      </span>
      <div>
        <p className="text-sm font-medium">{label}</p>
        <p className="mt-1 text-xs text-muted-foreground">{note}</p>
      </div>
    </div>
  );
}

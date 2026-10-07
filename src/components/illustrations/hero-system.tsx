import type { ReactNode } from "react";

export function HeroSystem() {
  return (
    <div
      className="relative mx-auto aspect-square w-full max-w-lg"
      aria-hidden="true"
    >
      <div className="absolute inset-[8%] rounded-full border border-border" />
      <div className="absolute inset-[18%] rounded-full border border-dashed border-border" />

      <div className="absolute top-[22%] right-[10%] left-[16%] sm:top-[18%] sm:right-[8%] sm:left-[18%] motion-safe-float">
        <WindowFrame title="Operations">
          <p className="font-mono text-xs tracking-widest text-muted-foreground uppercase">
            Intake → Build → Live
          </p>
          <div className="mt-3 flex gap-1.5">
            <span className="h-10 flex-1 rounded-md bg-mist" />
            <span className="h-10 w-10 rounded-md bg-sage-soft" />
            <span className="h-10 flex-1 rounded-md bg-mist" />
          </div>
          <div className="mt-3 flex items-end gap-1">
            {[40, 64, 48, 80, 56, 72, 44].map((h, i) => (
              <span
                key={i}
                className="flex-1 rounded-sm bg-ink/80"
                style={{ height: h / 4 }}
              />
            ))}
          </div>
        </WindowFrame>
      </div>

      <div className="absolute top-[8%] left-[6%] w-[38%] -rotate-6 sm:top-[6%] sm:left-[4%] sm:w-[42%] motion-safe-float [animation-delay:-1.4s]">
        <PhoneFrame />
      </div>

      <div className="absolute top-[10%] right-[4%] hidden w-[38%] rotate-3 sm:block motion-safe-float [animation-delay:-2.2s]">
        <MiniCard>
          <div className="flex items-center justify-between">
            <span className="text-xs font-medium">Queue</span>
            <span className="rounded-full bg-primary px-2 py-0.5 font-mono text-xs text-primary-foreground">
              live
            </span>
          </div>
          <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-mist">
            <div className="h-full w-2/3 rounded-full bg-ink" />
          </div>
          <p className="mt-2 font-mono text-xs text-muted-foreground">3 of 5 steps</p>
        </MiniCard>
      </div>

      <div className="absolute bottom-[16%] left-[8%] hidden w-[46%] rotate-[-4deg] sm:block motion-safe-float [animation-delay:-0.8s]">
        <MiniCard>
          <p className="font-mono text-xs tracking-widest text-muted-foreground uppercase">
            Flow
          </p>
          <p className="mt-1 text-sm font-medium">Form → API → Notify</p>
          <div className="mt-3 flex items-center gap-2">
            <span className="size-6 rounded-full bg-primary" />
            <span className="h-px flex-1 bg-border" />
            <span className="size-6 rounded-full border border-ink bg-card" />
            <span className="h-px flex-1 bg-border" />
            <span className="size-6 rounded-full bg-ink" />
          </div>
        </MiniCard>
      </div>

      <div className="absolute right-[6%] bottom-[12%] w-[44%] rotate-6 sm:right-[4%] sm:bottom-[10%] sm:w-[40%] motion-safe-float [animation-delay:-3s]">
        <MiniCard>
          <p className="text-xs font-medium">To-do, today</p>
          <ul className="mt-2 space-y-1.5">
            <li className="flex items-center gap-2 text-xs text-muted-foreground">
              <span className="size-3.5 rounded-full bg-primary" />
              Confirm intake
            </li>
            <li className="flex items-center gap-2 text-xs text-muted-foreground">
              <span className="size-3.5 rounded-full bg-primary" />
              Map the handoff
            </li>
            <li className="hidden items-center gap-2 text-xs text-muted-foreground sm:flex">
              <span className="size-3.5 rounded-full border border-border" />
              Review with team
            </li>
          </ul>
        </MiniCard>
      </div>
    </div>
  );
}

function WindowFrame({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div className="rounded-2xl border border-border bg-card p-3 shadow-border">
      <div className="mb-3 flex items-center gap-2">
        <span className="size-1.5 rounded-full bg-border" />
        <span className="size-1.5 rounded-full bg-border" />
        <span className="size-1.5 rounded-full bg-primary" />
        <span className="ml-2 font-mono text-xs text-muted-foreground">{title}</span>
      </div>
      {children}
    </div>
  );
}

function MiniCard({ children }: { children: ReactNode }) {
  return (
    <div className="rounded-2xl border border-border bg-card p-3.5 shadow-border">
      {children}
    </div>
  );
}

function PhoneFrame() {
  return (
    <div className="rounded-[1.6rem] border border-border bg-card p-2 shadow-border">
      <div className="mx-auto mb-2 h-1.5 w-10 rounded-full bg-mist" />
      <div className="rounded-xl bg-mist p-3">
        <p className="text-xs font-medium">Customer portal</p>
        <div className="mt-2 space-y-1.5">
          <div className="h-2 w-3/4 rounded bg-card" />
          <div className="h-2 w-1/2 rounded bg-card" />
        </div>
        <div className="mt-3 rounded-lg bg-primary px-2 py-1.5 text-center font-mono text-xs text-primary-foreground">
          Open request
        </div>
      </div>
    </div>
  );
}

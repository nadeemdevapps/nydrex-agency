import type { ReactNode } from "react";
import { useState } from "react";
import { Check, Paperclip, UserPlus } from "lucide-react";

export function ComponentBoard() {
  const [happy, setHappy] = useState(7);
  const [repeat, setRepeat] = useState(true);
  const days = ["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"];
  const [activeDays, setActiveDays] = useState(["Mo", "We", "Fr"]);

  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      <BoardCard>
        <div className="flex h-10 items-center rounded-full border border-border bg-mist px-3 text-sm">
          <span className="text-muted-foreground">Search</span>
          <span className="ml-2">invoice</span>
        </div>
        <p className="mt-3 font-mono text-xs tracking-widest text-muted-foreground uppercase">
          Found 2 results
        </p>
        <p className="mt-2 text-sm">
          The <mark className="rounded-sm bg-primary px-0.5">invoice</mark>{" "}
          intake flow
        </p>
      </BoardCard>

      <BoardCard>
        <div className="mx-auto w-full max-w-56 overflow-hidden rounded-2xl border border-border bg-card text-sm shadow-border">
          <button type="button" className="block w-full px-4 py-2.5 text-left text-muted-foreground">
            Edit
          </button>
          <button
            type="button"
            className="flex w-full items-center justify-between bg-primary px-4 py-2.5 text-left font-medium text-primary-foreground"
          >
            Generate report
          </button>
          <button type="button" className="block w-full px-4 py-2.5 text-left text-muted-foreground">
            Remove
          </button>
        </div>
      </BoardCard>

      <BoardCard>
        <div className="flex items-center justify-between text-xs text-muted-foreground">
          <span className="h-1 w-16 rounded-full bg-primary" />
          <span className="font-mono">2 / 6 complete</span>
        </div>
        <ul className="mt-4 space-y-2 text-sm">
          <li className="flex items-center gap-2">
            <span className="flex size-5 items-center justify-center rounded-full bg-primary">
              <Check className="size-3 text-primary-foreground" />
            </span>
            How it starts
          </li>
          <li className="flex items-center gap-2">
            <span className="flex size-5 items-center justify-center rounded-full bg-primary">
              <Check className="size-3 text-primary-foreground" />
            </span>
            Roles and access
          </li>
          <li className="flex items-center gap-2 text-muted-foreground">
            <span className="size-5 rounded-full border border-border" />
            Working together
          </li>
        </ul>
      </BoardCard>

      <BoardCard>
        <div className="flex items-start gap-4">
          <div>
            <p className="text-2xl font-medium leading-none">08</p>
            <p className="mt-1 font-mono text-xs tracking-widest text-muted-foreground uppercase">
              Sun
            </p>
          </div>
          <div className="flex-1 rounded-2xl border border-border bg-mist p-3">
            <p className="text-sm font-medium">Shift</p>
            <p className="font-mono text-xs text-muted-foreground">09:00 to 17:00</p>
            <div className="mt-2 flex gap-1">
              <span className="rounded-full bg-card px-2 py-0.5 text-xs">Floor</span>
              <span className="rounded-full bg-primary px-2 py-0.5 text-xs text-primary-foreground">
                Ops
              </span>
            </div>
          </div>
        </div>
      </BoardCard>

      <BoardCard>
        <div className="rounded-2xl border border-border bg-mist p-4 text-center">
          <p className="text-sm font-medium">To your attention</p>
          <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
            Delivery window moved. Confirm the new handoff in the system.
          </p>
          <div className="mt-3 flex justify-center gap-2">
            <span className="rounded-full border border-border bg-card px-3 py-1 text-xs">
              Later
            </span>
            <span className="rounded-full bg-primary px-3 py-1 text-xs text-primary-foreground">
              Accept
            </span>
          </div>
        </div>
      </BoardCard>

      <BoardCard>
        <div className="flex items-center justify-between">
          <p className="text-sm font-medium">Is repeating</p>
          <button
            type="button"
            role="switch"
            aria-checked={repeat}
            onClick={() => setRepeat((v) => !v)}
            className={`relative h-6 w-10 rounded-full transition-[background-color] duration-150 ease-out ${repeat ? "bg-primary" : "bg-mist"}`}
          >
            <span
              className={`absolute top-0.5 size-5 rounded-full bg-card shadow-border transition-transform duration-150 ease-out ${repeat ? "translate-x-4" : "translate-x-0.5"}`}
            />
          </button>
        </div>
        <p className="mt-3 text-xs text-muted-foreground">Repeat weekly</p>
        <div className="mt-3 flex gap-1">
          {days.map((d) => {
            const on = activeDays.includes(d);
            return (
              <button
                key={d}
                type="button"
                onClick={() =>
                  setActiveDays((curr) =>
                    curr.includes(d) ? curr.filter((x) => x !== d) : [...curr, d],
                  )
                }
                className={`h-8 min-w-0 flex-1 rounded-full text-xs font-medium ${on ? "bg-ink text-secondary-foreground" : "border border-border text-muted-foreground"}`}
              >
                {d.slice(0, 2)}
              </button>
            );
          })}
        </div>
      </BoardCard>

      <BoardCard>
        <div className="flex items-stretch overflow-hidden rounded-2xl border border-border">
          <div className="flex-1 p-4">
            <p className="font-mono text-xs tracking-widest text-muted-foreground uppercase">
              Open queue
            </p>
            <p className="mt-2 inline-flex rounded-full bg-primary px-2 py-0.5 text-sm font-medium text-primary-foreground">
              12
            </p>
          </div>
          <div className="flex-1 border-l border-border p-4 text-xs text-muted-foreground">
            <p>8 ready</p>
            <p>3 waiting</p>
            <p>1 blocked</p>
          </div>
        </div>
      </BoardCard>

      <BoardCard>
        <p className="text-center text-sm font-medium">How clear is the system?</p>
        <input
          type="range"
          min={1}
          max={10}
          value={happy}
          onChange={(e) => setHappy(Number(e.target.value))}
          className="mt-4 w-full accent-ink"
          aria-label="Clarity rating"
        />
        <p className="mt-2 text-center font-mono text-sm">{happy} / 10</p>
      </BoardCard>

      <BoardCard>
        <div className="flex items-center gap-2 rounded-full border border-border bg-mist px-3 py-2 text-sm">
          <span className="rounded-full bg-primary px-2 py-0.5 text-xs text-primary-foreground">
            @nydrex
          </span>
          <span>check the flow</span>
        </div>
        <div className="mt-3 flex gap-2">
          <span className="inline-flex items-center gap-1 rounded-full border border-border px-3 py-1.5 text-xs">
            <Paperclip className="size-3" /> Attach
          </span>
          <span className="inline-flex items-center gap-1 rounded-full border border-border px-3 py-1.5 text-xs">
            <UserPlus className="size-3" /> Assign
          </span>
        </div>
      </BoardCard>
    </div>
  );
}

function BoardCard({ children }: { children: ReactNode }) {
  return (
    <div className="rounded-[1.6rem] border border-border bg-card p-5 shadow-border min-w-0">
      {children}
    </div>
  );
}

export function ServiceVisual({ slug }: { slug: string }) {
  switch (slug) {
    case "custom-software":
      return (
        <Frame>
          <p className="font-mono text-[10px] tracking-widest text-muted-foreground uppercase">
            System map
          </p>
          <div className="mt-4 grid grid-cols-3 gap-2">
            {["Intake", "Core", "Handoff"].map((l) => (
              <div key={l} className="rounded-xl bg-mist p-3 text-center text-xs font-medium">
                {l}
              </div>
            ))}
          </div>
          <div className="mt-3 h-16 rounded-xl bg-ink" />
        </Frame>
      );
    case "web-apps":
      return (
        <Frame>
          <div className="flex gap-1.5">
            <span className="size-1.5 rounded-full bg-border" />
            <span className="size-1.5 rounded-full bg-border" />
            <span className="size-1.5 rounded-full bg-primary" />
          </div>
          <div className="mt-4 flex gap-3">
            <div className="w-16 space-y-2">
              <div className="h-2 rounded bg-mist" />
              <div className="h-2 w-3/4 rounded bg-mist" />
              <div className="h-2 w-2/3 rounded bg-primary" />
            </div>
            <div className="flex-1 rounded-xl bg-mist p-3">
              <div className="h-2 w-1/2 rounded bg-card" />
              <div className="mt-3 grid grid-cols-2 gap-2">
                <div className="h-10 rounded-lg bg-card" />
                <div className="h-10 rounded-lg bg-card" />
              </div>
            </div>
          </div>
        </Frame>
      );
    case "automation":
      return (
        <Frame>
          <div className="flex items-center justify-between">
            {["Form", "API", "CRM"].map((l, i) => (
              <div key={l} className="flex items-center gap-2">
                <span
                  className={`flex size-12 items-center justify-center rounded-full text-[11px] font-medium ${i === 1 ? "bg-primary text-primary-foreground" : "border border-border"}`}
                >
                  {l}
                </span>
                {i < 2 ? <span className="h-px w-6 bg-border sm:w-10" /> : null}
              </div>
            ))}
          </div>
          <p className="mt-4 font-mono text-[10px] text-muted-foreground">
            then notify the right person
          </p>
        </Frame>
      );
    case "tools-dashboards":
      return (
        <Frame>
          <div className="grid grid-cols-3 gap-2">
            <div className="col-span-2 rounded-xl bg-mist p-3">
              <div className="flex items-end gap-1">
                {[28, 44, 32, 52, 36].map((h, i) => (
                  <span
                    key={i}
                    className="flex-1 rounded-sm bg-ink"
                    style={{ height: h }}
                  />
                ))}
              </div>
            </div>
            <div className="rounded-xl bg-primary p-3">
              <p className="font-mono text-[10px] text-primary-foreground/70">Focus</p>
              <p className="mt-2 text-lg font-medium text-primary-foreground">Now</p>
            </div>
          </div>
        </Frame>
      );
    case "mobile":
      return (
        <Frame>
          <div className="mx-auto w-28 rounded-[1.4rem] border border-border p-2">
            <div className="mx-auto h-1 w-8 rounded-full bg-mist" />
            <div className="mt-3 space-y-2 rounded-xl bg-mist p-3">
              <div className="h-2 w-3/4 rounded bg-card" />
              <div className="h-2 w-1/2 rounded bg-card" />
              <div className="h-8 rounded-lg bg-primary" />
            </div>
          </div>
        </Frame>
      );
    default:
      return (
        <Frame>
          <div className="grid grid-cols-2 gap-2">
            <div className="rounded-xl bg-mist p-3">
              <p className="text-xs font-medium">Counter</p>
              <div className="mt-2 h-8 rounded-lg bg-card" />
            </div>
            <div className="rounded-xl bg-ink p-3 text-secondary-foreground">
              <p className="text-xs">Back office</p>
              <div className="mt-2 h-8 rounded-lg bg-secondary-foreground/10" />
            </div>
            <div className="col-span-2 rounded-xl border border-border p-3">
              <p className="text-xs text-muted-foreground">Today’s floor</p>
              <div className="mt-2 h-2 rounded bg-primary" />
            </div>
          </div>
        </Frame>
      );
  }
}

function Frame({ children }: { children: React.ReactNode }) {
  return (
    <div className="rounded-[1.6rem] border border-border bg-card p-5 shadow-border">
      {children}
    </div>
  );
}

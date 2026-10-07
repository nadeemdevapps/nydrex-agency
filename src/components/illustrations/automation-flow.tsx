export function AutomationFlow() {
  return (
    <div
      className="relative overflow-hidden rounded-[2rem] border border-border bg-mist p-6 sm:p-8"
      aria-hidden="true"
    >
      <svg
        className="absolute inset-0 size-full text-border"
        preserveAspectRatio="none"
      >
        <line
          x1="18%"
          y1="30%"
          x2="48%"
          y2="48%"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeDasharray="4 6"
        />
        <line
          x1="48%"
          y1="52%"
          x2="78%"
          y2="28%"
          stroke="currentColor"
          strokeWidth="1.5"
        />
        <line
          x1="50%"
          y1="58%"
          x2="76%"
          y2="72%"
          stroke="currentColor"
          strokeWidth="1.5"
        />
        <line
          x1="22%"
          y1="68%"
          x2="46%"
          y2="55%"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeDasharray="4 6"
        />
      </svg>

      <Node className="absolute top-[12%] left-[8%] w-36" label="Business problem" tone="card" />
      <Node className="absolute top-[58%] left-[10%] w-32" label="Existing tools" tone="card" />
      <Node
        className="absolute top-[38%] left-[38%] w-40"
        label="Nydrex"
        tone="mint"
        plus
      />
      <Node className="absolute top-[10%] right-[8%] w-36" label="Web application" tone="ink" />
      <Node className="absolute right-[10%] bottom-[12%] w-36" label="Automation" tone="card" />
      <Node className="absolute top-[42%] right-[34%] hidden w-28 sm:block" label="Dashboard" tone="card" />

      <div className="pointer-events-none relative h-72 sm:h-80" />
    </div>
  );
}

function Node({
  className,
  label,
  tone,
  plus,
}: {
  className?: string;
  label: string;
  tone: "card" | "mint" | "ink";
  plus?: boolean;
}) {
  const tones = {
    card: "bg-card text-foreground border-border",
    mint: "bg-primary text-primary-foreground border-transparent",
    ink: "bg-secondary text-secondary-foreground border-transparent",
  } as const;
  return (
    <div
      className={`flex items-center gap-2 rounded-2xl border px-3 py-2.5 text-sm font-medium shadow-border ${tones[tone]} ${className ?? ""}`}
    >
      {plus ? (
        <span className="flex size-6 items-center justify-center rounded-full bg-ink text-xs text-secondary-foreground">
          +
        </span>
      ) : (
        <span className="size-2.5 rounded-full bg-current opacity-40" />
      )}
      {label}
    </div>
  );
}

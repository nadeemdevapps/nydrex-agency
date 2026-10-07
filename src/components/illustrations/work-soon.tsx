export function WorkSoon() {
  return (
    <div className="relative mx-auto h-48 w-full max-w-sm overflow-hidden sm:h-56 sm:max-w-md sm:overflow-visible" aria-hidden="true">
      <Sheet className="absolute top-10 left-[8%] rotate-[-10deg] opacity-60 sm:left-[12%]" />
      <Sheet className="absolute top-6 left-[14%] rotate-[-4deg] opacity-80 sm:left-[18%]" />
      <Sheet className="absolute top-2 left-[20%] rotate-2 sm:left-[24%]" featured />
    </div>
  );
}

function Sheet({
  className,
  featured,
}: {
  className?: string;
  featured?: boolean;
}) {
  return (
    <div
      className={`w-56 rounded-2xl border border-border bg-card p-5 shadow-border ${className ?? ""}`}
    >
      <div className="flex items-start justify-between">
        <p className="font-mono text-[10px] tracking-widest text-muted-foreground uppercase">
          Case study
        </p>
        <span className="size-4 rounded-sm border border-border" />
      </div>
      <div className="mt-4 space-y-2">
        <div className="h-2.5 w-3/4 rounded bg-mist" />
        <div className="h-2.5 w-1/2 rounded bg-mist" />
      </div>
      {featured ? (
        <span className="mt-5 inline-flex rounded-full bg-primary px-2.5 py-1 font-mono text-[10px] text-primary-foreground">
          Preparing
        </span>
      ) : (
        <div className="mt-5 h-5 w-16 rounded-full bg-mist" />
      )}
    </div>
  );
}

import { ArrowRight } from "lucide-react";

const stages = [
  { label: "Customer", note: "Request, order, question" },
  { label: "Portal", note: "A place to submit and track" },
  { label: "Operations", note: "The team sees and acts" },
  { label: "Automation", note: "Handoffs that run themselves" },
];

export function SystemMap() {
  return (
    <ol className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
      {stages.map((s, i) => (
        <li key={s.label} className="relative">
          <div className="h-full rounded-[1.4rem] border border-border bg-card p-5 shadow-border">
            <p className="font-mono text-[11px] tracking-widest text-muted-foreground uppercase">
              {String(i + 1).padStart(2, "0")}
            </p>
            <p className="mt-3 text-lg font-medium">{s.label}</p>
            <p className="mt-1 text-sm text-muted-foreground">{s.note}</p>
          </div>
          {i < stages.length - 1 ? (
            <ArrowRight className="absolute top-1/2 -right-2 hidden size-4 -translate-y-1/2 text-muted-foreground lg:block" />
          ) : null}
        </li>
      ))}
    </ol>
  );
}

import { cn } from "@/lib/utils";

export function LogoMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 16 16"
      fill="none"
      aria-hidden="true"
      className={cn("size-8", className)}
    >
      <rect width="16" height="16" rx="4" className="fill-primary" />
      <g className="fill-ink">
        <rect x="3.75" y="3.25" width="2.3" height="9.5" rx="0.6" />
        <rect x="9.95" y="3.25" width="2.3" height="9.5" rx="0.6" />
        <polygon points="5.35,3.25 7.65,3.25 12.25,12.75 9.95,12.75" />
        <circle cx="4.9" cy="3.7" r="1.35" />
        <circle cx="4.9" cy="12.3" r="1.35" />
        <circle cx="11.1" cy="3.7" r="1.35" />
        <circle cx="11.1" cy="12.3" r="1.35" />
      </g>
    </svg>
  );
}

export function Logo({ className }: { className?: string }) {
  return (
    <span className={cn("inline-flex items-center gap-2 text-foreground", className)}>
      <LogoMark />
      <span className="text-base font-semibold tracking-tight">Nydrex</span>
    </span>
  );
}

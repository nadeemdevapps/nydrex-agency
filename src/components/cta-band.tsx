import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function CtaBand({
  title = "Build something useful.",
  body = "Tell us the problem. We will help you shape a system that is clearer than the work it replaces.",
}: {
  title?: string;
  body?: string;
}) {
  return (
    <section className="px-5 pb-20 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-6xl overflow-hidden rounded-[2rem] bg-secondary px-8 py-14 text-secondary-foreground sm:px-14 sm:py-16">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-xl">
            <p className="font-mono text-xs tracking-widest text-primary uppercase">
              Start a project
            </p>
            <h2 className="mt-4 text-4xl font-medium tracking-tight sm:text-5xl">
              {title}
            </h2>
            <p className="mt-4 text-base leading-relaxed text-secondary-foreground/70">
              {body}
            </p>
          </div>
          <Button asChild size="lg">
            <Link to="/contact">
              Start a project
              <ArrowRight />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}

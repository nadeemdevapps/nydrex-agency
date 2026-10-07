import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SiteShell } from "@/components/site-shell";
import { WorkSoon } from "@/components/illustrations/work-soon";
import { pageHead, site } from "@/lib/site";

export const Route = createFileRoute("/work")({
  component: WorkPage,
  head: () => pageHead(site.titles.work, site.descriptions.work, "/work"),
});

function WorkPage() {
  return (
    <SiteShell>
      <main
        id="main"
        className="mx-auto flex min-h-[70vh] max-w-6xl flex-col items-center px-5 py-20 text-center sm:px-8"
      >
        <p className="font-mono text-xs tracking-widest text-muted-foreground uppercase">
          Work
        </p>
        <div className="mt-10 w-full">
          <WorkSoon />
        </div>
        <h1 className="mt-4 text-4xl font-medium tracking-tight sm:text-6xl">
          Work, coming soon.
        </h1>
        <p className="mt-5 max-w-lg text-lg text-muted-foreground">
          We’re preparing selected Nydrex projects and case studies for this space.
        </p>
        <p className="mt-3 max-w-md text-sm text-muted-foreground">
          Until then, the most useful next step is a conversation about what you
          need built.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Button asChild size="lg">
            <Link to="/contact">
              Start a project
              <ArrowRight />
            </Link>
          </Button>
          <Button asChild size="lg" variant="outline">
            <Link to="/services">See services</Link>
          </Button>
        </div>
      </main>
    </SiteShell>
  );
}

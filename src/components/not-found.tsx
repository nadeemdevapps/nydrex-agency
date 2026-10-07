import { Link } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SiteShell } from "@/components/site-shell";

export function NotFoundPage() {
  return (
    <SiteShell>
      <main
        id="main"
        className="mx-auto flex min-h-[70vh] max-w-6xl flex-col justify-center px-5 py-24 sm:px-8"
      >
        <p className="font-mono text-xs tracking-widest text-muted-foreground uppercase">
          404
        </p>
        <h1 className="mt-4 max-w-xl text-4xl font-medium tracking-tight sm:text-5xl">
          This page is not here.
        </h1>
        <p className="mt-4 max-w-md text-muted-foreground">
          The address may have changed, or the page does not exist. Head back to
          the Nydrex homepage.
        </p>
        <div className="mt-8">
          <Button asChild variant="ink">
            <Link to="/">
              <ArrowLeft />
              Back home
            </Link>
          </Button>
        </div>
      </main>
    </SiteShell>
  );
}

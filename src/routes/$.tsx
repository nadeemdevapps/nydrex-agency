import { createFileRoute, notFound } from "@tanstack/react-router";
import { NotFoundPage } from "@/components/not-found";
import { pageHead, site } from "@/lib/site";

export const Route = createFileRoute("/$")({
  loader: () => {
    throw notFound();
  },
  component: NotFoundPage,
  head: () => pageHead(site.titles.notFound, site.descriptions.notFound),
});

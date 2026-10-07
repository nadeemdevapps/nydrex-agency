import { createIsomorphicFn } from "@tanstack/react-start";
import { createCspNonce } from "@/lib/security";
import { createRouter } from "@tanstack/react-router";
import { AppErrorComponent } from "@/lib/error-component";
import { NotFoundPage } from "@/components/not-found";
import { routeTree } from "./routeTree.gen";

const getSSROptions = createIsomorphicFn().server(() => ({ nonce: createCspNonce() }));

export function getRouter() {
  return createRouter({
    routeTree,
    ssr: getSSROptions(),
    defaultErrorComponent: AppErrorComponent,
    defaultNotFoundComponent: NotFoundPage,
    scrollRestoration: true,
  });
}

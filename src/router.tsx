import { QueryClient } from "@tanstack/react-query";
import { createRouter } from "@tanstack/react-router";
import { routeTree } from "./routeTree.gen";

// Match Vite's base (see vite.config.ts). BASE_URL is always the string Vite
// was built with (e.g. "/public-value-connect/"); strip the trailing slash for
// TanStack Router's basepath, and normalise "/" → undefined.
const rawBase = import.meta.env.BASE_URL ?? "/";
const basepath = rawBase === "/" ? undefined : rawBase.replace(/\/$/, "");

export const getRouter = () => {
  const queryClient = new QueryClient();

  const router = createRouter({
    routeTree,
    context: { queryClient },
    scrollRestoration: true,
    defaultPreloadStaleTime: 0,
    basepath,
  });

  return router;
};

// Client-only SPA entry for the GitHub Pages build.
// Uses TanStack Router directly (no TanStack Start / SSR).
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider, createRouter } from "@tanstack/react-router";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { routeTree } from "./routeTree.gen";
import "./styles.css";

const rawBase = import.meta.env.BASE_URL ?? "/";
const basepath = rawBase === "/" ? undefined : rawBase.replace(/\/$/, "");

const queryClient = new QueryClient();

const router = createRouter({
  routeTree,
  context: { queryClient },
  scrollRestoration: true,
  defaultPreloadStaleTime: 0,
  basepath,
  defaultNotFoundComponent: () => (
    <div style={{ padding: 24 }}>
      <h1>Page not found</h1>
      <a href={rawBase}>Go home</a>
    </div>
  ),
});

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

const rootEl = document.getElementById("root")!;
createRoot(rootEl).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </StrictMode>,
);

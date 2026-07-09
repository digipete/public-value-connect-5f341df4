// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - TanStack devtools (dev-only, first), tanstackStart, viteReact, tailwindcss, tsConfigPaths,
//     nitro (build-only using cloudflare as a default target), VITE_* env injection, @ path alias,
//     React/TanStack dedupe, error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... }, etc... }) if needed.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

// When deploying to GitHub Pages under a project subpath (e.g. /public-value-connect/),
// set VITE_BASE_PATH=/public-value-connect/ at build time so asset URLs resolve.
// Defaults to "/" for the Lovable preview and local dev.
const basePath = process.env.VITE_BASE_PATH || "/";

export default defineConfig({
  tanstackStart: {
    // Redirect TanStack Start's bundled server entry to src/server.ts (our SSR error wrapper).
    // nitro/vite builds from this
    server: { entry: "server" },
  },
  // Force the static Nitro preset when deploying to GitHub Pages (CI sets
  // NITRO_PRESET=static). Inside Lovable's own build the wrapper ignores
  // this override and keeps cloudflare-module.
  nitro: process.env.NITRO_PRESET === "static" ? { preset: "static" } : undefined,
  vite: {
    base: basePath,
  },
});

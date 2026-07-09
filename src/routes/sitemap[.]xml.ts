import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";

const BASE_URL = "";

interface SitemapEntry {
  path: string;
  changefreq?: "weekly" | "monthly";
  priority?: string;
}

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async () => {
        const entries: SitemapEntry[] = [
          { path: "/", changefreq: "weekly", priority: "1.0" },
          { path: "/role", changefreq: "monthly" },
          { path: "/patient", changefreq: "monthly" },
          { path: "/patient/options", changefreq: "monthly" },
          { path: "/patient/appointment", changefreq: "monthly" },
          { path: "/patient/confirmation", changefreq: "monthly" },
          { path: "/patient/timeline", changefreq: "monthly" },
          { path: "/provider", changefreq: "monthly" },
          { path: "/provider/profile", changefreq: "monthly" },
          { path: "/provider/capacity", changefreq: "monthly" },
          { path: "/provider/demand", changefreq: "monthly" },
          { path: "/provider/improve", changefreq: "monthly" },
          { path: "/supplier", changefreq: "monthly" },
          { path: "/supplier/object", changefreq: "monthly" },
          { path: "/supplier/conformance", changefreq: "monthly" },
          { path: "/supplier/changes", changefreq: "monthly" },
          { path: "/national", changefreq: "monthly" },
          { path: "/national/impact", changefreq: "monthly" },
          { path: "/national/learning", changefreq: "monthly" },
        ];
        const urls = entries
          .map(
            (e) =>
              `  <url><loc>${BASE_URL}${e.path}</loc>${e.changefreq ? `<changefreq>${e.changefreq}</changefreq>` : ""}${e.priority ? `<priority>${e.priority}</priority>` : ""}</url>`,
          )
          .join("\n");
        const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>`;
        return new Response(xml, {
          headers: { "Content-Type": "application/xml", "Cache-Control": "public, max-age=3600" },
        });
      },
    },
  },
});

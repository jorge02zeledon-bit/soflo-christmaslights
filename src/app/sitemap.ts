import type { MetadataRoute } from "next";
import { business, nav } from "@/content/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["/", "/quote", ...nav.map((n) => n.href)];
  return routes.map((path) => ({
    url: `${business.url}${path === "/" ? "" : path}`,
    changeFrequency: path === "/" ? "weekly" : "monthly",
    priority: path === "/" ? 1 : path === "/quote" ? 0.9 : 0.7,
  }));
}

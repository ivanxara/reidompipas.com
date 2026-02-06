import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://reidompipas.com";
  const now = new Date();
  const routes = [
    "/",
    "/carta",
    "/menu-executivo",
    "/eventos",
    "/reservas",
    "/oliveira-de-azemeis",
    "/sao-joao-da-madeira",
    "/santa-maria-da-feira",
    "/vale-de-cambra",
    "/ovar",
  ];

  return routes.map((path) => ({
    url: `${base}${path}`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: path === "/" ? 1 : 0.7,
  }));
}

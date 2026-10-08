import type { MetadataRoute } from "next";
import { PROJECTS, SITE, imgSrc, projectImages } from "@/lib/content";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const pages: MetadataRoute.Sitemap = [
    { url: `${SITE.url}/`, lastModified: now, changeFrequency: "monthly", priority: 1 },
    { url: `${SITE.url}/agence`, lastModified: now, changeFrequency: "yearly", priority: 0.8 },
    { url: `${SITE.url}/expertises`, lastModified: now, changeFrequency: "yearly", priority: 0.8 },
    { url: `${SITE.url}/projets`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${SITE.url}/approche`, lastModified: now, changeFrequency: "yearly", priority: 0.7 },
    { url: `${SITE.url}/contact`, lastModified: now, changeFrequency: "yearly", priority: 0.8 },
  ];
  return pages.concat(
    PROJECTS.map((p) => ({
      url: `${SITE.url}/projets/${p.slug}`,
      lastModified: now,
      changeFrequency: "yearly" as const,
      priority: 0.7,
      images: projectImages(p.slug).slice(0, 10).map(([n]) => `${SITE.url}${imgSrc(p.slug, n)}`),
    }))
  );
}

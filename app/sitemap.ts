import type { MetadataRoute } from "next";
import { SITE } from "@/lib/content";
import { absoluteUrl, sitePages } from "@/lib/pages";

/** Sitemap généré à partir de l'inventaire des pages (lib/pages.ts) :
    pages principales, dossiers de projets et pages « Architecte à … ». */
export default function sitemap(): MetadataRoute.Sitemap {
  return sitePages().map((p) => ({
    url: absoluteUrl(p.path),
    lastModified: p.updated,
    changeFrequency: p.changeFrequency,
    priority: p.priority,
    ...(p.images?.length ? { images: p.images.map((src) => `${SITE.url}${src}`) } : {}),
  }));
}

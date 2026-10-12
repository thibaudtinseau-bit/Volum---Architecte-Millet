import type { Metadata } from "next";
import { SITE } from "./content";

/** Socle Open Graph : Next remplace l'objet `openGraph` du layout par celui de la page,
    chaque page reprend donc ce socle pour garder la langue et le nom du site. */
export const OG_BASE = { type: "website" as const, locale: "fr_FR", siteName: SITE.fullName };

/** Métadonnées d'une page : titre, description, URL canonique, Open Graph et carte Twitter cohérents. */
export function pageMeta(path: string, title: string, description: string, og: Metadata["openGraph"] = {}): Metadata {
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: { ...OG_BASE, url: path, title, description, ...og } as Metadata["openGraph"],
    twitter: { card: "summary_large_image", title, description },
  };
}

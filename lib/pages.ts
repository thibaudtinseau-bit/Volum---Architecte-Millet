/* =========================================================
   INVENTAIRE DES PAGES INDEXABLES
   Source unique du sitemap XML (app/sitemap.ts) et du plan du site
   (app/plan-du-site). Toute nouvelle page indexable s'ajoute ici ;
   les projets et les communes s'y ajoutent automatiquement.
   Pensez à mettre à jour `updated` quand le contenu d'une page change.
   ========================================================= */
import { PROJECTS, SITE, imgSrc, projectImages } from "./content";
import { SECTEURS, VILLES, VILLES_UPDATED } from "./villes";

type Freq = "always" | "hourly" | "daily" | "weekly" | "monthly" | "yearly" | "never";

export type SitePage = {
  path: string;
  title: string;
  /** Rubrique du plan du site */
  group: string;
  /** Date de dernière modification du contenu (AAAA-MM-JJ) */
  updated: string;
  changeFrequency: Freq;
  priority: number;
  /** Chemins des images principales (sitemap images) */
  images?: string[];
};

const MAIN: Omit<SitePage, "group">[] = [
  { path: "/", title: "Accueil", updated: "2026-10-12", changeFrequency: "monthly", priority: 1 },
  { path: "/agence", title: "L'agence", updated: "2026-10-11", changeFrequency: "yearly", priority: 0.8 },
  { path: "/jean-yves-millet", title: "Jean-Yves Millet, architecte DPLG", updated: "2026-10-11", changeFrequency: "yearly", priority: 0.8 },
  { path: "/expertises", title: "Expertises", updated: "2026-10-12", changeFrequency: "yearly", priority: 0.8 },
  { path: "/approche", title: "Notre approche", updated: "2026-10-11", changeFrequency: "yearly", priority: 0.7 },
  { path: "/projets", title: "Projets", updated: "2026-10-11", changeFrequency: "monthly", priority: 0.9 },
  { path: "/architecte", title: "Architecte dans l'Hérault : toutes les communes", updated: VILLES_UPDATED, changeFrequency: "monthly", priority: 0.9 },
  { path: "/contact", title: "Contact", updated: "2026-10-12", changeFrequency: "yearly", priority: 0.8 },
  { path: "/plan-du-site", title: "Plan du site", updated: VILLES_UPDATED, changeFrequency: "monthly", priority: 0.3 },
];

export function sitePages(): SitePage[] {
  const nomSecteur = Object.fromEntries(SECTEURS.map((s) => [s.id, s.nom]));
  return [
    ...MAIN.map((p) => ({ ...p, group: "Pages principales" })),
    ...PROJECTS.map((p) => ({
      path: `/projets/${p.slug}`, title: `${p.title} — ${p.type}`, group: "Projets",
      updated: "2026-10-11", changeFrequency: "yearly" as const, priority: 0.7,
      images: projectImages(p.slug).slice(0, 20).map(([n]) => imgSrc(p.slug, n)),
    })),
    ...VILLES.map((v) => ({
      path: `/architecte/${v.slug}`, title: `Architecte ${v.a}`, group: `Architecte — ${nomSecteur[v.secteur]}`,
      updated: VILLES_UPDATED, changeFrequency: "monthly" as const, priority: v.slug === "montpellier" ? 0.9 : 0.8,
      images: [imgSrc(v.image[0], v.image[1])],
    })),
  ];
}

export const absoluteUrl = (path: string) => `${SITE.url}${path === "/" ? "/" : path}`;

/* =========================================================
   PAGES « ARCHITECTE À {COMMUNE} » — assemblage
   ========================================================= */
import { SITE } from "@/lib/content";
import { COMMUNES_BASE } from "./communes";
import { CONTENU_G1 } from "./contenu/g1";
import { CONTENU_G2 } from "./contenu/g2";
import { CONTENU_G3 } from "./contenu/g3";
import { CONTENU_G4 } from "./contenu/g4";
import { CONTENU_G5 } from "./contenu/g5";
import { CONTENU_G6 } from "./contenu/g6";
import { CONTENU_G7 } from "./contenu/g7";
import { CONTENU_G8 } from "./contenu/g8";
import type { Secteur, SecteurId, Ville, VilleContenu } from "./types";

export type { Secteur, SecteurId, Ville } from "./types";

/** Date de dernière mise à jour des textes des communes (sitemap) */
export const VILLES_UPDATED = "2026-10-12";

const CONTENU: Record<string, VilleContenu> = {
  ...CONTENU_G1, ...CONTENU_G2, ...CONTENU_G3, ...CONTENU_G4,
  ...CONTENU_G5, ...CONTENU_G6, ...CONTENU_G7, ...CONTENU_G8,
};

/** Les secteurs, dans l'ordre d'affichage (page /architecte, pied de page). */
export const SECTEURS: Secteur[] = [
  {
    id: "ouest", nom: "Ouest montpelliérain",
    texte: "De Montarnaud, où est installée l'agence, jusqu'à Saint-Jean-de-Védas : des villages de garrigue et de vigne devenus des communes résidentielles. Les projets y vont de la maison neuve sur un terrain en pente à l'extension d'une villa des années 1980, ou à la réhabilitation d'une maison vigneronne en cœur de village.",
  },
  {
    id: "montpellier-est", nom: "Montpellier et l'est de la Métropole",
    texte: "La ville-centre, ses faubourgs et ses quartiers récents, puis les communes de l'est, de Castelnau-le-Lez à Saint-Brès : un tissu plus dense, où l'on surélève, où l'on agrandit sur de petites parcelles, où l'on transforme des maisons de ville et où se construisent des bâtiments professionnels, avec des règles d'urbanisme précises.",
  },
  {
    id: "nord", nom: "Nord de Montpellier et Pic Saint-Loup",
    texte: "Des rives du Lez aux abords du Pic Saint-Loup, jusqu'à Ganges : garrigues boisées, chênes verts et terrains souvent pentus, où le risque d'incendie de forêt et le débroussaillement comptent dans l'implantation d'une maison. On y construit des villas tournées vers le paysage, on y agrandit des maisons familiales et on y restaure du bâti en pierre.",
  },
  {
    id: "littoral", nom: "Littoral et étangs",
    texte: "Entre les étangs palavasiens, l'étang de l'Or et la Méditerranée : des communes soumises à la loi Littoral et souvent exposées aux risques d'inondation et de submersion marine. Hauteur de plancher, emprise au sol, matériaux résistants au sel et au vent : ici, un projet commence par la lecture des plans de prévention des risques.",
  },
  {
    id: "thau", nom: "Bassin de Thau",
    texte: "Sète, les villages de l'étang de Thau et l'arrière-pays de la Gardiole : maisons de pêcheurs et de vignerons, villas sur les pentes ou face à l'étang, dans un territoire encadré par la loi Littoral. Chaque parcelle demande de composer avec la vue, le vent et des règles d'urbanisme attentives au paysage.",
  },
  {
    id: "coeur-herault", nom: "Cœur d'Hérault et Piscénois",
    texte: "De la vallée de l'Hérault au Lodévois, jusqu'à Pézenas : bourgs anciens, plaines viticoles et coteaux. Les projets y mêlent réhabilitation de maisons de bourg et de bâtiments agricoles, maisons neuves en périphérie des villages et interventions dans des centres historiques protégés.",
  },
  {
    id: "lunel", nom: "Pays de Lunel",
    texte: "À l'est du département, entre Montpellier et Nîmes : la plaine du Vidourle, ses villages viticoles et ses quartiers récents. Les projets y concilient maisons de village à transformer, constructions neuves et prise en compte du risque d'inondation.",
  },
];

/** Typographie française : espace insécable avant « : ; ! ? » et à l'intérieur des guillemets. */
const insecable = (s: string) => s.replace(/ ([:;!?»])/g, "\u00a0$1").replace(/« /g, "«\u00a0");
function typo<T>(x: T): T {
  if (typeof x === "string") return insecable(x) as T;
  if (Array.isArray(x)) return x.map(typo) as T;
  if (x && typeof x === "object") return Object.fromEntries(Object.entries(x).map(([k, v]) => [k, typo(v)])) as T;
  return x;
}

/** Toutes les communes dont la page est rédigée, groupées par secteur. */
export const VILLES: Ville[] = COMMUNES_BASE
  .filter((c) => CONTENU[c.slug])
  .map((c) => ({ ...c, ...typo(CONTENU[c.slug]) }));

export function getVille(slug: string) {
  return VILLES.find((v) => v.slug === slug);
}

export function getSecteur(id: SecteurId) {
  return SECTEURS.find((s) => s.id === id)!;
}

export function villesDuSecteur(id: SecteurId) {
  return VILLES.filter((v) => v.secteur === id);
}

function haversine(lat1: number, lng1: number, lat2: number, lng2: number) {
  const rad = Math.PI / 180;
  const h = Math.sin(((lat2 - lat1) * rad) / 2) ** 2
    + Math.cos(lat1 * rad) * Math.cos(lat2 * rad) * Math.sin(((lng2 - lng1) * rad) / 2) ** 2;
  return 2 * 6371 * Math.asin(Math.sqrt(h));
}

/** Distance à vol d'oiseau entre l'agence de Montarnaud et le centre de la commune, en km. */
export function distanceAgence(v: Pick<Ville, "lat" | "lng">) {
  return Math.round(haversine(SITE.lat, SITE.lng, v.lat, v.lng));
}

/** Les communes les plus proches (maillage entre pages villes). */
export function voisines(v: Ville, n = 6) {
  return VILLES.filter((o) => o.slug !== v.slug)
    .map((o) => ({ o, d: haversine(v.lat, v.lng, o.lat, o.lng) }))
    .sort((a, b) => a.d - b.d)
    .slice(0, n)
    .map(({ o }) => o);
}

/** Communes mises en avant dans le pied de page */
export const VILLES_PRINCIPALES = [
  "montpellier", "montarnaud", "castelnau-le-lez", "lattes", "saint-gely-du-fesc", "juvignac",
  "sete", "frontignan", "pezenas", "clermont-l-herault", "lunel", "mauguio",
];

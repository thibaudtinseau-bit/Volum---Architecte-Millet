/* =========================================================
   PAGES « ARCHITECTE À {COMMUNE} » — types
   Une page par commune : /architecte/{slug}
   - communes.ts      : données factuelles (code postal, Insee, intercommunalité, coordonnées…)
   - contenu/*.ts     : textes rédigés, propres à chaque commune
   - index.ts         : assemblage, secteurs, distances et communes voisines
   ========================================================= */

export type SecteurId = "ouest" | "nord" | "montpellier-est" | "littoral" | "thau" | "coeur-herault" | "lunel";

/** Identifiants des expertises (voir EXPERTISES dans lib/content.ts) */
export type ExpertiseId = "maison" | "extension" | "renovation" | "professionnels";

/** Dossiers de la page « Projets » (voir PROJECTS dans lib/content.ts) */
export type ProjetSlug =
  | "logement-exterieur" | "logement-interieur" | "logements-collectifs"
  | "tertiaire" | "industriel-agricole" | "plans-recherche";

/** Données factuelles d'une commune (générées, voir communes.ts). */
export type Commune = {
  /** Segment d'URL : /architecte/{slug} */
  slug: string;
  /** Nom officiel : « Saint-Jean-de-Védas » */
  nom: string;
  /** Avec sa préposition : « à Pignan », « au Crès » */
  a: string;
  /** « de Pignan », « du Crès » */
  de: string;
  cp: string;
  insee: string;
  secteur: SecteurId;
  /** Intercommunalité (EPCI) */
  interco: string;
  lat: number;
  lng: number;
  /** Population municipale (Insee) */
  population: number;
  /** Commune soumise à la loi Littoral */
  littoral?: boolean;
};

/** Textes rédigés pour une commune (voir contenu/*.ts). */
export type VilleContenu = {
  /** Balise <title>, sans la marque : 40 à 56 caractères, commence par « Architecte à {Nom} » */
  title: string;
  /** Meta description : 135 à 158 caractères, unique, avec le nom de la commune et un appel à l'action */
  description: string;
  /** Phrase d'accroche sous le titre H1 (20 à 35 mots) */
  accroche: string;
  /** Document d'urbanisme applicable, formulation courte : « PLU communal », « PLUi de Montpellier Méditerranée Métropole »… */
  urbanisme: string;
  /** Introduction : deux paragraphes (70 à 110 mots chacun) */
  intro: [string, string];
  /** « Construire à {Nom} » : paysage, bâti, formes urbaines, conséquences pour un projet (2 ou 3 paragraphes) */
  territoire: { titre: string; texte: string[] };
  /** Projets typiques dans la commune (3 ou 4), chacun relié à une expertise */
  projets: { titre: string; texte: string; expertise: ExpertiseId }[];
  /** Urbanisme, risques et contraintes propres à la commune (3 à 5) : [titre, texte] */
  contraintes: [string, string][];
  /** Quartiers, hameaux, lieux-dits ou secteurs de la commune (4 à 10) */
  quartiers: string[];
  /** Questions fréquentes propres à la commune (3 ou 4) : [question, réponse] */
  faq: [string, string][];
  /** Trois dossiers de projets à mettre en avant, du plus au moins pertinent */
  refs: [ProjetSlug, ProjetSlug, ProjetSlug];
  /** Image d'en-tête : [dossier, numéro d'image] choisie dans lib/images.json */
  image: [ProjetSlug, string];
};

export type Ville = Commune & VilleContenu;

export type Secteur = {
  id: SecteurId;
  nom: string;
  /** Présentation du secteur (page /architecte) */
  texte: string;
};

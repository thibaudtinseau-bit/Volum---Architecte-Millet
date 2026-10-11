/* =========================================================
   CONTENU DU SITE — modifiez librement les textes ici.
   ========================================================= */
import imagesData from "./images.json";

export const SITE = {
  name: "Volum",
  fullName: "Volum — Jean-Yves Millet, Architecte DPLG",
  url: (process.env.NEXT_PUBLIC_SITE_URL || "https://www.volum-architecture.fr").replace(/\/$/, ""),
  description:
    "Volum, agence de Jean-Yves Millet, architecte DPLG à Montarnaud : construction de maisons, extensions, rénovations " +
    "et bâtiments professionnels à Montpellier et dans l'Hérault, de la conception au suivi de chantier, depuis 1999.",
  phone: "06 71 06 87 16",
  phoneLink: "+33671068716",
  email: process.env.NEXT_PUBLIC_CONTACT_EMAIL || "",
  address: "8 Rue de l'Ancienne Poste",
  zip: "34570",
  city: "Montarnaud",
  address2Name: "Ateliers des Remparts",
  address2: "79 Rue des Remparts",
  zip2: "34820",
  city2: "Assas",
  lat: 43.6488388,
  lng: 3.6962158,
  siren: "431 770 528",
  houzz: "https://www.houzz.fr/pro/millet-archi",
  linkedin: "https://fr.linkedin.com/in/jean-yves-millet-46bb08a6",
  googleReviews:
    "https://www.google.fr/maps/place/Millet+Jean-Yves/@43.6488427,3.6936409,17z/data=!4m8!3m7!1s0x12b15382d3fedf49:0x10f4cfdaa3deba16!8m2!3d43.6488388!4d3.6962158!9m1!1b1!16s%2Fg%2F11b6c_rvkd?hl=fr",
  mapsEmbed:
    "https://www.google.com/maps?q=Millet+Jean-Yves+architecte,+8+Rue+de+l%27Ancienne+Poste,+34570+Montarnaud&hl=fr&z=14&output=embed",
};

/** Un dossier de la page « Projets » : un domaine d'intervention illustré par une galerie. */
export type Project = {
  slug: string;
  title: string;
  /** Libellé court affiché sur la vignette */
  eyebrow: string;
  /** Ce que présente le dossier */
  type: string;
  /** Numéro de l'image de couverture (voir lib/images.json) */
  cover: string;
  summary: string;
  text: string[];
  /** Thèmes visibles dans la galerie */
  themes: string[];
  /** Type de projet présélectionné dans le formulaire de contact */
  contact: "maison" | "extension" | "renovation" | "tertiaire" | "piscine" | "autre";
};

export const PROJECTS: Project[] = [
  {
    slug: "logement-exterieur", title: "Logement extérieur", eyebrow: "Maisons individuelles", contact: "maison",
    type: "Villas, maisons individuelles, piscines & abords", cover: "01",
    summary: "Villas et maisons individuelles : façades, piscines et jardins, de la perspective à la maison livrée.",
    text: [
      "Villas à toit plat, maisons de plain-pied, volumes en porte-à-faux ou toitures en tuiles : ce dossier réunit des façades et des abords de maisons individuelles. Beaucoup composent avec une pente, des pins ou des oliviers, et prolongent l'intérieur par une terrasse, une piscine ou un jardin sec.",
      "Croquis, perspectives, insertions dans le site et images d'intention permettent de fixer les volumes, les matières et le rapport au terrain avant le chantier. Les photographies montrent ensuite des maisons terminées : enduits clairs, murets en pierre, gabions plantés et entrées éclairées à la nuit tombée.",
    ],
    themes: ["Villas contemporaines", "Piscines & terrasses", "Perspectives", "Images d'intention", "Jardins secs", "Réalisations"],
  },
  {
    slug: "logement-interieur", title: "Logement intérieur", eyebrow: "Intérieurs", contact: "renovation",
    type: "Séjours, cuisines, chambres, salles d’eau & escaliers", cover: "01",
    summary: "Séjours en double hauteur, cuisines, chambres et salles d’eau : des intérieurs de maisons pensés autour de la lumière et des matières.",
    text: [
      "Ce dossier réunit des intérieurs de maisons individuelles, en perspectives et en photographies : séjours en double hauteur, cuisines ouvertes, chambres et salles d’eau. Les grandes baies font entrer la lumière naturelle ; le bois, le béton et les grands carrelages veinés composent les ambiances.",
      "Les circulations et les pièces plus singulières reçoivent la même attention : escalier en béton à marches massives, escalier hélicoïdal en métal, jardin intérieur au pied des marches, salle de projection sous un plafond étoilé. Plusieurs vues sont des perspectives ou des images d’intention, qui permettent de se projeter dans les volumes, la lumière et les ambiances.",
    ],
    themes: ["Séjours double hauteur", "Cuisines ouvertes", "Salles de bains", "Escaliers", "Perspectives 3D", "Salle de cinéma"],
  },
  {
    slug: "logements-collectifs", title: "Logements collectifs", eyebrow: "Habitat collectif", contact: "tertiaire",
    type: "Résidences, petits collectifs & réhabilitations", cover: "01",
    summary: "Résidences et petits collectifs autour de Montpellier, des perspectives d'intention aux bâtiments achevés.",
    text: [
      "Du petit collectif de quelques logements à la résidence de quatre ou cinq niveaux, l'agence dessine des immeubles d'habitation autour de Montpellier. Terrasses profondes, balcons plantés, attiques en retrait : les logements s'ouvrent sur des prolongements extérieurs, abrités par des débords et des pergolas.",
      "La plupart des vues sont des perspectives d'intention, établies avant le chantier : béton brut ou enduit clair, pierre ou bardage bois, chaque immeuble y trouve son écriture. D'autres projets partent d'un bâti ancien : un mas en pierre ouvert sur son jardin, montré lui aussi en images d'intention, et un bâtiment de pierre restauré, prolongé par une aile enduite à balcons et photographié une fois achevé.",
    ],
    themes: ["Résidences", "Terrasses plantées", "Perspectives d'intention", "Bâti ancien en pierre", "Réalisations"],
  },
  {
    slug: "tertiaire", title: "Tertiaire", eyebrow: "Bureaux & équipements", contact: "tertiaire",
    type: "Bureaux, locaux d'activités & équipements", cover: "01",
    summary: "Bureaux, locaux d'activités et équipements : des bâtiments livrés et des projets présentés en perspectives et plans masses.",
    text: [
      "Bureaux, locaux d'activités, équipements : un bâtiment professionnel se lit d'abord depuis la rue. Volumes en porte-à-faux ou posés sur pilotis, panneaux de façade sombres, enduits blancs, bardages métalliques et longues baies en bandeau composent des façades sobres, qui signalent l'entrée et éclairent les espaces de travail. Autour, des jardins secs de lavandes, d'agaves et de graminées accompagnent les parvis et les stationnements.",
      "Aux réalisations s'ajoutent des projets présentés avant le chantier : une gendarmerie et ses logements, un pôle santé organisé en parcelles privatives, un bâtiment d'activités inséré dans sa rue. Ces perspectives, insertions et plans masses sont des images d'intention ; elles permettent de situer le projet, d'en vérifier l'échelle et d'en discuter les choix.",
    ],
    themes: ["Bureaux", "Locaux d'activités", "Porte-à-faux", "Jardins secs", "Perspectives 3D", "Plans masses"],
  },
  {
    slug: "industriel-agricole", title: "Industriel & agricole", eyebrow: "Chais & activité", contact: "tertiaire",
    type: "Chais, caveaux, bâtiments d'activité & ateliers", cover: "01",
    summary: "Chais, caveaux, espaces d'accueil et bâtiments d'activité : des volumes de travail pensés pour leur usage et leur paysage.",
    text: [
      "Un chai se lit d'abord dans son paysage : volume vitré posé sur un soubassement de pierre, long bardage de bois au milieu des vignes, pignons de bois sombre, façades de pierre ou d'acier patiné. Ce dossier réunit des caves et bâtiments agricoles, un caveau aménagé dans un bâtiment en pierre et des lieux d'accueil, de l'orangerie aux salles de restaurant. Esquisses, images d'intention et photographies de réalisations s'y côtoient.",
      "Côté activité, les projets vont des locaux modulables avec mezzanines au bâtiment de production à toiture végétalisée et panneaux solaires, jusqu'à l'atelier dont les gaines d'extraction rythment la façade. Les plans accompagnent les perspectives et règlent l'organisation du travail : accueil, quai de chargement, accès poids lourds, éclairage zénithal.",
    ],
    themes: ["Chais et caveaux", "Bâtiments agricoles", "Locaux d'activité", "Accueil et restauration", "Perspectives 3D", "Plans"],
  },
  {
    slug: "plans-recherche", title: "Plans & recherche", eyebrow: "Esquisses & permis", contact: "maison",
    type: "Esquisses, permis de construire & plans d'exécution", cover: "01",
    summary: "Esquisses, perspectives, plans de permis et détails d'exécution : le travail de conception qui précède chaque chantier.",
    text: [
      "Chaque projet commence sur le papier. Ce dossier en rassemble les pièces : esquisses de recherche, plans de masse et de distribution, façades et coupes de principe, jusqu'aux détails d'exécution et aux plans de chantier. Maisons avec piscine, logements, bureaux, locaux d'activité, restaurant, chai ou château à reconvertir : chaque programme suit le même cheminement.",
      "On y trouve aussi des pistes plus libres, présentées en perspectives et images d'intention : petits hébergements en bois aux murs courbes, terrasses aménagées en toiture, patio, jardin avec piscine. D'une planche à l'autre, il s'agit d'organiser les usages, de dimensionner chaque espace, puis de préciser la mise en œuvre.",
    ],
    themes: ["Esquisses", "Plans de distribution", "Permis de construire", "Façades & coupes", "Détails d'exécution", "Perspectives 3D"],
  },
];

/** Diaporama de l'accueil : [dossier, image, légende] */
export const HERO_SLIDES: [string, string, string][] = [
  ["tertiaire", "05", "Tertiaire — volume sur pilotis"],
  ["logement-exterieur", "01", "Logement extérieur — villa à toit plat"],
  ["logements-collectifs", "01", "Logements collectifs — perspective d'un immeuble"],
  ["industriel-agricole", "11", "Industriel & agricole — bâtiment en pierre"],
  ["logement-interieur", "01", "Logement intérieur — séjour en double hauteur"],
];

/** Images de la page « L'agence » : [dossier, image] */
export const AGENCE_IMAGES: { wide: [string, string]; portrait: [string, string] } = {
  wide: ["tertiaire", "05"],
  portrait: ["logement-exterieur", "03"],
};

/** Accueil, bloc « L'agence » : deux images superposées et leur légende */
export const AGENCE_FIGURE: { images: [string, string][]; caption: string } = {
  images: [["plans-recherche", "16"], ["logement-exterieur", "14"]],
  caption: "Du plan à la maison : chaque projet se construit d'abord sur le papier.",
};

export const COMMUNES = [
  "Montpellier", "Montarnaud", "Assas", "Pignan", "Prades-le-Lez", "Saint-Clément-de-Rivière",
  "Saint-Gély-du-Fesc", "Saint-Bauzille-de-Montmel", "Grabels", "Juvignac", "Saint-Georges-d'Orques",
  "Lavérune", "Castelnau-le-Lez", "Teyran", "Clermont-l'Hérault", "Lodève", "Lac du Salagou", "Bellegarde (30)", "Rousson (30)",
];

/** Parcours de Jean-Yves Millet (pages « L'agence » et « Jean-Yves Millet ») : [repère, titre, texte] */
export const TIMELINE: [string, string, string][] = [
  ["Formation", "DUT Génie civil", "Une première formation technique, tournée vers les structures et la construction."],
  ["Diplôme", "Architecte DPLG", "Diplômé par le gouvernement de l'École d'Architecture de Montpellier."],
  ["1999", "Création de l'agence", "Installation en libéral sur le secteur montpelliérain, sous le nom Volum architecture."],
  ["Début des années 2000", "Programmes immobiliers", "Directeur technique de la société MV Promotion, en parallèle de l'activité libérale : conduite de programmes de logements collectifs."],
  ["2013", "Concept Cassine", "Développement d'un module d'habitat circulaire en bois, breveté par l'agence."],
  ["Aujourd'hui", "Plus de 100 maisons", "Une centaine de maisons individuelles, des bureaux et des réhabilitations dans l'Hérault et le Gard."],
];

/** Missions transversales (page Expertises). */
export const SERVICES: [string, string, string][] = [
  ["house", "Maison d'architecte", "Construction neuve sur mesure : une maison pensée pour votre terrain, votre mode de vie et votre budget."],
  ["extend", "Extension & surélévation", "Agrandir, surélever, ouvrir : faire évoluer votre maison sans en trahir l'esprit."],
  ["renov", "Rénovation & réhabilitation", "Mas, bergeries, bâtiments anciens : révéler le patrimoine et y apporter le confort d'aujourd'hui."],
  ["office", "Bureaux & tertiaire", "Sièges sociaux, offices, locaux d'activité et ERP : des lieux de travail fonctionnels et représentatifs."],
  ["plan", "Plans & permis de construire", "Esquisse, avant-projet, dossier de permis de construire ou de déclaration préalable."],
  ["build", "Maîtrise d'œuvre", "Consultation des entreprises, suivi de chantier, maîtrise des coûts et des délais, réception des travaux."],
  ["pool", "Piscines & extérieurs", "Conception de piscines, terrasses et aménagements paysagers en continuité avec l'architecture."],
  ["interior", "Aménagement intérieur", "Distribution des espaces, cuisines, escaliers, matériaux : le soin du détail jusqu'à l'intérieur."],
  ["leaf", "Éco-conception", "Bioclimatisme, matériaux sains, performance énergétique (RE2020) et technologies nouvelles."],
];

/** Parcours d'un projet (accueil + page « Notre approche »). [titre, repère, texte] */
export const STEPS: [string, string, string][] = [
  ["Échanger et comprendre", "Premier rendez-vous", "Nous prenons le temps de comprendre vos attentes, votre mode de vie, votre terrain et votre budget afin de définir les bases du projet."],
  ["Concevoir", "Esquisse · avant-projet", "Nous imaginons une réponse architecturale adaptée à vos besoins et à votre environnement, en intégrant les contraintes techniques et réglementaires."],
  ["Définir et préparer", "Permis · études · consultation", "Nous précisons les choix architecturaux et techniques, préparons les documents nécessaires et organisons les consultations selon la mission confiée."],
  ["Accompagner les travaux", "Direction de chantier", "Lorsque notre mission comprend le suivi de chantier, nous coordonnons les intervenants et veillons à la bonne réalisation du projet."],
  ["Finaliser", "Réception", "Nous vous accompagnons dans les dernières étapes du projet et, selon la mission prévue, jusqu'à la réception des travaux."],
];

export const FAQ: [string, string][] = [
  ["Mon projet n'est pas encore très défini. Est-ce trop tôt pour vous appeler ?", "Non, c'est même le bon moment. Terrain identifié, maison à transformer ou simple réflexion : le premier rendez-vous sert justement à vérifier la faisabilité du projet, les contraintes du site et du PLU, et l'enveloppe à prévoir. Plus l'architecte intervient tôt, plus on évite les mauvaises décisions coûteuses."],
  ["Comment éviter de dépasser mon budget ?", "Le budget est fixé avec vous dès le départ et sert de cadre à la conception. Une première estimation est faite à l'avant-projet, puis affinée à mesure que les plans se précisent. Les entreprises sont consultées sur un dossier détaillé et leurs devis sont comparés poste par poste. Si des arbitrages sont nécessaires, ils sont faits avec vous, avant le chantier, pas pendant."],
  ["Combien coûte un architecte ?", "Les honoraires dépendent de l'étendue de la mission (conception seule, permis de construire, ou mission complète jusqu'à la réception) et de la complexité du projet. Ils sont fixés dans un contrat clair, établi après le premier rendez-vous, avant tout engagement de votre part."],
  ["Qui gère les artisans et le chantier ?", "Dans le cadre d'une mission complète, l'agence consulte les entreprises, vous aide à les choisir, puis dirige le chantier : réunions régulières, contrôle de la qualité d'exécution, suivi des coûts et du planning. Vous avez un seul interlocuteur, qui connaît le projet depuis la première esquisse."],
  ["Que se passe-t-il en cas d'imprévu sur le chantier ?", "Les imprévus sont traités sur place, avec les entreprises, et vous êtes informé des solutions et de leur éventuel impact avant toute décision. La formation en génie civil de Jean-Yves Millet est ici un atout : les questions de structure, de terrain ou de mise en œuvre sont analysées directement."],
  ["Combien de temps faut-il prévoir ?", "Cela dépend du projet, mais quelques repères : les études et le dossier de permis prennent généralement quelques mois ; l'instruction du permis de construire est de 2 mois pour une maison individuelle (3 mois dans les autres cas, davantage en secteur protégé) ; viennent ensuite la consultation des entreprises, puis le chantier. Un calendrier prévisionnel vous est remis dès l'avant-projet."],
  ["Le recours à un architecte est-il obligatoire ?", "Oui pour toute construction dont la surface de plancher dépasse 150 m², pour une extension qui porte l'ensemble au-delà de ce seuil, et pour la plupart des bâtiments professionnels. En dessous, faire appel à un architecte reste le meilleur moyen d'obtenir un projet bien conçu et maîtrisé dans son budget."],
  ["Dans quel secteur intervenez-vous ?", "Principalement à Montpellier et dans l'Hérault (Grand Pic Saint-Loup, vallée de l'Hérault, Lodévois), ainsi que dans le Gard pour certains projets."],
];

/* ---------- Positionnement ---------- */
/** Les quatre engagements (accueil). */
export const ENGAGEMENTS: [string, string][] = [
  ["Une conception sur mesure", "Chaque projet naît d'un lieu, d'un mode de vie et d'aspirations singulières. Nous concevons des espaces adaptés à vos usages, à votre environnement et à vos envies."],
  ["Une expertise technique intégrée", "Notre double compétence en architecture et en génie civil permet d'anticiper les contraintes constructives dès les premières esquisses."],
  ["Une attention constante au budget", "Les choix architecturaux et techniques sont étudiés en tenant compte de vos objectifs financiers, afin de construire un projet cohérent et réaliste."],
  ["Un accompagnement de bout en bout", "De la conception au suivi des travaux, selon la mission confiée, nous assurons la continuité du projet et vous accompagnons dans les décisions essentielles."],
];

/** Les quatre expertises (accueil, page Expertises, menu). `projet` pré-remplit le formulaire de contact. */
export type Expertise = { id: string; projet: string; title: string; short: string; text: string[]; points: string[]; refs: string[] };
export const EXPERTISES: Expertise[] = [
  {
    id: "maison", projet: "maison", title: "Construction de maison",
    short: "Une maison neuve pensée pour votre terrain, votre mode de vie et votre budget.",
    text: [
      "Implantation, orientation, volumes, lumière : la maison se dessine à partir du terrain et de la façon dont vous souhaitez y vivre.",
      "Les choix structurels et constructifs sont posés dès l'esquisse, pour que le projet dessiné soit aussi un projet réalisable dans l'enveloppe prévue.",
    ],
    points: ["Esquisse et perspectives 3D", "Dossier de permis de construire", "Piscine et aménagements extérieurs", "Suivi de chantier selon la mission"],
    refs: ["logement-exterieur", "logement-interieur", "plans-recherche"],
  },
  {
    id: "extension", projet: "extension", title: "Extension et surélévation",
    short: "Agrandir, surélever ou ouvrir une maison sans en trahir l'esprit.",
    text: [
      "Une extension réussie prolonge la maison existante : elle en respecte l'échelle, en corrige parfois les défauts et crée de nouveaux usages.",
      "Reprise de structure, raccord des toitures, démarches d'urbanisme : les points délicats sont traités en amont, sur plan.",
    ],
    points: ["Relevé et diagnostic de l'existant", "Permis de construire ou déclaration préalable", "Plans d'exécution", "Coordination des entreprises"],
    refs: ["logement-exterieur", "plans-recherche"],
  },
  {
    id: "renovation", projet: "renovation", title: "Rénovation et réhabilitation",
    short: "Mas, bergeries, bâti ancien : conserver le caractère, apporter le confort d'aujourd'hui.",
    text: [
      "Le bâti ancien impose d'abord de l'observer : murs, charpente, ouvertures, ce qui peut être conservé et ce qui doit évoluer.",
      "Les intérieurs sont ensuite repensés pour la vie actuelle, avec une attention particulière aux matériaux et à la performance énergétique.",
    ],
    points: ["Réhabilitation lourde ou partielle", "Aménagement intérieur", "Choix des matériaux", "Amélioration énergétique"],
    refs: ["logement-interieur", "logement-exterieur"],
  },
  {
    id: "professionnels", projet: "tertiaire", title: "Projets professionnels",
    short: "Bureaux, sièges sociaux, locaux d'activité et établissements recevant du public.",
    text: [
      "Un bâtiment professionnel doit être fonctionnel, conforme et représentatif de l'entreprise qui l'occupe.",
      "Accessibilité, sécurité incendie, organisation des flux et maîtrise des coûts sont intégrées dès la conception.",
    ],
    points: ["Bureaux et sièges sociaux", "Locaux d'activité", "Établissements recevant du public", "Programmes immobiliers"],
    refs: ["tertiaire", "industriel-agricole", "logements-collectifs"],
  },
];

/** Comment le budget est maîtrisé */
export const BUDGET_STEPS: [string, string][] = [
  ["Une enveloppe définie ensemble", "Dès le premier rendez-vous, on parle budget : coût des travaux, honoraires, taxes et frais annexes (étude de sol, raccordements…). Cette enveloppe devient le cadre de la conception."],
  ["Une première estimation à l'avant-projet", "Quand les plans et les volumes sont posés, le coût des travaux est estimé. C'est le moment d'ajuster le programme si nécessaire, avant de déposer le permis."],
  ["Des devis comparés poste par poste", "Les entreprises répondent sur un dossier précis, identique pour toutes. Leurs offres sont analysées et comparées pour que vous choisissiez en connaissance de cause."],
  ["Des arbitrages avant le chantier", "Matériaux, équipements, finitions : les choix qui pèsent sur le budget sont faits avec vous en amont, pas découverts en cours de travaux."],
  ["Un suivi des coûts jusqu'à la réception", "Pendant le chantier, les situations de travaux sont vérifiées et toute modification vous est présentée et chiffrée avant d'être engagée."],
];

/* ---------- Images ---------- */
/** [numéro, largeur, hauteur, texte alternatif] — généré avec les fichiers de public/img/projets/ */
type ImgMeta = [string, number, number, string];
const IMAGES = imagesData as unknown as Record<string, ImgMeta[]>;

export function projectImages(slug: string): ImgMeta[] {
  return IMAGES[slug] || [];
}
export function imgSize(slug: string, num: string): [number, number] {
  const m = projectImages(slug).find((i) => i[0] === num);
  return m ? [m[1], m[2]] : [1600, 1067];
}
export function imgAlt(slug: string, num: string) {
  return projectImages(slug).find((i) => i[0] === num)?.[3] || "";
}
export function imgSrc(slug: string, num: string, small = false) {
  return `/img/projets/${slug}/${num}${small ? "-sm" : ""}.webp`;
}
export function getProject(slug: string) {
  return PROJECTS.find((p) => p.slug === slug);
}

/* =========================================================
   CONTENU DU SITE — modifiez librement les textes ici.
   ========================================================= */
import imagesData from "./images.json";

export const SITE = {
  name: "Volum",
  fullName: "Volum — Jean-Yves Millet, Architecte DPLG",
  url: (process.env.NEXT_PUBLIC_SITE_URL || "https://volum-architecte-millet.vercel.app").replace(/\/$/, ""),
  description:
    "Volum, Jean-Yves Millet, architecte DPLG et technicien du génie civil à Montarnaud (Hérault). " +
    "Une architecture dessinée pour être construite : maisons, extensions, rénovations et bureaux autour de Montpellier depuis 1999.",
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

export type CategoryKey = "residentiel" | "tertiaire" | "renovation" | "conception";
export const CATEGORIES: Record<CategoryKey, string> = {
  residentiel: "Maisons",
  tertiaire: "Tertiaire",
  renovation: "Rénovation & extension",
  conception: "Études & concepts",
};

export type Project = {
  slug: string;
  title: string;
  cats: CategoryKey[];
  type: string;
  place: string;
  year: string;
  budget: string;
  cover: string;
  summary: string;
  text: string[];
  /** Phases de mission visibles dans les documents publiés du projet */
  phases?: string[];
  /* Étude de cas — à renseigner avec Jean-Yves Millet (voir docs/questionnaire-etudes-de-cas.md).
     Chaque bloc n'est affiché que s'il est rempli. */
  besoin?: string;
  contraintes?: string;
  reponse?: string;
  mission?: string;
  resultat?: string;
  surface?: string;
  duree?: string;
  temoignage?: { text: string; author: string };
};

export const PROJECTS: Project[] = [
  {
    slug: "villa-cetd", title: "Villa C&D", cats: ["residentiel"], type: "Résidence principale",
    place: "Pignan, Hérault", year: "2016", budget: "250 001 – 500 000 €", cover: "11",
    summary: "Une maison contemporaine aux volumes blancs, ouverte sur un jardin méditerranéen.",
    phases: ["Conception", "Réalisation", "Aménagements extérieurs"],
    text: [
      "Résidence principale d'une famille sur les coteaux de Pignan, la villa C&D s'organise en volumes simples et lumineux : enduits blancs, menuiseries sombres et larges baies ouvertes sur le paysage.",
      "Le travail des extérieurs prolonge l'architecture : terrasses, bassin, jardinières en bois et brise-vues métalliques ajourés composent des espaces de vie protégés, tournés vers le soleil.",
    ],
  },
  {
    slug: "villa-vc", title: "Villa VC", cats: ["residentiel"], type: "Maison individuelle & piscine",
    place: "Rousson, Gard", year: "2017", budget: "500 001 – 1 000 000 €", cover: "08",
    summary: "Un plain-pied contemporain ancré dans la garrigue, autour d'une piscine minérale.",
    phases: ["Conception", "Permis de construire modificatif", "Plans d’exécution", "Suivi de chantier"],
    text: [
      "Implantée sur un terrain en pente dominant la garrigue, la villa VC se déploie de plain-pied pour épouser la topographie et cadrer les vues lointaines.",
      "La piscine, traitée comme une pièce extérieure, s'inscrit dans le prolongement du séjour. Les plages en pierre claire et les toitures-terrasses dessinent un ensemble sobre et horizontal.",
    ],
  },
  {
    slug: "villa-l", title: "Villa L", cats: ["residentiel"], type: "Maison d'architecte",
    place: "Prades-le-Lez, Hérault", year: "2016", budget: "500 001 – 1 000 000 €", cover: "01",
    summary: "Béton, verre et acier pour une maison sous les pins, de l'esquisse au chantier.",
    phases: ["Conception", "Permis de construire", "Plans d’exécution", "Suivi de chantier"],
    text: [
      "Sous une pinède de Prades-le-Lez, la villa L joue des transparences : grandes verrières, auvent vitré et volumes en porte-à-faux qui laissent filer la lumière à travers la maison.",
      "Le projet présente l'ensemble de la mission : plans de permis de construire, coupes, détails d'exécution de la piscine et suivi de chantier jusqu'à la livraison.",
    ],
  },
  {
    slug: "villa-g", title: "Villa G", cats: ["residentiel"], type: "Maison individuelle",
    place: "Prades-le-Lez, Hérault", year: "2018", budget: "250 001 – 500 000 €", cover: "07",
    summary: "Une maison en strates sur un terrain en pente, entre façade minérale et terrasse sur piscine.",
    phases: ["Conception", "Permis de construire", "Dossier d’exécution", "Réalisation"],
    text: [
      "Sur une parcelle en fort dénivelé, la villa G superpose ses niveaux comme des strates : un socle abritant le garage, puis les pièces de vie qui s'ouvrent sur une terrasse et une piscine.",
      "Le dossier d'exécution a permis de maîtriser finement l'implantation, les soutènements et l'intégration paysagère dans un site exigeant.",
    ],
  },
  {
    slug: "villa-a", title: "Villa A", cats: ["residentiel"], type: "Maison individuelle & piscine",
    place: "Saint-Clément-de-Rivière, Hérault", year: "2016", budget: "500 001 – 1 000 000 €", cover: "01",
    summary: "Une composition de volumes cubiques blancs, pensée pour la vie en extérieur.",
    phases: ["Conception 3D", "Permis de construire", "Suivi de chantier"],
    text: [
      "Au nord de Montpellier, la villa A articule plusieurs volumes cubiques autour d'un patio et d'une piscine. Le niveau de jardin et l'étage s'adaptent à la pente naturelle du terrain.",
      "Les documents de permis de construire (plans, coupes, façades) accompagnent ici les vues 3D présentées au client dès les premières phases d'étude.",
    ],
  },
  {
    slug: "villa-r", title: "Villa R", cats: ["residentiel"], type: "Maison individuelle",
    place: "Saint-Bauzille-de-Montmel, Hérault", year: "2018", budget: "250 001 – 500 000 €", cover: "01",
    summary: "Une maison contemporaine adossée au relief, entre garrigue et oliviers.",
    phases: ["Insertion paysagère", "Permis de construire"],
    text: [
      "À Saint-Bauzille-de-Montmel, la villa R s'adosse au relief pour limiter son impact dans le paysage. Sa volumétrie étagée offre à chaque pièce une vue dégagée sur la vallée.",
      "Insertion paysagère, plans de masse et façades ont été étudiés pour concilier intimité, ensoleillement et respect des règles d'urbanisme locales.",
    ],
  },
  {
    slug: "villa-m", title: "Villa M", cats: ["residentiel"], type: "Maison individuelle",
    place: "Saint-Bauzille-de-Montmel, Hérault", year: "", budget: "250 001 – 500 000 €", cover: "05",
    summary: "Bardage bois et enduit pour une maison nichée sous les chênes, avec son escalier sculptural.",
    phases: ["Permis de construire", "Réalisation", "Aménagement intérieur"],
    text: [
      "Nichée sous les chênes verts, la villa M associe enduit minéral et bardage bois. L'escalier hélicoïdal en acier, véritable pièce de design, relie les niveaux de la maison.",
      "Du permis de construire à la réalisation, le projet illustre l'attention portée aux matériaux et aux détails intérieurs.",
    ],
  },
  {
    slug: "extension-b", title: "Extension B", cats: ["renovation"], type: "Extension & surélévation",
    place: "Hérault", year: "2017", budget: "100 001 – 250 000 €", cover: "01",
    summary: "Agrandir une maison existante sans en trahir l'esprit : extension courbe et toiture repensée.",
    phases: ["Conception", "Permis de construire", "Plans d’exécution", "Suivi de chantier"],
    text: [
      "Une maison des années 1980 transformée : démolition partielle, nouvelle extension aux lignes courbes, reprise des toitures et création d'espaces de vie généreux.",
      "Le reportage de chantier montre chaque étape — démolition, gros œuvre en brique, charpente, couverture — jusqu'au résultat final, lumineux et contemporain.",
    ],
  },
  {
    slug: "villa-elena", title: "Villa Elena", cats: ["renovation"], type: "Réhabilitation d'un mas",
    place: "Hérault", year: "2015", budget: "1 000 001 – 2 000 000 €", cover: "01",
    summary: "La réhabilitation d'un mas en pierre, entre patrimoine et confort contemporain.",
    phases: ["Réhabilitation", "Aménagement intérieur"],
    text: [
      "Réhabilitation lourde d'un mas en pierre : le bâti ancien est conservé et mis en valeur, tandis que les intérieurs sont entièrement repensés pour la vie d'aujourd'hui.",
      "Grandes ouvertures, cuisine ouverte, menuiseries contemporaines et patios végétalisés dialoguent avec la massivité de la pierre.",
    ],
  },
  {
    slug: "maison-d-affinage", title: "Maison d'affinage — Mas Salagou", cats: ["renovation", "tertiaire"],
    type: "Bâtiment d'activité & logement", place: "Lac du Salagou, Hérault", year: "2013", budget: "", cover: "05",
    summary: "Pierre, bois et enduits ocres face aux paysages rouges du Salagou.",
    phases: ["Conception", "Réalisation", "Aménagement intérieur"],
    text: [
      "Au bord du lac du Salagou, ce projet mixte associe un lieu d'affinage et un logement. Ses matériaux — pierre, bardage bois, enduits ocre-rouge — répondent aux terres de ruffe environnantes.",
      "Les intérieurs, lumineux et colorés, s'ouvrent par de grandes baies cadrées sur les vignes et les reliefs du Lodévois.",
    ],
  },
  {
    slug: "siege-social-o", title: "Siège social O", cats: ["tertiaire"], type: "Bureaux",
    place: "Hérault", year: "2017", budget: "1 000 001 – 2 000 000 €", cover: "01",
    summary: "Un siège d'entreprise aux volumes affirmés, habillé de panneaux minéraux sombres.",
    phases: ["Conception", "Permis de construire", "Plans d’exécution", "Réalisation"],
    text: [
      "Pour ce siège social, l'enjeu était de donner une image forte à l'entreprise tout en offrant des espaces de travail clairs et fonctionnels.",
      "Les volumes en porte-à-faux, habillés de panneaux de façade gris anthracite, contrastent avec les enduits blancs. À l'intérieur : plateaux lumineux, circulations généreuses, locaux techniques intégrés.",
    ],
  },
  {
    slug: "siege-social-at", title: "Siège social AT", cats: ["tertiaire"], type: "Bureaux",
    place: "Hérault", year: "2019", budget: "500 001 – 1 000 000 €", cover: "12",
    summary: "Un bâtiment de bureaux posé dans la garrigue, sur pilotis et toiture-terrasse.",
    phases: ["Permis de construire", "Plans d’exécution", "Suivi de chantier"],
    text: [
      "Implanté dans un site naturel en pente, ce siège social se pose sur pilotis pour préserver le terrain et offrir de larges vues depuis les bureaux.",
      "Le projet a été mené du permis de construire à la réception : plans d'exécution, plancher, étanchéité de la toiture-terrasse et finitions.",
    ],
  },
  {
    slug: "office-notarial-b", title: "Office notarial B", cats: ["tertiaire"], type: "Établissement recevant du public",
    place: "Bellegarde, Gard", year: "2019", budget: "500 001 – 1 000 000 €", cover: "07",
    summary: "Un office notarial contemporain, entre parement de pierre et toitures-terrasses.",
    phases: ["Permis de construire", "Plans de masse et façades", "Suivi de chantier"],
    text: [
      "Construction neuve d'un office notarial à Bellegarde : un bâtiment recevant du public, accessible, à l'image à la fois sobre et institutionnelle.",
      "Les plans de permis, de masse et les façades détaillées accompagnent un suivi de chantier rigoureux, du gros œuvre aux parements de pierre.",
    ],
  },
  {
    slug: "concept-cassine", title: "Concept Cassine", cats: ["conception"], type: "Habitat modulaire breveté",
    place: "Hérault", year: "2013", budget: "", cover: "05",
    summary: "Un module d'habitat circulaire en bois, imaginé et breveté par l'agence.",
    phases: ["Conception", "Brevet"],
    text: [
      "Cassine est un concept d'habitat circulaire en ossature bois, développé et breveté par l'agence. Sa forme ronde optimise l'enveloppe et offre une relation à 360° avec la nature.",
      "Pensé comme un module évolutif — chambre d'hôtes, bureau, studio — il illustre l'intérêt de Volum pour les technologies nouvelles et l'éco-conception.",
    ],
  },
  {
    slug: "divers-conception", title: "Esquisses & conceptions", cats: ["conception"], type: "Études, perspectives 3D",
    place: "Montpellier & Hérault", year: "", budget: "", cover: "02",
    summary: "Un aperçu des études et perspectives 3D réalisées pour de futures maisons.",
    phases: ["Esquisses", "Perspectives 3D"],
    text: [
      "Avant le premier coup de pelle, chaque projet prend forme en esquisses, maquettes numériques et perspectives. Elles permettent de se projeter, de comparer des variantes et d'affiner ensemble le programme.",
      "Voici une sélection d'études menées pour des maisons individuelles autour de Montpellier.",
    ],
  },
];

export const FEATURED = ["villa-cetd", "villa-vc", "villa-l", "siege-social-o", "maison-d-affinage", "villa-g"];

export const HERO_SLIDES: [string, string, string][] = [
  ["villa-cetd", "11", "Villa C&D — Pignan"],
  ["siege-social-o", "01", "Siège social O — Hérault"],
  ["villa-vc", "08", "Villa VC — Rousson"],
  ["villa-g", "06", "Villa G — Prades-le-Lez"],
  ["maison-d-affinage", "05", "Mas Salagou — Lac du Salagou"],
];

export const COMMUNES = [
  "Montpellier", "Montarnaud", "Assas", "Pignan", "Prades-le-Lez", "Saint-Clément-de-Rivière",
  "Saint-Gély-du-Fesc", "Saint-Bauzille-de-Montmel", "Grabels", "Juvignac", "Saint-Georges-d'Orques",
  "Lavérune", "Castelnau-le-Lez", "Teyran", "Clermont-l'Hérault", "Lodève", "Lac du Salagou", "Bellegarde (30)", "Rousson (30)",
];

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

export const STEPS: [string, string, string][] = [
  ["Écoute & programme", "Premier rendez-vous", "Une discussion pour cerner vos besoins, vos aspirations, votre budget et votre calendrier. Visite du terrain ou du bâti existant, analyse des règles d'urbanisme (PLU)."],
  ["Esquisse", "Premières intentions", "Les premières idées prennent forme : implantation, volumes, organisation des espaces. Plusieurs pistes sont explorées et discutées ensemble."],
  ["Avant-projet", "APS · APD", "Le projet s'affine : plans, façades, matériaux, perspectives 3D et première estimation du coût des travaux."],
  ["Permis de construire", "Autorisations", "Constitution et dépôt du dossier de permis de construire ou de déclaration préalable, suivi de l'instruction auprès de la mairie."],
  ["Études & consultation", "PRO · DCE · ACT", "Plans d'exécution, descriptifs techniques, consultation des entreprises et analyse comparative des devis."],
  ["Chantier", "Direction des travaux", "Réunions de chantier hebdomadaires, contrôle de la qualité d'exécution, suivi des coûts et des délais. Une double compétence architecte / génie civil sur le terrain."],
  ["Réception", "Livraison", "Assistance aux opérations de réception, levée des réserves et remise des clés. Bienvenue chez vous."],
];

export const FAQ: [string, string][] = [
  ["Mon projet n'est pas encore très défini. Est-ce trop tôt pour vous appeler ?", "Non, c'est même le bon moment. Terrain identifié, maison à transformer ou simple réflexion : le premier rendez-vous sert justement à vérifier la faisabilité du projet, les contraintes du site et du PLU, et l'enveloppe à prévoir. Plus l'architecte intervient tôt, plus on évite les mauvaises décisions coûteuses."],
  ["Comment éviter de dépasser mon budget ?", "Le budget est fixé avec vous dès le départ et sert de cadre à la conception. Une première estimation est faite à l'avant-projet, puis affinée à mesure que les plans se précisent. Les entreprises sont consultées sur un dossier détaillé et leurs devis sont comparés poste par poste. Si des arbitrages sont nécessaires, ils sont faits avec vous, avant le chantier, pas pendant."],
  ["Combien coûte un architecte ?", "Les honoraires dépendent de l'étendue de la mission (conception seule, permis de construire, ou mission complète jusqu'à la réception) et de la complexité du projet. Ils sont fixés dans un contrat clair, établi après le premier rendez-vous, avant tout engagement de votre part."],
  ["Qui gère les artisans et le chantier ?", "Dans le cadre d'une mission complète, l'agence consulte les entreprises, vous aide à les choisir, puis dirige le chantier : réunions régulières, contrôle de la qualité d'exécution, suivi des coûts et du planning. Vous avez un seul interlocuteur, qui connaît le projet depuis la première esquisse."],
  ["Que se passe-t-il en cas d'imprévu sur le chantier ?", "Les imprévus sont traités sur place, avec les entreprises, et vous êtes informé des solutions et de leur éventuel impact avant toute décision. La formation en génie civil de Jean-Yves Millet est ici un atout : les questions de structure, de terrain ou de mise en œuvre sont analysées directement."],
  ["Combien de temps faut-il prévoir ?", "Cela dépend du projet, mais quelques repères : les études et le dossier de permis prennent généralement quelques mois ; l'instruction du permis de construire est de 2 mois pour une maison individuelle (3 mois dans les autres cas, davantage en secteur protégé) ; viennent ensuite la consultation des entreprises, puis le chantier. Un calendrier prévisionnel vous est remis dès l'avant-projet."],
  ["Le recours à un architecte est-il obligatoire ?", "Oui pour toute construction dont la surface de plancher dépasse 150 m², pour une extension qui porte l'ensemble au-delà de ce seuil, et pour la plupart des bâtiments professionnels. En dessous, faire appel à un architecte reste le meilleur moyen d'obtenir un projet bien conçu et maîtrisé dans son budget."],
  ["Dans quel secteur intervenez-vous ?", "Principalement à Montpellier et dans l'Hérault (Grand Pic Saint-Loup, vallée de l'Hérault, Lodévois), ainsi que dans le Gard pour certains projets."],
];

/* ---------- Positionnement ---------- */
export const AUDIENCES = [
  {
    key: "particulier",
    eyebrow: "Particuliers",
    title: "Vous avez un terrain ou une maison à transformer",
    intro: "Construire votre maison, l'agrandir, ou redonner vie à un bâti ancien.",
    items: [
      { label: "Maison neuve", href: "/contact?projet=maison" },
      { label: "Extension & surélévation", href: "/contact?projet=extension" },
      { label: "Rénovation & réhabilitation", href: "/contact?projet=renovation" },
    ],
    cover: ["villa-g", "06"] as [string, string],
  },
  {
    key: "professionnel",
    eyebrow: "Professionnels",
    title: "Vous avez besoin de locaux à votre image",
    intro: "Entreprises, professions libérales, investisseurs : des bâtiments fonctionnels, conformes et maîtrisés.",
    items: [
      { label: "Bureaux & sièges sociaux", href: "/contact?projet=tertiaire" },
      { label: "Locaux d'activité", href: "/contact?projet=tertiaire" },
      { label: "ERP & programmes immobiliers", href: "/contact?projet=tertiaire" },
    ],
    cover: ["siege-social-o", "04"] as [string, string],
  },
];

/** Pourquoi Volum : chaque argument est appuyé par un avis client réel (voir lib/reviews-data.ts). */
export const ARGUMENTS: { title: string; text: string; quote?: { text: string; author: string } }[] = [
  {
    title: "Des plans pensés pour le chantier",
    text: "Architecte DPLG et technicien du génie civil, Jean-Yves Millet dessine en sachant comment le bâtiment sera construit : structure, terrain, mise en œuvre. Moins de surprises et moins d'adaptations coûteuses en cours de route.",
    quote: { text: "Le suivi des travaux a toujours été très rigoureux.", author: "Michèle Delmaux" },
  },
  {
    title: "Un budget tenu, étape par étape",
    text: "Votre enveloppe est le cadre du projet dès le premier rendez-vous. Elle est vérifiée à chaque phase, et les devis des entreprises sont comparés poste par poste avant que vous ne vous engagiez.",
    quote: { text: "Les devis ont toujours été respectés.", author: "Michèle Delmaux" },
  },
  {
    title: "Vos envies, traduites en projet",
    text: "Vous arrivez avec des envies, parfois quelques idées, parfois simplement un terrain. Le rôle de l'architecte est d'en faire un projet cohérent avec votre mode de vie, votre budget et les contraintes du site.",
    quote: { text: "Sa capacité d'écoute et de compréhension lui a permis de traduire nos envies en un beau projet, cohérent et en ligne avec notre budget.", author: "Antonio Gutierrez" },
  },
  {
    title: "Un seul interlocuteur, même pour les dossiers complexes",
    text: "Permis délicat, terrain en pente, bâti ancien, établissement recevant du public : la même personne suit votre projet de l'esquisse à la remise des clés et coordonne les entreprises sur le chantier.",
    quote: { text: "Notre dossier était assez complexe et il a toujours fait preuve de beaucoup de patience, de disponibilité et de professionnalisme.", author: "Ibanez Ibanez" },
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
type ImgMeta = [string, number, number];
const IMAGES = imagesData as unknown as Record<string, ImgMeta[]>;

export function projectImages(slug: string): ImgMeta[] {
  return IMAGES[slug] || [];
}
export function imgSize(slug: string, num: string): [number, number] {
  const m = projectImages(slug).find((i) => i[0] === num);
  return m ? [m[1], m[2]] : [1600, 1067];
}
export function imgSrc(slug: string, num: string, small = false) {
  return `/img/projets/${slug}/${num}${small ? "-sm" : ""}.webp`;
}
export function getProject(slug: string) {
  return PROJECTS.find((p) => p.slug === slug);
}

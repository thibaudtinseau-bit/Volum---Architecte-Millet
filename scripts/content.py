# -*- coding: utf-8 -*-
"""
CONTENU DU SITE — modifiez librement les textes ici,
puis lancez :  python3 scripts/build.py
"""

SITE = {
    "name": "Volum",
    "full_name": "Volum — Jean-Yves Millet, Architecte DPLG",
    "url": "https://thibaudtinseau-bit.github.io/Volum---Architecte-Millet/",
    "description": "Volum, agence d'architecture de Jean-Yves Millet, architecte DPLG à Montarnaud (Hérault). "
                   "Maisons d'architecte, extensions, rénovations et bâtiments tertiaires autour de Montpellier depuis 1999.",
    "phone": "06 71 06 87 16",
    "phone_link": "+33671068716",
    "address": "8 Rue de l'Ancienne Poste",
    "zip": "34570",
    "city": "Montarnaud",
    "address2_name": "Ateliers des Remparts",
    "address2": "79 Rue des Remparts",
    "zip2": "34820",
    "city2": "Assas",
    "lat": 43.6488388,
    "lng": 3.6962158,
    "siren": "431 770 528",
    "houzz": "https://www.houzz.fr/pro/millet-archi",
    "linkedin": "https://fr.linkedin.com/in/jean-yves-millet-46bb08a6",
}

# Catégories (clé -> libellé)
CATEGORIES = {
    "residentiel": "Maisons",
    "tertiaire": "Tertiaire",
    "renovation": "Rénovation & extension",
    "conception": "Études & concepts",
}

# Projets — l'ordre ici est l'ordre d'affichage.
# "images" : numéros des photos dans assets/img/projets/<slug>/ (la 1re = couverture si "cover" absent)
PROJECTS = [
    {
        "slug": "villa-cetd",
        "title": "Villa C&D",
        "cats": ["residentiel"],
        "type": "Résidence principale",
        "place": "Pignan, Hérault",
        "year": "2016",
        "budget": "250 001 – 500 000 €",
        "cover": "11",
        "summary": "Une maison contemporaine aux volumes blancs, ouverte sur un jardin méditerranéen.",
        "text": [
            "Résidence principale d'une famille sur les coteaux de Pignan, la villa C&D s'organise en volumes "
            "simples et lumineux : enduits blancs, menuiseries sombres et larges baies ouvertes sur le paysage.",
            "Le travail des extérieurs prolonge l'architecture : terrasses, bassin, jardinières en bois et "
            "brise-vues métalliques ajourés composent des espaces de vie protégés, tournés vers le soleil.",
        ],
    },
    {
        "slug": "villa-vc",
        "title": "Villa VC",
        "cats": ["residentiel"],
        "type": "Maison individuelle & piscine",
        "place": "Rousson, Gard",
        "year": "2017",
        "budget": "500 001 – 1 000 000 €",
        "cover": "08",
        "summary": "Un plain-pied contemporain ancré dans la garrigue, autour d'une piscine minérale.",
        "text": [
            "Implantée sur un terrain en pente dominant la garrigue, la villa VC se déploie de plain-pied pour "
            "épouser la topographie et cadrer les vues lointaines.",
            "La piscine, traitée comme une pièce extérieure, s'inscrit dans le prolongement du séjour. Les "
            "plages en pierre claire et les toitures-terrasses dessinent un ensemble sobre et horizontal.",
        ],
    },
    {
        "slug": "villa-l",
        "title": "Villa L",
        "cats": ["residentiel"],
        "type": "Maison d'architecte",
        "place": "Prades-le-Lez, Hérault",
        "year": "2016",
        "budget": "500 001 – 1 000 000 €",
        "cover": "01",
        "summary": "Béton, verre et acier pour une maison sous les pins, de l'esquisse au chantier.",
        "text": [
            "Sous une pinède de Prades-le-Lez, la villa L joue des transparences : grandes verrières, auvent "
            "vitré et volumes en porte-à-faux qui laissent filer la lumière à travers la maison.",
            "Le projet présente l'ensemble de la mission : plans de permis de construire, coupes, détails "
            "d'exécution de la piscine et suivi de chantier jusqu'à la livraison.",
        ],
    },
    {
        "slug": "villa-g",
        "title": "Villa G",
        "cats": ["residentiel"],
        "type": "Maison individuelle",
        "place": "Prades-le-Lez, Hérault",
        "year": "2018",
        "budget": "250 001 – 500 000 €",
        "cover": "07",
        "summary": "Une maison en strates sur un terrain en pente, entre façade minérale et terrasse sur piscine.",
        "text": [
            "Sur une parcelle en fort dénivelé, la villa G superpose ses niveaux comme des strates : un socle "
            "abritant le garage, puis les pièces de vie qui s'ouvrent sur une terrasse et une piscine.",
            "Le dossier d'exécution a permis de maîtriser finement l'implantation, les soutènements et "
            "l'intégration paysagère dans un site exigeant.",
        ],
    },
    {
        "slug": "villa-a",
        "title": "Villa A",
        "cats": ["residentiel"],
        "type": "Maison individuelle & piscine",
        "place": "Saint-Clément-de-Rivière, Hérault",
        "year": "2016",
        "budget": "500 001 – 1 000 000 €",
        "cover": "01",
        "summary": "Une composition de volumes cubiques blancs, pensée pour la vie en extérieur.",
        "text": [
            "Au nord de Montpellier, la villa A articule plusieurs volumes cubiques autour d'un patio et d'une "
            "piscine. Le niveau de jardin et l'étage s'adaptent à la pente naturelle du terrain.",
            "Les documents de permis de construire (plans, coupes, façades) accompagnent ici les vues 3D "
            "présentées au client dès les premières phases d'étude.",
        ],
    },
    {
        "slug": "villa-r",
        "title": "Villa R",
        "cats": ["residentiel"],
        "type": "Maison individuelle",
        "place": "Saint-Bauzille-de-Montmel, Hérault",
        "year": "2018",
        "budget": "250 001 – 500 000 €",
        "cover": "01",
        "summary": "Une maison contemporaine adossée au relief, entre garrigue et oliviers.",
        "text": [
            "À Saint-Bauzille-de-Montmel, la villa R s'adosse au relief pour limiter son impact dans le paysage. "
            "Sa volumétrie étagée offre à chaque pièce une vue dégagée sur la vallée.",
            "Insertion paysagère, plans de masse et façades ont été étudiés pour concilier intimité, "
            "ensoleillement et respect des règles d'urbanisme locales.",
        ],
    },
    {
        "slug": "villa-m",
        "title": "Villa M",
        "cats": ["residentiel"],
        "type": "Maison individuelle",
        "place": "Saint-Bauzille-de-Montmel, Hérault",
        "year": "",
        "budget": "250 001 – 500 000 €",
        "cover": "05",
        "summary": "Bardage bois et enduit pour une maison nichée sous les chênes, avec son escalier sculptural.",
        "text": [
            "Nichée sous les chênes verts, la villa M associe enduit minéral et bardage bois. L'escalier "
            "hélicoïdal en acier, véritable pièce de design, relie les niveaux de la maison.",
            "Du permis de construire à la réalisation, le projet illustre l'attention portée aux matériaux et "
            "aux détails intérieurs.",
        ],
    },
    {
        "slug": "extension-b",
        "title": "Extension B",
        "cats": ["renovation"],
        "type": "Extension & surélévation",
        "place": "Hérault",
        "year": "2017",
        "budget": "100 001 – 250 000 €",
        "cover": "01",
        "summary": "Agrandir une maison existante sans en trahir l'esprit : extension courbe et toiture repensée.",
        "text": [
            "Une maison des années 1980 transformée : démolition partielle, nouvelle extension aux lignes "
            "courbes, reprise des toitures et création d'espaces de vie généreux.",
            "Le reportage de chantier montre chaque étape — démolition, gros œuvre en brique, charpente, "
            "couverture — jusqu'au résultat final, lumineux et contemporain.",
        ],
    },
    {
        "slug": "villa-elena",
        "title": "Villa Elena",
        "cats": ["renovation"],
        "type": "Réhabilitation d'un mas",
        "place": "Hérault",
        "year": "2015",
        "budget": "1 000 001 – 2 000 000 €",
        "cover": "01",
        "summary": "La réhabilitation d'un mas en pierre, entre patrimoine et confort contemporain.",
        "text": [
            "Réhabilitation lourde d'un mas en pierre : le bâti ancien est conservé et mis en valeur, tandis que "
            "les intérieurs sont entièrement repensés pour la vie d'aujourd'hui.",
            "Grandes ouvertures, cuisine ouverte, menuiseries contemporaines et patios végétalisés dialoguent "
            "avec la massivité de la pierre.",
        ],
    },
    {
        "slug": "maison-d-affinage",
        "title": "Maison d'affinage — Mas Salagou",
        "cats": ["renovation", "tertiaire"],
        "type": "Bâtiment d'activité & logement",
        "place": "Lac du Salagou, Hérault",
        "year": "2013",
        "budget": "",
        "cover": "05",
        "summary": "Pierre, bois et enduits ocres face aux paysages rouges du Salagou.",
        "text": [
            "Au bord du lac du Salagou, ce projet mixte associe un lieu d'affinage et un logement. Ses matériaux "
            "— pierre, bardage bois, enduits ocre-rouge — répondent aux terres de ruffe environnantes.",
            "Les intérieurs, lumineux et colorés, s'ouvrent par de grandes baies cadrées sur les vignes et les "
            "reliefs du Lodévois.",
        ],
    },
    {
        "slug": "siege-social-o",
        "title": "Siège social O",
        "cats": ["tertiaire"],
        "type": "Bureaux",
        "place": "Hérault",
        "year": "2017",
        "budget": "1 000 001 – 2 000 000 €",
        "cover": "01",
        "summary": "Un siège d'entreprise aux volumes affirmés, habillé de panneaux minéraux sombres.",
        "text": [
            "Pour ce siège social, l'enjeu était de donner une image forte à l'entreprise tout en offrant des "
            "espaces de travail clairs et fonctionnels.",
            "Les volumes en porte-à-faux, habillés de panneaux de façade gris anthracite, contrastent avec les "
            "enduits blancs. À l'intérieur : plateaux lumineux, circulations généreuses, locaux techniques "
            "intégrés.",
        ],
    },
    {
        "slug": "siege-social-at",
        "title": "Siège social AT",
        "cats": ["tertiaire"],
        "type": "Bureaux",
        "place": "Hérault",
        "year": "2019",
        "budget": "500 001 – 1 000 000 €",
        "cover": "12",
        "summary": "Un bâtiment de bureaux posé dans la garrigue, sur pilotis et toiture-terrasse.",
        "text": [
            "Implanté dans un site naturel en pente, ce siège social se pose sur pilotis pour préserver le "
            "terrain et offrir de larges vues depuis les bureaux.",
            "Le projet a été mené du permis de construire à la réception : plans d'exécution, plancher, "
            "étanchéité de la toiture-terrasse et finitions.",
        ],
    },
    {
        "slug": "office-notarial-b",
        "title": "Office notarial B",
        "cats": ["tertiaire"],
        "type": "Établissement recevant du public",
        "place": "Bellegarde, Gard",
        "year": "2019",
        "budget": "500 001 – 1 000 000 €",
        "cover": "07",
        "summary": "Un office notarial contemporain, entre parement de pierre et toitures-terrasses.",
        "text": [
            "Construction neuve d'un office notarial à Bellegarde : un bâtiment recevant du public, accessible, "
            "à l'image à la fois sobre et institutionnelle.",
            "Les plans de permis, de masse et les façades détaillées accompagnent un suivi de chantier "
            "rigoureux, du gros œuvre aux parements de pierre.",
        ],
    },
    {
        "slug": "concept-cassine",
        "title": "Concept Cassine",
        "cats": ["conception"],
        "type": "Habitat modulaire breveté",
        "place": "Hérault",
        "year": "2013",
        "budget": "",
        "cover": "05",
        "summary": "Un module d'habitat circulaire en bois, imaginé et breveté par l'agence.",
        "text": [
            "Cassine est un concept d'habitat circulaire en ossature bois, développé et breveté par l'agence. "
            "Sa forme ronde optimise l'enveloppe et offre une relation à 360° avec la nature.",
            "Pensé comme un module évolutif — chambre d'hôtes, bureau, studio — il illustre l'intérêt de "
            "Volum pour les technologies nouvelles et l'éco-conception.",
        ],
    },
    {
        "slug": "divers-conception",
        "title": "Esquisses & conceptions",
        "cats": ["conception"],
        "type": "Études, perspectives 3D",
        "place": "Montpellier & Hérault",
        "year": "",
        "budget": "",
        "cover": "02",
        "summary": "Un aperçu des études et perspectives 3D réalisées pour de futures maisons.",
        "text": [
            "Avant le premier coup de pelle, chaque projet prend forme en esquisses, maquettes numériques et "
            "perspectives. Elles permettent de se projeter, de comparer des variantes et d'affiner ensemble "
            "le programme.",
            "Voici une sélection d'études menées pour des maisons individuelles autour de Montpellier.",
        ],
    },
]

# Projets mis en avant sur la page d'accueil (6)
FEATURED = ["villa-cetd", "villa-vc", "villa-l", "siege-social-o", "maison-d-affinage", "villa-g"]

# Diaporama d'accueil : (slug, image, légende)
HERO_SLIDES = [
    ("villa-cetd", "11", "Villa C&D — Pignan"),
    ("siege-social-o", "01", "Siège social O — Hérault"),
    ("villa-vc", "08", "Villa VC — Rousson"),
    ("villa-g", "06", "Villa G — Prades-le-Lez"),
    ("maison-d-affinage", "05", "Mas Salagou — Lac du Salagou"),
]

COMMUNES = [
    "Montpellier", "Montarnaud", "Assas", "Pignan", "Prades-le-Lez", "Saint-Clément-de-Rivière",
    "Saint-Gély-du-Fesc", "Saint-Bauzille-de-Montmel", "Grabels", "Juvignac", "Saint-Georges-d'Orques",
    "Lavérune", "Castelnau-le-Lez", "Teyran", "Clermont-l'Hérault", "Lodève", "Lac du Salagou", "Bellegarde (30)", "Rousson (30)",
]

FAQ = [
    ("Le recours à un architecte est-il obligatoire ?",
     "Oui pour toute construction dont la surface de plancher dépasse 150 m², ainsi que pour une extension portant "
     "l'ensemble au-delà de ce seuil, et pour la plupart des bâtiments tertiaires. En dessous, faire appel à un "
     "architecte reste le meilleur moyen d'obtenir un projet sur mesure, bien conçu et maîtrisé dans son budget."),
    ("Comment se déroule le premier rendez-vous ?",
     "Il s'agit d'un échange, sur votre terrain ou à l'agence, pour comprendre vos besoins, vos envies, votre budget "
     "et les contraintes du site. C'est le point de départ d'une proposition de mission adaptée à votre projet."),
    ("Quelles missions proposez-vous ?",
     "De la simple mission de conception et de dépôt de permis de construire jusqu'à la mission complète : études, "
     "consultation des entreprises, suivi de chantier et assistance à la réception des travaux."),
    ("Combien coûte un architecte ?",
     "Les honoraires dépendent de l'étendue de la mission et de la complexité du projet. Ils sont toujours définis "
     "dans un contrat clair, établi après le premier rendez-vous. N'hésitez pas à nous contacter pour un devis."),
    ("Dans quel secteur intervenez-vous ?",
     "Principalement à Montpellier et dans l'Hérault (Grand Pic Saint-Loup, vallée de l'Hérault, Lodévois), ainsi "
     "que dans le Gard pour certains projets."),
    ("Pouvez-vous intervenir sur une rénovation ou une extension ?",
     "Bien sûr. Extensions, surélévations, réhabilitations de mas ou de bâtiments anciens et aménagements "
     "intérieurs représentent une part importante de l'activité de l'agence."),
]

import type { VilleContenu } from "../types";

export const CONTENU_G3: Record<string, VilleContenu> = {
  // Sources : https://www.saintgelydufesc.com/fileadmin/www.saintgelydufesc.com/MEDIA/urbanisme_logement/PLU/1-Rapport_de_presentation.pdf (PLU approuvé le 21/03/2017, modification simplifiée n°1 approuvée le 19/12/2024) ;
  // https://www.ville-saintgelydufesc.fr/Modification-simplifliee-du-Plan.html ;
  // https://piece-jointe-carto.developpement-durable.gouv.fr/DEPT034A/ZonagePPRI/SAINT-GELY-DU-FESC/RapportPres_SAINT-GELY-DU-FESC.pdf (PPRI approuvé le 11/05/2007) ;
  // https://piece-jointe-carto.developpement-durable.gouv.fr/DEPT034A/ZonagePPRIF/SAINT-GELY-DU-FESC/RapportPres_SAINT-GELY-DU-FESC.pdf (PPRIF approuvé le 30/01/2008, aléa très fort sur 53 % du territoire) ;
  // https://www.georisques.gouv.fr/api/v1/gaspar/pprn?codeInsee=34255 ;
  // https://saintandredesangonis.fr/wp-content/uploads/2025/04/20250408ArreteOLD34_DDTM34-2025-04-15800.pdf (arrêté OLD du 08/04/2025, commune à risque fort) ;
  // https://fr.wikipedia.org/wiki/Saint-G%C3%A9ly-du-Fesc (démographie, Pézouillet, argiles 97,4 %) ;
  // https://fr.wikipedia.org/wiki/Liste_des_monuments_historiques_de_l%27H%C3%A9rault_(M-Z) (aucun immeuble protégé ; seule une cloche est classée)
  "saint-gely-du-fesc": {
    title: "Architecte à Saint-Gély-du-Fesc : villa et extension",
    description: "Saint-Gély-du-Fesc : villa, extension ou division de terrain conçues avec le PLU modifié en 2024, le Pézouillet et la garrigue. Parlons de votre projet.",
    accroche: "Plaine pavillonnaire, ZAC des Vautes et des Verriès, puechs boisés : à Saint-Gély-du-Fesc, chaque terrain pose sa propre question, entre pente, garrigue, ruisseau temporaire et nouvelles règles de division.",
    urbanisme: "PLU communal de 2017, modification simplifiée fin 2024",
    intro: [
      "Saint-Gély-du-Fesc comptait un peu plus de cinq cents habitants au début des années 1960 ; elle en compte aujourd'hui plus de dix mille. Cette croissance s'est faite par lotissements successifs autour du vieux village, puis par les ZAC des Verriès, des Vautes et du golf de Coulondres. Les demandes adressées à un architecte à Saint-Gély-du-Fesc en découlent : agrandir une villa devenue trop petite, construire sur un lot détaché d'un grand jardin, implanter une maison neuve sur l'un des derniers terrains en lisière de bois, ou rénover une maison du centre ancien.",
      "Ici, une bonne part du projet se joue avant le premier croquis. Le PLU, modifié en décembre 2024, encadre désormais la forme des lots issus d'une division, les carports, les toitures-terrasses des extensions et la place des climatiseurs dans le vieux centre. Le plan de prévention des incendies classait plus de la moitié du territoire en aléa très fort, et celui des inondations suit le Pézouillet et ses affluents. Nous croisons ces documents dès la première visite, puis nous dessinons une maison qui tient dans l'emprise réellement constructible, sur des fondations adaptées à des sols argileux.",
    ],
    territoire: {
      titre: "Construire entre puechs boisés et vallon du Pézouillet",
      texte: [
        "Le village occupe une vallée bordée de collines de plus de 200 mètres, que le Pézouillet traverse du nord au sud avant de rejoindre la Mosson à la limite de Combaillaux et de Grabels. Ce ruisseau et ses affluents, la Vignasse, la Frégère ou le Combals, sont à sec l'été mais réagissent très vite aux orages. Chênes verts, pins d'Alep et garrigue à thym couvrent les reliefs du nord ; au sud, la plaine mêle vignes, champs et bois. Autour de l'église Saint-Gilles et de la cave coopérative, le centre ancien rappelle une paroisse longtemps liée au château de Montferrand.",
        "Autour du noyau ancien, l'urbanisation est surtout pavillonnaire, souvent desservie par des rues étroites ou en impasse. Plusieurs quartiers se sont installés en lisière, voire au cœur des bois : le Puech de Brissac, l'Homme Mort, les abords du golf de Coulondres, la ZAC des Vautes bâtie sur une colline au sud-est. Dans la plupart des secteurs résidentiels, le PLU impose une couverture en tuiles canal de teinte ocre, avec une pente de 30 à 35 % ; les toits plats restent réservés aux bâtiments de facture contemporaine, aux petites extensions et aux locaux techniques.",
        "De ce relief découlent des choix de conception très concrets. Une parcelle boisée oblige à penser l'accès des secours, le débroussaillement et des matériaux qui résistent au feu ; un terrain de plaine longé par un fossé impose un recul et une cote de plancher vérifiés ; une pente sur les contreforts du Mont Bouras demande des terrassements mesurés. Le confort d'été, enfin, se règle par l'orientation : pièces de vie ouvertes au sud derrière un débord ou une pergola, façades ouest protégées.",
      ],
    },
    projets: [
      {
        titre: "Extension à toit plat d'une villa de lotissement",
        texte: "Dans les lotissements des années 1980 et 1990, nombre de maisons sont coiffées d'un toit de tuiles à deux pentes. Depuis fin 2024, une extension couverte d'une toiture-terrasse y est admise jusqu'à 40 m² dans les secteurs résidentiels : une pièce de vie ou une suite parentale en rez-de-jardin devient possible sans plafond trop bas. Nous vérifions l'emprise encore disponible, les reculs et le raccord à la charpente existante.",
        expertise: "extension",
      },
      {
        titre: "Maison neuve sur un lot détaché",
        texte: "Diviser un grand jardin pour bâtir reste courant, mais la règle s'est précisée : le lot créé doit présenter une forme simple, cinq côtés au plus, et la maison conservée doit rester conforme une fois la division faite. Avant tout bornage, nous testons les deux parcelles sur plan. Puis nous concevons une maison compacte, souvent sur un terrain étroit, qui préserve l'intimité des deux jardins, infiltre ses eaux pluviales sur place et tourne ses pièces principales vers la meilleure orientation.",
        expertise: "maison",
      },
      {
        titre: "Gîte ou salle de réception dans un domaine",
        texte: "La modification du PLU a désigné, en zone agricole, des bâtiments des domaines de Coulondres, de Valmont et du Chemin des Rêves qui peuvent changer de destination pour devenir gîtes, chambres d'hôtes ou salles de réception. Chaque projet reste suspendu à l'avis conforme de la CDPENAF, la commission départementale chargée des espaces agricoles, naturels et forestiers. Le dossier doit montrer que l'exploitation n'est pas gênée et que le bâtiment garde son caractère : relevé précis, choix des ouvertures, matériaux.",
        expertise: "renovation",
      },
      {
        titre: "Locaux d'activité sur la ZAC des Vautes",
        texte: "La partie économique de la ZAC des Vautes, de part et d'autre de la RD 986 à l'entrée sud de la commune, accueille commerces, bureaux et entreprises ; l'artisanat et l'hôtellerie y sont désormais admis. La hauteur peut atteindre 12 m, au faîtage comme à l'acrotère, et le stationnement se calcule selon l'usage, par exemple une place pour 30 m² de bureaux ou pour 100 m² d'entrepôt. Le bâtiment se dimensionne à partir de ces ratios.",
        expertise: "professionnels",
      },
    ],
    contraintes: [
      ["PLU de 2017, modifié en décembre 2024", "Le PLU approuvé en 2017 a été adapté par une modification simplifiée approuvée le 19 décembre 2024. Elle touche directement les projets de particuliers : divisions foncières, carports limités à 5 m sur 3,30 m et 2,50 m de haut, climatiseurs proscrits sur les façades donnant sur la rue dans le centre ancien, hauteur plafonnée à celle du bâtiment mitoyen en zone UA. Nous partons toujours du règlement en vigueur, jamais d'un extrait ancien."],
      ["Pézouillet : le PPRI de 2007", "Approuvé le 11 mai 2007, le plan de prévention des inondations distingue une zone rouge, des zones bleues, dont une liée au ruissellement sur la ZAC des Verriès, et une zone de précaution où tout projet nouveau doit compenser l'imperméabilisation. Le PLU ajoute un recul de 3 m par rapport aux fossés et cours d'eau. La sous-face du premier plancher se cale sur la cote des plus hautes eaux : nous la faisons établir par un géomètre dès l'esquisse."],
      ["Incendie : PPRIF, carte de 2021 et débroussaillement", "Le PPRIF communal, en vigueur depuis le 30 janvier 2008, interdit de bâtir dans les zones de danger et fixe des prescriptions en zone de précaution. Depuis 2024, le PLU annexe aussi la carte départementale de l'aléa feu de forêt de 2021. Depuis l'arrêté préfectoral du 8 avril 2025, Saint-Gély-du-Fesc figure parmi les communes à risque fort : autour d'une maison exposée, on débroussaille sur 50 m et l'on espace les houppiers de 3 m."],
      ["Sols argileux presque partout", "Presque tout le territoire présente une exposition moyenne ou forte au retrait-gonflement des sols argileux. Avant de vendre un terrain à bâtir, le propriétaire doit donc fournir une étude géotechnique préalable ; elle guide ensuite la profondeur des fondations, l'éloignement des arbres et le rejet des eaux de pluie à distance des façades. Pour une extension accolée, nous prévoyons si besoin un joint de rupture entre fondations neuves et anciennes."],
    ],
    quartiers: ["Centre ancien", "Les Verriès", "Les Vautes", "Coulondres", "Puech de Brissac", "L'Homme Mort", "Beauregard", "Valmont", "Laval", "Le Rouergas"],
    faq: [
      ["Puis-je détacher un lot de mon jardin pour y construire une maison ?", "C'est possible dans les zones urbaines, mais deux règles ajoutées en 2024 changent l'approche. Le terrain créé doit avoir une forme géométrique simple, cinq côtés au plus, pour éviter les découpes peu constructibles aux angles très aigus. Et la maison conservée doit rester conforme au PLU après la division : reculs, emprise au sol, places de stationnement et espaces plantés s'apprécient sur la parcelle réduite. Consulter un architecte à Saint-Gély-du-Fesc avant de missionner le géomètre permet de tester le découpage sur plan."],
      ["Mon extension à toit plat sera-t-elle acceptée sur une maison couverte de tuiles ?", "Dans les secteurs résidentiels UD1 à UD5, oui depuis décembre 2024, si l'extension ne dépasse pas 40 m² : auparavant, la pente de 30 à 35 % imposée aux tuiles rendait certaines extensions en rez-de-chaussée trop basses. Une extension de cette taille relève en principe d'une déclaration préalable ; elle passe au permis de construire, avec architecte, si la surface totale de la maison franchit alors 150 m². Le cahier des charges de votre lotissement peut ajouter ses propres clauses : nous le lisons aussi."],
      ["Où installer la climatisation d'une maison du vieux village ?", "Dans le centre ancien, classé en zone UA, le règlement interdit toute pose sur une façade donnant sur la rue ou l'espace public. L'unité extérieure, comme l'évaporateur d'une pompe à chaleur, se place de préférence dans les combles ou sur la façade arrière. À défaut, et sur justification, elle peut être encastrée dans une niche fermée par une grille ou un claustra de la teinte de la façade, logée en imposte ou en soubassement d'une baie derrière des ventelles, ou masquée sur un balcon. Nous l'intégrons au dessin dès la rénovation."],
    ],
    refs: ["logement-exterieur", "plans-recherche", "tertiaire"],
    image: ["logement-exterieur", "35"],
  },

  // Sources : https://www.saint-clement-de-riviere.fr/p1652-plan-local-d-urbanisme-plu.html (PLU approuvé le 21/10/2021, M1 le 27/10/2022, DP-MEC maison médicale le 19/02/2025, MS01 le 19/11/2025) ;
  // https://piece-jointe-carto.developpement-durable.gouv.fr/DEPT034A/ZonagePPRI/SAINT-CLEMENT-DE-RIVIERE/RapportPres_SAINT-CLEMENT-DE-RIVIERE.pdf (PPRI révisé approuvé le 28/02/2013) ;
  // https://piece-jointe-carto.developpement-durable.gouv.fr/DEPT034A/ZonagePPRIF/SAINT-CLEMENT-DE-RIVIERE/RapportPres_SAINT-CLEMENT-DE-RIVIERE.pdf (PPRIF approuvé le 30/01/2008, aléa très fort 39 %) ;
  // https://www.georisques.gouv.fr/api/v1/gaspar/pprn?codeInsee=34247 ;
  // https://saintandredesangonis.fr/wp-content/uploads/2025/04/20250408ArreteOLD34_DDTM34-2025-04-15800.pdf (arrêté OLD du 08/04/2025, commune à risque fort) ;
  // https://fr.wikipedia.org/wiki/Saint-Cl%C3%A9ment-de-Rivi%C3%A8re (source du Lez, Natura 2000, morphologie, argiles 100 %) ;
  // https://fr.wikipedia.org/wiki/Liste_des_monuments_historiques_de_l%27H%C3%A9rault_(M-Z) (aqueduc Saint-Clément inscrit en 1994) ;
  // https://data.geopf.fr/annexes/gpu/documents/DU_34247/c1dd9384c49c158087cd429fa1d3bbf0/34247_procedure_20260218.pdf (objets de la MS1 ; PDA de l'aqueduc et du château de Montferrier, arrêté préfectoral du 07/01/2026, annexé le 18/02/2026) ;
  // https://data.geopf.fr/annexes/gpu/documents/DU_34247/c1dd9384c49c158087cd429fa1d3bbf0/34247_orientations_amenagement_20260218.pdf (secteurs Bissy, Boulidou)
  "saint-clement-de-riviere": {
    title: "Architecte à Saint-Clément-de-Rivière : villa, extension",
    description: "À Saint-Clément-de-Rivière, maison neuve, extension ou rénovation pensées avec la pinède, le Lez et le PLU modifié en 2025. Parlons de votre projet.",
    accroche: "Source du Lez, vieux village en sous-bois, lotissements en croissant de la Colline et plaine agricole : Saint-Clément-de-Rivière offre des terrains très différents, et chaque projet commence par lire le sien.",
    urbanisme: "PLU communal (2021), modification simplifiée en 2025",
    intro: [
      "Le territoire de Saint-Clément-de-Rivière a une forme singulière : deux ensembles reliés par un passage étroit, sur huit kilomètres du nord au sud. Au sud, contre Montpellier, la zone commerciale de Trifontaine et des villas sur les hauteurs ; au centre, le vieux village entouré de maisons construites sous la pinède ; au nord, les lotissements de la Colline, le collège, le lycée et des cliniques près du bois de Saint-Sauveur. Un architecte à Saint-Clément-de-Rivière y mène surtout des extensions de maisons des années 1980, des rénovations complètes et quelques maisons neuves sur les terrains encore libres.",
      "Notre travail commence par la lecture du terrain. Autour du village, les parcelles de 2 000 à 3 000 m² plantées de pins d'Alep sont exposées au feu ; près du Lez, de la Lironde ou du ravin d'Embarre, c'est l'eau qui fixe les limites ; et l'ensemble de la commune repose sur des sols argileux. Nous confrontons le règlement du PLU, retouché en novembre 2025, aux plans de prévention, puis nous dessinons une maison qui s'insère sous les arbres sans multiplier les surfaces imperméables ni les terrassements.",
    ],
    territoire: {
      titre: "Construire entre la source du Lez et la pinède",
      texte: [
        "Le Lez naît sur la commune, à quelques kilomètres à l'ouest du domaine de Restinclières, et coule dans une vallée à fond plat bordée de versants soutenus. La rivière forme un site Natura 2000, seul lieu de présence d'un poisson endémique, le chabot du Lez. Plus au sud, la Lironde traverse le secteur de Fontfroide avant de rejoindre le Lez aux portes de Montpellier. Entre les deux, le ravin d'Embarre, souvent à sec, traverse la zone urbaine et peut produire de forts débits lors des orages.",
        "Lors de l'élaboration du plan de prévention des incendies, forêts et garrigues couvraient encore plus de la moitié du territoire : mamelons de la Lironde et de Piedmarche, bois de Saint-Sauveur, secteur du Patus. L'habitat s'y est glissé à partir des années 1980, sur des terrains boisés autour du vieux village, tandis que la plaine du Lez, à l'est, gardait sa vocation agricole. Le hameau ancien de la Clastre conserve l'église Saint-Clément ; les commerces de proximité se regroupent au Boulidou.",
        "Concevoir ici, c'est d'abord ménager les arbres et l'accès. Une maison sous la pinède doit rester défendable : desservie par une voie où les engins de secours circulent, entourée d'abords débroussaillés, avec des façades et des toitures qui offrent peu de prise au feu. Le plan de prévention note que la menace principale vient d'un incendie poussé par le vent de nord-ouest, et que seul un feu sur Piedmarche ou les Vautes menacerait le vieux village par vent de sud. En été, les pins conservés au sud et à l'ouest limitent les surchauffes.",
      ],
    },
    projets: [
      {
        titre: "Agrandir une maison dans la pinède",
        texte: "Ajouter une chambre, un bureau ou un séjour à une maison des années 1980 posée sous les pins demande d'abord de savoir où le PPRIF autorise à bâtir et quelle emprise reste disponible. Nous implantons l'extension en épargnant les grands sujets, nous limitons les surfaces de toiture où s'accumulent les aiguilles et nous choisissons des menuiseries et des débords peu vulnérables. Si la surface totale dépasse 150 m², le permis de construire passe obligatoirement par un architecte.",
        expertise: "extension",
      },
      {
        titre: "Rénover une villa des années 1980",
        texte: "Les maisons bâties lors de la forte urbanisation des années 1980 arrivent à l'âge des grands travaux : toiture, menuiseries, isolation, chauffage, salles d'eau. Nous commençons par un relevé et un diagnostic, en cherchant aussi les fissures liées au retrait-gonflement des argiles. Le projet redistribue ensuite les pièces pour la vie actuelle, ouvre la maison vers le jardin et traite le confort d'été autant que celui de l'hiver, avec des protections solaires dessinées.",
        expertise: "renovation",
      },
      {
        titre: "Maison neuve sur un terrain de la Colline",
        texte: "Au nord, les lotissements de la Colline ont été bâtis en croissant, au contact d'un massif classé en aléa très fort. Un terrain encore libre y impose de vérifier le zonage du PPRIF avant même l'achat, puis de composer avec les vues, des voisins proches et la pente, dont le règlement revu en 2025 encadre les terrassements. Nous dessinons une maison compacte, des terrasses abritées des vents dominants et des abords minéraux ou plantés d'essences peu combustibles.",
        expertise: "maison",
      },
      {
        titre: "Cabinet médical ou paramédical",
        texte: "La santé tient une place notable dans la commune, avec ses cliniques et la maison médicale pour laquelle le PLU a été mis en compatibilité en février 2025. Aménager un cabinet, c'est traiter l'accessibilité des personnes à mobilité réduite, la sécurité incendie d'un établissement recevant du public, l'acoustique et le stationnement. Nous établissons la notice d'accessibilité et le dossier de permis ou d'autorisation de travaux, en neuf comme en réhabilitation.",
        expertise: "professionnels",
      },
    ],
    contraintes: [
      ["Un PLU récent, déjà ajusté", "Approuvé le 21 octobre 2021, le PLU a été modifié en octobre 2022 et mis en compatibilité en février 2025 pour une maison médicale. La modification simplifiée du 19 novembre 2025 a retouché les règles des zones urbaines : hauteurs, espaces libres, annexes, clôtures, terrassements dans la pente, toitures, pergolas, vérandas et climatiseurs. Nous travaillons sur la version mise à jour en février 2026, jamais sur un dossier téléchargé il y a quelques années."],
      ["Inondation : le PPRI révisé en 2013", "Le PPRI, révisé puis approuvé le 28 février 2013, couvre la rive droite du Lez, la Lironde au sud et le ravin d'Embarre, qui traverse la zone urbaine ; un pluviomètre y a enregistré 500 mm en six heures lors d'un orage de 2005. Si votre parcelle est touchée, la cote du plancher et l'emprise admise découlent du règlement de la zone : nous les vérifions avant l'esquisse."],
      ["Feu de forêt : PPRIF et débroussaillement", "Depuis le 30 janvier 2008, un PPRIF couvre la commune : un aléa très fort, relevé sur 39 % du territoire, y a servi à délimiter des zones de danger inconstructibles et des zones de précaution. Le préfet a classé Saint-Clément-de-Rivière en risque fort dans son arrêté d'avril 2025 sur le débroussaillement : dans les zones urbaines proches d'un massif, c'est la totalité du terrain, bâti ou non, qui doit être tenue débroussaillée."],
      ["Aqueduc Saint-Clément", "L'aqueduc Saint-Clément est inscrit au titre des monuments historiques depuis 1994. Un arrêté préfectoral du 7 janvier 2026 a remplacé le rayon de 500 m par un périmètre délimité des abords, commun avec le château de Montferrier et annexé au PLU. Dans ce périmètre, tout projet qui modifie l'aspect extérieur requiert l'accord de l'Architecte des Bâtiments de France, et l'instruction s'allonge ; au-dehors, son avis n'est plus sollicité."],
      ["Argiles sur toute la commune", "L'ensemble du territoire communal relève d'un aléa argileux moyen ou fort, et le PLU annexe une carte ainsi que des dispositions constructives. Pour une maison neuve, l'étude géotechnique fixe le niveau et le type de fondations ; pour une extension, elle évite les tassements différentiels entre l'ancien et le neuf. Les arbres trop proches et les rejets d'eaux pluviales au pied des murs sont à proscrire."],
    ],
    quartiers: ["Le Boulidou", "La Clastre", "La Colline", "Fontfroide", "Piedmarche", "Bois de Saint-Sauveur", "Le Patus", "Le Devois", "Trifontaine", "Bissy"],
    faq: [
      ["Ma maison est sous les pins près du vieux village : puis-je l'agrandir ?", "Tout dépend de la zone du PPRIF où elle se trouve. En zone de danger, les possibilités sont très restreintes et se lisent dans le règlement ; en zone de précaution, une extension est envisageable sous conditions. Dans tous les cas, l'accès des secours et le débroussaillement pèsent sur le projet. Nous lisons le règlement de votre zone, puis nous proposons une implantation, un volume et des matériaux compatibles, avant de constituer la déclaration préalable ou le permis."],
      ["Un projet proche de l'aqueduc passe-t-il par l'Architecte des Bâtiments de France ?", "Oui, s'il se trouve dans le périmètre délimité des abords créé le 7 janvier 2026 autour de l'aqueduc Saint-Clément et du château de Montferrier : l'accord de l'ABF est alors requis, que le projet soit visible ou non depuis l'ouvrage, et le délai d'instruction est majoré. Hors de ce périmètre, la règle des 500 m ne s'applique plus. Une façade, une clôture, une couleur d'enduit ou des panneaux solaires peuvent être concernés. Nous anticipons avec des insertions photographiques et des matériaux justifiés."],
      ["Ma future maison fait 170 m² : l'architecte est-il obligatoire ?", "Oui : au-delà de 150 m² de surface de plancher, le permis de construire d'un particulier doit être établi par un architecte. Ici, sa mission dépasse ce seuil : composer avec les arbres, les zones du PPRIF et la pente, appliquer la réglementation environnementale RE2020 et intégrer l'étude de sol exigée par les argiles. Consulter un architecte à Saint-Clément-de-Rivière dès l'achat du terrain permet aussi de vérifier qu'il accueille réellement la maison voulue."],
    ],
    refs: ["logement-exterieur", "logement-interieur", "tertiaire"],
    image: ["logement-exterieur", "19"],
  },

  // Sources : https://data.montpellier3m.fr/dataset/plui-climat-des-communes-de-montpellier-mediterranee-metropole ;
  // https://www.schneider-avocats.com/article/approbation-du-plui-climat-de-montpellier-mediterranee-metropole/ (PLUi-Climat approuvé le 16/07/2025, exécutoire le 25/08/2025 ; référé-suspension rejeté le 07/10/2025, recours au fond en cours) ;
  // https://piece-jointe-carto.developpement-durable.gouv.fr/DEPT034A/ZonagePPRI/MONTFERRIER-SUR-LEZ/RapportPres_MONTFERRIER-SUR-LEZ.pdf (PPRI révisé approuvé le 28/02/2013) ;
  // https://piece-jointe-carto.developpement-durable.gouv.fr/DEPT034A/ZonagePPRIF/MONTFERRIER-SUR-LEZ/RapportPres_MONTFERRIER-SUR-LEZ.pdf (PPRIF approuvé le 21/03/2005, aléa très fort 46,42 %) ;
  // https://saintandredesangonis.fr/wp-content/uploads/2025/04/20250408ArreteOLD34_DDTM34-2025-04-15800.pdf (arrêté OLD du 08/04/2025, commune à risque fort) ;
  // https://fr.wikipedia.org/wiki/Montferrier-sur-Lez (village basaltique, circulade, Baillarguet, CIRAD) ;
  // https://fr.wikipedia.org/wiki/Liste_des_monuments_historiques_de_l%27H%C3%A9rault_(M-Z) (château inscrit en 1990, aqueduc Saint-Clément inscrit) ;
  // https://data.geopf.fr/annexes/gpu/documents/DU_34247/c1dd9384c49c158087cd429fa1d3bbf0/34247_procedure_20260218.pdf (PDA de l'aqueduc Saint-Clément et du château de Montferrier, arrêté préfectoral du 07/01/2026)
  "montferrier-sur-lez": {
    title: "Architecte à Montferrier-sur-Lez : extension, rénovation",
    description: "Montferrier-sur-Lez : extension, rénovation ou maison neuve sous les pins, au pied du village de basalte, avec le PLUi-Climat. Parlons de votre projet.",
    accroche: "Sur sa butte de basalte gris, le vieux Montferrier domine des quartiers où les maisons se cachent sous les pins : chaque extension y compose avec la forêt, le Lez, les monuments et le nouveau PLUi.",
    urbanisme: "PLUi-Climat de Montpellier Méditerranée Métropole (2025)",
    intro: [
      "Montferrier-sur-Lez s'est construite en deux temps. Le vieux village, perché sur une colline d'origine volcanique, s'enroule autour de la rue du Four et du château. Puis l'habitat a gagné, depuis le village et le hameau du Mas de l'Huile, les mamelons couverts de pins d'Alep, sur des parcelles souvent comprises entre 5 000 et 10 000 m², au point de former une forêt habitée. Un architecte à Montferrier-sur-Lez travaille donc surtout sur de grandes maisons à agrandir ou à rénover, sur des maisons de village et, plus rarement, sur des terrains nouvellement détachés.",
      "Le cadre réglementaire vient de changer. Les demandes déposées depuis le 25 août 2025 sont instruites avec le PLUi-Climat de la Métropole, approuvé le 16 juillet 2025, et non plus avec l'ancien PLU communal : hauteur, emprise et part de pleine terre ont pu évoluer pour votre parcelle. S'y ajoutent le plan de prévention des incendies, qui place près de la moitié de la commune en aléa très fort, celui des inondations du Lez et de la Lironde, et les abords du château et de l'aqueduc. Nous faisons ce tri avant de dessiner.",
    ],
    territoire: {
      titre: "Construire autour d'une butte de basalte",
      texte: [
        "Le vieux village tient sur une colline abrupte, vestige d'un volcan éteint : ses maisons et ce qui reste des fortifications sont bâtis en pierre basaltique, d'un gris de fer. La rue du Four dessine une circulade incomplète, l'autre moitié du cercle étant occupée par le château, reconstruit au XVIIe siècle puis ruiné à la Révolution, dont une aile accueille la mairie. L'église Saint-Étienne, d'origine romane, couronne le piton. Toute intervention s'y fait dans un tissu serré, sous le regard des monuments.",
        "À l'est, les massifs du Pioch Rous et de Baillarguet restent couverts de pins d'Alep, avec quelques îlots de chênes verts, et se prolongent sur Clapiers. Baillarguet, commune rattachée à Montferrier en 1813, accueille une partie du campus du CIRAD, l'autre étant à la Valette. À l'ouest, la combe des Moulières et les abords de la RD 12 ont reçu des lotissements plus serrés sur d'anciennes terres agricoles. Dans la vallée du Lez, l'ancienne tannerie et plusieurs maisons, souvent dotées d'un étage refuge, sont en zone inondable.",
        "Ce paysage oriente la conception. Sur les grands terrains boisés, la maison se loge entre les arbres, mais le plan de prévention des incendies relève que les plantations des propriétaires, pins, cyprès ou cèdres, recréent peu à peu une continuité forestière entre les jardins. Un projet doit donc prévoir des abords entretenus et une coupure de végétation autour de la maison. Les sols, argileux sur la quasi-totalité de la commune, imposent des fondations étudiées, et les pentes des mamelons appellent des niveaux décalés plutôt que de lourds remblais.",
      ],
    },
    projets: [
      {
        titre: "Agrandir une maison de la forêt habitée",
        texte: "Sur une parcelle de plusieurs milliers de mètres carrés, l'emprise n'est pas le principal frein : ce sont les arbres, la pente et le zonage du PPRIF. Nous positionnons l'extension pour garder les plus beaux sujets, éviter les terrassements et prolonger la maison par une terrasse couverte. Façades et toitures sont choisies pour leur tenue au feu. Si la surface totale franchit 150 m², le recours à l'architecte devient obligatoire et le permis de construire remplace la déclaration préalable.",
        expertise: "extension",
      },
      {
        titre: "Restaurer une maison du village en basalte",
        texte: "Autour de la circulade, les maisons sont bâties en basalte, serrées les unes contre les autres. Les restaurer, c'est conserver l'enveloppe de pierre, reprendre les joints et enduits à la chaux, isoler par l'intérieur avec des matériaux qui laissent respirer les murs et retrouver de la lumière par une cour, une verrière ou un percement mesuré. Dans le périmètre des abords du château inscrit, façades, menuiseries et couvertures passent par l'accord de l'Architecte des Bâtiments de France.",
        expertise: "renovation",
      },
      {
        titre: "Maison neuve sur un terrain en pente",
        texte: "Sur les flancs des mamelons, un terrain constructible présente souvent une pente marquée et des pins à préserver. Nous dessinons des volumes en gradins qui suivent le sol, un garage ou un cellier logés dans le dénivelé, et des pièces de vie de plain-pied avec le jardin. Avant tout, nous vérifions dans le PLUi-Climat la constructibilité réelle de la parcelle et la part de pleine terre qui lui est imposée, puis le zonage du plan de prévention des incendies.",
        expertise: "maison",
      },
    ],
    contraintes: [
      ["PLUi-Climat : de nouvelles règles depuis août 2025", "Le PLUi-Climat des 31 communes de la Métropole, approuvé le 16 juillet 2025, est exécutoire depuis le 25 août ; le juge des référés a refusé de le suspendre le 7 octobre 2025. Il remplace le PLU de Montferrier-sur-Lez : zonage, hauteurs et emprise peuvent différer de ceux de l'ancien document. Nous partons du règlement et du plan de zonage en vigueur."],
      ["Château et aqueduc : avis de l'ABF", "Le château, inscrit au titre des monuments historiques en 1990, et l'aqueduc Saint-Clément, également inscrit, partagent depuis le 7 janvier 2026 un périmètre délimité des abords fixé par arrêté préfectoral. À l'intérieur, tout changement d'aspect extérieur passe par l'accord de l'Architecte des Bâtiments de France, ce qui allonge l'instruction. Nous soignons alors l'insertion : teintes d'enduit, tuiles, menuiseries, clôtures et panneaux solaires."],
      ["Lez, Lironde et Font de Salomé", "Révisé en 2013, le plan de prévention des inondations couvre le Lez, qui traverse la commune du nord au sud, la Lironde et la Font de Salomé, petit affluent qui s'étale en cône dans le secteur de Sainte-Julie. Aux Crouzets, un resserrement de la vallée accroît la vitesse de l'eau, et des maisons récentes, parfois de plain-pied, se trouvent en lit majeur. Pour tout projet riverain, nous vérifions la zone et la cote de référence."],
      ["Incendie : PPRIF de 2005", "Le PPRIF de Montferrier-sur-Lez date du 21 mars 2005 ; il relève un aléa très fort sur environ 46 % du territoire, et note que les feux passés venaient surtout des massifs voisins d'Assas et de Clapiers. La commune figure en risque fort dans l'arrêté préfectoral d'avril 2025, et le débroussaillement incombe aux propriétaires, y compris dans les secteurs désormais lotis comme le bois du Stade. Nous intégrons ces obligations au plan des abords."],
    ],
    quartiers: ["Vieux village", "Baillarguet", "Mas de l'Huile", "Combe des Moulières", "Pioch Rous", "La Valette", "Les Crouzets", "Bois du Stade", "Fescau", "La Devèze"],
    faq: [
      ["Le PLUi-Climat a-t-il changé ce que je peux construire sur ma parcelle ?", "C'est possible. Depuis le 25 août 2025, ce sont le zonage et le règlement du PLUi qui s'appliquent : le nom de la zone, ses hauteurs, son emprise ou la part de pleine terre exigée ont pu évoluer. Un certificat d'urbanisme délivré sous l'ancien PLU garantit en revanche ses règles pendant dix-huit mois, si la demande de permis est déposée dans ce délai. C'est la première vérification d'un architecte à Montferrier-sur-Lez : nous comparons les deux règlements pour votre terrain et en déduisons la surface réellement constructible."],
      ["Ma maison est dans le vieux village : que contrôle l'Architecte des Bâtiments de France ?", "Dans le périmètre délimité des abords du château, l'ABF examine tout ce qui se voit : enduits et joints sur le basalte, forme et couleur des menuiseries, volets, tuiles, garde-corps, et la place des climatiseurs ou des panneaux solaires. Ses prescriptions sont reprises dans l'autorisation. Une déclaration préalable est alors instruite en deux mois au lieu d'un. Nous préparons un relevé de façade, des détails et un échantillonnage qui facilitent l'échange avec ses services."],
      ["Ma maison des Crouzets est en zone inondable : puis-je l'agrandir ?", "Peut-être, mais dans les limites fixées par le règlement du PPRI pour votre zone. L'extension doit en général rester mesurée, ne pas faire obstacle à l'écoulement et placer son plancher au-dessus de la cote de référence ; un étage refuge est souvent la meilleure réponse. Un relevé topographique par géomètre donne la hauteur d'eau réelle sur votre terrain. Nous en déduisons la solution la plus sûre : surélévation, extension à l'étage ou réorganisation intérieure."],
    ],
    refs: ["logement-exterieur", "logement-interieur", "plans-recherche"],
    image: ["logement-exterieur", "27"],
  },

  // Sources : https://data.montpellier3m.fr/dataset/plui-climat-des-communes-de-montpellier-mediterranee-metropole ;
  // https://www.schneider-avocats.com/article/approbation-du-plui-climat-de-montpellier-mediterranee-metropole/ (PLUi-Climat approuvé le 16/07/2025, exécutoire le 25/08/2025) ;
  // https://piece-jointe-carto.developpement-durable.gouv.fr/DEPT034A/ZonagePPRI/PRADES-LE-LEZ/RapportPres_PRADES-LE-LEZ.pdf (PPRI révisé approuvé le 28/02/2013) ;
  // https://piece-jointe-carto.developpement-durable.gouv.fr/DEPT034A/ZonagePPRIF/PRADES-LE-LEZ/RapportPres_PRADES-LE-LEZ.pdf (PPRIF approuvé le 21/03/2005) ;
  // https://saintandredesangonis.fr/wp-content/uploads/2025/04/20250408ArreteOLD34_DDTM34-2025-04-15800.pdf (arrêté OLD du 08/04/2025, commune à risque fort, art. 3) ;
  // https://fr.wikipedia.org/wiki/Prades-le-Lez (enceinte, route de Mende, quartiers, ZAC Horizons, Restinclières, climat) ;
  // https://fr.wikipedia.org/wiki/Liste_des_monuments_historiques_de_l%27H%C3%A9rault_(M-Z) (portes Nord et Sud de l'enceinte inscrites en 1984) ;
  // https://data.geopf.fr/annexes/gpu/documents/DU_34247/c1dd9384c49c158087cd429fa1d3bbf0/34247_procedure_20260218.pdf (le PDA du 07/01/2026 couvre aussi Prades-le-Lez)
  "prades-le-lez": {
    title: "Architecte à Prades-le-Lez (34) : maison et rénovation",
    description: "Prades-le-Lez : maison neuve, extension en lisière de pinède ou rénovation d'une maison vigneronne, avec le PLUi-Climat. Parlons de votre projet.",
    accroche: "Entre la plaine du Lez, l'enceinte médiévale du Vieux Prades et les quartiers posés dans la pinède, Prades-le-Lez mêle trois époques de construction, chacune avec ses règles et ses risques.",
    urbanisme: "PLUi-Climat de Montpellier Méditerranée Métropole (2025)",
    intro: [
      "Longtemps petit village vigneron, Prades-le-Lez a vu sa population doubler dans les années 1980 : des quartiers entiers sont alors sortis de terre à l'est, au Mas de Prades, au Plo-Midi, aux Baronnes ou au Viala, dans la pinède et la garrigue. Une seconde vague, avec la ZAC multisites Horizons, ouvre Coste-Rousse, le Nouau et le Viala Est. Un architecte à Prades-le-Lez reçoit donc trois types de demandes : maisons neuves sur ces lots récents, extensions de villas des années 1980 et rénovations de maisons anciennes le long de la route de Mende.",
      "Chaque secteur a ses contraintes. À l'est, les maisons de la Montade, des Bouisses et du Nouau touchent des bois qui se prolongent sur Clapiers, Assas et Saint-Vincent-de-Barbeyrargues ; dans la vallée, le Lez et de petits thalwegs comme la Vague Morte ou le Nouau débordent lors des épisodes cévenols d'automne. Depuis le 25 août 2025, les demandes s'instruisent avec le PLUi-Climat de la Métropole. Nous rassemblons ces documents dès le premier rendez-vous, pour que l'esquisse parte de ce que le terrain permet vraiment.",
    ],
    territoire: {
      titre: "Construire entre le Lez, le Lirou et la pinède",
      texte: [
        "Le village s'est formé derrière une enceinte quadrangulaire des XIIe et XIIIe siècles, dont les portes Nord et Sud, inscrites au titre des monuments historiques, encadrent encore la rue du Vieux-Prades. Le tracé du rempart se lit le long de la route de Mende et des rues Roucayrol, de la Rivière et de Sauvielle. Dans la seconde moitié du XIXe siècle, le centre glisse vers l'est : la route de Mende se borde de maisons vigneronnes et devient la rue principale, délaissant la ruelle médiévale trop étroite.",
        "Le Lez, né tout près sur Saint-Clément-de-Rivière, reçoit le Lirou au Moulin neuf ; sa plaine, à l'ouest, reste largement occupée par des champs. Au nord, le domaine départemental de Restinclières et son château, bâti sous Louis XIV, séparent deux massifs boisés, le Puech Haut et les Blaquières. À l'est, l'urbanisation des années 1980 s'est faite de façon diffuse dans la pinède, en laissant des collines sans construction où affleurent encore des murets de cultures abandonnées.",
        "Pour un projet, cette géographie se traduit simplement. Près du Lez et des ruisseaux, la cote du terrain par rapport aux plus hautes eaux décide de tout ; dans la pinède, ce sont l'accès des secours, souvent par des rues étroites en impasse, et le débroussaillement. Le climat compte aussi : au pied du Pic Saint-Loup, les nuits sont plus fraîches qu'à Montpellier et les après-midi d'été souvent plus chauds, ce qui plaide pour une bonne inertie, des protections solaires et une ventilation nocturne.",
      ],
    },
    projets: [
      {
        titre: "Maison neuve dans les quartiers Horizons",
        texte: "Sur un lot de Coste-Rousse, du Nouau ou du Viala Est, la maison s'inscrit dans une opération d'ensemble et dans ses prescriptions. Nous composons un plan resserré, un étage partiel si besoin, un jardin tourné au sud et un stationnement intégré. La RE2020 et le confort d'été orientent l'isolation et les protections solaires, et la pente de la colline de Coste-Rousse, lorsqu'elle existe sur le lot, est utilisée plutôt que nivelée.",
        expertise: "maison",
      },
      {
        titre: "Extension d'une villa en lisière de pinède",
        texte: "Aux Baronnes, au Plo-Midi ou à la Montade, nombre de maisons construites dans les années 1980 appellent une chambre de plus, un séjour agrandi ou un espace de travail. En secteur exposé au feu, le zonage du PPRIF peut limiter l'extension et impose des précautions : façades peu combustibles, débords protégés, abords débroussaillés. Nous cherchons d'abord à agrandir sans étendre l'emprise, par une surélévation partielle ou la transformation d'un garage, avant d'ajouter un volume.",
        expertise: "extension",
      },
      {
        titre: "Maison vigneronne de la route de Mende",
        texte: "Dans l'Hérault, une maison vigneronne associe généralement une remise ou une cave au rez-de-chaussée et le logement à l'étage, sur une parcelle profonde. Rénover celles de la route de Mende, c'est transformer la remise en pièce de vie, ouvrir vers la cour arrière, traiter le bruit de la circulation et l'humidité des murs anciens. Nous conservons les façades sur rue et leurs proportions, et reportons les grandes ouvertures côté jardin.",
        expertise: "renovation",
      },
    ],
    contraintes: [
      ["PLUi-Climat depuis le 25 août 2025", "Prades-le-Lez applique désormais le PLUi-Climat de Montpellier Méditerranée Métropole, approuvé le 16 juillet 2025 et exécutoire depuis le 25 août. Le zonage et les règles de hauteur, d'emprise ou de pleine terre peuvent différer de l'ancien PLU communal. Nous lisons le règlement de votre zone, les orientations d'aménagement qui la concernent éventuellement et les servitudes annexées avant toute esquisse."],
      ["Lez et thalwegs : le PPRI de 2013", "Révisé en 2013, avec une approbation le 28 février, le PPRI de Prades-le-Lez recense onze crues connues, dont celles de 1933, 1976, 2003 et 2005. Il couvre la plaine du Lez, où de nombreuses constructions anciennes ou récentes sont en lit majeur, et les petits thalwegs urbains : la Vague Morte, sujette au ruissellement, et le Nouau, vallon en V aux crues rapides. Un relevé de géomètre précise la cote de plancher à respecter."],
      ["Pinède et PPRIF de 2005", "Approuvé par le préfet en mars 2005, le PPRIF note que la forêt et les espaces naturels combustibles couvrent plus de la moitié de la commune. À l'est, l'habitat diffus de la Montade, des Bouisses et du Nouau est au contact immédiat des bois, souvent desservi par des rues étroites en impasse. Débroussaillement, accès des secours et choix des matériaux font partie du projet dès l'esquisse."],
      ["Portes médiévales inscrites", "Les portes Nord et Sud de l'enceinte, inscrites au titre des monuments historiques en 1984, créent autour du Vieux Prades des abords protégés. Une façade refaite, une toiture ou une devanture située dans un rayon de 500 m et en covisibilité avec elles est soumise à l'avis de l'ABF. Créé en janvier 2026, le périmètre délimité des abords de l'aqueduc Saint-Clément touche aussi la commune. Nous appuyons ces dossiers sur des photographies, des relevés et des détails de menuiseries."],
    ],
    quartiers: ["Vieux Prades", "Mas de Prades", "Plo-Midi", "Les Baronnes", "Coste-Rousse", "Le Nouau", "Le Viala", "La Montade", "Les Bouisses", "Restinclières", "Puech Haut"],
    faq: [
      ["Mon lot est dans la ZAC Horizons : ai-je besoin d'un architecte ?", "Pas forcément : un particulier n'y est tenu qu'au-delà de 150 m² de surface de plancher. Mais un lot d'opération d'ensemble cumule le règlement du PLUi et les prescriptions de l'aménageur, qui peuvent fixer l'implantation, les clôtures ou les teintes. Notre rôle d'architecte à Prades-le-Lez est de faire tenir votre programme dans ce cadre, de vérifier l'ensoleillement sur un terrain bordé de voisins, et de préparer un permis complet du premier coup, ce qui évite les demandes de pièces."],
      ["Ma maison de la Montade touche les bois : que dois-je débroussailler ?", "Prades-le-Lez fait partie des communes à risque fort de l'arrêté d'avril 2025. Autour d'une maison exposée, sur 50 m, les arbustes conservés doivent être tenus à 4 m des murs, les houppiers des arbres à 3 m de la maison et à 3 m les uns des autres, et les arbres élagués sur 30 % de leur hauteur. Il ne s'agit pas de raser le terrain. Avant une extension, nous reportons ce périmètre sur le plan, avec la piscine et les haies."],
      ["Peut-on transformer la remise d'une maison de la route de Mende en logement ?", "En général oui, si le règlement de la zone l'admet et si le stationnement exigé peut être trouvé, ce qui est souvent le point délicat sur cet axe. La transformation crée de la surface de plancher : selon la surface et la zone, une déclaration préalable ou un permis de construire sera nécessaire, et l'architecte devient obligatoire si la maison dépasse alors 150 m². Nous vérifions aussi la cote du plancher lorsque la parcelle approche de la zone inondable."],
    ],
    refs: ["logement-exterieur", "logements-collectifs", "plans-recherche"],
    image: ["logement-exterieur", "03"],
  },

  // Sources : https://www.geoportail-urbanisme.gouv.fr/document/by-id/ce985fbde84b795c5e1492105944e44d ;
  // https://data.geopf.fr/annexes/gpu/documents/DU_34309/ce985fbde84b795c5e1492105944e44d/34309_oap_20190523.pdf (PLU approuvé le 26/07/2010, modifié le 28/06/2012 et le 23/05/2019 ; OAP La Passarelle et route de Vendargues) ;
  // https://data.geopf.fr/annexes/gpu/documents/DU_34309/ce985fbde84b795c5e1492105944e44d/34309_reglement_20190523.pdf (zones UA, UB, UD : emprise, pleine terre, hauteur 8,50 m) ;
  // https://data.geopf.fr/annexes/gpu/documents/DU_34309/ce985fbde84b795c5e1492105944e44d/34309_4_5_a_ppri_reglement_20190523.pdf (PPRI du Salaison) ;
  // https://www.georisques.gouv.fr/api/v1/gaspar/pprn/34DDTM20040009 (PPRI Salaison approuvé le 14/08/2003 ; aucun PPRIF) ;
  // https://saintandredesangonis.fr/wp-content/uploads/2025/04/20250408ArreteOLD34_DDTM34-2025-04-15800.pdf (arrêté OLD du 08/04/2025, commune à risque fort) ;
  // https://fr.wikipedia.org/wiki/Teyran (situation, Salaison, Cadoule, Natura 2000, argiles 93,6 %)
  "teyran": {
    title: "Architecte à Teyran : maison, extension et rénovation",
    description: "Teyran : extension, maison neuve ou rénovation au village, conçues avec les règles d'emprise du PLU, le Salaison et la garrigue. Parlons de votre projet.",
    accroche: "Village perché autour de son ancien château devenu église, faubourgs du XIXe siècle, quartiers résidentiels jusqu'à la plaine du Salaison : à Teyran, emprise et pleine terre se calculent secteur par secteur.",
    urbanisme: "PLU communal (2010), modifié en dernier lieu en 2019",
    intro: [
      "Teyran est un village de promontoire, à mi-chemin entre la mer et les premiers reliefs des Cévennes, avec une vue sur le Pic Saint-Loup. Le cœur historique s'est construit autour du château médiéval, transformé en église au XIXe siècle ; les faubourgs l'ont prolongé au pied du relief, puis des quartiers résidentiels ont gagné la plaine jusqu'au Salaison. Un architecte à Teyran est surtout sollicité pour agrandir une maison de ces quartiers, construire sur un terrain libre ou issu d'une opération d'ensemble, et réhabiliter une maison du vieux village.",
      "Le PLU de Teyran, approuvé en 2010 et modifié pour la deuxième fois en 2019, fixe pour chaque secteur résidentiel une emprise au sol maximale et une part minimale d'espaces en pleine terre : c'est souvent la vraie limite d'une extension. S'y ajoutent le plan de prévention des inondations du Salaison et de la Cadoule, la garrigue des hauteurs et des sols argileux presque partout. Nous faisons le calcul exact sur votre parcelle avant de parler de volumes, puis nous cherchons la solution la plus économe en terrain.",
    ],
    territoire: {
      titre: "Construire entre promontoire et vallée du Salaison",
      texte: [
        "Le territoire descend en pente douce vers le sud, jusqu'à la vallée du Salaison et de ses ruisseaux. La Cadoule le traverse aussi, et plusieurs petits affluents, ceux de Transide, de la Passarelle ou de Massillan, drainent les quartiers. Les cultures permanentes couvrent encore près de la moitié de la commune ; au XIXe siècle, on y cultivait céréales, vignes et oliviers, et l'élevage ovin comptait. Une partie du territoire appartient au site Natura 2000 des hautes garrigues du Montpelliérais, qui abrite des couples d'aigle de Bonelli.",
        "Le vieux village, en promontoire, aligne des maisons anciennes en ordre continu le long de ruelles où l'on aperçoit encore les tours du château. Les faubourgs du XIXe siècle, au pied du relief, associent façades sur rue, cours et jardins à l'arrière, et quelques maisons de maître, dans une couronne végétale protégée. Au-delà, les quartiers résidentiels se succèdent avec des densités décroissantes, du centre élargi aux secteurs les plus éloignés, comme les Carignans ou les abords de la route de Vendargues.",
        "Concevoir à Teyran consiste souvent à densifier avec mesure. Le PLU protège le bâti ancien du cœur de village au titre du patrimoine, fixe des hauteurs différenciées et demande, dans les quartiers, de garder une large part de jardin perméable. Une extension réussie y passe par un plan compact, un étage plutôt qu'une aile lorsque l'emprise est atteinte, et des eaux pluviales gérées sur la parcelle. Côté confort, les pièces de vie s'ouvrent au sud, les vues vers le Pic Saint-Loup se cadrent depuis l'étage.",
      ],
    },
    projets: [
      {
        titre: "Agrandir sans dépasser l'emprise",
        texte: "Dans les secteurs résidentiels, l'emprise au sol est plafonnée de 30 % à 15 % selon l'éloignement du centre. Sur un terrain de 600 m² en secteur UDb, par exemple, la maison et ses annexes ne peuvent couvrir plus de 150 m² au sol. Quand la maison existante a déjà atteint ce plafond, le règlement n'autorise plus que l'agrandissement en hauteur. Nous calculons précisément l'emprise disponible, puis nous comparons extension de plain-pied, surélévation partielle et réaménagement intérieur.",
        expertise: "extension",
      },
      {
        titre: "Réhabiliter une maison du vieux village",
        texte: "Les maisons du cœur historique sont édifiées en ordre continu, à l'alignement des ruelles, autour de l'ancien château. Le PLU y protège le bâti au titre du patrimoine, encadre plus strictement les interventions sur l'existant et fixe, dans une partie du centre, les hauteurs par un plan dédié. Nous relevons la maison, repérons ce qui doit être conservé, maçonneries, ouvertures, toitures, puis organisons des logements lumineux, isolés sans piéger l'humidité des murs anciens.",
        expertise: "renovation",
      },
      {
        titre: "Maison neuve dans un nouveau quartier",
        texte: "Les secteurs ouverts à l'urbanisation font l'objet d'orientations d'aménagement : à la Passarelle, dans la plaine à l'ouest, le PLU prévoit environ 120 logements mêlant maisons individuelles, maisons de village groupées et petits collectifs, autour d'un mail piéton et d'un parc paysager. Sur un lot de ce type, nous travaillons avec les règles du secteur et celles de l'aménageur pour dessiner une maison compacte, bien orientée, aux eaux pluviales gérées sur place.",
        expertise: "maison",
      },
    ],
    contraintes: [
      ["Emprise, pleine terre et hauteur", "Le PLU, approuvé le 26 juillet 2010 et modifié en 2012 puis le 23 mai 2019, découpe les quartiers résidentiels en quatre secteurs. L'emprise au sol y va de 30 % à 15 % et les espaces libres en pleine terre ou perméables de 45 % à 65 % ; la hauteur est limitée à 8,50 m, soit un rez-de-chaussée et un étage. Les annexes indépendantes sont plafonnées à 30 m² et 2,50 m de haut."],
      ["Salaison et Cadoule : le PPRI de 2003", "Le plan de prévention des inondations du bassin du Salaison, approuvé le 14 août 2003, classe en zone rouge les champs d'inondation de la Cadoule, du Salaison et de ses affluents, et en zone bleue les lotissements déjà bâtis où l'eau reste sous 50 cm. En zone bleue, maison neuve comme extension calent leur premier plancher 30 cm au-dessus des plus hautes eaux ; une construction neuve n'y loge ni garage ni annexe sous cette cote, sauf exception."],
      ["Garrigue et débroussaillement", "Teyran n'a pas de plan de prévention des incendies, mais le risque feu de forêt y est recensé et le préfet l'a rangée parmi les communes à risque fort dans son arrêté d'avril 2025. Les obligations de débroussaillement s'y appliquent aux terrains situés dans les massifs de bois ou de garrigue de plus de 4 ha, ou à moins de 200 m. Pour une maison en lisière, nous prévoyons un accès praticable par les secours et des abords dégagés."],
      ["Des sols argileux presque partout", "Les cartes du BRGM placent près de 94 % de la surface communale, et presque tous les bâtiments, là où le jeu des argiles est moyen ou fort. Vendre un terrain à bâtir y suppose une étude géotechnique préalable ; pour une extension, nous la recommandons aussi, car un agrandissement mal fondé se fissure souvent à la jonction avec l'existant."],
    ],
    quartiers: ["Vieux village", "Les Carignans", "La Passarelle", "Angerly", "Plaine Guillaume", "Transide", "Massillan", "Route de Vendargues"],
    faq: [
      ["Ma maison dépasse déjà l'emprise autorisée : puis-je encore l'agrandir ?", "Oui, mais seulement en hauteur : le règlement des secteurs résidentiels prévoit que, lorsque l'existant dépasse l'emprise maximale, les agrandissements ne peuvent se faire qu'en hauteur, dans la limite de 8,50 m et d'un étage. Une surélévation demande de vérifier la structure, les fondations sur sol argileux et les vues sur les voisins. Nous établissons un relevé et une note de faisabilité avant d'engager les plans."],
      ["Ma maison est en zone rouge du PPRI du Salaison : puis-je l'agrandir ?", "De façon très limitée. Le règlement admet, pour une habitation existante, une seule extension plafonnée à 20 m² d'emprise au sol, sous réserve de caler la sous-face du premier plancher 30 cm au-dessus des plus hautes eaux et de réduire la vulnérabilité du bâtiment. Les sous-sols et les ouvertures sous la cote des plus hautes eaux sont interdits. Un relevé de géomètre est indispensable : nous dessinons ensuite une extension surélevée qui laisse passer l'eau."],
      ["Faut-il un architecte à Teyran pour rénover une maison du vieux village ?", "La loi ne l'impose à un particulier que si la surface de plancher dépasse 150 m² et qu'un permis de construire est requis. Mais le cœur de Teyran est protégé au titre du patrimoine par le PLU, qui encadre strictement les façades, les ouvertures et les toitures. L'architecte sécurise le dossier, échange avec le service urbanisme et coordonne les entreprises sur un bâti ancien dont l'état réel ne se révèle qu'au démontage."],
    ],
    refs: ["logement-exterieur", "plans-recherche", "logement-interieur"],
    image: ["logements-collectifs", "09"],
  },

  // Sources : https://www.ville-saint-mathieu-de-treviers.fr/ma-ville/urbanisme/plan-local-durbanisme/ (PLU révisé approuvé le 28/03/2024) ;
  // https://data.geopf.fr/annexes/gpu/documents/DU_34276/cf2d23866103e4a7c36967c276ef64a2/34276_procedure_20241121.pdf (MS1 approuvée le 21/11/2024) ;
  // https://data.geopf.fr/annexes/gpu/documents/DU_34276/cf2d23866103e4a7c36967c276ef64a2/34276_orientations_amenagement_20240328.pdf (OAP Solan, Avants, Placettes, continuités écologiques ; PAC incendie de février 2022) ;
  // https://www.mrae.developpement-durable.gouv.fr/IMG/pdf/2023ao113.pdf (avis MRAe : PADD, ZAC du Solan, site classé, PPRI et PPRIF, secteurs exposés au feu) ;
  // https://piece-jointe-carto.developpement-durable.gouv.fr/DEPT034A/ZonagePPRI/SAINT-MATHIEU-DE-TREVIERS/RapportPres_SAINT-MATHIEU-DE-TREVIERS.pdf (PPRI approuvé le 28/02/2013, barrages du Jeantou et du Cécélès) ;
  // https://piece-jointe-carto.developpement-durable.gouv.fr/DEPT034A/ZonagePPRIF/SAINT-MATHIEU-DE-TREVIERS/RapportPres_SAINT-MATHIEU-DE-TREVIERS.pdf (PPRIF approuvé le 21/03/2005) ;
  // https://www.occitanie.developpement-durable.gouv.fr/IMG/pdf/annexe6_cle244f88-3.pdf (site classé « Pic St Loup et montagne de l'Hortus ») ;
  // https://pop.culture.gouv.fr/notice/merimee/PA34000135 (Montferrand classé le 25/03/2024) ; https://pop.culture.gouv.fr/notice/merimee/PA34000141 (couvent des Tourelles inscrit le 23/09/2024) ;
  // https://saintandredesangonis.fr/wp-content/uploads/2025/04/20250408ArreteOLD34_DDTM34-2025-04-15800.pdf (arrêté OLD du 08/04/2025, commune à risque fort) ;
  // https://fr.wikipedia.org/wiki/Saint-Mathieu-de-Tr%C3%A9viers (histoire, Natura 2000, argiles 82,7 %) ;
  // https://www.haut-rhin.gouv.fr/index.php/contenu/telechargement/34441/210238/file/Assist_jur_externe_decembre_2020_externe.pdf (dispense d'architecte : bâtiment agricole de 800 m² au plus, personne physique ou EARL à associé unique)
  "saint-mathieu-de-treviers": {
    title: "Architecte à Saint-Mathieu-de-Tréviers : maison et chai",
    description: "Saint-Mathieu-de-Tréviers : maison, extension ou chai au pied du Pic Saint-Loup, avec le PLU révisé en 2024 et le Terrieu. Parlons de votre projet.",
    accroche: "Au pied du Pic Saint-Loup et de l'Hortus, Saint-Mathieu-de-Tréviers réunit un village haut, une plaine bâtie le long de la RD 17 et des vignes d'appellation : construire ici, c'est composer avec ce paysage.",
    urbanisme: "PLU révisé en mars 2024, modifié en novembre 2024",
    intro: [
      "Saint-Mathieu-de-Tréviers est née de deux noyaux : Saint-Mathieu, accroché aux premiers flancs du Pic Saint-Loup, et Tréviers, formé de mas dans la plaine. En 1884, la mairie descend à Tréviers, dont la population se multiplie le long de la RD 17, avant que des lotissements comme le Plein Soleil, les Avants ou les Hauts de Pourols ne s'étendent autour. La ZAC du Solan prépare aujourd'hui de nouveaux quartiers. Un architecte à Saint-Mathieu-de-Tréviers conçoit ici des maisons neuves, des extensions, des rénovations au village haut et des bâtiments pour les domaines viticoles.",
      "Le PLU révisé, approuvé le 28 mars 2024, entend protéger l'écrin naturel et agricole au pied du Pic tout en densifiant la plaine déjà bâtie. Pour un projet, cela se traduit par des terrains rares, une attention forte au paysage et des risques bien identifiés : incendie sur les flancs boisés, débordements du Terrieu et de ses affluents, sols argileux sur plus des quatre cinquièmes de la commune. Nous lisons ces documents avec vous, puis nous dessinons un projet qui respecte à la fois les vues vers le Pic et les contraintes du terrain.",
    ],
    territoire: {
      titre: "Construire au pied du Pic Saint-Loup",
      texte: [
        "À l'ouest, le massif du Pic Saint-Loup et de l'Hortus domine la commune. Il forme un site classé et un site Natura 2000, avec des pelouses et des garrigues entretenues par un pastoralisme séculaire et des falaises abritant des plantes endémiques. Le Terrieu naît au pied de ces calcaires, d'abord ravin sans vraie plaine, puis s'élargit en aval du Mas Rigaud en recevant les ruisseaux de Jeantou, de Clarensac, de Roumiguières et du Cécélès. Deux barrages, le Jeantou et le Cécélès, se trouvent en amont du bourg.",
        "Le patrimoine est dense pour une commune de cette taille : les vestiges du château de Montferrand, sur la crête du Pic, sont classés monument historique depuis 2024 ; le château du Lébous, enceinte préhistorique, l'est depuis 1965 ; le couvent des dominicaines des Tourelles, construit en 1971 et 1976, a été inscrit en 2024. Au village haut, les maisons de Saint-Mathieu montent vers l'église Saint-Raphaël ; à Tréviers, l'église Saint-Martin-de-Pourols. La vigne occupe une large part de la plaine et produit des vins d'appellation.",
        "Concevoir ici, c'est d'abord regarder le Pic. Les vues depuis la plaine et les entrées du village comptent autant que la parcelle elle-même : volumes bas, toitures de tuiles ou terrasses végétalisées, teintes de pierre et d'enduit choisies pour se fondre dans le paysage. Sur les flancs boisés, la priorité va à la sécurité incendie ; dans la plaine, à la gestion de l'eau. Les pièces de vie gagnent à s'ouvrir au sud, la silhouette du Pic étant cadrée depuis une terrasse ou une baie à l'ouest bien protégée.",
      ],
    },
    projets: [
      {
        titre: "Chai ou caveau pour un domaine",
        texte: "La viticulture reste l'orientation agricole principale de la commune. Un chai, un caveau de dégustation ou un hangar doit trouver sa place dans une plaine où les vues vers le Pic sont précieuses : volumes bas, bardage bois ou pierre, toiture végétalisée ou photovoltaïque intégré. En zone agricole, le dossier doit démontrer le lien du bâtiment avec l'exploitation ; nous organisons aussi le fonctionnement, du quai de réception à la cuverie et à l'accueil du public.",
        expertise: "professionnels",
      },
      {
        titre: "Maison neuve dans la plaine bâtie",
        texte: "Les terrains constructibles se trouvent surtout dans l'enveloppe urbaine de la plaine, que le PLU veut densifier sans l'étendre, et dans la ZAC du Solan, répartie entre Garonne, Champs Noirs et Terrieu Sud et phasée jusqu'en 2033. Nous concevons des maisons compactes, au plan simple, ouvertes au sud, avec un jardin sec et des eaux pluviales infiltrées sur place. Près du Terrieu ou d'un ruisseau, la cote du plancher est vérifiée dès l'esquisse.",
        expertise: "maison",
      },
      {
        titre: "Rénover une maison du village haut",
        texte: "Au village haut, les maisons anciennes de Saint-Mathieu s'étagent sur les premières pentes du Pic, avec souvent des murs de pierre, des niveaux décalés et des accès étroits. Nous relevons l'existant, renforçons si besoin les planchers, isolons avec des matériaux compatibles avec la pierre et ouvrons des vues vers la plaine sans dénaturer les façades. Les abords de la maison, terrasses et murets, sont repris dans le même esprit.",
        expertise: "renovation",
      },
      {
        titre: "Extension aux Avants ou au Plein Soleil",
        texte: "Les lotissements du Plein Soleil, des Avants et des Hauts de Pourols se sont développés autour du village. Au sud, les Avants touchent un massif boisé : le zonage du PPRIF y est à vérifier avant tout. Nous étudions une extension de plain-pied ou un étage partiel, en conservant l'ombre des arbres existants et en reprenant la logique des toitures voisines.",
        expertise: "extension",
      },
    ],
    contraintes: [
      ["PLU révisé en 2024", "Approuvé le 28 mars 2024, le PLU révisé remplace celui de 2007. Son projet d'aménagement poursuit quatre objectifs : protéger l'écrin naturel et agricole au pied du Pic, dessiner une enveloppe urbaine respectueuse du paysage, densifier la plaine bâtie et développer l'économie et le tourisme. Quatre orientations d'aménagement l'accompagnent : le Solan, les Avants, les Placettes et les continuités écologiques ; une modification simplifiée a suivi en novembre 2024."],
      ["Site classé et monuments", "Le massif du Pic Saint-Loup et de la montagne de l'Hortus est un site classé : y changer l'aspect ou l'état du site, même modestement, suppose une autorisation spéciale. La commune compte aussi trois monuments protégés, Montferrand, le Lébous et le couvent des Tourelles, dont les abords relèvent de l'Architecte des Bâtiments de France. Nous vérifions ces périmètres dès la recherche de terrain."],
      ["Terrieu, barrages et PPRI", "En vigueur depuis le 28 février 2013, le PPRI vise surtout le Terrieu : plusieurs lotissements et l'est de la zone d'activités sont dans son lit majeur, en rive droite, et quelques maisons de la rue de la Grenouille sont en zone inondable. La commune est aussi en aval des barrages du Jeantou et du Cécélès, d'où le risque de rupture de barrage recensé. Un relevé de géomètre fixe la cote du plancher."],
      ["Incendie : PPRIF de 2005", "Signé le 21 mars 2005, le PPRIF de la commune s'appuie sur des boisements qui couvrent près des deux tiers de la commune : flanc est du Pic, bois des Clastres, secteurs du Cécélès, de la côte Ubesse, de l'Euzière et des Avants. Un porter à connaissance de l'État de février 2022 classe une partie de Terrieu Sud en aléa exceptionnel, d'où une zone de recul et une piste de défense prévues par l'orientation d'aménagement. L'arrêté départemental sur le débroussaillement, signé en avril 2025, place Saint-Mathieu-de-Tréviers parmi les communes à risque fort."],
    ],
    quartiers: ["Village haut de Saint-Mathieu", "Tréviers", "Pourols", "Les Avants", "Plein Soleil", "Champs Noirs", "Terrieu Sud", "Garonne", "Hameau de la Vieille", "Les Tourelles", "Saint-Aunès"],
    faq: [
      ["Puis-je construire une piscine ou un abri près du site classé du Pic Saint-Loup ?", "Tout dépend de la position exacte de la parcelle. Dans le périmètre du site classé, la moindre modification de l'aspect des lieux, piscine, mur ou abri compris, exige une autorisation spéciale, délivrée selon l'ampleur des travaux par le préfet ou par le ministre. Hors de ce périmètre mais en vue du Pic, le PLU encadre surtout l'insertion paysagère. Nous vérifions la limite du site sur la parcelle, puis nous adaptons le projet : implantation basse, teintes, plantations."],
      ["Les barrages du Jeantou et du Cécélès changent-ils les règles pour ma maison ?", "Le zonage du PPRI ne tient pas compte d'une éventuelle rupture : les deux ouvrages y sont considérés comme transparents, ce qui revient à supposer une crue arrivant sur un barrage déjà plein. Les règles applicables restent donc celles de la zone inondable du Terrieu et de ses affluents. Le risque de rupture relève de l'information des acquéreurs et des plans de secours ; pour un projet riverain, nous privilégions un plancher surélevé et un étage refuge."],
      ["Mon chai doit-il être conçu par un architecte ?", "Pas toujours. Un exploitant personne physique, ou une EARL à associé unique, qui construit pour lui-même un bâtiment agricole dont la surface de plancher et l'emprise au sol ne dépassent pas 800 m² peut s'en dispenser ; une autre société doit y recourir. Au-delà de l'obligation, un architecte à Saint-Mathieu-de-Tréviers organise le fonctionnement, des quais à la cuverie et au caveau, et soigne l'insertion d'un volume souvent important dans une plaine que domine le Pic."],
    ],
    refs: ["industriel-agricole", "logement-exterieur", "plans-recherche"],
    image: ["industriel-agricole", "07"],
  },

  // Sources : https://data.geopf.fr/annexes/gpu/documents/DU_34111/1510ee934933c463aeccb694d0816ff5/34111_procedure_20240610.pdf (PLU approuvé le 27/06/2013, MS1 le 16/12/2021, MS2 le 10/06/2024, plan OLD mis à jour le 16/12/2022) ;
  // https://data.geopf.fr/annexes/gpu/documents/DU_34111/1510ee934933c463aeccb694d0816ff5/34111_reglement_20240610.pdf (zone UA : UA1 centre ancien patrimonial, UA2 inondable ; loi Montagne L122-1) ;
  // https://data.geopf.fr/annexes/gpu/documents/DU_34111/1510ee934933c463aeccb694d0816ff5/34111_rapport_20211216.pdf (Vieux Ganges, colline de Ranz, quartier de la gare) ;
  // https://piece-jointe-carto.developpement-durable.gouv.fr/DEPT034A/ZonagePPRI/GANGES/RapportPres_GANGES.pdf (PPRI approuvé le 19/12/2001, modifié le 19/02/2025 ; crue de 1958, Calquières) ;
  // https://www.mrae.developpement-durable.gouv.fr/IMG/pdf/2023dko53.pdf (objet de la modification du PPRI) ;
  // https://www.georisques.gouv.fr/api/v1/gaspar/pprn/34DDTM20040013 (aucun PPRIF) ; https://www.banatic.interieur.gouv.fr/commune/34111-Ganges (zone de montagne) ;
  // https://saintandredesangonis.fr/wp-content/uploads/2025/04/20250408ArreteOLD34_DDTM34-2025-04-15800.pdf (arrêté OLD du 08/04/2025, commune à risque moyen) ;
  // https://fr.wikipedia.org/wiki/Ganges_(H%C3%A9rault) (soie, bonneterie, traverses, temple, halles, argiles : 95 % des bâtiments)
  "ganges": {
    title: "Architecte à Ganges : réhabilitation et maison de ville",
    description: "Ganges : réhabilitation au Vieux Ganges, extension ou maison neuve sur les coteaux, avec le PLU et le PPRI de l'Hérault. Parlons de votre projet.",
    accroche: "Porte sud des Cévennes, Ganges réunit un centre ancien dense percé de traverses voûtées, des bâtiments nés de la soie et des coteaux résidentiels, au confluent de l'Hérault et du Rieutord.",
    urbanisme: "PLU communal de 2013, modification simplifiée n°2 en 2024",
    intro: [
      "Ganges a été marquée aux XIXe et XXe siècles par le fil de soie, puis par la bonneterie, dont des bas de haute couture sont aujourd'hui conservés au musée cévenol du Vigan. La ville en garde un centre ancien serré, ceinturé de boulevards plantés de tilleuls, des halles métalliques rénovées, un temple heptagonal et l'église Saint-Pierre-et-Saint-Paul. Autour, l'habitat s'est étendu vers le quartier de la gare, la colline de Ranz et les Treilles. Un architecte à Ganges intervient surtout sur la réhabilitation d'immeubles et de maisons de ville, sur des extensions de maisons des coteaux et sur quelques maisons neuves.",
      "Le PLU de 2013, modifié pour la dernière fois en juin 2024, distingue au centre un secteur patrimonial et un secteur inondable, avec des règles précises sur les façades, les toitures et les ouvertures. Le plan de prévention des inondations de l'Hérault, du Rieutord et de l'Aubanel, modifié en février 2025, fixe les zones où l'on peut construire. Ganges est aussi classée en zone de montagne et soumise au débroussaillement en lisière des bois. Nous croisons ces règles avec l'état réel d'un bâti souvent ancien, pour bâtir un projet faisable avant d'engager les études.",
    ],
    territoire: {
      titre: "Construire au confluent de l'Hérault et du Rieutord",
      texte: [
        "Ganges occupe un bassin entouré des premiers contreforts cévenols, comme la Séranne, au confluent de l'Hérault, qui vient de recevoir la Vis, et du Rieutord descendu de Sumène. Le climat y est méditerranéen, avec des étés chauds et un automne marqué par les épisodes cévenols : le 30 septembre 1958, lors de la plus forte crue connue, l'Hérault est monté à Ganges de 2,60 m à 8 m en trois quarts d'heure. Les gorges du Rieutord relèvent d'un site Natura 2000 voué aux oiseaux des falaises.",
        "Le centre ancien est un dédale de ruelles, de passages voûtés appelés traverses, de cours et de jardins en étage, typique des villes cévenoles. Ses immeubles, construits à l'alignement en ordre continu, portent des toits de tuiles canal et parfois des génoises. Le passé industriel a laissé des bâtiments d'usines et d'ateliers, dont certains en bord de Rieutord ont subi la crue de 1958. Plus récemment, l'habitat individuel a gagné les coteaux de Ranz et des Treilles, tandis que le quartier de la gare accueillait l'activité artisanale et industrielle.",
        "Pour un projet, deux échelles coexistent. Dans le centre, on travaille sur des parcelles étroites, avec des murs mitoyens, peu de lumière en rez-de-chaussée et des réseaux anciens : la valeur du projet tient à la distribution, à l'apport de lumière par les cours ou les toitures et à la remise aux normes. Sur les coteaux, la pente, l'exposition et la proximité des bois guident l'implantation. Partout, l'été chaud invite à garder l'inertie des murs épais et à protéger les baies au sud et à l'ouest.",
      ],
    },
    projets: [
      {
        titre: "Réhabiliter un immeuble du Vieux Ganges",
        texte: "Le PLU relève que le centre réunit des immeubles de qualité patrimoniale indéniable mais souvent vétustes. En réhabiliter un, c'est fréquemment créer des logements plus lumineux, conserver menuiseries et volets en bois, reprendre la toiture en tuiles canal et les descentes en zinc, isoler sans piéger l'humidité. Une partie du centre est en secteur de rénovation urbaine, où toute démolition exige un permis : nous le vérifions avant de proposer le curetage d'une annexe.",
        expertise: "renovation",
      },
      {
        titre: "Surélever ou ouvrir une maison de ville",
        texte: "Dans le centre, une surélévation n'est admise que si l'on retrouve les traces d'un état antérieur plus haut, trous de poutres ou solins, ou si les immeubles contigus dépassent de plus d'un niveau. Une terrasse peut en revanche s'ouvrir dans la toiture : les crevés dits « tropéziennes » sont permis sur 10 % de la couverture, les toitures-terrasses sur 20 %. Nous relevons ces indices et dessinons l'agrandissement le plus utile dans ce cadre.",
        expertise: "extension",
      },
      {
        titre: "Maison neuve sur les coteaux",
        texte: "Sur la colline de Ranz ou vers les Treilles, les terrains en pente dominent la ville et la vallée. Le PLU a retiré une partie de la colline de Ranz de l'urbanisation future pour la protéger ; les parcelles restantes demandent une étude attentive des accès, de l'assainissement et du débroussaillement. Nous dessinons une maison qui suit la pente par demi-niveaux, ouvre ses pièces de vie sur la vue et limite les murs de soutènement.",
        expertise: "maison",
      },
      {
        titre: "Atelier ou commerce près de la gare",
        texte: "Le quartier de la gare concentre l'activité artisanale et industrielle, dans une zone intercommunale que le PLU prévoyait d'étendre de façon mesurée. Un atelier, un dépôt ou un commerce y demande une organisation claire des flux, un accès pour les poids lourds, une façade soignée vers la route et une gestion des eaux pluviales. Nous préparons le permis et, si le bâtiment reçoit du public, les notices de sécurité et d'accessibilité.",
        expertise: "professionnels",
      },
    ],
    contraintes: [
      ["Centre ancien : les règles de la zone UA", "Le centre ancien patrimonial forme le secteur UA1 d'une zone UA au règlement précis. Les enduits se choisissent dans le nuancier communal, avec une finition talochée, grattée ou écrasée ; les ouvertures remaniées gardent des proportions verticales, une largeur égale à la moitié de la hauteur ; gouttières et descentes sont en zinc, jamais en PVC. Nous intégrons ces exigences dès le relevé, pour éviter un refus ou des prescriptions tardives."],
      ["Hérault, Rieutord et Aubanel : le PPRI", "Approuvé le 19 décembre 2001 et modifié le 19 février 2025, le PPRI réglemente la crue centennale de l'Hérault, du Rieutord et de l'Aubanel. Il distingue des zones rouges, dont une zone urbaine dense où les espaces résiduels restent constructibles sous conditions, et des zones bleues ; ailleurs, toute imperméabilisation doit être compensée. Les Calquières, au confluent, et les abords de la route du Vigan sont les plus souvent inondés."],
      ["Un relevé qui peut changer la donne", "La modification de 2025 est née d'un plan topographique établi par un géomètre-expert pour des propriétaires riverains de l'Aubanel : croisé avec les plus hautes eaux de la crue centennale, il a réduit localement la zone inondable d'un peu plus de 1 800 m². Sans promettre un tel résultat, un relevé précis reste la base de tout projet en bord de cours d'eau : il fixe la cote du plancher et l'emprise réellement concernée."],
      ["Montagne, incendie et argiles", "Ganges est classée en zone de montagne : la loi Montagne, rappelée par le règlement du PLU, privilégie une urbanisation en continuité de l'existant. Le texte préfectoral d'avril 2025 sur le débroussaillement la range en risque moyen d'incendie, et le PLU annexe la carte des terrains soumis au débroussaillement. Enfin, 95 % des bâtiments reposent sur des sols argileux d'aléa moyen ou fort, ce qui pèse sur toute extension."],
    ],
    quartiers: ["Vieux Ganges", "Les Calquières", "Quartier de la gare", "Colline de Ranz", "Les Treilles", "La Baraque", "Le Puech", "Mas Carrière", "Le Tirondel", "Les Broues"],
    faq: [
      ["Puis-je poser des fenêtres en PVC sur ma maison du centre de Ganges ?", "Le règlement du centre ancien ne les recommande pas : il demande de maintenir et de restaurer, autant que possible, menuiseries, volets et portes en bois, en raison de leurs sections et de leurs profils, et il écarte les matériaux brillants. Des menuiseries en bois aux profils fins, à double vitrage, concilient confort et règlement. Toute modification de façade passe par une déclaration préalable ; nous la préparons avec un relevé et des détails."],
      ["Mon terrain des Calquières est en zone inondable : puis-je y construire ?", "Tout se joue dans le zonage du PPRI. Dans la zone rouge de fort écoulement, comme dans la zone rouge urbaine la plus exposée, aucune construction nouvelle n'est admise ; dans la zone rouge urbaine dense, les espaces résiduels peuvent être bâtis moyennant des mesures de protection ; en zone bleue urbaine, des dispositions constructives réduisent les dommages. Le quartier est inondé dès que l'Hérault atteint 6,50 à 6,80 m au Pont Vieux. Nous partons d'un relevé de géomètre."],
      ["Un architecte à Ganges est-il utile pour une rénovation modeste ?", "Pour un particulier, l'obligation ne joue qu'au-dessus de 150 m² de surface de plancher. Mais dans le centre, une façade, une toiture ou une ouverture mal dessinée peut être refusée, et le bâti ancien cache souvent des désordres de structure. Notre double compétence en architecture et en génie civil aide à diagnostiquer planchers et murs, à prévoir les reprises et à monter un dossier conforme, puis à suivre les artisans dans des rues étroites où le chantier s'organise au millimètre."],
    ],
    refs: ["logement-interieur", "logements-collectifs", "logement-exterieur"],
    image: ["logement-exterieur", "43"],
  },
};

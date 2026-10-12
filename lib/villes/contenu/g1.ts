import type { VilleContenu } from "../types";

export const CONTENU_G1: Record<string, VilleContenu> = {
  // Sources : https://www.montarnaud.com/mon-quotidien/on-vous-renseigne/urbanisme/plu/ ;
  // https://www.montarnaud.com/mon-quotidien/on-vous-renseigne/urbanisme/enquete/ (conclusions du commissaire enquêteur, juin 2026) ;
  // https://www.montarnaud.com/app/uploads/2025/08/reglement_plu_version_consolidee_avec_modif_9_approuve_13_04_2022_executoire_22_07_2022.pdf ;
  // https://www.montarnaud.com/app/uploads/2025/08/montarnaud.v.annexes-cahier_recommandations_architecturales.pdf ;
  // https://www.montarnaud.com/app/uploads/2025/08/reglementppri_montarnaud.pdf ; https://www.montarnaud.com/app/uploads/2026/09/DICRIM_montarnaud.pdf ;
  // https://www.geoportail-urbanisme.gouv.fr (DU_34163) ; https://fr.wikipedia.org/wiki/Montarnaud ;
  // https://fr.wikipedia.org/wiki/Liste_des_monuments_historiques_de_l%27H%C3%A9rault_(M-Z) ;
  // https://montpellier.fr/sites/default/files/2025-04/20250408ArreteOLD34_DDTM34-2025-04-15800.pdf ; https://plateforme.adresse.data.gouv.fr/lookup/34163
  "montarnaud": {
    title: "Architecte à Montarnaud : l'agence du village depuis 1999",
    description: "Architecte à Montarnaud depuis 1999 : maison, extension ou rénovation au village, avec le PLU en révision et le PPRI de la Mosson. Parlons de votre projet.",
    accroche: "Installée rue de l'Ancienne Poste depuis 1999, l'agence connaît le village, son château, la Mosson qui y prend sa source et les règles qui s'appliquent à chacun de ses quartiers.",
    urbanisme: "PLU communal de 2008, révision générale en cours",
    intro: [
      "Montarnaud s'est formé au pied de son château, avant de s'étendre en lotissements puis avec le quartier du Pradas : sa population a été multipliée par plus de cinq depuis les années 1970. Être architecte à Montarnaud, c'est passer d'une maison vigneronne alignée sur la rue à une villa de lotissement à agrandir, d'une maison neuve sur l'une des dernières parcelles constructibles à un bâtiment d'activité dans la zone de la Tour, près de l'A750.",
      "L'agence est installée au 8 rue de l'Ancienne Poste depuis sa création en 1999. Pour un projet dans la commune, cette proximité a des effets concrets : la visite du terrain se fait sans organisation lourde, et nous lisons votre parcelle à travers deux documents, le PLU de 2008 encore applicable et le PLU révisé soumis à enquête publique en 2026. Jean-Yves Millet, architecte DPLG et titulaire d'un DUT Génie civil, vérifie aussi dès l'esquisse ce que le PPRI, le débroussaillement et les argiles imposent à la maison.",
    ],
    territoire: {
      titre: "Un village de garrigue né au pied de son château",
      texte: [
        "La commune s'étend sur plus de 2 700 hectares, de 105 mètres d'altitude dans la vallée de la Mosson à plus de 300 mètres vers Argelliers. La Mosson naît au cœur du village, et plusieurs ruisseaux, dont celui des Mages, parcourent le territoire. Environ 60 % de la commune reste naturelle, du bois de la Rouvière à la garrigue de Tamareau et au Mas Dieu. Pour une maison, cela veut dire des terrains souvent en pente, des vues lointaines, une végétation à tenir à distance et des eaux de ruissellement à canaliser.",
        "Le château, élevé au début du XIe siècle, a attiré les habitations contre ses murs : c'est l'origine du village. Démantelé sur ordre de Richelieu puis rebâti au XVIIe siècle, il est inscrit en totalité aux monuments historiques depuis 2015 ; la chapelle romane Notre-Dame-du-Fort est inscrite depuis 1992. Au XIXe siècle, la vigne a porté l'extension du bourg : des maisons vigneronnes alignées sur les voies, associant logis et remise, couvertes de tuiles canal, avec génoises et fenêtres plus hautes que larges.",
        "Depuis les années 1970, la croissance s'est faite en lotissements, puis dans la ZAC du Pradas, tandis que la zone d'activités de la Tour se développait au sud, près de l'échangeur. Le projet de PLU révisé veut ralentir ce rythme pour préserver « l'esprit villageois » : beaucoup moins de zones à urbaniser, davantage de logements dans l'enveloppe bâtie. Concevoir ici, c'est donc souvent agrandir, densifier ou réhabiliter, en ménageant les vues vers le château et la chapelle.",
      ],
    },
    projets: [
      {
        titre: "Restaurer une maison vigneronne du centre",
        texte: "Dans le centre ancien, le cahier de recommandations architecturales annexé au PLU donne le cadre : faîtage parallèle à la rue, tuile canal, génoise conservée ou restituée, enduit à la chaux plutôt que pierre mise à nu. Les terrasses taillées dans la toiture y sont exclues, mais une loggia peut accompagner une surélévation. Nous partons de ces règles pour ouvrir la maison sur sa cour et isoler sans piéger l'humidité des murs.",
        expertise: "renovation",
      },
      {
        titre: "Agrandir une maison de lotissement",
        texte: "Une grande partie des maisons de la commune a été bâtie en lotissement depuis les années 1970, sur des parcelles où l'emprise et les reculs sont déjà comptés. Une extension du séjour, une suite au rez-de-chaussée ou un étage partiel se décident alors au mètre près. En zone urbaine, une déclaration préalable suffit jusqu'à 40 m² ; au-delà, ou si l'ensemble dépasse 150 m² de surface de plancher, il faut un permis de construire établi par un architecte.",
        expertise: "extension",
      },
      {
        titre: "Une maison neuve au Pradas ou aux Pouses",
        texte: "Les terrains à bâtir se trouvent désormais surtout dans des opérations encadrées, comme la ZAC du Pradas ou le secteur des Pouses, pour lequel le projet de PLU révisé prévoit une cinquantaine de logements. Sur ces lots, le règlement et les prescriptions de l'opération fixent l'implantation et l'aspect. Nous y cherchons la meilleure orientation, une maison compacte conforme à la RE2020 et un jardin qui retient les eaux de pluie.",
        expertise: "maison",
      },
      {
        titre: "Un bâtiment d'activité à la Tour",
        texte: "La zone d'activités de la Tour regroupe plus d'une vingtaine d'entreprises. Son extension figure au projet de PLU révisé, mais elle restera fermée tant que les études hydrauliques et incendie n'auront pas été menées. Pour un atelier, des bureaux ou un local mixte, nous organisons les flux, l'accessibilité et la sécurité incendie, puis nous préparons un dossier de permis clair pour le service instructeur.",
        expertise: "professionnels",
      },
    ],
    contraintes: [
      ["Un PLU en cours de révision", "Le PLU approuvé en 2008, modifié pour la dernière fois en 2022, reste le document opposable. Sa révision générale, arrêtée en septembre 2025, a fait l'objet d'une enquête publique du 6 février au 9 mars 2026, conclue par un avis favorable du commissaire enquêteur. Tant qu'elle n'est pas approuvée, un projet contraire au futur plan peut se voir opposer un sursis à statuer : nous comparons donc les deux zonages avant de dessiner."],
      ["Château, chapelle et futur périmètre des abords", "Le château et la chapelle Notre-Dame-du-Fort imposent aujourd'hui de consulter l'Architecte des Bâtiments de France pour de nombreux travaux du village. Un périmètre délimité des abords, soumis à la même enquête, doit remplacer le rayon de 500 mètres une fois créé par le préfet de région : à l'intérieur, tous les travaux exigeront l'accord de l'ABF ; à l'extérieur, son avis ne sera plus requis. Nous situons votre maison par rapport à ce tracé."],
      ["Le PPRI du haut bassin de la Mosson", "Approuvé en avril 2004, le plan de prévention du risque inondation classe les abords de la Mosson en zones rouges et bleues. En zone inondable, toute demande est accompagnée d'un levé topographique rattaché au nivellement général, et la sous-face du premier plancher aménagé se cale 30 centimètres au-dessus des plus hautes eaux. Le long des ruisseaux non étudiés, le PLU ajoute une bande inconstructible de 10 mètres de part et d'autre des berges."],
      ["Garrigue et débroussaillement", "L'aléa feu de forêt est qualifié de globalement fort, et le document communal sur les risques redoute un feu venu de l'autoroute vers Saint-Paul-et-Valmalle, de la garrigue de Tamareau ou du bois de la Rouvière. Dans les secteurs exposés, l'arrêté préfectoral du 8 avril 2025 impose de débroussailler 50 mètres autour des constructions et la totalité des terrains en zone urbaine, en lotissement ou en ZAC. L'implantation et l'accès des secours en dépendent."],
      ["Argiles et eaux de pluie", "Le règlement signale que le centre et les lotissements sont faiblement à fortement exposés au retrait-gonflement des argiles ; une étude de sol guide alors le dimensionnement des fondations. La commune met aussi à disposition une fiche de calcul des volumes de rétention des eaux pluviales, à intégrer au plan masse dès l'esquisse."],
    ],
    quartiers: ["Village médiéval", "Le Pradas", "Les Pouses", "Le Moulin à Vent", "Le Gourg d'Angelly", "Beauvezet", "La Tour", "Bel Air", "Font Carbonnière", "La Roque et Pétrou", "Mas Dieu", "Les Truquets"],
    faq: [
      ["Le PLU révisé n'est pas encore approuvé : quelles règles s'appliquent à ma demande ?", "C'est le PLU de 2008, avec ses modifications successives, qui sert de base à l'instruction tant que le nouveau plan n'est pas exécutoire. La commune peut toutefois surseoir à statuer sur un projet qui compromettrait le futur document, et certains terrains changent de classement, plusieurs secteurs passant en zone agricole. Nous vérifions donc votre parcelle dans les deux versions avant de déposer."],
      ["Faut-il l'accord de l'Architecte des Bâtiments de France pour refaire ma façade au village ?", "Dans les abords protégés du château ou de la chapelle, oui le plus souvent : ravalement, menuiseries, couverture ou percement passent par une autorisation sur laquelle l'ABF se prononce, et le délai d'instruction s'allonge. Une fois le périmètre délimité des abords créé, la règle sera plus lisible : accord obligatoire à l'intérieur, plus de consultation à l'extérieur. Nous préparons le dossier avec le nuancier de façades de la commune."],
      ["Puis-je construire une piscine sur mon terrain à Montarnaud ?", "En général oui, si la zone l'autorise : une piscine non couverte dépassant 10 m² se déclare en mairie jusqu'à 100 m², et demande un permis au-delà. Trois points propres à la commune sont à regarder. En zone inondable, le PPRI exige un balisage permanent du bassin. L'eau potable est une ressource tendue et le projet de PLU révisé encadre les rejets des piscines. Enfin, dans les secteurs exposés au feu, les abords restent à débroussailler."],
      ["Un projet à Montarnaud demande-t-il forcément un architecte ?", "Non. Le recours à l'architecte s'impose dès que la surface de plancher excède 150 m², existant compris quand on agrandit, et pour la plupart des bâtiments professionnels. En dessous, vous pouvez déposer seul. Mais entre un PLU en transition, le PPRI, les abords du château et les argiles, un premier rendez-vous permet de savoir ce que le terrain autorise avant toute dépense."],
    ],
    refs: ["logement-exterieur", "tertiaire", "logement-interieur"],
    image: ["logement-exterieur", "01"],
  },

  // Sources : https://fr.wikipedia.org/wiki/Saint-Georges-d%27Orques ; https://www.schneider-avocats.com/article/approbation-du-plui-climat-de-montpellier-mediterranee-metropole/ ;
  // https://www.geoportail-urbanisme.gouv.fr (DU_243400017) ; https://georisques.gouv.fr/api/v1/gaspar/pprn?codeInsee=34259 ;
  // https://registre-dematerialise.fr/5904/download/component/79298/rapportpres-saint-georges-d-orques (PPRIF, A.P. 2008.01.198 du 30 janvier 2008) ;
  // https://www.mrae.developpement-durable.gouv.fr/IMG/pdf/kpark_mrae_2019dko314.pdf (domaine de Montpeyre) ;
  // https://montpellier.fr/sites/default/files/2025-04/20250408ArreteOLD34_DDTM34-2025-04-15800.pdf ;
  // https://languedoc-wines.com/en/appellations/pdo-languedoc-saint-georges-dorques/ ; https://plateforme.adresse.data.gouv.fr/lookup/34259
  "saint-georges-d-orques": {
    title: "Architecte à Saint-Georges-d'Orques : maison et extension",
    description: "Architecte à Saint-Georges-d'Orques : extension, maison ou chai en village viticole, PPRIF et sols argileux étudiés dès l'esquisse. Parlons de votre projet.",
    accroche: "Village de vignerons resserré autour de son église, Saint-Georges-d'Orques offre peu de terrains libres : la plupart des projets agrandissent, surélèvent ou transforment, en tenant compte du plan de prévention des incendies.",
    urbanisme: "PLUi-Climat de Montpellier Méditerranée Métropole (2025)",
    intro: [
      "Le village comptait environ un millier d'habitants au début des années 1960 ; il en compte aujourd'hui plus de 5 600, après une forte croissance entre les années 1970 et 1990. Les vignes de l'appellation Languedoc Saint-Georges-d'Orques, partagée avec quatre communes voisines, entourent toujours le bourg. Travailler comme architecte à Saint-Georges-d'Orques, c'est donc surtout agrandir des maisons de lotissement, redonner de l'espace à des maisons de village étroites, construire sur les rares terrains disponibles ou aider un domaine viticole à moderniser son chai.",
      "En 2019 déjà, l'autorité environnementale relevait l'absence de dents creuses dans le tissu bâti de la commune : chaque mètre carré compte, et chaque projet touche un voisin. L'agence aborde ces dossiers avec une double lecture, celle du PLUi-Climat, qui fixe désormais les règles de zone, et celle des risques, avec le plan de prévention des incendies de forêt de 2008 et des sols argileux presque partout. Pour les vignerons, notre pratique des bâtiments agricoles et des caveaux permet de traiter un chai comme un outil de travail autant que comme une façade dans le paysage.",
    ],
    territoire: {
      titre: "Vignes, garrigue et village resserré",
      texte: [
        "Le territoire, d'un peu plus de 900 hectares, s'élève de 45 à 183 mètres d'altitude ; depuis les hauteurs, la vue porte jusqu'au mont Saint-Clair et au pic Saint-Loup. Les vignes occupent les pentes douces, la garrigue gagne les collines, et les ruisseaux de Lassedéron et de la Fosse traversent la commune. Ce paysage est tenu par des murets, des pierriers et des bosquets, que l'opération du domaine de Montpeyre a dû préserver : ils comptent pour la faune comme pour l'image du village vu depuis ses entrées.",
        "Rattaché à l'évêché de Maguelone dès le XIe siècle, le village était clos de murs ; en 1622, les troupes protestantes du duc de Rohan l'assiègent et le prennent. Le noyau ancien en garde un tracé serré, autour de la Grand Rue, de la rue du Porche et de la rue du Château. Saint Georges terrassant le dragon orne le fronton de l'église comme la façade de la cave coopérative, et le vin local comptait Thomas Jefferson parmi ses amateurs. Dans des rues aussi étroites, une maison mitoyenne manque souvent de lumière au rez-de-chaussée.",
        "La croissance s'est faite autour, en lotissements successifs, puis par des opérations plus denses proches du centre, comme le domaine de Montpeyre, prévu pour 98 logements sur 3,4 hectares. La zone d'activités du Mijoulan accueille des entreprises. Pour un projet de maison, cela signifie des parcelles déjà bâties à optimiser, des vis-à-vis à gérer et une insertion à soigner dans un village très visible depuis les routes qui y mènent.",
      ],
    },
    projets: [
      {
        titre: "Surélever une maison de village",
        texte: "Dans le noyau ancien, l'emprise ne peut guère grandir : c'est souvent en hauteur que l'on gagne une chambre, une terrasse ou simplement la lumière. Avant tout dessin, nous vérifions la hauteur admise par le PLUi-Climat, l'état des murs porteurs et des planchers, puis l'effet de la surélévation sur les voisins. Le chantier, en mitoyenneté et dans des rues étroites, se prépare aussi : accès, stockage, protection des toitures voisines.",
        expertise: "extension",
      },
      {
        titre: "Transformer une maison des années 1980",
        texte: "Les maisons construites pendant la grande période de croissance ont souvent un séjour cloisonné, une cuisine fermée et un garage peu utilisé. Une extension de plain-pied vers le jardin, la conversion du garage en pièce de vie ou l'ajout d'une suite parentale changent leur usage. Nous profitons de ces travaux pour reprendre l'isolation, les menuiseries et les protections solaires, souvent d'origine.",
        expertise: "extension",
      },
      {
        titre: "Une maison en lisière de garrigue",
        texte: "Les terrains qui jouxtent la garrigue sont les plus exposés au feu. Le PPRIF y sépare les secteurs de danger de ceux de précaution forte, aux règles différentes : ce classement se vérifie avant même la promesse d'achat. Si la construction est admise, nous travaillons l'implantation, l'accès des secours, des matériaux de façade peu combustibles et un jardin pensé avec l'obligation de débroussailler.",
        expertise: "maison",
      },
      {
        titre: "Moderniser un chai ou créer un caveau",
        texte: "Les domaines de l'appellation ont besoin de bâtiments fonctionnels : cuverie, stockage, quai, caveau de vente ouvert au public. Nous organisons les flux du raisin à la bouteille, le confort thermique des locaux et l'accessibilité du caveau, puis nous dessinons une façade qui tient sa place au milieu des vignes. En zone agricole, seules les constructions nécessaires à l'exploitation sont admises, ce que le dossier doit démontrer.",
        expertise: "professionnels",
      },
    ],
    contraintes: [
      ["Le PLUi-Climat a remplacé le PLU communal", "Depuis la fin du mois d'août 2025, les règles qui s'appliquent ici sont celles du PLUi-Climat, adopté en juillet par les élus métropolitains ; la demande de suspension a été rejetée en référé le 7 octobre 2025. Une parcelle a pu changer de zone, de hauteur autorisée ou d'emprise par rapport à l'ancien PLU : avant toute esquisse, nous croisons son zonage avec le règlement écrit et les OAP, dans la dernière version publiée."],
      ["Le plan de prévention des incendies de forêt", "Le PPRIF communal, entériné par arrêté préfectoral le 30 janvier 2008, délimite un secteur de danger, où construire est en principe exclu, et un secteur de précaution forte, où les projets sont admis sous conditions. Le classement du terrain conditionne tout le reste : constructibilité, desserte, défense contre l'incendie. Nous le consultons dès la promesse de vente, et non après le dépôt."],
      ["Débroussailler autour de la maison", "L'arrêté préfectoral du 8 avril 2025 range la commune parmi celles à risque fort. Dans ses secteurs exposés, les obligations légales de débroussaillement portent sur 50 mètres autour des constructions, avec des houppiers espacés de 3 mètres et un chemin d'accès privé dégagé sur 4 mètres de large et de haut. À la vente, le propriétaire atteste sur l'honneur que ces obligations sont respectées. Le plan de plantation se conçoit avec ces règles."],
      ["Argiles et anciennes carrières", "Environ 97 % du territoire se trouve en zone d'exposition moyenne ou forte aux argiles gonflantes : à la vente d'un terrain constructible, une étude géotechnique préalable est donc obligatoire. Géorisques recense aussi un risque d'affaissement lié à d'anciennes carrières souterraines. Ces études fixent le type de fondations, la distance à respecter avec les arbres et la façon d'écarter les eaux pluviales des murs."],
    ],
    quartiers: ["Village ancien", "La Cadelle", "Les Terres Rouges", "Domaine de Montpeyre", "Mas Neuf", "Mas des Jangles", "Mas de la Regnague", "Mas de Bouisson", "Parc de Bel Air", "ZA du Mijoulan"],
    faq: [
      ["Mon terrain est en zone de précaution du PPRIF : puis-je agrandir ma maison ?", "Cela dépend de la zone et de la nature du projet. Le règlement du PPRIF précise ce qui est admis dans chaque zone, et une extension peut y être soumise à des prescriptions sur la desserte, les matériaux ou la défense incendie ; en zone de danger, les possibilités sont beaucoup plus restreintes. Nous lisons le règlement applicable à votre parcelle, puis nous dimensionnons l'extension pour qu'elle respecte à la fois le PPRIF et le PLUi-Climat."],
      ["Peut-on transformer une ancienne remise viticole du village en logement ?", "C'est possible si le règlement de la zone l'autorise. Sans travaux touchant la structure porteuse ou la façade, ce changement de destination relève d'une déclaration préalable ; s'il s'accompagne de modifications des murs porteurs ou des façades, un permis de construire est nécessaire. Nous vérifions aussi le stationnement exigé, la lumière disponible et l'état de la charpente, qui révèlent souvent le budget réel de l'opération."],
      ["Un domaine viticole doit-il passer par un architecte pour construire son chai ?", "Pas toujours. Un exploitant qui construit pour lui-même, en nom propre ou en EARL à associé unique, en est dispensé tant que la surface de plancher et l'emprise au sol du bâtiment agricole restent sous 800 m². Au-delà, ou pour une autre forme de société, le permis doit être établi par un architecte. Même sous le seuil, un chai mal dimensionné coûte cher à l'usage : nous pouvons intervenir pour la conception seule."],
    ],
    refs: ["industriel-agricole", "logement-exterieur", "plans-recherche"],
    image: ["industriel-agricole", "05"],
  },

  // Sources : https://fr.wikipedia.org/wiki/Grabels ; https://www.mrae.developpement-durable.gouv.fr/IMG/pdf/2023apo84.pdf (ZAC Gimel) ;
  // https://www.mrae.developpement-durable.gouv.fr/IMG/pdf/decision_mrae_2022dko84.pdf (Rieumassel, PAPI 2 Lez-Mosson) ;
  // https://participer.montpellier.fr/sites/default/files/2022-06/Juvignac_Mosson_R%C3%A9ponses%20avis%20MRAe_vf.pdf (crue d'octobre 2014) ;
  // https://georisques.gouv.fr/api/v1/gaspar/pprn?codeInsee=34116 ; https://registre-dematerialise.fr/5904/download/component/79258/rapportpres-grabels (PPRIF, A.P. 2008.01.190) ;
  // https://ted.europa.eu/fr/notice/6849-2026/pdf (révision des PPRIF) ; https://www.schneider-avocats.com/article/approbation-du-plui-climat-de-montpellier-mediterranee-metropole/ ;
  // https://montpellier.fr/sites/default/files/2025-04/20250408ArreteOLD34_DDTM34-2025-04-15800.pdf ; https://plateforme.adresse.data.gouv.fr/lookup/34116
  "grabels": {
    title: "Architecte à Grabels : construire entre Mosson et coteaux",
    description: "Architecte à Grabels : maison sur les coteaux, extension à la Valsière ou rénovation au village, crues et PPRIF étudiés en amont. Parlons de votre projet.",
    accroche: "Du vieux village au bord de la Mosson aux pentes boisées de la Valsière et de la Goule de Laval, chaque terrain de Grabels pose d'abord une question : l'eau, le feu ou la pente ?",
    urbanisme: "PLUi-Climat de Montpellier Méditerranée Métropole (2025)",
    intro: [
      "Aux portes de Montpellier, Grabels réunit un vieux village serré autour de son église, des quartiers bâtis sur la plaine vers l'est et des coteaux boisés lotis à partir des années 1990. Au sud-est, la ZAC de Gimel doit y ajouter quelque 850 logements autour d'un ancien mas. Un architecte à Grabels intervient donc sur des projets très différents : maison sur un terrain en pente, extension d'une villa de la Valsière, réhabilitation d'une maison ancienne près de la rivière, petit programme de logements.",
      "Ici, deux plans de prévention se superposent souvent à la règle d'urbanisme : celui qui encadre les débordements de la Mosson et de ses ruisseaux, et le PPRIF de 2008 pour le feu de forêt. S'y ajoutent des pentes qui demandent des murs de soutènement, des fondations adaptées et des accès praticables par les secours. La double compétence de l'agence, architecture et génie civil, sert précisément ces terrains : nous chiffrons tôt les terrassements et les soutènements, souvent décisifs pour le budget d'une maison.",
    ],
    territoire: {
      titre: "Entre la Mosson et les collines boisées",
      texte: [
        "La commune s'étage entre 50 et 167 mètres d'altitude. Sur la rive gauche de la Mosson, au nord, la garrigue reste peu bâtie ; sur la rive droite, une plaine s'étend entre des collines boisées, dont la Goule de Laval et le bois de la Valsière. Lors des épisodes cévenols, la rivière et ses ruisseaux, la Fosse, le Pézouillet ou le Rieumassel, peuvent monter très vite. La source de l'Avy et ses cascades, comme les mas anciens de la Valsière ou de Gimel, ponctuent encore ce paysage.",
        "Le nom de Grabels apparaît en 1120. Pris par les protestants en 1621 et 1622, le village perd son église, reconstruite seulement en 1666 : c'est l'église Saint-Julien-et-Sainte-Basilisse et ses deux clochers. Le centre garde des remparts, un porche, la tour de l'horloge, une fontaine carrée et un lavoir. Dans ce tissu ancien, rénover une maison passe le plus souvent par la reprise des murs, une isolation compatible avec la pierre et une distribution repensée autour de l'escalier.",
        "Depuis le milieu du XXe siècle, l'urbanisation a gagné l'est, sur la plaine qui mène à Montpellier, puis, à partir des années 1990, les coteaux de la Valsière et de la Goule de Laval. La Valsière s'est d'ailleurs développée en continuité de Montpellier, à l'écart du village. Au sud-est, le futur quartier de Gimel doit conjuguer logements, boisements conservés et anciens domaines, tandis que Bel-Air marque l'entrée ouest de la commune, sur la route de Clermont-l'Hérault.",
      ],
    },
    projets: [
      {
        titre: "Une maison sur les coteaux de la Goule de Laval",
        texte: "Sur une pente boisée, la maison se pose en demi-niveaux pour limiter les déblais, s'ouvre vers la vue et garde les arbres à bonne distance. Le PPRIF et l'obligation de débroussailler conditionnent l'implantation, la largeur de l'accès et le choix des matériaux de façade. Nous calculons tôt les murs de soutènement et les terrassements, qui pèsent lourd dans le budget d'une maison sur ces terrains.",
        expertise: "maison",
      },
      {
        titre: "Agrandir une villa de la Valsière",
        texte: "Les maisons construites sur les coteaux depuis les années 1990 arrivent à l'âge des transformations : chambre supplémentaire, bureau, séjour ouvert sur une terrasse. Sur un terrain incliné, l'extension peut se glisser sous la maison, prolonger un niveau ou former un volume en contrebas. Nous vérifions le règlement de zone du PLUi-Climat, le classement au PPRIF et la place réellement disponible avant de proposer plusieurs scénarios.",
        expertise: "extension",
      },
      {
        titre: "Réhabiliter une maison près de la Mosson",
        texte: "Au bord de la rivière, une maison ancienne peut se trouver en zone inondable : le plan de prévention dit alors si l'on peut créer des pièces de vie au rez-de-chaussée ou s'il faut les monter à l'étage. Nous établissons ce diagnostic à partir d'un levé du terrain, puis nous traitons les murs anciens, l'isolation, la lumière et la circulation verticale, en gardant ce qui fait le caractère de la maison.",
        expertise: "renovation",
      },
      {
        titre: "Un petit immeuble de logements",
        texte: "Avec le quartier de Gimel, Grabels voit se développer des programmes de logements collectifs. Pour un investisseur ou un propriétaire foncier, nous étudions la capacité d'une parcelle, l'insertion dans la rue, les stationnements et les prolongements extérieurs de chaque logement. Nous nous appuyons pour cela sur l'expérience de programmes de logements conduits comme directeur technique d'un promoteur.",
        expertise: "professionnels",
      },
    ],
    contraintes: [
      ["Crues de la Mosson et du Rieumassel", "La crue d'octobre 2014 a dépassé la crue de référence du PPRI sur le bassin de la Mosson, et la commune a été reconnue en état de catastrophe naturelle pour inondation à de nombreuses reprises. Un plan de prévention couvre les abords de la rivière et de ses ruisseaux, et des aménagements de protection du Rieumassel figurent au programme d'actions Lez-Mosson. Nous situons d'abord la parcelle sur le zonage réglementaire, puis nous calons les planchers en conséquence."],
      ["Le PPRIF de Grabels", "Approuvé le 30 janvier 2008, le plan de prévention des risques d'incendie de forêt distingue une zone de danger, très restrictive, et des zones de précaution où la construction est admise sous conditions. L'État a engagé sa révision, en même temps que celle de plusieurs communes voisines. Avant un achat ou un projet en lisière de bois, nous vérifions le classement en vigueur et l'avancement de cette procédure."],
      ["Débroussaillement et accès des secours", "Les obligations de débroussaillement s'appliquent sur 50 mètres autour des constructions situées jusqu'à 200 mètres des massifs exposés, et sur la totalité des terrains en zone urbaine de ces secteurs. Les houppiers des arbres conservés doivent rester à au moins 3 mètres de la maison, et un chemin privé d'accès doit offrir un gabarit libre de 4 mètres. Ces règles se dessinent dès le plan masse, pas après le permis."],
      ["Des sols argileux sur presque toute la commune", "Selon les données publiques, 99,8 % du territoire est classé en aléa moyen ou fort au retrait-gonflement des argiles. Une étude géotechnique accompagne donc la vente d'un terrain à bâtir ; elle guide la profondeur des fondations, les drainages et l'éloignement des arbres. Sur un coteau, l'argile s'ajoute à la pente : nous traitons les deux ensemble avec le bureau d'études de sol."],
    ],
    quartiers: ["Village", "La Valsière", "Goule de Laval", "Gimel", "Bel-Air", "Font d'Aurelle", "Valmaillargues", "Mas de Matour", "Franquet", "Plateau de Piquet"],
    faq: [
      ["Ma maison a été touchée par la crue de 2014 : puis-je l'agrandir ou la surélever ?", "Le règlement de la zone où elle se trouve répond à cette question : il précise si une extension est admise, dans quelle limite, et à quelle cote doit se situer le plancher. Une surélévation qui met les pièces de vie hors d'eau est souvent la piste la plus utile, à condition qu'elle soit permise par le plan de prévention et le PLUi-Climat, et que la structure existante puisse la porter. Nous vérifions ces trois points avant de dessiner."],
      ["Combien de temps faut-il pour obtenir un permis à Grabels ?", "Pour une maison individuelle, le délai d'instruction de droit commun est de deux mois à compter d'un dossier complet ; une déclaration préalable demande un mois. Ces délais peuvent être prolongés si un service doit être consulté. Il faut ajouter le temps des études, quelques mois en général, et pour un terrain en pente ou en zone de risque, celui des relevés et de l'étude de sol. Un calendrier prévisionnel vous est remis dès l'avant-projet."],
      ["Faut-il un géomètre avant de dessiner une maison sur un terrain en pente ?", "Oui, c'est la première pièce à réunir. Un levé topographique donne les altitudes, les limites, les arbres et les accès ; sans lui, impossible de placer correctement les niveaux, de calculer les terrassements ou de produire les coupes exigées par le permis. En zone inondable, il permet aussi de comparer le terrain à la cote de référence. Nous vous indiquons ce que le levé doit contenir pour servir directement au projet."],
    ],
    refs: ["logement-exterieur", "plans-recherche", "logements-collectifs"],
    image: ["logement-exterieur", "41"],
  },

  // Sources : https://fr.wikipedia.org/wiki/Juvignac ; https://www.mrae.developpement-durable.gouv.fr/IMG/pdf/2023dko41.pdf (PPRIF du 30 janvier 2008, Mas Neuf) ;
  // https://participer.montpellier.fr/sites/default/files/2022-06/Juvignac_Mosson_R%C3%A9ponses%20avis%20MRAe_vf.pdf (quartier de la Plaine, digue) ;
  // https://georisques.gouv.fr/api/v1/gaspar/pprn?codeInsee=34123 ; https://fr.wikipedia.org/wiki/Liste_des_monuments_historiques_de_l%27H%C3%A9rault_(A-L) ;
  // https://www.vinci.com/en/newsroom/news/eurovia-wins-les-constellations-zac ; https://ted.europa.eu/fr/notice/6849-2026/pdf ;
  // https://www.schneider-avocats.com/article/approbation-du-plui-climat-de-montpellier-mediterranee-metropole/ ; https://plateforme.adresse.data.gouv.fr/lookup/34123
  "juvignac": {
    title: "Architecte à Juvignac : extension, maison et rénovation",
    description: "Architecte à Juvignac : extension, surélévation ou maison neuve, de la Plaine à Fontcaude, avec crues, PPRIF et PLUi-Climat intégrés. Parlons de votre projet.",
    accroche: "Ville de première couronne desservie par le tramway, Juvignac s'est fortement urbanisée : on y agrandit, on y surélève, et l'on compose avec la Mosson, la garrigue et le château de Caunelles.",
    urbanisme: "PLUi-Climat de Montpellier Méditerranée Métropole (2025)",
    intro: [
      "Juvignac s'est surtout construite depuis les années 1980, avec un pic entre 2008 et 2014 : le quartier du Martinet à Fontcaude, le lotissement West Cottage à Courpouyran, puis Les Constellations, où la ligne 3 du tramway a son terminus depuis 2012. Un architecte à Juvignac travaille donc d'abord sur des maisons existantes à faire évoluer, des parcelles étroites à optimiser et quelques terrains encore à bâtir, mais aussi sur des petits immeubles de logements proches des transports.",
      "Dans une commune aussi bâtie, la qualité d'une extension tient à peu de chose : un recul respecté, un vis-à-vis évité, une toiture bien raccordée. L'agence aborde chaque projet avec le règlement du PLUi-Climat, puis avec les risques propres au terrain : débordement de la Mosson dans la plaine, incendie de forêt au contact des garrigues, argiles presque partout. Notre expérience des programmes collectifs, acquise auprès d'un promoteur, sert aussi aux propriétaires qui envisagent quelques logements sur leur parcelle.",
    ],
    territoire: {
      titre: "De la plaine de la Mosson aux garrigues du nord",
      texte: [
        "La commune couvre un peu plus de 1 000 hectares, bordés au nord par la garrigue et au sud par les vignes. La Mosson et le ruisseau de la Fosse la traversent, et la vallée de la Mosson, de Grabels à Saint-Jean-de-Védas, est inventoriée comme zone naturelle d'intérêt écologique. Le pont roman, bâti vers 1150 sur le chemin de Saint-Jacques, a perdu plusieurs arches lors de la crue de 1933 et une autre pendant l'orage du 6 octobre 2014 : la rivière rappelle régulièrement sa force.",
        "Chef-lieu d'un fisc carolingien dès 799, seigneurie à partir de 898, Juvignac passe en 1710 à Joseph Bonnier de la Mosson, qui y fait bâtir un château. Le château de Caunelles, inscrit aux monuments historiques en 2006, et le château de Fourques témoignent de ces grandes propriétés. À Fontcaude, la source de la Valadière alimentait déjà des thermes à l'époque romaine, exploités de nouveau au XIXe siècle ; la commune a acquis le domaine en 1983.",
        "Le visage actuel date des quarante dernières années : le centre, la Plaine, les Garrigues, les Constellations, Fontcaude et son golf de 80 hectares, Courpouyran, Bel Air et Naussargues forment des quartiers résidentiels distincts, chacun marqué par son époque de construction. Dans ces lotissements, la marge pour s'étendre au sol est souvent réduite une fois les reculs et l'emprise comptés. La surélévation, l'aménagement des combles ou la transformation du garage deviennent alors des pistes sérieuses.",
      ],
    },
    projets: [
      {
        titre: "Surélever une maison de la Plaine",
        texte: "Dans le quartier de la Plaine, exposé aux débordements de la Mosson et du ruisseau du même nom, une surélévation peut créer des chambres à l'abri de l'eau tout en agrandissant la maison. Elle n'est envisageable que si le règlement du plan de prévention et celui du PLUi-Climat l'admettent, et si la structure existante peut porter un étage : nous vérifions ces conditions avant d'aller plus loin.",
        expertise: "extension",
      },
      {
        titre: "Agrandir une villa à Fontcaude",
        texte: "Autour du golf et sur les hauteurs de Fontcaude, les maisons récentes s'agrandissent par un séjour prolongé vers la terrasse, une suite parentale ou un pool house. Nous dessinons ces extensions dans la continuité de l'existant, en anticipant le raccord des toitures, des enduits et des menuiseries, pour que l'ajout ne se lise pas comme une pièce rapportée et que le jardin garde ses usages.",
        expertise: "extension",
      },
      {
        titre: "Rénover une maison des premiers lotissements",
        texte: "Les maisons des années 1980 et 1990 arrivent au moment des gros travaux : toiture, menuiseries, chauffage, isolation. Plutôt que de remplacer poste par poste, nous proposons un projet d'ensemble qui redistribue les pièces, ouvre la cuisine sur le séjour, améliore le confort d'été et hiérarchise les dépenses. Les travaux sont alors phasés selon votre budget, avec des choix techniques cohérents d'une étape à l'autre.",
        expertise: "renovation",
      },
      {
        titre: "Quelques logements près du tramway",
        texte: "Près des stations de la ligne 3, un propriétaire peut envisager de remplacer une maison par un petit collectif ou de diviser une grande parcelle. Nous étudions la constructibilité réelle selon le PLUi-Climat, le stationnement exigé, les vues sur les voisins et l'équilibre économique de l'opération, avant de dessiner un projet présentable aux élus et au service instructeur.",
        expertise: "professionnels",
      },
    ],
    contraintes: [
      ["Le quartier de la Plaine et la Mosson", "La crue d'octobre 2014, plus forte que la crue de référence du plan de prévention sur le bassin de la Mosson, a montré la vulnérabilité du quartier de la Plaine, au contact de la RN109. La Métropole a retenu la construction d'une digue dimensionnée sur cet événement, complétée par un bassin pluvial, et le caniveau du ruisseau de la Plaine a été élargi en 2016. Pour un permis, c'est le zonage réglementaire en vigueur qui fait référence."],
      ["Le PPRIF de Juvignac", "Le plan communal de prévention des incendies de forêt, en vigueur depuis l'arrêté du 30 janvier 2008, classe en zone de précaution forte des espaces où les constructions isolées et l'habitat diffus sont interdits, et en zone de danger les secteurs les plus exposés. Il a été modifié pour le lieu-dit Mas Neuf, et l'État en a engagé la révision. Nous vérifions le classement de la parcelle et les prescriptions de desserte avant toute esquisse."],
      ["Les abords du château de Caunelles", "Le château de Caunelles, inscrit en 2006, est entouré d'un périmètre de protection : à moins de 500 mètres, une intervention extérieure que l'on peut voir depuis le château, ou en même temps que lui, passe par l'accord de l'ABF, ce qui allonge l'instruction d'un mois. Nous situons votre maison sur les servitudes annexées au PLUi-Climat avant de choisir matériaux et teintes."],
      ["Argiles et extensions", "Selon les données publiques, 99,5 % de la commune est exposée de façon moyenne ou forte au phénomène de retrait-gonflement. Pour une extension, le risque principal tient au comportement différent de deux fondations voisines : nous prévoyons un joint de rupture entre l'existant et le neuf, des fondations adaptées à l'étude de sol et une gestion des eaux pluviales qui évite d'humidifier les pieds de murs."],
    ],
    quartiers: ["Centre", "La Plaine", "Les Garrigues", "Les Constellations", "Fontcaude", "Le Martinet", "Courpouyran", "Bel Air", "Naussargues", "Caunelles", "Le Labournas", "Valat de la Fosse"],
    faq: [
      ["J'habite la Plaine : la future digue rendra-t-elle mon terrain constructible ?", "Pas automatiquement. Tant que le plan de prévention n'a pas été révisé pour tenir compte des ouvrages, c'est le zonage approuvé qui s'applique aux autorisations, même une fois les travaux achevés. Une digue réduit l'aléa mais ne supprime ni le risque de surverse ni celui de rupture. Pour un projet dans ce quartier, nous partons donc des règles actuelles et nous concevons la maison pour qu'elle reste habitable et réparable après une crue."],
      ["Vaut-il mieux surélever ou s'étendre sur le jardin ?", "Tout dépend de la parcelle et de la maison. S'étendre au sol consomme du jardin et se heurte vite aux reculs et à l'emprise maximale ; surélever préserve l'extérieur mais suppose une structure capable de porter l'étage, un escalier à loger et une hauteur admise par le PLUi-Climat. Nous comparons les deux hypothèses sur plans et en coût, pour que vous choisissiez en connaissance de cause."],
      ["Le règlement de mon lotissement s'applique-t-il encore à mon extension ?", "Les règles d'urbanisme contenues dans les documents d'un lotissement deviennent caduques dix ans après l'autorisation de lotir lorsque la commune est couverte par un plan local d'urbanisme. C'est alors le PLUi-Climat qui fixe les règles. Le cahier des charges, lui, conserve en principe une valeur contractuelle entre colotis : une clause sur les clôtures ou les hauteurs peut encore être invoquée par un voisin. Nous lisons les deux documents."],
    ],
    refs: ["logements-collectifs", "logement-exterieur", "logement-interieur"],
    image: ["logements-collectifs", "07"],
  },

  // Sources : https://fr.wikipedia.org/wiki/Pignan ; https://fr.wikipedia.org/wiki/Liste_des_monuments_historiques_de_l%27H%C3%A9rault_(M-Z) ;
  // https://registre-dematerialise.fr/5904/download/component/79144/rapportpres-modification-pignan (PPRI du 12 février 2009, modifié le 9 juin 2015) ;
  // https://registre-dematerialise.fr/5904/download/component/79284/rapportpres-pignan (PPRIF, A.P. 2008.01.197 du 30 janvier 2008) ;
  // https://georisques.gouv.fr/api/v1/gaspar/pprn?codeInsee=34202 ; https://www.herault.gouv.fr/index.php/contenu/telechargement/8886/49560/file/rapport_commissaire_enqueteur_zac_pignan.pdf ;
  // https://montpellier.fr/sites/default/files/2025-04/20250408ArreteOLD34_DDTM34-2025-04-15800.pdf ; https://plateforme.adresse.data.gouv.fr/lookup/34202
  "pignan": {
    title: "Architecte à Pignan : maison, extension, centre ancien",
    description: "Architecte à Pignan : rénovation au centre médiéval, extension ou maison neuve à Saint-Estève, avec ABF, PPRI et PPRIF anticipés. Parlons de votre projet.",
    accroche: "Tours médiévales, château de Turenne et abbaye du Vignogoul d'un côté, ruisseaux et garrigue de l'autre : à Pignan, patrimoine protégé et risques naturels encadrent la plupart des projets.",
    urbanisme: "PLUi-Climat de Montpellier Méditerranée Métropole (2025)",
    intro: [
      "Pignan s'étage entre une plaine viticole au sud, vers 30 à 60 mètres d'altitude, et des collines de garrigue au nord, jusqu'au Feraillès. Entre les deux, le bourg médiéval s'est entouré au XXe siècle de maisons individuelles montant vers les collines, puis du quartier Saint-Estève, une ZAC d'environ 650 logements le long de la D5. Comme architecte à Pignan, l'agence y rencontre des demandes variées : restaurer une maison du centre, agrandir une villa des pentes, construire à Saint-Estève ou aménager un local d'activité.",
      "La commune compte trois monuments historiques, dont deux au cœur du bourg ; elle est couverte par un plan de prévention des inondations et par un autre pour les incendies de forêt, et ses sols sont largement argileux. Ces contraintes se traitent mieux en amont qu'en cours d'instruction. L'agence les intègre dès l'esquisse, prépare les échanges avec l'Architecte des Bâtiments de France quand ils sont nécessaires et, grâce à sa compétence en génie civil, évalue l'état des murs anciens avant d'en promettre la transformation.",
    ],
    territoire: {
      titre: "Un bourg médiéval entre vignes et garrigue",
      texte: [
        "Au nord, la garrigue occupe des collines de 95 à 150 mètres, dominées par le Feraillès à 217 mètres ; au sud, la plaine reste dominée par la vigne, et la rougette de Pignan rappelle une tradition oléicole. Les ruisseaux du Coulazou, du Lassedéron et du Vertoublanc traversent le territoire, et les gorges du Coulazou comme la plaine du mas de Paillas sont inventoriées pour leur intérêt écologique. Trois sites Natura 2000 concernent la commune.",
        "Le centre garde de hautes tours en appareil montpelliérain, d'anciennes portes de rempart, le Fort-Viel, la tour de Bosquet et la tour Carrée, donjon du XIIe siècle d'une trentaine de mètres relié à l'ancienne église par trois arcs-boutants. Cet ensemble médiéval est inscrit aux monuments historiques depuis 1999. Le château de Turenne, édifice du XVIIe siècle remanié par d'Aviler et occupé par la mairie depuis 1895, l'est depuis 2012 ; l'abbaye du Vignogoul, hors du bourg, est classée depuis 1862.",
        "Au XXe siècle, un tissu dense de maisons individuelles a rempli l'espace entre le village et les collines, et des villas se sont installées sur les hauteurs vers Murviel-lès-Montpellier. Depuis 2017, la ZAC Saint-Estève, d'une trentaine d'hectares, ajoute logements, commerces et équipements, et a nettement modifié la silhouette du bourg vue depuis la D5. Pour un projet, il faut donc distinguer trois situations : le centre protégé, les pentes au contact de la garrigue et les quartiers récents aux règles d'opération précises.",
      ],
    },
    projets: [
      {
        titre: "Restaurer une maison du centre médiéval",
        texte: "Dans les rues proches du Fort-Viel et de la tour Carrée, les maisons anciennes ont souvent des murs épais, des planchers en bois fatigués et peu d'ouvertures. Nous établissons un diagnostic de structure, puis un projet qui améliore la lumière et le confort sans altérer les façades. Menuiseries, enduits et couvertures se choisissent avec l'Architecte des Bâtiments de France, dont l'accord est requis pour les travaux visibles avec les monuments.",
        expertise: "renovation",
      },
      {
        titre: "Agrandir une maison des pentes nord",
        texte: "Entre le village et les collines, beaucoup de maisons du XXe siècle se prêtent à une extension : pièce de vie prolongée, étage partiel, garage transformé. Sur ces terrains en limite de garrigue, nous vérifions d'abord le classement au PPRIF et la surface à débroussailler, puis nous travaillons la pente pour que l'extension reste de plain-pied avec le jardin et ne crée pas de vis-à-vis.",
        expertise: "extension",
      },
      {
        titre: "Construire une maison à Saint-Estève",
        texte: "Sur un lot de ZAC, le cahier des charges de l'opération s'ajoute au PLUi-Climat : il peut fixer l'implantation, les clôtures ou l'aspect. À l'intérieur de ce cadre, beaucoup reste à décider : l'orientation des pièces, les protections solaires, la relation au jardin, la compacité qui facilite la conformité à la RE2020. Nous dessinons la maison à partir du lot réel et de vos usages, pas d'un catalogue.",
        expertise: "maison",
      },
      {
        titre: "Un local au parc d'activité de la Condamine",
        texte: "Pour un atelier avec bureaux, un local commercial ou un cabinet recevant du public au parc d'activité de la Condamine, nous organisons les circulations, les accès de livraison et l'accessibilité, et nous préparons les notices de sécurité et d'accessibilité jointes au permis. Le bâtiment doit fonctionner au quotidien, mais aussi présenter l'entreprise depuis la route.",
        expertise: "professionnels",
      },
    ],
    contraintes: [
      ["Trois monuments historiques", "L'abbaye du Vignogoul est classée depuis 1862, l'ensemble médiéval du centre inscrit depuis 1999 et le château de Turenne depuis 2012. Leurs abords, dans un rayon de 500 mètres, englobent le cœur du bourg : les travaux extérieurs visibles avec un monument y passent par l'ABF, dont l'accord rallonge l'instruction. Nous situons la parcelle sur les servitudes du PLUi-Climat et préparons un dossier précis sur les matériaux."],
      ["Un PPRI approuvé en 2009", "Approuvé le 12 février 2009, puis modifié en 2015 pour corriger deux erreurs matérielles, le PPRI communal distingue des zones rouges d'interdiction, des zones bleues où l'on construit sous prescriptions, et une zone de précaution élargie. Avant un achat ou une extension près d'un ruisseau, nous vérifions la zone et la cote de plancher exigée."],
      ["Le PPRIF et le débroussaillement", "Approuvé le 30 janvier 2008, le PPRIF délimite une zone de danger et une zone de précaution forte au contact de la garrigue. L'arrêté préfectoral de 2025 sur le débroussaillement place Pignan dans la catégorie du risque fort : débroussaillement sur 50 mètres autour des constructions des secteurs exposés et mise à distance des arbres entre eux. Nous en tenons compte pour implanter la maison et dessiner le jardin."],
      ["Argiles : presque tout le bâti concerné", "Environ 89 % de la surface communale, et 97 % des bâtiments recensés en 2019, se situent dans les zones d'exposition moyenne ou forte au retrait-gonflement. Une étude géotechnique est obligatoire à la vente d'un terrain constructible dans ces zones. Pour une extension accolée à une maison ancienne, nous soignons la jonction des fondations et l'évacuation des eaux de toiture loin des murs."],
    ],
    quartiers: ["Centre médiéval", "Saint-Estève", "La Peyssine", "Le Pignarel", "Les Gardies", "Le Vignogoul", "La Condamine", "Quartier du Roy", "Puech-Redon", "Les Blaquières", "Mas de Daulet", "Le Coulazou"],
    faq: [
      ["Puis-je poser des panneaux solaires sur une maison du centre de Pignan ?", "Dans les abords des monuments, la demande est soumise à l'Architecte des Bâtiments de France, qui examine l'impact visuel depuis l'espace public et depuis les monuments. Des panneaux bien intégrés, posés sur un pan peu visible ou sur une annexe, ont plus de chances d'être acceptés qu'une toiture principale côté rue. Nous préparons la demande avec des vues d'insertion, pour en discuter avant le dépôt."],
      ["Mon terrain est en zone bleue du PPRI : quelles règles pour une extension ?", "En zone bleue, une extension est admise sous prescriptions, qui portent généralement sur la hauteur du plancher par rapport à la cote de référence, des matériaux insensibles à l'eau en partie basse, des équipements électriques placés hors d'eau et des clôtures qui laissent passer l'écoulement. Le règlement du PPRI de Pignan fixe les valeurs exactes. Un levé topographique donne l'altitude du terrain et permet de caler le projet au bon niveau."],
      ["Peut-on diviser son terrain pour construire une seconde maison ?", "C'est possible si le règlement de zone du PLUi-Climat le permet et si chaque lot reste desservi et raccordé. Une division en vue de bâtir constitue un lotissement : déclaration préalable en général, permis d'aménager si l'on crée une voie ou des espaces communs, ou si le terrain se trouve dans les abords d'un monument historique. Il faut aussi vérifier le PPRI et le PPRIF. Nous testons la faisabilité sur plan avant que vous ne mandatiez un géomètre."],
    ],
    refs: ["logement-exterieur", "logement-interieur", "tertiaire"],
    image: ["logement-exterieur", "21"],
  },

  // Sources : https://fr.wikipedia.org/wiki/Lav%C3%A9rune ; https://fr.wikipedia.org/wiki/Liste_des_monuments_historiques_de_l%27H%C3%A9rault_(A-L) ;
  // https://en.wikipedia.org/wiki/Ch%C3%A2teau_de_l%27Engarran (classement du 31 mai 1926) ;
  // https://registre-dematerialise.fr/5904/download/component/79061/reglement-lav-sjdv-vlm (PPRI de la basse vallée de la Mosson, approuvé le 18 février 2002) ;
  // https://georisques.gouv.fr/api/v1/gaspar/pprn?codeInsee=34134 ; https://www.schneider-avocats.com/article/approbation-du-plui-climat-de-montpellier-mediterranee-metropole/ ;
  // https://montpellier.fr/sites/default/files/2025-04/20250408ArreteOLD34_DDTM34-2025-04-15800.pdf (DDTM34-2025-04-15800, annexe 2 : Lavérune en risque fort) ; https://plateforme.adresse.data.gouv.fr/lookup/34134
  "laverune": {
    title: "Architecte à Lavérune : rénover, agrandir, construire",
    description: "Architecte à Lavérune : rénovation au vieux village, extension ou maison neuve près de la Mosson, abords des châteaux protégés compris. Parlons de votre projet.",
    accroche: "Entre la Mosson, la plaine viticole et deux châteaux classés, Lavérune demande des projets attentifs au patrimoine et à l'eau, du vieux village aux lotissements et aux anciens mas.",
    urbanisme: "PLUi-Climat de Montpellier Méditerranée Métropole (2025)",
    intro: [
      "Lavérune est un village de plaine, sur la rive droite de la Mosson, dont le noyau existe depuis l'Antiquité, au croisement de la voie Domitienne et d'un chemin qui menait à l'oppidum d'Altimurium, à Murviel. Autour du vieux village et du château des évêques de Montpellier se sont ajoutés des lotissements, l'usine de torréfaction ouverte en 1970 et de grands domaines comme l'Engarran ou Biar. Architecte à Lavérune, l'agence y intervient sur la transformation de maisons anciennes, l'extension de maisons récentes et quelques constructions neuves.",
      "Deux monuments classés, un plan de prévention des inondations et des sols argileux sur la quasi-totalité du territoire : ces contraintes pèsent sur presque chaque dossier. L'agence les anticipe pour limiter les demandes de pièces complémentaires et les risques de refus, et elle apporte au bâti ancien du village un regard technique, celui du génie civil, pour juger de ce que les murs, les planchers et la charpente peuvent supporter. Le premier rendez-vous sert à poser ces questions sur votre maison ou votre terrain.",
    ],
    territoire: {
      titre: "Un village de plaine entre Mosson et domaines",
      texte: [
        "Le territoire, d'environ 700 hectares, est plat près de la Mosson et plus vallonné vers l'ouest. Le ruisseau de Lassedéron le traverse, et la vallée de la Mosson y est inventoriée pour son intérêt écologique. La plaine viticole domine encore : en 2018, près de 80 % des sols étaient agricoles et environ 16 % urbanisés, même si le nombre d'exploitations est passé de 58 en 1988 à 18 en 2020. Pour un projet, cela signifie un sol alluvial ou argileux à étudier et des vues ouvertes sur la plaine à respecter.",
        "Le vieux village garde son église du XIIIe siècle, complétée aux XIVe et XVIIIe siècles, et une salle capitulaire du XIVe. Le château des évêques de Montpellier, du XVIe siècle, abrite le musée Hofer-Bury ; inscrit en 1998, il est classé monument historique depuis 2000. Au nord, sur la route de Juvignac, le château de l'Engarran, folie montpelliéraine entourée de vignes, est classé avec son parc et sa fontaine depuis 1926. Le domaine de Biar, autre folie dont les origines remontent au XIIe siècle, complète cet ensemble de grandes demeures.",
        "Les rues du centre, rue Médiévale, rue de la Vieille Porte ou plan du Four Banal, dessinent un tissu serré de maisons mitoyennes. Autour, des lotissements, comme celui de Camp de Fabre, ont étendu le village vers la plaine, et l'avenue de l'Ancienne Gare rappelle une ancienne desserte ferroviaire. Concevoir ici, c'est tenir ensemble la protection des abords des deux châteaux, le risque d'inondation et le confort d'été, dans des maisons de village où la lumière manque souvent.",
      ],
    },
    projets: [
      {
        titre: "Transformer une maison du vieux village",
        texte: "Une maison de village se rénove souvent étage par étage : reprise des planchers, escalier mieux placé, cour ou verrière pour faire entrer la lumière. Les façades restent sobres, avec un enduit à la chaux et des menuiseries adaptées, d'autant que le centre se trouve dans les abords du château des évêques. Nous relevons l'existant avec précision avant de proposer quoi que ce soit.",
        expertise: "renovation",
      },
      {
        titre: "Agrandir une maison de lotissement",
        texte: "Une maison de lotissement s'agrandit le plus simplement de plain-pied, vers le jardin. Il faut alors vérifier l'emprise disponible, les reculs imposés par le PLUi-Climat et, selon la position de la parcelle, le classement au plan de prévention des inondations, qui peut fixer la hauteur du plancher. Nous proposons des volumes simples, bien raccordés à la maison, et des ouvertures protégées du soleil d'été.",
        expertise: "extension",
      },
      {
        titre: "Une maison neuve au contact de la plaine",
        texte: "Sur un terrain ouvert vers la plaine agricole, la maison neuve se pense avec le paysage, le soleil et le vent, mais aussi avec le sol. Le PPRI dit si la parcelle est concernée, l'étude géotechnique fixe les fondations sur ces argiles, et la RE2020 oriente l'enveloppe. Nous cherchons une maison compacte, ombrée au sud et à l'ouest, avec un jardin qui garde les eaux de pluie.",
        expertise: "maison",
      },
      {
        titre: "Un cabinet ou des bureaux au village",
        texte: "Installer un cabinet médical, un bureau ou un petit commerce dans un bâtiment ancien du centre suppose de concilier accessibilité, sécurité incendie et contraintes patrimoniales. Nous étudions l'entrée de plain-pied, les largeurs de passage, les sanitaires adaptés et l'évacuation, puis nous présentons les dérogations éventuelles lorsque la conservation du bâti ou les abords protégés l'imposent.",
        expertise: "professionnels",
      },
    ],
    contraintes: [
      ["Deux châteaux classés et leurs abords", "Le château des évêques, classé en 2000, et le château de l'Engarran, classé en 1926 avec son parc, entraînent chacun des abords protégés de 500 mètres. Dans ces périmètres, les travaux extérieurs visibles avec l'un des monuments demandent l'accord de l'ABF ; comptez alors un mois d'instruction supplémentaire. Nous préparons des dossiers précis, photographies et détails à l'appui, pour faciliter cet échange."],
      ["Le PPRI de la basse vallée de la Mosson", "Approuvé le 18 février 2002 pour Lavérune, Saint-Jean-de-Védas et Villeneuve-lès-Maguelone, ce plan de prévention réglemente les secteurs inondables de la commune ; une erreur de numérisation de son zonage a été corrigée en 2017. Lavérune a été reconnue en catastrophe naturelle pour inondation à plusieurs reprises, dernièrement en 2014 et 2015. Nous consultons le zonage pour toute parcelle proche d'un cours d'eau."],
      ["Argiles sur la quasi-totalité du territoire", "Plus de 99 % de la commune présente un aléa argileux moyen ou fort. L'étude géotechnique préalable est donc obligatoire à la vente d'un terrain à bâtir, et une étude de conception est recommandée pour une extension. Les sécheresses font travailler ces sols : nous adaptons la profondeur des fondations, éloignons les arbres et évitons les infiltrations au pied des murs."],
      ["Cavités et anciennes carrières", "Géorisques signale à Lavérune un risque d'affaissement lié à d'anciennes carrières souterraines, et des cavités figurent à l'inventaire national. Avant un achat ou une construction, nous consultons cette cartographie et, si la parcelle est concernée, nous demandons une reconnaissance de sol spécifique avant de fixer l'implantation de la maison."],
      ["Débroussaillement : une carte à consulter", "L'arrêté préfectoral du 8 avril 2025 classe Lavérune parmi les communes à risque fort d'incendie de forêt. Les obligations de débroussaillement ne visent toutefois que les terrains situés dans les massifs boisés ou de garrigue de plus de 4 hectares, ou à moins de 200 mètres de ceux-ci. La carte informative publiée sur Géoportail dit si votre parcelle est concernée ; dans ce cas, 50 mètres autour de la maison restent à entretenir."],
    ],
    quartiers: ["Vieux village", "L'Engarran", "Mas de Biar", "Camp de Fabre", "Saint-Peyre", "Mas de Boniol", "Pioch du Baille", "Mon Plaisir", "Mas de Lépôt", "Mas de Massabiau", "Moulin de Tourtourel"],
    faq: [
      ["Ma maison est près du château des évêques : puis-je changer mes menuiseries ?", "Oui, avec une déclaration préalable et l'accord de l'Architecte des Bâtiments de France si la maison se trouve dans les abords du monument et en covisibilité avec lui. Le matériau, la couleur, le dessin des petits bois et le mode de pose comptent beaucoup. Nous constituons un dossier avec photographies, détails et références, pour limiter les allers-retours pendant l'instruction."],
      ["Comment savoir si ma parcelle de Lavérune est inondable ?", "C'est le zonage réglementaire du plan de prévention, annexé au PLUi-Climat, qui fait foi ; Géorisques en donne une lecture rapide, et l'état des risques remis lors d'une vente le mentionne. Si la parcelle est en limite de zone, un géomètre relève l'altitude du terrain, que l'on compare ensuite au niveau des plus hautes eaux retenu par le plan. Ce contrôle précède toujours l'esquisse."],
      ["Peut-on gagner de la lumière dans une maison de village sans jardin ?", "Souvent, oui. Une trémie qui traverse les niveaux, un puits de lumière, une verrière sur une cour intérieure ou une pièce aveugle transformée en patio changent l'usage d'une maison étroite. Ces interventions touchent la structure, planchers, charpente ou murs porteurs : nous les vérifions avec notre compétence en génie civil, puis nous les soumettons à l'ABF quand la maison est dans les abords protégés."],
    ],
    refs: ["logement-interieur", "logement-exterieur", "industriel-agricole"],
    image: ["logement-exterieur", "25"],
  },
};

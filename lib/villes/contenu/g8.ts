import type { VilleContenu } from "../types";

export const CONTENU_G8: Record<string, VilleContenu> = {
  // Sources : https://fr.wikipedia.org/wiki/Villeveyrac (géographie, argiles 82,5 %, Natura 2000, patrimoine) ;
  // https://www.geoportail-urbanisme.gouv.fr (PLU de Villeveyrac, rapport de présentation et annexes : aléa minier, argiles, servitudes) ;
  // https://www.mrae.developpement-durable.gouv.fr/IMG/pdf/kpark_mrae_2018dko120.pdf (PLU approuvé en 2011, zonage d'assainissement) ;
  // https://www.georisques.gouv.fr/api/v1/gaspar/pprn/34DDTM20120131 (PPRI de Villeveyrac, approuvé le 25/01/2012) ;
  // https://montpellier.fr/sites/default/files/2025-04/20250408ArreteOLD34_DDTM34-2025-04-15800.pdf (arrêté OLD du 08/04/2025, commune à risque fort) ;
  // https://fr.wikipedia.org/wiki/Liste_des_monuments_historiques_de_l'Hérault_(M-Z) (abbaye de Valmagne, classée en 1997) ;
  // https://en.tourisme-sete.com/villeveyrac.html (mines de bauxite) ; Base Adresse Nationale (lieux-dits)
  "villeveyrac": {
    title: "Architecte à Villeveyrac : maison, extension, rénovation",
    description: "Architecte à Villeveyrac : maison neuve, extension ou maison vigneronne à rénover, entre PPRI, argiles et anciennes mines de bauxite. Parlons de votre projet.",
    accroche: "Entre les garrigues de la Moure et la plaine viticole, Villeveyrac mêle maisons vigneronnes, lotissements, domaines et un sous-sol marqué par la bauxite : chaque terrain y a son histoire.",
    urbanisme: "PLU communal",
    intro: [
      "Villeveyrac s'étend sur 37 km² de vignes, de garrigues et de terres agricoles, à une trentaine de kilomètres de Montpellier et une vingtaine de Sète. Le village ancien, aux maisons vigneronnes serrées, s'est entouré de quartiers pavillonnaires puis de lotissements, tandis qu'une douzaine de mas et de domaines, dont l'abbaye de Valmagne, ponctuent la campagne. Architecte à Villeveyrac, l'agence y dessine des maisons neuves, agrandit des villas, rénove des maisons vigneronnes et conçoit des bâtiments viticoles : chai, caveau de vente, hangar de stockage.",
      "Ici, l'étude de faisabilité commence souvent sous les pieds. Le sol argileux, classé en aléa moyen ou fort sur plus de 80 % de la commune, et les anciens travaux miniers de bauxite, cartographiés en annexe du PLU, orientent le choix des fondations ; le PPRI approuvé en 2012 fixe les règles aux abords des ruisseaux. Nous croisons ces documents avant l'esquisse, puis nous dessinons un projet qui en tient compte sans s'y réduire : plan compact, façades protégées du soleil d'été, matériaux simples à entretenir.",
    ],
    territoire: {
      titre: "Construire entre la Moure, la vigne et la bauxite",
      texte: [
        "Le territoire s'étage de 12 à 255 mètres d'altitude. D'un côté, les garrigues de la montagne de la Moure et du causse d'Aumelas, inscrites au réseau Natura 2000 ; de l'autre, une plaine cultivée elle aussi protégée, pour ses oiseaux, sous le nom de « plaine de Villeveyrac-Montagnac ». Le village s'est installé dans un creux du relief : discret depuis les routes, il se découvre depuis ses points hauts, où l'unité des toitures anciennes contraste avec la diversité des enduits et des faîtages des quartiers plus récents.",
        "Le centre ancien, d'environ seize hectares, est fait de maisons vigneronnes mitoyennes, hautes et profondes. Sur le versant est, plus pentu, les rues suivent les courbes de niveau selon un plan orthogonal ; à l'ouest, elles rayonnent depuis la place du Marché. Au XXe siècle, l'extraction de la bauxite a fait vivre une partie du village et laissé galeries et concessions ; le hameau de la Gare s'est formé autour d'anciens bâtiments de Pechiney. La cave coopérative, en entrée de village sur la route de Montagnac, rappelle le poids de la viticulture.",
        "Pour une maison neuve dans les quartiers récents, l'enjeu est de sortir du modèle de la villa posée au milieu de sa parcelle : s'implanter sur une limite, regrouper garage et annexes, garder un jardin d'un seul tenant. Dans le centre ancien, le rapport du PLU relève des logements souvent sombres et privés d'espace extérieur ; un patio creusé dans l'îlot, une terrasse ou une verrière transforment alors une maison vigneronne. En lisière de garrigue, l'implantation se pense aussi en fonction du débroussaillement.",
      ],
    },
    projets: [
      {
        titre: "Maison vigneronne du centre ancien",
        texte: "Une façade étroite sur rue, une ancienne cave au rez-de-chaussée, deux étages peu éclairés. La réhabilitation transforme la cave en pièce de vie ouverte sur une cour, recrée un escalier mieux placé, isole les murs anciens avec des matériaux qui laissent migrer la vapeur d'eau et reprend la charpente. Le diagnostic des maçonneries et des planchers précède tout dessin.",
        expertise: "renovation",
      },
      {
        titre: "Maison neuve sur sol argileux",
        texte: "Sur une parcelle de lotissement, la maison se conçoit avec l'étude de sol : fondations descendues sous la zone sensible, chaînages, joints entre volumes de hauteurs différentes, eaux pluviales éloignées des façades. Un plan compact ouvert au sud, des débords de toiture et une pergola plantée limitent la chaleur d'été sans priver la maison du soleil d'hiver.",
        expertise: "maison",
      },
      {
        titre: "Agrandir une villa des premières extensions",
        texte: "Le long de la route de Mèze ou vers le chemin des Pouzets, bien des maisons de plain-pied attendent une suite parentale, un séjour ouvert sur le jardin ou un garage transformé. Nous vérifions d'abord la zone du PPRI et le règlement du PLU, puis la surface totale obtenue, qui décide entre déclaration préalable et permis de construire.",
        expertise: "extension",
      },
      {
        titre: "Chai ou caveau pour un domaine",
        texte: "Les domaines dispersés dans la plaine ont besoin de cuveries, de stockage et de lieux de dégustation. Le projet règle d'abord le fonctionnement : réception de la vendange, circulation des engins, maîtrise des températures. Vient ensuite l'insertion dans un paysage ouvert et protégé ; en zone agricole, nous vérifions que la construction est bien liée à l'exploitation.",
        expertise: "professionnels",
      },
    ],
    contraintes: [
      ["Le PLU et le centre ancien", "Villeveyrac dispose d'un PLU communal, approuvé en 2011 et mis à jour depuis. Aucun monument historique ne se trouve dans le village : les travaux du centre ancien ne relèvent pas de l'Architecte des Bâtiments de France, mais le règlement y encadre l'aspect des façades, des ouvertures et des couvertures. Seule l'abbaye de Valmagne, classée, crée un périmètre de protection, à l'écart du bourg."],
      ["Le PPRI de Villeveyrac", "Approuvé le 25 janvier 2012, ce plan de prévention distingue une zone rouge, où construire est pour l'essentiel interdit, et des zones de précaution soumises à prescriptions aux abords des ruisseaux. Nous situons la parcelle sur la carte réglementaire avant l'esquisse : le niveau du premier plancher et les possibilités d'extension en découlent directement."],
      ["L'héritage minier", "Le sous-sol garde la trace de l'exploitation de la bauxite. Les cartes d'aléa minier annexées au PLU (affaissement, tassement, glissement) couvrent plusieurs secteurs ; le hameau de la Gare, par exemple, reste limité dans son extension à cause d'un risque d'affaissement. Pour un terrain proche d'anciens travaux, nous consultons ces cartes et faisons préciser les fondations par l'étude de sol."],
      ["Des argiles presque partout", "Plus de 80 % de la superficie communale est classée en aléa moyen ou fort de retrait-gonflement. Quiconque vend ici un terrain constructible doit donc fournir une étude de sol géotechnique ; pour une extension, nous la conseillons aussi, car un volume neuf fondé autrement que la maison existante risque de fissurer à leur jonction."],
      ["Garrigue de la Moure et débroussaillement", "Villeveyrac figure parmi les communes à risque d'incendie fort de l'arrêté préfectoral du 8 avril 2025. Dans la bande de 200 mètres qui borde les massifs boisés, chaque propriétaire débroussaille sur 50 mètres autour de sa maison, et sur la totalité de son terrain s'il est situé en zone urbaine. La place de la piscine, des haies et des arbres se décide en conséquence."],
    ],
    quartiers: ["Centre ancien", "Le Thôt Nord", "Les Pouzets", "La Mayolle", "Hameau de la Gare", "Mas d'Hondrat", "Jolimont", "Abbaye de Valmagne", "Domaine de Fondouce", "Zone d'activités de Malpasset", "Les Usclades"],
    faq: [
      ["Mon terrain se trouve-t-il au-dessus d'anciennes galeries de bauxite ?", "Le PLU comporte en annexe des cartes d'aléa minier établies en 2009 : affaissement, tassement, glissement, émanations de gaz. Nous y reportons la parcelle dès le premier rendez-vous. Si elle est concernée, l'étude géotechnique doit en tenir compte et le règlement peut limiter les constructions. Dans les autres cas, les argiles restent le sujet principal pour dimensionner les fondations."],
      ["Faut-il l'accord de l'Architecte des Bâtiments de France pour rénover une maison du vieux village ?", "En principe non : le seul monument historique de la commune, l'abbaye de Valmagne, est éloigné du bourg, et le centre ancien n'est pas un site patrimonial remarquable. Le règlement du PLU s'applique en revanche, avec ses règles sur les toitures, les ouvertures et les enduits. Une nouvelle fenêtre ou une terrasse demandent au minimum une déclaration préalable, que nous préparons avec des plans et des vues de la façade."],
      ["Peut-on construire un caveau de vente sur une exploitation viticole ?", "Oui, dans la zone agricole, à condition que le bâtiment soit nécessaire à l'exploitation et que le règlement de la zone l'admette. Un caveau qui reçoit du public relève en outre des règles d'accessibilité et de sécurité incendie des établissements recevant du public. Nous vérifions ces points, ainsi que la présence du site Natura 2000 de la plaine, avant de dessiner les volumes."],
      ["L'architecte est-il obligatoire pour agrandir ma maison à Villeveyrac ?", "Il le devient dès que, avec son extension, la maison dépasse 150 m² de surface de plancher : c'est alors un architecte qui établit et signe le projet architectural du permis. En dessous, vous pouvez déposer seul une déclaration préalable ou un permis. Dans une commune où se croisent argiles, PPRI et aléa minier, faire appel à nous dès l'esquisse évite surtout de découvrir une contrainte trop tard."],
    ],
    refs: ["logement-exterieur", "industriel-agricole", "logement-interieur"],
    image: ["logement-exterieur", "24"],
  },

  // Sources : https://fr.wikipedia.org/wiki/Montagnac_(Hérault) (géographie, cours d'eau, argiles 98,9 %, Natura 2000, cave coopérative) ;
  // https://www.geoportail-urbanisme.gouv.fr (PLU de Montagnac : rapport de présentation, règlement de la zone UA, version 2021) ;
  // https://www.georisques.gouv.fr/api/v1/gaspar/pprn/34DDTM20040025 (PPRI moyenne vallée de l'Hérault secteur sud, approuvé le 18/02/2005) ;
  // https://fr.wikipedia.org/wiki/Liste_des_monuments_historiques_de_l'Hérault_(M-Z) (église Saint-André, hôtel des comtes de Brignac, château de Lavagnac…) ;
  // https://montpellier.fr/sites/default/files/2025-04/20250408ArreteOLD34_DDTM34-2025-04-15800.pdf (commune à risque fort) ;
  // https://apicarto.ign.fr/api/gpu (servitudes AC1 du centre) ; Base Adresse Nationale (lieux-dits)
  "montagnac": {
    title: "Architecte à Montagnac : maison vigneronne et extension",
    description: "Architecte à Montagnac : maison vigneronne à rénover, extension ou maison neuve, avec les abords de l'église Saint-André et le PPRI. Parlons de votre projet.",
    accroche: "Un bourg longtemps contenu dans ses remparts, des faubourgs vignerons du XIXe siècle, une plaine ouverte jusqu'à l'Hérault : à Montagnac, bien des projets commencent derrière un portail de cave.",
    urbanisme: "PLU communal",
    intro: [
      "Montagnac couvre près de 40 km² de vignes et de garrigues à l'est de l'Hérault, que la commune touche par son vieux pont. Le bourg, resté enserré dans ses remparts jusqu'à la Révolution, s'est agrandi au XIXe siècle de faubourgs de maisons vigneronnes, puis de lotissements et de petites ZAC à partir des années 1970. Architecte à Montagnac, l'agence prend en charge des rénovations de maisons et de caves vigneronnes, des extensions de pavillons, des maisons neuves et les bâtiments des domaines viticoles.",
      "Le centre ancien et ses faubourgs sont compris dans les périmètres de protection de l'église Saint-André et de l'hôtel des comtes de Brignac, deux monuments classés : l'Architecte des Bâtiments de France y donne son avis sur les façades, les toitures et les ouvertures. Nous préparons ces dossiers avec soin, relevés, détails de menuiseries et teintes d'enduit à l'appui, en intégrant le délai d'instruction majoré. Sur les parcelles plus récentes, d'autres sujets dominent : argiles, zones inondables, débroussaillement.",
    ],
    territoire: {
      titre: "Bâtir entre remparts, faubourgs et plaine de l'Hérault",
      texte: [
        "Le territoire, de 8 à 172 mètres d'altitude, est drainé par l'Hérault, la Boyne et le ruisseau de Nègue-Vaques. Une partie de la plaine viticole appartient à la zone de protection spéciale Natura 2000 « plaine de Villeveyrac-Montagnac », désignée notamment pour l'outarde canepetière. Les domaines se répartissent dans la campagne : Lavagnac et son château en partie classé, Bessilles et son pôle de tourisme familial, La Grangette, Saint-Martin-de-la-Garrigue et sa chapelle romane.",
        "Jusqu'à la Révolution, la ville vit dans ses murs. La prospérité viticole du XIXe siècle fait naître, au-delà de l'Esplanade, des faubourgs de maisons vigneronnes : grand portail, cave ou remise au rez-de-chaussée, logis à l'étage. En 1971, trois lotissements communaux ouvrent l'urbanisation pavillonnaire, dont celui de Roquelieu ; suivent la Cité de la Gare, puis trois ZAC au nord du bourg, le Jeu de Mail, Roquelieu et la Tour du Mulet. Des lotissements plus récents ont gagné Boutounet et le Camp de la Crous.",
        "Acheter une maison vigneronne pose presque toujours la même question : comment habiter un volume conçu pour le vin ? La cave offre une hauteur et une surface rares, le portail une large baie sur rue, mais la lumière manque au cœur de la maison. Les réponses passent par une cour retrouvée, une trémie, une terrasse découpée dans la toiture lorsque le règlement l'admet. Hors du bourg, sur des sols presque tous argileux, la maison neuve se dessine avec son étude géotechnique.",
      ],
    },
    projets: [
      {
        titre: "Habiter une cave vigneronne",
        texte: "Transformer le rez-de-chaussée d'une cave en séjour et cuisine, en gardant le grand portail sur rue derrière lequel se glisse une menuiserie vitrée. Le règlement du centre ancien demande de conserver ou de refaire à l'identique ces portails, d'employer des menuiseries en bois et des enduits à la chaux : nous dessinons le projet dans ce cadre, en lien avec l'Architecte des Bâtiments de France.",
        expertise: "renovation",
      },
      {
        titre: "Extension d'une maison de ZAC",
        texte: "Les maisons du Jeu de Mail ou de la Tour du Mulet, bâties dans les années 1980 et 1990, se prêtent à une aile en rez-de-jardin ou à une surélévation partielle. Selon leur adresse, elles peuvent entrer dans un périmètre de 500 mètres autour d'un monument : nous le vérifions, comme la hauteur et les reculs autorisés, avant de proposer un volume.",
        expertise: "extension",
      },
      {
        titre: "Maison neuve en lotissement",
        texte: "Sur un lot de Boutounet ou d'une opération récente, la maison compose avec un sol argileux et l'été méditerranéen. Plain-pied ou étage partiel, patio ombragé, débords de toit, jardin sec : le projet se cale sur l'étude de sol et le règlement de la zone, puis fait l'objet d'un permis de construire complet, notice et insertion paysagère comprises.",
        expertise: "maison",
      },
      {
        titre: "Bâtiment pour un domaine viticole",
        texte: "Cuverie, chai à barriques, hangar à matériel ou caveau de dégustation : les domaines font évoluer leurs bâtiments. En zone agricole, le projet doit être lié à l'exploitation ; dans la zone Natura 2000, ses effets sur les oiseaux de plaine sont examinés. Nous organisons d'abord les flux de travail, puis l'insertion des volumes dans un paysage très ouvert.",
        expertise: "professionnels",
      },
    ],
    contraintes: [
      ["Abords des monuments historiques", "L'église Saint-André, classée en 1958, et l'hôtel des comtes de Brignac, classé en 1988, génèrent chacun un périmètre de 500 mètres qui couvre le centre ancien, les faubourgs et une partie des quartiers proches. Les travaux qui modifient l'aspect extérieur y sont examinés par l'Architecte des Bâtiments de France, qui doit donner son accord lorsque le projet est visible en même temps que le monument. Nous le sollicitons, si besoin, dès l'avant-projet pour éviter les allers-retours."],
      ["Le PPRI de la moyenne vallée de l'Hérault", "Approuvé le 18 février 2005, ce plan délimite sur la commune des zones rouges, inconstructibles pour l'essentiel, et des zones bleues où l'on construit sous conditions, notamment de niveau de plancher. La position de la parcelle se vérifie dès le premier échange : elle conditionne l'extension, les annexes, la piscine et la forme des clôtures."],
      ["Un sol argileux quasi généralisé", "Près de 99 % de la surface communale relève d'un aléa moyen ou fort pour le retrait-gonflement des sols argileux. Fondations plus profondes, chaînages, trottoir périphérique, gestion des eaux de toiture et distance raisonnable entre la maison et les grands arbres font partie de nos choix de base, que la construction soit neuve ou qu'il s'agisse d'agrandir."],
      ["Garrigue et débroussaillement", "L'arrêté préfectoral de 2025 sur les obligations de débroussaillement range Montagnac dans la catégorie à risque fort. Près des garrigues, l'entretien s'étend à 50 mètres autour des bâtiments, avec des arbres espacés et élagués, et à la totalité des terrains situés en zone urbaine. Une maison compacte et bien placée réduit la surface à entretenir chaque année."],
    ],
    quartiers: ["Centre ancien", "L'Esplanade", "Roquelieu", "Le Jeu de Mail", "La Tour du Mulet", "Cité de la Gare", "Boutounet", "Camp de la Crous", "Lavagnac", "Bessilles", "Saint-Martin-de-la-Garrigue", "La Grangette"],
    faq: [
      ["Puis-je ouvrir une terrasse dans le toit de ma maison du centre ancien ?", "Le règlement de la zone UA l'admet, y compris sur le versant qui donne sur l'espace public, sous conditions : rester à distance du faîtage, des pignons et du bord de toiture, ne pas dépasser 30 % de l'emprise au sol de la construction et ne pas porter atteinte aux abords des monuments. Le projet est soumis à l'Architecte des Bâtiments de France ; nous le présentons avec coupes et vues depuis la rue."],
      ["Mes fenêtres en PVC peuvent-elles être remplacées par les mêmes ?", "Dans le bâti ancien du centre, non : le règlement impose des menuiseries extérieures en bois, de teinte traditionnelle, et interdit le PVC comme l'aluminium. Il admet toutefois des menuiseries métalliques lorsqu'elles s'accordent avec la composition de la façade, notamment sur cour ou en rez-de-chaussée sur rue. Nous dessinons les profils et les partitions pour une déclaration préalable acceptable du premier coup."],
      ["Mon terrain est proche de l'Hérault : est-il constructible ?", "Tout dépend de la zone du PPRI où il se trouve. En zone rouge, les constructions nouvelles sont pour l'essentiel exclues ; en zone bleue, elles sont possibles avec des prescriptions ; hors zone, seul le règlement du PLU s'applique. Avant toute promesse d'achat, nous reportons le terrain sur la carte du PPRI, puis nous vérifions l'accès, les réseaux et le zonage du PLU."],
    ],
    refs: ["logement-exterieur", "industriel-agricole", "plans-recherche"],
    image: ["logement-exterieur", "40"],
  },

  // Sources : https://data.geopf.fr/annexes/gpu/documents/DU_34199/bdcd55fcee9c33b394400d06b922123f/34199_note_PSMV_et_ORI_20250930.pdf
  //   (secteur sauvegardé créé le 21/06/1965 sur 17 ha, étendu à 58 ha par arrêté préfectoral du 24/06/2016, avis conforme de l'ABF, travaux intérieurs) ;
  // https://data.geopf.fr/annexes/gpu/documents/DU_34199/bdcd55fcee9c33b394400d06b922123f/34199_procedure_20250930.pdf (révision du PLU approuvée le 18/05/2021, modifications 2022 et 2025) ;
  // https://www.ville-pezenas.fr/la-commission-locale-du-site-patrimonial-remarquable-installee-a-pezenas/ (CLSPR installée en septembre 2026, PSMV non approuvé, étude 2027-2030) ;
  // https://www.mrae.developpement-durable.gouv.fr/IMG/pdf/2020ao44.pdf (PPRi approuvé le 30/06/2010, SPR, Natura 2000, Saint-Christol, Moulières) ;
  // https://www.georisques.gouv.fr/api/v1/gaspar/pprn/34DDTM20050011 (PPRI de la Peyne) ;
  // https://montpellier.fr/sites/default/files/2025-04/20250408ArreteOLD34_DDTM34-2025-04-15800.pdf (Pézenas classée à risque fort) ;
  // https://fr.wikipedia.org/wiki/Pézenas (monuments, Molière, hameau de Conas) ; Base Adresse Nationale (lieux-dits)
  "pezenas": {
    title: "Architecte à Pézenas : bâti ancien et secteur sauvegardé",
    description: "Architecte à Pézenas : restaurer un hôtel particulier ou une maison de ville du site patrimonial remarquable, agrandir, construire. Parlons de votre projet.",
    accroche: "Hôtels particuliers, maisons de ville et faubourgs le long de la Peyne : Pézenas protège son centre depuis 1965, et presque chaque projet y commence par un dialogue avec l'Architecte des Bâtiments de France.",
    urbanisme: "PLU communal et site patrimonial remarquable",
    intro: [
      "Séjour des gouverneurs de Languedoc, ville où se réunirent les États et où le prince de Conti protégea Molière de 1653 à 1657, Pézenas a gardé un centre d'une rare densité : la commune compte plus de trente immeubles inscrits ou classés monuments historiques, la plupart dans ses rues anciennes. Autour, la ville s'est étendue dans la plaine viticole de l'Hérault, avec ses quartiers pavillonnaires, ses zones d'activités et le hameau de Conas. Architecte à Pézenas, l'agence s'occupe autant de restaurer des immeubles anciens, parfois pour les diviser en logements, que d'agrandir des maisons récentes ou d'en construire de nouvelles.",
      "Le cœur de ville est un site patrimonial remarquable, héritier de l'un des plus anciens secteurs sauvegardés de France. L'Architecte des Bâtiments de France doit y donner son accord à chaque demande d'autorisation et, faute de plan de sauvegarde approuvé, les règles se lisent dans plusieurs documents à la fois : PLU, servitudes patrimoniales, PPRI de la Peyne. Nous les rassemblons dès le relevé, puis nous construisons un dossier argumenté, état existant, sondages et détails à l'appui, qui facilite l'échange avec les services du patrimoine.",
    ],
    territoire: {
      titre: "Restaurer et construire dans la cité de Molière",
      texte: [
        "Pézenas occupe près de 30 km² de la plaine viticole de l'Hérault, le centre se tenant à une vingtaine de mètres d'altitude. L'Hérault passe à l'est de la ville, tandis que la Peyne la traverse au pied du cœur historique ; tous deux expliquent l'étendue des zones inondables. Les paysages sont très ouverts, avec peu de boisements, et les collines alentour ferment l'horizon. Le site Natura 2000 de l'aqueduc de Pézenas, refuge de chauves-souris, rappelle que les vieux ouvrages abritent aussi une faune protégée.",
        "La ville médiévale se lit en deux enclos, ville haute et ville basse, très riches en immeubles de grand intérêt. Les grandes familles y ont bâti des hôtels particuliers organisés autour de cours et d'escaliers, puis le XVIIe siècle a donné le quartier de la Contre-Réforme et la rue Reboul. Les faubourgs des XVIIIe et XIXe siècles, les Calquières et leurs anciennes tanneries, le quartier des Cordeliers et ses jardins maraîchers ont rejoint le périmètre protégé en 2016. Les restaurations encouragées par la loi Malraux ont souvent divisé les grandes demeures en appartements.",
        "Concevoir à Pézenas, c'est d'abord observer : maçonneries de pierre, enduits, menuiseries anciennes, parfois des décors intérieurs, qui orientent ce que l'on garde et ce que l'on transforme. Dans les quartiers récents de la plaine, les questions changent : sols argileux, ruissellement, chaleur d'été. Le développement futur se concentre sur quelques secteurs encadrés par des orientations d'aménagement, comme Saint-Christol ou Grange Rouge, où les logements seront plus groupés que dans les lotissements des décennies passées.",
      ],
    },
    projets: [
      {
        titre: "Restaurer un hôtel particulier",
        texte: "Diviser un hôtel ancien en quelques logements, ou au contraire le rendre à une seule famille, suppose de comprendre sa distribution d'origine : cour, escalier, enfilade des pièces. Nous établissons un relevé et un diagnostic, identifions avec l'Architecte des Bâtiments de France les éléments à conserver, puis logeons cuisines, salles d'eau et réseaux sans toucher aux décors.",
        expertise: "renovation",
      },
      {
        titre: "Une pièce de plus dans les faubourgs",
        texte: "Dans les faubourgs intégrés au périmètre protégé en 2016, une maison de ville peut gagner une pièce sur cour, une terrasse ou une verrière. Le projet reçoit l'accord de l'Architecte des Bâtiments de France et, dans les parties basses proches de la Peyne, respecte le règlement du PPRI : surface créée et niveau des planchers s'en déduisent.",
        expertise: "extension",
      },
      {
        titre: "Boutique ou atelier en rez-de-chaussée",
        texte: "Les commerces et les métiers d'art du centre occupent souvent des rez-de-chaussée anciens. Un local qui reçoit du public doit répondre aux règles d'accessibilité et de sécurité incendie, à concilier avec une devanture et une enseigne acceptées au titre du patrimoine. Nous préparons ensemble l'autorisation de travaux et la demande d'urbanisme.",
        expertise: "professionnels",
      },
      {
        titre: "Maison neuve dans la plaine",
        texte: "Sur une parcelle des quartiers récents, la maison s'implante en fonction du PPRI, du sol argileux et de la course du soleil : volumes compacts, protections à l'ouest, jardin sec. Les futurs secteurs d'habitat, comme Saint-Christol, sont soumis à des orientations d'aménagement qui fixent densité, accès et plantations ; nous les intégrons dès l'esquisse.",
        expertise: "maison",
      },
    ],
    contraintes: [
      ["Le site patrimonial remarquable", "Le secteur sauvegardé créé le 21 juin 1965 couvrait 17 hectares ; un arrêté préfectoral du 24 juin 2016 l'a porté à 58 hectares, devenus site patrimonial remarquable avec la loi du 7 juillet 2016. Le plan de sauvegarde et de mise en valeur reste à établir : la commune annonce une étude à partir de 2027. D'ici là, les projets sont appréciés au cas par cas par l'Architecte des Bâtiments de France, dont l'avis s'impose au maire."],
      ["Travaux intérieurs et délais", "Selon la note annexée au PLU, les travaux intérieurs réalisés dans le périmètre étendu en 2016 relèvent d'une déclaration préalable tant que le plan de sauvegarde n'est pas approuvé. Les délais d'instruction sont majorés dès que l'Architecte des Bâtiments de France est consulté. Nous intégrons ces étapes au calendrier et vérifions, pour chaque immeuble, s'il est lui-même protégé."],
      ["Le PPRI de la Peyne", "Approuvé le 30 juin 2010, il délimite des zones rouges, des zones bleues constructibles sous conditions et une zone de précaution. Une grande partie du périmètre ajouté en 2016, le long de la Peyne et aux Cordeliers, est inondable. Nous croisons systématiquement servitude patrimoniale et règlement du PPRI : rehausser un plancher dans une maison ancienne se discute avec les deux."],
      ["Argiles et feu de forêt", "La plaine est en grande partie classée en aléa moyen de retrait-gonflement des argiles : une étude de sol oriente les fondations d'une maison neuve comme d'une extension. L'arrêté préfectoral du 8 avril 2025 place aussi Pézenas parmi les communes à risque d'incendie fort ; près des massifs boisés ou de garrigue, les abords des constructions doivent être débroussaillés."],
    ],
    quartiers: ["Ville haute", "Ville basse", "Quartier de la Contre-Réforme", "Faubourg des Cordeliers", "Les Calquières", "Place Pierre Poncet", "Promenade du Pré-Saint-Jean", "Saint-Christol", "Grange Rouge", "Les Moulières", "Conas"],
    faq: [
      ["Faut-il l'accord de l'Architecte des Bâtiments de France pour changer mes fenêtres dans le centre ?", "Oui. Dans le site patrimonial remarquable, le remplacement de menuiseries modifie l'aspect extérieur et passe par une déclaration préalable soumise à son accord. Matériau, profils, petits bois, couleur et occultations sont examinés ; dans les immeubles anciens, le bois peint reste la référence. Nous fournissons des dessins à grande échelle et des photographies de l'existant, ce qui limite les demandes de pièces complémentaires."],
      ["Mon immeuble se trouve dans l'extension de 2016 : mes travaux intérieurs sont-ils encadrés ?", "D'après la note jointe au PLU, oui : tant que le plan de sauvegarde n'est pas approuvé, les travaux intérieurs y sont soumis à déclaration préalable. Cloisons, escaliers, cheminées ou plafonds anciens peuvent donc être discutés avec l'Architecte des Bâtiments de France. Nous faisons un repérage pièce par pièce avant de proposer une nouvelle distribution."],
      ["Le futur plan de sauvegarde peut-il changer les règles de mon projet ?", "C'est possible : il fixera des prescriptions immeuble par immeuble, parfois jusqu'aux intérieurs. La commune annonce une étude de 2027 à 2030, puis une phase réglementaire jusqu'en 2032 environ. Une autorisation délivrée avant son approbation reste valable pendant sa durée de validité ; pour un projet à long terme, mieux vaut donc l'engager avec un dossier solide plutôt que l'attendre."],
    ],
    refs: ["logement-interieur", "logements-collectifs", "plans-recherche"],
    image: ["logements-collectifs", "10"],
  },

  // Sources : https://fr.wikipedia.org/wiki/Paulhan_(Hérault) (village circulaire, castrum du Castellas, gare, risques, argiles) ;
  // https://pop.culture.gouv.fr/notice/merimee/PA34000109 (cave coopérative, rue de la Clairette, 1934, Edmond Leenhardt, inscrite le 13/04/2015) ;
  // https://www.georisques.gouv.fr/api/v1/gaspar/pprn/34DDTM20040016 (PPRI moyenne vallée de l'Hérault secteur nord, approuvé le 28/10/2002) ;
  // https://data.geopf.fr (arrêté de mise à jour du PLU 2019 : PLU approuvé le 18/02/2008, révisé le 05/05/2010) ;
  // https://www.paulhan.fr/plu ; https://www.paulhan.fr/enquete-publique-plu (révision générale prescrite le 09/07/2015, arrêts 2024 et 10/09/2026, projet de PDA) ;
  // https://www.mrae.developpement-durable.gouv.fr/IMG/pdf/2024ao83.pdf ;
  // https://montpellier.fr/sites/default/files/2025-04/20250408ArreteOLD34_DDTM34-2025-04-15800.pdf (commune à risque fort) ; Base Adresse Nationale
  "paulhan": {
    title: "Architecte à Paulhan : circulade, chais et maisons neuves",
    description: "Architecte à Paulhan : rénovation dans la circulade, extension, maison neuve ou chai, avec le PPRI de l'Hérault et le futur PLU. Parlons de votre projet.",
    accroche: "Un village circulaire né vers l'an mille, une gare qui fit de Paulhan un carrefour ferroviaire, une cave coopérative protégée : ici, le bâti raconte la vigne et le rail.",
    urbanisme: "PLU communal (révision générale en cours)",
    intro: [
      "Paulhan, un peu plus de 4 000 habitants sur 11 km², s'étend au bord de l'Hérault, au pied des premières collines du Clermontais. Son cœur est une circulade, village circulaire languedocien apparu autour de l'an mille ; le chemin de fer, arrivé à la fin du XIXe siècle, puis les lotissements ont étendu le bourg vers la plaine. Architecte à Paulhan, l'agence accompagne la rénovation de maisons de village, l'extension de pavillons, la construction de maisons neuves et les bâtiments liés à la vigne ou à l'artisanat.",
      "Les contraintes sont ici très lisibles. Une partie du territoire relève du PPRI de la moyenne vallée de l'Hérault, les sols argileux concernent l'ensemble du bâti et la commune est classée à risque d'incendie fort. S'y ajoute un document d'urbanisme en transition : le PLU approuvé en 2008, puis révisé en 2010, fait l'objet d'une révision générale dont le projet a été arrêté par le conseil municipal en septembre 2026. Nous lisons les deux versions pour qu'un projet ne soit pas conçu sur une règle sur le point de changer.",
    ],
    territoire: {
      titre: "Entre l'Hérault, la circulade et la voie ferrée",
      texte: [
        "Le territoire communal, de 18 à 83 mètres d'altitude, borde l'Hérault et remonte doucement vers les premières collines. La vigne y reste la principale production agricole, même si le nombre d'exploitations a fortement diminué depuis la fin des années 1980. Le fleuve impose sa loi : dix arrêtés de catastrophe naturelle ont visé Paulhan pour des inondations ou des coulées de boue entre 1982 et 2019, et le village se trouve en aval du barrage du Salagou.",
        "L'histoire locale rapporte que les habitants des hameaux dispersés de Vareilhes, Saint-Geniès et Gisses se sont regroupés autour d'un castrum, sur la colline du Castellas. L'église Notre-Dame-des-Vertus, classée monument historique, l'ermitage Saint-Jean de Vareilhes et le moulin des Laures témoignent de cette longue histoire. À la fin du XIXe siècle, le rail fait de Paulhan un nœud vers Montpellier, Lodève, Faugères et Vias ; à partir de 1934, la cave coopérative dessinée par Edmond Leenhardt donne au village son grand bâtiment viticole.",
        "Dans la circulade, les maisons mitoyennes s'élèvent sur deux ou trois niveaux autour de rues étroites ; les projets y portent sur la lumière, l'isolation des murs anciens et l'usage des remises du rez-de-chaussée. Dans les lotissements, comme celui de la Clairette ou le Clos Saint-Martin, l'argile et, le cas échéant, la proximité des zones inondables commandent fondations et niveau des planchers. Pour les terrains proches de boisements ou de garrigues, l'implantation de la maison tient compte du débroussaillement.",
      ],
    },
    projets: [
      {
        titre: "Maison de la circulade",
        texte: "Une maison étroite, une remise au rez-de-chaussée, des pièces sombres à l'étage : la rénovation ouvre une cour ou une trémie, redistribue les niveaux autour d'un nouvel escalier et isole par l'intérieur avec des matériaux adaptés aux murs anciens. Selon l'adresse, l'avis de l'Architecte des Bâtiments de France peut être requis ; nous le vérifions avant l'esquisse.",
        expertise: "renovation",
      },
      {
        titre: "Maison neuve hors zone inondable",
        texte: "Une fois la parcelle située par rapport au PPRI, la maison se conçoit avec l'étude géotechnique : fondations adaptées aux argiles, volumes simples, débords de toiture contre le soleil d'été, terrasse ombragée au sud-est. Le dossier de permis de construire décrit précisément l'insertion dans la rue et le traitement des eaux pluviales.",
        expertise: "maison",
      },
      {
        titre: "Agrandir un pavillon de lotissement",
        texte: "Chambre supplémentaire, bureau, séjour prolongé sur le jardin : une extension de plain-pied se raccorde à la toiture existante ou s'en distingue franchement par un toit plat. Nous contrôlons l'emprise au sol, les reculs et la zone du PPRI, puis la surface totale, qui détermine le recours obligatoire à l'architecte au-delà de 150 m².",
        expertise: "extension",
      },
      {
        titre: "Atelier ou chai en zone d'activités",
        texte: "La zone d'activités de La Barthe accueille artisans et entreprises. Un atelier, un dépôt ou un petit chai s'y conçoit autour de son usage : accès des véhicules, quai, hauteur sous plafond, éclairage naturel, bureaux. Si le bâtiment reçoit du public, les règles d'accessibilité et de sécurité incendie s'ajoutent à celles du PLU.",
        expertise: "professionnels",
      },
    ],
    contraintes: [
      ["Un PLU en cours de révision", "La révision générale, prescrite en 2015, a donné lieu à une enquête publique en 2024 puis à un nouvel arrêt du projet en septembre 2026. Tant qu'elle n'est pas approuvée, le PLU de 2008 révisé en 2010 s'applique ; mais une fois les orientations du futur plan débattues en conseil municipal, la commune peut surseoir à statuer sur une demande qui compromettrait le futur plan. Nous comparons donc les deux règlements."],
      ["Le PPRI de la moyenne vallée de l'Hérault", "Approuvé le 28 octobre 2002, il oppose des zones rouges, quasiment fermées à toute construction nouvelle, à des zones bleues où bâtir reste possible sous prescriptions. La carte réglementaire est consultée dès le premier rendez-vous : elle fixe la possibilité de construire, le niveau du plancher habitable et les règles applicables aux extensions."],
      ["Monuments et futurs abords", "À moins de 500 mètres de la cave coopérative, inscrite en 2015, ou de l'église Notre-Dame-des-Vertus, classée en 1987, un projet visible depuis l'un de ces monuments passe par l'Architecte des Bâtiments de France. Un projet de périmètres délimités des abords a été soumis à enquête publique avec la révision du PLU : il précisera les secteurs concernés. Nous vérifions la situation exacte de chaque adresse."],
      ["Argiles et débroussaillement", "En 2019, la totalité des bâtiments recensés sur la commune se trouvait en zone d'aléa moyen ou fort de retrait-gonflement des argiles. Par ailleurs, l'arrêté préfectoral du 8 avril 2025 classe Paulhan à risque d'incendie fort : à proximité des garrigues, les abords des constructions doivent être débroussaillés et entretenus chaque année."],
    ],
    quartiers: ["Circulade", "Plan du Castellas", "Quartier de la Gare", "La Clairette", "Le Clos Saint-Martin", "L'Abaoussier", "Les Laures", "Vareilhes", "Zone d'activités de La Barthe"],
    faq: [
      ["Le futur PLU peut-il bloquer mon permis de construire ?", "Il ne s'applique qu'une fois approuvé. Mais depuis le débat sur ses orientations, la commune peut opposer un sursis à statuer à un projet qui rendrait plus difficile l'exécution du futur plan, par exemple sur un terrain appelé à changer de zone. Avant de déposer, nous comparons le règlement en vigueur et le projet arrêté, et nous en parlons si besoin avec le service urbanisme."],
      ["Ma maison est proche de la cave coopérative : quelles règles s'appliquent ?", "Le bâtiment est inscrit monument historique depuis le 13 avril 2015. Dans ses abords, tout projet modifiant l'aspect extérieur d'une construction visible depuis le monument ou en même temps que lui est soumis à l'Architecte des Bâtiments de France. Le périmètre délimité en préparation pourrait redessiner ce secteur ; nous vérifions la règle applicable à la date du dépôt."],
      ["Peut-on aménager un logement dans une ancienne remise du village ?", "Souvent oui, mais il s'agit d'un changement de destination, soumis à déclaration préalable ou à permis selon les travaux sur la façade et la structure. Il faut aussi vérifier les règles de la zone, le stationnement demandé, et la zone du PPRI si la remise est exposée aux crues. Nous établissons ce diagnostic réglementaire et technique avant d'engager les plans."],
    ],
    refs: ["industriel-agricole", "logement-exterieur", "logement-interieur"],
    image: ["industriel-agricole", "08"],
  },

  // Sources : https://data.geopf.fr (PLU de Clermont-l'Hérault : révision générale approuvée le 06/03/2024, mise à jour 2025 ; rapport de présentation ; liste des SUP) ;
  // https://fr.wikipedia.org/wiki/Clermont-l'Hérault (histoire drapière, remparts, quartiers, argiles 63,5 %) ;
  // https://fr.wikipedia.org/wiki/Liste_des_monuments_historiques_de_l'Hérault_(A-L) (collégiale Saint-Paul classée en 1840, etc.) ;
  // https://www.georisques.gouv.fr/api/v1/gaspar/pprn?codeInsee=34079 (aucun PPRN approuvé) ;
  // https://montpellier.fr/sites/default/files/2025-04/20250408ArreteOLD34_DDTM34-2025-04-15800.pdf (commune à risque fort) ; Base Adresse Nationale
  "clermont-l-herault": {
    title: "Architecte à Clermont-l'Hérault : du centre au Salagou",
    description: "Architecte à Clermont-l'Hérault : rénovation en centre ancien, extension ou maison neuve vers le Salagou, avec le PLU révisé en 2024. Parlons de votre projet.",
    accroche: "Une vieille ville serrée sous le château des Guilhem, des quartiers qui gagnent la plaine de la Lergue et les coteaux, le lac du Salagou à l'horizon : les terrains clermontais sont très contrastés.",
    urbanisme: "PLU communal (révision approuvée en 2024)",
    intro: [
      "Ville-centre du Clermontais, Clermont-l'Hérault s'est formée au XIIe siècle au pied du Puech Castel et du château des Guilhem. Ville drapière jusqu'aux années 1930, puis tournée vers le vin et le raisin de table, elle a gardé un centre dense de maisons médiévales et d'hôtels particuliers, prolongé par des faubourgs, des quartiers résidentiels et de grandes zones d'activités. Architecte à Clermont-l'Hérault, l'agence y mène des réhabilitations en cœur de ville, des extensions de maisons, des constructions neuves et des locaux professionnels.",
      "Le PLU révisé, approuvé le 6 mars 2024, cherche à faire revivre ce centre : terrasses en toiture admises mais encadrées, balcons en saillie autorisés, division d'immeubles en logements soumise à déclaration préalable. Ailleurs, il freine l'urbanisation des coteaux de Gorjan et du hameau des Bories, exposés au feu et sensibles pour le paysage. Notre travail commence par cette lecture fine du règlement, puis par la visite : pente, vues, écoulement des eaux, végétation à tenir à distance.",
    ],
    territoire: {
      titre: "Entre la plaine de la Lergue et les ruffes du Salagou",
      texte: [
        "La commune s'étend sur près de 33 km², entre la plaine de l'Hérault et les premiers contreforts du Massif central. Côté plaine, la Lergue et le Rhonel irriguent un paysage de vignes et d'oliveraies qui vient jusqu'aux limites de la ville ; au sud, le mont Caylus culmine à 288 mètres ; à l'ouest, boisements et terres rouges de ruffe conduisent au lac du Salagou, qui occupe la pointe nord-ouest du territoire. Plusieurs ruisseaux, dont le Cabrié, complètent un réseau hydrographique très ramifié.",
        "La vieille ville, ceinte de remparts à partir de 1250, a débordé de son enceinte dès la fin du XIIIe siècle. Elle conserve des maisons de la fin du Moyen Âge rue Bozène et rue Filandière, des hôtels des XVIIe et XVIIIe siècles et, le long du Rhonel, les anciens quartiers des drapiers. Le XIXe siècle a percé le boulevard Gambetta et amené le chemin de fer en 1863. Depuis le milieu du XXe siècle se sont ajoutés des quartiers comme Fontenay, Bézerac ou l'Oratoire, tandis que les Tanes Basses et la Salamane accueillent les entreprises.",
        "Concevoir ici, c'est passer d'un monde à l'autre. Au centre, les maisons étroites et hautes manquent d'espace extérieur ; le règlement rend inconstructibles les cours de moins de 30 m² et protège la pleine terre, ce qui oriente vers la terrasse en toiture ou le balcon. Sur les coteaux et en direction du Salagou, la maison compose avec la pente, les vues et le risque d'incendie ; dans la plaine, avec les argiles et le ruissellement.",
      ],
    },
    projets: [
      {
        titre: "Réhabiliter une maison du cœur de ville",
        texte: "Maison haute sur une parcelle étroite, rez-de-chaussée sombre, toiture à reprendre : le projet peut créer une terrasse en toiture dans les limites du règlement, ouvrir un balcon sur rue, recomposer les étages autour d'un escalier éclairé. Près de la collégiale Saint-Paul ou des autres monuments, l'Architecte des Bâtiments de France est consulté ; nous préparons le dossier en conséquence.",
        expertise: "renovation",
      },
      {
        titre: "Maison neuve en lisière de garrigue",
        texte: "Sur un terrain en pente tourné vers les reliefs, la maison suit le sol par demi-niveaux plutôt que par de grands terrassements. Matériaux peu combustibles, abords dégagés, accès praticable par les secours, cuve de récupération d'eau : le projet anticipe le débroussaillement et l'aléa incendie cartographié par l'État.",
        expertise: "maison",
      },
      {
        titre: "Agrandir une maison des quartiers résidentiels",
        texte: "À Fontenay, à Bézerac ou dans les lotissements plus récents, une extension se dessine en continuité des volumes existants ou par une surélévation partielle. Nous vérifions la hauteur, l'emprise et les reculs fixés par le PLU de 2024, la sensibilité du sol aux argiles, puis la procédure : déclaration préalable ou permis selon la surface ajoutée.",
        expertise: "extension",
      },
      {
        titre: "Local d'activité aux Tanes Basses",
        texte: "Atelier, showroom, bureaux ou entrepôt : les zones des Tanes Basses et de la Salamane accueillent l'essentiel des entreprises, et le PLU prévoit une extension des Tanes Basses. Le bâtiment s'organise autour des flux, puis soigne son image depuis l'A75 et l'entrée de ville, que le projet communal veut qualitatives.",
        expertise: "professionnels",
      },
    ],
    contraintes: [
      ["Le PLU révisé en 2024", "Approuvé le 6 mars 2024, le PLU encadre finement le centre : construction à l'alignement, hauteur limitée à 16 mètres avec un gabarit réduit au-delà d'une bande de 15 mètres, déclaration préalable pour diviser un immeuble en logements, part de pleine terre à conserver. Avant l'esquisse, nous croisons le zonage, le règlement écrit et, s'il y en a une, l'orientation d'aménagement du secteur."],
      ["Monuments, site inscrit et site classé", "Autour de la collégiale Saint-Paul, de la chapelle Notre-Dame du Peyrou, des vestiges du château et de plusieurs maisons protégées, l'Architecte des Bâtiments de France est un interlocuteur obligé ; ces abords sont en cours de redéfinition par un périmètre délimité. Les abords du Peyrou forment un site inscrit, et le nord-ouest de la commune appartient au site classé du Salagou et du cirque de Mourèze, où les travaux relèvent d'une autorisation spéciale."],
      ["Inondation sans PPRI approuvé", "Aucun plan de prévention du risque inondation n'est approuvé à Clermont-l'Hérault, mais le PLU fait de l'inondation l'un des deux risques majeurs de la commune, avec des cours d'eau ramifiés comme le Cabrié aux Bories. Les accès ne doivent pas gêner l'écoulement des eaux ; nous recherchons les études disponibles pour chaque parcelle avant de fixer le niveau du plancher."],
      ["Feu de forêt et débroussaillement", "La cartographie de l'aléa établie par l'État en décembre 2021 va de très faible à exceptionnel selon les secteurs, et l'arrêté préfectoral d'avril 2025 classe Clermont-l'Hérault à risque fort. Près des boisements, le terrain doit être débroussaillé sur 50 mètres autour de la maison, avec des arbres espacés et élagués."],
      ["Argiles", "Selon les données de l'État, environ 63 % du territoire présente une sensibilité moyenne ou forte aux argiles gonflantes. Dans ces secteurs, toute vente de terrain à bâtir s'accompagne d'une étude de sol préalable ; pour une extension, elle permet de fonder le nouveau volume en cohérence avec l'ancien."],
    ],
    quartiers: ["Vieille ville", "Puech Castel", "Fouscaïs", "Les Bories", "Gorjan", "Fontenay", "Bézerac", "L'Oratoire", "Le Souc", "Pioch de Comte", "Les Tanes Basses", "La Salamane"],
    faq: [
      ["Puis-je diviser une maison du centre-ville en deux logements ?", "C'est possible, mais le PLU de 2024 soumet à déclaration préalable toute division d'immeuble en plusieurs logements. Il s'agit de vérifier la surface et l'éclairement de chaque logement, l'accès, le stationnement et, dans les abords d'un monument, l'avis de l'Architecte des Bâtiments de France sur les éventuelles modifications de façade. Nous étudions la faisabilité avant tout achat ou engagement de travaux."],
      ["Mon terrain est au bord du lac du Salagou : peut-on y construire ?", "Les rives du lac sont comprises dans le site classé du Salagou et du cirque de Mourèze : construire, démolir ou transformer un bâtiment y suppose une autorisation spéciale de l'État, rarement accordée pour une construction nouvelle. Le règlement du PLU y ajoute ses propres limites. Pour un bâtiment existant, une rénovation ou une extension mesurée peut parfois être étudiée ; nous faisons le point sur pièces."],
      ["Ma maison aux Bories peut-elle être agrandie ?", "Le PLU a choisi de ne pas densifier les Bories ni Gorjan, en raison du risque d'incendie, des cours d'eau, d'un captage d'eau potable et des enjeux de paysage. Dans les parties maintenues en zone naturelle, seule une évolution mesurée des constructions existantes est admise. Nous vérifions la surface autorisée par le règlement, puis concevons une extension compacte qui ne dégrade ni la défense contre le feu ni l'écoulement des eaux."],
    ],
    refs: ["logement-exterieur", "logement-interieur", "tertiaire"],
    image: ["logement-exterieur", "12"],
  },

  // Sources : https://data.geopf.fr (PLUi du Lodévois et Larzac, délibération d'approbation du 10/04/2025, OAP de Lodève) ;
  // https://www.mrae.developpement-durable.gouv.fr/IMG/pdf/kpark_mrae_2019dko87.pdf (AVAP de Lodève : 350 ha, trois secteurs Z1, Z2, Z3) ;
  // https://apicarto.ign.fr/api/gpu (servitude AC4 « SPR de Lodève : centre ancien ») ;
  // https://www.georisques.gouv.fr/api/v1/gaspar/pprn/34DDTM20040015 (PPRI de la Lergue, approuvé le 04/04/2001) ;
  // https://www.georisques.gouv.fr/api/v1/gaspar/pprn/34DDTM20050004 (PPR mouvements de terrain du Lodévois, approuvé le 03/07/2008) ;
  // https://montpellier.fr/sites/default/files/2025-04/20250408ArreteOLD34_DDTM34-2025-04-15800.pdf (Lodève classée à risque moyen) ;
  // https://fr.wikipedia.org/wiki/Lodève ; https://www.banquedesterritoires.fr/lodeve-se-reconstruit-sur-elle-meme-34 (ORT 2021, OPAH-RU) ; Base Adresse Nationale
  "lodeve": {
    title: "Architecte à Lodève : rénover entre Lergue et Soulondres",
    description: "Architecte à Lodève : réhabiliter un immeuble du site patrimonial remarquable, agrandir ou bâtir sur les pentes, avec le PLUi. Parlons de votre projet.",
    accroche: "Cité épiscopale et ancienne ville drapière serrée au confluent de la Lergue et de la Soulondres, Lodève demande des projets précis : pentes, crues, éboulements et patrimoine protégé s'y côtoient.",
    urbanisme: "PLUi du Lodévois et Larzac (approuvé en 2025)",
    intro: [
      "Au pied du causse du Larzac, Lodève occupe la vallée étroite de la Lergue, là où la Soulondres la rejoint. Longtemps siège d'un évêché, la ville a prospéré grâce au drap : en 1726, le cardinal de Fleury, qui en était natif, lui accorde le monopole des draps destinés à l'infanterie royale. Il en reste la cathédrale Saint-Fulcran, l'ancien palais épiscopal devenu hôtel de ville, des hôtels particuliers et des bâtiments industriels. Architecte à Lodève, l'agence travaille sur la réhabilitation d'immeubles anciens, la reconversion de friches, l'extension de maisons et la construction sur les coteaux.",
      "Les contraintes s'additionnent : PPRI de la Lergue, plan de prévention des mouvements de terrain du Lodévois, site patrimonial remarquable, pentes boisées à débroussailler. Approuvé le 10 avril 2025, le PLUi du Lodévois et Larzac fixe désormais les règles d'urbanisme, mais le règlement patrimonial s'impose à lui. Nous superposons ces documents avant l'esquisse ; avec la formation de génie civil de Jean-Yves Millet, murs de soutènement, planchers anciens et fondations sur terrain instable sont étudiés dès le départ.",
    ],
    territoire: {
      titre: "Une ville de confluence au pied du Larzac",
      texte: [
        "Le territoire monte de 117 à 700 mètres d'altitude, de la vallée aux rebords du causse. La Lergue, la Soulondres et le Laurounet y creusent des vallons encadrés de pentes boisées ; au sud, les pélites rouges de la ruffe annoncent le lac du Salagou, à moins de dix kilomètres, et le massif de l'Escandorgue ferme l'horizon à l'ouest. Le pas de l'Escalette, au nord, marque la montée vers le Larzac. Ce relief donne à la ville son caractère, mais il en limite aussi l'extension.",
        "Le centre ancien s'est construit entre les deux rivières, dominé par la cathédrale, dont la nef date du XIIIe siècle. Maisons hautes alignées le long de la Soulondres, hôtels de Fleury, de Salze ou Albouy, halle Dardé, pont de Montifort : le patrimoine est dense. L'activité drapière a laissé des ateliers et des usines, aujourd'hui en partie en friche, et la manufacture de la Savonnerie s'est installée à Lodève en 1967. Au-delà, les faubourgs suivent les rives, puis les quartiers récents gagnent les pentes de Prémerlet ou de Fontbonne.",
        "Les orientations d'aménagement du PLUi le disent sans détour : Lodève est très contrainte dans son développement par les risques et la topographie. Le secteur de Versailles, à Prémerlet, l'un des seuls à pouvoir accueillir une opération d'ampleur, est ainsi destiné à au moins soixante-dix logements collectifs. L'essentiel des projets portera donc sur le bâti existant : immeubles vacants du centre, maisons de faubourg, anciens bâtiments industriels, que la commune cherche à remettre en usage dans le cadre de son opération de revitalisation.",
      ],
    },
    projets: [
      {
        titre: "Immeuble du centre à réhabiliter",
        texte: "Un immeuble étroit sur quatre niveaux, des logements vacants, une cage d'escalier à reprendre : la réhabilitation commence par un diagnostic des planchers, des murs et de la toiture, puis recompose les logements autour de la lumière. Les aides de l'opération de rénovation de l'habitat du centre peuvent être sollicitées ; nous préparons les pièces techniques nécessaires.",
        expertise: "renovation",
      },
      {
        titre: "Reconvertir un bâtiment drapier",
        texte: "Ateliers, bureaux, salle d'activité ou logements dans une ancienne usine textile : ces volumes généreux supportent bien un nouvel usage. Certaines friches sont repérées à préserver par le règlement patrimonial, ce qui n'interdit pas leur réhabilitation. Structure, sécurité incendie, accessibilité et zone inondable sont étudiées avant de figer le programme.",
        expertise: "professionnels",
      },
      {
        titre: "Maison sur un coteau",
        texte: "Sur les pentes qui entourent la ville, la maison s'accroche au terrain par des murs de soutènement et des niveaux décalés. Le plan de prévention des mouvements de terrain peut imposer des prescriptions, et l'étude géotechnique fixe les fondations. Le débroussaillement, l'accès des secours et la gestion des eaux de ruissellement complètent la conception.",
        expertise: "maison",
      },
      {
        titre: "Extension d'une maison de faubourg",
        texte: "Dans les faubourgs, une maison peut s'agrandir côté jardin par un volume simple, une véranda ou une terrasse couverte. Le règlement patrimonial y fixe des règles d'aspect, de matériaux et parfois de clôtures ; près de la Lergue ou de la Soulondres, le PPRI s'ajoute. Nous dessinons une extension qui respecte ces cadres sans pasticher l'existant.",
        expertise: "extension",
      },
    ],
    contraintes: [
      ["Le site patrimonial remarquable", "Héritier de l'AVAP élaborée par la communauté de communes, le site patrimonial remarquable distingue trois secteurs : le centre ancien ; les faubourgs et l'entrée de ville, avec les rives de la Lergue et de la Soulondres et le quartier de Fangouse ; le cadre paysager, de Campestre aux reliefs de Rivaudrac et de Montbrun. Les travaux y requièrent l'accord de l'Architecte des Bâtiments de France."],
      ["Le PPRI de la Lergue", "Approuvé le 4 avril 2001, ce plan de prévention délimite des zones rouges et bleues le long des cours d'eau qui traversent la ville. Entre 1982 et 2015, dix épisodes de crue ou de coulée de boue ont fait l'objet d'une reconnaissance de catastrophe naturelle. Pour un immeuble des rives, nous vérifions la zone, la hauteur des planchers habitables et les usages permis au rez-de-chaussée."],
      ["Mouvements de terrain", "Le plan de prévention des risques de mouvements de terrain du Lodévois, approuvé le 3 juillet 2008, couvre affaissements liés à d'anciennes cavités, chutes de pierres et de blocs, glissements et tassements. Il comporte des zones inconstructibles et des zones bleues à prescriptions. Sur un terrain en pente, l'étude de sol et le dimensionnement des soutènements deviennent des pièces maîtresses du projet."],
      ["Débroussaillement en risque moyen", "Lodève n'est classée qu'en risque d'incendie moyen par l'arrêté préfectoral du 8 avril 2025 sur le débroussaillement. Près des massifs exposés, le débroussaillement reste dû sur 50 mètres autour des constructions, mais l'espacement entre les houppiers des arbres n'est exigé que jusqu'à 25 mètres de la maison. Les voies privées d'accès doivent garder un gabarit de 4 mètres pour les secours."],
    ],
    quartiers: ["Centre ancien", "Rives de la Soulondres", "Fangouse", "Prémerlet", "Fontbonne", "Grézac", "Les Roucans", "Montbrun", "Campestre", "Rivaudrac", "Saint-Martin", "Tréviols"],
    faq: [
      ["Mon terrain est-il concerné par le plan de prévention des mouvements de terrain ?", "Il suffit de reporter la parcelle sur la carte réglementaire du plan approuvé en 2008, annexée au PLUi. En zone rouge, construire est pour l'essentiel exclu ; en zone bleue, des prescriptions s'appliquent, souvent une étude géotechnique et des dispositions constructives. Nous faisons cette vérification avant tout achat de terrain, car elle conditionne la faisabilité comme le coût des fondations."],
      ["Peut-on poser des panneaux solaires sur un toit du centre ancien ?", "Le règlement patrimonial cherche à concilier patrimoine et économies d'énergie, mais il encadre fortement les installations visibles depuis l'espace public. Selon le secteur, l'exposition et la vue depuis les rues ou les hauteurs, des panneaux peuvent être admis, intégrés ou refusés ; l'Architecte des Bâtiments de France tranche. Nous étudions aussi d'autres pistes : isolation de la toiture, menuiseries performantes, pompe à chaleur discrète."],
      ["Existe-t-il des aides pour rénover un logement ancien à Lodève ?", "La ville est engagée depuis 2021 dans une opération de revitalisation de territoire, et une opération programmée d'amélioration de l'habitat de renouvellement urbain cible son centre. Selon votre situation, propriétaire occupant ou bailleur, des aides de l'Anah et de la collectivité peuvent financer une partie des travaux. Nous établissons le programme et les pièces techniques ; l'opérateur de l'OPAH-RU accompagne ensuite le montage de la demande de subvention."],
    ],
    refs: ["logement-interieur", "logements-collectifs", "logement-exterieur"],
    image: ["logement-exterieur", "18"],
  },
};

import type { VilleContenu } from "../types";

export const CONTENU_G2: Record<string, VilleContenu> = {
  // Sources : https://fr.wikipedia.org/wiki/Cournonterral ;
  // https://www.montpellier-france.com/discover/a-thousand-years-of-history/the-cities-of-montpellier-mediterranee-metropolis/cournonterral/ ;
  // https://data.montpellier3m.fr/dataset/plui-climat-des-communes-de-montpellier-mediterranee-metropole (PLUi-Climat approuvé le 16/07/2025) ;
  // https://montpellier.tribunal-administratif.fr (référé du 07/10/2025 : PLUi maintenu) ;
  // https://georisques.gouv.fr/api/v1/gaspar/pprn/34DDTM20040022 (PPRI du Coulazou, approuvé le 23/09/2002) ;
  // https://montpellier.fr/sites/default/files/2025-04/20250408ArreteOLD34_DDTM34-2025-04-15800.pdf (arrêté OLD du 08/04/2025, commune à risque fort) ;
  // base Mérimée (aucun monument historique sur la commune) ; Base Adresse Nationale (lieux-dits) ;
  // https://www.herault.gouv.fr (enquête DUP du lycée régional, arrêté 2023-09-DRCL-0427)
  "cournonterral": {
    title: "Architecte à Cournonterral : bâtir au bord du Coulazou",
    description: "Architecte à Cournonterral : maison neuve, extension ou rénovation au village, en tenant compte du PPRI du Coulazou et de la garrigue. Parlons de votre projet.",
    accroche: "Entre les vignes de la plaine et la garrigue qui monte vers les gorges du Coulazou, une maison se conçoit ici avec le cours d'eau, la pente et un cœur de village jadis fortifié.",
    urbanisme: "PLUi-Climat de Montpellier Méditerranée Métropole (2025)",
    intro: [
      "Cournonterral est un village vigneron de la Métropole, bâti sur les rives du Coulazou, entre la plaine viticole et les garrigues qui gagnent la montagne de la Moure. Son noyau médiéval, ceint de remparts au XIVe siècle, est entouré de faubourgs puis de quartiers pavillonnaires qui ont progressivement gagné sur les vignes. Architecte à Cournonterral et dans l'ouest montpelliérain, l'agence y accompagne des projets très différents : maison neuve sur un terrain en lisière de garrigue, extension d'une villa de lotissement, réhabilitation d'une maison de village sur plusieurs niveaux, transformation d'une remise ou d'un ancien chai.",
      "Sur une même parcelle, plusieurs contraintes se croisent souvent : le PPRI du Coulazou, les obligations de débroussaillement près des bois, des sols argileux sur la plus grande partie du territoire. Nous les vérifions avant de dessiner, puis nous les traduisons en choix concrets : implantation à l'écart des zones d'écoulement, fondations adaptées, végétation tenue à distance de la maison. Dans le cœur ancien, où les maisons sont étroites et mitoyennes, le travail porte plutôt sur la lumière, les planchers et la distribution. Titulaire d'un DUT de génie civil, Jean-Yves Millet évalue dès la visite ce qu'un mur ancien peut porter.",
    ],
    territoire: {
      titre: "Construire entre le Coulazou, la vigne et la garrigue",
      texte: [
        "Le territoire communal couvre près de 29 km², entre 29 et 320 mètres d'altitude. Le village s'est installé au bord du Coulazou, un cours d'eau au débit très irrégulier, qui peut grossir brutalement lors des épisodes méditerranéens. Vers l'amont, la garrigue de chênes verts couvre les reliefs et les gorges du Coulazou, inventoriées comme zone naturelle d'intérêt écologique ; vers l'aval, la plaine viticole rejoint celle de Fabrègues et de Poussan, classée en zone Natura 2000 pour ses oiseaux. La vigne reste la première production agricole de la commune.",
        "Le cœur de village garde la mémoire de ses libertés communales : le consulat accordé en 1344 s'accompagne de la construction de remparts, renforcés en 1393, et du château seigneurial subsistent deux tours dites sarrasines. Les maisons y sont hautes et serrées, avec souvent une ancienne cave ou une remise au rez-de-chaussée. L'église Saint-Pierre-et-Saint-Paul, reconstruite en 1819, le temple protestant, élevé de 1818 à 1820, et le château Mallet, du XVIIIe siècle, complètent ce patrimoine. Les lotissements, plus récents, se sont étendus vers la plaine et les premières pentes, et d'autres secteurs comme les Joncasses sont appelés à évoluer.",
        "Pour une maison neuve ou une extension, ce contexte se traduit par des choix simples : se tenir à l'écart des axes d'écoulement, préférer des volumes bas qui suivent la pente, protéger les façades sud et ouest du soleil d'été par des débords ou une treille, et garder un jardin facile à maintenir débroussaillé quand la parcelle touche la garrigue. Côté village, l'enjeu est inverse : faire entrer la lumière dans des maisons profondes, par un patio, une trémie ou une terrasse aménagée en toiture.",
      ],
    },
    projets: [
      {
        titre: "Maison vigneronne du cœur ancien",
        texte: "Une maison étroite sur trois niveaux, avec l'ancienne cave au rez-de-chaussée et des pièces sombres à l'étage. Le projet consiste souvent à transformer la cave en séjour ouvert sur une cour, à déplacer l'escalier pour mieux distribuer les niveaux, et à reprendre planchers et charpente. Le relevé précis de l'existant et le diagnostic des maçonneries précèdent toute décision.",
        expertise: "renovation",
      },
      {
        titre: "Villa en lisière de garrigue",
        texte: "Sur les parcelles qui touchent les bois, la maison est implantée pour limiter la surface à débroussailler, avec des façades et une toiture peu sensibles au feu, et des terrasses tournées vers la vue. Un plain-pied qui épouse le terrain, des murets de pierre sèche réemployés et un jardin sec composent un projet sobre, adapté au climat.",
        expertise: "maison",
      },
      {
        titre: "Extension d'une maison de lotissement",
        texte: "Beaucoup de maisons pavillonnaires manquent d'une chambre, d'une suite parentale ou d'un séjour plus généreux. L'extension se dessine dans la continuité des volumes existants, après vérification de l'emprise au sol, des reculs et de la zone du PPRI. Selon la surface créée, une déclaration préalable suffit ou un permis de construire est nécessaire.",
        expertise: "extension",
      },
      {
        titre: "Atelier ou bureau dans une ancienne remise",
        texte: "Les anciens bâtiments agricoles du village peuvent accueillir un atelier, un cabinet ou des bureaux. Ce changement de destination demande une autorisation d'urbanisme et, si le local reçoit du public, le respect des règles d'accessibilité et de sécurité incendie. Nous vérifions d'abord que le règlement de la zone l'admet, puis nous chiffrons les travaux nécessaires.",
        expertise: "professionnels",
      },
    ],
    contraintes: [
      ["Le PLUi-Climat de la Métropole", "Depuis son approbation par le conseil de Métropole le 16 juillet 2025, le PLUi-Climat fixe les règles de construction à Cournonterral comme dans les trente autres communes métropolitaines. Avant toute esquisse, nous lisons le zonage, le règlement et les orientations d'aménagement qui concernent la parcelle : hauteur, emprise, pleine terre, stationnement, aspect des façades."],
      ["Le PPRI du Coulazou", "Approuvé en 2002, le PPRI du Coulazou distingue aux abords du cours d'eau des zones rouges, où les constructions nouvelles sont très limitées, et des zones bleues soumises à prescriptions. Nous situons la parcelle sur la carte réglementaire dès le premier rendez-vous, car la hauteur du plancher, les extensions possibles et les clôtures en dépendent."],
      ["Garrigue et débroussaillement", "L'arrêté préfectoral du 8 avril 2025 range Cournonterral parmi les communes où le risque d'incendie de forêt est jugé fort. À moins de 200 mètres des bois et garrigues, le propriétaire doit débroussailler sur 50 mètres autour de la maison, et sur la totalité du terrain en zone urbaine ou en lotissement. L'implantation de la maison, de la piscine et des arbres se décide en conséquence."],
      ["Des sols argileux", "Sur environ 85 % du territoire communal, les sols argileux présentent une sensibilité moyenne ou forte au retrait et au gonflement. La loi impose dans ces secteurs une étude géotechnique à la vente d'un terrain à bâtir, et nous la recommandons aussi pour une extension : fondations plus profondes, chaînages, eaux pluviales évacuées loin des murs."],
    ],
    quartiers: ["Cœur de village", "Les Joncasses", "Le Ramassol", "Le Pioch", "La Barthe", "La Tuilerie Basse", "Le Moulin de Laude", "Mas de Paillas", "Les Peyroules", "La Cannabe"],
    faq: [
      ["Ma maison est en zone rouge du PPRI du Coulazou : puis-je l'agrandir ?", "Le règlement de la zone rouge n'interdit pas tout, mais il encadre strictement les extensions : il fixe le plus souvent une surface maximale et une hauteur minimale pour le plancher créé. La réponse dépend donc de la zone exacte et des articles du PPRI qui s'y appliquent. Nous les analysons avant d'engager l'esquisse et proposons, quand c'est possible, de gagner de la surface à l'étage plutôt qu'au sol."],
      ["Faut-il l'avis de l'Architecte des Bâtiments de France dans le vieux village ?", "La base Mérimée ne recense aucun monument historique à Cournonterral : un projet dans le cœur ancien n'est donc pas, en règle générale, soumis à l'avis de l'Architecte des Bâtiments de France. Le PLUi-Climat fixe toutefois des règles d'aspect pour les enduits, les menuiseries et les toitures, et peut repérer des éléments de patrimoine à préserver. Nous vérifions ces dispositions et la liste des servitudes avant de proposer une nouvelle ouverture ou une terrasse."],
      ["Un architecte est-il obligatoire pour ma maison à Cournonterral ?", "Pour un particulier, oui dès que la surface de plancher dépasse 150 m², y compris lorsqu'une extension fait franchir ce seuil à une maison existante. En dessous, le recours reste libre. Sur un terrain concerné à la fois par le PPRI, les argiles et le débroussaillement, un architecte à Cournonterral vous aide surtout à choisir tôt la bonne implantation et à déposer un dossier de permis complet."],
    ],
    refs: ["logement-exterieur", "logement-interieur", "industriel-agricole"],
    image: ["logement-exterieur", "14"],
  },

  // Sources : https://fr.wikipedia.org/wiki/Cournonsec ;
  // https://cournonsec.fr/vie-pratique/urbanisme/ (PLUi-Climat approuvé le 16/07/2025, dépôt en ligne GNAU) ;
  // https://www.montpellier-france.com/discover/a-thousand-years-of-history/the-cities-of-montpellier-mediterranee-metropolis/cournonsec/ ;
  // https://georisques.gouv.fr/api/v1/gaspar/pprn/34DDTM20040022 (périmètre du PPRI du Coulazou incluant la commune) ;
  // https://montpellier.fr/sites/default/files/2025-04/20250408ArreteOLD34_DDTM34-2025-04-15800.pdf (commune à risque fort) ;
  // base Mérimée (aucun monument historique) ; Base Adresse Nationale (lieux-dits)
  "cournonsec": {
    title: "Architecte à Cournonsec : maison et extension en garrigue",
    description: "Architecte à Cournonsec : maison neuve, extension ou rénovation au vieux village, avec la garrigue, les argiles et le PLUi-Climat. Parlons de votre projet.",
    accroche: "Un vieux village posé sur sa colline, des garrigues de chênes kermès semées de capitelles, une plaine viticole protégée pour ses oiseaux : à Cournonsec, chaque projet commence par la lecture du terrain.",
    urbanisme: "PLUi-Climat de Montpellier Méditerranée Métropole (2025)",
    intro: [
      "Cournonsec s'étend sur une douzaine de kilomètres carrés de garrigue et de vigne, autour d'un vieux village bâti sur une petite colline. On y trouve le château avec son horloge, l'église Saint-Christophe, le temple et des rues aux noms évocateurs, rue des Remparts ou rue de la Calade, puis des quartiers pavillonnaires plus récents qui s'étirent vers la garrigue et la plaine. En tant qu'architecte à Cournonsec, l'agence intervient sur des maisons neuves, des extensions de villas, la rénovation de maisons de village et de petits bâtiments d'activité.",
      "Le village reste à taille humaine, et les projets aussi : agrandir une maison familiale, ouvrir une maison ancienne sur un jardin, construire sur un terrain issu d'une division. Les points délicats sont connus : la garrigue proche impose le débroussaillement, les argiles couvrent environ 70 % de la commune, et une partie de la plaine appartient à une zone de protection spéciale Natura 2000. Nous les intégrons dès l'esquisse, puis nous préparons un dossier d'autorisation complet, déposé en ligne sur le guichet numérique de la Métropole.",
    ],
    territoire: {
      titre: "Un village de colline entouré de garrigue",
      texte: [
        "Le territoire, compris entre 34 et 156 mètres d'altitude, mêle garrigues de chênes verts et de chênes kermès, vignes et oliviers. Lavoirs, capitelles, clapas et murets en pierre sèche témoignent du long travail agricole mené sur ces sols caillouteux. C'est aussi sur la commune que naît la Vène, petit cours d'eau qui rejoint l'étang de Thau après une douzaine de kilomètres ; le ruisseau de la Billière traverse également le territoire. Les pelouses des Cresses sont inventoriées comme zone naturelle d'intérêt écologique, tout comme l'ensemble plus vaste du causse d'Aumelas et de la montagne de la Moure.",
        "Le vieux village a gardé une forme compacte : maisons mitoyennes autour du château et de l'église, rues étroites qui épousent la pente, petites places comme celle du Puits. L'histoire y a laissé des traces, de la prise du village par les troupes catholiques d'Henri de Montmorency le 7 avril 1622, lors de la première rébellion huguenote, à la présence d'un temple et d'un ancien cimetière protestant. Autour, des quartiers pavillonnaires plus récents accueillent aujourd'hui une grande partie des habitants, sur des parcelles plus vastes plantées de pins ou d'oliviers.",
        "Concevoir ici, c'est tirer parti de la colline et des vues sans exposer la maison au feu ni au vent : volumes bas, toitures simples, façades enduites ou en pierre, terrasses abritées. Sur les terrains en pente, les murets existants peuvent être conservés et prolongés pour tenir la terre et organiser le jardin en terrasses. L'été, l'ombre portée d'une pergola ou d'un auvent compte autant que l'épaisseur de l'isolant.",
      ],
    },
    projets: [
      {
        titre: "Maison neuve sur une parcelle divisée",
        texte: "La division de grands terrains pavillonnaires libère des lots plus petits, parfois en second rang. La maison doit alors composer avec un accès étroit, les vues sur les voisins et les règles d'implantation du PLUi-Climat. Un plan compact, un étage partiel et des ouvertures bien orientées préservent l'intimité de chacun et laissent un jardin réellement utilisable.",
        expertise: "maison",
      },
      {
        titre: "Surélévation partielle d'une villa",
        texte: "Quand le terrain ne permet plus de s'étendre au sol, une surélévation partielle ajoute une chambre ou un bureau sans réduire le jardin. Trois points sont étudiés d'abord : la hauteur permise par le règlement, la résistance des murs porteurs et des fondations sous la charge nouvelle, et les vues créées vers les voisins. Une ossature bois, plus légère, est souvent la bonne réponse sur un sol argileux.",
        expertise: "extension",
      },
      {
        titre: "Maison du vieux village",
        texte: "Dans les rues qui entourent le château, les maisons anciennes offrent des murs épais et de belles hauteurs sous plafond, mais peu de lumière et des escaliers raides. Le projet repense la distribution, ouvre une terrasse en toiture ou une cour, et améliore le confort d'été comme d'hiver avec des matériaux compatibles avec la maçonnerie ancienne.",
        expertise: "renovation",
      },
      {
        titre: "Bâtiment artisanal",
        texte: "La zone artisanale de la commune accueille des entreprises qui ont besoin d'un atelier, d'un espace de stockage et de quelques bureaux. Nous dessinons des bâtiments simples et évolutifs, avec un accès pour les livraisons, un bon éclairage naturel et une façade qui présente l'activité depuis la route. Pour une société, le recours à l'architecte est obligatoire.",
        expertise: "professionnels",
      },
    ],
    contraintes: [
      ["Le PLUi-Climat, à lire parcelle par parcelle", "Depuis son approbation en conseil de Métropole le 16 juillet 2025, c'est le PLUi-Climat qui s'applique à Cournonsec, avec les servitudes qui s'y ajoutent, comme le PPRI du Coulazou, dont le périmètre englobe la commune. Pour votre terrain, nous relevons la zone, les hauteurs, l'emprise au sol, la part de pleine terre et les éventuelles orientations d'aménagement."],
      ["Natura 2000 dans la plaine", "Une partie de la commune appartient à la zone de protection spéciale de la plaine de Fabrègues-Poussan, désignée pour des oiseaux comme l'outarde canepetière ou le rollier d'Europe. Ces terres agricoles ne sont en principe constructibles que pour les besoins d'une exploitation. Pour un hangar ou un chai, nous vérifions le zonage et la nécessité d'une évaluation des incidences."],
      ["Débroussailler autour de la maison", "Le classement départemental du risque d'incendie, fixé par arrêté préfectoral en avril 2025, place Cournonsec au niveau fort. Lorsque le terrain se trouve à moins de 200 mètres d'une garrigue, l'entretien s'impose sur 50 mètres autour des constructions, avec des arbres espacés et élagués. Rapprocher la maison de la voie peut réduire la surface à entretenir et facilite l'accès des secours."],
      ["Argiles et anciennes cavités", "Près de 70 % de la commune repose sur des argiles sensibles à la sécheresse, avec un aléa jugé moyen ou fort, et Géorisques mentionne aussi des affaissements possibles liés à d'anciennes carrières souterraines. L'étude de sol, obligatoire à la vente d'un terrain constructible exposé, sert de base au dimensionnement des fondations ; nous la faisons compléter si le projet évolue."],
    ],
    quartiers: ["Vieux village", "Saint-Martin", "La Cressa", "Lous Lavals", "Lous Pelegres", "Pioch Tourel", "Mas de Plagnol", "Peyre Plantade"],
    faq: [
      ["Peut-on construire une piscine sur un terrain proche de la garrigue ?", "Oui en général, si le règlement de la zone l'autorise et si l'emprise au sol reste dans les limites fixées. Une piscine ne dispense pas du débroussaillement, mais une plage minérale et un jardin peu combustible autour du bassin participent à la protection de la maison. Au-delà de 10 m² de bassin, une déclaration préalable est au minimum nécessaire ; nous l'intégrons au dossier de la maison quand c'est possible."],
      ["Que change le PLUi-Climat pour un projet à Cournonsec ?", "Le PLU communal a laissé place au PLUi-Climat métropolitain, approuvé en juillet 2025, et les règles ont été réécrites à l'échelle des 31 communes, autour de la sobriété foncière et de l'adaptation au climat. Un terrain constructible hier peut donc obéir aujourd'hui à d'autres règles. Avant d'acheter ou de déposer un permis, un certificat d'urbanisme et la lecture du règlement par un architecte à Cournonsec évitent les mauvaises surprises."],
      ["Puis-je construire un abri ou un hangar sur ma parcelle de vigne ?", "Dans la plaine agricole, les constructions sont réservées aux besoins d'une exploitation, et une partie de ces terres se trouve en zone Natura 2000. Un abri ou un cabanon sur une parcelle agricole, sans activité agricole, est donc en principe refusé. Si vous êtes exploitant, nous montons le dossier en justifiant le besoin, l'implantation et l'intégration du bâtiment dans le paysage."],
    ],
    refs: ["logement-exterieur", "plans-recherche", "tertiaire"],
    image: ["tertiaire", "07"],
  },

  // Sources : https://fr.wikipedia.org/wiki/Fabr%C3%A8gues ;
  // https://www.fabregues.fr/la-ville/decouvrir-fabregues/lhistoire-de-fabregues/ ;
  // https://www.fabregues.fr/le-cadre-de-vie/les-grands-projets/ (rehaussement des digues 2026-2027) ;
  // base Mérimée : PA00103449 (église Saint-Jacques, inscrite 1947), PA00103450 (oppidum de la Roque, classé 1960), PA00103770 (Vieux Mujolan, inscrit 1991) ;
  // https://georisques.gouv.fr/api/v1/gaspar/pprn/34DDTM20040022 (PPRI du Coulazou, approuvé le 23/09/2002) ;
  // https://montpellier.fr/sites/default/files/2025-04/20250408ArreteOLD34_DDTM34-2025-04-15800.pdf ;
  // https://data.montpellier3m.fr/dataset/plui-climat-des-communes-de-montpellier-mediterranee-metropole
  "fabregues": {
    title: "Architecte à Fabrègues : construire au pied de la Gardiole",
    description: "Architecte à Fabrègues : maison neuve, extension ou rénovation dans la circulade, en intégrant le PPRI, les argiles et la Gardiole. Parlons de votre projet.",
    accroche: "Une circulade médiévale au pied de la Gardiole, deux cours d'eau, la Mosson et le Coulazou, et des quartiers récents : à Fabrègues, le terrain et l'eau orientent chaque projet.",
    urbanisme: "PLUi-Climat de Montpellier Méditerranée Métropole (2025)",
    intro: [
      "Fabrègues s'est développée au pied de la montagne de la Gardiole, le long de l'ancienne route royale devenue RN 113, aujourd'hui RD 613. Le village, qui comptait moins de 1 800 habitants en 1968, en accueille désormais plus de 7 000 : autour de la circulade des XIe et XIIe siècles se sont ajoutés des faubourgs, puis des lotissements entre plaine et garrigue. Architecte à Fabrègues, l'agence dessine ici aussi bien une maison neuve qu'une extension de villa, la rénovation d'une maison ancienne du quartier haut ou un projet pour l'un des domaines viticoles de la commune.",
      "Ici, le premier sujet est souvent l'eau : la commune relève du PPRI du Coulazou, et des travaux de rehaussement des digues sont programmés en 2026 et 2027. Le deuxième est le sol, argileux sur près de 87 % du territoire. Le troisième est le patrimoine : l'église Saint-Jacques, inscrite au titre des monuments historiques, place une partie du centre sous le regard de l'Architecte des Bâtiments de France. Nous examinons ces trois points avant de dessiner, pour éviter les mauvaises surprises au moment de l'instruction.",
    ],
    territoire: {
      titre: "Entre la Gardiole, la Mosson et le Coulazou",
      texte: [
        "Le territoire couvre 31 km², de 10 à 224 mètres d'altitude, et plus de la moitié en est boisée ou semi-naturelle. Sur les reliefs, les garrigues de la Gardiole et de la Lauze sont inventoriées pour leur richesse écologique ; de l'autre côté du village, la plaine viticole fait partie de la zone Natura 2000 de la plaine de Fabrègues-Poussan. La Mosson et le Coulazou se rejoignent sur la commune, au pied de l'oppidum de la Roque, occupé dès l'âge du fer et classé monument historique en 1960.",
        "Le centre ancien conserve la forme d'une circulade : des rues concentriques autour du quartier haut, où se dressait le castellas que le seigneur Guillaume de Fabrègues quitta en 1096 pour la croisade. L'église Saint-Jacques, dont la base du clocher remonte au XIIe siècle, en marque le cœur. Le village a longtemps été un lieu de passage, sur la voie Domitienne et le chemin de Saint-Jacques, puis une commune viticole. Hors du village, des domaines anciens jalonnent le territoire : le Vieux Mujolan, avec sa tour et son ancien prieuré, Launac ou Mirabeau.",
        "Les maisons de la circulade sont mitoyennes et profondes, et leurs façades suivent la courbe des rues. Les faubourgs et les quartiers récents offrent des parcelles plus larges, parfois en pente vers la Gardiole, parfois en bordure des cours d'eau. Concevoir à Fabrègues, c'est donc choisir au cas par cas : gagner de la surface en hauteur plutôt qu'au sol en zone inondable, ouvrir sur une cour en cœur de village, orienter la maison vers les vues et l'ombre sur les coteaux.",
      ],
    },
    projets: [
      {
        titre: "Maison du quartier haut",
        texte: "Dans la circulade, une maison de village sur deux ou trois niveaux se prête à une rénovation complète : reprise des planchers, nouvel escalier, salle d'eau à chaque étage, terrasse en toiture quand le règlement le permet. Menuiseries, enduits et couleurs sont choisis en accord avec le PLUi et, dans les abords de l'église, avec l'Architecte des Bâtiments de France.",
        expertise: "renovation",
      },
      {
        titre: "Agrandir en zone bleue du PPRI",
        texte: "Pour une maison située en zone bleue, l'extension se conçoit avec un plancher surélevé au-dessus du niveau d'eau retenu par le PPRI, des matériaux qui supportent l'eau en partie basse et des réseaux placés en hauteur. Agrandir par l'étage permet souvent de créer un espace refuge tout en gagnant des chambres. Le règlement du PPRI fixe ce qui est admis, et nous le suivons article par article.",
        expertise: "extension",
      },
      {
        titre: "Maison sur les coteaux de la Gardiole",
        texte: "Sur les terrains en pente proches des garrigues, la maison s'étage pour limiter les terrassements, profite des vues vers la plaine et intègre le débroussaillement dans son plan de masse. Une étude géotechnique oriente les fondations, et les murs de soutènement deviennent des terrasses. L'orientation et les protections solaires assurent le confort d'été sans recourir à une climatisation lourde.",
        expertise: "maison",
      },
      {
        titre: "Chai ou bâtiment de domaine",
        texte: "Chai, caveau de vente ou réhabilitation d'un bâtiment de domaine : les projets agricoles se jouent en zone agricole ou naturelle, avec des règles propres et parfois la présence d'un édifice protégé, comme au Vieux Mujolan. Nous vérifions le zonage, l'accès, l'assainissement et les attentes de l'Architecte des Bâtiments de France avant de déposer le permis.",
        expertise: "professionnels",
      },
    ],
    contraintes: [
      ["PPRI du Coulazou et digues", "À Fabrègues, les règles de construction près des cours d'eau sont fixées par le plan de prévention des risques d'inondation du bassin du Coulazou, approuvé en septembre 2002. Les digues des Campanelles et de la Plantade et le mur du Merdanson font l'objet d'un rehaussement en 2026 et 2027, pour protéger environ 310 logements. Ces travaux réduisent le risque, mais c'est le PPRI en vigueur qui fixe les règles : nous situons toujours le terrain sur sa carte."],
      ["Trois monuments historiques", "L'église Saint-Jacques, inscrite en 1947, l'oppidum de la Roque, classé en 1960, et le domaine du Vieux Mujolan, inscrit en 1991, sont protégés. Dans un rayon de 500 mètres, les travaux visibles en même temps que le monument nécessitent l'accord de l'Architecte des Bâtiments de France, et le délai d'instruction est majoré. Nous préparons alors un dossier précis : matériaux, couleurs, détails de menuiserie."],
      ["Argiles sur 87 % du territoire", "Les argiles gonflantes concernent environ 87 % de la superficie, à un niveau moyen ou fort, et la quasi-totalité des bâtiments de la commune y est exposée. Pour une maison neuve comme pour une extension, nous recommandons une étude de sol, des fondations adaptées, une séparation franche entre l'existant et l'agrandissement, et des arbres plantés à bonne distance."],
      ["La garrigue de la Gardiole", "Dans l'arrêté départemental d'avril 2025 sur le débroussaillement, Fabrègues figure parmi les communes au risque d'incendie le plus élevé. Les maisons situées à moins de 200 mètres des massifs doivent être entourées d'une bande entretenue de 50 mètres, et les terrains en zone urbaine doivent l'être en totalité. Le plan de masse en tient compte : accès, piscine, haies, choix des essences."],
    ],
    quartiers: ["Circulade et quartier haut", "Les Campanelles", "La Plantade", "Mujolan", "Launac-le-Vieux", "Agnac", "La Roque", "Mirabeau", "Le Pountiou", "Saint-Baudile"],
    faq: [
      ["Les digues rehaussées rendent-elles mon terrain constructible ?", "Pas automatiquement. Les travaux sur les digues des Campanelles, de la Plantade et du Merdanson améliorent la protection des quartiers exposés, mais le zonage du PPRI reste celui qui a été approuvé tant que l'État ne l'a pas révisé ou modifié. Un terrain en zone rouge le reste donc juridiquement. Nous vérifions la zone et le règlement applicables à la date de votre projet, et suivons l'évolution éventuelle du document."],
      ["Ma maison est dans la circulade : faut-il l'accord de l'Architecte des Bâtiments de France ?", "Si la maison se trouve dans les abords de l'église Saint-Jacques, ce qui concerne une grande partie du centre ancien, les travaux sur l'aspect extérieur demandent son accord et l'instruction est allongée. Changer des fenêtres, refaire un enduit ou créer une terrasse en toiture entrent dans ce cadre. Un échange en amont, plans et échantillons à l'appui, évite souvent un refus ou des prescriptions tardives."],
      ["Combien de temps pour obtenir un permis à Fabrègues ?", "Le délai légal d'instruction est d'un mois pour une déclaration préalable, de deux mois pour le permis d'une maison individuelle et de trois mois pour les autres permis. Il est majoré lorsque l'Architecte des Bâtiments de France doit être consulté, ce qui est fréquent dans le centre. Un architecte à Fabrègues vous aide à déposer un dossier complet, avec une notice claire sur la prise en compte du PPRI, pour éviter les demandes de pièces qui suspendent l'instruction."],
    ],
    refs: ["logement-exterieur", "logements-collectifs", "plans-recherche"],
    image: ["logement-exterieur", "42"],
  },

  // Sources : https://fr.wikipedia.org/wiki/Saint-Jean-de-V%C3%A9das (quartiers fixés en 2015, zones d'activités, risques) ;
  // base Mérimée : PA34000098 (pont sur la Mosson, RD 612, inscrit 2012) ;
  // https://georisques.gouv.fr/api/v1/gaspar/pprn/34DDTM20040020 (PPRI basse vallée de la Mosson, approuvé le 18/02/2002) ;
  // https://www.mrae.developpement-durable.gouv.fr/IMG/pdf/avis_mrae_2021apo71.pdf (ZAC Roque-Fraïsse) ;
  // https://montpellier.fr/sites/default/files/2025-04/20250408ArreteOLD34_DDTM34-2025-04-15800.pdf ;
  // https://data.montpellier3m.fr/dataset/plui-climat-des-communes-de-montpellier-mediterranee-metropole
  "saint-jean-de-vedas": {
    title: "Architecte à Saint-Jean-de-Védas : maisons et bureaux",
    description: "Architecte à Saint-Jean-de-Védas : maison, surélévation ou locaux d'activité, avec le PLUi-Climat, la Mosson et les argiles en tête. Parlons de votre projet.",
    accroche: "Aux portes de Montpellier, entre la Mosson, le Rieucoulon et les garrigues de la Lauze, la commune mêle cœur de village, quartiers pavillonnaires, ZAC récente et zones d'activités.",
    urbanisme: "PLUi-Climat de Montpellier Méditerranée Métropole (2025)",
    intro: [
      "Commune de plus de 13 000 habitants au sud-ouest de Montpellier, Saint-Jean-de-Védas est reliée à la ville par le tramway, dont la ligne 2 a son terminus au centre. Le village historique, autour de l'église et du château du Terral, est entouré de quartiers pavillonnaires, de la ZAC de Roque-Fraïsse et de zones d'activités comme La Lauze, Marcel Dassault ou le Mas de Grille. Architecte à Saint-Jean-de-Védas, l'agence intervient aussi bien sur la maison d'un particulier que sur des bureaux, des locaux d'activité ou un petit programme de logements.",
      "Les terrains y sont rarement vierges : on agrandit, on surélève, on construit sur une parcelle divisée, on transforme un local. Chaque projet se confronte aux règles du PLUi-Climat, au PPRI de la Mosson dans les secteurs concernés, et à des sols argileux sur plus de 90 % du territoire. L'expérience de l'agence dans la conduite de programmes de logements et de bâtiments professionnels sert ici : dimensionner une opération, anticiper le stationnement et l'accessibilité, organiser un chantier dans un quartier habité.",
    ],
    territoire: {
      titre: "Une commune entre Mosson, Rieucoulon et garrigues de la Lauze",
      texte: [
        "Le territoire est compact, à peine 13 km², entre 4 et 65 mètres d'altitude. Des collines douces montent vers la Gardiole ; le Rieucoulon longe la limite avec Montpellier, la Mosson borde la commune à l'ouest et au sud. Les garrigues de la Lauze et la vallée de la Mosson sont inventoriées pour leur intérêt écologique. Le sous-sol calcaire a longtemps été exploité : la pierre extraite ici a servi à bâtir de nombreux immeubles du centre de Montpellier, et d'anciennes carrières sont devenues le parc de la Peyrière.",
        "Le village est cité dès le XIe siècle sous le nom de Villa de Védatio. Jusqu'à la Révolution, le territoire relevait de deux juridictions, Saint-Jean-de-Védas et le Terral, domaine des évêques de Maguelone dont le château abrite aujourd'hui le théâtre du Chai du Terral et les écoles municipales de musique et d'arts plastiques. L'autoroute A9, ouverte fin 1967, le développement commercial puis la ZAC de Roque-Fraïsse ont profondément transformé la commune, sans effacer son cœur de village.",
        "Les formes urbaines sont donc très variées : maisons de village mitoyennes, villas sur des parcelles de taille moyenne, collectifs récents, bâtiments d'activité au sud de l'A9. Le conseil municipal a défini huit quartiers, du Centre-village à La Fermaude et La Coustaude. Pour une extension, cela suppose de lire de près les règles d'implantation et de hauteur de chaque secteur, et de soigner les vis-à-vis dans un tissu où les jardins se touchent.",
      ],
    },
    projets: [
      {
        titre: "Surélévation d'une villa de plain-pied",
        texte: "Dans les quartiers pavillonnaires proches du centre et du tramway, surélever une maison de plain-pied permet de gagner des chambres sans toucher au jardin. L'étude porte sur la structure existante, les fondations sur sol argileux, la hauteur autorisée et les vues sur les voisins. Une ossature légère et un chantier organisé par phases limitent la gêne pour la famille.",
        expertise: "extension",
      },
      {
        titre: "Seconde maison sur une parcelle divisée",
        texte: "La division d'un grand terrain permet de construire une seconde maison, à condition de respecter les règles d'accès, de stationnement, d'emprise et de pleine terre du PLUi-Climat. La nouvelle maison est pensée en fonction de la première : orientation, intimité, accès partagé ou distinct. Nous vérifions la faisabilité avant même l'intervention du géomètre.",
        expertise: "maison",
      },
      {
        titre: "Locaux d'activité à La Lauze ou Marcel Dassault",
        texte: "Artisans, négoces et entreprises de services recherchent des bâtiments mêlant atelier, stockage et bureaux. Nous organisons les flux, l'accès des véhicules, la sécurité incendie et l'accessibilité, et dessinons une façade lisible depuis la voie. Pour une société, l'intervention d'un architecte est requise pour le permis, quelle que soit la surface du bâtiment.",
        expertise: "professionnels",
      },
      {
        titre: "Petit collectif ou maisons groupées",
        texte: "Sur une parcelle bien desservie, quelques logements peuvent remplacer une maison ancienne. Le projet doit concilier densité, stationnement, espaces plantés et insertion dans la rue. La pratique des programmes de logements collectifs aide à cadrer le nombre de logements, l'économie de l'opération et les échanges avec la commune et la Métropole.",
        expertise: "professionnels",
      },
    ],
    contraintes: [
      ["Le PLUi-Climat, secteur par secteur", "Le PLUi-Climat approuvé le 16 juillet 2025 a remplacé le PLU communal. Selon que la parcelle se trouve au Centre-village, à Roque-Fraïsse ou dans un quartier pavillonnaire, les hauteurs, les reculs et la part de pleine terre exigée changent. La lecture du règlement et des orientations d'aménagement est le point de départ de toute esquisse."],
      ["La Mosson et le PPRI", "Approuvé en février 2002, le PPRI de la basse vallée de la Mosson s'applique à la commune, qui a connu plusieurs arrêtés de catastrophe naturelle pour inondation, notamment en 2014 et en 2019. Sur une parcelle réglementée, nous adaptons le niveau des planchers, la transparence des clôtures à l'écoulement et l'emprise des constructions."],
      ["Argiles sur plus de 90 % du territoire", "Sur plus de 90 % de la commune, le sol argileux se rétracte en période sèche et gonfle à l'humidité, avec un aléa qualifié de moyen ou fort. Les fissures apparaissent souvent à la jonction entre une maison et son agrandissement : nous prévoyons une coupure structurelle, des fondations calculées à partir de l'étude géotechnique et des descentes d'eaux pluviales éloignées du pied des murs."],
      ["Le pont sur la Mosson", "Le pont de la route départementale 612 sur la Mosson, construit en 1778, est inscrit monument historique depuis 2012. Dans un rayon de 500 mètres, un projet en covisibilité avec l'ouvrage est soumis à l'accord de l'Architecte des Bâtiments de France. Ni le château du Terral ni l'église ne figurent dans la base Mérimée, mais le PLUi peut repérer des éléments de patrimoine à préserver."],
      ["Garrigues de la Lauze et débroussaillement", "L'arrêté préfectoral d'avril 2025 sur les obligations de débroussaillement classe Saint-Jean-de-Védas parmi les communes à fort risque d'incendie. Les terrains situés à moins de 200 mètres des garrigues doivent être débroussaillés sur 50 mètres autour des constructions, ou en totalité en zone urbaine, en ZAC ou en lotissement. Nous en tenons compte dans le choix et l'emplacement des plantations."],
    ],
    quartiers: ["Centre-village", "L'Ortet", "Les Coteaux", "Le Terral", "La Marquerose", "Mameremonte", "Les Roudères", "Saint-Jean-le-Sec", "La Lauze", "Roque-Fraïsse", "La Condamine", "La Fermaude"],
    faq: [
      ["Puis-je diviser mon terrain pour construire une seconde maison ?", "C'est possible si le lot issu de la division respecte le règlement du PLUi-Climat : accès, stationnement, emprise au sol, part de pleine terre, distances aux limites. La division elle-même passe par une déclaration préalable ou un permis d'aménager selon les cas. Nous testons d'abord l'implantation d'une maison réaliste sur le futur lot, pour vérifier que l'opération a du sens avant d'engager des frais de géomètre."],
      ["Ma maison est proche de la Mosson : comment savoir si le PPRI me concerne ?", "La carte réglementaire du PPRI de la basse vallée de la Mosson, consultable en mairie, sur le site de la préfecture et sur Géorisques, indique si la parcelle est dans une zone réglementée. Le règlement associé précise ce qui est permis : extension, annexe, piscine, clôture. Nous croisons cette lecture avec celle du PLUi-Climat avant le premier croquis, car les deux documents s'appliquent ensemble."],
      ["Faut-il un architecte pour une surélévation ?", "Si la surface de plancher totale de la maison dépasse 150 m² après travaux, oui : le recours à un architecte devient obligatoire pour le permis. En dessous, ce n'est pas obligatoire, mais une surélévation engage la structure de la maison, sa toiture et son étanchéité ; un architecte à Saint-Jean-de-Védas vous aide à évaluer ce que la maison peut porter et à obtenir l'autorisation adaptée."],
    ],
    refs: ["logements-collectifs", "tertiaire", "logement-exterieur"],
    image: ["logements-collectifs", "04"],
  },

  // Sources : https://fr.wikipedia.org/wiki/Gignac_(H%C3%A9rault) ;
  // https://www.ville-gignac.com/ma-ville/decouvrir-gignac/patrimoine/ ;
  // https://www.ville-gignac.com/actualites/avis-de-revision-du-plan-local-durbanisme/ (révision générale prescrite le 29/09/2026) ;
  // https://www.mrae.developpement-durable.gouv.fr/IMG/pdf/2020ao60.pdf (PLU approuvé le 11/09/2012) ;
  // https://www.mrae.developpement-durable.gouv.fr/IMG/pdf/decision_mrae_2022dko155.pdf (modification n° 1, ZAC de la Croix) ;
  // https://www.ville-gignac.com/wp-content/uploads/2026/06/dicrim.pdf (DICRIM : inondation, feu de forêt, barrage du Salagou) ;
  // https://georisques.gouv.fr/api/v1/gaspar/pprn/34DDTM20040027 (PPRI haute vallée de l'Hérault sud, approuvé le 11/06/2007) ;
  // base Mérimée (8 protections) ; https://www.banatic.interieur.gouv.fr/intercommunalite/243400694 (siège à Camalcé)
  "gignac": {
    title: "Architecte à Gignac : centre ancien, maison, activité",
    description: "Architecte à Gignac, près de Montarnaud : rénovation au centre ancien, maison neuve ou local d'activité, avec le PPRI et les monuments. Parlons de votre projet.",
    accroche: "Riche de monuments, entourée de vignes irriguées par son canal et adossée aux garrigues, Gignac demande des projets attentifs au patrimoine, au fleuve Hérault et à la nature du sol.",
    urbanisme: "PLU communal (révision générale prescrite en 2026)",
    intro: [
      "Siège de la communauté de communes Vallée de l'Hérault, Gignac se trouve à proximité de notre agence de Montarnaud. Son centre ancien, autrefois fortifié, réunit hôtels particuliers, églises et tours médiévales ; autour se sont développés des quartiers résidentiels et des zones d'activités comme La Croix ou Camalcé. Architecte à Gignac, l'agence accompagne la réhabilitation de maisons de ville, la construction de maisons neuves, les extensions et les bâtiments professionnels, de la première esquisse à la réception du chantier selon la mission confiée.",
      "La proximité de l'agence compte pour un projet suivi sur place, mais l'essentiel est ailleurs : connaître les contraintes propres à Gignac. Huit protections au titre des monuments historiques, un plan de prévention du risque inondation le long du fleuve, des sols argileux sur tout le territoire, la garrigue au nord et sur les massifs voisins, et un PLU dont la révision générale vient d'être prescrite. Nous vérifions ces éléments dès le premier rendez-vous, pour bâtir un projet réaliste et le présenter clairement à l'Architecte des Bâtiments de France et au service instructeur.",
    ],
    territoire: {
      titre: "Entre le fleuve Hérault, la plaine irriguée et les garrigues",
      texte: [
        "Le territoire, de 28 à 286 mètres d'altitude, est bordé par l'Hérault, que franchit le pont de Gignac, commencé en 1776, achevé en 1810 et inscrit monument historique. Le canal de Gignac, creusé à la fin du XIXe siècle, irrigue environ 1 800 hectares, principalement de vignes. Au nord, les hautes garrigues annoncent le Larzac ; à l'est s'élève le massif de la Taillade, à l'ouest celui du Liausson. Le fleuve et ses rives appartiennent au site Natura 2000 des gorges de l'Hérault.",
        "Le bourg s'est formé autour d'un castrum mentionné dès le XIIe siècle. De son enceinte subsistent la tour de l'Horloge et des vestiges de remparts autour de la porte du Portalet ; la tour du Castellas, du XIIIe siècle, est le seul vestige visible du castrum. Les XVIIe et XVIIIe siècles ont laissé de belles façades, comme celles de l'église Saint-Pierre, dont le clocher s'effondra en 1738, ou de Notre-Dame-de-Grâce, achevée en 1648 sur sa colline et précédée d'un chemin de croix de quatorze stations ; l'hôtel de Laurès et l'ancien hospice comptent aussi parmi les édifices protégés.",
        "Hors du centre, la ville s'est étendue en quartiers pavillonnaires vers les coteaux et la plaine, et en zones d'activités le long de l'A750, qui franchit l'Hérault par le pont du Languedoc depuis 2008. Construire ici, c'est composer avec la chaleur estivale et la lumière forte de la vallée : maisons compactes, enduits clairs, débords et treilles, jardins économes en eau. Dans le centre, la priorité va à la lumière et à la ventilation de maisons serrées, sans dénaturer les façades.",
      ],
    },
    projets: [
      {
        titre: "Maison de ville du centre ancien",
        texte: "Grand Rue, rue de la Cour ou autour de la place du Planol, les maisons anciennes ont souvent des pièces profondes, une cour étroite et des étages peu exploités. Réhabiliter, c'est reprendre la structure, redistribuer les niveaux, créer des salles d'eau et améliorer le confort thermique, tout en respectant façades, menuiseries et enduits, que l'Architecte des Bâtiments de France examine dans les abords des monuments.",
        expertise: "renovation",
      },
      {
        titre: "Maison neuve sur les coteaux",
        texte: "En périphérie, sur des terrains en pente tournés vers la vallée, la maison s'implante pour limiter les déblais, protéger le séjour du soleil d'ouest et dégager la vue. L'étude de sol, indispensable sur ces argiles, et la protection contre l'incendie à proximité des garrigues orientent le plan de masse dès l'esquisse.",
        expertise: "maison",
      },
      {
        titre: "Local d'activité à Camalcé ou à La Croix",
        texte: "Artisans, commerces et entreprises de services s'installent dans les zones d'activités de Gignac, bien reliées à Montpellier et à Clermont-l'Hérault par l'A750. Nous concevons des bâtiments fonctionnels réunissant atelier, stockage, bureaux et accueil du public. L'accessibilité, la sécurité incendie et le règlement de la zone, notamment celui de la ZAC de la Croix, sont intégrés dès la conception.",
        expertise: "professionnels",
      },
      {
        titre: "Suite parentale pour une maison de plain-pied",
        texte: "Dans les quartiers résidentiels, beaucoup de maisons de plain-pied gagnent à recevoir une suite parentale, un bureau ou un séjour prolongé par une terrasse couverte. L'extension se raccorde à la toiture existante ou adopte un volume distinct, plus contemporain ; dans les deux cas, ses fondations sont désolidarisées de celles de la maison, car toute la commune est exposée aux argiles.",
        expertise: "extension",
      },
    ],
    contraintes: [
      ["Un PLU en révision", "Le PLU de Gignac, approuvé en 2012, a déjà évolué, notamment pour la ZAC de la Croix. Le conseil municipal a prescrit sa révision générale le 29 septembre 2026. Pendant la procédure, le PLU actuel s'applique ; après le débat sur le projet d'aménagement et de développement durables, un sursis à statuer peut toutefois être opposé à un projet qui compromettrait le futur plan."],
      ["Huit monuments historiques", "Notre-Dame-de-Grâce, classée, et son chemin de croix, l'église Saint-Pierre, l'hospice, l'hôtel de Laurès, le site du Castellas, le pont sur l'Hérault et le mas de Rieussec sont protégés. Leurs abords couvrent une grande partie de la ville : les travaux extérieurs y demandent souvent l'accord de l'Architecte des Bâtiments de France, avec un délai majoré. Nous préparons façades, détails et échantillons pour cet échange."],
      ["Le fleuve et le PPRI", "Le DICRIM situe le risque d'inondation le long de l'Hérault, encadré par le plan de prévention de la haute vallée de l'Hérault, approuvé en 2007. Gignac se trouve aussi dans la zone atteinte en moins d'une heure en cas de rupture du barrage du Salagou. Pour un terrain proche du fleuve, nous vérifions la zone réglementaire avant toute esquisse et adaptons le projet."],
      ["Incendie et argiles", "Le DICRIM signale le risque d'incendie au Mas de Navas et à la Combe Salinière, et la commune est classée à risque fort par l'arrêté préfectoral de 2025 : débroussaillement sur 50 mètres autour des constructions, ou sur toute la parcelle en zone urbaine. Toute la commune est par ailleurs en aléa moyen ou fort pour les argiles : une étude de sol oriente les fondations."],
    ],
    quartiers: ["Centre historique", "Notre-Dame-de-Grâce", "Le Riveral", "Mas Salat", "La Croix", "Camalcé", "Les Armillières", "Mas de Navas", "Pélican", "Pioch Courbi", "Carcarès"],
    faq: [
      ["La révision du PLU lancée en 2026 peut-elle bloquer mon permis ?", "Tant que le nouveau PLU n'est pas approuvé, votre demande est instruite selon le PLU en vigueur. Mais une fois que le conseil municipal a débattu des orientations du futur plan, l'autorité compétente peut surseoir à statuer sur un projet qui compromettrait ou rendrait plus onéreuse son exécution. Pour un projet important, nous suivons l'avancement de la procédure et pouvons conseiller de déposer tôt, ou d'adapter le projet aux orientations annoncées."],
      ["Où déposer ma demande de permis de construire à Gignac ?", "Les autorisations d'urbanisme se déposent en ligne sur le portail intercommunal de la Vallée de l'Hérault, accessible depuis le site de la ville. Le dossier est ensuite instruit dans le délai légal : un mois pour une déclaration préalable, deux mois pour le permis d'une maison individuelle, davantage dans les abords d'un monument. Lorsque la mission le prévoit, nous constituons et déposons le dossier pour vous, puis répondons aux demandes du service instructeur."],
      ["Un architecte est-il utile pour un petit projet dans le centre ancien ?", "Même sous le seuil de 150 m² au-delà duquel il est obligatoire, un architecte à Gignac est utile dès qu'un projet touche une façade située dans les abords d'un monument : fenêtre agrandie, terrasse, enduit. L'accord de l'Architecte des Bâtiments de France se prépare avec des plans précis, des références et parfois des échantillons. L'agence, installée tout près à Montarnaud, peut aussi suivre les travaux sur place."],
    ],
    refs: ["logements-collectifs", "logement-interieur", "tertiaire"],
    image: ["logements-collectifs", "12"],
  },

  // Sources : https://fr.wikipedia.org/wiki/Saint-Andr%C3%A9-de-Sangonis ;
  // https://saintandredesangonis.fr/urbanisme/ (révision générale du PLU approuvée le 12/12/2019, portail CCVH, opération « Faites le mur ») ;
  // https://saintandredesangonis.fr/tourisme/ (castrum épiscopal, filatures, Cambous, Sainte-Brigitte) ;
  // https://www.mrae.developpement-durable.gouv.fr/IMG/pdf/avis_mrae_2019ao63.pdf (ZAC des Hauts du Puech, AOC Terrasses du Larzac, servitude AC1 du pont, PPRI 2007) ;
  // https://georisques.gouv.fr/api/v1/gaspar/pprn/34DDTM20040027 ; Géoportail de l'urbanisme (PLU en vigueur) ; Base Adresse Nationale
  "saint-andre-de-sangonis": {
    title: "Architecte à Saint-André-de-Sangonis : maison, extension",
    description: "Architecte à Saint-André-de-Sangonis : maison, extension ou rénovation au centre ancien, avec le PPRI de l'Hérault et les argiles. Parlons de votre projet.",
    accroche: "Entre l'Hérault et la Lergue, dans une plaine viticole tournée vers le pic Saint-Baudille et le Liausson, la commune réunit un centre ancien, deux hameaux et des quartiers récents.",
    urbanisme: "PLU communal (révision générale approuvée en 2019)",
    intro: [
      "Saint-André-de-Sangonis est une commune de la vallée de l'Hérault, desservie par l'A750, dont le village s'est formé autour d'un castrum des évêques de Lodève cité au XIIIe siècle. Le centre ancien, ses faubourgs, les hameaux de Cambous et de Sainte-Brigitte et des quartiers récents comme les Hauts du Puech composent une commune résidentielle restée très agricole. Architecte à Saint-André-de-Sangonis, l'agence prend en charge des maisons neuves et des agrandissements, rénove des maisons de village et conçoit des bâtiments pour les domaines viticoles ou les entreprises.",
      "Les projets y rencontrent des questions précises : le risque d'inondation lié à l'Hérault, à la Lergue et au ruisseau de Lagamas, des argiles sur plus de 80 % du territoire, les abords du pont de Gignac, monument inscrit dont la servitude s'étend sur la rive de Saint-André, et un PLU révisé en 2019. Nous les vérifions avant de dessiner. Une fois le projet arrêté, nous montons le dossier d'autorisation, déposé sur le guichet en ligne de l'intercommunalité, dont le service instruit les permis de construire.",
    ],
    territoire: {
      titre: "Une plaine viticole entre Hérault et Lergue",
      texte: [
        "Le territoire, peu élevé, de 26 à 122 mètres d'altitude, est drainé par l'Hérault, la Lergue et plusieurs ruisseaux, dont le Lagamas. Plus des quatre cinquièmes des sols sont agricoles et la vigne domine ; une partie des parcelles relève de l'appellation Languedoc Terrasses du Larzac. Depuis la plaine, les vues portent vers le pic Saint-Baudille, le pic de Vissou et le mont Liausson. Les rives de l'Hérault et la vallée de la Lergue sont inventoriées pour leur intérêt écologique, et le fleuve fait partie du site Natura 2000 des gorges de l'Hérault.",
        "Le village est cité dès 934. Autour du castrum épiscopal, il s'est entouré d'une enceinte et de fossés, comblés à la fin du XVIIIe siècle ; il en reste la tour de l'Horloge et d'anciennes portes près de la place de la Fontaine. La soie, avec trois grandes filatures vers 1770, et le passage ouvert par le pont de Gignac ont fait sa prospérité. La grande église Saint-André, reconstruite à la fin du XIXe siècle, domine le centre de son haut clocher. Les anciennes communes de Cambous et de Sainte-Brigitte ont été rattachées pendant la Révolution.",
        "Aujourd'hui, la commune juxtapose un centre ancien dense, aux maisons mitoyennes sur plusieurs niveaux, des faubourgs et des lotissements, des hameaux et des mas isolés dans la vigne. Pour concevoir ici, il faut penser à la chaleur d'été dans une plaine peu ombragée, à l'eau qui ruisselle lors des orages et à des sols qui gonflent et se rétractent : volumes compacts, protections solaires, abords perméables, fondations adaptées.",
      ],
    },
    projets: [
      {
        titre: "Façade et intérieur d'une maison du centre",
        texte: "Dans le périmètre de l'opération de rénovation des façades « Faites le mur », une maison ancienne peut bénéficier d'une aide pour son enduit et ses menuiseries. Nous coordonnons ce volet avec la rénovation intérieure : distribution, isolation compatible avec les murs anciens, confort d'été, création d'une terrasse ou d'un patio quand la parcelle le permet.",
        expertise: "renovation",
      },
      {
        titre: "Maison dans un quartier récent",
        texte: "Dans les quartiers en extension, comme la ZAC des Hauts du Puech, la maison est orientée pour capter le soleil d'hiver et s'en protéger l'été : séjour traversant, débords de toiture, brise-soleil sur les baies exposées au couchant, jardin planté d'arbres d'ombrage. Un plan simple et compact maîtrise le coût de construction et facilite le respect de la RE2020.",
        expertise: "maison",
      },
      {
        titre: "Agrandir une maison de la plaine",
        texte: "Ajouter une chambre, transformer un garage en pièce de vie ou créer une véranda bien orientée : avant de dessiner, nous vérifions si le terrain est concerné par le PPRI et quelle emprise reste disponible au regard du PLU. Sur ces sols argileux, le nouveau volume repose sur des fondations indépendantes de celles de la maison existante.",
        expertise: "extension",
      },
      {
        titre: "Chai ou caveau pour un domaine",
        texte: "Les domaines de la plaine ont besoin de chais fonctionnels, de caveaux de vente ou d'espaces d'accueil. Le bâtiment doit organiser le travail des vendanges, la maîtrise des températures et la réception des visiteurs, tout en s'insérant dans un paysage ouvert, visible de loin depuis les routes. En zone agricole, le lien avec l'exploitation est justifié dans le dossier.",
        expertise: "professionnels",
      },
    ],
    contraintes: [
      ["Un PLU révisé en 2019", "La révision générale du PLU a été approuvée le 12 décembre 2019 ; le zonage et le règlement en vigueur sont consultables sur le Géoportail de l'urbanisme. Les permis sont instruits par le service de la communauté de communes, qui tient des permanences en mairie. Nous vérifions la zone, les reculs, les hauteurs et les orientations d'aménagement avant l'esquisse."],
      ["Hérault, Lergue et PPRI", "Le PPRI de la haute vallée de l'Hérault, secteur sud, approuvé le 11 juin 2007, réglemente les terrains inondables de la commune. Certaines berges du fleuve sont classées en aléa fort, et des inondations liées à l'Hérault, à la Lergue et au Lagamas ont été reconnues en catastrophe naturelle. Nous situons chaque parcelle sur la carte réglementaire avant toute proposition."],
      ["Les abords du pont de Gignac", "Le pont sur l'Hérault, inscrit monument historique en 1950, est situé sur la commune voisine, mais sa servitude de protection s'étend sur les berges de Saint-André, notamment vers l'Aire des Ponts. Dans ce secteur, l'Architecte des Bâtiments de France peut avoir à donner son accord, ce qui allonge l'instruction. Nous l'anticipons dès l'esquisse."],
      ["Argiles et barrage du Salagou", "Les sols sujets au retrait et au gonflement couvrent près de 84 % de la commune, à un niveau moyen ou fort : une étude géotechnique doit donc accompagner la vente de tout terrain constructible, et elle reste conseillée pour une extension. La commune est aussi exposée à l'onde de submersion en cas de rupture du barrage du Salagou, un risque traité par un plan particulier d'intervention."],
      ["Construire en zone agricole", "Plus de 80 % du territoire est agricole, et la mairie diffuse une information sur la lutte contre la cabanisation : en zone agricole ou naturelle, un abri, un mobil-home ou une construction sans lien avec une exploitation est en principe interdit. Pour un bâtiment agricole, nous justifions le besoin de l'exploitation et soignons son insertion dans la plaine."],
    ],
    quartiers: ["Centre ancien", "Cambous", "Sainte-Brigitte", "Les Hauts du Puech", "Le Peyrou", "Bages", "Granoupiac", "Le Bosquet", "Les Fontanelles"],
    faq: [
      ["Ma maison du centre ancien peut-elle bénéficier d'une aide pour sa façade ?", "La commune mène une opération de rénovation des façades, « Faites le mur », dans un périmètre défini du centre ancien : l'immeuble doit avoir plus de quinze ans et une façade visible depuis la voie publique. L'aide couvre une part du coût hors taxes, dans la limite d'un plafond. Nous pouvons intégrer cette démarche au projet de rénovation et préparer la déclaration préalable correspondante, avant tout démarrage des travaux."],
      ["Puis-je installer un mobil-home ou un abri sur mon terrain agricole ?", "En principe non. En zone agricole ou naturelle du PLU, seules les constructions nécessaires à une exploitation ou à un service public sont admises. Un cabanon, une caravane habitée ou un abri édifié sans autorisation expose son propriétaire à un procès-verbal et à une obligation de remise en état. Avant d'acheter une parcelle de ce type, renseignez-vous auprès du service urbanisme de la mairie."],
      ["Mon terrain longe la Lergue ou l'Hérault : que puis-je construire ?", "Tout dépend de la zone du PPRI : en zone rouge, les constructions nouvelles sont en principe interdites et les extensions très encadrées ; en zone bleue, elles sont admises sous conditions, notamment de hauteur de plancher. Le PLU peut ajouter ses propres limites, par exemple sur les berges classées en zone naturelle. Un architecte à Saint-André-de-Sangonis croise ces documents avant de vous proposer une implantation."],
    ],
    refs: ["industriel-agricole", "logement-exterieur", "logement-interieur"],
    image: ["industriel-agricole", "10"],
  },
};

---
title: "Comment les drones sous-marins peuvent-ils contribuer à la surveillance des zones protégées marines ?"
description: "Les drones sous-marins renforcent le suivi des aires marines protégées : habitats, espèces, braconnage et données. Usages, limites et méthode."
excerpt: "Autonomes ou télécommandés, les drones sous-marins permettent de suivre les habitats et la faune dans des zones difficiles d’accès. Bien intégrés à un protocole de terrain, ils améliorent la surveillance sans remplacer les équipes humaines ni les patrouilles."
date: "2024-04-27T13:16:20"
updated: "2026-07-11T05:52:06.200Z"
category: tech
tags: ["drones sous-marins", "aires marines protégées", "biodiversité marine", "robotique", "surveillance environnementale"]
image: "/img/featured/comment-les-drones-sous-marins-peuvent-ils-contribuer-a-la-surveillance-des-zones-protegees-marines"
imageAlt: "Comment les drones sous-marins peuvent-ils contribuer à la surveillance des zones protégées marines ?"
author: "La rédaction UWOS"
readingTime: 12
status: published
featured: false
keyTakeaways:
  - "Les drones sous-marins documentent les habitats, les espèces et certaines pressions humaines avec une précision difficile à obtenir depuis la surface."
  - "Les ROV, AUV et planeurs répondent à des missions différentes : le choix dépend de la profondeur, de la durée et du besoin de contrôle en direct."
  - "La qualité du protocole, du géoréférencement et de l’analyse des données compte autant que le matériel embarqué."
  - "Un drone ne remplace ni les patrouilles de surface ni l’expertise scientifique : il complète un dispositif de surveillance global."
  - "La réduction du bruit, des contacts avec le fond et des risques de perte doit être prévue dès la préparation de mission."
faq:
  - q: "Quelle différence entre un drone sous-marin et un sous-marin habité ?"
    a: "Un drone sous-marin est un véhicule robotisé, sans équipage à bord. Il peut être piloté depuis un navire ou la côte, comme un ROV, ou suivre une mission programmée, comme un AUV. Il réduit l’exposition des plongeurs et peut rester plus longtemps dans des environnements difficiles."
  - q: "Les drones sous-marins peuvent-ils détecter la pêche illégale ?"
    a: "Ils peuvent observer des indices matériels, tels que des filets, casiers, lignes, ancres ou engins abandonnés, et documenter leur position. En revanche, ils ne remplacent pas la détection de navires par radar, satellite, AIS ou patrouille. Pour servir à une procédure, les images doivent être horodatées, géoréférencées et recueillies selon un protocole robuste."
  - q: "À quelle profondeur un drone sous-marin peut-il descendre ?"
    a: "Cela dépend entièrement du modèle et de son caisson de pression. Des équipements légers opèrent dans les faibles profondeurs, tandis que des systèmes scientifiques sont conçus pour plusieurs centaines, voire plusieurs milliers de mètres. Pour une aire marine côtière, la maniabilité, l’autonomie et la qualité des capteurs sont souvent plus déterminantes que la profondeur maximale."
  - q: "Les drones sous-marins dérangent-ils les animaux marins ?"
    a: "Ils peuvent créer une perturbation par leur bruit, leurs éclairages ou leur proximité, surtout auprès d’espèces sensibles. Les opérateurs doivent limiter la vitesse, éviter de poursuivre les animaux, réduire l’intensité lumineuse et définir des distances d’approche. Une mission bien préparée cherche à produire des données sans modifier le comportement observé."
  - q: "Faut-il une connexion internet pour piloter un drone sous l’eau ?"
    a: "Non, car les ondes radio et le GPS ne se propagent pas efficacement sous l’eau. Un ROV communique le plus souvent via un câble relié au navire, tandis qu’un AUV navigue de manière autonome et transmet les données au retour ou par liaison acoustique à faible débit. Une connexion internet peut néanmoins être utile à bord pour transmettre les résultats à terre."
---

Les drones sous-marins donnent aux gestionnaires d’aires marines protégées la possibilité d’observer régulièrement ce qui reste invisible depuis la surface : état des récifs, herbiers, faune, déchets, engins de pêche ou évolution des fonds. Leur apport est particulièrement utile pour couvrir des secteurs profonds, dangereux ou éloignés, à condition de les employer comme un maillon d’un dispositif associant scientifiques, gardes, plongeurs, navires et données satellitaires.

## Des robots adaptés à des missions très différentes

L’expression « drone sous-marin » désigne plusieurs familles de véhicules robotisés. Elles ne se distinguent pas seulement par leur taille : leur mode de déplacement, leur autonomie et leur capacité à transmettre les images déterminent directement leur utilité dans une zone marine protégée.

Le **ROV** (*Remotely Operated Vehicle*) est piloté en direct par un opérateur. Relié à un bateau, parfois à une station côtière, par un câble, il renvoie la vidéo et les données en temps réel. Il est particulièrement pertinent pour examiner une zone précise : une colonie de corail, une épave, un filet accroché au fond ou un mouillage suspect. Son principal atout est le contrôle humain immédiat ; son point faible est le câble, qui limite son rayon d’action et peut compliquer les opérations dans les reliefs ou les herbiers.

L’**AUV** (*Autonomous Underwater Vehicle*) réalise, lui, une trajectoire programmée sans câble. Il peut cartographier méthodiquement une vaste zone, suivre des transects répétés ou naviguer près du fond à une altitude constante. Il est efficace pour comparer l’état d’un site d’une saison à l’autre, mais ne permet généralement pas de réagir instantanément à ce qu’il filme.

Les **planeurs sous-marins** ou *gliders* sont conçus pour les longues missions océaniques. Ils avancent lentement en modifiant leur flottabilité et remontent périodiquement à la surface pour transmettre une partie de leurs mesures. Ils servent davantage au suivi de paramètres physiques et acoustiques — température, salinité, oxygène, bruit sous-marin — qu’à l’inspection fine d’un récif.

| Type de véhicule | Usage le plus adapté en aire protégée | Atouts | Limites principales |
|---|---|---|---|
| ROV télécommandé | Inspection ciblée, vidéo en direct, récupération d’un petit objet | Pilotage précis, réaction immédiate, bras manipulateur possible | Câble, besoin d’un support de mise à l’eau, zone d’action réduite |
| AUV autonome | Cartographie, transects biologiques, suivi répétable des habitats | Grande couverture, trajectoires standardisées, pas de câble | Pas de décision humaine immédiate, récupération indispensable |
| Planeur sous-marin | Suivi de longue durée des masses d’eau et de l’ambiance sonore | Très grande endurance, faible consommation | Lent, peu adapté aux images détaillées du fond |
| Drone d’observation léger | Prospection côtière peu profonde, sensibilisation, pré-diagnostic | Déploiement rapide, matériel plus accessible | Autonomie, profondeur et stabilité limitées selon les conditions |

:::key[À retenir]
Le bon drone n’est pas celui qui possède le plus de capteurs, mais celui qui répond à une question de gestion précise : localiser un engin de pêche, suivre un herbier, compter une espèce ou cartographier une zone dégradée.
:::

## Observer les habitats, la biodiversité et les pressions humaines

La première contribution des drones sous-marins est de rendre le suivi écologique plus régulier et plus comparable. Une aire marine protégée ne se résume pas à des limites sur une carte : son gestionnaire doit vérifier, année après année, si les habitats et les populations évoluent dans le sens attendu.

### Cartographier les fonds sans les dégrader

Avec une caméra, un sonar à balayage latéral, un échosondeur multifaisceaux ou un sonar imageur, un véhicule peut produire des cartes détaillées des fonds. Ces informations aident à distinguer des substrats rocheux, sableux ou vaseux, à localiser des champs de blocs, des récifs, des herbiers ou des structures artificielles.

Les cartes ne servent pas uniquement à « voir plus joli ». Elles permettent de définir des zones de quiétude, d’ajuster les couloirs de navigation, de choisir l’emplacement de mouillages écologiques ou de mesurer l’extension d’un habitat. En répétant le même itinéraire avec une hauteur de vol et une vitesse comparables, les équipes peuvent détecter une perte de couverture végétale, un ensablement ou les traces de raclage sur le fond.

La photogrammétrie, qui assemble de nombreuses images prises avec recouvrement, peut aussi reconstituer un modèle 3D d’un secteur de récif. Elle exige toutefois une eau suffisamment claire, un éclairage maîtrisé et une navigation très stable. Dans les eaux turbides, le sonar donnera souvent des résultats plus exploitables que la vidéo seule.

### Suivre les espèces avec des preuves visuelles et acoustiques

Les caméras embarquées aident à inventorier poissons, invertébrés, gorgones, coraux ou grandes algues. Elles permettent également de documenter des espèces patrimoniales sans capturer ni manipuler les animaux. Sur certains sites, les vidéos fixes ou les transects réalisés à vitesse lente servent à calculer des indicateurs simples : présence-absence, abondance relative, taille approximative des poissons, densité d’espèces sentinelles ou taux de recouvrement d’un habitat.

Des hydrophones peuvent compléter la vidéo. Ils enregistrent le paysage sonore : vocalisations de mammifères marins, activité de certains poissons ou crustacés, mais aussi bruit des moteurs et des travaux. Ce suivi acoustique est précieux là où la visibilité est faible ou lorsque les espèces sont discrètes. Il demande en revanche une analyse spécialisée : un son détecté doit être attribué avec prudence, selon une bibliothèque de référence et le contexte local.

:::info[À savoir]
Sous l’eau, le GPS ne fonctionne pas directement et les communications radio sont fortement limitées. Les drones s’orientent avec des centrales inertielles, des capteurs de vitesse et de profondeur, parfois des balises acoustiques ; leur position doit ensuite être contrôlée et corrigée pour que les observations soient réellement exploitables.
:::

### Repérer les atteintes à la réglementation

Un drone ne « verbalise » pas une infraction. En revanche, il peut repérer et géolocaliser des éléments qui justifient une intervention : casiers en zone interdite, filets fantômes, lignes, ancres, déchets volumineux, dégâts sur un habitat ou travaux non autorisés. Un ROV est alors très utile pour obtenir des images nettes, vérifier la nature d’un engin et guider une équipe de récupération.

Il peut également confirmer qu’une zone annoncée comme protégée est effectivement libre d’activités incompatibles. Mais la surveillance de la pêche illégale requiert surtout une combinaison d’outils : suivi des navires, radars côtiers, données AIS lorsqu’elles existent, renseignements de terrain et patrouilles. Les images sous-marines viennent consolider le diagnostic, pas remplacer cette chaîne.

## Des capteurs utiles seulement s’ils répondent à un protocole

Une caméra 4K ne suffit pas à produire une donnée scientifique. Avant d’acheter ou de déployer un appareil, il faut traduire l’objectif de conservation en variables observables, puis définir une méthode reproductible.

Pour évaluer un herbier, par exemple, l’équipe peut choisir des transects fixes, une altitude constante au-dessus du fond, des passages aux mêmes périodes de l’année et une grille d’analyse des images. Pour suivre des espèces mobiles, elle pourra privilégier des horaires, des profondeurs et une durée d’observation cohérents. Sans cette standardisation, une différence entre deux vidéos peut simplement provenir de la météo, de la turbidité, de l’angle de caméra ou du comportement de l’opérateur.

Les capteurs les plus fréquemment embarqués répondent à des besoins complémentaires :

- **caméras haute définition et éclairages** pour l’identification visuelle et la photogrammétrie ;
- **sonars** pour cartographier et détecter des structures dans l’eau trouble ou à distance du fond ;
- **capteurs CTD** pour la conductivité, la température et la profondeur, qui renseignent sur les conditions du milieu ;
- **sondes d’oxygène, de turbidité, de pH ou de chlorophylle**, selon les problématiques locales ;
- **hydrophones** pour mesurer le bruit anthropique et suivre certaines signatures biologiques ;
- **prélèveurs ou capteurs d’ADN environnemental**, encore plus exigeants sur le plan des procédures anti-contamination.

L’intelligence artificielle accélère le tri des milliers d’images en détectant des formes, en classant des fonds ou en proposant des identifications. Elle ne doit pas être confondue avec une validation scientifique automatique. Les modèles sont sensibles à la qualité de l’image, aux espèces rares et aux conditions locales ; un contrôle humain, au moins sur un échantillon conséquent, reste nécessaire.

:::stat[En chiffres]
Une seule mission vidéo de quelques heures peut produire de quelques dizaines à plusieurs centaines de gigaoctets de données selon la résolution, le nombre de caméras et le format d’enregistrement. Le stockage, la sauvegarde et l’annotation doivent donc être budgétés dès le départ.
:::

## Organiser une mission fiable, de la question au rapport de terrain

Le déploiement d’un drone sous-marin est une opération scientifique et logistique, pas une simple sortie de prise de vues. Un protocole efficace suit une séquence claire.

### 1. Définir une question de gestion mesurable

« Surveiller la zone » est trop vague. Il faut formuler un objectif tel que : mesurer l’évolution de la couverture d’un herbier dans trois secteurs, rechercher des engins de pêche dans une zone de non-prélèvement, ou comparer l’état de deux récifs soumis à des niveaux de fréquentation différents. Cet objectif détermine la fréquence des missions, les capteurs et le niveau de précision requis.

### 2. Préparer le plan de mission et la sécurité

L’équipe recense la bathymétrie, les courants, les marées, les câbles ou infrastructures, les couloirs de navigation et les restrictions locales. Elle prévoit un périmètre de repli, une procédure en cas de perte de communication et le matériel de récupération. Pour un AUV, le plan doit inclure un point de remontée possible, une marge de batterie et un dispositif de localisation de secours.

La préparation comprend aussi les autorisations nécessaires : règles de navigation, accès à l’aire protégée, contraintes portuaires, éventuelles zones militaires ou installations sensibles. Les opérations doivent respecter le plan de gestion de l’aire protégée et être coordonnées avec son gestionnaire.

### 3. Calibrer, géoréférencer et documenter

Avant chaque campagne, les capteurs sont vérifiés et les horloges synchronisées. Les images, traces de navigation et relevés environnementaux doivent partager un horodatage cohérent. Les métadonnées — modèle d’appareil, paramètres caméra, profondeur, vitesse, visibilité, opérateurs, incidents — sont indispensables pour interpréter les résultats plusieurs mois ou années plus tard.

### 4. Contrôler la qualité et transformer les données en décision

Au retour, il ne suffit pas de regarder les séquences les plus spectaculaires. Les équipes vérifient la couverture effective, les zones floues, les écarts de trajectoire et la qualité du positionnement. Elles annotent les observations selon une nomenclature commune, puis comparent les résultats à une situation de référence.

Un résultat utile se traduit ensuite en action : enlever un filet fantôme, renforcer une patrouille dans un secteur, déplacer un mouillage, interdire temporairement une activité ou lancer une étude complémentaire. Cette dernière étape justifie l’investissement technologique.

:::tip[Le conseil UWOS]
Avant toute acquisition, réalisez une mission pilote sur une zone limitée et fixez trois indicateurs simples : taux de couverture réellement filmé, qualité des données exploitables et délai entre la sortie en mer et la décision de gestion. Cela révèle vite si l’outil correspond aux capacités de l’équipe.
:::

## Les limites à anticiper : autonomie, conditions marines et preuve réglementaire

Les drones sous-marins ont des contraintes physiques que les images promotionnelles masquent parfois. La turbidité réduit fortement la portée des caméras ; les courants modifient la trajectoire et augmentent la consommation ; la houle complique la mise à l’eau et la récupération. Le bruit de propulsion, l’éclairage et la proximité de l’appareil peuvent également modifier le comportement de la faune.

L’autonomie dépend de la charge utile, de la vitesse, des courants et de la température. Un appareil compact capable de rester longtemps dans l’eau n’a pas nécessairement la puissance pour porter un sonar, plusieurs caméras et des éclairages. À l’inverse, un système scientifique plus performant impose souvent un navire, une équipe formée, une maintenance rigoureuse et une assurance adaptée.

La compétence humaine reste centrale. Piloter un ROV près d’un récif fragile, interpréter une image sonar ou identifier une espèce sur une vidéo exige une formation. Il faut aussi prévoir des solutions de continuité : batteries de rechange, pièces d’usure, protocoles de nettoyage, sauvegardes redondantes et, si possible, un prestataire ou partenaire scientifique capable de prendre le relais.

### Minimiser l’empreinte de la surveillance elle-même

L’objectif de protection impose de ne pas créer une perturbation supplémentaire. Les opérateurs évitent le contact avec le fond et les organismes, réduisent la vitesse près des animaux, utilisent l’éclairage minimal nécessaire et cessent l’approche si une espèce manifeste une réaction de fuite ou de stress. Entre deux sites, le nettoyage et la désinfection du matériel limitent aussi le transfert potentiel d’organismes, de pathogènes ou de sédiments.

Pour les constats susceptibles d’avoir une portée administrative ou judiciaire, la chaîne de conservation des preuves doit être pensée à l’avance : fichier original non modifié, horodatage, coordonnées, identification de l’opérateur, registre de mission et sauvegarde sécurisée. Une belle vidéo sans contexte précis a une valeur limitée pour établir les faits.

:::warning[Attention]
Ne promettez pas une surveillance « en temps réel » sur de longues distances sans vérifier les communications disponibles. La transmission acoustique sous l’eau a un débit faible ; de nombreuses missions autonomes ne livrent leurs données complètes qu’après récupération du véhicule.
:::

## Faire du drone un outil durable de gouvernance marine

Le déploiement le plus pertinent associe les drones aux autres sources d’information. Une image satellite peut signaler une anomalie en surface ; une patrouille peut vérifier la présence d’un navire ; un ROV peut ensuite inspecter le fond ; des plongeurs ou scientifiques peuvent confirmer l’état écologique d’un secteur. Cette complémentarité optimise le temps en mer et évite de demander à un seul outil ce qu’il ne peut pas faire.

Les partenariats sont souvent déterminants. Gestionnaires d’aires protégées, instituts de recherche, universités, associations de plongeurs, pêcheurs professionnels et opérateurs spécialisés peuvent mutualiser les équipements et les compétences. La participation des usagers est particulièrement utile pour sélectionner les zones prioritaires et favoriser l’acceptation des mesures prises à partir des observations.

Enfin, l’évaluation doit être continue. Une campagne de drones a du sens si elle produit un indicateur suivi dans le temps, alimente un tableau de bord de gestion ou déclenche une intervention concrète. Commencez par une mission ciblée, documentez les résultats et les coûts opérationnels, puis élargissez le programme uniquement lorsque les données obtenues améliorent réellement la protection de la zone marine.

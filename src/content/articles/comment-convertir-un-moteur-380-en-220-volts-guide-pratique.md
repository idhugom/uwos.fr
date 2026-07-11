---
title: "Comment convertir un moteur 380 en 220 volts : guide pratique"
description: "Moteur 380 V sur prise 220/230 V : lisez la plaque, choisissez variateur ou condensateur et réalisez un câblage fiable en sécurité."
excerpt: "Faire tourner un moteur triphasé 380/400 V sur une prise 220/230 V est parfois possible, mais seulement si sa plaque le permet. Variateur, condensateur, câblage triangle, puissance disponible et précautions : le guide pour choisir sans endommager le moteur."
date: "2025-01-04T19:43:19"
updated: "2026-07-11T05:52:06.200Z"
category: maison-deco
tags: ["moteur triphasé", "électricité", "bricolage", "variateur de fréquence", "condensateur"]
image: "/img/featured/comment-convertir-un-moteur-380-en-220-volts-guide-pratique"
imageAlt: "Comment convertir un moteur 380 en 220 volts : guide pratique"
author: "La rédaction UWOS"
readingTime: 11
status: published
featured: false
keyTakeaways:
  - "Un moteur 230/400 V Δ/Y peut généralement être alimenté depuis du 230 V monophasé, à condition d’être câblé en triangle."
  - "Le variateur 230 V monophasé vers 230 V triphasé est la solution la plus fiable pour conserver les performances du moteur."
  - "Un condensateur permet un dépannage économique, mais réduit nettement le couple et la puissance réellement exploitables."
  - "Un moteur 400/690 V ou 380/660 V ne peut pas être raccordé directement à une prise 230 V avec un simple condensateur."
  - "Ne vous fiez jamais à la position des barrettes seule : suivez le schéma de la plaque ou du couvercle de boîte à bornes."
faq:
  - q: "Peut-on brancher directement un moteur triphasé 380 V sur une prise 220 V ?"
    a: "Non. Branché sur seulement deux fils, un moteur triphasé ne produit pas le champ tournant nécessaire à son démarrage et risque de bourdonner ou de surchauffer. Il faut soit un variateur de fréquence adapté, soit un montage à condensateur si le moteur est compatible."
  - q: "Comment savoir si mon moteur est compatible avec le 230 V monophasé ?"
    a: "Cherchez l’indication 230/400 V Δ/Y, ou 220/380 V Δ/Y sur une ancienne plaque. Cette indication signifie que les enroulements peuvent fonctionner en triangle sous 230 V triphasé, condition indispensable pour envisager un variateur 230 V monophasé vers 230 V triphasé ou un condensateur."
  - q: "Un moteur 380/660 V peut-il fonctionner sur 220/230 V ?"
    a: "Non, pas avec un simple câblage ou un condensateur. Un marquage 380/660 V, devenu le plus souvent 400/690 V, indique que le moteur exige au minimum environ 400 V entre phases lorsqu’il est couplé en triangle. Il faut conserver une alimentation triphasée 400 V, utiliser un équipement électronique spécifique capable de délivrer cette tension, ou changer le moteur."
  - q: "Quelle capacité de condensateur faut-il pour un moteur triphasé sur 230 V ?"
    a: "Pour un condensateur permanent, un premier ordre de grandeur est de 60 à 80 µF par kW de puissance moteur à 230 V et 50 Hz. Ce réglage reste empirique : il dépend de la charge, du moteur et du couple de démarrage demandé. Utilisez uniquement un condensateur permanent pour moteur, généralement donné pour 450 V AC."
  - q: "Le moteur perd-il de la puissance avec un condensateur ?"
    a: "Oui. Avec un condensateur, le système ne produit pas un vrai réseau triphasé équilibré : la puissance réellement disponible tombe souvent à environ 50 à 70 % de la puissance de plaque, avec un couple de démarrage fortement réduit. Un variateur correctement dimensionné permet au contraire de se rapprocher du fonctionnement nominal."
  - q: "Peut-on convertir un moteur qui n’a que trois fils ou trois bornes ?"
    a: "Cela dépend du couplage réalisé à l’intérieur du moteur. Sans accès aux six extrémités des enroulements, il est impossible de reconfigurer librement un moteur 230/400 V en étoile ou en triangle. Consultez le schéma constructeur ou faites contrôler le moteur avant toute tentative."
---

Un moteur dit « 380 V » peut parfois fonctionner sur une prise domestique de 220/230 V, mais il ne suffit pas de déplacer des barrettes ou de raccorder une phase à un prétendu point milieu. La solution dépend entièrement de la plaque signalétique : un moteur 230/400 V est un bon candidat, tandis qu’un moteur 400/690 V ne l’est pas. Dans la plupart des cas, un variateur de fréquence est la conversion la plus fiable ; le condensateur reste une option pour les machines peu exigeantes.

## Bien distinguer 220, 230, 380 et 400 volts

Les appellations ont évolué, mais elles désignent souvent les mêmes familles de réseaux : le 220 V est devenu le **230 V monophasé**, et le 380 V est devenu le **400 V triphasé**. Dans une installation triphasée moderne, on mesure environ 230 V entre une phase et le neutre, et environ 400 V entre deux phases.

Un moteur triphasé n’est pas conçu pour être alimenté par deux fils seulement. Ses trois enroulements doivent recevoir des courants décalés de 120° afin de créer un champ magnétique tournant. C’est ce champ qui lui donne son couple de démarrage et sa rotation régulière.

Brancher simplement un moteur triphasé entre la phase et le neutre d’une prise 230 V ne le transforme donc pas en moteur monophasé. Il peut bourdonner, ne pas partir, tirer un courant excessif et finir par détériorer ses enroulements.

:::key[À retenir]
Passer d’un réseau 400 V triphasé à une alimentation 230 V monophasée ne consiste pas à « convertir » le moteur au sens strict. Il faut soit recréer une alimentation triphasée 230 V avec un variateur, soit produire une troisième phase artificielle avec un condensateur, au prix de performances réduites.
:::

## Lire la plaque signalétique avant toute intervention

La plaque signalétique est le seul document qui permet de décider si l’opération est réaliste. Coupez l’alimentation, ouvrez la boîte à bornes et relevez les tensions, les symboles de couplage, la fréquence et l’intensité nominale.

Le cas le plus favorable porte une indication du type **230/400 V Δ/Y** ou, sur une machine ancienne, **220/380 V Δ/Y**. Elle se lit ainsi :

- **230 V en triangle (Δ)** : chaque enroulement reçoit environ 230 V ;
- **400 V en étoile (Y)** : chaque enroulement reçoit aussi environ 230 V, car la tension entre phases est répartie dans le couplage étoile.

Ce moteur peut donc être couplé en triangle et alimenté par un variateur délivrant du 230 V triphasé. Il peut également, sous conditions, fonctionner avec un condensateur sur du 230 V monophasé.

À l’inverse, une plaque marquée **400/690 V Δ/Y** — ou 380/660 V sur un ancien modèle — signifie que les enroulements sont prévus pour recevoir environ 400 V en triangle. Une prise 230 V monophasée ne suffit pas : un condensateur ne peut pas compenser cet écart de tension.

| Inscription sur la plaque | Couplage à basse tension | Compatibilité avec une alimentation 230 V monophasée |
|---|---|---|
| 230/400 V Δ/Y ou 220/380 V Δ/Y | Triangle à 230 V | Oui, avec variateur 230 V mono vers 230 V triphasé ; condensateur possible selon l’usage |
| 400/690 V Δ/Y ou 380/660 V Δ/Y | Triangle à 400 V | Non avec un simple condensateur ; alimentation 400 V triphasée ou solution spécifique nécessaire |
| 230 V Δ uniquement | Selon le schéma constructeur | Souvent possible avec variateur ; montage condensateur à valider selon les bornes disponibles |
| 1~ 230 V | Sans objet : moteur monophasé | Aucune conversion nécessaire |

Vérifiez aussi que le moteur possède **six bornes accessibles**. Elles correspondent généralement à U1, V1, W1 et U2, V2, W2. Trois bornes seulement ne veulent pas forcément dire que le moteur est inutilisable, mais son couplage interne peut empêcher toute reconfiguration extérieure.

:::warning[Attention]
Ne reproduisez jamais la position des barrettes vue sur une photo ou sur un autre moteur. L’implantation physique des bornes varie selon les fabricants. Fiez-vous au schéma collé dans le couvercle de boîte à bornes ou à la plaque du moteur, pas à la disposition apparente des vis.
:::

## Choisir la solution adaptée à la machine et à son usage

Le choix dépend surtout du couple demandé au démarrage, de la fréquence d’utilisation et de la valeur de la machine. Une petite pompe, un touret ou un ventilateur ne se comportent pas comme un compresseur, une scie sous charge ou un tour à métaux.

| Solution | Pour quels usages ? | Atouts | Limites |
|---|---|---|---|
| Variateur 230 V monophasé vers 230 V triphasé | Usage régulier, machine-outil, besoin de couple et de réglage de vitesse | Alimentation triphasée équilibrée, démarrage progressif, puissance proche du nominal | Paramétrage et installation plus exigeants ; moteur obligatoirement compatible 230 V en triangle |
| Condensateur permanent, avec éventuel condensateur de démarrage | Ventilateur, pompe peu chargée, touret, machine démarrant à vide | Peu coûteux, montage simple sur un moteur adapté | Couple de départ faible, puissance disponible réduite, réglage empirique |
| Remplacement par un moteur monophasé 230 V | Moteur incompatible ou machine utilisée occasionnellement | Solution claire, pérenne, sans électronique | Adaptation mécanique possible : arbre, entraxe, poulie, fixation |
| Maintien ou création d’une alimentation 400 V triphasée | Puissance élevée, usage professionnel, démarrages difficiles | Performances nominales et protection plus conventionnelle | Installation électrique plus lourde, dépendante du site |

Le variateur est à privilégier lorsque la machine doit démarrer chargée, fonctionner longtemps ou conserver sa puissance. Le condensateur peut être pertinent pour un appareil de bricolage qui démarre presque à vide et dont on accepte une capacité réduite.

:::info[À savoir]
Un variateur alimenté en 230 V monophasé et délivrant du 230 V triphasé ne crée pas du 400 V triphasé. Il doit alimenter un moteur réglé en triangle et prévu pour 230 V entre phases, c’est-à-dire typiquement un modèle 230/400 V Δ/Y.
:::

## Préparer le montage sans négliger les protections

Avant de modifier le câblage, mettez le circuit hors tension, condamnez si possible l’organe de coupure et vérifiez l’absence de tension avec un appareil adapté. Le conducteur de protection vert-jaune doit être raccordé à la carcasse métallique du moteur : la terre n’est jamais facultative.

Contrôlez ensuite l’état mécanique du moteur. L’arbre doit tourner librement, sans point dur ni roulement bruyant. Un moteur ancien qui sent le vernis brûlé, présente des traces d’humidité ou fait déclencher sa protection ne doit pas être « sauvé » par un nouveau câblage : un contrôle d’isolement et des enroulements s’impose.

Pour un montage à condensateur, prévoyez au minimum :

- un condensateur permanent spécial moteur, en polypropylène, prévu pour le courant alternatif et couramment donné pour **450 V AC** ;
- un boîtier fermé, adapté à l’environnement et muni d’un presse-étoupe ;
- une protection contre les surintensités adaptée au circuit et un dispositif de coupure accessible ;
- si nécessaire, un condensateur de démarrage associé à un relais, un contact centrifuge ou un temporisateur fiable.

Un condensateur de démarrage ne doit pas rester branché pendant la marche. Il est prévu pour n’intervenir que quelques secondes, le temps que le moteur atteigne sa vitesse.

## Réaliser un montage à condensateur sur un moteur 230/400 V

Le principe est de placer le moteur en **triangle**, puis d’alimenter deux sommets du triangle avec le 230 V monophasé. Le condensateur relie le troisième sommet à l’un des deux autres afin de déphaser le courant dans le troisième enroulement.

Le schéma logique suivant illustre le principe. Il ne remplace pas le schéma de votre moteur : les repères doivent correspondre à ceux de sa boîte à bornes.

```text
Couplage triangle :
A = U1 relié à W2
B = V1 relié à U2
C = W1 relié à V2

Alimentation 230 V monophasée :
Phase L  -> A
Neutre N -> B
Condensateur permanent -> entre A et C
Terre PE -> carcasse du moteur
```

Dans ce montage, les trois enroulements restent bien connectés en triangle. Il n’y a pas de « point milieu » à utiliser et aucun enroulement ne doit être laissé isolé. Pour inverser le sens de rotation, moteur arrêté et alimentation coupée, on déplace généralement le raccordement du condensateur : par exemple de A-C vers B-C. Inverser simplement phase et neutre ne change pas le sens de rotation d’un moteur alimenté en monophasé.

La valeur du condensateur permanent se détermine par approximation, puis par essais prudents sous surveillance.

:::stat[En chiffres]
À 230 V et 50 Hz, une base courante est d’environ 60 à 80 µF de condensateur permanent par kW de puissance moteur. Avec cette solution, la puissance mécaniquement exploitable se situe souvent autour de 50 à 70 % de la valeur indiquée sur la plaque.
:::

Un moteur de 1 kW peut ainsi réclamer, selon sa conception et sa charge, un condensateur permanent voisin de 60 à 80 µF. Si le démarrage est difficile, un condensateur de démarrage peut être ajouté en parallèle du condensateur permanent, souvent avec une capacité totale deux à trois fois supérieure pendant la phase de départ. Il doit être déconnecté automatiquement dès que le moteur a pris sa vitesse.

Faites un premier essai sans charge. Le moteur doit accélérer franchement, sans ronflement prolongé. Vérifiez ensuite son comportement en charge : échauffement, bruit, vitesse, déclenchements et intensités mesurées. Si le moteur peine à partir, chauffe vite ou dépasse ses valeurs de plaque, coupez immédiatement. Augmenter la capacité au hasard peut améliorer le démarrage tout en surchargeant un enroulement.

:::tip[Le conseil UWOS]
Réservez le montage à condensateur aux charges faciles à lancer : ventilateur, touret, petite pompe centrifuge ou machine dont l’outil ne mord pas dès le départ. Pour un compresseur, une scie, un broyeur ou une machine-outil, choisissez plutôt un variateur ou un moteur monophasé adapté.
:::

## Installer un variateur pour retrouver un vrai triphasé 230 V

Le variateur de fréquence est souvent la solution la plus propre. Choisissez un modèle dont l’entrée est indiquée **1~ 200-240 V** et la sortie **3~ 200-240 V**. Son dimensionnement doit se faire d’abord sur l’intensité nominale du moteur, et non sur la seule puissance affichée en kW.

Le moteur 230/400 V doit être câblé en triangle. Raccordez ensuite les trois sorties du variateur aux trois sommets du triangle, selon les instructions du fabricant. Programmez au minimum la tension, le courant nominal, la fréquence — généralement 50 Hz — et la vitesse indiqués sur la plaque moteur. Une rampe d’accélération progressive limite l’appel de courant et les à-coups mécaniques.

Un variateur correctement dimensionné permet habituellement de conserver un couple et une puissance proches du fonctionnement nominal, contrairement au condensateur. Il offre aussi un réglage de vitesse utile sur un tour, une perceuse, une pompe ou une ventilation. En revanche, à très basse vitesse, le ventilateur situé sur l’arbre refroidit moins bien le moteur : il faut réduire la charge, limiter la durée de fonctionnement ou ajouter une ventilation forcée selon l’usage.

Ne placez pas de condensateur entre le variateur et le moteur. Évitez également de manœuvrer un interrupteur ou un contacteur en sortie de variateur lorsque celui-ci délivre de la tension : utilisez les commandes prévues sur son entrée ou ses bornes de contrôle.

## Respecter les limites de puissance et les règles de sécurité

Même avec un variateur, une alimentation 230 V monophasée doit supporter la puissance absorbée par le moteur. À puissance égale, l’intensité appelée sur une seule phase est nettement plus élevée que sur un réseau triphasé. Le câble, le disjoncteur, la prise et la protection différentielle doivent donc être cohérents avec l’installation et les recommandations du fabricant du variateur.

Le montage à condensateur impose encore plus de prudence : les courants dans les enroulements ne sont pas équilibrés, le couple de départ est limité et la surcharge thermique peut être discrète. Ne contournez jamais une protection thermique qui déclenche. Elle signale souvent un condensateur mal dimensionné, une charge excessive, un démarrage trop long ou un moteur inadapté.

Les condensateurs peuvent conserver une charge après l’arrêt. Attendez leur décharge, contrôlez l’absence de tension avant d’intervenir et évitez tout câblage volant. Si la machine est fixée, utilisée dans un local humide, raccordée à un tableau ou destinée à un usage fréquent, l’intervention d’un électricien qualifié est préférable.

**Le bon réflexe est simple : relevez d’abord la plaque. Si elle indique 230/400 V Δ/Y, optez idéalement pour un variateur 230 V monophasé vers 230 V triphasé ; gardez le condensateur pour une machine peu sollicitée et facile à démarrer. Si elle indique 400/690 V, ne tentez pas un raccordement direct sur 230 V.**

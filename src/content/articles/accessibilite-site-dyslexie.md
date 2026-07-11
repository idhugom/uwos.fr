---
title: "Rendre un site web accessible aux personnes dyslexiques : bonnes pratiques"
description: "Typographie, contenus, navigation et tests : les bonnes pratiques pour rendre un site web réellement accessible aux personnes dyslexiques."
excerpt: "Rendre un site plus facile à lire pour les personnes dyslexiques ne se résume pas à changer de police. Hiérarchie, langage, contrastes, code et tests utilisateurs forment un ensemble qui améliore l’expérience de tous."
date: "2025-06-30T13:12:09"
updated: "2026-07-11T05:52:06.200Z"
category: tech
tags: ["accessibilité numérique", "dyslexie", "ux design", "wcag", "rgaa", "conception web"]
image: "/img/featured/accessibilite-site-dyslexie"
imageAlt: "Rendre un site web accessible aux personnes dyslexiques : bonnes pratiques"
author: "La rédaction UWOS"
readingTime: 11
status: published
featured: false
keyTakeaways:
  - "La dyslexie ne se compense pas avec une police unique : la lisibilité dépend de toute l’interface."
  - "Un texte structuré, aéré et rédigé en langage clair réduit fortement l’effort de lecture."
  - "Les réglages utilisateur — zoom, taille de texte, contraste, lecture audio — doivent fonctionner sans casser le site."
  - "Les critères WCAG et le RGAA donnent un socle technique, mais les tests avec de vrais utilisateurs restent indispensables."
  - "L’accessibilité aux personnes dyslexiques se traite dès la conception, puis se vérifie à chaque évolution éditoriale et technique."
faq:
  - q: "Faut-il utiliser une police spéciale pour les personnes dyslexiques ?"
    a: "Non. Il n’existe pas de police universellement efficace pour toutes les personnes dyslexiques, et les résultats des études sur les polices dites « dyslexie » restent nuancés. Le plus utile est de proposer une police lisible, une taille confortable, un bon espacement et la possibilité pour l’utilisateur d’adapter l’affichage."
  - q: "Quelle taille de police choisir pour un site accessible ?"
    a: "Une taille de corps autour de 16 px CSS constitue un point de départ courant, mais elle ne doit pas être une limite. Utilisez des unités relatives comme rem, vérifiez le zoom à 200 % et évitez les blocs aux lignes excessivement longues ou trop serrées."
  - q: "Les normes WCAG suffisent-elles pour l’accessibilité des personnes dyslexiques ?"
    a: "Les WCAG couvrent des éléments essentiels : contraste, redimensionnement du texte, structure, focus clavier et identification des erreurs. Elles ne garantissent toutefois pas, à elles seules, un contenu facile à comprendre ou une charge cognitive faible : une revue éditoriale et des tests d’usage sont nécessaires."
  - q: "Comment tester un site auprès de personnes dyslexiques ?"
    a: "Faites réaliser des tâches concrètes, par exemple trouver une information, créer un compte ou remplir un formulaire, et observez les obstacles sans demander à la personne de justifier son diagnostic. Complétez les retours qualitatifs par des tests de zoom, de lecture vocale, de navigation au clavier et par un audit des pages clés."
  - q: "Un bouton de lecture audio rend-il un site accessible ?"
    a: "Il peut aider certains visiteurs, notamment sur des contenus longs, mais il ne remplace pas une mise en page lisible ni des contenus clairs. Il doit être simple à utiliser, ne pas démarrer automatiquement et rester compatible avec les lecteurs d’écran et les outils déjà employés par l’utilisateur."
---

La dyslexie peut rendre le décodage des mots, le maintien de l’attention sur une ligne ou la compréhension d’un texte dense plus coûteux. Un site accessible réduit cette charge par une typographie maîtrisée, des contenus clairs, une navigation prévisible et une interface que chacun peut adapter à ses préférences — sans imposer une prétendue solution miracle.

## Comprendre ce qui complique réellement la lecture en ligne

La dyslexie est un trouble spécifique et durable des apprentissages qui affecte principalement l’identification des mots et l’aisance de lecture. Ses manifestations varient fortement d’une personne à l’autre : confusion entre lettres proches, pertes de ligne, lenteur de lecture, fatigue cognitive, difficulté à retenir une consigne longue ou à extraire l’information essentielle d’un écran très chargé.

Le numérique peut aggraver ces difficultés lorsqu’il cumule petits caractères, blocs compacts, animations, vocabulaire administratif et parcours à étapes implicites. À l’inverse, un site bien conçu laisse le lecteur maîtriser son rythme, comprendre rapidement ce qu’il doit faire et retrouver facilement une information.

:::stat[En chiffres]
Selon les définitions retenues, la langue et les modalités de diagnostic, les estimations de dyslexie dans la population scolaire ou générale se situent souvent dans une fourchette de 5 à 10 %. Concevoir pour ce public concerne donc un nombre important de visiteurs, bien au-delà des seuls utilisateurs déclarant un besoin d’accessibilité.
:::

L’enjeu n’est pas de « simplifier à l’excès » ni de présumer des capacités des personnes. Il consiste à supprimer les obstacles évitables. Les bénéfices s’étendent aux lecteurs sur mobile, aux personnes fatiguées, aux non-natifs, aux seniors, ou encore à toute personne consultant un site dans un environnement distrayant.

:::key[À retenir]
Une interface favorable aux personnes dyslexiques est avant tout une interface lisible, stable et prévisible. Elle offre des repères visuels nets et évite de faire porter à la mémoire du visiteur des informations que le site pourrait expliciter.
:::

## Construire une lecture confortable : typographie, espace et contraste

Le choix d’une police n’est qu’une partie du sujet. Une famille sans empattement sobre, une police système ou une police de texte conçue pour l’écran peuvent toutes convenir si leur rendu est net. L’important est de ne pas enfermer l’utilisateur dans un choix unique : certaines personnes préfèrent des caractères avec empattements, d’autres une police sans empattement.

Les polices « dyslexie » telles qu’OpenDyslexic peuvent être proposées comme une option, mais ne devraient pas être imposées par défaut. Les preuves de leur supériorité générale ne sont pas assez établies pour en faire une réponse universelle. Mieux vaut privilégier des réglages solides et respectueux des préférences individuelles.

### Les paramètres qui font la différence

Pour le texte courant, une taille de départ d’environ 16 px CSS est généralement raisonnable. Elle doit être exprimée en unités relatives (`rem`, `em`) afin de respecter les réglages du navigateur. Un interligne d’au moins 1,5 fois la taille du texte, un espacement entre paragraphes visible et des lignes d’une longueur approximative de 45 à 75 caractères favorisent le suivi visuel.

Alignez le texte à gauche. La justification crée des espaces irréguliers, parfois appelés « rivières blanches », qui peuvent gêner le repérage dans la ligne. Évitez aussi les longues séquences en capitales, l’italique sur des passages entiers, le texte clignotant et les fonds décoratifs derrière les mots.

Le contraste reste indispensable : pour du texte normal, le niveau AA des WCAG recommande un rapport minimal de 4,5:1 entre le texte et son arrière-plan. Mais un contraste très brutal ou un blanc éclatant peut fatiguer certaines personnes. La bonne approche consiste à respecter le minimum normatif, puis à permettre l’usage des préférences de contraste et des thèmes du système, sans désactiver les adaptations du navigateur.

| Élément fragile | Mise en œuvre plus accessible | Pourquoi elle aide |
|---|---|---|
| Texte de 12 px en gris clair | Texte courant lisible, contrasté et redimensionnable | Réduit l’effort de déchiffrage et respecte le zoom |
| Bloc justifié de 100 caractères par ligne | Alignement à gauche et colonne de lecture modérée | Facilite le retour à la ligne suivante |
| Police décorative ou très fine pour les paragraphes | Police de texte simple, avec formes de lettres distinctes | Limite les ambiguïtés visuelles |
| Texte placé sur une image | Fond uni ou voile opaque sous le texte | Préserve le contraste quelles que soient les zones de l’image |
| Informations signalées uniquement en rouge | Couleur accompagnée d’un texte, d’une icône ou d’un libellé | Évite de dépendre d’un seul indice visuel |

:::tip[Le conseil UWOS]
Testez chaque modèle de page avec le zoom navigateur à 200 %, sur un écran étroit. Si les lignes se chevauchent, si un bouton disparaît ou si une colonne oblige à défiler horizontalement, le site n’est pas encore suffisamment adaptable.
:::

## Rédiger pour être compris sans appauvrir le contenu

Un lecteur dyslexique ne manque pas nécessairement de compréhension ; il peut en revanche consacrer une part importante de son attention au décodage. Un texte clair libère cette attention pour le sens. Cette exigence concerne les articles, mais aussi les boutons, les menus, les e-mails transactionnels, les messages d’erreur et les documents téléchargeables.

Commencez par l’information utile. Un titre doit annoncer précisément le contenu de la section ; un sous-titre doit guider la lecture plutôt que produire un effet de style. Découpez les explications longues en paragraphes courts et utilisez de vraies listes lorsque l’ordre ou l’inventaire compte.

Privilégiez des phrases directes, avec une idée principale à la fois. Développez les sigles à leur première occurrence, expliquez les termes métiers et évitez les doubles négations. Une consigne comme « Veuillez ne pas omettre de renseigner les champs obligatoires » sera plus immédiatement comprise sous la forme « Remplissez les champs marqués d’un astérisque ».

La clarté ne signifie pas supprimer toute précision. Pour un contenu juridique, médical ou financier, on peut conserver le terme exact, puis le traduire en langage courant et illustrer sa conséquence pratique. Les liens doivent annoncer leur destination : « Télécharger le guide PDF d’accessibilité (2 Mo) » est préférable à un vague « Cliquez ici ».

### Hiérarchiser plutôt que surcharger

Une page d’accueil ou une fiche produit ne doit pas mettre chaque élément au même niveau visuel. Mettez en évidence une action principale par écran, regroupez les contenus proches et placez les informations importantes avant les éléments secondaires. Les accordéons peuvent être utiles pour raccourcir une page, à condition de ne pas cacher une information indispensable et de fonctionner au clavier.

Les vidéos et les animations automatiques sont souvent source de distraction. Évitez les carrousels qui défilent seuls ; lorsqu’ils sont justifiés, prévoyez une commande visible pour les mettre en pause. Ne lancez jamais une lecture audio automatiquement.

## Rendre les parcours et les formulaires prévisibles

Pour une personne qui lit plus lentement, une interface changeante ou ambiguë coûte du temps et de l’énergie. Les libellés doivent donc rester cohérents d’une page à l’autre : si le bouton dit « Ajouter au panier », ne l’appelez pas « Je commande » à l’étape suivante pour désigner la même action.

Chaque formulaire doit présenter un libellé visible associé à son champ. Un texte indicatif placé dans le champ ne suffit pas : il disparaît à la saisie et ne remplace pas l’instruction. Indiquez les formats attendus avant la validation — par exemple « JJ/MM/AAAA » — et expliquez l’erreur près du champ concerné dans un vocabulaire concret : « Saisissez une adresse e-mail complète, par exemple nom@domaine.fr ».

Découpez les tâches complexes. Pour une demande de devis ou une inscription longue, affichez le nombre d’étapes, le nom de l’étape en cours et la possibilité de revenir en arrière sans perdre les données déjà saisies. Avant une action irréversible, présentez un récapitulatif clair et une confirmation explicite.

Les menus méga-déroulants, les pop-up intempestifs et les changements de page déclenchés au survol sont à éviter. Le visiteur doit pouvoir parcourir le site au clavier, conserver un indicateur de focus visible et fermer facilement une fenêtre modale. Ces principes profitent aux utilisateurs de lecteurs d’écran comme à ceux qui ont besoin de davantage de temps pour lire.

:::warning[Attention]
Ne confondez pas interface épurée et interface sans repères. Masquer les libellés, remplacer des mots par des icônes ambiguës ou tout faire tenir dans un menu hamburger peut augmenter la charge cognitive. Une icône utile doit être reconnaissable, accompagnée d’un texte lorsque le sens n’est pas universel.
:::

## Poser un socle technique accessible dès le développement

L’accessibilité pour les personnes dyslexiques dépend aussi de fondamentaux souvent invisibles. Utilisez les éléments HTML selon leur rôle : un vrai bouton pour déclencher une action, un vrai lien pour changer de destination, des titres structurés de `h1` à `h6` sans sauter de niveaux pour des raisons purement graphiques. Cette structure permet notamment aux outils de lecture vocale et aux fonctionnalités de lecture simplifiée de mieux interpréter la page.

Ajoutez la langue de la page dans l’attribut `lang`, des régions de page identifiables (`header`, `nav`, `main`, `footer`) et des intitulés explicites. N’employez ARIA que lorsque le HTML natif ne suffit pas : un mauvais rôle ARIA peut dégrader l’expérience au lieu de l’améliorer.

Le CSS doit accepter l’adaptation utilisateur. Évitez les hauteurs fixes sur les zones de texte, les tailles écrites exclusivement en pixels non redimensionnables, les conteneurs empêchant le retour à la ligne et les scripts qui bloquent le zoom. Le contenu doit se réorganiser sans perte d’information ni de fonctionnalité sur une largeur d’environ 320 px CSS, conformément à l’objectif de reflow des WCAG.

Une fonction « écouter ce texte » peut compléter l’expérience, particulièrement pour les démarches complexes ou les contenus longs. Elle doit être volontaire, clairement libellée et testée avec les lecteurs d’écran. Certains visiteurs utilisent déjà les fonctions natives de leur système, les extensions de navigateur ou une synthèse vocale personnelle : ne les gênez pas avec un lecteur propriétaire mal intégré.

## S’appuyer sur les normes sans réduire l’accessibilité à une checklist

Les WCAG 2.2 au niveau AA constituent une base pertinente : elles couvrent notamment le contraste, le redimensionnement du texte, la navigation au clavier, les intitulés, les erreurs de saisie et le comportement prévisible. En France, le Référentiel général d’amélioration de l’accessibilité (RGAA) s’appuie sur ces exigences et structure l’évaluation des services numériques concernés.

Les obligations légales dépendent du statut de l’organisation et du service proposé. Les administrations et de nombreux organismes chargés d’une mission de service public sont soumis à des exigences spécifiques ; depuis le 28 juin 2025, le cadre européen d’accessibilité étend aussi des obligations à plusieurs services destinés aux consommateurs, notamment dans certains secteurs comme le commerce en ligne. Il faut vérifier le périmètre exact, les éventuelles exemptions et les textes applicables à son activité plutôt que supposer que tous les sites relèvent des mêmes règles.

:::info[À savoir]
La conformité n’est pas synonyme d’utilisabilité parfaite. Un site peut satisfaire de nombreux critères techniques tout en restant difficile à lire si ses textes sont denses, ses parcours confus ou sa terminologie obscure. Les normes fixent un plancher ; la conception inclusive vise une expérience réellement praticable.
:::

L’accessibilité doit donc figurer dans le cahier des charges, les maquettes, les composants du design system, les critères de recette et la gouvernance éditoriale. Corriger après la mise en ligne est souvent plus coûteux, notamment quand les composants partagés ont déjà été dupliqués sur des dizaines de pages.

## Auditer, tester et améliorer dans la durée

Un audit efficace combine plusieurs méthodes. Les outils automatisés détectent rapidement une partie des défauts récurrents : contrastes insuffisants, images sans alternative, champs mal étiquetés ou structure de titres incohérente. Ils ne jugent cependant ni la qualité d’une explication, ni la pertinence d’un lien, ni la simplicité réelle d’un parcours.

Prévoyez une revue manuelle des pages et scénarios les plus importants : page d’accueil, moteur de recherche, création de compte, panier, paiement, contact, espace client et contenus éditoriaux. Vérifiez la navigation au clavier, le focus, le zoom, le mode mobile, les erreurs de formulaire et le rendu avec une lecture vocale. Les tests avec des personnes concernées par la dyslexie apportent une information irremplaçable : là où une équipe connaît trop bien son produit, elles révèlent les ambiguïtés et les points de fatigue.

Fixez des critères mesurables pour chaque version : taux de réussite d’une tâche, temps nécessaire, erreurs rencontrées, commentaires verbatims et gravité des problèmes. Corrigez d’abord ce qui bloque une action essentielle ou rend une information indispensable inaccessible. Puis alimentez un backlog et des composants réutilisables, afin que les améliorations ne disparaissent pas à la prochaine refonte.

Pour démarrer sans attendre une refonte complète, choisissez trois pages à fort trafic ou à fort enjeu, appliquez une grille de lecture et de navigation, puis faites tester un parcours réel. Les corrections les plus simples — texte plus aéré, consignes explicites, boutons nommés et zoom fiable — produisent souvent un effet immédiat pour tous les visiteurs.

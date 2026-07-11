---
title: "Séparer licence OEM d’un laptop reconditionné : légalité et technique"
description: "Peut-on retirer ou transférer la licence OEM d’un laptop reconditionné ? Règles légales, vérifications techniques et solutions sans risque."
excerpt: "La licence Windows OEM d’un ordinateur portable reconditionné est en principe rattachée à l’appareil, pas à son acheteur. Avant de réinstaller, revendre ou changer de carte mère, il faut distinguer la clé, l’activation et le droit d’usage."
date: "2025-05-16T15:57:21"
updated: "2026-07-11T05:52:06.200Z"
category: tech
tags: ["windows", "licence oem", "pc reconditionné", "activation windows", "ordinateur portable"]
image: "/img/featured/licence-oem-laptop-reconditionne"
imageAlt: "Séparer licence OEM d’un laptop reconditionné : légalité et technique"
author: "La rédaction UWOS"
readingTime: 11
status: published
featured: false
keyTakeaways:
  - "Une licence Windows OEM est normalement attachée au PC d’origine, en pratique à sa carte mère, et ne se revend pas séparément."
  - "Retrouver une clé dans le BIOS ou dans Windows ne crée pas un droit de transfert vers un autre ordinateur."
  - "Un compte Microsoft peut mémoriser une activation, sans transformer une licence OEM en licence Retail transférable."
  - "Sur un PC reconditionné, vérifiez l’édition, le statut d’activation et l’origine de la licence avant toute réinstallation ou revente."
  - "Pour équiper légalement un autre ordinateur, achetez une licence Retail ou utilisez le système déjà fourni avec cette seconde machine."
faq:
  - q: "Puis-je utiliser la clé OEM de mon ordinateur reconditionné sur un autre PC ?"
    a: "En règle générale, non. Une licence OEM préinstallée est attribuée au matériel d’origine et ne doit pas être dissociée de cet ordinateur pour activer un second PC. Le fait qu’une clé soit lisible ne modifie pas ses conditions de licence."
  - q: "Que se passe-t-il si je formate un laptop reconditionné avec Windows OEM ?"
    a: "Vous pouvez normalement réinstaller la même édition de Windows sur le même ordinateur. Sur les machines récentes, la clé peut être stockée dans le micrologiciel UEFI et Windows se réactive automatiquement une fois connecté à Internet. Installez toutefois la bonne édition, par exemple Home ou Pro."
  - q: "Une licence numérique liée à mon compte Microsoft est-elle transférable ?"
    a: "Pas automatiquement. Le lien avec le compte Microsoft aide surtout à restaurer l’activation après certains changements matériels ou une réinstallation. La nature juridique de la licence demeure déterminante : une OEM reste en principe attachée à l’appareil d’origine."
  - q: "Puis-je revendre un PC reconditionné avec sa licence OEM ?"
    a: "Oui, le PC peut généralement être cédé avec le système OEM qui lui est associé. Ne vendez pas la clé séparément et supprimez auparavant vos données, vos comptes et vos clés de récupération personnelles. L’acheteur doit recevoir une machine réinitialisée, pas l’accès à vos services."
  - q: "Comment savoir si Windows est vraiment activé sur un ordinateur d’occasion ?"
    a: "Ouvrez Paramètres, puis Système et Activation, afin de lire le statut exact et l’édition installée. Vous pouvez aussi exécuter la commande `slmgr /xpr` dans l’Invite de commandes pour connaître l’état d’activation. Un statut activé est rassurant, mais il ne prouve pas à lui seul la régularité de la chaîne de licence."
---

Une licence Windows OEM fournie avec un laptop reconditionné ne se « sépare » normalement pas pour être utilisée sur un autre ordinateur : elle accompagne la machine à laquelle elle a été attribuée. Techniquement, il est parfois possible de lire une clé ou de tenter une activation ailleurs ; juridiquement et contractuellement, cette manipulation ne donne pas un droit de transfert. La bonne démarche dépend donc de votre objectif : réinstaller le même PC, le revendre, remplacer une pièce ou équiper une seconde machine.

## Comprendre ce que recouvre réellement une licence OEM

OEM signifie *Original Equipment Manufacturer*, soit fabricant d’équipement d’origine. Dans le cas le plus courant, Windows a été installé par le constructeur avant la première vente du PC. Sur un laptop reconditionné, cette licence peut toujours être celle qui accompagnait l’appareil neuf, ou être une licence Windows attribuée dans le cadre d’un programme de reconditionnement professionnel.

La confusion vient du fait que quatre éléments distincts sont souvent appelés, à tort, « la licence » :

- **la clé de produit**, une série de 25 caractères utilisée pour identifier ou activer une édition de Windows ;
- **l’activation**, le contrôle technique effectué par les serveurs de Microsoft ;
- **la licence**, c’est-à-dire le droit d’utiliser le logiciel selon des conditions précises ;
- **le compte Microsoft**, qui peut mémoriser une licence numérique et faciliter une réactivation.

Une clé affichée par un outil, une activation réussie ou un compte Microsoft associé ne valent donc pas automatiquement autorisation de déplacer Windows vers un autre PC.

Sur la plupart des machines commercialisées avec Windows 8 ou une version ultérieure, la clé OEM est inscrite dans le micrologiciel UEFI/BIOS, selon le mécanisme souvent appelé OA3. Lors d’une réinstallation de la même édition, Windows peut la détecter sans même vous la demander. Sur d’autres appareils, l’activation repose sur une empreinte matérielle enregistrée côté Microsoft. Dans les deux cas, le point d’ancrage est le matériel d’origine.

:::key[À retenir]
Une licence OEM est liée à l’ordinateur qui l’a reçue, et non à la personne qui l’utilise. Lire sa clé dans Windows ou dans l’UEFI ne permet pas de l’extraire légalement pour équiper un autre ordinateur.
:::

### OEM, Retail et licences de reconditionnement : ne pas les confondre

La mention « Windows activé » sur une annonce d’occasion ne suffit pas à identifier le type de droit. Voici les différences qui comptent dans la pratique.

| Type de licence | Attachement et transfert | Usage adapté |
|---|---|---|
| OEM constructeur | Associée au PC d’origine ; non transférable séparément | Réinstaller, conserver ou céder ce même PC |
| Retail (boîte ou achat numérique au détail) | En principe transférable vers un autre PC, à condition de ne l’utiliser que sur un seul appareil à la fois | Changer régulièrement de machine ou assembler un PC |
| Licence attribuée par un reconditionneur professionnel | Généralement fournie pour le PC reconditionné concerné ; conditions à vérifier sur les documents remis | Acheter un PC d’occasion prêt à l’emploi |
| Volume, éducation ou entreprise | Dépend du contrat de l’organisation ; souvent inutilisable par un particulier hors de ce cadre | Parc informatique d’une organisation, jamais une clé isolée sur une place de marché |

Le marché de l’occasion ajoute une difficulté : une étiquette de clé de produit, un autocollant d’authenticité ancien ou une activation en cours ne garantissent pas nécessairement que le droit est clair et durable. Une machine issue d’une flotte professionnelle peut, par exemple, avoir été activée avec un mécanisme d’entreprise qui cessera de fonctionner hors de son environnement d’origine.

## Ce que permettent les règles de licence — et ce qu’elles interdisent

Les conditions applicables aux logiciels OEM de Microsoft prévoient généralement que le logiciel est attribué à l’appareil avec lequel il a été fourni. L’ordinateur peut être donné ou revendu avec son Windows OEM ; en revanche, la licence ne doit pas être détachée de cette machine, cédée seule, ni réemployée pour activer un autre PC.

Cela donne des réponses assez simples aux cas fréquents :

- **vous réinstallez Windows sur le laptop reconditionné** : c’est l’usage normal de la licence OEM, à condition de réinstaller l’édition correspondante ;
- **vous vendez le laptop** : la licence reste avec le laptop, mais vos données et vos comptes doivent partir avant lui ;
- **vous gardez le laptop et récupérez la clé pour un nouveau PC** : ce n’est pas un transfert autorisé pour une OEM ;
- **vous démontez un PC irréparable et vendez uniquement sa clé** : ce n’est pas une cession régulière de la licence OEM ;
- **vous remplacez la carte mère** : l’activation peut être perdue, car Windows peut considérer qu’il s’agit d’un nouvel appareil.

La réglementation européenne sur l’épuisement du droit de distribution de certains logiciels d’occasion ne constitue pas un passe-droit général pour isoler une licence OEM de son matériel. Les contrats, la nature de la licence et la chaîne de cession restent déterminants. Dans un cas ambigu — parc professionnel, facture incomplète, licence ancienne ou reconditionneur peu transparent — il est plus prudent de demander au vendeur un écrit sur l’origine du Windows fourni que de fonder sa décision sur une clé trouvée dans le système.

:::warning[Attention]
Les marketplaces proposent des « clés Windows OEM » à quelques euros. Une clé peut activer Windows au moment de l’achat tout en provenant d’un contrat en volume, d’un matériel démonté ou d’un canal non destiné à la vente séparée. Activation technique et droit d’usage ne sont pas synonymes.
:::

### Le compte Microsoft ne rend pas une OEM transférable

Dans les paramètres de Windows, vous pouvez voir le message « Windows est activé avec une licence numérique liée à votre compte Microsoft ». Cette formulation est utile, mais elle est souvent mal interprétée.

Le compte Microsoft sert d’identifiant pour l’assistant d’activation, notamment après une réinstallation ou certaines réparations. Il ne change pas la catégorie de votre licence. Si le droit de départ est OEM, l’association au compte ne le transforme pas en licence Retail transférable. Retirer le PC de la liste des appareils de votre compte ne « libère » pas non plus sa licence.

## Vérifier l’activation et l’édition sans prendre de risque

Avant de formater, de modifier le matériel ou de remettre le PC à un acheteur, faites un état des lieux. Cette vérification ne prend que quelques minutes et évite de confondre Windows Home, Pro, Enterprise ou une édition Education.

### Les contrôles à effectuer dans Windows

1. Ouvrez **Paramètres > Système > Activation**. Notez l’édition installée et le message d’activation.
2. Dans l’Invite de commandes lancée normalement, exécutez `slmgr /xpr`. Une fenêtre indique si Windows est activé de façon permanente ou si une expiration est prévue.
3. Pour obtenir davantage de détails techniques, utilisez `slmgr /dlv`. Cherchez notamment la ligne de canal de licence ; elle peut indiquer OEM, Retail ou Volume, sans remplacer l’analyse des documents d’achat.
4. Si vous voulez savoir si une clé OEM est stockée dans le micrologiciel, ouvrez PowerShell et lancez :

```powershell
(Get-CimInstance -ClassName SoftwareLicensingService).OA3xOriginalProductKey
```

Si la commande ne renvoie rien, cela ne prouve pas l’absence de licence légitime : le PC peut utiliser une licence numérique ou une autre méthode d’activation. Si elle affiche une clé, ne la publiez pas dans une annonce, une photo ou une conversation de support : elle peut être réutilisée abusivement.

:::info[À savoir]
La clé intégrée au firmware est généralement détectée automatiquement par le programme d’installation de Windows. Il est donc rarement utile de l’extraire avant une réinstallation sur le même PC ; conservez plutôt la facture et la référence exacte de l’appareil.
:::

### Vérifier aussi la cohérence entre le matériel et l’édition

Un ordinateur grand public livré à l’origine avec Windows Home, mais affichant soudain Windows Pro ou Enterprise, mérite une vérification complémentaire. Cela n’est pas forcément irrégulier : une entreprise a pu acheter une mise à niveau Pro, ou le reconditionneur a pu fournir une licence distincte. Mais demandez alors une preuve d’origine au vendeur.

Une réinstallation de Windows Pro sur un PC dont l’UEFI contient une clé Home peut aussi générer une demande de clé, voire une activation impossible. La solution n’est pas de chercher une clé aléatoire : réinstallez l’édition correcte ou achetez une mise à niveau légitime si vous avez réellement besoin de Pro.

## Réinstaller, réparer ou changer de matériel : les bonnes méthodes

Séparer la licence n’est pas la bonne approche si votre but est simplement de remettre le laptop en état. Dans la grande majorité des cas, une réinstallation propre suffit et préserve le droit d’usage attaché à la machine.

### Réinstallation sur le même ordinateur

Sauvegardez vos fichiers, puis utilisez la fonction **Réinitialiser ce PC** de Windows ou une clé d’installation officielle créée avec l’outil Microsoft. Pendant l’installation :

- choisissez la même édition que celle pour laquelle le PC est licencié ;
- si l’installateur propose « Je n’ai pas de clé de produit », utilisez cette option lorsque vous réinstallez sur le même appareil ;
- connectez le PC à Internet après l’installation pour permettre l’activation ;
- installez les pilotes du fabricant, surtout pour le Wi-Fi, le chipset et la gestion d’alimentation.

Sur un laptop compatible, Windows détectera souvent la clé UEFI tout seul. Si l’activation échoue après une réinstallation pourtant conforme, consultez d’abord l’assistant d’activation intégré et vérifiez que l’horloge, la connexion Internet et l’édition sont correctes.

### Remplacement de la carte mère : le point sensible

La carte mère représente l’identité matérielle principale de l’ordinateur pour l’activation. Un remplacement pour panne peut donc déclencher une désactivation. Lorsque la réparation est faite par le fabricant ou un réparateur agréé avec une pièce équivalente, il peut exister une procédure de réactivation ou de service à suivre. Conservez le diagnostic, la facture de réparation et tout justificatif du remplacement.

À l’inverse, changer de carte mère pour transformer un laptop, ou la remplacer par une carte d’un autre modèle, peut être assimilé à la création d’un nouvel appareil. Ne partez pas du principe que la licence OEM suivra automatiquement. Si une activation indépendante est indispensable, prévoyez une licence Retail adaptée à l’édition souhaitée.

:::tip[Le conseil UWOS]
Avant toute réparation lourde, photographiez l’écran d’activation, relevez le numéro de série du PC et gardez la facture du reconditionneur. Ces éléments seront plus utiles qu’une clé copiée dans un fichier texte en cas de réactivation à justifier.
:::

## Revendre ou donner le laptop sans céder vos données

La licence OEM peut accompagner le PC lors de sa revente, mais elle ne doit pas emporter votre identité numérique. Commencez par sauvegarder vos documents, vérifiez la synchronisation de vos navigateurs, puis déconnectez les comptes personnels : Microsoft, OneDrive, navigateur, messageries, gestionnaire de mots de passe et logiciels sous abonnement.

Ensuite, lancez **Réinitialiser ce PC > Supprimer tout**. Si vous cédez l’appareil à un inconnu, choisissez l’option de nettoyage du lecteur lorsque Windows la propose : elle est plus longue, mais réduit le risque de récupération triviale de données. Pour un disque ancien ou un contexte professionnel, une procédure d’effacement adaptée peut être nécessaire.

Ne communiquez pas la clé OEM dans l’annonce : l’acheteur n’en a normalement pas besoin pour utiliser le PC vendu avec son Windows. Indiquez simplement, de façon factuelle, l’édition installée, le statut d’activation observé et les éventuels justificatifs remis. Si le PC est vendu sans Windows ou avec Linux, vous ne pouvez pas réutiliser pour autant l’OEM d’origine sur une autre machine ; elle demeure rattachée au laptop.

## Choisir l’option correcte selon votre objectif

| Votre situation | Solution recommandée | À éviter |
|---|---|---|
| Vous voulez repartir de zéro sur le laptop | Réinstaller la même édition de Windows sur ce PC | Acheter une seconde clé sans avoir vérifié l’édition d’origine |
| Vous changez de SSD ou de RAM | Réinstaller ou cloner le système ; l’OEM reste généralement inchangée | Extraire la clé « par sécurité » et l’utiliser ailleurs |
| Vous remplacez la carte mère après une panne | Garder les justificatifs, utiliser l’assistant d’activation et le support compétent si nécessaire | Considérer d’emblée la carte de remplacement comme le même appareil |
| Vous revendez le laptop | Réinitialiser le PC et céder Windows avec lui | Revendre la clé séparément ou laisser vos comptes connectés |
| Vous voulez Windows sur un second PC | Utiliser sa licence existante ou acheter une licence Retail fiable | Déplacer l’OEM du laptop reconditionné |

Le réflexe le plus sûr est simple : laissez la licence OEM avec le laptop reconditionné, même si vous le formatez ou le cédez. Vérifiez son activation avant toute intervention, conservez les preuves d’achat et, pour un autre ordinateur, choisissez une licence explicitement transférable ou le système qui lui est déjà destiné.

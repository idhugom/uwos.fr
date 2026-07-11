---
title: "Comment utiliser Centreon Demo pour surveiller votre infrastructure ?"
description: "Apprenez à exploiter Centreon Demo : hôtes, services, seuils, alertes, tableaux de bord et méthode pour préparer un vrai déploiement."
excerpt: "Centreon Demo permet de comprendre concrètement le fonctionnement d’une plateforme de supervision avant de l’installer. Apprenez à lire les statuts, analyser les incidents et construire une méthode transposable à votre infrastructure."
date: "2024-06-22T07:46:50"
updated: "2026-07-11T05:52:06.200Z"
category: tech
tags: ["centreon", "supervision informatique", "monitoring infrastructure", "alertes it", "observabilité"]
image: "/img/featured/comment-utiliser-centreon-demo-pour-surveiller-votre-infrastructure"
imageAlt: "Comment utiliser Centreon Demo pour surveiller votre infrastructure ?"
author: "La rédaction UWOS"
readingTime: 10
status: published
featured: false
keyTakeaways:
  - "Centreon Demo est un environnement d’apprentissage : il ne supervise pas automatiquement votre propre réseau."
  - "La lecture des hôtes, services, statuts et performances est le point de départ d’une supervision utile."
  - "Des seuils cohérents et des alertes ciblées réduisent fortement le bruit opérationnel."
  - "Toute modification de configuration doit être déployée sur le poller pour prendre effet."
  - "Avant un passage en production, testez les alertes, les accès réseau et la capacité du poller."
faq:
  - q: "Centreon Demo surveille-t-il directement mon infrastructure ?"
    a: "Non. Une instance de démonstration affiche généralement une infrastructure fictive ou préconfigurée afin de découvrir les écrans, les statuts et les tableaux de bord. Pour surveiller vos propres équipements, il faut installer ou utiliser une plateforme Centreon reliée à un ou plusieurs pollers ayant accès à vos ressources."
  - q: "Quelle différence entre un hôte et un service dans Centreon ?"
    a: "Un hôte représente une ressource supervisée : serveur, routeur, machine virtuelle, site web ou équipement réseau. Un service est un contrôle précis associé à cet hôte, par exemple le ping, l’espace disque, l’usage CPU, un processus, une URL HTTPS ou une métrique via SNMP."
  - q: "Pourquoi une alerte reste-t-elle en état WARNING ou CRITICAL après une modification ?"
    a: "Vérifiez d’abord que la configuration a bien été exportée puis rechargée sur le poller concerné. Contrôlez ensuite le seuil appliqué, la commande utilisée, les tentatives avant validation de l’état et la fraîcheur des données affichées."
  - q: "Faut-il installer un agent pour utiliser Centreon ?"
    a: "Pas systématiquement. Centreon peut interroger un équipement via ICMP, SNMP, HTTP, une API, SSH ou des connecteurs adaptés. Un agent ou un protocole d’exécution à distance peut toutefois être nécessaire pour récupérer des métriques système détaillées sur certains serveurs."
  - q: "Quels services faut-il superviser en premier ?"
    a: "Commencez par la disponibilité des services métiers, les sauvegardes, l’expiration des certificats, le stockage, les ressources système et les flux réseau critiques. Le bon ordre dépend de l’impact utilisateur : surveillez ce qui rendrait réellement le service indisponible ou dégradé."
---

Centreon Demo est une bonne porte d’entrée pour apprendre à superviser une infrastructure sans toucher immédiatement à la production. L’environnement de démonstration permet d’explorer des hôtes, des services, des alertes et des tableaux de bord déjà alimentés ; l’objectif est d’acquérir les bons réflexes avant de connecter des serveurs, applications et équipements réels.

## Comprendre ce que Centreon Demo permet — et ne permet pas — de faire

Centreon est une plateforme de supervision informatique. Elle collecte des contrôles techniques, évalue leur état selon des seuils, centralise les résultats et peut prévenir les équipes lorsqu’un problème est confirmé. Centreon Demo présente habituellement une instance déjà configurée, avec des ressources fictives ou anonymisées et des données prêtes à consulter.

C’est donc un terrain d’entraînement, pas un outil qui découvre ou surveille spontanément votre réseau. Selon la démo accessible, certaines actions de configuration peuvent être limitées, réinitialisées ou simplement impossibles. Ne saisissez jamais d’identifiants, d’adresses IP internes ou de données sensibles dans un environnement public de démonstration.

:::key[À retenir]
Dans Centreon, un **hôte** désigne la ressource à surveiller ; un **service** désigne le contrôle effectué sur cette ressource. Une supervision exploitable consiste à relier ces contrôles à un impact opérationnel, pas à accumuler des métriques.
:::

Avant d’ouvrir les écrans, définissez le scénario que vous souhaitez comprendre. Par exemple : « détecter l’indisponibilité d’un site e-commerce », « être averti avant la saturation d’un disque de base de données » ou « vérifier que les sauvegardes se terminent correctement ». Cette question guidera toute la suite : métrique à collecter, seuil, fréquence de contrôle, destinataire de l’alerte et procédure de résolution.

## Prendre en main les écrans de supervision

L’interface peut légèrement varier selon la version de Centreon et le paramétrage de la démo. Les principes restent toutefois identiques : partir de la vue globale, identifier une anomalie, puis descendre jusqu’au contrôle technique concerné.

### Lire le tableau de bord et les statuts

Commencez par la page d’accueil, le tableau de bord ou les vues de statut. Recherchez les indicateurs suivants :

- le nombre d’hôtes et de services dans chaque état ;
- les incidents ouverts, acquittés ou placés en maintenance ;
- les derniers changements d’état ;
- les graphiques de performance disponibles ;
- la date et l’heure de la dernière vérification.

Les états les plus courants sont **OK**, **WARNING**, **CRITICAL** et **UNKNOWN** pour les services, ainsi que **UP**, **DOWN** et **UNREACHABLE** pour les hôtes. Un état UNKNOWN ne signifie pas qu’un équipement est nécessairement en panne : il peut révéler une erreur de commande, un droit insuffisant, une réponse invalide ou un problème de communication avec le poller.

Ne vous contentez pas de la couleur. Ouvrez le détail d’un service en erreur et lisez la sortie du contrôle : elle indique souvent la valeur relevée, le seuil appliqué et une explication exploitable. Pour un disque, vous pourrez par exemple voir le pourcentage occupé ou l’espace libre restant ; pour une URL, le code HTTP, le temps de réponse ou l’échec TLS.

### Naviguer d’un symptôme à sa cause probable

Utilisez la liste des ressources pour filtrer les états non conformes, puis observez les liens entre hôtes et services. Si plusieurs services d’un même serveur sont en erreur au même moment, examinez d’abord l’accessibilité de l’hôte, du réseau ou du poller plutôt que chaque service isolément. À l’inverse, si seul le contrôle HTTPS est en erreur alors que le serveur répond au ping, le problème se situe vraisemblablement au niveau du service web, du certificat ou du chemin réseau applicatif.

Les historiques d’état sont particulièrement instructifs dans une démo. Ils montrent la différence entre un incident bref, une dégradation récurrente et une panne durable. Consultez aussi les courbes de performance lorsqu’elles existent : une alerte de stockage a plus de sens si elle est replacée dans une tendance de remplissage sur plusieurs jours.

:::info[À savoir]
Un état d’alerte n’est généralement validé qu’après un nombre défini de tentatives. Ce mécanisme évite de déclencher une notification à la moindre perte de paquet ou réponse ponctuellement lente. Il faut donc distinguer une anomalie transitoire d’un incident confirmé.
:::

## Construire le modèle de supervision à reproduire en production

La démo est utile si vous la lisez comme le prototype d’un dispositif réel. Dans une installation Centreon, la configuration associe en général des hôtes, des modèles, des commandes de contrôle, des services et un poller chargé d’exécuter les vérifications.

### Partir des services métiers, puis descendre vers la technique

L’erreur classique consiste à commencer par surveiller tous les compteurs disponibles. Le résultat est un flot de notifications difficile à interpréter. Commencez plutôt par les parcours ou fonctions dont l’arrêt pénalise réellement l’entreprise : connexion utilisateur, paiement, messagerie, API métier, accès à un ERP, sauvegarde ou réplication.

Pour chaque élément critique, définissez ensuite les dépendances techniques pertinentes : disponibilité du serveur, état du processus, stockage, base de données, certificat, connexion réseau ou service tiers. Ce raisonnement permet de choisir peu de contrôles, mais utiles.

| Élément à superviser | Contrôle initial pertinent | Signal d’alerte à privilégier | Finalité opérationnelle |
|---|---|---|---|
| Site ou API publique | Requête HTTP/HTTPS depuis un point de supervision | Indisponibilité, code anormal, latence durablement élevée, certificat expirant | Détecter l’impact utilisateur réel |
| Serveur Linux ou Windows | Accessibilité, CPU, mémoire, volumes, processus critiques | Volume presque plein, service arrêté, surcharge prolongée | Prévenir la dégradation de l’hôte |
| Équipement réseau | SNMP, interfaces, pertes, disponibilité | Interface coupée, erreurs, saturation, équipement inaccessible | Isoler un incident de connectivité |
| Base de données | Connexion, requêtes simples, espace, réplication selon le cas | Connexion impossible, délai anormal, réplication en retard | Préserver l’application dépendante |
| Sauvegarde | Vérification du dernier job et de son âge | Échec du job ou absence de sauvegarde récente | Sécuriser la capacité de restauration |

Dans Centreon Demo, observez si des modèles d’hôtes ou de services sont déjà utilisés. En production, les modèles évitent de recréer les mêmes paramètres pour chaque machine. Un modèle « serveur Linux standard » peut ainsi fournir les contrôles de base, tandis qu’un modèle spécifique ajoute les vérifications liées à une application.

### Comprendre le rôle des pollers et des connecteurs

Le serveur central Centreon gère l’interface, la configuration et la consolidation des données. Le **poller** exécute, lui, les contrôles auprès des ressources supervisées. Cette séparation est essentielle : un poller placé dans une zone réseau donnée doit pouvoir atteindre les équipements, ports et API qu’il interroge.

Les contrôles reposent sur des plugins ou connecteurs adaptés aux technologies visées. Selon le cas, Centreon utilisera notamment ICMP pour la disponibilité réseau, SNMP pour les équipements, HTTP(S) pour les applications web, une API pour un service cloud, ou un accès distant pour les métriques système. Les packs de supervision et modèles disponibles dans votre environnement accélèrent ce paramétrage, mais ne dispensent jamais de vérifier les prérequis techniques et les droits d’accès.

:::stat[En chiffres]
Un serveur peut facilement nécessiter **10 à 50 contrôles** selon son rôle : système, stockage, processus, applications et dépendances. Démarrez avec les contrôles qui évitent une interruption de service, puis élargissez progressivement le périmètre.
:::

## Paramétrer des seuils et des alertes qui servent vraiment

Une supervision est efficace quand elle produit une information actionnable : qui doit agir, sur quoi, et avec quel niveau d’urgence. Les seuils ne doivent donc pas être copiés aveuglément d’un exemple de démo à votre environnement.

### Définir des seuils adaptés à la métrique

Pour une capacité disque, un seuil exprimé en espace libre peut être plus pertinent qu’un simple pourcentage sur de très gros volumes. Pour une latence web, comparez la valeur à une référence habituelle et à l’expérience utilisateur attendue. Pour le CPU, une pointe courte est souvent tolérable ; une saturation prolongée l’est beaucoup moins.

Distinguez trois niveaux :

- **OK** : fonctionnement normal ;
- **WARNING** : marge réduite ou anomalie à traiter sans urgence immédiate ;
- **CRITICAL** : indisponibilité, risque sérieux ou action rapide nécessaire.

Pensez également à la fréquence de vérification et au nombre de tentatives. Un contrôle toutes les cinq minutes ne détecte pas un incident aussi vite qu’un contrôle toutes les minutes, mais génère moins de charge. Un intervalle très court est justifié pour un parcours critique, moins pour une imprimante peu utilisée ou une capacité qui évolue lentement.

:::warning[Attention]
Un seuil trop agressif crée de la fatigue d’alerte ; un seuil trop laxiste transforme un incident évitable en panne. Validez chaque alerte en vous demandant : « une personne peut-elle prendre une décision utile à la réception de cette notification ? »
:::

### Organiser les notifications et les maintenances

Dans une vraie instance Centreon, les notifications doivent être routées vers la bonne équipe et s’intégrer aux outils déjà utilisés : messagerie, e-mail, plateforme d’astreinte ou gestion d’incidents. Paramétrez des groupes de contacts par responsabilité — infrastructure, réseau, base de données, application — plutôt qu’une liste unique qui reçoit tout.

Les périodes de maintenance constituent un autre point clé. Lors d’une mise à jour planifiée, d’un redémarrage ou d’un remplacement matériel, planifiez une indisponibilité afin d’éviter les alertes inutiles. Cette action ne doit pas masquer indéfiniment un problème : encadrez-la par une période précise et documentée.

Enfin, utilisez l’acquittement d’alerte pour signaler qu’un incident est pris en charge, sans le confondre avec une résolution. L’état ne redevient normal que lorsque le contrôle remonte une valeur conforme.

## Exploiter les tableaux de bord et les données de performance

Un bon tableau de bord n’est pas une mosaïque de voyants. Il répond à une question de pilotage claire. Dans Centreon Demo, testez différentes vues : disponibilité générale, infrastructures critiques, environnement applicatif, réseau ou capacité.

Pour une équipe d’exploitation, un tableau de bord peut afficher les alertes non acquittées, les hôtes en erreur et les services les plus critiques. Pour un responsable applicatif, privilégiez les indicateurs liés aux parcours utilisateurs, aux délais de réponse et aux dépendances. Pour une revue de capacité, affichez plutôt les tendances de stockage, de consommation mémoire ou de saturation d’interfaces.

Les graphiques servent à détecter une évolution, pas seulement à illustrer un incident passé. Une hausse lente de l’occupation disque, une croissance de la latence ou des erreurs réseau répétées à certaines heures sont autant de signaux permettant d’intervenir avant l’interruption de service.

:::tip[Le conseil UWOS]
Créez un premier tableau de bord limité à cinq ou six indicateurs liés à un seul service métier. Si une personne non technique peut comprendre en quelques secondes si ce service est disponible et pourquoi il ne l’est pas, votre sélection est pertinente.
:::

## Passer de la démo à une supervision réelle et maîtrisée

Quand votre parcours dans Centreon Demo est clair, passez à un périmètre pilote limité : quelques serveurs, un équipement réseau et un service applicatif critique. Inventoriez leurs adresses, systèmes, propriétaires, protocoles disponibles, comptes techniques nécessaires et niveaux de criticité. Cette préparation évite les contrôles impossibles faute de flux réseau ou d’autorisations.

Dans le menu de configuration d’une instance réelle — les intitulés diffèrent selon les versions — créez ou importez les hôtes, associez les modèles et services adaptés, puis affectez-les au bon poller. Une fois la configuration enregistrée, elle doit être exportée et rechargée sur le poller concerné pour devenir effective. C’est une source fréquente de confusion : une configuration visible dans l’interface n’est pas nécessairement active tant que ce déploiement n’a pas été effectué.

Testez ensuite volontairement le cycle complet : arrêt contrôlé d’un service non critique, réception de l’alerte, acquittement, retour à la normale et fermeture. Vérifiez aussi les droits minimaux des comptes de supervision, le chiffrement des échanges lorsque possible, la rotation des secrets et la segmentation réseau.

Pour finir, mesurez la qualité du pilote après quelques semaines : nombre d’alertes réellement utiles, faux positifs, incidents détectés avant les utilisateurs et contrôles manquants. Ajustez les seuils, supprimez les alertes sans action possible et étendez le dispositif par lots. Centreon Demo vous aura alors servi à l’essentiel : transformer une interface de monitoring en méthode de supervision fiable, lisible et réellement exploitable.

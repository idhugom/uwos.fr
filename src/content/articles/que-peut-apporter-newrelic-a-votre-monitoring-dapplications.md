---
title: "Que peut apporter NewRelic à votre monitoring d’applications ?"
description: "Découvrez ce que New Relic apporte au monitoring applicatif : APM, traces, logs, alertes, expérience utilisateur et méthode de déploiement."
excerpt: "New Relic centralise les signaux techniques d’une application pour repérer plus vite une lenteur, une erreur ou un incident. Bien configurée, la plateforme relie performance serveur, traces distribuées, logs et expérience réelle des utilisateurs."
date: "2024-08-12T15:47:15"
updated: "2026-07-11T05:52:06.200Z"
category: tech
tags: ["new relic", "monitoring applicatif", "apm", "observabilité", "performance web", "devops"]
image: "/img/featured/que-peut-apporter-newrelic-a-votre-monitoring-dapplications"
imageAlt: "Que peut apporter NewRelic à votre monitoring d’applications ?"
author: "La rédaction UWOS"
readingTime: 10
status: published
featured: false
keyTakeaways:
  - "New Relic relie métriques, traces, logs et données utilisateur pour accélérer le diagnostic d’incident."
  - "L’APM aide à isoler une transaction lente jusqu’au service, à la requête ou à la dépendance concernée."
  - "La valeur dépend surtout de l’instrumentation, des alertes orientées impact et d’une bonne maîtrise des volumes de données."
  - "Le déploiement doit commencer par les parcours métiers critiques, avec des objectifs de performance mesurables."
  - "OpenTelemetry peut faciliter une instrumentation plus portable, mais la gouvernance des données reste indispensable."
faq:
  - q: "New Relic est-il réservé aux grandes entreprises ?"
    a: "Non. Une petite équipe peut l’utiliser pour surveiller une API, un site e-commerce ou une application SaaS, à condition de limiter le périmètre initial. Les organisations plus complexes en tirent davantage de valeur lorsqu’elles doivent corréler de nombreux microservices, environnements cloud et équipes métiers."
  - q: "Quelle différence entre New Relic et un simple outil de suivi de disponibilité ?"
    a: "Un outil de disponibilité indique surtout si un site ou un endpoint répond. New Relic peut aller plus loin en analysant le temps passé dans le code, les bases de données, les appels externes, les conteneurs, les logs et le comportement réel des utilisateurs. Il aide donc à expliquer une panne ou une lenteur, pas seulement à la constater."
  - q: "Faut-il modifier le code pour utiliser New Relic ?"
    a: "Les agents APM automatiques permettent souvent de démarrer avec peu de modifications dans les langages courants. En revanche, l’ajout de transactions métier, d’attributs personnalisés et d’identifiants de corrélation améliore fortement la qualité des diagnostics. Il faut veiller à ne jamais transmettre de données personnelles ou de secrets."
  - q: "New Relic fonctionne-t-il avec Kubernetes et les architectures microservices ?"
    a: "Oui, la plateforme est adaptée aux environnements distribués : elle peut relier services, hôtes, pods, conteneurs, bases de données et dépendances externes. Une nomenclature cohérente des services, versions, environnements et équipes est toutefois nécessaire pour que les vues restent lisibles."
  - q: "Comment éviter que le coût de New Relic ne dérive ?"
    a: "Il faut suivre les volumes ingérés dès le départ, surtout pour les logs et les attributs à forte cardinalité. Définissez des règles de rétention et de filtrage, échantillonnez lorsque c’est acceptable, supprimez les données inutiles et revoyez régulièrement les tableaux de bord comme les alertes obsolètes."
---

New Relic peut transformer un monitoring applicatif dispersé en une vue exploitable de la santé d’un service : temps de réponse, erreurs, dépendances, infrastructure, parcours utilisateur et alertes sont corrélés au même endroit. Son intérêt ne se limite pas à « voir des graphiques » : bien instrumenté, l’outil aide une équipe à déterminer rapidement pourquoi une application est lente, qui est touché et quelle action prioriser.

## New Relic : de la surveillance à l’observabilité applicative

Le monitoring classique répond à des questions relativement simples : le serveur est-il disponible ? Le taux de CPU est-il élevé ? L’API renvoie-t-elle des erreurs ? Ces indicateurs restent indispensables, mais ils ne suffisent plus toujours à comprendre un incident dans une architecture moderne.

Une application peut sembler disponible tout en étant péniblement lente pour certains clients, en échouant sur un paiement précis ou en saturant une base de données située dans un autre service. New Relic se positionne comme une plateforme d’observabilité : elle rapproche plusieurs types de télémétrie afin de reconstituer ce qui se passe réellement.

| Besoin opérationnel | Ce que New Relic peut apporter |
|---|---|
| Détecter une indisponibilité | Contrôles de disponibilité, métriques de santé et alertes sur les échecs ou la latence. |
| Comprendre une lenteur backend | APM, détail des transactions, appels à la base de données et dépendances externes. |
| Suivre un parcours web ou mobile | Données de performance côté navigateur ou application mobile, erreurs JavaScript et temps de chargement perçus. |
| Diagnostiquer un incident distribué | Traces distribuées reliant les services, files de messages et appels réseau d’une même requête. |
| Investiguer avec du contexte | Centralisation et recherche dans les logs, avec liens vers les services et événements concernés. |
| Piloter la fiabilité | Tableaux de bord, objectifs de niveau de service et alertes fondées sur l’impact plutôt que sur un simple seuil technique. |

L’interface organise généralement ces informations autour d’« entités » — applications, services, hôtes, clusters, bases de données ou navigateurs — et de leurs relations. Pour une équipe d’astreinte, cette cartographie évite de naviguer à l’aveugle entre plusieurs consoles au moment où chaque minute compte.

:::key[À retenir]
New Relic est particulièrement utile lorsque l’origine d’un problème n’est pas évidente : une erreur applicative peut provenir du code, d’une requête SQL, d’un fournisseur tiers, d’un pod Kubernetes ou du navigateur de l’utilisateur. La corrélation des signaux réduit le temps passé à chercher où regarder.
:::

## Les capacités qui font la différence au quotidien

### L’APM pour remonter jusqu’à la transaction problématique

L’Application Performance Monitoring (APM) est souvent le premier usage de New Relic. Un agent intégré à l’application collecte automatiquement des informations sur les transactions : débit, durée, taux d’erreur, appels à la base de données, requêtes HTTP sortantes, exceptions et portions de code instrumentées.

Concrètement, si la page de validation d’une commande devient lente, l’équipe peut comparer la transaction à son comportement habituel, voir si le temps est consommé par la base de données, un appel à un service de paiement ou une fonction interne, puis examiner les requêtes ou traces concernées. L’objectif n’est pas d’accumuler des métriques, mais d’identifier un goulot d’étranglement suffisamment précis pour agir.

L’agent peut aussi enrichir les données avec des attributs métier non sensibles : type de parcours, version de l’application, région, canal web ou mobile, par exemple. Ces dimensions permettent de constater qu’une régression touche seulement la version récemment déployée, ou uniquement un flux précis.

### Les traces distribuées pour les architectures en services

Dans un monolithe, le suivi d’une requête est souvent assez direct. Dans une architecture composée de microservices, d’API internes, de fonctions serverless, de caches et de files de messages, il devient difficile de comprendre la chaîne de traitement sans identifiant commun.

Les traces distribuées découpent une requête en « spans », c’est-à-dire ses étapes successives. Elles mettent en évidence le service qui a appelé un autre service, le temps passé à chaque étape et les erreurs propagées. C’est un gain important pour analyser une dégradation qui traverse plusieurs équipes ou fournisseurs.

New Relic peut collecter cette télémétrie au moyen de ses agents ou de standards d’instrumentation tels qu’OpenTelemetry. Le second choix est intéressant lorsqu’une entreprise veut conserver une instrumentation plus portable entre plusieurs outils, tout en bénéficiant des capacités d’analyse de la plateforme.

### Logs, infrastructure et conteneurs : le contexte qui manque aux métriques

Une hausse d’erreurs dans l’APM devient beaucoup plus compréhensible lorsqu’elle est rapprochée d’un log d’exception, d’un redémarrage de conteneur, d’une saturation mémoire ou d’un changement de configuration. New Relic permet de centraliser ces données, à condition de mettre en place des conventions cohérentes de nommage et de tags.

Dans un environnement Kubernetes, les équipes peuvent notamment relier les symptômes applicatifs à l’état des pods, nœuds et déploiements. Dans le cloud, l’enjeu est similaire : un incident n’est pas forcément dans le code ; il peut être lié à une limite de ressource, à un service managé, à une règle réseau ou à une dépendance externe.

:::info[À savoir]
La recherche et les tableaux de bord reposent largement sur les métadonnées envoyées avec les événements : nom du service, environnement, version, région, équipe responsable ou type de transaction. Une taxonomie commune vaut souvent plus qu’un grand nombre de graphiques isolés.
:::

### L’expérience utilisateur réelle et les tests synthétiques

La disponibilité technique ne garantit pas une bonne expérience. Le monitoring navigateur mesure notamment les temps de chargement ressentis, les erreurs front-end et certains comportements selon le navigateur, l’appareil ou la zone géographique. Il aide à distinguer un backend en bon état d’un problème de JavaScript, de ressource statique ou de réseau côté client.

Les tests synthétiques complètent cette vision en simulant régulièrement un accès à une URL, une API ou un parcours critique depuis des emplacements définis. Ils sont utiles pour surveiller une connexion, un tunnel de commande ou un endpoint avant que les remontées client ne se multiplient. Ils ne remplacent toutefois pas les données d’utilisateurs réels : un scénario automatisé est prévisible et ne reflète jamais toute la diversité des usages.

## Des bénéfices concrets pour les équipes produit, développement et exploitation

Le premier bénéfice attendu est la réduction du temps moyen de détection et de résolution d’un incident. Lorsqu’une alerte renvoie directement vers une transaction lente, une trace, une erreur et le déploiement récent qui l’a précédée, l’investigation devient plus courte et moins dépendante de la mémoire de quelques experts.

New Relic facilite aussi un dialogue plus factuel entre équipes. Le produit peut suivre la disponibilité d’un parcours critique et l’impact d’une lenteur ; les développeurs peuvent explorer les transactions ou erreurs ; les équipes plateforme observent les ressources et services sous-jacents. Tous ne regardent pas la même vue, mais ils partagent la même chronologie et les mêmes données de départ.

Enfin, la plateforme aide à intégrer la performance dans le cycle de livraison. La comparaison entre versions permet d’identifier une régression après un déploiement. Les objectifs de niveau de service (SLO) peuvent, eux, traduire une exigence métier — par exemple le pourcentage de requêtes servies sous un délai cible — en indicateurs suivis dans la durée.

:::stat[En chiffres]
Pour un service web, le temps de réponse médian peut masquer une dégradation majeure : une petite fraction de requêtes très lentes suffit à détériorer l’expérience. Suivre les percentiles élevés, tels que p95 ou p99, est généralement plus révélateur que la seule moyenne.
:::

## Bien déployer New Relic : une méthode en cinq étapes

L’erreur la plus fréquente consiste à brancher les agents partout, puis à espérer que les bons signaux émergent d’eux-mêmes. Une démarche progressive produit de meilleurs résultats et limite les coûts de collecte.

### 1. Partir des parcours et risques métier

Recensez trois à cinq parcours dont l’indisponibilité ou la lenteur a un impact immédiat : authentification, recherche, paiement, création de dossier, synchronisation client ou API partenaire. Pour chacun, définissez un service propriétaire, une cible de latence, un taux d’erreur acceptable et les dépendances principales.

Cette étape évite d’accorder la même priorité à une tâche d’administration interne et à un tunnel de commande générateur de revenus.

### 2. Instrumenter les services critiques et relier les versions

Déployez d’abord l’agent APM ou l’instrumentation OpenTelemetry sur les services concernés. Vérifiez que les noms de service, environnements et versions sont homogènes. Sans cette rigueur, une même application peut apparaître sous plusieurs noms et rendre les comparaisons entre production, préproduction et versions presque inutilisables.

Ajoutez ensuite quelques attributs métier contrôlés. Ils doivent servir une question précise : quel endpoint est touché, quel flux échoue, quelle version régresse ? Évitez les identifiants uniques non nécessaires, qui dégradent la lisibilité et gonflent les volumes.

### 3. Construire peu de tableaux de bord, mais décisionnels

Un bon tableau de bord d’exploitation tient souvent sur un écran : trafic, erreurs, latence p95, saturation d’une dépendance, version en cours et état des principaux parcours. Un tableau de bord produit peut afficher l’expérience utilisateur et la réussite d’un flux. Les écrans plus détaillés restent accessibles lors de l’investigation, sans devenir la page d’accueil de tout le monde.

### 4. Configurer des alertes fondées sur le symptôme

Une alerte sur un CPU élevé est parfois utile, mais elle est rarement suffisante. Préférez les signaux proches de l’impact : hausse durable du taux d’erreur, dépassement de latence sur une transaction critique, échec d’un test synthétique ou consommation rapide d’un budget d’erreur SLO.

Chaque alerte doit indiquer sa finalité, une sévérité, un propriétaire, un canal de notification et une procédure de première vérification. Une alerte sans action associée est un bruit futur.

### 5. Organiser la revue après incident

Après un incident significatif, conservez les liens vers les graphes, traces et logs utiles. Demandez-vous si l’alerte a été suffisamment précoce, si le diagnostic était possible sans escalade et si un indicateur manquait. C’est ainsi que la plateforme devient un outil d’amélioration continue plutôt qu’une simple console d’astreinte.

:::tip[Le conseil UWOS]
Avant de créer une alerte, formulez la décision attendue : « Qui doit faire quoi si ce seuil est franchi ? » Si la réponse n’est pas claire, placez d’abord l’indicateur dans un tableau de bord plutôt que de réveiller une équipe.
:::

## Coûts, qualité des données et limites à anticiper

Le coût d’une plateforme d’observabilité dépend généralement des fonctionnalités activées, du nombre d’utilisateurs et surtout du volume de télémétrie envoyé. Les logs détaillés, les traces à fort trafic et les attributs très nombreux peuvent faire croître la consommation beaucoup plus vite que les seules métriques applicatives. Les modalités commerciales et les quotas évoluant, il est préférable de valider le modèle applicable au moment du projet plutôt que de bâtir un budget sur une grille ancienne.

La maîtrise passe par une gouvernance explicite : filtrer les logs inutiles avant ingestion, fixer une durée de conservation adaptée, échantillonner certaines traces à très fort volume lorsque c’est compatible avec l’usage, et surveiller les attributs à forte cardinalité. Un identifiant de session ou de commande peut être précieux dans une trace ciblée ; envoyé systématiquement dans toutes les métriques, il peut devenir coûteux et peu exploitable.

La sécurité doit être traitée dès l’instrumentation. Les agents et collecteurs ne doivent pas transmettre de mots de passe, jetons, numéros de carte, contenu intégral de formulaires ou données personnelles non nécessaires. Mettez en place des règles de masquage, des droits d’accès par rôle et une revue des tableaux de bord partagés.

:::warning[Attention]
Un outil d’observabilité ne compense pas une organisation floue. Sans propriétaire de service, conventions de nommage, seuils métier et rotation de revue, New Relic risque de devenir un entrepôt de données coûteux plutôt qu’un accélérateur de résolution.
:::

New Relic apporte donc sa pleine valeur lorsqu’il est déployé pour répondre à des questions opérationnelles concrètes : quel parcours est dégradé, depuis quand, pour quels utilisateurs, et quelle dépendance est en cause ? Commencez par un service critique, mesurez la qualité des alertes et du diagnostic pendant quelques semaines, puis étendez l’instrumentation aux dépendances qui comptent réellement.

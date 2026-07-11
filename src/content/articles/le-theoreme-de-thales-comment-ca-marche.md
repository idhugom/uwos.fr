---
title: "Le théorème de Thalès : comment ça marche ?"
description: "Comprenez le théorème de Thalès, ses conditions, sa réciproque et la méthode de calcul, avec schémas mentaux, exemples et erreurs à éviter."
excerpt: "Le théorème de Thalès permet de calculer des longueurs inconnues grâce à des rapports de proportionnalité entre deux triangles. Conditions à vérifier, méthode pas à pas, exemple chiffré et réciproque : les bons réflexes pour l’appliquer sans erreur."
date: "2024-08-02T00:07:17"
updated: "2026-07-11T05:52:06.200Z"
category: famille
tags: ["théorème de thalès", "géométrie", "mathématiques", "proportionnalité", "collège"]
image: "/img/featured/le-theoreme-de-thales-comment-ca-marche"
imageAlt: "Le théorème de Thalès : comment ça marche ?"
author: "La rédaction UWOS"
readingTime: 7
status: published
featured: false
keyTakeaways:
  - "Thalès s’applique lorsque deux droites sécantes sont coupées par deux droites parallèles."
  - "Les côtés homologues doivent être placés dans le même ordre dans chaque rapport."
  - "Le théorème direct sert à calculer une longueur ; sa réciproque sert à démontrer un parallélisme."
  - "Un schéma codé et une seule équation de proportion réduisent fortement les erreurs de calcul."
faq:
  - q: "Quelles sont les trois conditions pour appliquer le théorème de Thalès ?"
    a: "Il faut repérer deux droites sécantes, deux droites parallèles qui les coupent, et des points correctement alignés sur chacune des sécantes. Dans la configuration classique, D appartient à la droite (AB), E à la droite (AC) et la droite (DE) est parallèle à (BC)."
  - q: "Comment savoir quels côtés mettre dans les fractions de Thalès ?"
    a: "Commencez par associer les sommets correspondants : A avec A, D avec B et E avec C dans la petite et la grande figure. Vous obtenez alors AD/AB = AE/AC = DE/BC. Gardez toujours le même sens : petite longueur sur grande longueur, ou l’inverse, mais ne mélangez pas les deux."
  - q: "Quelle est la différence entre le théorème de Thalès et sa réciproque ?"
    a: "Le théorème de Thalès part d’un parallélisme connu pour établir une proportion entre des longueurs. Sa réciproque part de proportions vérifiées, avec des points alignés, pour prouver que deux droites sont parallèles."
  - q: "Peut-on utiliser Thalès si les points sont sur les prolongements des segments ?"
    a: "Oui, dans la configuration dite « papillon » ou dans une figure avec prolongements, à condition de vérifier précisément les alignements et le parallélisme. Les longueurs sont alors souvent traitées comme des longueurs positives au collège ; dans un cadre plus avancé, on peut employer des longueurs orientées."
  - q: "Pourquoi le produit en croix fonctionne-t-il dans un exercice de Thalès ?"
    a: "Le produit en croix n’est pas le théorème lui-même : c’est seulement une technique de résolution d’une égalité de fractions issue de Thalès. Une fois la proportion correctement écrite, il permet d’isoler la longueur inconnue."
---

Le théorème de Thalès est une règle de proportionnalité : lorsqu’une droite parallèle à un côté d’un triangle coupe les deux autres côtés, elle crée un triangle plus petit de même forme. Les longueurs correspondantes sont alors dans le même rapport, ce qui permet de calculer une distance inconnue ou, avec sa réciproque, de prouver que deux droites sont parallèles.

## Ce que dit exactement le théorème de Thalès

Prenons un triangle \(ABC\). Le point \(D\) est situé sur le segment \([AB]\), le point \(E\) sur le segment \([AC]\), et la droite \((DE)\) est parallèle à la droite \((BC)\).

On écrit alors :

\[
\frac{AD}{AB}=\frac{AE}{AC}=\frac{DE}{BC}
\]

Autrement dit, le petit triangle \(ADE\) est une réduction du grand triangle \(ABC\). Tous ses côtés ont été multipliés par un même nombre, appelé **coefficient de réduction**. Si ce coefficient vaut \(0,6\), chaque longueur du petit triangle représente 60 % de la longueur correspondante du grand triangle.

Les côtés qui se correspondent sont les suivants :

- \(AD\) correspond à \(AB\) ;
- \(AE\) correspond à \(AC\) ;
- \(DE\) correspond à \(BC\).

:::key[À retenir]
Le théorème de Thalès ne s’applique pas parce qu’une figure « ressemble » à deux triangles emboîtés. Il faut impérativement un parallélisme, ainsi que des points placés sur les mêmes droites. C’est ce parallélisme qui garantit les proportions.
:::

Cette écriture peut aussi se présenter sous d’autres formes équivalentes, par exemple :

\[
\frac{AB}{AD}=\frac{AC}{AE}=\frac{BC}{DE}
\]

Les deux formulations sont justes. La règle essentielle est de ne jamais mélanger les sens des fractions : si l’on écrit « petit sur grand » pour le premier rapport, il faut le faire pour tous les autres.

## Reconnaître la bonne configuration sur une figure

Avant tout calcul, il faut traduire le dessin en informations géométriques. Une figure n’est pas toujours à l’échelle : une droite qui paraît parallèle ne l’est pas forcément, et un point qui semble au milieu d’un segment ne l’est pas nécessairement.

Dans la configuration classique, vérifiez les trois éléments suivants :

1. **Les alignements** : \(A\), \(D\) et \(B\) sont alignés ; \(A\), \(E\) et \(C\) sont alignés.
2. **Le parallélisme** : \((DE)\) est parallèle à \((BC)\).
3. **Les bonnes correspondances** : les deux triangles partagent le sommet \(A\), puis les sommets \(D\) et \(E\) du petit triangle répondent respectivement à \(B\) et \(C\) dans le grand triangle.

Le tableau ci-dessous aide à distinguer les usages les plus fréquents du raisonnement de Thalès.

| Situation rencontrée | Ce que l’on sait au départ | Ce que l’on peut démontrer ou calculer |
|---|---|---|
| Théorème de Thalès direct | Des points alignés et deux droites parallèles | Des rapports égaux et une longueur inconnue |
| Réciproque de Thalès | Des points alignés et deux rapports de longueurs égaux | Que deux droites sont parallèles |
| Configuration avec prolongements | Alignements sur des droites sécantes, parallèles connues | Les mêmes rapports, en adaptant soigneusement le schéma |
| Agrandissement ou réduction | Deux triangles de même forme et coefficient connu | Toutes les longueurs correspondantes |

:::info[À savoir]
Thalès est étroitement lié aux triangles semblables : le parallélisme impose l’égalité de certains angles, donc la même forme pour les deux triangles. Au collège, on utilise surtout les rapports de longueurs ; plus tard, cette idée se relie directement à la similitude.
:::

## La méthode fiable en quatre étapes

Un exercice de Thalès devient beaucoup plus simple lorsqu’on suit toujours le même ordre. L’objectif n’est pas de réciter une formule, mais de construire une proportion justifiée.

### 1. Écrire les hypothèses, pas seulement les mesures

Commencez par noter les alignements et le parallélisme. Par exemple :

- \(A\), \(D\), \(B\) sont alignés ;
- \(A\), \(E\), \(C\) sont alignés ;
- \((DE) // (BC)\).

Ces trois lignes justifient l’emploi du théorème. Dans une rédaction scolaire, elles précèdent la formule.

### 2. Nommer les triangles dans le même ordre

Ici, on compare les triangles \(ADE\) et \(ABC\). Le sommet commun est \(A\). Ensuite, suivez les côtés dans le même sens : \(D\) correspond à \(B\), et \(E\) correspond à \(C\).

Cette étape évite l’erreur la plus fréquente : associer \(AD\) avec \(AC\), deux longueurs qui ne sont pas homologues.

### 3. Écrire une égalité de rapports utile

Il n’est pas nécessaire de recopier les trois fractions si deux suffisent. Pour calculer \(AE\), on peut écrire directement :

\[
\frac{AD}{AB}=\frac{AE}{AC}
\]

Choisissez les deux rapports qui contiennent la longueur cherchée et les données connues. Cela rend le calcul plus lisible.

### 4. Résoudre, puis contrôler le résultat

Isolez l’inconnue par produit en croix ou par multiplication. Enfin, vérifiez l’ordre de grandeur. Si \(D\) est entre \(A\) et \(B\), alors \(AD < AB\). Dans la configuration intérieure habituelle, on doit aussi obtenir \(AE < AC\) et \(DE < BC\).

:::tip[Le conseil UWOS]
Avant de remplacer les lettres par des nombres, tracez ou surlignez les trois paires de côtés correspondants avec les mêmes couleurs. Cette vérification de dix secondes évite les rapports inversés et les unités incohérentes.
:::

## Exemple de calcul : trouver une longueur inconnue

Soit un triangle \(ABC\) dans lequel \(D\) appartient à \([AB]\), \(E\) appartient à \([AC]\) et \((DE) // (BC)\). On connaît :

- \(AB = 10\) cm ;
- \(AD = 6\) cm ;
- \(AC = 15\) cm ;
- \(BC = 12\) cm.

On cherche \(AE\), puis \(DE\).

Puisque les conditions sont réunies, le théorème de Thalès donne :

\[
\frac{AD}{AB}=\frac{AE}{AC}=\frac{DE}{BC}
\]

Pour calculer \(AE\), utilisons les deux premières fractions :

\[
\frac{6}{10}=\frac{AE}{15}
\]

Donc :

\[
AE=\frac{6 \times 15}{10}=9
\]

La longueur \(AE\) mesure **9 cm**.

Pour \(DE\) :

\[
\frac{6}{10}=\frac{DE}{12}
\]

D’où :

\[
DE=\frac{6 \times 12}{10}=7,2
\]

La longueur \(DE\) mesure **7,2 cm**.

Le contrôle est cohérent : \(9 < 15\) et \(7,2 < 12\). Le coefficient de réduction est \(6/10 = 0,6\) ; les deux autres longueurs du petit triangle doivent donc bien valoir 60 % des longueurs correspondantes du grand triangle.

## Utiliser la réciproque pour prouver un parallélisme

La **réciproque du théorème de Thalès** fonctionne dans l’autre sens. Elle est utile lorsqu’un énoncé ne donne pas de parallélisme, mais fournit des longueurs.

Dans le triangle \(ABC\), supposons que \(D\) est sur \([AB]\) et \(E\) sur \([AC]\). Si l’on vérifie que :

\[
\frac{AD}{AB}=\frac{AE}{AC}
\]

alors on peut conclure que :

\[
(DE) // (BC)
\]

à condition que les points soient bien alignés comme annoncé.

Prenons un exemple : \(AB = 15\) cm, \(AD = 9\) cm, \(AC = 20\) cm et \(AE = 12\) cm.

\[
\frac{AD}{AB}=\frac{9}{15}=\frac{3}{5}
\]

et :

\[
\frac{AE}{AC}=\frac{12}{20}=\frac{3}{5}
\]

Les deux rapports sont égaux. Si \(A\), \(D\), \(B\) sont alignés et si \(A\), \(E\), \(C\) sont alignés, la réciproque permet d’affirmer que \((DE)\) est parallèle à \((BC)\).

La nuance est importante : obtenir deux fractions égales ne suffit pas à lui seul. Les conditions d’alignement sont indispensables. Sans elles, la conclusion géométrique ne serait pas fondée.

## Les erreurs courantes et les bons réflexes de vérification

Le calcul est rarement la difficulté principale. Les erreurs viennent surtout d’une lecture trop rapide de la figure ou d’une rédaction incomplète.

### Inverser une seule fraction

Écrire \(AD/AB = AC/AE\) mélange « petit sur grand » et « grand sur petit ». Cette égalité est fausse, sauf cas particulier. Pour y remédier, lisez toujours les fractions horizontalement : petit triangle sur grand triangle, ou grand triangle sur petit triangle.

### Utiliser des segments qui ne correspondent pas

Dans la figure classique, \(AD\) et \(AB\) sont sur le même rayon issu de \(A\) : ils vont ensemble. De même, \(AE\) avec \(AC\), puis \(DE\) avec \(BC\). Ne choisissez pas les côtés en fonction de leur position visuelle — « celui de gauche » ou « celui du bas » — mais en fonction des sommets correspondants.

### Oublier de justifier le parallélisme

Le théorème direct demande que les droites soient parallèles. Si l’énoncé ne le précise pas et qu’aucun codage ne le montre, Thalès ne peut pas être utilisé directement. Il faut parfois démontrer le parallélisme auparavant, avec une propriété d’angles, une réciproque ou une autre donnée.

### Confondre le théorème avec le produit en croix

Le produit en croix est une opération numérique ; il ne prouve rien sur la figure. La preuve géométrique est le théorème de Thalès, fondé sur les alignements et le parallélisme. Le produit en croix intervient seulement après l’écriture justifiée des rapports.

:::warning[Attention]
Une figure peut être trompeuse : ne concluez jamais à un parallélisme parce que deux droites semblent avoir la même direction. Appuyez-vous sur l’énoncé, les marques de parallélisme ou une démonstration avec la réciproque de Thalès.
:::

Pour maîtriser Thalès, adoptez un automatisme : identifiez les deux triangles, vérifiez les trois conditions, associez les côtés dans le même ordre, puis contrôlez que le résultat a une taille logique. Cette méthode sert autant à résoudre des exercices de géométrie qu’à comprendre les mécanismes d’agrandissement et de réduction.

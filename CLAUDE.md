# CLAUDE.md — Guide de travail pour Claude sur UWOS

> Ce fichier documente **comment intervenir** sur le dépôt `uwos.fr` et **comment rédiger**
> pour le média. Il complète le `README.md` (qui décrit la stack et le pipeline de migration).
> Objectif de ce guide : cadrer les futures interventions — **il ne modifie pas le site existant**.
> En cas de doute, ces règles priment sur les habitudes.

---

## A. Règles d'intervention (impératives)

### Règle n°1 — TOUJOURS travailler sur `main` (très important)

Toute session — développement, rédaction, amélioration, correction, publication d'article, etc. —
se fait **directement sur la branche `main`**. **Ne JAMAIS créer de branche** ni travailler sur une
branche secondaire. On commite et on pousse sur `main`.

- `main` est aussi la **branche de production Cloudflare Pages** : chaque push sur `main`
  déclenche `npm run build` → `dist/` → mise en ligne sur `www.uwos.fr`.
- Avant de commiter : `git fetch origin main && git status` pour partir d'un `main` à jour.

### Règle n°2 — Toujours en qualité optimale

Se placer **systématiquement dans le réglage le plus performant / le plus « intelligent » du modèle**
pour chaque intervention (raisonnement et rédaction au maximum). Pas de mode dégradé pour gagner du temps.

- **Seule exception** : la génération d'image OpenAI, qui utilise `"quality": "medium"`
  (choix assumé de coût/rendu — voir §6). Tout le reste (raisonnement, rédaction) reste au maximum.

### Règle n°3 — Clés API / tokens

Les clés et tokens nécessaires (ex. `OPENAI_API_KEY` pour la génération d'images, éventuellement
`OPENAI_TEXT_MODEL`, `OPENAI_IMAGE_MODEL`, clés Cloudflare, etc.) sont **fournis par l'environnement
cloud de Claude Code**, via les variables d'environnement (`process.env`).

- **Récupère-les depuis `process.env`.** Ne les redemande pas à l'utilisateur.
- **Ne les écris JAMAIS en dur** dans le code, ni dans un commit, ni dans un fichier versionné.
  `.env` et `.env.*` sont ignorés par git (`.gitignore`) — c'est voulu, ne pas contourner.

---

## B. Le dépôt en pratique (pour intervenir juste)

| | |
|---|---|
| Framework | **Astro 5** en sortie **statique** (`output: 'static'`) |
| Hébergement | **Cloudflare Pages** — prod = branche `main`, build `npm run build`, sortie `dist/` |
| Node | **22** (`.nvmrc`) |
| Contenu | Markdown, un fichier par article : `src/content/articles/<slug>.md` |
| Domaine | `www.uwos.fr` (apex `uwos.fr` → redirige vers `www`) |
| URLs | `trailingSlash: 'always'` → toutes les URLs finissent par `/` |

Commandes utiles :

```bash
npm install
npm run dev       # serveur de dev local
npm run build     # build statique -> dist/ (ce que fait Cloudflare)
npm run preview   # prévisualiser dist/
npm run gen:images   # génère les images à la une manquantes (voir §6)
```

### Anatomie d'un article

Chaque article = un fichier `src/content/articles/<slug>.md`. **L'`id` de l'entrée EST le slug**,
et le slug EST l'URL (`/<slug>/`). Ne renomme jamais un slug existant (URL cassée + SEO perdu).

Frontmatter (schéma dans `src/content.config.ts`) :

```yaml
---
title: "Titre de l'article (H1, affiché par le template — pas dans le corps)"
description: "Meta description SEO, 140-160 caractères."
excerpt: "Chapô 1-2 phrases (≈ 200-260 caractères) qui donne envie de lire."
date: "2024-10-09T19:58:19"          # date d'origine — ne pas modifier
updated: "2026-07-13T00:00:00.000Z"  # date de mise à jour (optionnel)
category: lifestyle                   # UNE des rubriques ci-dessous
tags: ["mot-clé-1", "mot-clé-2"]      # 3 à 6, minuscules, sans #
image: "/img/featured/<slug>"         # base SANS suffixe, ou null
imageAlt: "Texte alternatif décrivant la photo"
author: "La rédaction UWOS"
readingTime: 9                        # minutes (optionnel, sinon calculé)
status: published                     # 'pending' | 'published'
featured: false
keyTakeaways:                         # 3 à 5 points clés (rendus par le template)
  - "Point clé concret et court."
faq:                                  # 3 à 6 Q/R (rendues + schema.org par le template)
  - q: "Question que se pose le lecteur ?"
    a: "Réponse de 2 à 4 phrases."
---

Introduction qui répond d'emblée à l'intention (pas de « Dans cet article »)...
```

Points d'attention frontmatter :
- **`image`** vaut la base `/img/featured/<slug>` **sans** suffixe. Les fichiers réels sont
  `public/img/featured/<slug>-1200.webp` et `-600.webp` (le template génère le `srcset`).
  Mets `null` seulement si aucune image n'existe encore — mais **on ne publie pas sans image** (§6).
- **`status: published`** rend l'article visible comme publié. `pending` = brouillon en attente.
- **`keyTakeaways` et `faq`** vivent dans le **frontmatter**, PAS dans le corps : le template les
  affiche (et génère les données structurées FAQ schema.org). Ne les duplique pas dans le Markdown.

### Rubriques (valeurs de `category`)

`maison-deco`, `bien-etre-sante`, `business`, `tech`, `finance`, `cuisine`, `voyage-mobilite`,
`famille`, `mode-beaute`, `lifestyle` — et `actualites` (fallback). Définitions dans
`src/lib/taxonomy.js`. Une seule rubrique par article : la plus pertinente.

### Encarts éditoriaux (directives `:::`)

Le corps peut contenir des encarts stylés (transformés par `astro.config.mjs`) :

```
:::key[À retenir]
Le point essentiel, en 1-3 phrases.
:::

:::tip[Le conseil UWOS]
Un conseil actionnable et concret.
:::
```

Types disponibles : `key` (À retenir), `tip` (Le conseil UWOS), `info` (À savoir),
`note` (À noter), `warning` (Attention), `important` (Important), `stat` (En chiffres),
`quote`. Le `[Label]` est optionnel (un intitulé par défaut existe pour chacun).

### Corps de l'article — règles de forme

- **Pas de H1 `#`** : le titre est affiché par le template. Commencer par l'introduction.
- Sections en `##`, sous-sections en `###`. Titres informatifs, naturels (pas de bourrage SEO).
- Tableaux Markdown (GFM) pour les comparaisons.
- **Ne pas** mettre de section « FAQ » ni de liste « points clés » dans le corps (→ frontmatter).

### Ce qui est automatique (ne pas dupliquer à la main)

- Le **sommaire (ToC)** se construit depuis les `##`/`###`.
- Les **articles liés** en bas de page sont choisis automatiquement par rubrique
  (`src/pages/[slug].astro`). Les **liens internes du §5** sont un travail éditorial **dans le corps**,
  distinct de ce bloc automatique.

---

## C. Règles de rédaction

> **Adapte ces réglages au projet et améliore-les si tu vois mieux.** Ce sont des repères de qualité,
> pas un gabarit rigide.

### 0. Règles d'or (prioritaires)

1. **Rédaction par Claude, pas par l'API.** Le **corps de l'article est écrit par toi, Claude**
   (le modèle le plus intelligent), **directement en session** — plus par le pipeline API texte.
   Le pipeline `gpt-5.6-terra` / Batch API décrit dans le `README` a servi à la **migration initiale**
   des 698 articles WordPress ; désormais **c'est Claude qui rédige**. **Seules les images passent
   encore par OpenAI** (§6).
2. **Anti-cannibalisation.** Si le sujet est libre, **vérifie d'abord ce qui existe déjà** :
   chaque nouvel article doit porter sur un **angle/sujet différent** de l'existant (§3).
3. **Qualité avant tout.** Chaque article doit apporter **les meilleures informations sur son sujet** :
   des détails en plus et, selon la pertinence, des éléments riches (tableau, comparatif, astuces,
   FAQ, citation, chiffres…). Ce sont des **exemples** — inutile de tout mettre à chaque fois (§4).
4. **Photo OpenAI obligatoire.** **Jamais** publier un article sans visuel. Toujours une **vraie photo
   à la une générée par OpenAI**, « photo généraliste sur le thème, ultra réaliste », **avant
   publication** (§6).
5. **Liens internes.** Ajouter **1 à 4 liens internes par article** vers d'autres pages du site (§5).

### 1. Le site en bref

**UWOS** est un **média généraliste français « nouvelle génération »** — un magazine en ligne qui
**décode le quotidien**. Baseline : *« Le monde, décodé. »* Il couvre la vie pratique de A à Z à
travers ses rubriques : Maison & Déco, Bien-être & Santé, Business, Tech & Innovation,
Finance & Argent, Cuisine & Saveurs, Voyage & Mobilité, Famille & Éducation, Mode & Beauté,
Lifestyle & Culture.

Positionnement : des **guides complets, vérifiés et réellement utiles, sans blabla**. On ne fait pas
du flux d'actualité chaude : on produit des **contenus de référence** qui répondent parfaitement à
l'intention de recherche du lecteur et qui restent utiles dans le temps (evergreen). Site **statique
haute performance**, pensé pour la vitesse, la lisibilité et le SEO.

### 2. Identité & ton

- **Voix** : « La rédaction UWOS ». Ton **clair, vivant, concret et professionnel** — expert mais
  accessible, jamais donneur de leçons.
- **Français impeccable.** Zéro remplissage, zéro superlatif creux, zéro paraphrase inutile.
- **Écrit pour le web** : phrases nettes, paragraphes courts, information clé mise en avant.
- **Utile et actionnable** : contexte, méthode, ordres de grandeur crédibles, comparatifs,
  cas d'usage, erreurs fréquentes, conseils concrets.
- **Honnête et prudent** : ne jamais inventer de sources, citations, prix ou statistiques précises
  invérifiables. Rester sur des **ordres de grandeur** ou des **fourchettes prudentes**. Sur les
  sujets sensibles (santé, argent, droit), rappeler les limites et renvoyer vers un professionnel.
- **Pas de sur-promesse, pas de putaclic.** Le titre et le chapô tiennent ce qu'ils annoncent.

### 3. Avant d'écrire — anti-cannibalisation

Si le sujet est imposé, écris-le. **Si le sujet est libre ou proche d'un thème existant**, vérifie
d'abord le catalogue pour ne pas dupliquer une intention déjà couverte (mauvais pour le SEO) :

```bash
ls src/content/articles/ | wc -l              # combien d'articles existent
ls src/content/articles/ | grep -i "mot-clef" # slugs proches
grep -ril "expression du sujet" src/content/articles/*.md   # titres/contenus proches
```

Règles :
- **Un slug est unique et définitif.** Un nouvel article = **un nouveau slug** absent du dossier.
  Ne réécris pas par-dessus un article `published` sans intention claire de mise à jour.
- **Un angle par intention.** Si un sujet voisin existe déjà, choisis un **angle distinct**
  (public, cas d'usage, question précise) plutôt que de refaire le même article.
- En cas de recouvrement fort, préfère **enrichir/mettre à jour l'article existant**
  (`updated:`) plutôt qu'en créer un concurrent.

### 4. Qualité rédactionnelle

Chaque article doit être **la meilleure réponse disponible** à son intention. Repères :

- **Introduction** (2-3 phrases) qui répond **immédiatement** à l'intention, sans « Dans cet article ».
- **Structure claire** : 4 à 7 sections `##` (+ `###` si utile), progression logique.
- **Longueur** : article complet et approfondi (souvent **≈ 1200 à 2000 mots**), calibré au sujet —
  la profondeur prime sur le comptage de mots.
- **Éléments riches selon pertinence** (exemples, pas une check-list à cocher entièrement) :
  encarts `:::key/:::tip/:::info/:::warning/:::stat` (≈ **2 à 4**, jamais mécaniques),
  **au moins un tableau comparatif** quand le sujet s'y prête, chiffres d'ordre de grandeur,
  cas d'usage, erreurs fréquentes, mini-comparatifs.
- **`keyTakeaways`** : 3 à 5 points clés courts et concrets (frontmatter).
- **`faq`** : 3 à 6 vraies questions du lecteur, réponses de 2 à 4 phrases (frontmatter).
- **Conclusion** courte et actionnable (sans obligation de titre « Conclusion »).
- **SEO propre** : `title`/`description`/`excerpt` fidèles et incitatifs, titres de sections
  informatifs — jamais de bourrage de mots-clés.

### 5. Liens internes (1 à 4 par article)

Ajouter **1 à 4 liens internes** par article, **dans le corps**, vers d'autres pages du site.

- **Format** : ancre descriptive + chemin absolu avec `/` final →
  `[voir notre guide du matelas idéal](/quel-matelas-choisir/)`.
  Jamais « cliquez ici ». L'ancre décrit la cible.
- **Cibles** : d'autres **articles pertinents** (vérifie que `src/content/articles/<slug>.md` existe)
  ou une **rubrique** (`/rubrique/<category>/`, ex. `/rubrique/maison-deco/`).
- **Pertinence réelle** : on lie parce que ça aide le lecteur, pas pour faire du volume.
  Vérifie que le slug cible existe **avant** de poser le lien (sinon lien mort).
- Ces liens s'ajoutent au bloc « articles liés » automatique en bas de page (§B) — ils ne le
  remplacent pas.

### 6. Photo — toujours une vraie photo OpenAI avant publication

**Règle absolue : jamais publier un article sans visuel.** Toujours une **vraie photo de couverture
générée par OpenAI**, « photo généraliste sur le thème, **ultra réaliste** », **avant publication**.

- **Modèle & paramètres** (via `OPENAI_API_KEY` de l'environnement) :

  ```json
  { "model": "gpt-image-2", "size": "1536x1024", "quality": "medium" }
  ```

- **Une seule image (hero) par article.** Pas de galerie, pas d'image dans le corps.
- Le pipeline existant (`scripts/gen-images.mjs`, `npm run gen:images`) génère l'image et l'enregistre
  en **WebP responsive** (`public/img/featured/<slug>-1200.webp` et `-600.webp`), puis on renseigne
  `image: "/img/featured/<slug>"` et un `imageAlt` descriptif dans le frontmatter.
- Prompt type : photographie éditoriale ultra réaliste illustrant le sujet, lumière naturelle,
  composition magazine, **sans texte, logo ni filigrane**.

---

## D. Publier un nouvel article — check-list

1. `git fetch origin main` puis travailler **sur `main`** (règle n°1).
2. **Anti-cannibalisation** : vérifier qu'aucun article ne couvre déjà la même intention (§3).
3. **Rédiger le corps en session** (Claude, qualité maximale — règles n°2 et d'or n°1) : intro,
   sections `##/###`, encarts, tableau si pertinent (§4).
4. Créer `src/content/articles/<slug>.md` avec le frontmatter complet (§B) —
   `keyTakeaways` et `faq` dans le frontmatter, `status: published`.
5. **Ajouter 1 à 4 liens internes** vers des slugs/rubriques existants (§5).
6. **Générer la photo de couverture** OpenAI et renseigner `image` + `imageAlt` (§6). Jamais sans.
7. `npm run build` pour valider (aucune erreur de collection/frontmatter).
8. Commit clair + **push sur `main`** (Cloudflare Pages déploie automatiquement).

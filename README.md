# UWOS — média généraliste nouvelle génération

Moteur éditorial **statique haute performance** qui remplace l'ancien WordPress
d'`uwos.fr`. Construit avec **Astro**, déployé sur **Cloudflare Pages**.

- 🎨 Design original noir / orange incandescent, animations, View Transitions
- ⚡ 100 % statique (sortie `dist/`), 0 JS superflu, images WebP responsive auto‑hébergées
- 📰 698 articles migrés depuis WordPress (slugs **identiques**, images à la une conservées)
- 🤖 Contenu **entièrement réécrit** par `gpt-5.6-terra` (Responses API + Batch API)

## Stack

| | |
|---|---|
| Framework | Astro 5 (static) |
| Contenu | Markdown + Content Collections (`src/content/articles`) |
| Styles | CSS maison (design system `src/styles`) |
| Fonts | Bricolage Grotesque + Inter (auto‑hébergées) |
| Images | WebP 600/1200 pré‑optimisées (`public/img/featured`) |
| Déploiement | Cloudflare Pages (branche `main` → `npm run build` → `dist`) |

## Commandes

```bash
npm install
npm run dev       # serveur de dev
npm run build     # build statique -> dist/
npm run preview   # prévisualiser dist/
```

## Pipeline de migration & contenu

```bash
npm run wp:fetch      # récupère les 698 posts (titre, slug, image, date) -> data/posts.json
npm run wp:images     # télécharge + optimise les images à la une en WebP
node scripts/seed-content.mjs   # crée 1 fichier .md par article (status: pending)
npm run gen:images    # génère les images manquantes (gpt-image-2, ultra réaliste)

# Réécriture du contenu (gpt-5.6-terra, Responses API)
npm run gen:pilot        # lot synchrone (préprod immédiate)
npm run batch:build      # construit le JSONL des articles "pending"
npm run batch:submit     # envoie le Batch API (/v1/responses, fenêtre 24h)
npm run batch:poll       # état du batch ; télécharge la sortie quand terminé
npm run batch:ingest     # écrit le contenu généré dans les .md (status: published)
```

### Paramètres de génération (exigés)

- **Texte** : `gpt-5.6-terra`, Responses API, `reasoning.effort = high`,
  `text.verbosity = high`, `max_output_tokens = 30000`, sortie JSON structurée
  (titre SEO, description, chapô, catégorie, tags, points clés, FAQ, corps Markdown).
  Volume traité via **Batch API**.
- **Images** : `gpt-image-2`, `1536x1024`, `quality: medium`, rendu « ultra réaliste ».

Chaque article contient : introduction répondant à l'intention, sections `##/###`,
encarts mis en avant (`:::key`, `:::tip`, `:::info`, `:::warning`, `:::stat`),
tableaux comparatifs, points clés et FAQ (avec données structurées schema.org).

## Structure

```
src/
  components/   Header, Footer, Hero, Ticker, ArticleCard, CategoryRail, FilList
  content/articles/   698 articles Markdown (id = slug)
  layouts/BaseLayout.astro
  lib/          taxonomy, site, format
  pages/        index, [slug], rubrique/, le-fil/, rubriques/, recherche, a-propos…
  styles/       global.css, prose.css
scripts/        migration + génération (WP, OpenAI, images)
public/img/featured/   images WebP responsive
```

## Déploiement Cloudflare Pages

- **Branche de production** : `main`
- **Commande de build** : `npm run build`
- **Répertoire de sortie** : `dist`
- **Répertoire racine** : (vide)
- Commentaires de build : activés
- Domaine : `www.uwos.fr` (apex `uwos.fr` → redirigé vers `www`)

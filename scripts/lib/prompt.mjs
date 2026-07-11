/**
 * Prompt & schéma partagés pour la génération de contenu (pilote synchrone + Batch API).
 * Modèle : gpt-5.6-terra · Responses API · reasoning high · verbosity high · 30000 tokens.
 */
import { CATEGORIES } from '../../src/lib/taxonomy.js';

export const MODEL = 'gpt-5.6-terra';
export const MAX_OUTPUT_TOKENS = 30000;

const CATEGORY_SLUGS = CATEGORIES.map((c) => c.slug);
const CATEGORY_LIST = CATEGORIES.map((c) => `- ${c.slug} : ${c.label} (${c.tagline})`).join('\n');

export const SYSTEM_PROMPT = `Tu es rédacteur en chef et expert SEO du média généraliste français premium « UWOS ».
Ta mission : produire des articles de RÉFÉRENCE, complets, fiables et réellement utiles, qui répondent PARFAITEMENT à l'intention de recherche du lecteur.

Principes de rédaction :
- Français impeccable, ton clair, vivant, concret et professionnel. Zéro remplissage, zéro superlatif creux, zéro paraphrase inutile.
- Apporte une VRAIE valeur ajoutée : contexte, méthode, chiffres d'ordre de grandeur crédibles, comparatifs, cas d'usage, erreurs fréquentes, conseils actionnables.
- Structure limpide : une introduction qui répond immédiatement à l'intention, puis des sections logiques en ## et ###.
- Sois exact. N'invente jamais de fausses sources, citations, prix ou statistiques précises non vérifiables : reste sur des ordres de grandeur ou des fourchettes prudentes.
- Tu écris pour le web : phrases nettes, paragraphes courts, mise en avant de l'information clé.`;

const DIRECTIVES_DOC = `Tu DOIS enrichir le corps avec des mises en avant via cette syntaxe de directives (une par bloc, ligne vide avant/après) :
:::key[À retenir]
Le point essentiel, en 1-3 phrases.
:::

:::tip[Le conseil UWOS]
Un conseil actionnable et concret.
:::

:::info[À savoir]
Une information de contexte importante.
:::

:::warning[Attention]
Un piège ou une erreur fréquente à éviter.
:::

:::stat[En chiffres]
Un ordre de grandeur marquant (fourchette prudente).
:::

Utilise au moins 2 à 4 de ces encarts, là où c'est pertinent (pas de façon mécanique).
Pour les COMPARAISONS, utilise un tableau Markdown (GFM) à 2 colonnes ou plus (ex. Avantages | Inconvénients, ou Option A | Option B). Intègre au moins un tableau quand le sujet s'y prête (comparatif, critères, étapes, prix indicatifs).`;

export function buildDeveloperPrompt(post) {
  return `Rédige ENTIÈREMENT un nouvel article original pour UWOS à partir du titre ci-dessous.
Garde EXACTEMENT le même sujet et la même intention que le titre. N'écris pas de titre H1 (# ) : il est affiché séparément. Commence directement par l'introduction.

TITRE : ${post.title}
Indication de sujet (ancien chapô, à NE PAS réutiliser tel quel, seulement pour comprendre le thème) : ${post.excerpt || '—'}

Contraintes de contenu :
1. Longueur : article complet et approfondi (≈ 1200 à 2000 mots), qui couvre le sujet à 360°.
2. Introduction (2-3 phrases) qui répond d'emblée à l'intention de recherche, sans « Dans cet article ».
3. 4 à 7 sections en ## avec, si utile, des sous-sections ###. Titres informatifs et naturels (pas de bourrage de mots-clés).
4. Mets en avant l'information avec les encarts (directives) et au moins un tableau comparatif quand c'est pertinent.
5. NE mets PAS de section FAQ ni de liste « points clés » dans le corps : fournis-les séparément dans les champs "faq" et "key_takeaways".
6. Termine par une courte conclusion actionnable (sans titre « Conclusion » obligatoire).

${DIRECTIVES_DOC}

Champs structurés à renseigner :
- seo_title : titre SEO accrocheur (≤ 65 caractères si possible), fidèle au sujet.
- meta_description : description SEO incitative (140-160 caractères).
- excerpt : chapô de 1-2 phrases (≈ 200-260 caractères) qui donne envie de lire.
- category : choisis LA rubrique la plus pertinente parmi EXACTEMENT ces valeurs :
${CATEGORY_LIST}
- tags : 3 à 6 mots-clés thématiques en minuscules (sans #).
- key_takeaways : 3 à 5 points clés essentiels (phrases courtes et concrètes).
- faq : 3 à 6 questions/réponses réellement utiles (questions que se pose le lecteur), réponses de 2-4 phrases.
- body_markdown : le corps complet de l'article en Markdown (avec les directives et tableaux).
- needs_image : true seulement si l'article aurait besoin d'une image d'illustration générée (sinon false).`;
}

export const RESPONSE_SCHEMA = {
  type: 'object',
  additionalProperties: false,
  properties: {
    seo_title: { type: 'string' },
    meta_description: { type: 'string' },
    excerpt: { type: 'string' },
    category: { type: 'string', enum: CATEGORY_SLUGS },
    tags: { type: 'array', items: { type: 'string' }, minItems: 2, maxItems: 6 },
    key_takeaways: { type: 'array', items: { type: 'string' }, minItems: 3, maxItems: 5 },
    faq: {
      type: 'array',
      minItems: 3,
      maxItems: 6,
      items: {
        type: 'object',
        additionalProperties: false,
        properties: { q: { type: 'string' }, a: { type: 'string' } },
        required: ['q', 'a'],
      },
    },
    body_markdown: { type: 'string' },
    needs_image: { type: 'boolean' },
  },
  required: [
    'seo_title',
    'meta_description',
    'excerpt',
    'category',
    'tags',
    'key_takeaways',
    'faq',
    'body_markdown',
    'needs_image',
  ],
};

/** Corps de requête Responses API pour un article. */
export function buildRequestBody(post) {
  return {
    model: MODEL,
    reasoning: { effort: 'high' },
    text: {
      verbosity: 'high',
      format: {
        type: 'json_schema',
        name: 'uwos_article',
        strict: true,
        schema: RESPONSE_SCHEMA,
      },
    },
    max_output_tokens: MAX_OUTPUT_TOKENS,
    input: [
      { role: 'developer', content: SYSTEM_PROMPT },
      { role: 'user', content: buildDeveloperPrompt(post) },
    ],
  };
}

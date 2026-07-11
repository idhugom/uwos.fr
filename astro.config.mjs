// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import remarkDirective from 'remark-directive';
import { visit } from 'unist-util-visit';

/**
 * Transforme les directives ::: en encarts éditoriaux stylés.
 *  :::info / :::note / :::tip / :::warning / :::key / :::stat
 * Un label optionnel :::tip[Bon à savoir] devient l'intitulé de l'encart.
 */
const LABELS = {
  info: 'À savoir',
  note: 'À noter',
  tip: 'Le conseil UWOS',
  warning: 'Attention',
  important: 'Important',
  key: 'À retenir',
  stat: 'En chiffres',
  quote: '',
};
function remarkCallouts() {
  return (tree) => {
    visit(tree, (node) => {
      if (node.type !== 'containerDirective') return;
      const name = node.name;
      if (!(name in LABELS)) return;
      const data = node.data || (node.data = {});
      // extraire un éventuel label [..]
      let label = LABELS[name];
      const first = node.children[0];
      if (first && first.data && first.data.directiveLabel) {
        label = first.children?.[0]?.value ?? label;
        node.children.shift();
      }
      const children = [];
      if (label) {
        children.push({
          type: 'paragraph',
          data: { hName: 'p', hProperties: { className: ['callout__label'] } },
          children: [{ type: 'text', value: label }],
        });
      }
      children.push(...node.children);
      node.data = {
        hName: 'aside',
        hProperties: { className: ['callout', `callout--${name}`], role: 'note' },
      };
      node.children = children;
    });
  };
}

export default defineConfig({
  site: 'https://www.uwos.fr',
  trailingSlash: 'always',
  output: 'static',
  build: { format: 'directory', inlineStylesheets: 'auto' },
  prefetch: { prefetchAll: true, defaultStrategy: 'viewport' },
  integrations: [
    mdx(),
    sitemap({
      filter: (page) => !page.includes('/404'),
      changefreq: 'weekly',
      priority: 0.7,
    }),
  ],
  markdown: {
    remarkPlugins: [remarkDirective, remarkCallouts],
    gfm: true,
    smartypants: true,
  },
  image: { responsiveStyles: true },
});

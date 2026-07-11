import { CATEGORIES } from './taxonomy.js';

export const SITE = {
  name: 'UWOS',
  domain: 'www.uwos.fr',
  url: 'https://www.uwos.fr',
  title: 'UWOS — Le magazine qui décode le quotidien',
  tagline: 'Le monde, décodé.',
  description:
    "UWOS est le média généraliste qui décrypte le quotidien : maison, bien-être, business, tech, finance, cuisine, voyage. Des guides complets, vérifiés et utiles, sans blabla.",
  locale: 'fr-FR',
  lang: 'fr',
  since: 2023,
  author: 'La rédaction UWOS',
  nav: [
    { label: 'Rubriques', href: '/rubriques/' },
    { label: 'Le fil', href: '/le-fil/' },
    { label: 'À propos', href: '/a-propos/' },
  ],
  categories: CATEGORIES,
  social: [
    { label: 'Instagram', href: 'https://instagram.com/' },
    { label: 'LinkedIn', href: 'https://linkedin.com/' },
    { label: 'X', href: 'https://x.com/' },
  ],
};

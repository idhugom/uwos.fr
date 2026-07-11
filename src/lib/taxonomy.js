/**
 * Taxonomie éditoriale UWOS.
 * L'ancien WordPress rangeait tout dans une seule catégorie « news ».
 * On reconstruit des rubriques thématiques cohérentes pour un vrai magazine.
 * L'ordre compte : la classification provisoire prend la 1ʳᵉ rubrique qui matche.
 */
export const CATEGORIES = [
  { slug: 'maison-deco', label: 'Maison & Déco', tagline: 'Aménager, décorer, bricoler',
    keywords: ['maison', 'déco', 'deco', 'meuble', 'ikea', 'rideau', 'chambre', 'cuisine amén', 'jardin', 'bricol', 'canapé', 'matelas', 'rangement', 'aménag', 'peinture', 'terrasse', 'store', 'luminaire', 'électroménager', 'electromenager', 'visseuse', 'perceuse', 'radiateur', 'chauffage', 'climatis', 'balcon'] },
  { slug: 'bien-etre-sante', label: 'Bien-être & Santé', tagline: 'Corps, esprit, équilibre',
    keywords: ['santé', 'sante', 'bien-être', 'bien-etre', 'médita', 'medita', 'chamani', 'sommeil', 'stress', 'yoga', 'soin', 'thérap', 'therap', 'massage', 'énergie', 'energie', 'spiritu', 'relaxation', 'douleur', 'complément aliment', 'cbd', 'sophrolog', 'naturopath', 'mental'] },
  { slug: 'business', label: 'Business', tagline: 'Entreprendre & réussir',
    keywords: ['entreprise', 'business', 'salon profess', 'stand', 'marketing', 'client', 'vente', 'freelance', 'statut', 'auto-entrepre', 'micro-entrepre', 'société', 'societe', 'b2b', 'prospect', 'objet publicit', 'goodies', 'kbis', 'facture', 'devis', 'management', 'recrut', 'rh ', 'startup', 'commerc'] },
  { slug: 'tech', label: 'Tech & Innovation', tagline: 'Le numérique décrypté',
    keywords: ['tech', 'logiciel', 'application', 'appli ', ' ia ', 'intelligence artificielle', 'numérique', 'numerique', 'ordinateur', 'smartphone', 'internet', 'site web', 'seo', 'référencement', 'referencement', 'wordpress', 'saas', 'cloud', 'data', 'cyber', 'objet connecté', 'domotique', 'gaming', 'jeu vidéo', 'écran', 'clavier', 'robot'] },
  { slug: 'finance', label: 'Finance & Argent', tagline: 'Gérer, épargner, investir',
    keywords: ['argent', 'banque', 'crédit', 'credit', 'prêt', 'pret ', 'budget', 'économie', 'economie', 'impôt', 'impot', 'assurance', 'investir', 'investiss', 'épargne', 'epargne', 'bourse', 'crypto', 'placement', 'retraite', 'fiscal', 'salaire', 'rémunér', 'remuner', 'facture énerg'] },
  { slug: 'cuisine', label: 'Cuisine & Saveurs', tagline: 'Bien manger au quotidien',
    keywords: ['recette', 'cuisine', 'aliment', 'manger', 'congeler', 'abats', 'boisson', 'restaurant', 'gastronom', 'apéro', 'apero', 'vin ', 'fromage', 'viande', 'légume', 'legume', 'dessert', 'pâtiss', 'patiss', 'café ', 'thé ', 'chocolat', 'épice', 'barbecue', 'plancha'] },
  { slug: 'voyage-mobilite', label: 'Voyage & Mobilité', tagline: 'Bouger, partir, explorer',
    keywords: ['voyage', 'camion', 'location', 'voiture', 'auto ', 'vélo', 'velo', 'trajet', 'mobilité', 'mobilite', 'transport', 'train', 'avion', 'vacances', 'hôtel', 'hotel', 'road trip', 'moto', 'scooter', 'trottinette', 'déménag', 'demenag', 'utilitaire', 'pneu', 'carburant'] },
  { slug: 'famille', label: 'Famille & Éducation', tagline: 'Grandir ensemble',
    keywords: ['enfant', 'bébé', 'bebe', 'famille', 'école', 'ecole', 'éducation', 'education', 'parent', 'ado ', 'grossesse', 'maman', 'papa', 'jouet', 'scolaire', 'crèche', 'creche', 'nounou', 'devoirs', 'apprentissage'] },
  { slug: 'mode-beaute', label: 'Mode & Beauté', tagline: 'Style & allure',
    keywords: ['mode', 'vêtement', 'vetement', 'bijou', 'collier', 'beauté', 'beaute', 'coiffure', 'maquillage', 'cosmét', 'cosmet', 'parfum', 'chaussure', 'sac ', 'montre', 'lunette', 'tatouage', 'ongle', 'cheveux', 'peau'] },
  { slug: 'lifestyle', label: 'Lifestyle & Culture', tagline: 'Vivre avec style',
    keywords: ['culture', 'loisir', 'livre', 'film', 'musique', 'art ', 'jeu ', 'cadeau', 'fête', 'fete', 'mariage', 'anniversaire', 'sport', 'animal', 'chien', 'chat ', 'photo', 'événement', 'evenement', 'streaming', 'série', 'serie', 'festival', 'déco de table'] },
];

export const FALLBACK = { slug: 'actualites', label: 'Actualités', tagline: 'À la une', keywords: [] };

const ALL = [...CATEGORIES, FALLBACK];
export const CATEGORY_MAP = Object.fromEntries(ALL.map((c) => [c.slug, c]));

const deburr = (s) =>
  s.toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '');

/** Classification provisoire par mots-clés (remplacée ensuite par l'IA). */
export function classify(title = '', extra = '') {
  const hay = deburr(`${title} ${extra}`);
  for (const cat of CATEGORIES) {
    for (const kw of cat.keywords) {
      if (hay.includes(deburr(kw))) return cat.slug;
    }
  }
  return FALLBACK.slug;
}

export function categoryOf(slug) {
  return CATEGORY_MAP[slug] || FALLBACK;
}

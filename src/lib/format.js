const DTF = new Intl.DateTimeFormat('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' });
const DTF_SHORT = new Intl.DateTimeFormat('fr-FR', { day: '2-digit', month: '2-digit', year: '2-digit' });

export function formatDate(d) {
  return DTF.format(d instanceof Date ? d : new Date(d));
}
export function formatDateShort(d) {
  return DTF_SHORT.format(d instanceof Date ? d : new Date(d));
}
export function isoDate(d) {
  return (d instanceof Date ? d : new Date(d)).toISOString();
}
export function readingTime(text = '') {
  const words = (text.match(/\S+/g) || []).length;
  return Math.max(1, Math.round(words / 200));
}
/** srcset responsive pour les images à la une pré-optimisées */
export function imgSrcset(base) {
  if (!base) return null;
  return {
    src: `${base}-1200.webp`,
    srcset: `${base}-600.webp 600w, ${base}-1200.webp 1200w`,
  };
}
export function pad(n) {
  return String(n).padStart(2, '0');
}

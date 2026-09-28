/**
 * URL para archivos en /public (respeta `base` de Vite, p. ej. GitHub Pages).
 * @param {string} path - Ruta sin slash inicial, ej. "brands/akoenet.png"
 */
export function publicUrl(path) {
  const normalized = path.startsWith('/') ? path.slice(1) : path
  const base = import.meta.env.BASE_URL || '/'
  return base.endsWith('/') ? `${base}${normalized}` : `${base}/${normalized}`
}

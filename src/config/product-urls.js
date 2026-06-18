/**
 * URLs públicas de producción. Sobrescribibles en build (Vite).
 */

function dakinisNormalizeUrl(raw, fallback) {
  const u = String(raw ?? '').trim()
  if (!u) return fallback
  try {
    const parsed = new URL(u)
    return parsed.href.endsWith('/') ? parsed.href : `${parsed.href}/`
  } catch {
    return fallback
  }
}

export const DAKINIS_URL_LANDING = dakinisNormalizeUrl(
  import.meta.env.VITE_LANDING_SITE_URL,
  'https://dakinissystems.com/'
)

export const DAKINIS_URL_CORE = dakinisNormalizeUrl(
  import.meta.env.VITE_CORE_APP_URL,
  'https://core.dakinissystems.com/'
)

export const DAKINIS_URL_STREAMAUTOMATOR = dakinisNormalizeUrl(
  import.meta.env.VITE_STREAMAUTOMATOR_SITE_URL,
  'https://streamautomator.com/'
)

export const DAKINIS_URL_AKOENET = dakinisNormalizeUrl(
  import.meta.env.VITE_AKOENET_SITE_URL,
  'https://akoenet.dakinissystems.com/'
)

/** Proyectos en la sección «Trabajos realizados». */
export const DAKINIS_LANDING_PROJECTS = [
  {
    id: 'akoenet',
    name: 'AkoeNet',
    url: DAKINIS_URL_AKOENET,
  },
  {
    id: 'stream',
    name: 'StreamAutomator',
    url: DAKINIS_URL_STREAMAUTOMATOR,
  },
]

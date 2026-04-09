import { BrandMark } from './BrandMark'
import { SITE } from '../config/site'
import { useLanguage } from '../context/LanguageContext.jsx'

const NAV_HREFS = [
  { key: 'servicios', href: '#servicios' },
  { key: 'proceso', href: '#proceso' },
  { key: 'trabajos', href: '#trabajos' },
  { key: 'contacto', href: '#contacto' },
]

export function SiteHeader() {
  const { locale, setLocale, t } = useLanguage()

  const homeAria = t.brand.homeAria.replace('{name}', SITE.name)

  return (
    <header className="sticky top-0 z-20 border-b border-white/10 bg-[#0B0B0F]/85 backdrop-blur">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-3 px-4 py-3 md:px-6">
        <a href="#" className="flex min-w-0 items-center gap-3" aria-label={homeAria}>
          <BrandMark />
        </a>

        <div className="flex items-center gap-3 md:gap-6">
          <nav aria-label={t.nav.label} className="hidden items-center gap-6 text-sm text-gray-300 md:flex">
            {NAV_HREFS.map(({ key, href }) => (
              <a key={href} href={href} className="transition hover:text-cyan-300">
                {t.nav[key]}
              </a>
            ))}
          </nav>

          <div
            className="flex shrink-0 items-center rounded-lg border border-white/15 bg-white/5 p-0.5"
            role="group"
            aria-label={t.lang.switchLabel}
          >
            <button
              type="button"
              className={`rounded-md px-2 py-1 text-xs font-semibold transition ${
                locale === 'es' ? 'bg-cyan-500/25 text-cyan-200' : 'text-gray-400 hover:text-gray-200'
              }`}
              onClick={() => setLocale('es')}
              aria-pressed={locale === 'es'}
            >
              {t.lang.es}
            </button>
            <button
              type="button"
              className={`rounded-md px-2 py-1 text-xs font-semibold transition ${
                locale === 'en' ? 'bg-cyan-500/25 text-cyan-200' : 'text-gray-400 hover:text-gray-200'
              }`}
              onClick={() => setLocale('en')}
              aria-pressed={locale === 'en'}
            >
              {t.lang.en}
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}

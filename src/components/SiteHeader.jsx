import { BrandMark } from './BrandMark'
import { NAV_LINKS, SITE } from '../config/site'

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-20 border-b border-white/10 bg-[#0B0B0F]/85 backdrop-blur">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-3 md:px-6">
        <a href="#" className="flex min-w-0 items-center gap-3" aria-label={`Inicio ${SITE.name}`}>
          <BrandMark />
        </a>

        <nav aria-label="Principal" className="hidden items-center gap-6 text-sm text-gray-300 md:flex">
          {NAV_LINKS.map(({ href, label }) => (
            <a key={href} href={href} className="transition hover:text-cyan-300">
              {label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  )
}

import { BRAND_ASSETS, SITE } from '../config/site'

/**
 * Una sola petición de imagen según viewport (picture + source).
 * El enlace padre lleva aria-label; aquí las imágenes son decorativas.
 */
export function BrandMark() {
  return (
    <>
      <picture>
        <source media="(min-width: 768px)" srcSet={BRAND_ASSETS.logoDesktop} />
        <img
          src={BRAND_ASSETS.logoMobile}
          alt=""
          role="presentation"
          width={220}
          height={60}
          loading="eager"
          fetchPriority="high"
          decoding="async"
          sizes="(min-width: 768px) 220px, 44px"
          className="h-11 w-11 rounded-xl border border-cyan-300/40 bg-cyan-400/10 object-contain p-1 md:h-12 md:w-auto md:max-w-[220px] md:rounded-lg md:border-white/15 md:bg-white/5"
        />
      </picture>
      <span className="text-sm font-semibold text-gray-100 md:hidden" aria-hidden="true">
        {SITE.name}
      </span>
    </>
  )
}

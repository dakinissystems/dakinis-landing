import { createContext, useContext, useEffect, useMemo, useState } from 'react'
import { DEFAULT_LOCALE, translations } from '../i18n/translations'

const STORAGE_KEY = 'dakinis.locale'

/** @type {import('react').Context<{ locale: 'en' | 'es', setLocale: (l: 'en' | 'es') => void, t: Record<string, unknown> } | null>} */
const LanguageContext = createContext(null)

export function LanguageProvider({ children }) {
  const [locale, setLocaleState] = useState(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY)
      if (stored === 'es' || stored === 'en') return stored
    } catch {
      // ignore
    }
    return DEFAULT_LOCALE
  })

  /** @param {'en' | 'es'} next */
  const setLocale = (next) => {
    setLocaleState(next)
    try {
      localStorage.setItem(STORAGE_KEY, next)
    } catch {
      // ignore
    }
  }

  useEffect(() => {
    document.documentElement.lang = locale === 'es' ? 'es' : 'en'
    const meta = translations[locale]?.meta
    if (meta?.title) document.title = meta.title
    const desc = document.querySelector('meta[name="description"]')
    if (desc && meta?.description) desc.setAttribute('content', meta.description)
  }, [locale])

  const value = useMemo(
    () => ({
      locale,
      setLocale,
      t: translations[locale],
    }),
    [locale]
  )

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const ctx = useContext(LanguageContext)
  if (!ctx) {
    throw new Error('useLanguage must be used within LanguageProvider')
  }
  return ctx
}

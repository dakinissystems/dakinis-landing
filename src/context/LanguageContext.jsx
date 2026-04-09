import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react'
import { DEFAULT_LOCALE, LOCALES, translations } from '../i18n/translations'

const STORAGE_KEY = 'dakinis-locale'

function readStoredLocale() {
  try {
    const v = localStorage.getItem(STORAGE_KEY)
    if (v && LOCALES.includes(v)) return v
  } catch {
    /* ignore */
  }
  if (typeof navigator !== 'undefined' && navigator.language?.toLowerCase().startsWith('es')) {
    return 'es'
  }
  return DEFAULT_LOCALE
}

const LanguageContext = createContext(null)

export function LanguageProvider({ children }) {
  const [locale, setLocaleState] = useState(() => readStoredLocale())

  const setLocale = useCallback((next) => {
    if (!LOCALES.includes(next)) return
    setLocaleState(next)
    try {
      localStorage.setItem(STORAGE_KEY, next)
    } catch {
      /* ignore */
    }
  }, [])

  const t = translations[locale]

  useEffect(() => {
    document.documentElement.lang = t.htmlLang
  }, [t.htmlLang])

  const value = useMemo(() => ({ locale, setLocale, t }), [locale, setLocale, t])

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const ctx = useContext(LanguageContext)
  if (!ctx) {
    throw new Error('useLanguage must be used within LanguageProvider')
  }
  return ctx
}

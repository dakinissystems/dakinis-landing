import { useEffect, useState } from 'react'
import LandingPage from './LandingPage'
import LegalDocumentPage from './pages/LegalDocumentPage.jsx'
import { LanguageProvider } from './context/LanguageContext.jsx'

const LEGAL_ROUTES = {
  '/privacidad': 'privacy',
  '/privacy': 'privacy',
  '/aviso-legal': 'notice',
  '/legal': 'notice',
  '/cookies': 'cookies',
}

function resolveLegalKey(pathname) {
  return LEGAL_ROUTES[pathname] ?? null
}

function AppShell() {
  const [path, setPath] = useState(() => window.location.pathname.replace(/\/$/, '') || '/')

  useEffect(() => {
    function sync() {
      setPath(window.location.pathname.replace(/\/$/, '') || '/')
    }
    window.addEventListener('popstate', sync)
    return () => window.removeEventListener('popstate', sync)
  }, [])

  const legalKey = resolveLegalKey(path)
  if (legalKey) {
    return <LegalDocumentPage docKey={legalKey} />
  }
  return <LandingPage />
}

function App() {
  return (
    <LanguageProvider>
      <AppShell />
    </LanguageProvider>
  )
}

export default App

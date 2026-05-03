import LandingPage from './LandingPage'
import { LanguageProvider } from './context/LanguageContext.jsx'

function App() {
  return (
    <LanguageProvider>
      <LandingPage />
    </LanguageProvider>
  )
}

export default App

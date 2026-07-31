import { StrictMode, useEffect } from 'react'
import { createRoot } from 'react-dom/client'
import { dakinisInitAnalytics } from '@dakinis/shared-brand/analytics'
import { bootstrapDesAppearance } from '../packages/shared-theme/src/theme-engine.js'
import './index.css'
import App from './App.jsx'

const landingTheme = bootstrapDesAppearance({
  product: 'landing',
  namespace: 'landing',
  defaultMode: 'system',
})

dakinisInitAnalytics()

function Root() {
  useEffect(() => () => landingTheme.unsubscribe?.(), [])
  return (
    <StrictMode>
      <App />
    </StrictMode>
  )
}

createRoot(document.getElementById('root')).render(<Root />)

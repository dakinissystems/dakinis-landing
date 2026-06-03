import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { dakinisInitAnalytics } from '@dakinis/shared-brand/analytics'
import './index.css'
import App from './App.jsx'

dakinisInitAnalytics()

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
)

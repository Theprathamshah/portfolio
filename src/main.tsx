import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Analytics } from "@vercel/analytics/react"
import App from './App'

// Import Fontsource Inter and JetBrains Mono fonts locally
import '@fontsource/inter/400.css'
import '@fontsource/inter/500.css'
import '@fontsource/inter/600.css'
import '@fontsource/inter/700.css'
import '@fontsource/jetbrains-mono/400.css'
import '@fontsource/jetbrains-mono/500.css'
import '@fontsource/jetbrains-mono/600.css'

import './index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Analytics />
    <App />
  </StrictMode>,
)

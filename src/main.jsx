import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'

const root = document.getElementById('root')

if (root) {
  // Handle hash-based routing redirect (for GitHub Pages compatibility)
  const path = (/#!(\/.*)$/.exec(location.hash) || [])[1]
  if (path) {
    history.replaceState(null, '', path)
  }

  createRoot(root).render(
    <StrictMode>
      <App />
    </StrictMode>
  )
}

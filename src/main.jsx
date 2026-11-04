import { StrictMode } from 'react'
import { createRoot, hydrateRoot } from 'react-dom/client'
import App, { initialLang, initialTheme } from './App.jsx'
import './styles.css'
import './effects.css'

// El HTML ya viene prerenderizado en español y oscuro (scripts/prerender.mjs). Si el visitante usa
// otro idioma o tema, se pinta de cero en vez de hidratar, para no forzar un desajuste.
const container = document.getElementById('root')
const app = (
  <StrictMode>
    <App />
  </StrictMode>
)
if (container.hasChildNodes() && initialLang() === 'es' && initialTheme() === 'dark') hydrateRoot(container, app)
else {
  container.replaceChildren()
  createRoot(container).render(app)
}

// Para quien abra DevTools
console.log(
  '%cNotas del parche · Jose David%c\n¿Revisando el código? Está en https://github.com/JOSED235/JOSED235.github.io\nEscríbeme: jdrpjd@gmail.com · Ctrl+K abre los comandos.',
  'font: 700 16px Georgia, serif; color: #ffd447; background: #1b1830; padding: 6px 10px; border-radius: 4px',
  'font: 13px monospace',
)

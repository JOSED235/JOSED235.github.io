import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './styles.css'
import './effects.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

// Para quien abra DevTools
console.log(
  '%cNotas del parche · Jose David%c\n¿Revisando el código? Está en https://github.com/JOSED235/JOSED235.github.io\nEscríbeme: jdrpjd@gmail.com · Ctrl+K abre los comandos.',
  'font: 700 16px Georgia, serif; color: #ffd447; background: #1b1830; padding: 6px 10px; border-radius: 4px',
  'font: 13px monospace',
)

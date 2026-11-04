// Entrada para el build: genera el HTML de la página en español y tema oscuro,
// para que buscadores y vistas previas vean el contenido sin ejecutar JavaScript.
import { renderToString } from 'react-dom/server'
import App from './App.jsx'

export const render = () => renderToString(<App />)

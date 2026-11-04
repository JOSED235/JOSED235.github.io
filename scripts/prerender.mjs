// Inyecta el HTML prerenderizado en dist/index.html (corre después de los dos builds de Vite).
import { readFileSync, writeFileSync, rmSync } from 'node:fs'
import { pathToFileURL } from 'node:url'
import { resolve } from 'node:path'

const { render } = await import(pathToFileURL(resolve('dist-ssr/prerender.js')).href)
const file = resolve('dist/index.html')
const html = readFileSync(file, 'utf8')
const empty = '<div id="root"></div>'
if (!html.includes(empty)) throw new Error('No encontré <div id="root"></div> en dist/index.html')
writeFileSync(file, html.replace(empty, `<div id="root">${render()}</div>`))
rmSync('dist-ssr', { recursive: true, force: true })
console.log('Prerender listo: dist/index.html')

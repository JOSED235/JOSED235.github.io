import { useEffect, useState } from 'react'
import { flushSync } from 'react-dom'
import { content } from './data/content.js'
import { load, save } from './storage.js'
import Nav from './components/Nav.jsx'
import Hero from './components/Hero.jsx'
import Projects from './components/Projects.jsx'
import Experience from './components/Experience.jsx'
import Skills from './components/Skills.jsx'
import Team from './components/Team.jsx'
import Certifications from './components/Certifications.jsx'
import About from './components/About.jsx'
import Contact from './components/Contact.jsx'
import Palette from './components/Palette.jsx'
import { useReveal } from './reveal.js'

function initialLang() {
  const stored = load('lang')
  if (stored === 'es' || stored === 'en') return stored
  return navigator.language?.toLowerCase().startsWith('en') ? 'en' : 'es'
}

function initialTheme() {
  const stored = load('theme')
  if (stored === 'light' || stored === 'dark') return stored
  return window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark'
}

const reducedMotion = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches

export default function App() {
  const [lang, setLang] = useState(initialLang)
  const [theme, setTheme] = useState(initialTheme)
  const [paletteOpen, setPaletteOpen] = useState(false)
  const t = content[lang]

  useReveal()

  useEffect(() => {
    document.documentElement.lang = lang
    save('lang', lang)
  }, [lang])

  useEffect(() => {
    document.documentElement.dataset.theme = theme
  }, [theme])

  // Ctrl+K / ⌘K abre la paleta de comandos
  useEffect(() => {
    const onKey = (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault()
        setPaletteOpen((o) => !o)
      }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  const toggleLang = () => setLang((l) => (l === 'es' ? 'en' : 'es'))

  // El tema nuevo se abre en círculo desde el botón (View Transitions). Sin soporte o con
  // movimiento reducido, cambia de golpe como antes.
  const toggleTheme = (origin) => {
    const next = theme === 'dark' ? 'light' : 'dark'
    save('theme', next)
    const apply = () => {
      document.documentElement.dataset.theme = next
      flushSync(() => setTheme(next))
    }
    if (!document.startViewTransition || reducedMotion()) return apply()

    const root = document.documentElement
    const r = origin?.getBoundingClientRect()
    root.style.setProperty('--vt-x', `${r ? r.left + r.width / 2 : innerWidth / 2}px`)
    root.style.setProperty('--vt-y', `${r ? r.top + r.height / 2 : 0}px`)
    root.classList.add('theme-switching')
    document.startViewTransition(apply).finished.finally(() => root.classList.remove('theme-switching'))
  }

  return (
    <>
      <Nav
        t={t}
        lang={lang}
        theme={theme}
        onToggleLang={toggleLang}
        onToggleTheme={toggleTheme}
        onOpenPalette={() => setPaletteOpen(true)}
      />
      <main>
        <Hero t={t} lang={lang} />
        <Projects t={t} />
        <Experience t={t} />
        <Skills t={t} />
        <Certifications t={t} />
        <About t={t} />
        <Team t={t} />
        <Contact t={t} />
      </main>
      <footer className="footer">
        <div className="container footer__inner">
          <span>© {new Date().getFullYear()} · {t.footer}</span>
          <span className="mono">{t.footerNote}</span>
        </div>
      </footer>
      {paletteOpen && (
        <Palette
          t={t}
          lang={lang}
          onClose={() => setPaletteOpen(false)}
          onToggleLang={toggleLang}
          onToggleTheme={() => toggleTheme(null)}
        />
      )}
    </>
  )
}

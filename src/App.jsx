import { useEffect, useState } from 'react'
import { content } from './data/content.js'
import { load, save } from './storage.js'
import Nav from './components/Nav.jsx'
import Hero from './components/Hero.jsx'
import Projects from './components/Projects.jsx'
import Experience from './components/Experience.jsx'
import Skills from './components/Skills.jsx'
import Certifications from './components/Certifications.jsx'
import About from './components/About.jsx'
import Contact from './components/Contact.jsx'
import { useReveal } from './components/useReveal.js'

function initialLang() {
  const stored = load('lang')
  if (stored === 'es' || stored === 'en') return stored
  return navigator.language?.toLowerCase().startsWith('en') ? 'en' : 'es'
}

export default function App() {
  const [lang, setLang] = useState(initialLang)
  const t = content[lang]

  useEffect(() => {
    document.documentElement.lang = lang
    save('lang', lang)
  }, [lang])

  useReveal(lang)

  const toggleLang = () => setLang((l) => (l === 'es' ? 'en' : 'es'))

  return (
    <>
      <div className="bg-glow" aria-hidden="true" />
      <div className="bg-grid" aria-hidden="true" />
      <Nav t={t} lang={lang} onToggleLang={toggleLang} />
      <main>
        <Hero t={t} lang={lang} />
        <Projects t={t} />
        <Experience t={t} />
        <Skills t={t} />
        <Certifications t={t} />
        <About t={t} />
        <Contact t={t} lang={lang} />
      </main>
      <footer className="footer">
        <div className="container footer__inner">
          <span>© {new Date().getFullYear()} · {t.footer}</span>
          <span className="mono">React + Vite</span>
        </div>
      </footer>
    </>
  )
}

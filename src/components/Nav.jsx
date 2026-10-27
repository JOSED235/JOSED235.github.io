import { useEffect, useState } from 'react'
import { load, save } from '../storage.js'
import { Sun, Moon, Menu, Close } from './Icons.jsx'

const sections = ['projects', 'experience', 'skills', 'certs', 'about', 'team', 'contact']

function currentTheme() {
  const stored = load('theme')
  if (stored === 'light' || stored === 'dark') return stored
  return window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark'
}

export default function Nav({ t, lang, onToggleLang }) {
  const [theme, setTheme] = useState(currentTheme)
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    document.documentElement.dataset.theme = theme
  }, [theme])

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const toggleTheme = () => {
    const next = theme === 'dark' ? 'light' : 'dark'
    save('theme', next)
    setTheme(next)
  }

  return (
    <header className={`nav ${scrolled || open ? 'nav--scrolled' : ''}`}>
      <div className="container nav__inner">
        <a href="#top" className="nav__logo" onClick={() => setOpen(false)}>
          <span className="nav__mark mono">JD</span>
          <span className="nav__name">
            Jose David<span className="accent">.</span>
          </span>
        </a>

        <nav className={`nav__links ${open ? 'is-open' : ''}`} aria-label="Principal">
          {sections.map((s) => (
            <a key={s} href={`#${s}`} onClick={() => setOpen(false)}>
              {t.nav[s]}
            </a>
          ))}
        </nav>

        <div className="nav__actions">
          <button className="lang-btn mono" onClick={onToggleLang} aria-label={t.ui.lang} title={t.ui.lang}>
            <span className={lang === 'es' ? 'on' : ''}>ES</span>
            <span className="sep">/</span>
            <span className={lang === 'en' ? 'on' : ''}>EN</span>
          </button>
          <button className="icon-btn" onClick={toggleTheme} aria-label={t.ui.theme} title={t.ui.theme}>
            {theme === 'dark' ? <Sun /> : <Moon />}
          </button>
          <button
            className="icon-btn nav__burger"
            onClick={() => setOpen((o) => !o)}
            aria-label={t.ui.menu}
            aria-expanded={open}
          >
            {open ? <Close /> : <Menu />}
          </button>
        </div>
      </div>
    </header>
  )
}

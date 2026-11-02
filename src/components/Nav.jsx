import { useEffect, useRef, useState } from 'react'
import { Sun, Moon, Menu, Close, Command } from './Icons.jsx'

const sections = ['projects', 'experience', 'skills', 'certs', 'about', 'team', 'contact']

export default function Nav({ t, lang, theme, onToggleLang, onToggleTheme, onOpenPalette }) {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState(null)
  const bar = useRef(null)

  // Barra de progreso tipo "descargando parche": se escribe directo al DOM para no re-renderizar en cada scroll.
  useEffect(() => {
    let frame = 0
    const onScroll = () => {
      cancelAnimationFrame(frame)
      frame = requestAnimationFrame(() => {
        const max = document.documentElement.scrollHeight - innerHeight
        if (bar.current) bar.current.style.transform = `scaleX(${max > 0 ? Math.min(scrollY / max, 1) : 0})`
        setScrolled(scrollY > 12)
      })
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      cancelAnimationFrame(frame)
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [])

  // Sección activa: la que cruza la mitad de la pantalla.
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: '-45% 0px -50% 0px' },
    )
    sections.forEach((id) => {
      const el = document.getElementById(id)
      if (el) io.observe(el)
    })
    const top = document.getElementById('top')
    if (top) io.observe(top)
    return () => io.disconnect()
  }, [])

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
            <a
              key={s}
              href={`#${s}`}
              className={active === s ? 'is-active' : undefined}
              aria-current={active === s ? 'true' : undefined}
              onClick={() => setOpen(false)}
            >
              {t.nav[s]}
            </a>
          ))}
        </nav>

        <div className="nav__actions">
          <button className="kbd-btn mono" onClick={onOpenPalette} aria-label={t.palette.open} title={t.palette.open}>
            <Command width={14} height={14} /> K
          </button>
          <button className="lang-btn mono" onClick={onToggleLang} aria-label={t.ui.lang} title={t.ui.lang}>
            <span className={lang === 'es' ? 'on' : ''}>ES</span>
            <span className="sep">/</span>
            <span className={lang === 'en' ? 'on' : ''}>EN</span>
          </button>
          <button
            className="icon-btn"
            onClick={(e) => onToggleTheme(e.currentTarget)}
            aria-label={t.ui.theme}
            title={t.ui.theme}
          >
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
      <div className="nav__progress" ref={bar} aria-hidden="true" />
    </header>
  )
}

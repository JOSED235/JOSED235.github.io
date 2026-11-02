import { useEffect, useMemo, useRef, useState } from 'react'
import { links } from '../data/content.js'
import { ArrowRight, Copy, Sun, Download, GitHub, LinkedIn, Search } from './Icons.jsx'

const sections = ['projects', 'experience', 'skills', 'certs', 'about', 'team', 'contact']
// "Habilidades" se encuentra escribiendo "habilidades" o "HABILIDADES", con o sin tilde.
const norm = (s) => s.normalize('NFD').replace(/\p{Diacritic}/gu, '').toLowerCase()

// Paleta de comandos (Ctrl+K): ir a una sección, copiar el correo, cambiar tema o idioma, bajar el CV.
export default function Palette({ t, lang, onClose, onToggleLang, onToggleTheme }) {
  const p = t.palette
  const dialog = useRef(null)
  const [query, setQuery] = useState('')
  const [index, setIndex] = useState(0)

  const commands = useMemo(
    () => [
      ...sections.map((id) => ({
        id: `go-${id}`,
        label: `${p.go} ${t.nav[id]}`,
        icon: ArrowRight,
        run: () => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' }),
      })),
      { id: 'email', label: `${p.copyEmail} (${links.email})`, icon: Copy, run: () => navigator.clipboard?.writeText(links.email) },
      { id: 'theme', label: t.ui.theme, icon: Sun, run: onToggleTheme },
      { id: 'lang', label: t.ui.lang, icon: ArrowRight, run: onToggleLang },
      {
        id: 'cv',
        label: p.cv,
        icon: Download,
        run: () => {
          const a = document.createElement('a')
          a.href = links.cv[lang]
          a.download = ''
          a.click()
        },
      },
      { id: 'github', label: 'GitHub', icon: GitHub, run: () => window.open(links.github, '_blank', 'noopener') },
      { id: 'linkedin', label: 'LinkedIn', icon: LinkedIn, run: () => window.open(links.linkedin, '_blank', 'noopener') },
    ],
    [t, p, lang, onToggleLang, onToggleTheme],
  )

  const shown = commands.filter((c) => norm(c.label).includes(norm(query.trim())))
  const current = Math.min(index, Math.max(shown.length - 1, 0))

  useEffect(() => {
    const d = dialog.current
    d.showModal()
    return () => d.open && d.close()
  }, [])

  const run = (cmd) => {
    onClose()
    // Después de cerrar: el diálogo modal ya no bloquea el scroll ni el foco.
    requestAnimationFrame(() => cmd.run())
  }

  const onKeyDown = (e) => {
    if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
      e.preventDefault()
      const step = e.key === 'ArrowDown' ? 1 : -1
      setIndex((current + step + shown.length) % Math.max(shown.length, 1))
    } else if (e.key === 'Enter' && shown[current]) {
      e.preventDefault()
      run(shown[current])
    }
  }

  return (
    <dialog
      ref={dialog}
      className="palette"
      aria-label={p.open}
      onCancel={(e) => {
        e.preventDefault()
        onClose()
      }}
      onClick={(e) => e.target === dialog.current && onClose()}
    >
      <div className="palette__box">
        <label className="palette__search">
          <Search width={18} height={18} />
          <input
            autoFocus
            role="combobox"
            aria-expanded="true"
            aria-controls="palette-list"
            aria-activedescendant={shown[current] ? `cmd-${shown[current].id}` : undefined}
            placeholder={p.placeholder}
            value={query}
            onChange={(e) => {
              setQuery(e.target.value)
              setIndex(0)
            }}
            onKeyDown={onKeyDown}
          />
          <kbd className="mono">Esc</kbd>
        </label>
        <ul id="palette-list" className="palette__list" role="listbox">
          {shown.map((c, i) => {
            const Icon = c.icon
            return (
              <li
                key={c.id}
                id={`cmd-${c.id}`}
                role="option"
                aria-selected={i === current}
                className={i === current ? 'is-active' : undefined}
                onMouseMove={() => setIndex(i)}
                onClick={() => run(c)}
              >
                <Icon width={16} height={16} />
                <span>{c.label}</span>
              </li>
            )
          })}
          {shown.length === 0 && <li className="palette__empty">{p.empty}</li>}
        </ul>
        <p className="palette__hint mono">{p.hint}</p>
      </div>
    </dialog>
  )
}

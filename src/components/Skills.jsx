import { useState } from 'react'
import { projectsMeta, stackTrees, coreStack } from '../data/content.js'
import SectionHead from './SectionHead.jsx'
import TechIcon from './TechIcon.jsx'

// Proyectos donde aparece cada tecnología, sacados de las builds: así no se repite el dato.
function projectsUsing(name) {
  return Object.entries(projectsMeta)
    .filter(([, meta]) => meta.build.includes(name))
    .map(([id, meta]) => ({ id, version: meta.version }))
}

function Rune({ name, selected, seenOnly, onSelect }) {
  return (
    <button
      type="button"
      className={`rune ${seenOnly ? 'rune--seen' : ''}`}
      aria-pressed={selected}
      onClick={() => onSelect(name)}
    >
      <span className="rune__icon">
        <TechIcon name={name} />
      </span>
      <span className="rune__name mono">{name}</span>
    </button>
  )
}

function RunePanel({ t, name }) {
  const s = t.skills
  const used = projectsUsing(name)
  const seen = s.seen[name]
  return (
    <div className="rune-panel" aria-live="polite">
      <p className="rune-panel__name">{name}</p>
      {used.length > 0 && (
        <p>
          <span className="mono rune-panel__label">{s.usedIn}</span>{' '}
          {used.map((u, i) => (
            <span key={u.id}>
              <a href={`#p-${u.id}`}>
                {t.projects[u.id].name} <span className="mono">{u.version}</span>
              </a>
              {i < used.length - 1 && ' · '}
            </span>
          ))}
        </p>
      )}
      {seen && (
        <p className={/^\[(PENDIENTE|PENDING)/.test(seen) ? 'is-pending' : undefined}>
          <span className="mono rune-panel__label">{s.seenIn}</span> {seen}
        </p>
      )}
    </div>
  )
}

// Runa clave: grande y con sus proyectos escritos, para que se lea sin tocar nada.
function CoreRune({ t, name }) {
  return (
    <li className="core-rune">
      <span className="core-rune__icon">
        <TechIcon name={name} />
      </span>
      <span className="core-rune__body">
        <span className="core-rune__name">{name}</span>
        <span className="core-rune__used">
          {projectsUsing(name).map((u, i, all) => (
            <span key={u.id}>
              <a href={`#p-${u.id}`}>{t.projects[u.id].name}</a>
              {/* coma y no "·": algunos nombres de proyecto ya llevan punto medio */}
              {i < all.length - 1 && ', '}
            </span>
          ))}
        </span>
      </span>
    </li>
  )
}

export default function Skills({ t }) {
  const s = t.skills
  const [selected, setSelected] = useState(null)

  return (
    <section className="section" id="skills">
      <div className="container">
        <SectionHead index={3} eyebrow={s.eyebrow} title={s.title} />

        <div className="core-stack">
          <div className="core-stack__head">
            <h3 className="core-stack__title">{s.coreTitle}</h3>
            <p className="core-stack__note">{s.coreNote}</p>
          </div>
          <ul className="core-stack__list">
            {coreStack.map((name) => (
              <CoreRune key={name} t={t} name={name} />
            ))}
          </ul>
        </div>

        <h3 className="runes__title mono">{s.restTitle}</h3>
        <p className="runes__hint">{s.hint}</p>
        <div className="runes">
          {stackTrees.map((tree) => (
            <div key={tree.key} className={`rune-tree rune-tree--${tree.key}`}>
              <h4 className="rune-tree__name mono">{s.trees[tree.key]}</h4>
              <div className="rune-tree__minor">
                {tree.items.map((name) => (
                  <Rune
                    key={name}
                    name={name}
                    selected={selected === name}
                    seenOnly={projectsUsing(name).length === 0}
                    onSelect={setSelected}
                  />
                ))}
              </div>
              {tree.items.includes(selected) && <RunePanel t={t} name={selected} />}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

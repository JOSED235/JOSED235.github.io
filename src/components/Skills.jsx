import { useState } from 'react'
import { projectsMeta, stackTrees } from '../data/content.js'
import SectionHead from './SectionHead.jsx'
import TechIcon from './TechIcon.jsx'

// Proyectos donde aparece cada tecnología, sacados de las builds: así no se repite el dato.
function projectsUsing(name) {
  return Object.entries(projectsMeta)
    .filter(([, meta]) => meta.build.includes(name))
    .map(([id, meta]) => ({ id, version: meta.version }))
}

function Rune({ name, keystone, selected, seenOnly, onSelect }) {
  return (
    <button
      type="button"
      className={`rune ${keystone ? 'rune--keystone' : ''} ${seenOnly ? 'rune--seen' : ''}`}
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

export default function Skills({ t }) {
  const s = t.skills
  const [selected, setSelected] = useState('MQTT')

  return (
    <section className="section" id="skills">
      <div className="container">
        <SectionHead index={3} eyebrow={s.eyebrow} title={s.title} />
        <p className="runes__hint">{s.hint}</p>
        <div className="runes">
          {stackTrees.map((tree) => {
            const [keystone, ...minor] = tree.items
            const rune = (name, isKeystone) => (
              <Rune
                key={name}
                name={name}
                keystone={isKeystone}
                selected={selected === name}
                seenOnly={projectsUsing(name).length === 0}
                onSelect={setSelected}
              />
            )
            return (
              <div key={tree.key} className={`rune-tree rune-tree--${tree.key}`}>
                <h3 className="rune-tree__name mono">{s.trees[tree.key]}</h3>
                <div className="rune-tree__keystone">{rune(keystone, true)}</div>
                <div className="rune-tree__minor">{minor.map((name) => rune(name, false))}</div>
                {tree.items.includes(selected) && <RunePanel t={t} name={selected} />}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

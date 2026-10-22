import { useState } from 'react'
import { projectsMeta } from '../data/content.js'
import SectionHead from './SectionHead.jsx'
import Meta from './Meta.jsx'
import { ArrowUpRight, GitHub, Lock } from './Icons.jsx'

function Stack({ items }) {
  return (
    <ul className="stack">
      {items.map((s) => (
        <li key={s} className="tag mono">
          {s}
        </li>
      ))}
    </ul>
  )
}

function Highlights({ items }) {
  return (
    <ul className="highlights">
      {items.map((h) => (
        <li key={h}>{h}</li>
      ))}
    </ul>
  )
}

function Showcase({ p, meta }) {
  const [active, setActive] = useState(0)
  return (
    <div className="featured__showcase">
      <div className="devices">
        <div className="browser">
          <div className="browser__bar">
            <span className="dot" />
            <span className="dot" />
            <span className="dot" />
            <span className="browser__url mono">{meta.shots[active].address ?? meta.address}</span>
          </div>
          <div className="browser__view">
            {meta.shots.map((s, i) => (
              <img
                key={s.key}
                src={s.src}
                alt={`${p.name} · ${p.shots[s.key]}`}
                loading="lazy"
                width="1280"
                height="860"
                className={i === active ? 'is-active' : ''}
              />
            ))}
          </div>
        </div>
        {meta.mobile && (
          <div className="phone" aria-hidden="true">
            <img src={meta.mobile} alt="" loading="lazy" width="390" height="900" />
          </div>
        )}
      </div>
      <div className={`shot-tabs ${meta.mobile ? 'shot-tabs--narrow' : ''}`} role="tablist">
        {meta.shots.map((s, i) => (
          <button
            key={s.key}
            role="tab"
            aria-selected={i === active}
            className={`shot-tab mono ${i === active ? 'is-active' : ''}`}
            onClick={() => setActive(i)}
          >
            {p.shots[s.key]}
          </button>
        ))}
      </div>
      {p.shotsNote && <p className="shots-note">{p.shotsNote}</p>}
    </div>
  )
}

function Featured({ t, id, reverse }) {
  const p = t.projects[id]
  const meta = projectsMeta[id]

  return (
    <article className={`featured reveal ${reverse ? 'featured--reverse' : ''}`}>
      <Showcase p={p} meta={meta} />

      <div className="featured__body">
        <div className="featured__top">
          {meta.live && (
            <span className="live-badge mono">
              <span className="pulse" /> {t.projects.featured}
            </span>
          )}
          <Meta text={p.meta} />
        </div>
        <h3 className="featured__title">{p.name}</h3>
        <p className="featured__tagline">{p.tagline}</p>
        <p className="featured__desc">{p.description}</p>

        {p.role && (
          <div className="role-box">
            <span className="role-box__label mono">{t.projects.myRole}</span>
            <p>{p.role}</p>
          </div>
        )}

        <Highlights items={p.highlights} />
        <Stack items={meta.stack} />

        <div className="project-links">
          {meta.live && (
            <a className="btn btn--primary" href={meta.live} target="_blank" rel="noreferrer">
              {t.projects.live} <ArrowUpRight />
            </a>
          )}
          {meta.repo ? (
            <a className={`btn ${meta.live ? 'btn--ghost' : 'btn--primary'}`} href={meta.repo} target="_blank" rel="noreferrer">
              <GitHub /> {t.projects.repo}
            </a>
          ) : (
            <span className="private-badge mono">
              <Lock /> {t.projects.privateCode}
            </span>
          )}
        </div>
      </div>
    </article>
  )
}

export default function Projects({ t }) {
  return (
    <section className="section" id="projects">
      <div className="container">
        <SectionHead index={1} eyebrow={t.projects.eyebrow} title={t.projects.title} />
        <div className="projects-list">
          <Featured t={t} id="caminoLegal" />
          <Featured t={t} id="archimedes" reverse />
          <Featured t={t} id="agroiot" />
          <Featured t={t} id="pacman" reverse />
        </div>
      </div>
    </section>
  )
}

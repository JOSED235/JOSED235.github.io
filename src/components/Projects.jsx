import { useState } from 'react'
import { projectsMeta } from '../data/content.js'
import SectionHead from './SectionHead.jsx'
import { ArrowUpRight, GitHub } from './Icons.jsx'

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

function Featured({ t }) {
  const p = t.projects.caminoLegal
  const meta = projectsMeta.caminoLegal
  const [active, setActive] = useState(0)
  const shot = meta.shots[active]

  return (
    <article className="featured reveal">
      <div className="featured__showcase">
        <div className="devices">
          <div className="browser">
            <div className="browser__bar">
              <span className="dot" />
              <span className="dot" />
              <span className="dot" />
              <span className="browser__url mono">caminolegal.space</span>
            </div>
            <div className="browser__view">
              {meta.shots.map((s, i) => (
                <img
                  key={s.key}
                  src={s.src}
                  alt={`Camino Legal · ${p.shots[s.key]}`}
                  loading="lazy"
                  width="1280"
                  height="860"
                  className={i === active ? 'is-active' : ''}
                />
              ))}
            </div>
          </div>
          <div className="phone" aria-hidden="true">
            <img src={meta.mobile} alt="" loading="lazy" width="390" height="900" />
          </div>
        </div>
        <div className="shot-tabs" role="tablist">
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
        <span className="sr-only">{p.shots[shot.key]}</span>
      </div>

      <div className="featured__body">
        <div className="featured__top">
          <span className="live-badge mono">
            <span className="pulse" /> {t.projects.featured}
          </span>
          <span className="meta mono">{p.meta}</span>
        </div>
        <h3 className="featured__title">{p.name}</h3>
        <p className="featured__tagline">{p.tagline}</p>
        <p className="featured__desc">{p.description}</p>

        <div className="role-box">
          <span className="role-box__label mono">{t.projects.myRole}</span>
          <p>{p.role}</p>
        </div>

        <Highlights items={p.highlights} />
        <Stack items={meta.stack} />

        <div className="project-links">
          <a className="btn btn--primary" href={meta.live} target="_blank" rel="noreferrer">
            {t.projects.live} <ArrowUpRight />
          </a>
          <a className="btn btn--ghost" href={meta.repo} target="_blank" rel="noreferrer">
            <GitHub /> {t.projects.repo}
          </a>
        </div>
      </div>
    </article>
  )
}

function Flow({ steps }) {
  return (
    <div className="flow" aria-hidden="true">
      {steps.map((s, i) => (
        <div key={s} className="flow__step" style={{ '--i': i }}>
          <span className="flow__node mono">{s}</span>
          {i < steps.length - 1 && <span className="flow__wire" />}
        </div>
      ))}
    </div>
  )
}

function ProjectCard({ t, id, number }) {
  const p = t.projects[id]
  const meta = projectsMeta[id]
  return (
    <article className="card project reveal">
      <div className="project__head">
        <span className="project__num mono">{number}</span>
        <span className="meta mono">{p.meta}</span>
      </div>
      <h3 className="project__title">{p.name}</h3>
      <p className="project__tagline">{p.tagline}</p>
      <Flow steps={meta.flow} />
      <p className="project__desc">{p.description}</p>
      <Highlights items={p.highlights} />
      <Stack items={meta.stack} />
      <a className="project__repo" href={meta.repo} target="_blank" rel="noreferrer">
        <GitHub /> {t.projects.repo} <ArrowUpRight width={16} height={16} />
      </a>
    </article>
  )
}

export default function Projects({ t }) {
  return (
    <section className="section" id="projects">
      <div className="container">
        <SectionHead index={1} eyebrow={t.projects.eyebrow} title={t.projects.title} />
        <Featured t={t} />
        <div className="projects-grid">
          <ProjectCard t={t} id="archimedes" number="02" />
          <ProjectCard t={t} id="agroiot" number="03" />
        </div>
      </div>
    </section>
  )
}

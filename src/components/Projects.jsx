import { useState } from 'react'
import { projectsMeta, majorPatches, hotfixPatches, patchDate } from '../data/content.js'
import SectionHead from './SectionHead.jsx'
import Meta from './Meta.jsx'
import Build from './Build.jsx'
import { ArrowUpRight, GitHub, Lock } from './Icons.jsx'

// [PENDIENTE: …] se deja a la vista a propósito, pero marcado para que no pase por texto real.
function NoteItem({ text }) {
  const pending = /^\[(PENDIENTE|PENDING)/.test(text)
  return <li className={pending ? 'is-pending' : undefined}>{text}</li>
}

function Notes({ kind, label, items }) {
  if (!items?.length) return null
  return (
    <div className={`notes notes--${kind}`}>
      <h4 className="notes__label mono">{label}</h4>
      <ul>
        {items.map((text) => (
          <NoteItem key={text} text={text} />
        ))}
      </ul>
    </div>
  )
}

function Links({ t, meta }) {
  return (
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

function Patch({ t, id, reverse }) {
  const p = t.projects[id]
  const meta = projectsMeta[id]

  return (
    <article id={`p-${id}`} className={`featured patch ${reverse ? 'featured--reverse' : ''}`}>
      <Showcase p={p} meta={meta} />

      <div className="featured__body">
        <p className="patch__stamp mono">
          {t.projects.patch} <span>{meta.version}</span>
        </p>
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

        {/* A la vista solo lo más fuerte: 3 de lo construido, 1 falla y 1 aprendizaje. Lo demás se abre. */}
        <Notes kind="new" label={t.projects.newLabel} items={p.highlights.slice(0, 3)} />
        <Notes kind="bug" label={t.projects.bugLabel} items={p.bugs.slice(0, 1)} />
        <Notes kind="learn" label={t.projects.learnLabel} items={p.learned.slice(0, 1)} />

        {(p.highlights.length > 3 || p.bugs.length > 1 || p.learned.length > 1) && (
          <details className="patch__more">
            <summary className="mono">{t.projects.moreMajor}</summary>
            <Notes kind="new" label={t.projects.newLabel} items={p.highlights.slice(3)} />
            <Notes kind="bug" label={t.projects.bugLabel} items={p.bugs.slice(1)} />
            <Notes kind="learn" label={t.projects.learnLabel} items={p.learned.slice(1)} />
          </details>
        )}

        <Build items={meta.build} label={t.projects.build} />
        <Links t={t} meta={meta} />
      </div>
    </article>
  )
}

function Hotfix({ t, id }) {
  const p = t.projects[id]
  const meta = projectsMeta[id]

  return (
    <article id={`p-${id}`} className="hotfix">
      <p className="hotfix__version mono">{patchDate(meta.version, t.months)}</p>

      <div className="hotfix__main">
        <h3 className="hotfix__title">{p.name}</h3>
        <p className="hotfix__tagline">{p.tagline}</p>
        <Meta text={p.meta} />
        {p.role && (
          <p className="hotfix__role">
            <span className="mono">{t.projects.myRole}:</span> {p.role}
          </p>
        )}
        <Notes kind="bug" label={t.projects.bugLabel} items={p.bugs} />
        <Notes kind="learn" label={t.projects.learnLabel} items={p.learned} />
        <details className="hotfix__more">
          <summary className="mono">{t.projects.more}</summary>
          <Notes kind="new" label={t.projects.newLabel} items={p.highlights} />
        </details>
      </div>

      <div className="hotfix__side">
        <img
          className="hotfix__shot"
          src={meta.shots[0].src}
          alt={`${p.name} · ${p.shots[meta.shots[0].key]}`}
          loading="lazy"
          width="1280"
          height="860"
        />
        <Build items={meta.build} label={t.projects.build} compact />
        <Links t={t} meta={meta} />
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
          {majorPatches.map((id, i) => (
            <Patch key={id} t={t} id={id} reverse={i % 2 === 1} />
          ))}
        </div>

        <div className="hotfixes">
          <div className="hotfixes__head">
            <h3 className="mono">{t.projects.hotfixes}</h3>
            <p>{t.projects.hotfixesNote}</p>
          </div>
          {hotfixPatches.map((id) => (
            <Hotfix key={id} t={t} id={id} />
          ))}
        </div>
      </div>
    </section>
  )
}

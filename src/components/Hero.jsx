import { links, projectsMeta, majorPatches, patchDate, latestVersion as latest } from '../data/content.js'
import { GitHub, LinkedIn, Mail, Download, ArrowRight, Pin } from './Icons.jsx'
import Doodle from './Doodles.jsx'

export default function Hero({ t, lang }) {
  const h = t.hero

  return (
    <section className="hero" id="top">
      <Doodle n={0} place="hero-a" />
      <Doodle n={3} place="hero-b" />
      <div className="container hero__grid">
        <div className="hero__text">
          <p className="hero__kicker mono">
            {h.kicker} <span>{latest}</span>
          </p>
          <h1 className="hero__name">Jose David Rodríguez</h1>
          <p className="hero__role">{h.role}</p>

          <div className="hero__byline">
            <img className="hero__photo" src="img/foto.webp" alt="Jose David Rodríguez Pinilla" width="255" height="262" />
            <div>
              <p className="hero__degrees">{h.degrees}</p>
              <p className="hero__loc mono">
                <Pin width={14} height={14} /> {h.available}
              </p>
            </div>
          </div>

          <p className="hero__summary">{h.summary}</p>

          <p className="hero__availability">
            <span className="hero__availability-label mono">{h.availabilityLabel}</span> {h.availability}
          </p>

          <div className="hero__links">
            <a href={links.github} target="_blank" rel="noreferrer">
              <GitHub /> GitHub
            </a>
            <a href={links.linkedin} target="_blank" rel="noreferrer">
              <LinkedIn /> LinkedIn
            </a>
            <a href={`mailto:${links.email}`}>
              <Mail /> {links.email}
            </a>
            <a className="hero__cv" href={links.cv[lang]} download>
              <Download /> {h.ctaCv}
            </a>
          </div>
        </div>

        <aside className="hero__highlights" aria-label={h.highlights}>
          <p className="hero__highlights-title mono">{h.highlights}</p>
          <ol>
            {majorPatches.map((id) => {
              const p = t.projects[id]
              const meta = projectsMeta[id]
              return (
                <li key={id}>
                  <a href={`#p-${id}`}>
                    <span className="hero__hl-version mono">{patchDate(meta.version, t.months)}</span>
                    <span>
                      <span className="hero__hl-name">{p.name}</span>
                      <span className="hero__hl-tag">{p.tagline}</span>
                      {meta.live && <span className="hero__hl-live mono">{t.projects.featured}</span>}
                    </span>
                  </a>
                </li>
              )
            })}
          </ol>
          <a className="hero__all mono" href="#projects">
            {h.allPatches} <ArrowRight width={14} height={14} />
          </a>
        </aside>
      </div>
    </section>
  )
}

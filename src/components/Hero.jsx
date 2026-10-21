import { useEffect, useState } from 'react'
import { links } from '../data/content.js'
import { GitHub, LinkedIn, Mail, Download, ArrowRight, Pin } from './Icons.jsx'

function useRotatingWord(words, ms = 2600) {
  const [i, setI] = useState(0)
  useEffect(() => {
    setI(0)
    const id = setInterval(() => setI((n) => (n + 1) % words.length), ms)
    return () => clearInterval(id)
  }, [words, ms])
  return words[i]
}

const floating = ['ESP32', 'React', 'FastAPI', 'MQTT', 'NestJS', 'Docker']

export default function Hero({ t, lang }) {
  const h = t.hero
  const role = useRotatingWord(h.roles)

  return (
    <section className="hero" id="top">
      <div className="container hero__grid">
        <div className="hero__text">
          <p className="badge reveal">
            <span className="pulse" /> {h.available}
          </p>
          <p className="hero__hello reveal">{h.hello}</p>
          <h1 className="hero__name reveal">
            Jose David <span className="hero__name-accent">Rodríguez</span>
          </h1>
          <p className="hero__role reveal mono">
            <span className="accent">&gt;</span>{' '}
            <span key={role} className="hero__role-word">
              {role}
            </span>
            <span className="caret" aria-hidden="true" />
          </p>
          <p className="hero__summary reveal">{h.summary}</p>

          <div className="hero__cta reveal">
            <a className="btn btn--primary" href="#projects">
              {h.ctaProjects} <ArrowRight />
            </a>
            <a className="btn btn--ghost" href={links.cv[lang]} download>
              <Download /> {h.ctaCv}
            </a>
          </div>

          <div className="hero__social reveal">
            <a href={links.github} target="_blank" rel="noreferrer" aria-label="GitHub">
              <GitHub />
            </a>
            <a href={links.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
              <LinkedIn />
            </a>
            <a href={`mailto:${links.email}`} aria-label="Email">
              <Mail />
            </a>
            <span className="hero__loc">
              <Pin width={16} height={16} /> Cali, Colombia
            </span>
          </div>
        </div>

        <div className="hero__visual reveal">
          <div className="portrait">
            <div className="portrait__ring" aria-hidden="true" />
            <div className="portrait__frame">
              <img src="img/foto.webp" alt="Jose David Rodríguez Pinilla" width="255" height="262" />
            </div>
            {floating.map((f, i) => (
              <span key={f} className={`float-chip mono float-chip--${i}`} aria-hidden="true">
                {f}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="container">
        <dl className="stats reveal">
          {h.stats.map((s) => (
            <div key={s.label} className="stat">
              <dt className="stat__value">{s.value}</dt>
              <dd className="stat__label">{s.label}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}

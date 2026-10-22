import { useEffect, useState } from 'react'
import { links } from '../data/content.js'
import { GitHub, LinkedIn, Mail, Download, ArrowRight, Pin } from './Icons.jsx'

// Escribe cada palabra letra por letra, la sostiene y la borra antes de pasar a la siguiente.
// Con "reducir movimiento" activo solo alterna palabras completas.
function useTypewriter(words, { typeMs = 65, eraseMs = 30, holdMs = 1700 } = {}) {
  const [text, setText] = useState('')

  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    let word = 0
    let chars = 0
    let erasing = false
    let timer

    const tick = () => {
      const current = words[word]
      if (reduce) {
        setText(current)
        word = (word + 1) % words.length
        timer = setTimeout(tick, 2600)
        return
      }
      if (!erasing) {
        chars += 1
        setText(current.slice(0, chars))
        if (chars === current.length) {
          erasing = true
          timer = setTimeout(tick, holdMs)
          return
        }
        timer = setTimeout(tick, typeMs)
      } else {
        chars -= 1
        setText(current.slice(0, chars))
        if (chars === 0) {
          erasing = false
          word = (word + 1) % words.length
          timer = setTimeout(tick, 400)
          return
        }
        timer = setTimeout(tick, eraseMs)
      }
    }

    tick()
    return () => clearTimeout(timer)
  }, [words, typeMs, eraseMs, holdMs])

  return text
}

const floating = ['ESP32', 'React', 'FastAPI', 'MQTT', 'NestJS', 'Docker']

export default function Hero({ t, lang }) {
  const h = t.hero
  const role = useTypewriter(h.roles)

  return (
    <section className="hero" id="top">
      <div className="container hero__grid">
        <div className="hero__text">
          <p className="badge">
            <span className="pulse" /> {h.available}
          </p>
          <p className="hero__hello">{h.hello}</p>
          <h1 className="hero__name">
            Jose David <span className="hero__name-accent">Rodríguez</span>
          </h1>
          <p className="hero__role mono">
            <span className="accent" aria-hidden="true">&gt;</span>{' '}
            <span aria-hidden="true">{role}</span>
            <span className="caret" aria-hidden="true" />
            <span className="sr-only">{h.roles.join(' · ')}</span>
          </p>
          <p className="hero__summary">{h.summary}</p>

          <div className="hero__cta">
            <a className="btn btn--primary" href="#projects">
              {h.ctaProjects} <ArrowRight />
            </a>
            <a className="btn btn--ghost" href={links.cv[lang]} download>
              <Download /> {h.ctaCv}
            </a>
          </div>

          <div className="hero__social">
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

        <div className="hero__visual">
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
        <dl className="stats">
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

import { useState } from 'react'
import { links } from '../data/content.js'
import { GitHub, LinkedIn, Mail, Copy, Check, Download } from './Icons.jsx'

export default function Contact({ t, lang }) {
  const c = t.contact
  const [copied, setCopied] = useState(false)

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(links.email)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      window.location.href = `mailto:${links.email}`
    }
  }

  return (
    <section className="section" id="contact">
      <div className="container">
        <div className="contact">
          <p className="eyebrow mono">
            <span className="accent">06</span> / {c.eyebrow}
          </p>
          <h2 className="contact__title">{c.title}</h2>
          <p className="contact__text">{c.text}</p>

          <div className="contact__mail">
            <a className="contact__email" href={`mailto:${links.email}`}>
              <Mail /> {links.email}
            </a>
            <button className="icon-btn" onClick={copy} aria-label={c.copy} title={c.copy}>
              {copied ? <Check /> : <Copy />}
            </button>
            <span className="contact__copied mono" aria-live="polite">
              {copied ? c.copied : ''}
            </span>
          </div>

          <div className="contact__links">
            <a className="btn btn--ghost" href={links.linkedin} target="_blank" rel="noreferrer">
              <LinkedIn /> LinkedIn
            </a>
            <a className="btn btn--ghost" href={links.github} target="_blank" rel="noreferrer">
              <GitHub /> GitHub
            </a>
            <a className="btn btn--ghost" href={links.cv[lang]} download>
              <Download /> CV
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

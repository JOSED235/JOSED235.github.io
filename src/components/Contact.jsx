import { useState } from 'react'
import { links, latestVersion } from '../data/content.js'
import { Copy, Check, ArrowUpRight, Download } from './Icons.jsx'

// Cierre de las notas del parche: lo que busco y cómo encontrarme, en filas como las de una nota.
export default function Contact({ t }) {
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
        <div className="closing">
          <p className="eyebrow mono">
            <span className="accent">07</span> / {c.eyebrow}
          </p>
          <h2 className="closing__title">
            {c.title} <span className="closing__version mono">{latestVersion}</span>
          </h2>
          <p className="closing__text">{c.text}</p>

          <ul className="closing__rows">
            <li className="closing__row">
              <span className="closing__label mono">{c.rows.email}</span>
              <span className="closing__value">
                <a href={`mailto:${links.email}`}>{links.email}</a>
                <button className="icon-btn" onClick={copy} aria-label={c.copy} title={c.copy}>
                  {copied ? <Check /> : <Copy />}
                </button>
                <span className="closing__copied mono" aria-live="polite">
                  {copied ? c.copied : ''}
                </span>
              </span>
            </li>
            <li className="closing__row">
              <span className="closing__label mono">{c.rows.linkedin}</span>
              <span className="closing__value">
                <a href={links.linkedin} target="_blank" rel="noreferrer">
                  Jose David Rodríguez Pinilla <ArrowUpRight width={15} height={15} />
                </a>
              </span>
            </li>
            <li className="closing__row">
              <span className="closing__label mono">{c.rows.github}</span>
              <span className="closing__value">
                <a href={links.github} target="_blank" rel="noreferrer">
                  JOSED235 <ArrowUpRight width={15} height={15} />
                </a>
              </span>
            </li>
            <li className="closing__row">
              <span className="closing__label mono">{c.rows.cv}</span>
              <span className="closing__value">
                {['es', 'en'].map((l) => (
                  <a key={l} href={links.cv[l]} download>
                    {c.cvLangs[l]} <Download width={15} height={15} />
                  </a>
                ))}
              </span>
            </li>
          </ul>

          <p className="closing__signature">Jose David</p>
        </div>
      </div>
    </section>
  )
}

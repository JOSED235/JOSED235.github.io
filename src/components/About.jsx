import { timeline } from '../data/content.js'
import SectionHead from './SectionHead.jsx'

// Regla de semestres: cada cosa colgada en su fecha real, de enero de `start` a diciembre de `end`.
const months = (timeline.end - timeline.start + 1) * 12
const pos = ([year, month]) => (((year - timeline.start) * 12 + month - 1) / months) * 100
const posEnd = ([year, month]) => pos([year, month + 1])
const years = Array.from({ length: timeline.end - timeline.start + 1 }, (_, i) => timeline.start + i)
const now = pos(timeline.now) + 50 / months

function Row({ item, a }) {
  const text = a.items[item.key]
  const from = pos(item.from)
  const to = item.to ? posEnd(item.to) : now
  const solidTo = Math.min(to, now)
  // Lo que arranca pasada la mitad se etiqueta hacia la izquierda para que no se salga.
  const flip = from > 50
  return (
    <li className={`ruler-row ruler-row--${item.kind} ${flip ? 'ruler-row--flip' : ''}`} style={{ '--from': from, '--to': to }}>
      <div className="ruler-row__label">
        <span className="ruler-row__kind mono">{a.kinds[item.kind]}</span>
        <h3 className="ruler-row__name">{text.name}</h3>
        <p className="ruler-row__meta">
          <span className="mono">{text.date}</span>
          {text.org && <> · {text.org}</>}
        </p>
        {text.note && <p className="ruler-row__note">{text.note}</p>}
        {item.marks?.map((m) => (
          <p key={m.key} className={`ruler-row__note ${m.star ? 'is-star' : ''}`}>
            {a.marks[m.key]}
            {m.url && (
              <>
                {' '}
                <a className="ruler-row__link" href={m.url} target="_blank" rel="noreferrer">
                  {a.certificate} ↗
                </a>
              </>
            )}
          </p>
        ))}
      </div>
      <div className="ruler-row__track" aria-hidden="true">
        <span className="ruler-row__bar" style={{ left: `${from}%`, width: `${Math.max(solidTo - from, 100 / months)}%` }} />
        {item.expected && to > now && (
          <span className="ruler-row__bar ruler-row__bar--est" style={{ left: `${now}%`, width: `${to - now}%` }}>
            <span className="ruler-row__est mono">{a.expected}</span>
          </span>
        )}
        {item.marks?.map((m) => (
          <span key={m.key} className={`ruler-mark ${m.star ? 'ruler-mark--star' : ''}`} style={{ left: `${pos(m.at) + 50 / months}%` }} />
        ))}
      </div>
    </li>
  )
}

export default function About({ t }) {
  const a = t.about
  return (
    <section className="section" id="about">
      <div className="container">
        <SectionHead index={5} eyebrow={a.eyebrow} title={a.title} />
        <div className="ruler" style={{ '--now': now }}>
          <div className="ruler__scale" aria-hidden="true">
            {years.map((y) => (
              <span key={y} className="ruler__year mono" style={{ left: `${pos([y, 1])}%` }}>
                {y}
              </span>
            ))}
          </div>
          <p className="ruler__now">
            <span className="ruler__now-label mono">{a.now}</span>
          </p>
          <ol className="ruler__rows">
            {timeline.items.map((item) => (
              <Row key={item.key} item={item} a={a} />
            ))}
          </ol>
        </div>
        <p className="ruler__langs mono">{a.languages}</p>
      </div>
    </section>
  )
}

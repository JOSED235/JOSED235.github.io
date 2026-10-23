import SectionHead from './SectionHead.jsx'
import Meta from './Meta.jsx'
import Build from './Build.jsx'

const isPending = (text) => /^\[(PENDIENTE|PENDING)/.test(text)

function List({ label, items, kind }) {
  return (
    <div className={`notes notes--${kind}`}>
      <h4 className="notes__label mono">{label}</h4>
      <ul>
        {items.map((text) => (
          <li key={text} className={isPending(text) ? 'is-pending' : undefined}>
            {text}
          </li>
        ))}
      </ul>
    </div>
  )
}

// Historial de partidas: cada trabajo es una fila que se abre, como una partida en el historial de LoL.
// Sin victoria ni derrota: ese dato no existe.
function Match({ item, e, open }) {
  return (
    <li className={`match match--${item.mode}`}>
      <details open={open}>
        <summary className="match__row">
          <span className="match__mode mono">{e.modes[item.mode]}</span>
          <span className="match__what">
            <span className="match__role">{item.role}</span>
            <span className="match__org">{item.org}</span>
          </span>
          <span className="match__when">
            <Meta text={item.date} />
            {item.place && <Meta text={item.place} />}
          </span>
        </summary>
        <div className="match__body">
          {item.did && <List label={e.did} items={item.did} kind="new" />}
          {item.learned && <List label={e.learned} items={item.learned} kind="learn" />}
          {item.note && <p className="match__note">{item.note}</p>}
          {item.build && <Build items={item.build} label={e.build} />}
        </div>
      </details>
    </li>
  )
}

export default function Experience({ t }) {
  const e = t.experience
  return (
    <section className="section" id="experience">
      <div className="container">
        <SectionHead index={2} eyebrow={e.eyebrow} title={e.title} />
        <div className="history">
          <p className="history__head mono">
            {e.items.length} {e.matches}
          </p>
          <ol className="history__list">
            {e.items.map((item, i) => (
              <Match key={`${item.org}-${item.date}`} item={item} e={e} open={i === 0} />
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}

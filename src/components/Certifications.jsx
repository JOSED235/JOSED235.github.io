import SectionHead from './SectionHead.jsx'
import { ArrowUpRight } from './Icons.jsx'

// Talonario: cada certificado es una boleta. El talón lleva la fecha, el ID real y el enlace para verificar.
function Ticket({ item, group, c }) {
  return (
    <li className={`ticket ticket--${group.mark.toLowerCase()}`}>
      <div className="ticket__main">
        <p className="ticket__issuer mono">{group.issuer}</p>
        <h3 className="ticket__name">{item.name}</h3>
        {item.skills && (
          <ul className="stack">
            {item.skills.map((s) => (
              <li key={s} className="tag mono">
                {s}
              </li>
            ))}
          </ul>
        )}
      </div>
      <div className="ticket__stub">
        <span className="ticket__date mono">{item.date}</span>
        {item.credId && (
          <span className="ticket__id mono">
            {c.credId} {item.credId}
          </span>
        )}
        {item.url ? (
          <a className="ticket__link" href={item.url} target="_blank" rel="noreferrer">
            {c.verify} <ArrowUpRight width={15} height={15} />
          </a>
        ) : (
          <span className="ticket__nolink mono">{c.noLink}</span>
        )}
      </div>
    </li>
  )
}

export default function Certifications({ t }) {
  const c = t.certs
  return (
    <section className="section" id="certs">
      <div className="container">
        <SectionHead index={5} eyebrow={c.eyebrow} title={c.title} />
        <ul className="tickets">
          {c.issuers.flatMap((group) =>
            group.items.map((item) => <Ticket key={`${group.mark}-${item.name}`} item={item} group={group} c={c} />),
          )}
        </ul>
      </div>
    </section>
  )
}

import SectionHead from './SectionHead.jsx'
import { ArrowUpRight } from './Icons.jsx'

function Cert({ item, c }) {
  return (
    <li className="cert">
      <div className="cert__head">
        <h4>{item.name}</h4>
        <span className="meta mono">{item.date}</span>
      </div>
      {item.skills && (
        <ul className="stack">
          {item.skills.map((s) => (
            <li key={s} className="tag mono">
              {s}
            </li>
          ))}
        </ul>
      )}
      {item.url && (
        <div className="cert__foot">
          <span className="meta mono">
            {c.credId}: {item.credId}
          </span>
          <a className="cert__link" href={item.url} target="_blank" rel="noreferrer">
            {c.verify} <ArrowUpRight width={15} height={15} />
          </a>
        </div>
      )}
    </li>
  )
}

export default function Certifications({ t }) {
  const c = t.certs
  return (
    <section className="section" id="certs">
      <div className="container">
        <SectionHead index={4} eyebrow={c.eyebrow} title={c.title} />
        <div className="certs-grid">
          {c.issuers.map((group) => (
            <div key={group.issuer} className="card cert-group">
              <div className="cert-group__head">
                <span className="cert-group__mark mono" aria-hidden="true">
                  {group.mark}
                </span>
                <h3>{group.issuer}</h3>
                <span className="cert-group__count mono">{group.items.length}</span>
              </div>
              <ul className="certs">
                {group.items.map((item) => (
                  <Cert key={item.name} item={item} c={c} />
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

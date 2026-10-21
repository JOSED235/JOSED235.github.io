import SectionHead from './SectionHead.jsx'

function Entry({ item }) {
  return (
    <li className="entry">
      <div className="entry__head">
        <h4>{item.name}</h4>
        <span className="meta mono">{item.date}</span>
      </div>
      {item.org && <p className="entry__org">{item.org}</p>}
      {item.note && <p className="entry__note">{item.note}</p>}
    </li>
  )
}

export default function About({ t }) {
  const a = t.about
  return (
    <section className="section" id="about">
      <div className="container">
        <SectionHead index={4} eyebrow={a.eyebrow} title={a.title} />
        <div className="about-grid">
          <div className="card reveal">
            <h3 className="about__title mono">{a.education}</h3>
            <ul className="entries">
              {a.studies.map((s) => (
                <Entry key={s.name} item={s} />
              ))}
            </ul>
          </div>
          <div className="card reveal">
            <h3 className="about__title mono">{a.community}</h3>
            <ul className="entries">
              {a.activities.map((s) => (
                <Entry key={s.name} item={s} />
              ))}
            </ul>
            <p className="about__langs mono">{a.languages}</p>
          </div>
        </div>
      </div>
    </section>
  )
}

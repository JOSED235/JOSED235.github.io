import SectionHead from './SectionHead.jsx'

export default function Experience({ t }) {
  const e = t.experience
  return (
    <section className="section" id="experience">
      <div className="container">
        <SectionHead index={2} eyebrow={e.eyebrow} title={e.title} />
        <ol className="timeline">
          {e.items.map((item, i) => (
            <li key={item.role} className={`timeline__item reveal ${i === 0 ? 'is-main' : ''}`}>
              <span className="timeline__dot" aria-hidden="true" />
              <div className="timeline__card card">
                <div className="timeline__head">
                  <div>
                    <h3>{item.role}</h3>
                    <p className="timeline__org">{item.org}</p>
                  </div>
                  <span className="meta mono">
                    {item.date}
                    {item.place && <><br />{item.place}</>}
                  </span>
                </div>
                <ul className="highlights">
                  {item.points.map((p) => (
                    <li key={p}>{p}</li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}

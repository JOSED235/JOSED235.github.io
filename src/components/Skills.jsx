import SectionHead from './SectionHead.jsx'

export default function Skills({ t }) {
  const s = t.skills
  return (
    <section className="section" id="skills">
      <div className="container">
        <SectionHead index={3} eyebrow={s.eyebrow} title={s.title} />
        <div className="skills-grid">
          {s.groups.map((g) => (
            <div key={g.name} className="card skill-group">
              <h3 className="mono">{g.name}</h3>
              <ul className="stack">
                {g.items.map((item) => (
                  <li key={item} className="tag tag--lg">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

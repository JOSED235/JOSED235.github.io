import SectionHead from './SectionHead.jsx'

// Pantalla de equipo como en Pokémon: la primera casilla es la líder y va aparte.
// Sin barras de PS ni niveles: no hay cifras que medir aquí.
function Slot({ member, team, lead }) {
  return (
    <li className={`team-slot team-slot--${member.key} ${lead ? 'team-slot--lead' : ''}`}>
      <span className="pokeball" aria-hidden="true" />
      <div className="team-slot__body">
        <h3 className="team-slot__name">{member.name}</h3>
        {member.text && <p className="team-slot__text">{member.text}</p>}
      </div>
      <span className="team-slot__type mono">
        <span className="sr-only">{team.typeLabel}: </span>
        {member.type}
      </span>
    </li>
  )
}

export default function Team({ t }) {
  const team = t.team
  const [lead, ...rest] = team.members
  return (
    <section className="section" id="team">
      <div className="container">
        <SectionHead index={4} eyebrow={team.eyebrow} title={team.title} />
        <p className="team__trainer mono">{team.trainer}</p>
        <div className="team">
          <ul className="team__lead">
            <Slot member={lead} team={team} lead />
          </ul>
          <ul className="team__rest">
            {rest.map((m) => (
              <Slot key={m.key} member={m} team={team} />
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

import TechIcon from './TechIcon.jsx'

// Como la build de items de LoL: cada casilla es una tecnología usada en ese proyecto.
export default function Build({ items, label, compact }) {
  return (
    <div className={`build ${compact ? 'build--compact' : ''}`}>
      {!compact && <span className="build__label mono">{label}</span>}
      <ul className="build__slots">
        {items.map((name) => (
          <li key={name} className="build__slot" title={name}>
            <span className="build__icon" aria-hidden="true">
              <TechIcon name={name} />
            </span>
            <span className={compact ? 'sr-only' : 'build__name mono'}>{name}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

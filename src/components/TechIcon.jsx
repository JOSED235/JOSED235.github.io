import { techIcons } from './techIcons.js'

// Cada logo se dibuja una sola vez aquí; los usos lo referencian con <use> (el HTML pasa de ~350 KB a mucho menos).
export function TechSprite() {
  return (
    <svg width="0" height="0" style={{ position: 'absolute' }} aria-hidden="true">
      {Object.values(techIcons).map((icon) => (
        <symbol key={icon.slug} id={`ti-${icon.slug}`} viewBox="0 0 24 24">
          <path d={icon.path} />
        </symbol>
      ))}
    </svg>
  )
}

// Logo de la tecnología o, si no tiene, sus iniciales.
export default function TechIcon({ name }) {
  const icon = techIcons[name]
  if (!icon) return <span className="tech-initials mono">{name.replace(/[^A-Za-z#+]/g, '').slice(0, 3)}</span>
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <use href={`#ti-${icon.slug}`} />
    </svg>
  )
}

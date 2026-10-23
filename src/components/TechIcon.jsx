import { techIcons } from './techIcons.js'

// Logo de la tecnología o, si no tiene, sus iniciales.
export default function TechIcon({ name }) {
  const icon = techIcons[name]
  if (!icon) return <span className="tech-initials mono">{name.replace(/[^A-Za-z#+]/g, '').slice(0, 3)}</span>
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d={icon.path} />
    </svg>
  )
}

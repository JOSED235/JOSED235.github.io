import Doodle from './Doodles.jsx'

// El título va plano para que se entienda solo; la metáfora del juego queda en el eyebrow.
export default function SectionHead({ eyebrow, title, index }) {
  return (
    <div className="section-head">
      <p className="eyebrow mono">
        <span className="accent">0{index}</span> / {eyebrow}
      </p>
      <h2>{title}</h2>
      <Doodle n={index} />
    </div>
  )
}

export default function SectionHead({ eyebrow, title, index }) {
  return (
    <div className="section-head reveal">
      <p className="eyebrow mono">
        <span className="accent">0{index}</span> / {eyebrow}
      </p>
      <h2>{title}</h2>
    </div>
  )
}

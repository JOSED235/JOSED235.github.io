// Texto tipo "Proyecto · Individual · Feb – Jun 2026": cada segmento se mantiene
// en una sola línea para que en pantallas angostas no se parta una fecha a la mitad.
export default function Meta({ text, className = 'meta mono' }) {
  const parts = text.split(' · ')
  return (
    <span className={className}>
      {parts.map((part, i) => (
        <span key={part}>
          <span className="meta__part">{part}</span>
          {/* el separador va fuera del bloque sin cortes: ahí es donde puede saltar la línea */}
          {i < parts.length - 1 && ' · '}
        </span>
      ))}
    </span>
  )
}

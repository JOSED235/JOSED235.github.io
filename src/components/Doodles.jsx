// Dibujitos del margen, hechos a mano en SVG. Modo oscuro: cosas de Steven Universe.
// Modo claro: cosas de Hora de Aventura. Cada lugar lleva una pareja y el CSS muestra la del tema.
// Son decoración: van ocultos para lectores de pantalla.

const ink = { stroke: 'var(--doodle-ink)', strokeWidth: 2.5, strokeLinejoin: 'round', strokeLinecap: 'round' }

// ---- Steven Universe ----
const Star = () => (
  <path
    d="M32 6 L38.5 23.1 L56.7 24 L42.5 35.4 L47.3 53 L32 43 L16.7 53 L21.5 35.4 L7.3 24 L25.5 23.1 Z"
    fill="#ffd447"
    {...ink}
  />
)

// Gema de Rose: pentágono facetado
const RoseGem = () => (
  <g {...ink}>
    <path d="M20 14 H44 L54 28 L32 54 L10 28 Z" fill="#ff9ecf" />
    <path d="M10 28 H54 M20 14 L26 28 L32 54 M44 14 L38 28 L32 54 M26 28 L32 14 L38 28" fill="none" strokeWidth="1.6" />
  </g>
)

// Gema de Amatista: óvalo con faceta en rombo
const AmethystGem = () => (
  <g {...ink}>
    <ellipse cx="32" cy="32" rx="16" ry="22" fill="#b9a0f5" />
    <path d="M32 14 L42 32 L32 50 L22 32 Z" fill="#d6c6ff" strokeWidth="1.6" />
  </g>
)

// Gema de Perla: óvalo acostado con brillo
const PearlGem = () => (
  <g {...ink}>
    <ellipse cx="32" cy="32" rx="21" ry="15" fill="#7ee3e0" />
    <ellipse cx="25" cy="27" rx="6" ry="3.5" fill="#e9fffe" stroke="none" />
  </g>
)

// ---- Hora de Aventura ----
// El gorro de Finn, con sus orejitas
const FinnHat = () => (
  <g {...ink}>
    <circle cx="19" cy="16" r="6" fill="#ffffff" />
    <circle cx="45" cy="16" r="6" fill="#ffffff" />
    <path d="M13 52 V31 C13 19 21 13 32 13 C43 13 51 19 51 31 V52 Z" fill="#ffffff" />
    <rect x="20" y="26" width="24" height="19" rx="9" fill="#ffd9b8" />
    <circle cx="27" cy="34" r="1.6" fill="var(--doodle-ink)" stroke="none" />
    <circle cx="37" cy="34" r="1.6" fill="var(--doodle-ink)" stroke="none" />
  </g>
)

// La consola con cara (BMO)
const Bmo = () => (
  <g {...ink}>
    <rect x="14" y="8" width="36" height="48" rx="5" fill="#6fc2b0" />
    <rect x="19" y="13" width="26" height="20" rx="2" fill="#c9f2df" />
    <circle cx="27" cy="21" r="1.6" fill="var(--doodle-ink)" stroke="none" />
    <circle cx="37" cy="21" r="1.6" fill="var(--doodle-ink)" stroke="none" />
    <path d="M28 26 Q32 29.5 36 26" fill="none" strokeWidth="1.8" />
    <path d="M21 44 H30 M25.5 39.5 V48.5" stroke="#ffc93c" strokeWidth="3.4" />
    <circle cx="40" cy="42" r="2.6" fill="#c62828" strokeWidth="1.6" />
    <circle cx="44.5" cy="48" r="2" fill="#2e7d32" strokeWidth="1.6" />
  </g>
)

// La corona del Rey Helado, con sus tres gemas rojas
const IceCrown = () => (
  <g {...ink}>
    <path d="M12 46 L16 22 L24 34 L32 17 L40 34 L48 22 L52 46 Z" fill="#ffc93c" />
    <circle cx="16" cy="22" r="3.6" fill="#c62828" />
    <circle cx="32" cy="17" r="3.6" fill="#c62828" />
    <circle cx="48" cy="22" r="3.6" fill="#c62828" />
  </g>
)

// La espada dorada de Finn, un poco inclinada
const Sword = () => (
  <g {...ink} transform="rotate(35 32 32)">
    <path d="M29 6 L32 2 L35 6 V40 H29 Z" fill="#ffc93c" />
    <path d="M32 8 V38" fill="none" stroke="#fff3c4" strokeWidth="1.6" />
    <rect x="21" y="40" width="22" height="5" rx="2" fill="#ffc93c" />
    <rect x="29.5" y="45" width="5" height="11" rx="1.5" fill="#8a5a00" />
    <circle cx="32" cy="59" r="3" fill="#ffc93c" />
  </g>
)

const su = { star: Star, rose: RoseGem, amethyst: AmethystGem, pearl: PearlGem }
const at = { hat: FinnHat, bmo: Bmo, crown: IceCrown, sword: Sword }

// Parejas por lugar: [Steven Universe, Hora de Aventura]
const pairs = [
  ['star', 'hat'],
  ['rose', 'bmo'],
  ['amethyst', 'crown'],
  ['pearl', 'sword'],
]

function Sprite({ set, name, className }) {
  const Shape = set[name]
  return (
    <svg className={className} viewBox="0 0 64 64" width="64" height="64" aria-hidden="true" focusable="false">
      <Shape />
    </svg>
  )
}

// `n` elige la pareja; `place` es una clase de posición (ver .doodle--* en styles.css).
export default function Doodle({ n = 0, place = 'head' }) {
  const [s, a] = pairs[n % pairs.length]
  return (
    <span className={`doodle doodle--${place}`} aria-hidden="true">
      <Sprite set={su} name={s} className="doodle__su" />
      <Sprite set={at} name={a} className="doodle__at" />
    </span>
  )
}

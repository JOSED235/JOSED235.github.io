import { useEffect, useRef } from 'react'
import { Close } from './Icons.jsx'

// Captura en grande con <dialog>: Esc, clic afuera o el botón la cierran, y el foco vuelve solo.
export default function Lightbox({ src, alt, closeLabel, onClose }) {
  const dialog = useRef(null)

  useEffect(() => {
    const d = dialog.current
    d.showModal()
    return () => d.open && d.close()
  }, [])

  return (
    <dialog
      ref={dialog}
      className="lightbox"
      aria-label={alt}
      onCancel={(e) => {
        e.preventDefault()
        onClose()
      }}
      onClick={(e) => e.target === dialog.current && onClose()}
    >
      <button className="icon-btn lightbox__close" onClick={onClose} aria-label={closeLabel} autoFocus>
        <Close />
      </button>
      <img src={src} alt={alt} />
    </dialog>
  )
}

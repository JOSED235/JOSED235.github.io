import { useEffect } from 'react'

// Bloques que aparecen al llegar a ellos con el scroll. La clase `reveal-on` en <html> solo se pone
// si hay JS y no se pidió movimiento reducido: sin ella, todo se ve desde el inicio.
const targets = [
  '.section-head',
  '.featured',
  '.hotfix',
  '.hotfixes__head',
  '.match',
  '.core-stack',
  '.rune-tree',
  '.team-slot',
  '.closing',
  '.ticket',
  '.ruler',
  '.awards',
].join(',')

export function useReveal() {
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches || !('IntersectionObserver' in window)) return
    const root = document.documentElement
    const els = [...document.querySelectorAll(targets)]
    // Lo que ya está en pantalla al cargar (o al llegar por un #ancla) no se anima.
    const fold = innerHeight
    els.forEach((el) => {
      if (el.getBoundingClientRect().top < fold) el.classList.add('is-visible')
    })
    root.classList.add('reveal-on')

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (!e.isIntersecting) return
          e.target.classList.add('is-visible')
          io.unobserve(e.target)
        })
      },
      { rootMargin: '0px 0px -8% 0px', threshold: 0.08 },
    )
    els.forEach((el) => !el.classList.contains('is-visible') && io.observe(el))
    return () => {
      io.disconnect()
      root.classList.remove('reveal-on')
    }
  }, [])
}

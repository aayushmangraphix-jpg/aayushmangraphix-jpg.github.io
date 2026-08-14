import { useEffect, useRef } from 'react'

export function useReveal<T extends HTMLElement>() {
  const ref = useRef<T | null>(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return

    const nodes = Array.from(el.querySelectorAll('.pf-reveal'))
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    if (reduceMotion) {
      nodes.forEach((node) => node.classList.add('is-in'))
      return
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('is-in')
            io.unobserve(e.target)
          }
        })
      },
      // Trigger slightly before the element is fully in view so content
      // is already settling by the time the user scrolls to it.
      { threshold: 0.05, rootMargin: '0px 0px -8% 0px' },
    )
    nodes.forEach((node) => io.observe(node))
    return () => io.disconnect()
  }, [])
  return ref
}

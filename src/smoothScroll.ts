import { useEffect } from 'react'
import Lenis from 'lenis'

let lenis: Lenis | null = null

export function getLenis() {
  return lenis
}

/** Eased, inertial page scrolling. Falls back to native scroll for reduced motion. */
export function useSmoothScroll() {
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const instance = new Lenis({
      duration: 1.15,
      easing: (t: number) => 1 - Math.pow(1 - t, 3),
      smoothWheel: true,
      wheelMultiplier: 0.9,
      touchMultiplier: 1.4,
    })

    lenis = instance

    let frame = 0
    const raf = (time: number) => {
      instance.raf(time)
      frame = requestAnimationFrame(raf)
    }
    frame = requestAnimationFrame(raf)

    return () => {
      cancelAnimationFrame(frame)
      instance.destroy()
      lenis = null
    }
  }, [])
}

export function scrollToTarget(target: HTMLElement | number, immediate = false) {
  const instance = getLenis()
  if (instance) {
    instance.scrollTo(target, { immediate, offset: typeof target === 'number' ? 0 : -88 })
    return
  }
  if (typeof target === 'number') window.scrollTo(0, target)
  else target.scrollIntoView()
}

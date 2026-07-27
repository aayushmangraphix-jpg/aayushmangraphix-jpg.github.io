import { useEffect, useRef } from 'react'

type Point = { x: number; y: number; ox: number; oy: number }

const COLS = 14
const ROWS = 9
const RGB = '110, 145, 210'
const INFLUENCE = 200
const VISIBILITY_RADIUS = 280
const PULL = 0.48
const EASE = 0.14
const REVEAL_EASE = 0.1

/**
 * Soft blue mesh revealed only near the pointer — inspired by
 * https://www.akhilkrishnan.me/ hero hover field.
 */
export function HeroMesh() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduceMotion) return

    const parent = canvas.parentElement
    if (!parent) return

    let points: Point[] = []
    let raf = 0
    let running = true
    let w = 0
    let h = 0
    let dpr = 1
    let reveal = 0
    const mouse = { x: -9999, y: -9999, active: false }

    const build = () => {
      const rect = parent.getBoundingClientRect()
      w = Math.max(1, Math.floor(rect.width))
      h = Math.max(1, Math.floor(rect.height))
      dpr = Math.min(window.devicePixelRatio || 1, 2)
      canvas.width = Math.floor(w * dpr)
      canvas.height = Math.floor(h * dpr)
      canvas.style.width = `${w}px`
      canvas.style.height = `${h}px`
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)

      points = []
      for (let row = 0; row <= ROWS; row++) {
        for (let col = 0; col <= COLS; col++) {
          const x = (col / COLS) * w
          const y = (row / ROWS) * h
          points.push({ x, y, ox: x, oy: y })
        }
      }
    }

    const proximity = (x: number, y: number) => {
      if (!mouse.active && reveal < 0.01) return 0
      const dist = Math.hypot(x - mouse.x, y - mouse.y)
      const t = Math.max(0, 1 - dist / VISIBILITY_RADIUS)
      return t * t
    }

    const step = () => {
      if (!running) return

      const targetReveal = mouse.active ? 1 : 0
      reveal += (targetReveal - reveal) * REVEAL_EASE

      for (const p of points) {
        let tx = p.ox
        let ty = p.oy
        if (mouse.active) {
          const dx = mouse.x - p.ox
          const dy = mouse.y - p.oy
          const dist = Math.hypot(dx, dy) || 1
          const t = Math.max(0, 1 - dist / INFLUENCE)
          const force = t * t * PULL
          tx = p.ox + dx * force
          ty = p.oy + dy * force
        }
        p.x += (tx - p.x) * EASE
        p.y += (ty - p.y) * EASE
      }

      ctx.clearRect(0, 0, w, h)

      if (reveal > 0.01) {
        const cols = COLS + 1
        ctx.lineWidth = 1
        ctx.lineCap = 'round'

        for (let row = 0; row <= ROWS; row++) {
          for (let col = 0; col < COLS; col++) {
            const a = points[row * cols + col]
            const b = points[row * cols + col + 1]
            const alpha =
              Math.min(proximity(a.ox, a.oy), proximity(b.ox, b.oy)) * reveal
            if (alpha < 0.02) continue
            ctx.strokeStyle = `rgba(${RGB}, ${alpha * 0.55})`
            ctx.beginPath()
            ctx.moveTo(a.x, a.y)
            ctx.lineTo(b.x, b.y)
            ctx.stroke()
          }
        }

        for (let col = 0; col <= COLS; col++) {
          for (let row = 0; row < ROWS; row++) {
            const a = points[row * cols + col]
            const b = points[(row + 1) * cols + col]
            const alpha =
              Math.min(proximity(a.ox, a.oy), proximity(b.ox, b.oy)) * reveal
            if (alpha < 0.02) continue
            ctx.strokeStyle = `rgba(${RGB}, ${alpha * 0.55})`
            ctx.beginPath()
            ctx.moveTo(a.x, a.y)
            ctx.lineTo(b.x, b.y)
            ctx.stroke()
          }
        }

        for (const p of points) {
          const alpha = proximity(p.ox, p.oy) * reveal
          if (alpha < 0.04) continue
          ctx.fillStyle = `rgba(${RGB}, ${alpha * 0.75})`
          ctx.beginPath()
          ctx.arc(p.x, p.y, 1.4, 0, Math.PI * 2)
          ctx.fill()
        }
      }

      raf = requestAnimationFrame(step)
    }

    const onMove = (e: PointerEvent) => {
      const rect = canvas.getBoundingClientRect()
      mouse.x = e.clientX - rect.left
      mouse.y = e.clientY - rect.top
      mouse.active = true
    }
    const onLeave = () => {
      mouse.active = false
    }

    build()
    step()

    const ro = new ResizeObserver(() => build())
    ro.observe(parent)
    parent.addEventListener('pointermove', onMove, { passive: true })
    parent.addEventListener('pointerleave', onLeave)

    return () => {
      running = false
      cancelAnimationFrame(raf)
      ro.disconnect()
      parent.removeEventListener('pointermove', onMove)
      parent.removeEventListener('pointerleave', onLeave)
    }
  }, [])

  return <canvas ref={canvasRef} className="pf-hero-mesh" aria-hidden="true" />
}

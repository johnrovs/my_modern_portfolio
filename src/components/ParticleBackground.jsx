import { useEffect, useRef } from 'react'

export default function ParticleBackground({ count = 60 }) {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    let animationId
    let width, height

    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches

    const resize = () => {
      width = canvas.width = canvas.offsetWidth * window.devicePixelRatio
      height = canvas.height = canvas.offsetHeight * window.devicePixelRatio
    }
    resize()
    window.addEventListener('resize', resize)

    const particles = Array.from({ length: count }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      r: Math.random() * 1.6 + 0.4,
      vx: (Math.random() - 0.5) * 0.25,
      vy: (Math.random() - 0.5) * 0.25,
      alpha: Math.random() * 0.5 + 0.2,
    }))

    const colors = ['59,130,246', '139,92,246', '6,182,212']

    const draw = () => {
      ctx.clearRect(0, 0, width, height)
      particles.forEach((p, i) => {
        p.x += p.vx
        p.y += p.vy
        if (p.x < 0 || p.x > width) p.vx *= -1
        if (p.y < 0 || p.y > height) p.vy *= -1

        ctx.beginPath()
        ctx.arc(p.x, p.y, p.r * window.devicePixelRatio, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(${colors[i % colors.length]},${p.alpha})`
        ctx.fill()
      })
      animationId = requestAnimationFrame(draw)
    }

    if (!prefersReducedMotion) {
      draw()
    } else {
      // Draw a single static frame
      particles.forEach((p, i) => {
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.r * window.devicePixelRatio, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(${colors[i % colors.length]},${p.alpha})`
        ctx.fill()
      })
    }

    return () => {
      cancelAnimationFrame(animationId)
      window.removeEventListener('resize', resize)
    }
  }, [count])

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full opacity-70"
      aria-hidden="true"
    />
  )
}

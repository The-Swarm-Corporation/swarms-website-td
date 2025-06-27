"use client"

import { useEffect, useRef } from "react"

interface AnimatedBackgroundProps {
  className?: string
  particleColor?: string
  particleSize?: number
  particleCount?: number
}

export function AnimatedBackground({
  className = "",
  particleColor = "rgba(239, 68, 68, 0.6)",
  particleSize = 1.5,
  particleCount = 40,
}: AnimatedBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let animationFrameId: number
    let particles: {
      x: number
      y: number
      radius: number
      speedX: number
      speedY: number
      opacity: number
    }[] = []

    const resizeObserver = new ResizeObserver(() => {
      setupCanvas()
    })

    resizeObserver.observe(canvas)

    function setupCanvas() {
      canvas.width = canvas.offsetWidth
      canvas.height = canvas.offsetHeight
      initParticles()
    }

    function initParticles() {
      particles = []
      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          radius: Math.random() * particleSize + 0.5,
          speedX: Math.random() * 0.1 - 0.05,
          speedY: Math.random() * 0.1 - 0.05,
          opacity: Math.random() * 0.5 + 0.2,
        })
      }
    }

    function drawParticles() {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      particles.forEach((particle) => {
        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2)
        ctx.fillStyle = particleColor.replace(")", `, ${particle.opacity})`)
        ctx.fill()

        // Update position
        particle.x += particle.speedX
        particle.y += particle.speedY

        // Boundary check
        if (particle.x < 0 || particle.x > canvas.width) {
          particle.speedX = -particle.speedX
        }
        if (particle.y < 0 || particle.y > canvas.height) {
          particle.speedY = -particle.speedY
        }
      })

      // Draw connections
      ctx.strokeStyle = particleColor.replace(")", ", 0.15)")
      ctx.lineWidth = 0.3

      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x
          const dy = particles[i].y - particles[j].y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < 100) {
            ctx.beginPath()
            ctx.moveTo(particles[i].x, particles[i].y)
            ctx.lineTo(particles[j].x, particles[j].y)
            ctx.stroke()
          }
        }
      }

      animationFrameId = requestAnimationFrame(drawParticles)
    }

    setupCanvas()
    drawParticles()

    return () => {
      cancelAnimationFrame(animationFrameId)
      resizeObserver.disconnect()
    }
  }, [particleColor, particleSize, particleCount])

  return <canvas ref={canvasRef} className={`absolute inset-0 w-full h-full z-0 ${className}`} aria-hidden="true" />
}

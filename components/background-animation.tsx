"use client"

import { useEffect, useRef } from "react"

export function BackgroundAnimation() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    const particles: Particle[] = []
    const particleCount = 100
    const maxDistance = 100

    class Particle {
      x: number
      y: number
      directionX: number
      directionY: number

      constructor() {
        this.x = Math.random() * canvas.width
        this.y = Math.random() * canvas.height
        this.directionX = Math.random() * 2 - 1
        this.directionY = Math.random() * 2 - 1
      }

      update() {
        if (this.x > canvas.width || this.x < 0) {
          this.directionX = -this.directionX
        }
        if (this.y > canvas.height || this.y < 0) {
          this.directionY = -this.directionY
        }

        this.x += this.directionX
        this.y += this.directionY
      }

      draw() {
        ctx.beginPath()
        ctx.arc(this.x, this.y, 2, 0, Math.PI * 2)
        ctx.fillStyle = "rgba(200, 200, 200, 0.5)"
        ctx.fill()
      }
    }

    function init() {
      for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle())
      }
    }

    function animate() {
      requestAnimationFrame(animate)
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      for (let i = 0; i < particles.length; i++) {
        particles[i].update()
        particles[i].draw()

        for (let j = i; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x
          const dy = particles[i].y - particles[j].y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < maxDistance) {
            ctx.beginPath()
            ctx.strokeStyle = `rgba(200, 200, 200, ${1 - distance / maxDistance})`
            ctx.lineWidth = 1
            ctx.moveTo(particles[i].x, particles[i].y)
            ctx.lineTo(particles[j].x, particles[j].y)
            ctx.stroke()
          }
        }
      }
    }

    init()
    animate()

    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full pointer-events-none"
      style={{ background: "black" }}
    />
  )
}


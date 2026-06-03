'use client'
import { useEffect, useRef, useState } from 'react'

function CrackersBackground() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null)

  useEffect(() => {
    if (typeof window === 'undefined') return
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const resizeCanvas = () => {
      if (canvas && canvas.parentElement) {
        canvas.width = canvas.parentElement.offsetWidth
        canvas.height = canvas.parentElement.offsetHeight
      }
    }
    resizeCanvas()
    window.addEventListener('resize', resizeCanvas)

    let particles: any[] = []
    let fireworks: any[] = []

    class Firework {
      x: number; targetY: number; y: number; speed: number;
      hue: number; brightness: number;
      constructor() {
        this.x = Math.random() * (canvas?.width || 500)
        this.y = (canvas?.height || 600)
        this.targetY = Math.random() * ((canvas?.height || 600) * 0.5) + 50
        this.speed = Math.random() * 3 + 2
        this.hue = Math.random() * 360
        this.brightness = Math.random() * 30 + 50
      }
      update(index: number) {
        this.y -= this.speed
        if (this.y <= this.targetY) {
          for (let i = 0; i < 40; i++) {
            particles.push(new Particle(this.x, this.y, this.hue))
          }
          fireworks.splice(index, 1)
        }
      }
      draw() {
        if (!ctx) return
        ctx.save()
        ctx.beginPath()
        ctx.arc(this.x, this.y, 2, 0, Math.PI * 2)
        ctx.fillStyle = `hsl(${this.hue}, 100%, ${this.brightness}%)`
        ctx.fill()
        ctx.restore()
      }
    }

    class Particle {
      x: number; y: number; speed: number; angle: number; friction: number;
      gravity: number; hue: number; alpha: number; decay: number;
      constructor(x: number, y: number, hue: number) {
        this.x = x
        this.y = y
        this.angle = Math.random() * Math.PI * 2
        this.speed = Math.random() * 4 + 1
        this.friction = 0.95
        this.gravity = 0.08
        this.hue = hue
        this.alpha = 1
        this.decay = Math.random() * 0.02 + 0.015
      }
      update(index: number) {
        this.speed *= this.friction
        this.x += Math.cos(this.angle) * this.speed
        this.y += Math.sin(this.angle) * this.speed + this.gravity
        this.alpha -= this.decay
        if (this.alpha <= 0) {
          particles.splice(index, 1)
        }
      }
      draw() {
        if (!ctx) return
        ctx.save()
        ctx.beginPath()
        ctx.arc(this.x, this.y, Math.random() * 1.5 + 1, 0, Math.PI * 2)
        ctx.fillStyle = `hsla(${this.hue}, 100%, 60%, ${this.alpha})`
        ctx.shadowBlur = 6
        ctx.shadowColor = `hsl(${this.hue}, 100%, 60%)`
        ctx.fill()
        ctx.restore()
      }
    }

    let animationFrameId: number
    let timer = 0

    const animate = () => {
      ctx.fillStyle = 'rgba(8, 2, 5, 0.2)'
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      if (timer % 35 === 0) {
        fireworks.push(new Firework())
      }

      fireworks.forEach((fw, i) => {
        fw.update(i)
        fw.draw()
      })

      particles.forEach((p, i) => {
        p.update(i)
        p.draw()
      })

      timer++
      animationFrameId = requestAnimationFrame(animate)
    }
    animate()

    return () => {
      window.removeEventListener('resize', resizeCanvas)
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'absolute',
        top: 0, left: 0, width: '100%', height: '100%',
        pointerEvents: 'none', zIndex: 0
      }}
    />
  )
}

export default function AboutMe() {
  const [mounted, setMounted] = useState(false)
  useEffect(() => { setMounted(true) }, [])

  return (
    <section id="about" style={{
      position: 'relative',
      minHeight: '90vh',
      background: 'linear-gradient(180deg, #060606 0%, #080205 50%, #020002 100%)',
      padding: '120px 40px',
      overflow: 'hidden',
      borderTop: '1px solid rgba(255,255,255,0.03)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }}>
      {/* 🎆 AUTOMATIC CRACKERS INJECTION */}
      {mounted && <CrackersBackground />}

      <div style={{ position: 'relative', zIndex: 1, maxWidth: 950, margin: '0 auto', textAlign: 'center' }}>
        
        {/* SUBTITLE */}
        <p style={{ fontSize: 11, letterSpacing: '0.4em', textTransform: 'uppercase', color: '#ff8c42', marginBottom: 16, fontWeight: 600 }}>
          About Me
        </p>
        
        {/* MAIN HEADINGS DESIGN WITH ROLE IDENTITIES */}
        <h2 style={{ fontFamily: "'Bebas Neue',sans-serif", fontSize: 'clamp(2.5rem, 6.5vw, 4.8rem)', color: '#fff', marginBottom: 12, letterSpacing: '0.01em', lineHeight: 1.1 }}>
          Frontend Developer <span style={{ color: 'rgba(255,255,255,0.3)', fontSize: 'clamp(2rem, 5vw, 4rem)', verticalAlign: 'middle' }}>|</span> Data Analyst
        </h2>
        
        {/* TECH TAGS SYSTEM */}
        <div style={{ display: 'flex', gap: 10, justifyContent: 'center', flexWrap: 'wrap', marginBottom: 36 }}>
          {['React / Next.js', 'TypeScript', 'Tailwind CSS', 'Python', 'SQL & Analytics', 'Data Visualization'].map((tech, i) => (
            <span key={i} style={{ fontSize: 11, fontFamily: 'monospace', background: 'rgba(255, 140, 66, 0.08)', color: '#ff8c42', border: '1px solid rgba(255, 140, 66, 0.2)', padding: '5px 12px', borderRadius: 20 }}>
              {tech}
            </span>
          ))}
        </div>

        {/* CORE BIOGRAPHY PARAGRAPH */}
        <p style={{ fontSize: 'clamp(1.05rem, 1.8vw, 1.3rem)', color: 'rgba(255,255,255,0.78)', lineHeight: 1.85, textShadow: '0 2px 10px rgba(0,0,0,0.85)', maxWidth: 850, margin: '0 auto' }}>
          I am a computer science engineer bridging the gap between high-performance pixel-perfect user interfaces and heavy statistical backend metrics. As a <strong style={{ color: '#fff', fontWeight: 600 }}>Frontend Developer</strong>, I design highly scalable Next.js applications and responsive structural systems optimized for client performance. Simultaneously, my expertise as a <strong style={{ color: '#fff', fontWeight: 600 }}>Data Analyst</strong> empowers me to run deep predictive algorithms, translate complex databases into structured insights, and deploy clean visual data stories. I thrive on building interactive software nodes that transform massive data pipelines into beautiful, fluid digital experiences.
        </p>
        
      </div>
    </section>
  )
}

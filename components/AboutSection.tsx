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
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resizeCanvas()
    window.addEventListener('resize', resizeCanvas)

    let particles: any[] = []
    let fireworks: any[] = []

    class Firework {
      x: number; targetY: number; y: number; speed: number;
      hue: number; brightness: number;
      constructor() {
        this.x = Math.random() * window.innerWidth
        this.y = window.innerHeight
        this.targetY = Math.random() * (window.innerHeight * 0.7) + 50
        this.speed = Math.random() * 5 + 4 
        this.hue = Math.random() * 360
        this.brightness = Math.random() * 30 + 50
      }
      update(index: number) {
        this.y -= this.speed
        if (this.y <= this.targetY) {
          for (let i = 0; i < 50; i++) {
            particles.push(new Particle(this.x, this.y, this.hue))
          }
          fireworks.splice(index, 1)
        }
      }
      draw() {
        if (!ctx) return
        ctx.save()
        ctx.beginPath()
        ctx.arc(this.x, this.y, 2.5, 0, Math.PI * 2)
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
        this.speed = Math.random() * 6 + 2 
        this.friction = 0.96
        this.gravity = 0.1 
        this.hue = hue
        this.alpha = 1
        this.decay = Math.random() * 0.015 + 0.012 
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
        ctx.arc(this.x, this.y, Math.random() * 2 + 1, 0, Math.PI * 2)
        ctx.fillStyle = `hsla(${this.hue}, 100%, 65%, ${this.alpha})`
        ctx.shadowBlur = 8
        ctx.shadowColor = `hsl(${this.hue}, 100%, 60%)`
        ctx.fill()
        ctx.restore()
      }
    }

    let animationFrameId: number
    let timer = 0

    const animate = () => {
      ctx.fillStyle = 'rgba(6, 6, 6, 0.15)'
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      if (timer % 40 === 0) {
        fireworks.push(new Firework())
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
        top: 0, left: 0, 
        width: '100vw', height: '100%',
        pointerEvents: 'none', zIndex: 0
      }}
    />
  )
}

export default function AboutMe() {
  const [mounted, setMounted] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [resumeVisits, setResumeVisits] = useState<number>(0)

  useEffect(() => { 
    setMounted(true) 
    // Initial fetch to show current baseline stats
    const savedResumeViews = localStorage.getItem('kartik_resume_views')
    if (savedResumeViews) {
      setResumeVisits(parseInt(savedResumeViews, 10))
    }
  }, [])

  // 📈 FUNCTION TO TRACK EXCLUSIVE RESUME VIEW INTERACTION
  const handleResumeOpen = () => {
    const savedResumeViews = localStorage.getItem('kartik_resume_views')
    let currentViews = savedResumeViews ? parseInt(savedResumeViews, 10) : 0
    
    const isResumeTrackedThisSession = sessionStorage.getItem('kartik_resume_session_tracked')
    
    if (!isResumeTrackedThisSession) {
      currentViews += 1
      localStorage.setItem('kartik_resume_views', currentViews.toString())
      sessionStorage.setItem('kartik_resume_session_tracked', 'true')
    }
    
    setResumeVisits(currentViews)
    setIsModalOpen(true)
  }

  return (
    <section id="about" style={{
      position: 'relative',
      minHeight: '100vh',
      background: 'linear-gradient(180deg, #060606 0%, #080205 50%, #020002 100%)',
      padding: '120px 40px 140px 40px',
      overflow: 'hidden',
      borderTop: '1px solid rgba(255,255,255,0.03)',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center'
    }}>
      {/* 🎆 FULL INTERACTIVE VIEWPORT CRACKERS LAYER */}
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
        <p style={{ fontSize: 'clamp(1.05rem, 1.8vw, 1.3rem)', color: 'rgba(255,255,255,0.78)', lineHeight: 1.85, textShadow: '0 2px 10px rgba(0,0,0,0.85)', maxWidth: 850, margin: '0 auto', marginBottom: 50 }}>
          I am a computer science engineer bridging the gap between high-performance pixel-perfect user interfaces and heavy statistical backend metrics. As a <strong style={{ color: '#fff', fontWeight: 600 }}>Frontend Developer</strong>, I design highly scalable Next.js applications and responsive structural systems optimized for client performance. Simultaneously, my expertise as a <strong style={{ color: '#fff', fontWeight: 600 }}>Data Analyst</strong> empowers me to run deep predictive algorithms, translate complex databases into structured insights, and deploy clean visual data stories. I thrive on building interactive software nodes that transform massive data pipelines into beautiful, fluid digital experiences.
        </p>

        {/* 📄 RESUME VIEW INTERACTIVE TRIGGER BANNER */}
        <div style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '20px',
          background: 'rgba(255, 255, 255, 0.02)',
          border: '1px solid rgba(255, 255, 255, 0.06)',
          backdropFilter: 'blur(15px)',
          padding: '16px 32px',
          borderRadius: '16px',
          boxShadow: '0 20px 40px rgba(0,0,0,0.4)',
          cursor: 'pointer',
          transition: 'transform 0.3s cubic-bezier(0.16, 1, 0.3, 1), border-color 0.3s',
        }}
        onClick={handleResumeOpen}
        onMouseEnter={e => {
          e.currentTarget.style.transform = 'translateY(-4px)';
          e.currentTarget.style.borderColor = 'rgba(255, 140, 66, 0.4)';
        }}
        onMouseLeave={e => {
          e.currentTarget.style.transform = 'translateY(0)';
          e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.06)';
        }}
        >
          <div style={{
            width: '44px',
            height: '44px',
            borderRadius: '10px',
            background: 'rgba(255, 140, 66, 0.1)',
            border: '1px solid rgba(255, 140, 66, 0.2)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#ff8c42'
          }}>
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/>
              <polyline points="14 2 14 8 20 8"/>
              <line x1="16" y1="13" x2="8" y2="13"/>
              <line x1="16" y1="17" x2="8" y2="17"/>
              <line x1="10" y1="9" x2="8" y2="9"/>
            </svg>
          </div>
          <div style={{ textAlign: 'left' }}>
            <p style={{ margin: 0, color: '#fff', fontSize: '14px', fontWeight: 600, letterSpacing: '0.02em' }}>View Professional Resume</p>
            <p style={{ margin: 0, color: 'rgba(255,255,255,0.4)', fontSize: '11px', fontFamily: 'monospace' }}>KARTIK_RAJ_CV.PDF // READ TARGET NODE</p>
          </div>
        </div>
        
      </div>

      {/* 🛸 4K CINEMATIC RESUME MODAL OVERLAY SHEET WITH INTEGRATED COUNTER */}
      {isModalOpen && (
        <div style={{
          position: 'fixed',
          top: 0, left: 0, width: '100vw', height: '100vh',
          background: 'rgba(3, 2, 8, 0.85)',
          backdropFilter: 'blur(25px)',
          zIndex: 999999,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '20px'
        }}
        onClick={() => setIsModalOpen(false)}
        >
          <div style={{
            width: '100%',
            maxWidth: '850px',
            height: '85vh',
            background: '#09070f',
            border: '1px solid rgba(255, 255, 255, 0.08)',
            borderRadius: '24px',
            boxShadow: '0 30px 70px rgba(0,0,0,0.8)',
            display: 'flex',
            flexDirection: 'column',
            overflow: 'hidden'
          }}
          onClick={e => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div style={{ padding: '24px 32px', borderBottom: '1px solid rgba(255,255,255,0.06)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: 'rgba(255,255,255,0.01)' }}>
              <div style={{ textAlign: 'left' }}>
                <h3 style={{ margin: 0, color: '#fff', fontSize: '22px', fontWeight: 700, letterSpacing: '0.03em' }}>{`Kartik Raj`}</h3>
                <p style={{ margin: '4px 0 0 0', color: '#ff8c42', fontSize: '12px', fontFamily: 'monospace' }}>Frontend Developer - Data Analyst • Patna, Bihar</p>
              </div>
              <button 
                onClick={() => setIsModalOpen(false)}
                style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.1)', color: '#fff', width: '40px', height: '40px', borderRadius: '50%', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '18px' }}
              >✕</button>
            </div>

            {/* Modal Scrollable Data Sheet */}
            <div style={{ flex: 1, padding: '32px', overflowY: 'auto', textAlign: 'left', display: 'flex', flexDirection: 'column', gap: '30px' }}>
              
              {/* Education Grid Node */}
              <div>
                <h4 style={{ color: '#ff8c42', margin: '0 0 14px 0', fontSize: '13px', fontFamily: 'monospace', letterSpacing: '0.2em', textTransform: 'uppercase' }}>// 01. Academic Records</h4>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  <div style={{ background: 'rgba(255,255,255,0.02)', padding: '16px', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.04)' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '5px' }}>
                      <strong style={{ color: '#fff' }}>Bachelor of Technology (B.Tech) - CSE</strong>
                      <span style={{ color: '#a0aec0', fontSize: '13px', fontFamily: 'monospace' }}>2022 - 2026</span>
                    </div>
                    <p style={{ margin: '6px 0 0 0', color: 'rgba(255,255,255,0.5)', fontSize: '13px' }}>Government Engineering College, Vaishali</p>
                  </div>
                  <div style={{ background: 'rgba(255,255,255,0.01)', padding: '14px', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.02)' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '5px' }}>
                      <strong style={{ color: '#fff', fontSize: '14px' }}>Intermediate (Class XII) - Science</strong>
                      <span style={{ color: '#a0aec0', fontSize: '12px', fontFamily: 'monospace' }}>2020 - 2022</span>
                    </div>
                    <p style={{ margin: '4px 0 0 0', color: 'rgba(255,255,255,0.5)', fontSize: '13px' }}>M.H.S. High School, Patna</p>
                  </div>
                </div>
              </div>

              {/* Technical Experience Framework */}
              <div>
                <h4 style={{ color: '#ff8c42', margin: '0 0 14px 0', fontSize: '13px', fontFamily: 'monospace', letterSpacing: '0.2em', textTransform: 'uppercase' }}>// 02. Core Systems Deployed</h4>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  <div style={{ borderLeft: '2px solid #ff8c42', paddingLeft: '16px' }}>
                    <strong style={{ color: '#fff', fontSize: '16px' }}>Hand Connect</strong>
                    <p style={{ margin: '4px 0 0 0', color: 'rgba(255,255,255,0.65)', fontSize: '13px', lineHeight: '1.5' }}>Built a real-time gesture recognition application using Python and Computer Vision to translate hand movements into system commands with lightweight machine learning models for low latency.</p>
                  </div>
                  <div style={{ borderLeft: '2px solid rgba(255,255,255,0.1)', paddingLeft: '16px' }}>
                    <strong style={{ color: '#fff', fontSize: '16px' }}>Data Analysis Dashboard</strong>
                    <p style={{ margin: '4px 0 0 0', color: 'rgba(255,255,255,0.65)', fontSize: '13px', lineHeight: '1.5' }}>Created an interactive data visualization dashboard using Python and modern web frameworks to transform raw dataset matrices into actionable clean statistical graphs.</p>
                  </div>
                </div>
              </div>

              {/* Internships Nodes */}
              <div>
                <h4 style={{ color: '#ff8c42', margin: '0 0 14px 0', fontSize: '13px', fontFamily: 'monospace', letterSpacing: '0.2em', textTransform: 'uppercase' }}>// 03. Industry Exposure</h4>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '12px' }}>
                  <div style={{ background: 'rgba(255,255,255,0.02)', padding: '14px', borderRadius: '12px' }}>
                    <span style={{ fontSize: '11px', color: '#ff8c42', fontFamily: 'monospace' }}>BSPTCL IT CELL</span>
                    <p style={{ margin: '4px 0 0 0', color: '#fff', fontSize: '14px', fontWeight: 600 }}>Technical Support Workflow</p>
                  </div>
                  <div style={{ background: 'rgba(255,255,255,0.02)', padding: '14px', borderRadius: '12px' }}>
                    <span style={{ fontSize: '11px', color: '#ff8c42', fontFamily: 'monospace' }}>RCPL PIPELINE</span>
                    <p style={{ margin: '4px 0 0 0', color: '#fff', fontSize: '14px', fontWeight: 600 }}>FullStack Developer</p>
                  </div>
                </div>
              </div>

              {/* Certifications Vector */}
              <div>
                <h4 style={{ color: '#ff8c42', margin: '0 0 14px 0', fontSize: '13px', fontFamily: 'monospace', letterSpacing: '0.2em', textTransform: 'uppercase' }}>// 04. Credentials & Badges</h4>
                <ul style={{ margin: 0, paddingLeft: '18px', color: 'rgba(255,255,255,0.7)', fontSize: '13.5px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  <li><strong>Oracle Certified Foundations Associate Artificial Intelligence (2026)</strong> - OCI Cloud-driven solutions.</li>
                </ul>
              </div>

              {/* ========================================================================== */}
              {/* 📊 LIVE RESUME VISIT COUNTER INTERFACE (At the very bottom of the resume content) */}
              {/* ========================================================================== */}
              <div style={{ 
                marginTop: '20px', 
                padding: '16px', 
                borderRadius: '12px', 
                background: 'rgba(255, 140, 66, 0.03)', 
                border: '1px dashed rgba(255, 140, 66, 0.2)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between'
              }}>
                <span style={{ fontSize: '12px', color: 'rgba(255,255,255,0.4)', fontFamily: 'monospace' }}>METRIC_NODE_ID: SECURE_LOCAL_STORAGE</span>
                <span style={{ fontSize: '13px', color: '#fff', fontFamily: 'monospace' }}>
                  TOTAL RESUME READ NODES: <strong style={{ color: '#ff8c42', fontSize: '15px' }}>{resumeVisits}</strong>
                </span>
              </div>

            </div>
          </div>
        </div>
      )}
    </section>
  )
}

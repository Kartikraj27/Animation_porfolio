'use client'
import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'

// --- REUSABLE MULTI-COLOR FISH ANIMATION COMPONENT ---
interface AquariumProps {
  colorPalette: string[]; // Group of multiple fish colors
}

function FishAquariumBackground({ colorPalette }: AquariumProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null)

  useEffect(() => {
    if (typeof window === 'undefined') return

    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const resizeCanvas = () => {
      if (canvas && canvas.parentElement) {
        canvas.width = canvas.parentElement.offsetWidth || 350
        canvas.height = canvas.parentElement.offsetHeight || 450
      }
    }
    
    resizeCanvas()
    window.addEventListener('resize', resizeCanvas)

    const fishes: Array<{
      x: number
      y: number
      size: number
      speed: number
      tailWiggle: number
      color: string;
    }> = []

    for (let i = 0; i < 10; i++) {
      fishes.push({
        x: Math.random() * (canvas.width || 300),
        y: Math.random() * (canvas.height || 400),
        size: Math.random() * 5 + 6,        
        speed: Math.random() * 0.5 + 0.25,   
        tailWiggle: Math.random() * 100,
        color: colorPalette[i % colorPalette.length]
      })
    }

    let animationFrameId: number

    const animate = () => {
      if (!canvas || !ctx) return
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      fishes.forEach((fish) => {
        fish.tailWiggle += 0.12
        
        fish.x += fish.speed
        fish.y += Math.sin(fish.tailWiggle) * 0.18

        if (fish.x - fish.size * 2 > canvas.width) {
          fish.x = -fish.size * 2
          fish.y = Math.random() * canvas.height
        }

        ctx.save()
        ctx.translate(fish.x, fish.y)
        
        ctx.shadowBlur = 8
        ctx.shadowColor = fish.color

        ctx.fillStyle = fish.color
        ctx.beginPath()
        
        ctx.ellipse(0, 0, fish.size, fish.size / 2.2, 0, 0, Math.PI * 2)
        ctx.fill()

        const wiggleX = -fish.size - (Math.sin(fish.tailWiggle) * 2.5)
        ctx.beginPath()
        ctx.moveTo(-fish.size + 2, 0)
        ctx.lineTo(wiggleX, -fish.size / 2.2)
        ctx.lineTo(wiggleX, fish.size / 2.2)
        ctx.closePath()
        ctx.fill()

        ctx.fillStyle = 'rgba(255,255,255,0.4)'
        ctx.beginPath()
        ctx.arc(fish.size / 2, -fish.size / 6, 1.2, 0, Math.PI * 2)
        ctx.fill()

        ctx.restore()
      })

      animationFrameId = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener('resize', resizeCanvas)
      cancelAnimationFrame(animationFrameId)
    }
  }, [colorPalette])

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: 0,
        borderRadius: 16
      }}
    />
  )
}

// --- DATA MANAGEMENT ---
const EDUCATION = [
  {
    title: 'Bachelor of Technology (B.Tech)',
    desc: 'Specialized in computer engineering modules including deep analytics, structural algorithms, and highly distributed web applications. Actively focusing on modern structural development methodologies.',
    tag: 'Computer Science & Engineering',
    institution: 'Government Engineering College, Vaishali',
    logoUrl: 'https://www.gecvaishali.ac.in/wp-content/uploads/2026/03/logo-1.png',
    academicYear: '2022 - 2026',
    bgStyle: {
      background: 'linear-gradient(135deg, rgba(11, 58, 84, 0.45) 0%, rgba(5, 12, 20, 0.8) 100%)',
      border: '1px solid rgba(0, 196, 237, 0.3)',
      boxShadow: '0 12px 40px -10px rgba(0, 196, 237, 0.25)'
    },
    fishPalette: [
      'rgba(0, 196, 237, 0.45)', 
      'rgba(59, 130, 246, 0.45)', 
      'rgba(45, 212, 191, 0.4)', 
      'rgba(248, 250, 252, 0.35)'
    ],
    tagColor: 'rgba(0, 196, 237, 0.95)'
  },
  {
    title: 'Higher Secondary (12th / Intermediate)',
    desc: 'Completed core higher secondary curriculum with a primary concentration in Science fields (Physics, Chemistry, Mathematics). Developed analytical baseline and logical troubleshooting techniques.',
    tag: 'PCM / Science Track',
    institution: 'Mahant Hanuman Saran High School, Patna', 
    logoUrl: '/school.png',
    academicYear: '2020 - 2022',
    bgStyle: {
      background: 'linear-gradient(135deg, rgba(16, 68, 43, 0.45) 0%, rgba(5, 12, 10, 0.8) 100%)',
      border: '1px solid rgba(72, 187, 120, 0.3)',
      boxShadow: '0 12px 40px -10px rgba(72, 187, 120, 0.25)'
    },
    fishPalette: [
      'rgba(72, 187, 120, 0.45)', 
      'rgba(163, 230, 53, 0.4)', 
      'rgba(234, 179, 8, 0.45)', 
      'rgba(249, 115, 22, 0.35)'
    ],
    tagColor: 'rgba(72, 187, 120, 0.95)'
  },
  {
    title: 'Matriculation (10th / High School)',
    desc: 'Completed secondary education focusing on foundational subjects including Mathematics, Science, and Social Studies. Cultivated core analytical abilities and problem-solving fundamentals.',
    tag: 'General Secondary Education',
    institution: 'Doon Senior Secondary School, Mazaffarpur', 
    logoUrl: '/Doon.png', 
    academicYear: '2019 - 2020',
    bgStyle: {
      background: 'linear-gradient(135deg, rgba(82, 43, 16, 0.45) 0%, rgba(10, 10, 10, 0.8) 100%)',
      border: '1px solid rgba(221, 107, 32, 0.3)',
      boxShadow: '0 12px 40px -10px rgba(221, 107, 32, 0.25)'
    },
    fishPalette: [
      'rgba(255, 140, 66, 0.45)', 
      'rgba(239, 68, 68, 0.4)', 
      'rgba(236, 72, 153, 0.4)', 
      'rgba(253, 224, 71, 0.45)'
    ],
    tagColor: 'rgba(221, 107, 32, 0.95)'
  }
]

export default function EducationSection() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <section 
      id="education" 
      style={{ 
        minHeight: '100vh', 
        background: '#010916', // Deep Sea Base
        padding: '120px 40px', 
        borderTop: '1px solid rgba(255,255,255,0.05)',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      {/* 🌊 FULL-PAGE HIGH INTENSITY 3D LIQUID WATERFLOW ENGINE */}
      <style>{`
        .full-page-water-matrix {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: 0;
          pointer-events: none;
          overflow: hidden;
        }

        /* Pure Fluid Fluid Wave Blocks covering the whole page vertically */
        .full-wave-layer {
          position: absolute;
          top: -10%;
          left: -50%;
          width: 200%;
          height: 120%;
          background-repeat: repeat;
          will-change: transform;
        }

        /* Wave 1: Massive Deep Water Volume Flow */
        .wave-matrix-back {
          background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 600" preserveAspectRatio="none"><path d="M0,150 C300,280 600,50 900,200 C1200,350 1350,100 1500,250 L1500,600 L0,600 Z" fill="%230284c7" opacity="0.08"/></svg>');
          background-size: 50% 600px;
          animation: waveH 28s linear infinite, waveV3D 14s ease-in-out infinite alternate;
        }

        /* Wave 2: Mid Streaming Ambient Aqua Fluid */
        .wave-matrix-mid {
          background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 600" preserveAspectRatio="none"><path d="M0,200 C250,50 600,300 900,120 C1200,280 1380,80 1500,180 L1500,600 L0,600 Z" fill="%230ea5e9" opacity="0.06"/></svg>');
          background-size: 40% 550px;
          animation: waveHInverse 20s linear infinite, waveV3D 10s ease-in-out infinite alternate;
        }

        /* Wave 3: Front Bright Cyan Shimmer Fluid Flow */
        .wave-matrix-front {
          background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 600" preserveAspectRatio="none"><path d="M0,100 C350,220 550,20 850,180 C1100,300 1300,40 1500,120 L1500,600 L0,600 Z" fill="%2306b6d4" opacity="0.05"/></svg>');
          background-size: 33% 500px;
          animation: waveH 15s linear infinite, waveV3D 7s ease-in-out infinite alternate;
        }

        /* Absolute Vertical Tint overlaying the full screen */
        .full-page-ocean-shading {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(180deg, rgba(1, 9, 22, 0.3) 0%, rgba(2, 132, 199, 0.12) 50%, rgba(6, 182, 212, 0.18) 100%);
          pointer-events: none;
        }

        /* Global High-Visibility Floating Water Bubbles (Spanning full height) */
        .global-fluid-bubble {
          position: absolute;
          bottom: -30px;
          background: radial-gradient(circle, rgba(255,255,255,0.65) 0%, rgba(56, 189, 248, 0.25) 60%, transparent 100%);
          border-radius: 50%;
          box-shadow: 0 0 14px rgba(56, 189, 248, 0.45);
          animation: globalBubbleRise 15s cubic-bezier(0.3, 0.1, 0.3, 1) infinite;
        }

        /* Motion Vectors */
        @keyframes waveH {
          0% { transform: translate3d(0, 0, 0); }
          100% { transform: translate3d(-50%, 0, 0); }
        }
        @keyframes waveHInverse {
          0% { transform: translate3d(-50%, 0, 0); }
          100% { transform: translate3d(0, 0, 0); }
        }
        @keyframes waveV3D {
          0% { transform: translateY(-10px) scaleY(0.96) rotate(-0.5deg); }
          100% { transform: translateY(30px) scaleY(1.04) rotate(0.5deg); }
        }
        @keyframes globalBubbleRise {
          0% { transform: translateY(0) translateX(0) scale(0.4); opacity: 0; }
          8% { opacity: 0.85; }
          90% { opacity: 0.2; }
          100% { transform: translateY(-1200px) translateX(110px) scale(1.4); opacity: 0; }
        }
      `}</style>

      {/* FULL WRAPPER LIQUID ENGINE */}
      <div className="full-page-water-matrix">
        <div className="full-wave-layer wave-matrix-back" />
        <div className="full-wave-layer wave-matrix-mid" />
        <div className="full-wave-layer wave-matrix-front" />
        <div className="full-page-ocean-shading" />

        {/* Distributed fluid bubbles across full width */}
        <div className="global-fluid-bubble" style={{ left: '8%', width: '7px', height: '7px', animationDelay: '0s', animationDuration: '11s' }} />
        <div className="global-fluid-bubble" style={{ left: '24%', width: '5px', height: '5px', animationDelay: '3s', animationDuration: '16s' }} />
        <div className="global-fluid-bubble" style={{ left: '48%', width: '8px', height: '8px', animationDelay: '1s', animationDuration: '13s' }} />
        <div className="global-fluid-bubble" style={{ left: '70%', width: '6px', height: '6px', animationDelay: '5s', animationDuration: '18s' }} />
        <div className="global-fluid-bubble" style={{ left: '88%', width: '9px', height: '9px', animationDelay: '2s', animationDuration: '12s' }} />
      </div>

      {/* --- MAIN INTERFACE CONTENT WRAPPER --- */}
      <div style={{ position: 'relative', zIndex: 1 }}>
        <p style={{ fontSize: 10, letterSpacing: '0.38em', textTransform: 'uppercase', color: '#38bdf8', marginBottom: 20, textAlign: 'center', fontWeight: 'bold', textShadow: '0 0 10px rgba(56,189,248,0.5)' }}>
          Academic Journey
        </p>
        
        <h2 style={{ fontFamily: "'Bebas Neue',sans-serif", fontSize: 'clamp(2.5rem,7vw,5rem)', color: '#fff', textAlign: 'center', marginBottom: 64, textShadow: '0 4px 25px rgba(0,0,0,0.75)' }}>
          Education
        </h2>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(300px,1fr))', gap: 24, maxWidth: 1150, margin: '0 auto' }}>
          {EDUCATION.map((edu, index) => (
            <div key={index} style={{
              position: 'relative', 
              padding: '40px 32px',
              borderRadius: 16,
              backdropFilter: 'blur(16px)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              overflow: 'hidden',
              transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
              ...edu.bgStyle
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-6px)';
              e.currentTarget.style.boxShadow = '0 20px 50px -10px rgba(56, 189, 248, 0.35)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = edu.bgStyle.boxShadow;
            }}
            >
              {/* Fish Box Render */}
              {mounted && <FishAquariumBackground colorPalette={edu.fishPalette} />}

              <div style={{ position: 'relative', zIndex: 1 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 10, marginBottom: 14 }}>
                  <p style={{ fontSize: 9, letterSpacing: '0.3em', textTransform: 'uppercase', color: edu.tagColor, margin: 0, fontWeight: 'bold' }}>
                    {edu.tag}
                  </p>
                  <span style={{ fontSize: 10, fontFamily: 'monospace', color: 'rgba(255,255,255,0.45)' }}>
                    {edu.academicYear}
                  </span>
                </div>

                <h3 style={{ fontFamily: "'Bebas Neue',sans-serif", fontSize: '2rem', color: '#fff', marginBottom: 16, letterSpacing: '0.02em', lineHeight: 1.1 }}>
                  {edu.title}
                </h3>

                <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 18, padding: '12px', background: 'rgba(0,0,0,0.45)', borderRadius: 12, border: '1px solid rgba(255,255,255,0.05)' }}>
                  <div style={{ position: 'relative', width: 44, height: 44, flexShrink: 0, overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: 6, background: 'rgba(255,255,255,0.02)' }}>
                    <Image 
                      src={edu.logoUrl} 
                      alt="Institution Logo" 
                      width={44} 
                      height={44} 
                      style={{ objectFit: 'contain' }}
                      priority={index === 0}
                    />
                  </div>
                  <h4 style={{ fontSize: 13, fontWeight: 500, color: 'rgba(255,255,255,0.95)', lineHeight: 1.4, margin: 0, flex: 1 }}>
                    {edu.institution}
                  </h4>
                </div>

                <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.76)', lineHeight: 1.7, margin: 0, textShadow: '0 2px 8px rgba(0,0,0,0.85)' }}>
                  {edu.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

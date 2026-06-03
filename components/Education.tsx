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

    // Array tracking exactly 10 fishes with individual multi-color assignments
    const fishes: Array<{
      x: number
      y: number
      size: number
      speed: number
      tailWiggle: number
      color: string; // Dynamic fish personal color
    }> = []

    // Initialize 10 fishes with mixed colors from the palette array
    for (let i = 0; i < 10; i++) {
      fishes.push({
        x: Math.random() * (canvas.width || 300),
        y: Math.random() * (canvas.height || 400),
        size: Math.random() * 5 + 6,        
        speed: Math.random() * 0.5 + 0.25,   
        tailWiggle: Math.random() * 100,
        color: colorPalette[i % colorPalette.length] // Assigns different color to each fish
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
        
        // Applying individual fish neon shadow glow
        ctx.shadowBlur = 8
        ctx.shadowColor = fish.color

        ctx.fillStyle = fish.color
        ctx.beginPath()
        
        // Main Body Shape
        ctx.ellipse(0, 0, fish.size, fish.size / 2.2, 0, 0, Math.PI * 2)
        ctx.fill()

        // Dynamic Tail Movement
        const wiggleX = -fish.size - (Math.sin(fish.tailWiggle) * 2.5)
        ctx.beginPath()
        ctx.moveTo(-fish.size + 2, 0)
        ctx.lineTo(wiggleX, -fish.size / 2.2)
        ctx.lineTo(wiggleX, fish.size / 2.2)
        ctx.closePath()
        ctx.fill()

        // Tiny Eye
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

// --- DATA MANAGEMENT WITH MULTI-COLOR PALETTES ---
const EDUCATION = [
  {
    title: 'Bachelor of Technology (B.Tech)',
    desc: 'Specialized in computer engineering modules including deep analytics, structural algorithms, and highly distributed web applications. Actively focusing on modern structural development methodologies.',
    tag: 'Computer Science & Engineering',
    institution: 'Government Engineering College, Vaishali',
    logoUrl: 'https://www.gecvaishali.ac.in/wp-content/uploads/2026/03/logo-1.png',
    academicYear: '2022 - 2026',
    bgStyle: {
      background: 'linear-gradient(135deg, rgba(11, 58, 84, 0.4) 0%, rgba(5, 12, 20, 0.75) 100%)',
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
    institution: 'Your 12th School Name, City', 
    logoUrl: '/school.png',
    academicYear: '2020 - 2022',
    bgStyle: {
      background: 'linear-gradient(135deg, rgba(16, 68, 43, 0.4) 0%, rgba(5, 12, 10, 0.75) 100%)',
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
    institution: 'Doon Senior Secondary School', 
    logoUrl: '/Doon.png', 
    academicYear: '2018 - 2020',
    bgStyle: {
      background: 'linear-gradient(135deg, rgba(82, 43, 16, 0.4) 0%, rgba(10, 10, 10, 0.75) 100%)',
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
        background: '#010a1a', // Rich Deep Oceanic Blue base
        padding: '120px 40px', 
        borderTop: '1px solid rgba(255,255,255,0.05)',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      {/* 🌊 HIGH-VISIBILITY REAL 3D WATERFLOW SEMI-TRANSPARENT LIQUID ENGINE */}
      <style>{`
        .page-waterflow-container {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: 0;
          pointer-events: none;
          overflow: hidden;
        }

        /* Fluid Layer Presets: Line ki jagah ab actual filled fluid curves use ho rhe hai */
        .liquid-wave-layer {
          position: absolute;
          bottom: -20px;
          left: 0;
          width: 200%;
          height: 100%;
          background-repeat: repeat-x;
          will-change: transform;
          transform: translate3d(0, 0, 0);
        }

        /* Wave 1: Back Deep Liquid Volume (Slow Flow) */
        .wave-layer-back {
          background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none"><path d="M0,60 C150,100 350,20 500,60 C650,100 850,20 1000,60 C1150,100 1300,40 1450,60 L1450,120 L0,120 Z" fill="%230284c7" opacity="0.12"/></svg>');
          background-size: 50% 140px;
          animation: waveMoveHorizontal 24s linear infinite, liquidFluid3D 12s ease-in-out infinite alternate;
          bottom: 0;
        }

        /* Wave 2: Mid Aqua Streaming Volume (Medium Flow) */
        .wave-layer-mid {
          background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none"><path d="M0,50 C200,90 400,10 600,50 C800,90 1000,10 1200,50 L1200,120 L0,120 Z" fill="%2338bdf8" opacity="0.08"/></svg>');
          background-size: 40% 180px;
          animation: waveMoveHorizontalInverse 16s linear infinite, liquidFluid3D 8s ease-in-out infinite alternate;
          bottom: 5px;
        }

        /* Wave 3: Front Bright Cyan Shimmer Surface (Fast Highlight Flow) */
        .wave-layer-front {
          background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none"><path d="M0,40 C300,80 500,0 700,40 C900,80 1000,10 1200,40 L1200,120 L0,120 Z" fill="%2306b6d4" opacity="0.06"/></svg>');
          background-size: 33% 220px;
          animation: waveMoveHorizontal 12s linear infinite, liquidFluid3D 6s ease-in-out infinite alternate;
          bottom: 15px;
        }

        /* Solid Ambient Liquid Reflector (Gives real underwater depth feeling) */
        .ocean-depth-gradient {
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 65%;
          background: linear-gradient(to top, rgba(2, 132, 199, 0.15) 0%, rgba(6, 182, 212, 0.04) 45%, transparent 100%);
          pointer-events: none;
        }

        /* 🧼 High Contrast Glowing Water Bubbles rising from the bottom */
        .water-fluid-bubble {
          position: absolute;
          bottom: -20px;
          background: radial-gradient(circle, rgba(255,255,255,0.6) 0%, rgba(56, 189, 248, 0.2) 70%, transparent 100%);
          border-radius: 50%;
          box-shadow: 0 0 12px rgba(56, 189, 248, 0.4);
          animation: bubbleRiseUp 12s cubic-bezier(0.4, 0, 0.2, 1) infinite;
        }

        /* Horizontal Tides Keyframes */
        @keyframes waveMoveHorizontal {
          0% { transform: translate3d(0, 0, 0); }
          100% { transform: translate3d(-50%, 0, 0); }
        }
        @keyframes waveMoveHorizontalInverse {
          0% { transform: translate3d(-50%, 0, 0); }
          100% { transform: translate3d(0, 0, 0); }
        }

        /* 3D Vertical Liquid Floating Keyframes */
        @keyframes liquidFluid3D {
          0% { transform: translateY(0px) scaleY(0.95) skewX(-1deg); }
          100% { transform: translateY(-40px) scaleY(1.05) skewX(1deg); }
        }

        /* Bubble Fluid Movement Track */
        @keyframes bubbleRiseUp {
          0% { transform: translateY(0) translateX(0) scale(0.5); opacity: 0; }
          10% { opacity: 0.8; }
          80% { opacity: 0.3; }
          100% { transform: translateY(-1100px) translateX(90px) scale(1.3); opacity: 0; }
        }
      `}</style>

      {/* RENDER DYNAMIC WATER LAYERS */}
      <div className="page-waterflow-container">
        <div className="liquid-wave-layer wave-layer-back" />
        <div className="liquid-wave-layer wave-layer-mid" />
        <div className="liquid-wave-layer wave-layer-front" />
        <div className="ocean-depth-gradient" />

        {/* Crisp visible water bubbles */}
        <div className="water-fluid-bubble" style={{ left: '12%', width: '6px', height: '6px', animationDelay: '0s', animationDuration: '9s' }} />
        <div className="water-fluid-bubble" style={{ left: '35%', width: '4px', height: '4px', animationDelay: '2.5s', animationDuration: '14s' }} />
        <div className="water-fluid-bubble" style={{ left: '58%', width: '7px', height: '7px', animationDelay: '1s', animationDuration: '11s' }} />
        <div className="water-fluid-bubble" style={{ left: '78%', width: '5px', height: '5px', animationDelay: '4s', animationDuration: '16s' }} />
        <div className="water-fluid-bubble" style={{ left: '92%', width: '8px', height: '8px', animationDelay: '1.5s', animationDuration: '10s' }} />
      </div>

      {/* --- MAIN INTERFACE CONTENT WRAPPER --- */}
      <div style={{ position: 'relative', zIndex: 1 }}>
        <p style={{ fontSize: 10, letterSpacing: '0.38em', textTransform: 'uppercase', color: '#38bdf8', marginBottom: 20, textAlign: 'center', fontWeight: 'bold', textShadow: '0 0 10px rgba(56,189,248,0.4)' }}>
          Academic Journey
        </p>
        
        <h2 style={{ fontFamily: "'Bebas Neue',sans-serif", fontSize: 'clamp(2.5rem,7vw,5rem)', color: '#fff', textAlign: 'center', marginBottom: 64, textShadow: '0 4px 20px rgba(0,0,0,0.6)' }}>
          Education
        </h2>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(300px,1fr))', gap: 24, maxWidth: 1150, margin: '0 auto' }}>
          {EDUCATION.map((edu, index) => (
            <div key={index} style={{
              position: 'relative', 
              padding: '40px 32px',
              borderRadius: 16,
              backdropFilter: 'blur(14px)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              overflow: 'hidden',
              transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
              ...edu.bgStyle
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-6px)';
              e.currentTarget.style.boxShadow = '0 20px 50px -10px rgba(56, 189, 248, 0.3)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = edu.bgStyle.boxShadow;
            }}
            >
              {/* Box Embedded Custom Neon Fishes */}
              {mounted && <FishAquariumBackground colorPalette={edu.fishPalette} />}

              <div style={{ position: 'relative', zIndex: 1 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 10, marginBottom: 14 }}>
                  <p style={{ fontSize: 9, letterSpacing: '0.3em', textTransform: 'uppercase', color: edu.tagColor, margin: 0, fontWeight: 'bold' }}>
                    {edu.tag}
                  </p>
                  <span style={{ fontSize: 10, fontFamily: 'monospace', color: 'rgba(255,255,255,0.4)' }}>
                    {edu.academicYear}
                  </span>
                </div>

                <h3 style={{ fontFamily: "'Bebas Neue',sans-serif", fontSize: '2rem', color: '#fff', marginBottom: 16, letterSpacing: '0.02em', lineHeight: 1.1 }}>
                  {edu.title}
                </h3>

                <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 18, padding: '12px', background: 'rgba(0,0,0,0.4)', borderRadius: 12, border: '1px solid rgba(255,255,255,0.04)' }}>
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

                <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.75)', lineHeight: 1.7, margin: 0, textShadow: '0 2px 8px rgba(0,0,0,0.8)' }}>
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

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
      background: 'linear-gradient(135deg, rgba(11, 58, 84, 0.25) 0%, rgba(5, 12, 20, 0.5) 100%)',
      border: '1px solid rgba(0, 168, 204, 0.15)',
      boxShadow: '0 10px 30px -10px rgba(0, 168, 204, 0.1)'
    },
    // 🎨 B.Tech: Ocean Theme Multi-Colors (Cyan, Neon Blue, Teal Blue, Silver White)
    fishPalette: [
      'rgba(0, 196, 237, 0.45)', 
      'rgba(59, 130, 246, 0.45)', 
      'rgba(45, 212, 191, 0.4)', 
      'rgba(248, 250, 252, 0.35)'
    ],
    tagColor: 'rgba(0, 168, 204, 0.85)'
  },
  {
    title: 'Higher Secondary (12th / Intermediate)',
    desc: 'Completed core higher secondary curriculum with a primary concentration in Science fields (Physics, Chemistry, Mathematics). Developed analytical baseline and logical troubleshooting techniques.',
    tag: 'PCM / Science Track',
    institution: 'Your 12th School Name, City', 
    logoUrl: '/school.png',
    academicYear: '2020 - 2022',
    bgStyle: {
      background: 'linear-gradient(135deg, rgba(16, 68, 43, 0.25) 0%, rgba(5, 12, 10, 0.5) 100%)',
      border: '1px solid rgba(72, 187, 120, 0.15)',
      boxShadow: '0 10px 30px -10px rgba(72, 187, 120, 0.1)'
    },
    // 🎨 12th: Emerald Coral Multi-Colors (Mint Green, Lime Gold, Yellow, Soft Orange)
    fishPalette: [
      'rgba(72, 187, 120, 0.45)', 
      'rgba(163, 230, 53, 0.4)', 
      'rgba(234, 179, 8, 0.45)', 
      'rgba(249, 115, 22, 0.35)'
    ],
    tagColor: 'rgba(72, 187, 120, 0.85)'
  },
  {
    title: 'Matriculation (10th / High School)',
    desc: 'Completed secondary education focusing on foundational subjects including Mathematics, Science, and Social Studies. Cultivated core analytical abilities and problem-solving fundamentals.',
    tag: 'General Secondary Education',
    institution: 'Doon Senior Secondary School', 
    logoUrl: '/doon-logo.png', 
    academicYear: '2019 - 2020',
    bgStyle: {
      background: 'linear-gradient(135deg, rgba(82, 43, 16, 0.25) 0%, rgba(10, 10, 10, 0.5) 100%)',
      border: '1px solid rgba(221, 107, 32, 0.15)',
      boxShadow: '0 10px 35px -10px rgba(221, 107, 32, 0.1)'
    },
    // 🎨 10th: Fire Reef Multi-Colors (Gold Orange, Crimson Red, Deep Pink, Sunset Yellow)
    fishPalette: [
      'rgba(255, 140, 66, 0.45)', 
      'rgba(239, 68, 68, 0.4)', 
      'rgba(236, 72, 153, 0.4)', 
      'rgba(253, 224, 71, 0.45)'
    ],
    tagColor: 'rgba(221, 107, 32, 0.85)'
  }
]

export default function EducationSection() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <section id="education" style={{ minHeight: '80vh', background: '#060606', padding: '100px 40px', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
      <p style={{ fontSize: 10, letterSpacing: '0.38em', textTransform: 'uppercase', color: 'rgba(255,140,66,0.8)', marginBottom: 20, textAlign: 'center' }}>
        Academic Journey
      </p>
      
      <h2 style={{ fontFamily: "'Bebas Neue',sans-serif", fontSize: 'clamp(2.5rem,7vw,5rem)', color: '#fff', textAlign: 'center', marginBottom: 64 }}>
        Education
      </h2>
      
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(300px,1fr))', gap: 24, maxWidth: 1150, margin: '0 auto' }}>
        {EDUCATION.map((edu, index) => (
          <div key={index} style={{
            position: 'relative', 
            padding: '40px 32px',
            borderRadius: 16,
            backdropFilter: 'blur(10px)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            overflow: 'hidden',
            ...edu.bgStyle
          }}>
            {/* Sending the custom multi-color theme array down to the looping rendering canvas */}
            {mounted && <FishAquariumBackground colorPalette={edu.fishPalette} />}

            <div style={{ position: 'relative', zIndex: 1 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 10, marginBottom: 14 }}>
                <p style={{ fontSize: 9, letterSpacing: '0.3em', textTransform: 'uppercase', color: edu.tagColor, margin: 0, fontWeight: 'bold' }}>
                  {edu.tag}
                </p>
                <span style={{ fontSize: 10, fontFamily: 'monospace', color: 'rgba(255,255,255,0.3)' }}>
                  {edu.academicYear}
                </span>
              </div>

              <h3 style={{ fontFamily: "'Bebas Neue',sans-serif", fontSize: '2rem', color: '#fff', marginBottom: 16, letterSpacing: '0.02em', lineHeight: 1.1 }}>
                {edu.title}
              </h3>

              <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 18, padding: '12px', background: 'rgba(0,0,0,0.3)', borderRadius: 12, border: '1px solid rgba(255,255,255,0.02)' }}>
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
                <h4 style={{ fontSize: 13, fontWeight: 500, color: 'rgba(255,255,255,0.85)', lineHeight: 1.4, margin: 0, flex: 1 }}>
                  {edu.institution}
                </h4>
              </div>

              <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.72)', lineHeight: 1.7, margin: 0, textShadow: '0 2px 4px rgba(0,0,0,0.6)' }}>
                {edu.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

'use client'
import Image from 'next/image'

const EDUCATION = [
  {
    title: 'Bachelor of Technology (B.Tech)',
    desc: 'Specialized in computer engineering modules including deep analytics, structural algorithms, and highly distributed web applications. Actively focusing on modern structural development methodologies.',
    tag: 'Computer Science & Engineering',
    institution: 'Government Engineering College, Vaishali',
    logoUrl: 'https://www.gecvaishali.ac.in/wp-content/uploads/2026/03/logo-1.png',
    academicYear: '2022 - 2026'
  }
]

export default function EducationSection() {
  return (
    <section id="education" style={{ minHeight: '80vh', background: '#060606', padding: '100px 40px', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
      {/* Subtitle matching projects style */}
      <p style={{ fontSize: 10, letterSpacing: '0.38em', textTransform: 'uppercase', color: 'rgba(255,140,66,0.8)', marginBottom: 20, textAlign: 'center' }}>
        Academic Journey
      </p>
      
      {/* Title with Bebas Neue font */}
      <h2 style={{ fontFamily: "'Bebas Neue',sans-serif", fontSize: 'clamp(2.5rem,7vw,5rem)', color: '#fff', textAlign: 'center', marginBottom: 64 }}>
        Education
      </h2>
      
      {/* Grid container mirroring projects */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(280px,1fr))', gap: 24, maxWidth: 1100, margin: '0 auto' }}>
        {EDUCATION.map(edu => (
          <div key={edu.title} style={{
            padding: '40px 32px', border: '1px solid rgba(255,255,255,0.08)',
            borderRadius: 16, background: 'rgba(255,255,255,0.03)',
            backdropFilter: 'blur(10px)'
          }}>
            {/* Top row showing Branch Tag & Academic Year */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 10, marginBottom: 14 }}>
              <p style={{ fontSize: 9, letterSpacing: '0.3em', textTransform: 'uppercase', color: 'rgba(255,140,66,0.7)', margin: 0 }}>
                {edu.tag}
              </p>
              <span style={{ fontSize: 10, fontFamily: 'monospace', color: 'rgba(255,255,255,0.3)' }}>
                {edu.academicYear}
              </span>
            </div>

            {/* Degree Title with Bebas Neue font & Fixed TypeScript Property */}
            <h3 style={{ fontFamily: "'Bebas Neue',sans-serif", fontSize: '2.2rem', color: '#fff', marginBottom: 16, letterSpacing: '0.02em' }}>
              {edu.title}
            </h3>

            {/* College Branding Row: Logo + Institution Name inline */}
            <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 18, padding: '12px', background: 'rgba(0,0,0,0.2)', borderRadius: 12, border: '1px solid rgba(255,255,255,0.02)' }}>
              <div style={{ position: 'relative', width: 44, height: 44, flexShrink: 0, overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Image 
                  src={edu.logoUrl} 
                  alt="College Logo" 
                  width={44} 
                  height={44} 
                  style={{ objectFit: 'contain' }}
                  priority
                />
              </div>
              <h4 style={{ fontSize: 14, fontWeight: 500, color: 'rgba(255,255,255,0.85)', lineHeight: 1.4, margin: 0 }}>
                {edu.institution}
              </h4>
            </div>

            {/* Description matching project font-size and color opacity */}
            <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.55)', lineHeight: 1.7, margin: 0 }}>
              {edu.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}

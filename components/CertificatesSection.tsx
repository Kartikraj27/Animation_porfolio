'use client'
import Image from 'next/image'

const ACHIEVEMENTS = [
  {
    title: 'Naukri Campus Aptitude Test (AINCAT 2026)',
    authority: 'Naukri Campus (Powered by DoSelect)',
    desc: 'Successfully participated in India’s Biggest Career Aptitude Test. Evaluated on industry-grade core analytical aptitude, logical reasoning, and technical readiness alongside top candidates nationwide.',
    tag: 'National Level Assessment',
    date: 'May 2026',
    // Is certificate ke background, partner companies ya dynamic look ke liye standard dark dashboard analytics placeholder image set ki hai
    iconUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=120&auto=format&fit=crop'
  },
  {
    title: 'Data Structures and Algorithms Certification',
    authority: 'NPTEL / Swayam (IIT)',
    desc: 'Successfully completed the advanced data structures training curriculum with an elite rank. Covered complex problem solving, tree graph traversals, and dynamic programming paradigms.',
    tag: 'Technical Certificate',
    date: '2024',
    iconUrl: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=120&auto=format&fit=crop'
  },
  {
    title: 'Full Stack Web Development Milestone',
    authority: 'Udemy / Coursera',
    desc: 'Certified modern web architect covering Next.js deep compilation pipelines, production scale servers deployment, and secure API data schema integrations.',
    tag: 'Web Development',
    date: '2023',
    iconUrl: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=120&auto=format&fit=crop'
  },
  {
    title: 'Hackathon / College Technical Winner',
    authority: 'GEC Vaishali TechFest',
    desc: 'Secured top podium position in building automated tools/applications within limited hours framework. Recognized for clean code compilation and optimal performance architecture.',
    tag: 'Achievement / Award',
    date: '2024',
    iconUrl: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=120&auto=format&fit=crop'
  }
]

export default function CertificatesSection() {
  return (
    <section id="achievements" style={{ minHeight: '80vh', background: '#060606', padding: '100px 40px', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
      {/* Subtitle matching your unique portfolio layout guidelines */}
      <p style={{ fontSize: 10, letterSpacing: '0.38em', textTransform: 'uppercase', color: 'rgba(255,140,66,0.8)', marginBottom: 20, textAlign: 'center' }}>
        Honors & Badges
      </p>
      
      {/* Primary Header with Bebas Neue font framework */}
      <h2 style={{ fontFamily: "'Bebas Neue',sans-serif", fontSize: 'clamp(2.5rem,7vw,5rem)', color: '#fff', textAlign: 'center', marginBottom: 64 }}>
        Certificates & Achievements
      </h2>
      
      {/* Fluid multi-column layout mirroring projects page grids */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(300px,1fr))', gap: 24, maxWidth: 1150, margin: '0 auto' }}>
        {ACHIEVEMENTS.map((item, index) => (
          <div key={index} style={{
            padding: '40px 32px', border: '1px solid rgba(255,255,255,0.08)',
            borderRadius: 16, background: 'rgba(255,255,255,0.03)',
            backdropFilter: 'blur(10px)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between'
          }}>
            <div>
              {/* Meta information row tracking */}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 10, marginBottom: 14 }}>
                <p style={{ fontSize: 9, letterSpacing: '0.3em', textTransform: 'uppercase', color: 'rgba(255,140,66,0.7)', margin: 0 }}>
                  {item.tag}
                </p>
                <span style={{ fontSize: 10, fontFamily: 'monospace', color: 'rgba(255,255,255,0.3)' }}>
                  {item.date}
                </span>
              </div>

              {/* Title parameters with dynamic font sizes */}
              <h3 style={{ fontFamily: "'Bebas Neue',sans-serif", fontSize: '2rem', color: '#fff', marginBottom: 16, letterSpacing: '0.02em', lineHeight: 1.1 }}>
                {item.title}
              </h3>

              {/* Issuing Authority Banner segment */}
              <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 18, padding: '12px', background: 'rgba(0,0,0,0.2)', borderRadius: 12, border: '1px solid rgba(255,255,255,0.02)' }}>
                <div style={{ position: 'relative', width: 44, height: 44, flexShrink: 0, overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: 6, background: 'rgba(255,255,255,0.02)' }}>
                  <Image 
                    src={item.iconUrl} 
                    alt="Badge/Certificate Icon" 
                    width={44} 
                    height={44} 
                    style={{ objectFit: 'cover' }}
                    unoptimized // Next.js external domain validation override
                  />
                </div>
                <h4 style={{ fontSize: 13, fontWeight: 500, color: 'rgba(255,255,255,0.85)', lineHeight: 1.4, margin: 0, flex: 1 }}>
                  {item.authority}
                </h4>
              </div>

              {/* Verified description text system */}
              <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.55)', lineHeight: 1.7, margin: 0 }}>
                {item.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

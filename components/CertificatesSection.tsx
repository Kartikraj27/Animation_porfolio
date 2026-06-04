'use client'
import Image from 'next/image'
import { useState } from 'react'

// ==========================================================================
// 🎯 DATA ARRAY (INTEGRATED WITH REAL CERTIFICATE SOURCES & LIVE LINKS)
// ==========================================================================
const ACHIEVEMENTS = [
  {
    title: 'Oracle Certified Foundations Associate – AI (2026)',
    authority: 'Oracle University',
    desc: 'Earned official recognition from Oracle Corporation, validating technical understanding of contemporary Artificial Intelligence methodologies and cloud services.',
    tag: 'Cloud & AI Credential',
    date: 'June 2026', // Certificate par June 03, 2026 printed hai
    tagColor: 'rgba(234, 179, 8, 0.95)',
    certificateUrl: '/eCertificate.pdf', 
    credentialUrl: '103468748OCI25AICFA' // Certificate ID
  },
  {
    title: 'Naukri Campus Aptitude Test (AINCAT 2026)',
    authority: 'Naukri Campus (Powered by DoSelect)',
    desc: 'Successfully participated in India’s Biggest Career Aptitude Test. Evaluated on industry-grade core analytical aptitude, logical reasoning, and technical readiness alongside top candidates nationwide.',
    tag: 'National Level Assessment',
    date: 'May 2026',
    tagColor: 'rgba(234, 179, 8, 0.95)',
    certificateUrl: '/nc_ai.png', // Image path
    credentialUrl: 'https://www.naukri.com/campus/certificates/nc_ai_ncat_participation_may_2026/v0/6a199ad2542fee52d12408f0?utm_source=certificate&utm_medium=copy&utm_campaign=6a199ad2542fee52d12408f0' // Live verification URL link
  },
  {
    title: 'Data Structures and Algorithms Certification',
    authority: 'NPTEL / Swayam (IIT)',
    desc: 'Successfully completed the advanced data structures training curriculum with an elite rank. Covered complex problem solving, tree graph traversals, and dynamic programming paradigms.',
    tag: 'Technical Certificate',
    date: '2024',
    tagColor: 'rgba(14, 165, 233, 0.9)',
    certificateUrl: '/certificates/nptel-dsa.png', // Image path
    credentialUrl: 'https://nptel.ac.in/noc/Ecertificate/?q=your-id' // Live verification URL link
  },
  {
    title: 'Full Stack Web Development Milestone',
    authority: 'Udemy / Coursera',
    desc: 'Certified modern web architect covering Next.js deep compilation pipelines, production scale servers deployment, and secure API data schema integrations.',
    tag: 'Web Development',
    date: '2023',
    tagColor: 'rgba(99, 102, 241, 0.9)',
    certificateUrl: '/certificates/fullstack.png', // Image path
    credentialUrl: 'https://www.coursera.org/verify/your-id' // Live verification URL link
  },
  {
    title: 'Hackathon / College Technical Winner',
    authority: 'GEC Vaishali TechFest',
    desc: 'Secured top podium position in building automated tools/applications within limited hours framework. Recognized for clean code compilation and optimal performance architecture.',
    tag: 'Achievement / Award',
    date: '2024',
    tagColor: 'rgba(239, 68, 68, 0.9)',
    certificateUrl: '/certificates/techfest-winner.png', // Image path
    credentialUrl: '#' // Replace with link if available, or keep '#'
  }
]

export default function CertificatesSection() {
  const [activeCert, setActiveCert] = useState<typeof ACHIEVEMENTS[0] | null>(null)

  // --- HANDLER FOR CLICK INTERACTION ---
  const handleCardClick = (item: typeof ACHIEVEMENTS[0]) => {
    // Agar valid external link h to naye tab me open hoga, nahi to local modal pop hoga
    if (item.credentialUrl && item.credentialUrl !== '#') {
      window.open(item.credentialUrl, '_blank', 'noopener,noreferrer')
    } else {
      setActiveCert(item)
    }
  }

  return (
    <section 
      id="achievements" 
      style={{ 
        minHeight: '100vh', 
        padding: '140px 40px', 
        borderTop: '1px solid rgba(255,255,255,0.03)',
        position: 'relative',
        overflow: 'hidden',
        background: '#010311',
      }}
    >
      {/* 🛠️ WAVES BACKGROUND SYSTEM */}
      <style>{`
        .total-page-wave-container {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: 0;
          pointer-events: none;
          overflow: hidden;
        }

        .full-ambient-wave {
          position: absolute;
          top: -10%;
          left: 0;
          width: 250%;
          height: 120%;
          background-repeat: repeat;
          background-size: 50% 50%;
          will-change: transform;
          opacity: 0.28;
        }

        .wave-vivid-cyan {
          background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 600" preserveAspectRatio="none"><path d="M0,150 C300,300 600,50 900,350 C1200,500 1500,200 1800,400 L1800,600 L0,600 Z" fill="%2300d2ff"/></svg>');
          animation: globalWaveMotion1 24s cubic-bezier(0.445, 0.05, 0.55, 0.95) infinite;
        }

        .wave-vivid-electric {
          background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 600" preserveAspectRatio="none"><path d="M0,350 C400,100 800,450 1200,200 C1600,50 2000,400 2400,150 L2400,600 L0,600 Z" fill="%230066ff"/></svg>');
          animation: globalWaveMotion2 18s ease-in-out infinite;
          opacity: 0.24;
        }

        .wave-vivid-azure {
          background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 600" preserveAspectRatio="none"><path d="M0,200 C300,50 600,400 900,150 C1200,-50 1500,300 1800,100 L1800,600 L0,600 Z" fill="%231e40af"/></svg>');
          animation: globalWaveMotion1 32s linear infinite;
          opacity: 0.3;
        }

        @keyframes globalWaveMotion1 {
          0% { transform: translate3d(0, 0, 0) rotate(0deg) scale(1); }
          50% { transform: translate3d(-30%, -40px, 0) rotate(2deg) scale(1.05); }
          100% { transform: translate3d(-50%, 0, 0) rotate(0deg) scale(1); }
        }

        @keyframes globalWaveMotion2 {
          0% { transform: translate3d(-50%, 0, 0) rotate(0deg) scale(1.05); }
          50% { transform: translate3d(-20%, 50px, 0) rotate(-2deg) scale(0.95); }
          100% { transform: translate3d(0, 0, 0) rotate(0deg) scale(1.05); }
        }

        .page-center-neon-glow {
          position: absolute;
          top: 25%;
          left: 15%;
          width: 70%;
          height: 60%;
          background: radial-gradient(circle, rgba(0, 210, 255, 0.16) 0%, rgba(0, 102, 255, 0.05) 50%, transparent 80%);
          z-index: 0;
          pointer-events: none;
          filter: blur(60px);
        }

        @keyframes modalFadeIn { from { opacity: 0; } to { opacity: 1; } }
        @keyframes modalZoomIn { from { transform: scale(0.95); opacity: 0; } to { transform: scale(1); opacity: 1; } }
      `}</style>

      {/* WAVE LAYERS RENDER */}
      <div className="total-page-wave-container">
        <div className="full-ambient-wave wave-vivid-cyan"></div>
        <div className="full-ambient-wave wave-vivid-electric"></div>
        <div className="full-ambient-wave wave-vivid-azure"></div>
      </div>
      
      <div className="page-center-neon-glow"></div>

      {/* Main Container */}
      <div style={{ position: 'relative', zIndex: 1 }}>
        
        <p style={{ fontSize: 10, letterSpacing: '0.45em', textTransform: 'uppercase', color: '#00d2ff', marginBottom: 20, textAlign: 'center', fontWeight: 'bold', textShadow: '0 0 15px rgba(0,210,255,0.5)' }}>
          Honors & Badges
        </p>
        
        <h2 style={{ fontFamily: "'Bebas Neue',sans-serif", fontSize: 'clamp(2.5rem,7vw,5.5rem)', color: '#fff', textAlign: 'center', marginBottom: 80, letterSpacing: '0.02em', textShadow: '0 5px 25px rgba(0,0,0,0.7)' }}>
          Certificates & Achievements
        </h2>
        
        {/* CARDS GRID DESIGN */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(330px,1fr))', gap: 32, maxWidth: 1250, margin: '0 auto' }}>
          {ACHIEVEMENTS.map((item, index) => (
            <div 
              key={index} 
              onClick={() => handleCardClick(item)} // Dynamic link/modal routing engine
              style={{
                padding: '24px',
                borderRadius: 24,
                border: '1px solid rgba(255,255,255,0.09)',
                background: 'rgba(5, 10, 25, 0.48)', 
                backdropFilter: 'blur(35px)', 
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                cursor: 'pointer',
                transition: 'transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), border-color 0.3s ease, box-shadow 0.3s ease',
                boxShadow: '0 30px 65px -20px rgba(0,0,0,0.75)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-10px)';
                e.currentTarget.style.borderColor = item.tagColor;
                e.currentTarget.style.boxShadow = `0 25px 50px -15px ${item.tagColor}45`;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.09)';
                e.currentTarget.style.boxShadow = '0 30px 65px -20px rgba(0,0,0,0.75)';
              }}
            >
              <div>
                {/* 🖼️ NORMAL CLEAN IMAGE SNIPPET (NO FILLER GRADIENTS OR GRAPHICS) */}
                <div style={{ 
                  position: 'relative', 
                  width: '100%', 
                  height: '190px', 
                  borderRadius: 16, 
                  marginBottom: 22, 
                  overflow: 'hidden',
                  background: '#03050c',
                  border: '1px solid rgba(255,255,255,0.05)'
                }}>
                  <Image 
                    src={item.certificateUrl} 
                    alt={item.title}
                    fill 
                    style={{ objectFit: 'cover' }} // Keeps it clean like a native photo gallery view
                    unoptimized
                  />
                </div>

                {/* Tags Metadata tracking row */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16 }}>
                  <p style={{ fontSize: 9, letterSpacing: '0.18em', textTransform: 'uppercase', color: item.tagColor, margin: 0, fontWeight: 'bold' }}>
                    {item.tag}
                  </p>
                  <span style={{ fontSize: 10, fontFamily: 'monospace', color: 'rgba(255,255,255,0.35)' }}>
                    {item.date}
                  </span>
                </div>

                <h3 style={{ fontFamily: "'Bebas Neue',sans-serif", fontSize: '1.95rem', color: '#fff', marginBottom: 12, letterSpacing: '0.02em', lineHeight: 1.15 }}>
                  {item.title}
                </h3>

                <p style={{ fontSize: 11.5, fontFamily: 'monospace', color: 'rgba(255,255,255,0.45)', marginBottom: 18, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                  Auth: {item.authority}
                </p>

                <p style={{ fontSize: 13.5, color: 'rgba(255,255,255,0.6)', lineHeight: 1.7, margin: 0 }}>
                  {item.desc}
                </p>
              </div>

              {/* Dynamic Action indicator at the bottom */}
              <div style={{ marginTop: 20, paddingTop: 14, borderTop: '1px solid rgba(255,255,255,0.05)', display: 'flex', alignItems: 'center', gap: 6 }}>
                <span style={{ fontSize: 11, fontFamily: 'monospace', color: item.tagColor }}>
                  {item.credentialUrl !== '#' ? '🔗 Follow Link Node →' : '🔍 View Full Nodes'}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ==========================================================================
          🖼️ ACCESSIBLE OPTIONAL LIGHTROOM PREVIEW MODAL FRAMEWAY
         ========================================================================== */}
      {activeCert && (
        <div 
          onClick={() => setActiveCert(null)}
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100vw',
            height: '100vh',
            zIndex: 9999,
            background: 'rgba(1, 3, 12, 0.88)',
            backdropFilter: 'blur(20px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '24px',
            animation: 'modalFadeIn 0.25s ease-out'
          }}
        >
          <div 
            onClick={(e) => e.stopPropagation()} 
            style={{
              background: '#070913',
              border: '1px solid rgba(255,255,255,0.08)',
              borderRadius: 28,
              width: '100%',
              maxWidth: '850px',
              overflow: 'hidden',
              boxShadow: '0 60px 120px -25px rgba(0,0,0,0.95)',
              animation: 'modalZoomIn 0.3s cubic-bezier(0.16, 1, 0.3, 1)'
            }}
          >
            <div style={{ position: 'relative', width: '100%', height: '440px', background: '#02040a', display: 'flex', alignItems: 'center', justifyContent: 'center', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
              <Image 
                src={activeCert.certificateUrl}
                alt={activeCert.title}
                fill
                style={{ objectFit: 'contain', padding: '24px' }}
                unoptimized
              />

              <button 
                onClick={() => setActiveCert(null)}
                style={{
                  position: 'absolute',
                  top: 20,
                  right: 20,
                  width: 38,
                  height: 38,
                  borderRadius: '50%',
                  background: 'rgba(0,0,0,0.7)',
                  border: '1px solid rgba(255,255,255,0.18)',
                  color: '#fff',
                  fontSize: 15,
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                ✕
              </button>
            </div>

            <div style={{ padding: '36px 44px', background: '#070913' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: 20, marginBottom: 16 }}>
                <div style={{ flex: 1, minWidth: '280px' }}>
                  <span style={{ fontSize: 9, letterSpacing: '0.3em', textTransform: 'uppercase', color: activeCert.tagColor, fontWeight: 'bold', display: 'block', marginBottom: 8 }}>
                    {activeCert.tag} // Secured Credential Node
                  </span>
                  <h4 style={{ fontFamily: "'Bebas Neue',sans-serif", fontSize: '2.3rem', color: '#fff', margin: 0, letterSpacing: '0.01em', lineHeight: 1.1 }}>
                    {activeCert.title}
                  </h4>
                </div>
                <span style={{ fontSize: 11, fontFamily: 'monospace', color: 'rgba(255,255,255,0.4)', background: 'rgba(255,255,255,0.04)', padding: '6px 14px', borderRadius: 8, border: '1px solid rgba(255,255,255,0.06)' }}>
                  {activeCert.date}
                </span>
              </div>

              <p style={{ fontSize: 13.5, color: 'rgba(255,255,255,0.45)', margin: 0, marginBottom: 16, fontWeight: 500 }}>
                🏢 Issuing Authority: <span style={{ color: '#fff', fontWeight: 'bold' }}>{activeCert.authority}</span>
              </p>

              <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.68)', lineHeight: 1.65, margin: 0 }}>
                {activeCert.desc}
              </p>
            </div>

          </div>
        </div>
      )}
    </section>
  )
}

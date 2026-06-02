'use client'

// ==========================================================================
// 🎯 DATA ARRAY (INTEGRATED FROM UPLOADED CERTIFICATE SPECIFICATIONS)
// ==========================================================================
const ACHIEVEMENTS = [
  {
    title: 'Naukri Campus Aptitude Test (AINCAT 2026)',
    authority: 'Naukri Campus (Powered by DoSelect)',
    desc: 'Successfully participated in India’s Biggest Career Aptitude Test. Evaluated on industry-grade core analytical aptitude, logical reasoning, and technical readiness alongside top candidates nationwide.',
    tag: 'National Level Assessment',
    date: 'May 2026',
    meshStyle: 'linear-gradient(45deg, #ca8a04 0%, #713f12 100%)', // Gold Matrix Theme
    tagColor: 'rgba(234, 179, 8, 0.95)'
  },
  {
    title: 'Data Structures and Algorithms Certification',
    authority: 'NPTEL / Swayam (IIT)',
    desc: 'Successfully completed the advanced data structures training curriculum with an elite rank. Covered complex problem solving, tree graph traversals, and dynamic programming paradigms.',
    tag: 'Technical Certificate',
    date: '2024',
    meshStyle: 'linear-gradient(45deg, #0284c7 0%, #0c4a6e 100%)', // Sky Blue Tech Theme
    tagColor: 'rgba(14, 165, 233, 0.9)'
  },
  {
    title: 'Full Stack Web Development Milestone',
    authority: 'Udemy / Coursera',
    desc: 'Certified modern web architect covering Next.js deep compilation pipelines, production scale servers deployment, and secure API data schema integrations.',
    tag: 'Web Development',
    date: '2023',
    meshStyle: 'linear-gradient(45deg, #4f46e5 0%, #312e81 100%)', // Indigo Cyber Theme
    tagColor: 'rgba(99, 102, 241, 0.9)'
  },
  {
    title: 'Hackathon / College Technical Winner',
    authority: 'GEC Vaishali TechFest',
    desc: 'Secured top podium position in building automated tools/applications within limited hours framework. Recognized for clean code compilation and optimal performance architecture.',
    tag: 'Achievement / Award',
    date: '2024',
    meshStyle: 'linear-gradient(45deg, #dc2626 0%, #7f1d1d 100%)', // Crimson Achievement Theme
    tagColor: 'rgba(239, 68, 68, 0.9)'
  }
]

export default function CertificatesSection() {
  return (
    <section 
      id="achievements" 
      style={{ 
        minHeight: '100vh', 
        padding: '140px 40px', 
        borderTop: '1px solid rgba(255,255,255,0.03)',
        position: 'relative',
        overflow: 'hidden',
        // 🌌 Deep Ultra-HD Dark Canvas
        background: '#010311',
      }}
    >
      {/* 🛠️ FULL-SCREEN HIGH-INTENSITY LIVE BLUE WAVE CANVAS ENGINE */}
      <style>{`
        /* 🌊 Pure Full Page Covering Wrapper */
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

        /* Waves are stretched using height: 100% and top: 0 to eliminate bottom lock */
        .full-ambient-wave {
          position: absolute;
          top: -10%;
          left: 0;
          width: 250%;
          height: 120%;
          background-repeat: repeat;
          background-size: 50% 50%;
          will-change: transform;
          opacity: 0.28; /* High visibility bright index for absolute neon layout */
        }

        /* 💡 LAYER 1: Neon Cyan Cyber Wave (Floats diagonally across the whole page) */
        .wave-vivid-cyan {
          background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 600" preserveAspectRatio="none"><path d="M0,150 C300,300 600,50 900,350 C1200,500 1500,200 1800,400 L1800,600 L0,600 Z" fill="%2300d2ff"/></svg>');
          animation: globalWaveMotion1 24s cubic-bezier(0.445, 0.05, 0.55, 0.95) infinite;
        }

        /* 💡 LAYER 2: Electric Deep Sapphire Blue Wave */
        .wave-vivid-electric {
          background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 600" preserveAspectRatio="none"><path d="M0,350 C400,100 800,450 1200,200 C1600,50 2000,400 2400,150 L2400,600 L0,600 Z" fill="%230066ff"/></svg>');
          animation: globalWaveMotion2 18s ease-in-out infinite;
          opacity: 0.24;
        }

        /* 💡 LAYER 3: Bright Neon Azure Glow Matrix Line */
        .wave-vivid-azure {
          background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 600" preserveAspectRatio="none"><path d="M0,200 C300,50 600,400 900,150 C1200,-50 1500,300 1800,100 L1800,600 L0,600 Z" fill="%231e40af"/></svg>');
          animation: globalWaveMotion1 32s linear infinite;
          opacity: 0.3;
        }

        /* ⚙️ 4K Dual-Axis (X and Y displacement) Floating Animations */
        @keyframes globalWaveMotion1 {
          0% {
            transform: translate3d(0, 0, 0) rotate(0deg) scale(1);
          }
          50% {
            transform: translate3d(-30%, -40px, 0) rotate(2deg) scale(1.05);
          }
          100% {
            transform: translate3d(-50%, 0, 0) rotate(0deg) scale(1);
          }
        }

        @keyframes globalWaveMotion2 {
          0% {
            transform: translate3d(-50%, 0, 0) rotate(0deg) scale(1.05);
          }
          50% {
            transform: translate3d(-20%, 50px, 0) rotate(-2deg) scale(0.95);
          }
          100% {
            transform: translate3d(0, 0, 0) rotate(0deg) scale(1.05);
          }
        }

        /* 🔥 BRIGHT ENERGY SPOTLIGHT CENTRE OVERLAY */
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
      `}</style>

      {/* 🌊 VISUAL LAYER: COVERS ENTIRE VERTICAL AND HORIZONTAL VIEWPORT */}
      <div className="total-page-wave-container">
        <div className="full-ambient-wave wave-vivid-cyan"></div>
        <div className="full-ambient-wave wave-vivid-electric"></div>
        <div className="full-ambient-wave wave-vivid-azure"></div>
      </div>
      
      {/* 💡 VISUAL LAYER: CENTRE CORE AMBIENT BACKLIGHT */}
      <div className="page-center-neon-glow"></div>

      {/* Core data grid layout layer */}
      <div style={{ position: 'relative', zIndex: 1 }}>
        
        {/* SUBTITLE */}
        <p style={{ fontSize: 10, letterSpacing: '0.45em', textTransform: 'uppercase', color: '#00d2ff', marginBottom: 20, textAlign: 'center', fontWeight: 'bold', textShadow: '0 0 15px rgba(0,210,255,0.5)' }}>
          Honors & Badges
        </p>
        
        {/* PRIMARY BEBAS NEUE HEADER MAP */}
        <h2 style={{ fontFamily: "'Bebas Neue',sans-serif", fontSize: 'clamp(2.5rem,7vw,5.5rem)', color: '#fff', textAlign: 'center', marginBottom: 80, letterSpacing: '0.02em', textShadow: '0 5px 25px rgba(0,0,0,0.7)' }}>
          Certificates & Achievements
        </h2>
        
        {/* RESPONSIVE DISPLAY GRID INTERFACE */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(330px,1fr))', gap: 32, maxWidth: 1250, margin: '0 auto' }}>
          {ACHIEVEMENTS.map((item, index) => (
            <div 
              key={index} 
              style={{
                padding: '36px 32px',
                borderRadius: 24,
                border: '1px solid rgba(255,255,255,0.09)',
                background: 'rgba(5, 10, 25, 0.48)', // Crystal ultra transparency to pass full-page waves bright look
                backdropFilter: 'blur(35px)', // Premium blur layer 
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
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
                {/* Abstract System Gradient Canvas Header Box */}
                <div style={{ 
                  position: 'relative', 
                  width: '100%', 
                  height: '145px', 
                  borderRadius: 14, 
                  marginBottom: 26, 
                  background: item.meshStyle,
                  opacity: 0.85, 
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  border: '1px solid rgba(255,255,255,0.05)'
                }}>
                  <span style={{ fontSize: 10, fontFamily: 'monospace', color: 'rgba(255,255,255,0.6)', letterSpacing: '0.2em', textTransform: 'uppercase' }}>
                    Credential Node // 0{index + 1}
                  </span>
                </div>

                {/* Sub tags tracking grid row */}
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
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

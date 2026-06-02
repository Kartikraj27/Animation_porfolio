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
        padding: '120px 40px', 
        borderTop: '1px solid rgba(255,255,255,0.03)',
        position: 'relative',
        overflow: 'hidden',
        // 🌌 Deep Abyss Base Layer
        background: '#020617',
      }}
    >
      {/* 🛠️ ULTRA HD 8K/4K CINEMATIC BLUE WAVE ANIMATION ENGINE */}
      <style>{`
        /* 🌊 Multi-layered Liquid Wave Infrastructure */
        .classic-blue-wave-wrapper {
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: 0;
          pointer-events: none;
          opacity: 0.85;
          overflow: hidden;
        }

        .classic-wave-layer {
          position: absolute;
          bottom: -20px;
          left: 0;
          width: 200%;
          height: 60vh;
          background-repeat: repeat-x;
          transform-origin: center bottom;
          will-change: transform;
        }

        /* 8K Core Blue Gradient Vectors mapped inside custom paths */
        .wave-layer-1 {
          background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none"><path d="M0,32L120,42.7C240,53,480,75,720,74.7C960,75,1200,53,1320,42.7L1440,32L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z" fill="%230c4a6e" fill-opacity="0.25"/></svg>');
          background-size: 50% 100%;
          animation: classicWaveFlowMove 22s cubic-bezier(0.4, 0, 0.2, 1) infinite;
          z-index: 1;
        }

        .wave-layer-2 {
          background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none"><path d="M0,64L100,58.7C200,53,400,43,600,48C800,53,1000,75,1100,85.3L1200,96L1200,320L1100,320C1000,320,800,320,600,320C400,320,200,320,100,320L0,320Z" fill="%230284c7" fill-opacity="0.18"/></svg>');
          background-size: 50% 100%;
          animation: classicWaveFlowMoveReverse 16s ease-in-out infinite;
          bottom: 10px;
          z-index: 2;
        }

        .wave-layer-3 {
          background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none"><path d="M0,15L150,32C300,48,600,80,900,74.7C1200,69,1500,27,1650,5.3L1800,-16L1800,320L1650,320C1500,320,1200,320,900,320C600,320,300,320,150,320L0,320Z" fill="%232563eb" fill-opacity="0.12"/></svg>');
          background-size: 40% 100%;
          animation: classicWaveFlowMove 28s linear infinite;
          bottom: -5px;
          z-index: 3;
        }

        /* 🔮 Hardware Accelerated 4K Motion Loops */
        @keyframes classicWaveFlowMove {
          0% { transform: translate3d(0, 0, 0) scaleY(1); }
          50% { transform: translate3d(-25%, 15px, 0) scaleY(1.08); }
          100% { transform: translate3d(-50%, 0, 0) scaleY(1); }
        }

        @keyframes classicWaveFlowMoveReverse {
          0% { transform: translate3d(-50%, 0, 0) scaleY(1.05); }
          50% { transform: translate3d(-25%, -20px, 0) scaleY(0.95); }
          100% { transform: translate3d(0, 0, 0) scaleY(1.05); }
        }

        /* Ambient Cosmic Depth Glow Overlay to mimic an 8K display screen */
        .cosmic-wave-glow {
          position: absolute;
          top: -20%;
          left: -20%;
          width: 140%;
          height: 140%;
          background: radial-gradient(circle at 80% 20%, rgba(30, 64, 175, 0.15) 0%, rgba(15, 23, 42, 0) 60%);
          z-index: 0;
          pointer-events: none;
        }
      `}</style>

      {/* 🌊 VISUAL LAYER: ULTRA HD CLASSIC BLUE WALLPAPER MOVING WAVES */}
      <div className="classic-blue-wave-wrapper">
        <div className="classic-wave-layer wave-layer-1"></div>
        <div className="classic-wave-layer wave-layer-2"></div>
        <div className="classic-wave-layer wave-layer-3"></div>
      </div>
      
      {/* 🔮 VISUAL LAYER: 4K HIGH RESOLUTION NEON AMBIENT DEPTH RADIUS */}
      <div className="cosmic-wave-glow"></div>

      {/* Interface core panel wrapper sitting securely over the wave animations */}
      <div style={{ position: 'relative', zIndex: 1 }}>
        
        {/* SUBTITLE */}
        <p style={{ fontSize: 10, letterSpacing: '0.38em', textTransform: 'uppercase', color: 'rgba(56, 189, 248, 0.8)', marginBottom: 20, textAlign: 'center' }}>
          Honors & Badges
        </p>
        
        {/* PRIMARY BEBAS NEUE HEADER MAP */}
        <h2 style={{ fontFamily: "'Bebas Neue',sans-serif", fontSize: 'clamp(2.5rem,7vw,5rem)', color: '#fff', textAlign: 'center', marginBottom: 70, letterSpacing: '0.01em' }}>
          Certificates & Achievements
        </h2>
        
        {/* RESPONSIVE DISPLAY GRID INTERFACE */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(330px,1fr))', gap: 32, maxWidth: 1250, margin: '0 auto' }}>
          {ACHIEVEMENTS.map((item, index) => (
            <div 
              key={index} 
              style={{
                padding: '32px',
                borderRadius: 20,
                border: '1px solid rgba(255,255,255,0.05)',
                background: 'rgba(15, 23, 42, 0.65)',
                backdropFilter: 'blur(28px)', // Elite frosted crystal layout
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                transition: 'transform 0.4s cubic-bezier(0.2, 0.8, 0.2, 1), border-color 0.3s ease',
                boxShadow: '0 30px 60px -25px rgba(0,0,0,0.6)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-8px) scale(1.01)';
                e.currentTarget.style.borderColor = item.tagColor;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0) scale(1)';
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.05)';
              }}
            >
              <div>
                {/* Abstract System Gradient Canvas Header Box */}
                <div style={{ 
                  position: 'relative', 
                  width: '100%', 
                  height: '140px', 
                  borderRadius: 12, 
                  marginBottom: 24, 
                  background: item.meshStyle,
                  opacity: 0.7,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  border: '1px solid rgba(255,255,255,0.05)'
                }}>
                  <span style={{ fontSize: 10, fontFamily: 'monospace', color: 'rgba(255,255,255,0.4)', letterSpacing: '0.2em', textTransform: 'uppercase' }}>
                    Credential Node // 0{index + 1}
                  </span>
                </div>

                {/* Sub tags tracking grid row */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 14 }}>
                  <p style={{ fontSize: 8.5, letterSpacing: '0.18em', textTransform: 'uppercase', color: item.tagColor, margin: 0, fontWeight: 'bold' }}>
                    {item.tag}
                  </p>
                  <span style={{ fontSize: 10, fontFamily: 'monospace', color: 'rgba(255,255,255,0.25)' }}>
                    {item.date}
                  </span>
                </div>

                <h3 style={{ fontFamily: "'Bebas Neue',sans-serif", fontSize: '1.85rem', color: '#fff', marginBottom: 10, letterSpacing: '0.02em', lineHeight: 1.15 }}>
                  {item.title}
                </h3>

                <p style={{ fontSize: 11.5, fontFamily: 'monospace', color: 'rgba(255,255,255,0.4)', marginBottom: 18, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                  Auth: {item.authority}
                </p>

                <p style={{ fontSize: 13.5, color: 'rgba(255,255,255,0.52)', lineHeight: 1.65, margin: 0 }}>
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

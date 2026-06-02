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
        // 🌌 Deep Premium Velvet Base Layer
        background: '#010413',
      }}
    >
      {/* 🛠️ ULTRA BRIGHT 8K/4K LIVE BLUE WAVE INTERACTIVE ENGINE */}
      <style>{`
        /* 🌊 Dynamic Full Page Covering Infrastructure */
        .full-page-bright-wave-wrapper {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: 0;
          pointer-events: none;
          opacity: 0.95; /* Increased opacity for absolute brightness */
          overflow: hidden;
        }

        .luminous-wave-layer {
          position: absolute;
          bottom: -50px;
          left: 0;
          width: 200%;
          height: 85vh; /* Expanded height to float deep into the complete page frame */
          background-repeat: repeat-x;
          transform-origin: center bottom;
          will-change: transform;
        }

        /* 💡 LAYER 1: Neon Sky Blue Glow (Super Bright Vector Path) */
        .bright-wave-1 {
          background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none"><path d="M0,40L100,50C200,60,400,80,600,75C800,70,1000,40,1100,25L1200,10L1200,320L1100,320C1000,320,800,320,600,320C400,320,200,320,100,320L0,320Z" fill="%2300d2ff" fill-opacity="0.22"/></svg>');
          background-size: 50% 100%;
          animation: luminousWaveMotion 18s cubic-bezier(0.36, 0.45, 0.63, 0.53) infinite;
          bottom: -20px;
          z-index: 1;
        }

        /* 💡 LAYER 2: Electric Royal Blue Glow */
        .bright-wave-2 {
          background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none"><path d="M0,60L120,53.3C240,47,480,33,720,40C960,47,1200,73,1320,86.7L1440,100L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z" fill="%230078ff" fill-opacity="0.25"/></svg>');
          background-size: 50% 100%;
          animation: luminousWaveMotionReverse 14s ease-in-out infinite;
          bottom: 10px;
          z-index: 2;
        }

        /* 💡 LAYER 3: Vivid High-Definition Cyber Blue Wave */
        .bright-wave-3 {
          background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none"><path d="M0,20L150,35C300,50,600,80,900,70C1200,60,1500,10,1650,-15L1800,-40L1800,320L1650,320C1500,320,1200,320,900,320C600,320,300,320,150,320L0,320Z" fill="%232563eb" fill-opacity="0.18"/></svg>');
          background-size: 40% 100%;
          animation: luminousWaveMotion 24s linear infinite;
          bottom: -10px;
          z-index: 3;
        }

        /* ⚙️ GPU Accelerated Smooth Shifting Math Nodes */
        @keyframes luminousWaveMotion {
          0% { transform: translate3d(0, 0, 0) scaleY(1); }
          50% { transform: translate3d(-25%, 25px, 0) scaleY(1.15); } /* Increased swing for a more dynamic look */
          100% { transform: translate3d(-50%, 0, 0) scaleY(1); }
        }

        @keyframes luminousWaveMotionReverse {
          0% { transform: translate3d(-50%, 0, 0) scaleY(1.1); }
          50% { transform: translate3d(-25%, -30px, 0) scaleY(0.9); }
          100% { transform: translate3d(0, 0, 0) scaleY(1.1); }
        }

        /* ✨ HIGH BRIGHTNESS AMBIENT BACKLIGHT SPOTLIGHT OVERLAY */
        .neon-ambient-spotlight {
          position: absolute;
          top: -10%;
          left: 10%;
          width: 80%;
          height: 120%;
          background: radial-gradient(circle at 50% 80%, rgba(0, 210, 255, 0.18) 0%, rgba(0, 120, 255, 0.08) 40%, rgba(0,0,0,0) 70%);
          z-index: 0;
          pointer-events: none;
          filter: blur(40px);
        }
      `}</style>

      {/* 🌊 VISUAL LAYER: FULL PAGE BRIGHT BLUE LIVE WALLPAPER WAVES */}
      <div className="full-page-bright-wave-wrapper">
        <div className="luminous-wave-layer bright-wave-1"></div>
        <div className="luminous-wave-layer bright-wave-2"></div>
        <div className="luminous-wave-layer bright-wave-3"></div>
      </div>
      
      {/* 💡 VISUAL LAYER: EXTRA BRIGHT NEON ATMOSPHERIC RADIAL BACKLIGHT */}
      <div className="neon-ambient-spotlight"></div>

      {/* Interface panel grid structure wrapped safely over the luminous wave framework */}
      <div style={{ position: 'relative', zIndex: 1 }}>
        
        {/* SUBTITLE */}
        <p style={{ fontSize: 10, letterSpacing: '0.42em', textTransform: 'uppercase', color: '#00d2ff', marginBottom: 20, textAlign: 'center', fontWeight: 'bold', textShadow: '0 0 12px rgba(0,210,255,0.4)' }}>
          Honors & Badges
        </p>
        
        {/* PRIMARY BEBAS NEUE HEADER */}
        <h2 style={{ fontFamily: "'Bebas Neue',sans-serif", fontSize: 'clamp(2.5rem,7vw,5.5rem)', color: '#fff', textAlign: 'center', marginBottom: 80, letterSpacing: '0.02em', textShadow: '0 4px 20px rgba(0,0,0,0.6)' }}>
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
                border: '1px solid rgba(255,255,255,0.08)',
                background: 'rgba(6, 11, 28, 0.55)', // Slightly translucent dark canvas for ultra bright backlight passage
                backdropFilter: 'blur(32px)', // Super polished frost glass crystal look
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                transition: 'transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), border-color 0.3s ease, box-shadow 0.3s ease',
                boxShadow: '0 30px 60px -20px rgba(0,0,0,0.7)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-10px)';
                e.currentTarget.style.borderColor = item.tagColor;
                e.currentTarget.style.boxShadow = `0 20px 40px -15px ${item.tagColor}40`;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)';
                e.currentTarget.style.boxShadow = '0 30px 60px -20px rgba(0,0,0,0.7)';
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
                  opacity: 0.8, // Boosted background block opacity for color balance
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

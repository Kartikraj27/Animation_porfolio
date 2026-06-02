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
        // 🔮 AMBIENT SHIFTING SPACE MATRIX BACKGROUND
        background: 'linear-gradient(-45deg, #020005, #050b14, #0b0518, #030a08)',
        backgroundSize: '400% 400%',
        animation: 'spaceMatrixGradient 18s ease infinite'
      }}
    >
      {/* 🛠️ ADVANCED SMOOTH INTERACTIVE 3D PERSPECTIVE PERSISTENT ENGINE */}
      <style>{`
        @keyframes spaceMatrixGradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        /* 🔥 SMOOTH INFINITE 3D GRID ENGINE */
        .cyber-3d-perspective-grid {
          position: absolute;
          top: -30%;
          left: -10%;
          width: 120%;
          height: 150%;
          background-image: 
            linear-gradient(to bottom, rgba(20, 184, 166, 0.06) 1px, transparent 1px),
            linear-gradient(to right, rgba(20, 184, 166, 0.06) 1px, transparent 1px);
          background-size: 50px 50px;
          
          /* 3D Depth coordinates projection matrix */
          transform: perspective(450px) rotateX(65deg) translateZ(0);
          transform-origin: top center;
          
          animation: infiniteSmoothGridForward 16s linear infinite;
          z-index: 0;
          pointer-events: none;
        }

        /* Seamless layout coordinate shifts to avoid screen flickering/stretching */
        @keyframes infiniteSmoothGridForward {
          0% {
            background-position: 0 0;
          }
          100% {
            background-position: 0 400px; /* Moves the matrix pattern continuously down forward */
          }
        }

        /* Top atmospheric fade to merge grid seamlessly into the dark matrix background */
        .grid-fog-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 40%;
          background: linear-gradient(to bottom, #020005, transparent);
          z-index: 0;
          pointer-events: none;
        }
      `}</style>

      {/* 🌌 VISUAL LAYER: SMOOTH 3D PERSPECTIVE SCROLLING GRID */}
      <div className="cyber-3d-perspective-grid"></div>
      
      {/* 🌫️ ATMOSPHERIC RADIAL FADE FOR DEEP AMBIENT MATRIX LOOK */}
      <div className="grid-fog-overlay"></div>

      {/* Interface core panel wrapper sitting securely over the 3D grid system */}
      <div style={{ position: 'relative', zIndex: 1 }}>
        
        {/* SUBTITLE */}
        <p style={{ fontSize: 10, letterSpacing: '0.38em', textTransform: 'uppercase', color: 'rgba(20, 184, 166, 0.8)', marginBottom: 20, textAlign: 'center' }}>
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
                border: '1px solid rgba(255,255,255,0.06)',
                background: 'rgba(5, 5, 10, 0.68)',
                backdropFilter: 'blur(24px)', // High distortion blur for clear vision properties
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                transition: 'transform 0.4s cubic-bezier(0.2, 0.8, 0.2, 1), border-color 0.3s ease',
                boxShadow: '0 25px 55px -20px rgba(0,0,0,0.8)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-8px) scale(1.01)';
                e.currentTarget.style.borderColor = item.tagColor;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0) scale(1)';
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.06)';
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
                  opacity: 0.65,
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

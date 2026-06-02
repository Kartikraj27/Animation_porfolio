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
        minHeight: '80vh', 
        padding: '120px 40px', 
        borderTop: '1px solid rgba(255,255,255,0.03)',
        position: 'relative',
        overflow: 'hidden',
        // 🔥 FLUID MULTI-COLOR GRADIENT SHIFTING LOOP
        background: 'linear-gradient(-45deg, #040108, #070617, #030a0d, #020a05)',
        backgroundSize: '400% 400%',
        animation: 'certGradientCycle 15s ease infinite'
      }}
    >
      {/* 🛠️ AUTOMATIC INLINE KEYFRAMES FOR SMOOTH SHIFTING AUTO-PLAY BACKGROUND */}
      <style>{`
        @keyframes certGradientCycle {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
      `}</style>

      {/* Main content wrapper aligned smoothly above the dynamic fluid layer */}
      <div style={{ position: 'relative', zIndex: 1 }}>
        
        {/* SUBTITLE FRAMEWORK */}
        <p style={{ fontSize: 10, letterSpacing: '0.38em', textTransform: 'uppercase', color: 'rgba(20, 184, 166, 0.8)', marginBottom: 20, textAlign: 'center' }}>
          Honors & Badges
        </p>
        
        {/* PRIMARY BEBAS NEUE HEADER */}
        <h2 style={{ fontFamily: "'Bebas Neue',sans-serif", fontSize: 'clamp(2.5rem,7vw,5rem)', color: '#fff', textAlign: 'center', marginBottom: 70, letterSpacing: '0.01em' }}>
          Certificates & Achievements
        </h2>
        
        {/* RESPONSIVE DISPLAY GRID ALIGNED WITH PROJECTS COMPONENT */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(330px,1fr))', gap: 32, maxWidth: 1250, margin: '0 auto' }}>
          {ACHIEVEMENTS.map((item, index) => (
            <div 
              key={index} 
              style={{
                padding: '32px',
                borderRadius: 20,
                border: '1px solid rgba(255,255,255,0.06)',
                background: 'rgba(5, 5, 10, 0.65)',
                backdropFilter: 'blur(16px)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                transition: 'transform 0.4s cubic-bezier(0.2, 0.8, 0.2, 1)',
                boxShadow: '0 12px 40px -15px rgba(0,0,0,0.5)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-6px)';
                e.currentTarget.style.borderColor = item.tagColor;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.06)';
              }}
            >
              <div>
                {/* Mathematical Abstract Gradient Mesh Banner Node (Fixes Image compilation crash) */}
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

                {/* Sub-tags meta tracker row */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 14 }}>
                  <p style={{ fontSize: 8.5, letterSpacing: '0.18em', textTransform: 'uppercase', color: item.tagColor, margin: 0, fontWeight: 'bold' }}>
                    {item.tag}
                  </p>
                  <span style={{ fontSize: 10, fontFamily: 'monospace', color: 'rgba(255,255,255,0.25)' }}>
                    {item.date}
                  </span>
                </div>

                {/* Certificate Main Title */}
                <h3 style={{ fontFamily: "'Bebas Neue',sans-serif", fontSize: '1.85rem', color: '#fff', marginBottom: 10, letterSpacing: '0.02em', lineHeight: 1.15 }}>
                  {item.title}
                </h3>

                {/* Issuing Authority Badge Context */}
                <p style={{ fontSize: 11.5, fontFamily: 'monospace', color: 'rgba(255,255,255,0.4)', marginBottom: 18, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                  Auth: {item.authority}
                </p>

                {/* Verified description text framework */}
                <p style={{ fontSize: 13.5, color: 'rgba(255,255,255,0.52)', lineHeight: 1.65, margin: 0, marginBottom: 10 }}>
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

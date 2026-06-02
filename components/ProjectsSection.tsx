'use client'

// ==========================================================================
// 🎯 STRICT PROJECTS ARRAY (DIRECT INTEGRATED FROM USER SUBMITTED DATA FILE)
// ==========================================================================
const PROJECTS = [
  {
    title: 'Cinematic Portfolio',
    desc: 'Award-worthy developer portfolio engineered with highly interactive custom canvas components, sleek operational layouts, and seamless spatial motion frameworks utilizing Three.js & GSAP.',
    tag: 'React · Three.js · GSAP',
    timeline: '2026',
    demoUrl: '#',
    cardStyle: {
      background: 'linear-gradient(135deg, rgba(20, 184, 166, 0.12) 0%, rgba(5, 5, 10, 0.6) 100%)',
      border: '1px solid rgba(20, 184, 166, 0.15)', 
      boxShadow: '0 12px 40px -15px rgba(20, 184, 166, 0.1)'
    },
    meshStyle: 'linear-gradient(45deg, #0d9488 0%, #115e59 100%)',
    tagColor: 'rgba(20, 184, 166, 0.9)',
    btnText: 'Launch Interface Core'
  },
  {
    title: 'Hand-Connect',
    desc: 'Real-time AR hand tracking experience with gesture-controlled neon visual effects, multi-theme cyberpunk aesthetics, and immersive audio — built entirely in the browser.',
    tag: 'React.js · HTML5 · CSS3 · Bootstrap · Javascript',
    timeline: '2026',
    demoUrl: 'https://hand-connect-ashy.vercel.app',
    cardStyle: {
      background: 'linear-gradient(135deg, rgba(99, 102, 241, 0.12) 0%, rgba(5, 5, 10, 0.6) 100%)',
      border: '1px solid rgba(99, 102, 241, 0.15)', 
      boxShadow: '0 12px 40px -15px rgba(99, 102, 241, 0.1)'
    },
    meshStyle: 'linear-gradient(45deg, #4f46e5 0%, #312e81 100%)',
    tagColor: 'rgba(99, 102, 241, 0.9)',
    btnText: 'Launch Live Web App'
  },
  {
    title: 'Assest System Management',
    desc: 'A comprehensive company asset management system to track, assign, and manage physical assets like laptops and furniture — with real-time inventory status and employee allocation records.',
    tag: 'React.js · Node.js · MongoDB · Express',
    timeline: '2025',
    demoUrl: '#',
    cardStyle: {
      background: 'linear-gradient(135deg, rgba(239, 68, 68, 0.1) 0%, rgba(5, 5, 10, 0.6) 100%)',
      border: '1px solid rgba(239, 68, 68, 0.15)', 
      boxShadow: '0 12px 40px -15px rgba(239, 68, 68, 0.08)'
    },
    meshStyle: 'linear-gradient(45deg, #dc2626 0%, #7f1d1d 100%)',
    tagColor: 'rgba(239, 68, 68, 0.9)',
    btnText: 'Deploy Inventory Core'
  },
  {
    title: 'Scientific Calculator',
    desc: 'A sleek, fully-functional scientific calculator with trigonometric, logarithmic, and exponential operations — featuring light/dark mode and a clean minimal UI.',
    tag: 'HTML5 · CSS3 · Javascript',
    timeline: '2025',
    demoUrl: 'https://scientific-calci-eight.vercel.app',
    cardStyle: {
      background: 'linear-gradient(135deg, rgba(14, 165, 233, 0.12) 0%, rgba(5, 5, 10, 0.6) 100%)',
      border: '1px solid rgba(14, 165, 233, 0.15)',
      boxShadow: '0 12px 40px -15px rgba(14, 165, 233, 0.1)'
    },
    meshStyle: 'linear-gradient(45deg, #0284c7 0%, #0c4a6e 100%)',
    tagColor: 'rgba(14, 165, 233, 0.9)',
    btnText: 'Open Live Calci'
  },
  {
    title: 'All India Naukri Campus Aptitude Test (AINCAT)',
    desc: 'Successfully evaluated in India’s biggest nationwide career aptitude benchmark evaluation assessment matrix. Verified strong analytical baseline, problem-solving efficiency, and quantitative reasoning modules mapped across top-tier enterprise recruitment standards.',
    tag: 'National Evaluation Assessment',
    timeline: 'May 2026',
    demoUrl: '#',
    cardStyle: {
      background: 'linear-gradient(135deg, rgba(234, 179, 8, 0.1) 0%, rgba(6, 4, 15, 0.7) 100%)',
      border: '1px solid rgba(234, 179, 8, 0.25)', 
      boxShadow: '0 12px 45px -15px rgba(234, 179, 8, 0.12)'
    },
    meshStyle: 'linear-gradient(45deg, #ca8a04 0%, #713f12 100%)',
    tagColor: 'rgba(234, 179, 8, 0.95)', 
    btnText: 'Verify Credential ID'
  }
]

export default function ProjectsSection() {
  return (
    <section 
      id="projects" 
      className="cyber-ocean-bg" 
      style={{ 
        padding: '120px 40px', 
        borderTop: '1px solid rgba(255,255,255,0.03)',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      
      {/* 🐢 MULTIPLES OF TURTLES: LEFT TO RIGHT SIDE MOVING INJECTION */}
      <div className="turtle-asset t-left-1"></div>
      <div className="turtle-asset t-left-2"></div>
      <div className="turtle-asset t-left-3"></div>
      <div className="turtle-asset t-left-4"></div>

      {/* 🐢 MULTIPLES OF TURTLES: RIGHT TO LEFT SIDE MOVING INJECTION */}
      <div className="turtle-asset t-right-1"></div>
      <div className="turtle-asset t-right-2"></div>
      <div className="turtle-asset t-right-3"></div>
      <div className="turtle-asset t-right-4"></div>

      {/* Interface Wrapper over background animation layers */}
      <div style={{ position: 'relative', zIndex: 1 }}>
        
        <p style={{ fontSize: 10, letterSpacing: '0.38em', textTransform: 'uppercase', color: 'rgba(20, 184, 166, 0.8)', marginBottom: 20, textAlign: 'center' }}>
          Selected Work & Production Pipelines
        </p>
        
        <h2 style={{ fontFamily: "'Bebas Neue',sans-serif", fontSize: 'clamp(2.5rem,7vw,5rem)', color: '#fff', textAlign: 'center', marginBottom: 70, letterSpacing: '0.01em' }}>
          Featured Projects
        </h2>
        
        {/* RESPONSIVE MESH SECTIONS DISPLAY GRID */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(330px,1fr))', gap: 32, maxWidth: 1250, margin: '0 auto' }}>
          {PROJECTS.map((proj, index) => (
            <div 
              key={index} 
              style={{
                padding: '32px',
                borderRadius: 20,
                backdropFilter: 'blur(12px)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                transition: 'transform 0.3s cubic-bezier(0.2, 0.8, 0.2, 1)',
                ...proj.cardStyle
              }}
              onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-6px)'}
              onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
            >
              <div>
                {/* Mathematical Gradient Dynamic System Banner Node */}
                <div style={{ 
                  position: 'relative', 
                  width: '100%', 
                  height: '140px', 
                  borderRadius: 12, 
                  marginBottom: 24, 
                  background: proj.meshStyle,
                  opacity: 0.65,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  border: '1px solid rgba(255,255,255,0.05)'
                }}>
                  <span style={{ fontSize: 10, fontFamily: 'monospace', color: 'rgba(255,255,255,0.4)', letterSpacing: '0.2em', textTransform: 'uppercase' }}>
                    System Node // 0{index + 1}
                  </span>
                </div>

                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 14 }}>
                  <p style={{ fontSize: 8.5, letterSpacing: '0.18em', textTransform: 'uppercase', color: proj.tagColor, margin: 0, fontWeight: 'bold' }}>
                    {proj.tag}
                  </p>
                  <span style={{ fontSize: 10, fontFamily: 'monospace', color: 'rgba(255,255,255,0.25)' }}>
                    {proj.timeline}
                  </span>
                </div>

                <h3 style={{ fontFamily: "'Bebas Neue',sans-serif", fontSize: '1.85rem', color: '#fff', marginBottom: 14, letterSpacing: '0.02em', lineHeight: 1.15 }}>
                  {proj.title}
                </h3>

                <p style={{ fontSize: 13.5, color: 'rgba(255,255,255,0.52)', lineHeight: 1.65, margin: 0, marginBottom: 26 }}>
                  {proj.desc}
                </p>
              </div>

              {/* ACTION LINK CORE TARGETING SYSTEM KEY */}
              <a 
                href={proj.demoUrl} 
                target={proj.demoUrl !== '#' ? '_blank' : '_self'}
                rel="noopener noreferrer"
                style={{
                  display: 'inline-flex', 
                  alignItems: 'center', 
                  justifyContent: 'center',
                  padding: '12px 20px', 
                  borderRadius: 8, 
                  background: 'rgba(255,255,255,0.03)',
                  border: '1px solid rgba(255,255,255,0.06)', 
                  color: '#fff', 
                  fontSize: 12.5, 
                  fontWeight: 500, 
                  textDecoration: 'none',
                  textAlign: 'center', 
                  transition: 'all 0.25s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = proj.tagColor;
                  e.currentTarget.style.background = 'rgba(255,255,255,0.06)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(255,255,255,0.06)';
                  e.currentTarget.style.background = 'rgba(255,255,255,0.03)';
                }}
              >
                {proj.btnText}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

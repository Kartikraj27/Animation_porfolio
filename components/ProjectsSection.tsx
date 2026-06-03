'use client'

// ==========================================================================
// 🎯 STRICT PROJECTS ARRAY (DYNAMIC IMAGE PATH INTEGRATION)
// ==========================================================================
const PROJECTS = [
  {
    title: 'Cinematic Portfolio',
    desc: 'Award-worthy developer portfolio engineered with highly interactive custom canvas components, sleek operational layouts, and seamless spatial motion frameworks utilizing Three.js & GSAP.',
    tag: 'React · Three.js · GSAP',
    timeline: '2026',
    demoUrl: 'https://animation-porfolio-iota.vercel.app/',
    imageUrl: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=600&q=80', // Cinematic 3D / Abstract Wave
    cardStyle: {
      background: 'linear-gradient(135deg, rgba(20, 184, 166, 0.12) 0%, rgba(5, 5, 10, 0.6) 100%)',
      border: '1px solid rgba(20, 184, 166, 0.15)', 
      boxShadow: '0 12px 40px -15px rgba(20, 184, 166, 0.1)'
    },
    tagColor: 'rgba(20, 184, 166, 0.9)',
    btnText: 'Launch Interface Core'
  },
  {
    title: 'Hand-Connect',
    desc: 'Real-time AR hand tracking experience with gesture-controlled neon visual effects, multi-theme cyberpunk aesthetics, and immersive audio — built entirely in the browser.',
    tag: 'React.js · HTML5 · CSS3 · Bootstrap · Javascript',
    timeline: '2026',
    demoUrl: 'https://hand-connect-ashy.vercel.app',
    imageUrl: 'https://images.unsplash.com/photo-1535223289827-42f1e9919769?auto=format&fit=crop&w=600&q=80', // Cyberpunk / AR Technology
    cardStyle: {
      background: 'linear-gradient(135deg, rgba(99, 102, 241, 0.12) 0%, rgba(5, 5, 10, 0.6) 100%)',
      border: '1px solid rgba(99, 102, 241, 0.15)', 
      boxShadow: '0 12px 40px -15px rgba(99, 102, 241, 0.1)'
    },
    tagColor: 'rgba(99, 102, 241, 0.9)',
    btnText: 'Launch Live Web App'
  },
  {
    title: 'Assest System Management',
    desc: 'A comprehensive company asset management system to track, assign, and manage physical assets like laptops and furniture — with real-time inventory status and employee allocation records.',
    tag: 'React.js · Node.js · MongoDB · Express',
    timeline: '2025',
    demoUrl: '#',
    imageUrl: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=600&q=80', // Infrastructure / Logistics Asset Management
    cardStyle: {
      background: 'linear-gradient(135deg, rgba(239, 68, 68, 0.1) 0%, rgba(5, 5, 10, 0.6) 100%)',
      border: '1px solid rgba(239, 68, 68, 0.15)', 
      boxShadow: '0 12px 40px -15px rgba(239, 68, 68, 0.08)'
    },
    tagColor: 'rgba(239, 68, 68, 0.9)',
    btnText: 'Deploy Inventory Core'
  },
  {
    title: 'Scientific Calculator',
    desc: 'A sleek, fully-functional scientific calculator with trigonometric, logarithmic, and exponential operations — featuring light/dark mode and a clean minimal UI.',
    tag: 'HTML5 · CSS3 · Javascript',
    timeline: '2025',
    demoUrl: 'https://scientific-calci-eight.vercel.app',
    imageUrl: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&w=600&q=80', // Mathematics / Data Analytics Screen
    cardStyle: {
      background: 'linear-gradient(135deg, rgba(14, 165, 233, 0.12) 0%, rgba(5, 5, 10, 0.6) 100%)',
      border: '1px solid rgba(14, 165, 233, 0.15)',
      boxShadow: '0 12px 40px -15px rgba(14, 165, 233, 0.1)'
    },
    tagColor: 'rgba(14, 165, 233, 0.9)',
    btnText: 'Open Live Calci'
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
        
        <h2 style={{ fontFamily: "'Bebas Neue',sans-serif", fontSize: 'clamp(2.5rem,7vw,5rem)', color: '#fff', textAlign: 'center', marginBottom: 70, letterSpacing: '0.01em' }}>
          Projects
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
                {/* 🖼️ DYNAMIC IMAGE BANNER WITH OVERLAY LAYER */}
                <div style={{ 
                  position: 'relative', 
                  width: '100%', 
                  height: '160px', 
                  borderRadius: 12, 
                  marginBottom: 24, 
                  overflow: 'hidden',
                  border: '1px solid rgba(255,255,255,0.08)'
                }}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img 
                    src={proj.imageUrl} 
                    alt={proj.title}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      opacity: 0.75,
                      transition: 'transform 0.5s ease'
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.06)'}
                    onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
                  />
                  {/* Dark Vignette Overlay to maintain Cyberpunk Aesthetics */}
                  <div style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    background: 'linear-gradient(to bottom, transparent 30%, rgba(5,5,10,0.8) 100%)',
                    pointerEvents: 'none'
                  }} />
                  {/* Floating Index Tag */}
                  <span style={{ 
                    position: 'absolute',
                    bottom: 12,
                    right: 12,
                    fontSize: 9, 
                    fontFamily: 'monospace', 
                    color: 'rgba(255,255,255,0.6)', 
                    backgroundColor: 'rgba(0,0,0,0.65)',
                    padding: '3px 8px',
                    borderRadius: 4,
                    border: '1px solid rgba(255,255,255,0.1)',
                    letterSpacing: '0.1em' 
                  }}>
                    NODE_0{index + 1}
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

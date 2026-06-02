'use client'
import Image from 'next/image'

// ==========================================================================
// 🎯 ERROR-FREE DATA ARRAY WITH CORRECT KEY PARAMETERS
// ==========================================================================
const PROJECTS = [
  {
    title: 'Cinematic Portfolio',
    desc: 'Award-worthy developer portfolio engineered with highly interactive custom canvas components, sleek operational layouts, and seamless spatial motion frameworks.',
    tag: 'React · Three.js · GSAP',
    timeline: '2026',
    demoUrl: '#',
    cardStyle: {
      background: 'linear-gradient(135deg, rgba(20, 184, 166, 0.12) 0%, rgba(5, 5, 10, 0.6) 100%)',
      border: '1px solid rgba(20, 184, 166, 0.15)', 
      boxShadow: '0 12px 40px -15px rgba(20, 184, 166, 0.1)'
    },
    tagColor: 'rgba(20, 184, 166, 0.9)',
    imgUrl: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=400&auto=format&fit=crop',
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
    tagColor: 'rgba(99, 102, 241, 0.9)',
    imgUrl: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=400&auto=format&fit=crop',
    btnText: 'Launch Live Web App'
  },
  {
    title: 'Asset System Management',
    desc: 'A comprehensive company asset management system to track, assign, and manage physical assets like laptops and furniture — with real-time inventory status and employee allocation records.',
    tag: 'React.js · Node.js · MongoDB · Express',
    timeline: '2025',
    demoUrl: '#',
    cardStyle: {
      background: 'linear-gradient(135deg, rgba(239, 68, 68, 0.1) 0%, rgba(5, 5, 10, 0.6) 100%)',
      border: '1px solid rgba(239, 68, 68, 0.15)', 
      boxShadow: '0 12px 40px -15px rgba(239, 68, 68, 0.08)'
    },
    tagColor: 'rgba(239, 68, 68, 0.9)',
    imgUrl: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=400&auto=format&fit=crop',
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
    tagColor: 'rgba(14, 165, 233, 0.9)',
    imgUrl: 'https://images.unsplash.com/photo-1587145820266-a5951ee6f620?q=80&w=400&auto=format&fit=crop',
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
    tagColor: 'rgba(234, 179, 8, 0.95)', 
    imgUrl: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=400&auto=format&fit=crop',
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
      
      {/* 🐢 LEFT-TO-RIGHT SWIMMING TURTLES ASSETS */}
      <div className="turtle-asset t-left-1"></div>
      <div className="turtle-asset t-left-2"></div>
      <div className="turtle-asset t-left-3"></div>
      <div className="turtle-asset t-left-4"></div>

      {/* 🐢 RIGHT-TO-LEFT SWIMMING TURTLES ASSETS */}
      <div className="turtle-asset t-right-1"></div>
      <div className="turtle-asset t-right-2"></div>
      <div className="turtle-asset t-right-3"></div>
      <div className="turtle-asset t-right-4"></div>

      {/* Main interface wrapper */}
      <div style={{ position: 'relative', zIndex: 1 }}>
        
        <p style={{ fontSize: 10, letterSpacing: '0.38em', textTransform: 'uppercase', color: 'rgba(20, 184, 166, 0.8)', marginBottom: 20, textAlign: 'center' }}>
          Selected Work & Production Pipelines
        </p>
        
        <h2 style={{ fontFamily: "'Bebas Neue',sans-serif", fontSize: 'clamp(2.5rem,7vw,5rem)', color: '#fff', textAlign: 'center', marginBottom: 70, letterSpacing: '0.01em' }}>
          Featured Projects
        </h2>
        
        {/* RESPONSIVE DISPLAY GRID */}
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
                {/* 100% SECURE IMAGE BOX WRAPPER */}
                <div style={{ position: 'relative', width: '100%', height: '190px', overflow: 'hidden', borderRadius: 12, marginBottom: 24, border: '1px solid rgba(255,255,255,0.05)', background: '#050508' }}>
                  <Image 
                    src={proj.imgUrl} 
                    alt={proj.title} 
                    fill
                    style={{ objectFit: 'cover', opacity: 0.78 }}
                    unoptimized
                  />
                </div>

                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 14 }}>
                  <p style={{ fontSize: 8.5, letterSpacing: '0.2em', textTransform: 'uppercase', color: proj.tagColor, margin: 0, fontWeight: 'bold' }}>
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

              {/* ACTION TRIGGER BUTTON */}
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
                  background

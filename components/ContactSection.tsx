'use client'
import { useState, useEffect } from 'react'

// ==========================================================================
// 🎯 CONTACTS DATA ARRAY (INTEGRATED FROM YOUR INJECTED CODE PARAMS)
// ==========================================================================
const CONTACTS = [
  {
    label: 'Email',
    value: 'kartikraj898708@gmail.com',
    href: 'mailto:kartikraj898708@gmail.com',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="4" width="20" height="16" rx="2"/>
        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
      </svg>
    ),
    accentColor: '#ff8c42'
  },
  {
    label: 'WhatsApp',
    value: '+91 8987080306',
    href: 'https://wa.me/918987080306',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/>
      </svg>
    ),
    accentColor: '#25d366'
  },
  {
    label: 'LinkedIn',
    value: 'linkedin.com/in/kartik-raj-a6797927b',
    href: 'https://www.linkedin.com/in/kartik-raj-a6797927b/',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
      </svg>
    ),
    accentColor: '#00a0dc'
  },
  {
    label: 'GitHub',
    value: 'github.com/Kartikraj27',
    href: 'https://github.com/Kartikraj27',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
      </svg>
    ),
    accentColor: '#ffffff'
  },
]

export default function ContactSection() {
  const [visitCount, setVisitCount] = useState<number>(0)

  useEffect(() => {
    // 📊 Browser Safe Persistent Local Storage Mechanism
    const savedVisits = localStorage.getItem('kartik_portfolio_visits')
    let currentVisits = savedVisits ? parseInt(savedVisits, 10) : 0
    
    // Session state block tracking parameter to prevent duplicate count on fast layout re-renders
    const isSessionActive = sessionStorage.getItem('kartik_session_tracked')
    
    if (!isSessionActive) {
      currentVisits += 1
      localStorage.setItem('kartik_portfolio_visits', currentVisits.toString())
      sessionStorage.setItem('kartik_session_tracked', 'true')
    }
    
    setVisitCount(currentVisits)
  }, [])

  return (
    <section 
      id="contact" 
      style={{
        minHeight: '100vh', 
        background: '#03020a', 
        display: 'flex',
        flexDirection: 'column', 
        alignItems: 'center', 
        justifyContent: 'center',
        padding: '120px 40px 140px 40px', // Extra bottom spacing map over counter layout
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      {/* 🛠️ #AAVFX 4K COLORFUL SHINING WAVING STRIPS LIVE ENGINE */}
      <style>{`
        /* 🎨 Full Container Grid Sheet */
        .aavfx-strips-canvas {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: 0;
          pointer-events: none;
          overflow: hidden;
        }

        /* 🌊 Base Shining Strip Setup */
        .shining-strip {
          position: absolute;
          top: -20%;
          left: -30%;
          width: 160%;
          height: 140%;
          background-repeat: no-repeat;
          background-size: cover;
          will-change: transform;
          mix-blend-mode: screen;
          filter: blur(1px);
        }

        /* 💡 Strip 1: Neon Pink & Purple Velvet Strips Curve */
        .strip-pink-glow {
          background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 900" preserveAspectRatio="none"><path d="M-100,200 C300,500 800,100 1200,600 C1400,750 1600,400 1800,300 L1800,900 L-100,900 Z" fill="none" stroke="%23ff007f" stroke-width="12" stroke-dasharray="40,20" opacity="0.22"/><path d="M-50,250 C350,550 850,150 1250,650" fill="none" stroke="%237000ff" stroke-width="6" opacity="0.3"/></svg>');
          animation: aavfxStripMotion 26s ease-in-out infinite alternate;
        }

        /* 💡 Strip 2: Electric Cyan & Mint Green Shining Vectors */
        .strip-cyan-glow {
          background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 900" preserveAspectRatio="none"><path d="M-100,600 C400,200 700,800 1100,300 C1400,100 1600,500 1800,200" fill="none" stroke="%2300f2ff" stroke-width="10" stroke-dasharray="15,15" opacity="0.25"/><path d="M-80,620 C420,220 720,820 1120,320" fill="none" stroke="%2338bdf8" stroke-width="4" opacity="0.2"/></svg>');
          animation: aavfxStripMotionInverse 20s linear infinite;
        }

        /* 💡 Strip 3: Bright Tangerine Amber & Gold Waves */
        .strip-gold-glow {
          background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 900" preserveAspectRatio="none"><path d="M-100,400 C200,100 600,600 1000,200 C1300,50 1600,300 1800,100" fill="none" stroke="%23ff8c42" stroke-width="8" stroke-dasharray="50,30" opacity="0.2"/></svg>');
          animation: aavfxStripMotion 32s cubic-bezier(0.455, 0.03, 0.515, 0.955) infinite;
        }

        /* ⚙️ 2160p Cinematic Displacement Wave Keyframes */
        @keyframes aavfxStripMotion {
          0% { transform: translate3d(0, 0, 0) scale(1) rotate(1deg); }
          50% { transform: translate3d(-5%, -40px, 0) scale(1.05) rotate(-1deg); }
          100% { transform: translate3d(-10%, 20px, 0) scale(1) rotate(1deg); }
        }

        @keyframes aavfxStripMotionInverse {
          0% { transform: translate3d(-10%, 0, 0) scale(1.05) rotate(-2deg); }
          50% { transform: translate3d(-5%, 50px, 0) scale(0.98) rotate(0deg); }
          100% { transform: translate3d(0, 0, 0) scale(1.05) rotate(-2deg); }
        }

        /* ✨ HIGH END SPECTRAL AMBIENT OVERLAY */
        .aavfx-spectral-backlight {
          position: absolute;
          top: 20%;
          left: 10%;
          width: 80%;
          height: 60%;
          background: radial-gradient(circle, rgba(255, 140, 66, 0.08) 0%, rgba(255, 0, 127, 0.05) 40%, transparent 75%);
          z-index: 0;
          pointer-events: none;
          filter: blur(90px);
        }
      `}</style>

      {/* 🌊 VISUAL BACKGROUND STRIPS ENGINE LAYER */}
      <div className="aavfx-strips-canvas">
        <div className="shining-strip strip-pink-glow"></div>
        <div className="shining-strip strip-cyan-glow"></div>
        <div className="shining-strip strip-gold-glow"></div>
      </div>
      <div className="aavfx-spectral-backlight"></div>

      {/* 🎯 OVERLAY CONTENT ARCHITECTURE INTERFACE */}
      <div style={{ position: 'relative', zIndex: 1, width: '100%', maxWidth: 950 }}>
        
        {/* SUBTITLE */}
        <p style={{ fontSize: 10, letterSpacing: '0.42em', textTransform: 'uppercase', color: '#ff8c42', marginBottom: 20, fontWeight: 'bold', textShadow: '0 0 15px rgba(255,140,66,0.5)' }}>
          Let's Work Together // Interface Node
        </p>
        
        {/* HEADER */}
        <h2 style={{ fontFamily: "'Bebas Neue',sans-serif", fontSize: 'clamp(2.8rem,8vw,5.5rem)', color: '#fff', marginBottom: 16, letterSpacing: '0.01em', textShadow: '0 5px 30px rgba(0,0,0,0.8)' }}>
          Get In Touch
        </h2>
        
        {/* CAPTION */}
        <p style={{ color: 'rgba(255,255,255,0.45)', fontSize: 14, letterSpacing: '0.05em', marginBottom: 65, fontFamily: 'monospace' }}>
          Available for freelance & full-time opportunities
        </p>

        {/* CONTACT CARDS GRID INTERFACE */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(210px, 1fr))',
          gap: 20, 
          width: '100%'
        }}>
          {CONTACTS.map((c) => (
            <a
              key={c.label}
              href={c.href}
              target={c.label !== 'Email' ? '_blank' : undefined}
              rel="noopener noreferrer"
              style={{
                display: 'flex', 
                flexDirection: 'column', 
                alignItems: 'center',
                gap: 16, 
                padding: '36px 24px',
                border: '1px solid rgba(255,255,255,0.07)',
                borderRadius: 20,
                background: 'rgba(6, 4, 18, 0.45)',
                backdropFilter: 'blur(35px)',
                color: '#fff', 
                textDecoration: 'none',
                transition: 'border-color 0.4s cubic-bezier(0.16, 1, 0.3, 1), background 0.4s, transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.4s',
                boxShadow: '0 20px 45px -15px rgba(0,0,0,0.6)'
              }}
              onMouseEnter={e => {
                const el = e.currentTarget
                el.style.borderColor = c.accentColor
                el.style.background = `linear-gradient(145deg, rgba(6,4,18,0.6), ${c.accentColor}0a)`
                el.style.transform = 'translateY(-8px)'
                el.style.boxShadow = `0 15px 35px -10px ${c.accentColor}35`
              }}
              onMouseLeave={e => {
                const el = e.currentTarget
                el.style.borderColor = 'rgba(255,255,255,0.07)'
                el.style.background = 'rgba(6, 4, 18, 0.45)'
                el.style.transform = 'translateY(0)'
                el.style.boxShadow = '0 20px 45px -15px rgba(0,0,0,0.6)'
              }}
            >
              <div style={{
                width: 54, 
                height: 54, 
                borderRadius: '50%',
                background: 'rgba(255,255,255,0.02)',
                border: '1px solid rgba(255,255,255,0.08)',
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center',
                color: '#fff',
                transition: 'transform 0.3s ease, color 0.3s'
              }}
              className="icon-wrapper"
              onMouseEnter={e => {
                e.currentTarget.style.color = c.accentColor
                e.currentTarget.style.transform = 'scale(1.1)'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.color = '#fff'
                e.currentTarget.style.transform = 'scale(1)'
              }}
              >
                {c.icon}
              </div>

              <div>
                <p style={{ fontSize: 9, letterSpacing: '0.32em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.3)', marginBottom: 8, fontWeight: 'bold' }}>
                  {c.label}
                </p>
                <p style={{ fontSize: 12.5, color: 'rgba(255,255,255,0.7)', wordBreak: 'break-all', fontFamily: 'monospace' }}>
                  {c.value}
                </p>
              </div>
            </a>
          ))}
        </div>

        {/* ========================================================================== */}
        {/* 📊 INTEGRATED PREMIUM VISITOR ANALYTICS NODE (Sabse Niche Wala Slide Matrix) */}
        {/* ========================================================================== */}
        <div style={{ 
          marginTop: '70px', 
          display: 'inline-flex', 
          alignItems: 'center', 
          gap: '12px', 
          background: 'rgba(6, 4, 18, 0.6)', 
          border: '1px solid rgba(255, 255, 255, 0.05)', 
          backdropFilter: 'blur(20px)',
          padding: '12px 24px', 
          borderRadius: '30px',
          boxShadow: '0 10px 30px rgba(0,0,0,0.4)',
          transition: 'border-color 0.3s'
        }}
        onMouseEnter={e => e.currentTarget.style.borderColor = 'rgba(255, 140, 66, 0.3)'}
        onMouseLeave={e => e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.05)'}
        >
          <span style={{ 
            width: '8px', 
            height: '8px', 
            background: '#ff8c42', 
            borderRadius: '50%', 
            boxShadow: '0 0 10px #ff8c42', 
            display: 'inline-block' 
          }}></span>
          <span style={{ fontSize: '12px', color: 'rgba(255,255,255,0.5)', fontFamily: 'monospace', letterSpacing: '0.1em' }}>
            TOTAL SYSTEM VISITS : <strong style={{ color: '#fff', fontSize: '14px', fontFamily: 'monospace' }}>{visitCount}</strong>
          </span>
        </div>

      </div>
    </section>
  )
}

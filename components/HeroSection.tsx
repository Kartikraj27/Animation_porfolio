'use client'
import { useEffect, useRef, useState } from 'react'
import dynamic from 'next/dynamic'
import styles from './HeroSection.module.css'

const CinematicLayer = dynamic(() => import('./CinematicLayer'), { ssr: false })

const NAV = [
  { label: 'About',    href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact',  href: '#contact' },
]

export default function HeroSection() {
  const sectionRef  = useRef<HTMLElement>(null)
  const videoRef    = useRef<HTMLVideoElement>(null)
  const bgVideoRef  = useRef<HTMLVideoElement>(null)
  const contentRef  = useRef<HTMLDivElement>(null)

  const [muted,         setMuted]         = useState(true)
  const [paused,        setPaused]        = useState(false)
  const [showHint,      setShowHint]      = useState(true)
  const [gsapReady,     setGsapReady]     = useState(false)

  /* ── GSAP entrance ── */
  useEffect(() => {
    let ctx: any
    import('gsap').then(({ gsap }) => {
      ctx = gsap.context(() => {
        const tl = gsap.timeline({ delay: 0.3 })
        tl.from(`.${styles.nav}`,      { y: -28, opacity: 0, duration: 1,   ease: 'power3.out' })
          .from(`.${styles.tagline}`,  { y:  32, opacity: 0, duration: 0.9, ease: 'power3.out' }, '-=0.5')
          .from(`.${styles.name1}`,    { y:  70, opacity: 0, duration: 1.1, ease: 'power3.out' }, '-=0.65')
          .from(`.${styles.name2}`,    { y:  70, opacity: 0, duration: 1.1, ease: 'power3.out' }, '-=0.82')
          .from(`.${styles.subtitle}`, { y:  22, opacity: 0, duration: 0.9, ease: 'power3.out' }, '-=0.55')
          .from(`.${styles.bottom}`,   { y:  22, opacity: 0, duration: 0.8, ease: 'power3.out' }, '-=0.45')
      }, contentRef)
      setGsapReady(true)
    })
    return () => ctx?.revert()
  }, [])

  /* ── Auto-hide sound hint ── */
  useEffect(() => {
    const t = setTimeout(() => setShowHint(false), 5000)
    return () => clearTimeout(t)
  }, [])

  /* ── Auto-mute when scrolled away ── */
  useEffect(() => {
    const el = sectionRef.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([e]) => { if (!e.isIntersecting && videoRef.current) { videoRef.current.muted = true; setMuted(true) } },
      { threshold: 0, rootMargin: '-50% 0px 0px 0px' }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  /* ── Scroll snap on first wheel/key ── */
  useEffect(() => {
    let fired = false
    const go = () => { if (fired) return; fired = true; document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' }) }
    const onWheel = (e: WheelEvent) => { if (!fired && e.deltaY > 0 && window.scrollY < 30) { e.preventDefault(); go() } }
    const onKey   = (e: KeyboardEvent) => { if (!fired && window.scrollY < 30 && ['ArrowDown','PageDown',' '].includes(e.key)) { e.preventDefault(); go() } }
    window.addEventListener('wheel', onWheel, { passive: false })
    window.addEventListener('keydown', onKey)
    return () => { window.removeEventListener('wheel', onWheel); window.removeEventListener('keydown', onKey) }
  }, [])

  const toggleMute = () => {
    const v = videoRef.current; if (!v) return
    v.muted = !v.muted; setMuted(v.muted); setShowHint(false)
  }

  const togglePlay = () => {
    const v = videoRef.current, bg = bgVideoRef.current; if (!v) return
    if (v.paused) { v.play(); bg?.play(); setPaused(false) }
    else          { v.pause(); bg?.pause(); setPaused(true) }
  }

  return (
    <section ref={sectionRef} className={styles.hero}>

      {/* ── Ambient blurred BG video ── */}
      <video ref={bgVideoRef} autoPlay unmuted loop playsInline preload="auto" className={styles.bgVideo}>
        <source src="/intro.mp4" type="video/mp4" />
      </video>

      {/* ── Foreground video ── */}
      <video ref={videoRef} autoPlay unmuted loop playsInline preload="auto" className={styles.fgVideo}>
        <source src="/intro.mp4" type="video/mp4" />
      </video>

      {/* ── Cinematic gradient overlays ── */}
      <div className={styles.gradH} />
      <div className={styles.gradV} />

      {/* ── Three.js bokeh layer ── */}
      <CinematicLayer />

      {/* ── All content ── */}
      <div ref={contentRef} className={styles.content}>

        {/* Nav */}
        <nav className={styles.nav}>
          <ul className={styles.navLinks}>
            {NAV.map(l => (
              <li key={l.label}>
                <a href={l.href} className={styles.navLink}>{l.label}</a>
              </li>
            ))}
          </ul>
          <a href="#contact" className={styles.emailBtn}>Email me</a>
        </nav>

        {/* Hero text */}
        <div className={styles.textWrap}>
          <p className={styles.tagline}>Portfolio · 2026</p>
          <h1 className={styles.nameBlock}>
            <span className={styles.name1}>Kartik</span>
            <span className={styles.name2}>Raj</span>
          </h1>
          <p className={styles.subtitle}>Frontend Developer · Data Analyst </p>
        </div>

        {/* Bottom bar */}
        <div className={styles.bottom}>

          {/* Scroll indicator */}
          <a href="#about" className={styles.scrollBtn} aria-label="Scroll down">
            <span className={styles.scrollLabel}>Scroll</span>
            <div className={styles.scrollTrack}>
              <span className={styles.scrollThumb} />
            </div>
          </a>

          {/* Controls */}
          <div className={styles.controls}>
            {showHint && <span className={styles.soundHint}>Tap for sound</span>}

            <button onClick={togglePlay} className={styles.glassBtn} aria-label={paused ? 'Play' : 'Pause'}>
              {paused
                ? <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><polygon points="5 3 19 12 5 21"/></svg>
                : <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><rect x="6" y="4" width="4" height="16"/><rect x="14" y="4" width="4" height="16"/></svg>
              }
            </button>

            <button onClick={toggleMute} className={styles.glassBtn} aria-label={muted ? 'Unmute' : 'Mute'}>
              {muted
                ? <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><line x1="23" y1="9" x2="17" y2="15"/><line x1="17" y1="9" x2="23" y2="15"/></svg>
                : <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"/></svg>
              }
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

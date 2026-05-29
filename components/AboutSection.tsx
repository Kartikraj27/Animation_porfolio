'use client'
export default function AboutSection() {
  return (
    <section id="about" style={{
      minHeight: '100vh', background: '#0a0a0a', display: 'flex',
      alignItems: 'center', justifyContent: 'center', padding: '80px 40px',
    }}>
      <div style={{ maxWidth: 800, textAlign: 'center' }}>
        <p style={{ fontSize: 10, letterSpacing: '0.38em', textTransform: 'uppercase', color: 'rgba(255,140,66,0.8)', marginBottom: 24 }}>
          About Me
        </p>
        <h2 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 'clamp(2.5rem,7vw,5.5rem)', color: '#fff', lineHeight: 0.9, marginBottom: 32 }}>
          Frontend Developer | Data Analyst
        </h2>
        <p style={{ fontSize: 16, lineHeight: 1.8, color: 'rgba(255,255,255,0.6)', fontWeight: 300 }}>
         I’m a Frontend Developer & Data Analyst passionate about building modern, responsive, and user-focused web experiences.
          Blending clean UI development with data-driven insights to create impactful digital solutions.
        </p>
      </div>
    </section>
  )
}

'use client'
export default function ContactSection() {
  return (
    <section id="contact" style={{
      minHeight: '60vh', background: '#000', display: 'flex',
      flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
      padding: '100px 40px', textAlign: 'center',
    }}>
      <p style={{ fontSize: 10, letterSpacing: '0.38em', textTransform: 'uppercase', color: 'rgba(255,140,66,0.8)', marginBottom: 20 }}>
        Let's Work Together
      </p>
      <h2 style={{ fontFamily: "'Bebas Neue',sans-serif", fontSize: 'clamp(2.5rem,7vw,5rem)', color: '#fff', marginBottom: 40 }}>
        Get In Touch
      </h2>
      <a href="mailto:your@email.com" style={{
        display: 'inline-flex', alignItems: 'center', padding: '16px 40px',
        borderRadius: 100, border: '1px solid rgba(255,140,66,0.4)',
        background: 'rgba(255,140,66,0.1)', color: '#fff', fontSize: 12,
        letterSpacing: '0.22em', textTransform: 'uppercase', textDecoration: 'none',
        transition: 'background 0.3s, transform 0.3s',
      }}>
        kartikraj898708@email.com
      </a>
    </section>
  )
}

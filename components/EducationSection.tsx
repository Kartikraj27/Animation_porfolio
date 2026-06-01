'My Education'
const EDUCATION = [
  { title: 'Bachlor of Technology', desc: 'Government Engineering College, Vaisali', tag: '2022-2026' },
  { title: 'Intermidiate',     desc: 'M.H.S.High School, Patna',  tag: '2020-2022' },
  { title: 'Matriculation',       desc: 'Doon Senior Secondary School, Muzaffarpur',    tag: '2018-2020' },
]

export default function EducationSection() {
  return (
    <section id="education" style={{ minHeight: '100vh', background: '#060606', padding: '100px 40px' }}>
      <p style={{ fontSize: 10, letterSpacing: '0.38em', textTransform: 'uppercase', color: 'rgba(255,140,66,0.8)', marginBottom: 20, textAlign: 'center' }}>
        Selected Work
      </p>
      <h2 style={{ fontFamily: "'Bebas Neue',sans-serif", fontSize: 'clamp(2.5rem,7vw,5rem)', color: '#fff', textAlign: 'center', marginBottom: 64 }}>
        Education
      </h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(280px,1fr))', gap: 24, maxWidth: 1100, margin: '0 auto' }}>
        {EDUCATION.map(e => (
          <div key={p.title} style={{
            padding: '40px 32px', border: '1px solid rgba(255,255,255,0.08)',
            borderRadius: 16, background: 'rgba(255,255,255,0.03)',
            backdropFilter: 'blur(10px)', transition: 'border-color 0.3s',
          }}>
            <p style={{ fontSize: 9, letterSpacing: '0.3em', textTransform: 'uppercase', color: 'rgba(255,140,66,0.7)', marginBottom: 14 }}>{p.tag}</p>
            <h3 style={{ fontFamily: "'Bebas Neue',sans-serif", fontSize: '2rem', color: '#fff', marginBottom: 12 }}>{p.title}</h3>
            <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.55)', lineHeight: 1.7 }}>{p.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

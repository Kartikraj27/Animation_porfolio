'use client'
import Image from 'next/image'

const EDUCATION = [
  {
    title: 'Bachelor of Technology (B.Tech)',
    desc: 'Specialized in computer engineering modules including deep analytics, structural algorithms, and highly distributed web applications. Actively focusing on modern structural development methodologies.',
    tag: 'Computer Science & Engineering',
    institution: 'Government Engineering College, Vaishali',
    logoUrl: 'https://www.gecvaishali.ac.in/wp-content/uploads/2026/03/logo-1.png',
    academicYear: '2022 - 2026'
  },
  {
    title: 'Higher Secondary Schooling (12th / Intermediate)',
    desc: 'Completed core higher secondary curriculum with a primary concentration in Science fields (Physics, Chemistry, Mathematics). Developed analytical baseline and logical troubleshooting techniques.',
    tag: 'PCM / Science Track',
    institution: 'Mahant Hanuman Sharan Seniour Higher Secondary School, Patna', // <--- Yahan apna School Name aur City badal lijiye
    logoUrl: 'https://www.bing.com/images/search?view=detailV2&ccid=KmrLpH8I&id=B1B383CD22AB4E497D25030069A0CCFFBC3C6E3B&thid=OIP.KmrLpH8IxpIF61hFYmzo8QHaEK&mediaurl=https%3A%2F%2Fi.ytimg.com%2Fvi%2FC9IDqVLJD9M%2Fmaxresdefault.jpg%3Fsqp%3D-oaymwEoCIAKENAF8quKqQMcGADwAQH4Ac4FgAKACooCDAgAEAEYciBFKDkwDw%3D%3D%26rs%3DAOn4CLARSj7XZ6zJUfhUY55RJomdlueK3g&exph=720&expw=1280&q=M.M.H.S.High+School%2CMainpura%2C+Patna&ck=19F4AB388F92443BE9BEB6064814523D&selectedIndex=0&itb=0&cw=1375&ch=659&ajaxhist=0&ajaxserp=0&shtc=0&shth=OIP.KmrLpH8IxpIF61hFYmzo8QHaEK&shsc=idp&form=EX0050&shid=bc28675c-f2fa-4bb7-8d60-2a37fdae2526&shtp=GetUrl&shtk=TSBIIFMgSElHSCBTQ0hPT0wgUkFKQVBVUiAsIE1BSU5QVVJBICwgUEFUTkEgLCBNYWhhbnQgSGFudW1hbiBTYXJhbiAuLi4%3D&shdk=Rm91bmQgb24gQmluZyBmcm9tIHd3dy55b3V0dWJlLmNvbQ%3D%3D&shhk=N42fBuGFLozfQSR3TSVjJOYZSnt8GE8AN2%2FP54IwzEY%3D', // Default beautiful fallback icon/logo placeholder
    academicYear: '2020 - 2022'
  },
  {
    title: 'Higher Secondary Schooling (10th / Matriculation)',
    desc: 'Completed secondary education focusing on foundational subjects including Mathematics, Science, and Social Studies. Cultivated core analytical abilities and problem-solving fundamentals.',
    tag: 'General Secondary Education',
    institution: 'Doon senior secondary school,Muzaffarpur, Bihar', // <--- Yahan apna School Name aur City badal lijiye
    logoUrl: 'https://sites.google.com/view/doon-sen-sec-school/home?authuser=0', // Default beautiful fallback icon/logo placeholder
    academicYear: '2018 - 2020'
  }
]

export default function EducationSection() {
  return (
    <section id="education" style={{ minHeight: '80vh', background: '#060606', padding: '100px 40px', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
      {/* Subtitle matching projects style */}
      <p style={{ fontSize: 10, letterSpacing: '0.38em', textTransform: 'uppercase', color: 'rgba(255,140,66,0.8)', marginBottom: 20, textAlign: 'center' }}>
        Academic Journey
      </p>
      
      {/* Title with Bebas Neue font */}
      <h2 style={{ fontFamily: "'Bebas Neue',sans-serif", fontSize: 'clamp(2.5rem,7vw,5rem)', color: '#fff', textAlign: 'center', marginBottom: 64 }}>
        Education
      </h2>
      
      {/* Grid container mirroring projects */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(320px,1fr))', gap: 24, maxWidth: 1100, margin: '0 auto' }}>
        {EDUCATION.map((edu, index) => (
          <div key={index} style={{
            padding: '40px 32px', border: '1px solid rgba(255,255,255,0.08)',
            borderRadius: 16, background: 'rgba(255,255,255,0.03)',
            backdropFilter: 'blur(10px)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between'
          }}>
            <div>
              {/* Top row showing Branch Tag & Academic Year */}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 10, marginBottom: 14 }}>
                <p style={{ fontSize: 9, letterSpacing: '0.3em', textTransform: 'uppercase', color: 'rgba(255,140,66,0.7)', margin: 0 }}>
                  {edu.tag}
                </p>
                <span style={{ fontSize: 10, fontFamily: 'monospace', color: 'rgba(255,255,255,0.3)' }}>
                  {edu.academicYear}
                </span>
              </div>

              {/* Degree/Certificate Title with Bebas Neue font */}
              <h3 style={{ fontFamily: "'Bebas Neue',sans-serif", fontSize: '2.2rem', color: '#fff', marginBottom: 16, letterSpacing: '0.02em', lineHeight: 1.1 }}>
                {edu.title}
              </h3>

              {/* College/School Branding Row: Logo + Institution Name inline */}
              <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 18, padding: '12px', background: 'rgba(0,0,0,0.2)', borderRadius: 12, border: '1px solid rgba(255,255,255,0.02)' }}>
                <div style={{ position: 'relative', width: 44, height: 44, flexShrink: 0, overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: 6, background: 'rgba(255,255,255,0.02)' }}>
                  <Image 
                    src={edu.logoUrl} 
                    alt="Institution Logo" 
                    width={44} 
                    height={44} 
                    style={{ objectFit: 'contain' }}
                    priority={index === 0}
                  />
                </div>
                <h4 style={{ fontSize: 13, fontWeight: 500, color: 'rgba(255,255,255,0.85)', lineHeight: 1.4, margin: 0, flex: 1 }}>
                  {edu.institution}
                </h4>
              </div>

              {/* Description matching project font-size and color opacity */}
              <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.55)', lineHeight: 1.7, margin: 0 }}>
                {edu.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

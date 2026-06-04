import dynamic from 'next/dynamic'
import HeroSection from '@/components/HeroSection'
import AboutSection from '@/components/AboutSection'
import Education from '@/components/Education'
import ProjectsSection from '@/components/ProjectsSection'
import CertificatesSection from '@/components/CertificatesSection'
import ContactSection from '@/components/ContactSection'

// Disable SSR for Window-dependent interactive vectors safely
const CinematicLayer = dynamic(() => import('@/components/CinematicLayer'), { ssr: false })
const PortfolioChatbot = dynamic(() => import('@/components/PortfolioChatbot'), { ssr: false })

export default function Home() {
  return (
    <main style={{ position: 'relative', background: '#03050c', minHeight: '100vh', overflowX: 'hidden', fontFamily: 'sans-serif' }}>
      {/* Visual Overlay Nodes */}
      <CinematicLayer />

      {/* Main Structural Portfolio Grid */}
      <div style={{ position: 'relative', zIndex: 2 }}>
        <HeroSection />
        <AboutSection />
        <Education />
        <ProjectsSection />
        <CertificatesSection />
        <ContactSection />
      </div>

      {/* Static Floating Chat Actuator Layer */}
      <PortfolioChatbot />
    </main>
  )
}

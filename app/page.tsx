import HeroSection from '@/components/HeroSection'
import AboutSection from '@/components/AboutSection'
import ProjectsSection from '@/components/ProjectsSection'
import EducationSection from '@/components/Education'
import CertificatesSection from '@/components/CertificatesSection' // Newly included honors structure
import ContactSection from '@/components/ContactSection'

export default function Home() {
  return (
    <main>
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <EducationSection />
      
      {/* Certificates & Achievements follows immediately after education grid sequence */}
      <CertificatesSection />
      
      <ContactSection />
    </main>
  )
}

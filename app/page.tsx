import HeroSection from '@/components/HeroSection'
import AboutSection from '@/components/AboutSection'
import ProjectsSection from '@/components/ProjectsSection'
import EducationSection from '@/components/EducationSection' // Default component matching import structure
import ContactSection from '@/components/ContactSection'

export default function Home() {
  return (
    <main>
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      
      {/* Education block rendered smoothly using the exact same style system */}
      <EducationSection />
      
      <ContactSection />
    </main>
  )
}

import HeroSection from '@/components/HeroSection'
import AboutSection from '@/components/AboutSection'
import ProjectsSection from '@/components/ProjectsSection'
import EducationSection from '@/components/EducationSection' // Exact same naming structure matching projects
import ContactSection from '@/components/ContactSection'

export default function Home() {
  return (
    <main>
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      
      {/* Education section rendered here in perfect sequence */}
      <EducationSection />
      
      <ContactSection />
    </main>
  )
}

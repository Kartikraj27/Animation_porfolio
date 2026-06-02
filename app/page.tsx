import HeroSection from '@/components/HeroSection'
import AboutSection from '@/components/AboutSection'
import ProjectsSection from '@/components/ProjectsSection'
import EducationSection from '@/components/Education' // Maps directly to components/Education.tsx
import ContactSection from '@/components/ContactSection'

export default function Home() {
  return (
    <main>
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      
      {/* Education block rendered smoothly right after projects */}
      <EducationSection />
      
      <ContactSection />
    </main>
  )
}

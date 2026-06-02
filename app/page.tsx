import HeroSection from '@/components/HeroSection'
import AboutSection from '@/components/AboutSection'
import EducationSection from '@/components/EducationSection'
import ProjectsSection from '@/components/ProjectsSection'
import ContactSection from '@/components/ContactSection'

export default function Home() {
  return (
    <main>
      <HeroSection />
      <AboutSection />
      <EducationSection/>
      <ProjectsSection />
      <ContactSection />
    </main>
  )
}

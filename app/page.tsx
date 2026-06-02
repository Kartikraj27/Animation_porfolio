import HeroSection from '@/components/HeroSection'
import AboutSection from '@/components/AboutSection'
import ProjectsSection from '@/components/ProjectsSection'
import EducationSection from '../components/Education' // Humne relative path use kiya jo 100% resolve ho jayega
import ContactSection from '@/components/ContactSection'

export default function Home() {
  return (
    <main className="bg-[#0a0a0a] min-h-screen overflow-hidden">
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      
      <EducationSection /> 
      
      <ContactSection />
    </main>
  )
}

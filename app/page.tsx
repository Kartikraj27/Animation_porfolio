import HeroSection from '@/components/HeroSection'
import AboutSection from '@/components/AboutSection'
import ProjectsSection from '@/components/ProjectsSection'
import EducationSection from '@/components/Education' // Default import clear path ke sath
import ContactSection from '@/components/ContactSection'

export default function Home() {
  return (
    <main className="bg-[#0a0a0a] min-h-screen overflow-hidden">
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      
      {/* Education Section ab bina kisi crash ke Projects ke baad visible hoga */}
      <EducationSection /> 
      
      <ContactSection />
    </main>
  )
}

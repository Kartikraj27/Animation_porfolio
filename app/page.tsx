import HeroSection from '@/components/HeroSection'
import AboutSection from '@/components/AboutSection'
import ProjectsSection from '@/components/ProjectsSection'
import { Education } from '@/components/Education' // 1. Humne yahan Education ko import kiya
import ContactSection from '@/components/ContactSection'

export default function Home() {
  return (
    <main>
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      
      <Education /> {/* 2. Humne yahan Education section ko display ke liye rakh diya */}
      
      <ContactSection />
    </main>
  )
}

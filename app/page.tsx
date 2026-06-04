// app/page.tsx
import HeroSection from '@/components/Hero'          // Aapka existing component
import ProjectsSection from '@/components/Projects'  // Aapka existing component
import PortfolioChatbot from '@/components/PortfolioChatbot' // <--- 1. CHATBOT IMPORT KAREIN

export default function Home() {
  return (
    <main style={{ position: 'relative', minHeight: '100vh' }}>
      {/* Aapke portfolio ke baaki saare sections yahan honge */}
      <HeroSection />
      <ProjectsSection />
      
      {/* 2. CHATBOT KO BILKUL AAKHIRI ME RAKHEIN */}
      <PortfolioChatbot />
    </main>
  )
}

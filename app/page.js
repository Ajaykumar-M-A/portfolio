'use client'

import AboutSection from './components/AboutSection/AboutSection'
import ContactSection from './components/ContactSection/ContactSection'
import EducationSection from './components/EducationSection/EducationSection'
import ExperienceSection from './components/ExperienceSection/ExperienceSection'
import Footer from './components/Footer/Footer'
import HeroSection from './components/HeroSection/HeroSection'
import Navbar from './components/Navbar/Navbar'
import ProjectsSection from './components/ProjectsSection/ProjectsSection'
import ScrollToTop from './components/ScrollToTop/ScrollToTop'
import SkillsSection from './components/SkillsSection/SkillsSection'
import useScrollAnimations from './hooks/useScrollAnimations'

export default function Home() {
  useScrollAnimations()

  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ExperienceSection />
        <ProjectsSection />
        <EducationSection />
        <ContactSection />
      </main>
      <Footer />
      <ScrollToTop />
    </>
  )
}

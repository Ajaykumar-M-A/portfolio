import './globals.css'
import './components/Navbar/Navbar.css'
import './components/HeroSection/HeroSection.css'
import './components/AboutSection/AboutSection.css'
import './components/SkillsSection/SkillsSection.css'
import './components/ExperienceSection/ExperienceSection.css'
import './components/ProjectsSection/ProjectsSection.css'
import './components/EducationSection/EducationSection.css'
import './components/ContactSection/ContactSection.css'
import './components/Footer/Footer.css'
import './components/ScrollToTop/ScrollToTop.css'

export const metadata = {
  title: 'Ajaykumar M A | Full Stack Developer Portfolio',
  description: 'Full Stack Developer portfolio focused on Customer Management, Turf Arena, MERN stack systems, React Native, and responsive product experiences.',
  keywords: ['Full Stack Developer', 'Customer Management', 'Turf Arena', 'MERN Stack', 'React', 'Node.js', 'React Native', 'Kerala'],
  authors: [{ name: 'Ajaykumar M A' }],
  openGraph: {
    title: 'Ajaykumar M A | Full Stack Developer Portfolio',
    description: 'Portfolio highlighting Customer Management, Turf Arena, MERN stack, and mobile-first product delivery.',
    type: 'website',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=Space+Grotesk:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body>{children}</body>
    </html>
  )
}

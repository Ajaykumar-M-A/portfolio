import { useEffect, useState } from 'react'
import { navLinks } from '../../data/portfolioData'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollTo = (id) => {
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: 'smooth' })
    setMobileOpen(false)
  }

  return (
    <>
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`} role="navigation" aria-label="Main navigation">
        <div className="nav-container">
          <a href="#home" className="nav-logo" onClick={(e) => { e.preventDefault(); scrollTo('home') }}>
            Ajay.dev
          </a>
          <ul className="nav-links">
            {navLinks.map(link => (
              <li key={link}>
                <a href={`#${link.toLowerCase()}`} onClick={(e) => { e.preventDefault(); scrollTo(link) }}>
                  {link}
                </a>
              </li>
            ))}
            <li>
              <a
                href="mailto:ajaykumarma007@gmail.com?subject=Opportunity%20from%20Portfolio"
                className="nav-cta"
              >
                Hire Me
              </a>
            </li>
          </ul>
          <button
            className="mobile-menu-btn"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle mobile menu"
            aria-expanded={mobileOpen}
          >
            <span style={{ transform: mobileOpen ? 'rotate(45deg) translateY(7px)' : 'none' }} />
            <span style={{ opacity: mobileOpen ? 0 : 1 }} />
            <span style={{ transform: mobileOpen ? 'rotate(-45deg) translateY(-7px)' : 'none' }} />
          </button>
        </div>
      </nav>
      <div className={`mobile-nav ${mobileOpen ? 'open' : ''}`}>
        {navLinks.map(link => (
          <a key={link} href={`#${link.toLowerCase()}`} onClick={(e) => { e.preventDefault(); scrollTo(link) }}>
            {link}
          </a>
        ))}
        <a href="mailto:ajaykumarma007@gmail.com?subject=Opportunity%20from%20Portfolio" className="mobile-nav-cta">
          Hire Me
        </a>
      </div>
    </>
  )
}

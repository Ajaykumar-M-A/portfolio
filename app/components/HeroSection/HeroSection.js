import { useEffect, useMemo, useState } from 'react'
import { fallingWords } from '../../data/portfolioData'

export default function HeroSection() {
  const [roleIndex, setRoleIndex] = useState(0)
  const roles = useMemo(() => ['Full Stack Developer', 'MERN Stack Builder', 'React Native Developer', 'API Architect'], [])

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex(prev => (prev + 1) % roles.length)
    }, 2400)
    return () => clearInterval(interval)
  }, [roles.length])

  return (
    <section id="home" className="hero">
      <div className="hero-bg" aria-hidden="true">
        <video className="hero-bg-video" autoPlay muted loop playsInline preload="metadata">
          <source src="/bgvideo.mp4" type="video/mp4" />
        </video>
        <div className="hero-video-tint" />
        <div className="hero-photo-backdrop" />
        <div className="hero-grid" />
        <div className="motion-plane plane-one" />
        <div className="motion-plane plane-two" />
        <div className="motion-plane plane-three" />
        <div className="star-field" />
        <div className="falling-text-wall">
          {fallingWords.map((word, index) => (
            <span key={word} style={{ '--fall-index': index }}>{word}</span>
          ))}
        </div>
      </div>

      <div className="hero-content">
        <div className="hero-text">
          <div className="hero-badge">
            <span className="dot" />
            Available for full stack roles
          </div>

          <h1 className="hero-name">
            Ajaykumar <span>M A</span>
          </h1>

          <p className="hero-role">
            I build as a <span className="typed-text">{roles[roleIndex]}</span>
          </p>

          <p className="hero-desc">
            Full Stack Developer from Kerala building customer systems, booking platforms, and mobile-ready
            products with React, Node.js, MongoDB, and React Native. I care about clean flows, secure APIs,
            and interfaces recruiters can understand in seconds.
          </p>

          <div className="hero-actions">
            <a
              href="#projects"
              className="btn-primary"
              onClick={(e) => { e.preventDefault(); document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' }) }}
            >
              Explore Projects
            </a>
            <a
              href="#contact"
              className="btn-secondary"
              onClick={(e) => { e.preventDefault(); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }) }}
            >
              Contact Ajay
            </a>
          </div>

          <div className="hero-stats" aria-label="Portfolio highlights">
            <div className="stat-item">
              <div className="stat-number">1+</div>
              <div className="stat-label">Years Exp.</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">13+</div>
              <div className="stat-label">Repos</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">4</div>
              <div className="stat-label">Projects</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">MERN</div>
              <div className="stat-label">Core Stack</div>
            </div>
          </div>
        </div>

        <div className="hero-visual" aria-label="Developer profile visual">
          <div className="portal-shell">
            <div className="portal-ring ring-one" />
            <div className="portal-ring ring-two" />
            <div className="portal-card">
              <img src="/1E3A0291.JPG" alt="Ajaykumar M A speaking at a professional event" className="profile-image" />
              <div className="portal-scanline" />
            </div>
            <div className="orbit-chip chip-one">React</div>
            <div className="orbit-chip chip-two">Node</div>
            <div className="orbit-chip chip-three">MongoDB</div>
            <div className="orbit-chip chip-four">Native</div>
          </div>
        </div>
      </div>
    </section>
  )
}

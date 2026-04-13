'use client'

import { useState, useEffect, useRef } from 'react'

// ===== DATA =====
const navLinks = ['About', 'Skills', 'Experience', 'Projects', 'Education', 'Contact']

const skills = [
  {
    category: 'Frontend',
    icon: '🎨',
    iconClass: 'frontend',
    tagClass: 'purple',
    tags: ['React.js', 'Next.js', 'TypeScript', 'JavaScript (ES6+)', 'Redux Toolkit', 'RTK Query', 'HTML5', 'CSS3'],
  },
  {
    category: 'Backend',
    icon: '⚙️',
    iconClass: 'backend',
    tagClass: 'pink',
    tags: ['Node.js', 'Express.js', 'RESTful APIs', 'JWT Authentication', 'Python', 'Django REST Framework', 'Daphne', 'ASGI Server', 'WSGI Server'],
  },
  {
    category: 'Mobile',
    icon: '📱',
    iconClass: 'mobile',
    tagClass: 'green',
    tags: ['React Native', 'CLI & Expo', 'Android Deployment', 'Background Services', 'Geolocation'],
  },
  {
    category: 'Database & DevOps',
    icon: '🛠️',
    iconClass: 'devops',
    tagClass: 'cyan',
    tags: ['MongoDB', 'Linux (Ubuntu)', 'VPS Deployment', 'Nginx', 'PM2', 'Git', 'GitHub', 'Postman', 'Agile'],
  },
]

const experiences = [
  {
    title: 'Full Stack Developer',
    company: 'Tungston Labs',
    period: 'Feb 2025 – Present',
    location: 'Kochi, Kerala',
    badge: 'Current',
    bullets: [
      'Developed scalable full-stack applications using MongoDB, Express.js, React, and Node.js (MERN stack)',
      'Designed and optimized RESTful APIs, improving backend performance and data handling efficiency',
      'Built responsive user interfaces using React.js with Redux Toolkit and RTK Query for state management',
      'Developed cross-platform mobile applications using React Native with real-time and geolocation features',
      'Implemented JWT authentication and role-based access control for secure user management',
      'Integrated Razorpay payment gateway for seamless online transactions',
      'Deployed applications on Linux VPS using Nginx and PM2, ensuring high availability and performance',
    ],
  },
  {
    title: 'Full Stack Developer Intern',
    company: 'LogixSpace Technologies Pvt Ltd',
    period: 'Nov 2023 – Sep 2024',
    location: 'Kochi, Kerala',
    badge: 'Internship',
    bullets: [
      'Contributed to development of a production-ready mobile application for student activity management',
      'Assisted in debugging, performance optimization, and feature enhancement',
      'Built and tested backend APIs and frontend components',
    ],
  },
]

const projects = [
  {
    title: 'Safari Web App',
    desc: 'A visually rich HTML-based web application with an immersive safari theme. Features responsive layouts, interactive UI elements, and creative design patterns built with pure web technologies.',
    icon: '🦁',
    iconClass: 'gradient-1',
    githubUrl: 'https://github.com/Ajaykumar-M-A/Safari',
    tech: ['HTML5', 'CSS3', 'JavaScript', 'Responsive Design'],
  },
  {
    title: 'Auction System',
    desc: 'A responsive web-based auction system enabling users to list items, place bids, and manage auctions with a clean, intuitive interface built with HTML and modern web technologies.',
    icon: '🔨',
    iconClass: 'gradient-2',
    githubUrl: 'https://github.com/Ajaykumar-M-A/AUCTION',
    tech: ['HTML5', 'CSS3', 'JavaScript', 'REST API'],
  },
  {
    title: 'Web Scraper',
    desc: 'A powerful Python-based web scraping tool to extract, parse, and store structured data from websites efficiently. Supports multiple output formats and handles dynamic pages.',
    icon: '🕷️',
    iconClass: 'gradient-3',
    githubUrl: 'https://github.com/Ajaykumar-M-A/Webscrap',
    tech: ['Python', 'BeautifulSoup', 'Requests', 'Pandas'],
  },
  {
    title: 'Student App',
    desc: 'A comprehensive student management application built with Python for tracking academic activities, attendance, and performance analytics with a user-friendly backend system.',
    icon: '🎓',
    iconClass: 'gradient-1',
    githubUrl: 'https://github.com/Ajaykumar-M-A/Student_app',
    tech: ['Python', 'Django', 'REST API', 'SQLite'],
  },
]

const education = [
  {
    degree: 'Master of Computer Applications (MCA)',
    institution: 'Marian College Kuttikkanam Autonomous',
    university: 'Mahatma Gandhi University',
    period: '09/2022 – 03/2024',
    location: 'Idukki, Kerala',
    icon: '🎓',
  },
  {
    degree: 'Bachelor of Science (Physics)',
    institution: 'Mahatma Gandhi University',
    university: 'Kottayam, Kerala',
    period: '07/2016 – 03/2019',
    location: 'Kottayam, Kerala',
    icon: '🔬',
  },
]

const certifications = [
  { name: 'Red Hat Enterprise Linux 8 (RHEL 8) – Linux System Administration', icon: '🐧' },
  { name: 'Deep Learning using TensorFlow', icon: '🤖' },
  { name: 'Python for Data Science (NPTEL)', icon: '📊' },
]

// ===== COMPONENTS =====

function Navbar() {
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
            &lt;Ajay /&gt;
          </a>
          <ul className="nav-links">
            {navLinks.map(link => (
              <li key={link}>
                <a
                  href={`#${link.toLowerCase()}`}
                  id={`nav-${link.toLowerCase()}`}
                  onClick={(e) => { e.preventDefault(); scrollTo(link) }}
                >
                  {link}
                </a>
              </li>
            ))}
            <li>
              <a
                href="https://mail.google.com/mail/?view=cm&to=ajaykumarma007@gmail.com&su=Opportunity+from+Portfolio"
                target="_blank"
                rel="noopener noreferrer"
                className="nav-cta"
                id="nav-lets-talk"
              >
                Let&apos;s Talk
              </a>
            </li>
          </ul>
          <button
            className="mobile-menu-btn"
            id="mobile-menu-button"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle mobile menu"
          >
            <span style={{ transform: mobileOpen ? 'rotate(45deg) translateY(7px)' : 'none' }} />
            <span style={{ opacity: mobileOpen ? 0 : 1 }} />
            <span style={{ transform: mobileOpen ? 'rotate(-45deg) translateY(-7px)' : 'none' }} />
          </button>
        </div>
      </nav>
      <div className={`mobile-nav ${mobileOpen ? 'open' : ''}`}>
        {navLinks.map(link => (
          <a
            key={link}
            href={`#${link.toLowerCase()}`}
            onClick={(e) => { e.preventDefault(); scrollTo(link) }}
          >
            {link}
          </a>
        ))}
        <a
          href="https://mail.google.com/mail/?view=cm&to=ajaykumarma007@gmail.com&su=Opportunity+from+Portfolio"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: '#6c63ff', fontWeight: 600 }}
        >
          💬 Let&apos;s Talk
        </a>
      </div>
    </>
  )
}

function HeroSection() {
  const [roleIndex, setRoleIndex] = useState(0)
  const roles = ['Full Stack Developer', 'MERN Stack Expert', 'React Native Dev', 'API Architect']

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex(prev => (prev + 1) % roles.length)
    }, 2500)
    return () => clearInterval(interval)
  }, [])

  return (
    <section id="home" className="hero">
      <div className="hero-bg">
        <div className="hero-grid" />
        <div className="hero-orb hero-orb-1" />
        <div className="hero-orb hero-orb-2" />
        <div className="hero-orb hero-orb-3" />
      </div>

      <div className="hero-content">
        <div className="hero-text">
          <div className="hero-badge">
            <span className="dot" />
            Available for opportunities
          </div>

          <h1 className="hero-name">
            Ajaykumar <span>M A</span>
          </h1>

          <p className="hero-role">
            I&apos;m a <span className="typed-text">{roles[roleIndex]}</span>
          </p>

          <p className="hero-desc">
            Full Stack Developer with 1+ year of professional experience and 6 months internship experience
            building scalable web and mobile applications using the MERN stack. Passionate about
            performance, clean architecture, and user-centric solutions.
          </p>

          <div className="hero-actions">
            <a
              href="#projects"
              className="btn-primary"
              id="hero-view-projects"
              onClick={(e) => { e.preventDefault(); document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' }) }}
            >
              View My Work ✨
            </a>
            <a
              href="#contact"
              className="btn-secondary"
              id="hero-contact"
              onClick={(e) => { e.preventDefault(); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }) }}
            >
              Get In Touch →
            </a>
          </div>

          <div className="hero-stats">
            <div className="stat-item">
              <div className="stat-number">1+</div>
              <div className="stat-label">Years Exp.</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">13+</div>
              <div className="stat-label">Repositories</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">5+</div>
              <div className="stat-label">Tech Stacks</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">3</div>
              <div className="stat-label">Certifications</div>
            </div>
          </div>
        </div>

        <div className="hero-visual">
          <div className="hero-avatar-wrapper">
            <div className="hero-avatar-ring" />
            <div className="hero-avatar-ring-2" />
            <div className="hero-avatar">
              <div className="avatar-inner" style={{ padding: 0 }}>
                <img
                  src="/profile.JPG"
                  alt="Ajaykumar M A - Full Stack Developer"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    objectPosition: 'center top',
                    borderRadius: '50%',
                  }}
                />
              </div>
            </div>
          </div>

          <div className="hero-floating-cards">
            <div className="floating-card">
              <span className="card-icon">⚛️</span>
              <div>
                <div className="card-text">React.js</div>
                <div className="card-sub">Frontend</div>
              </div>
            </div>
            <div className="floating-card">
              <span className="card-icon">🟢</span>
              <div>
                <div className="card-text">Node.js</div>
                <div className="card-sub">Backend</div>
              </div>
              
            </div>
            <div className="floating-card">
              <span className="card-icon">📱</span>
              <div>
                <div className="card-text">React Native</div>
                <div className="card-sub">Mobile</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function AboutSection() {
  return (
    <section id="about">
      <div className="section-container">
        <div className="fade-in">
          <div className="section-label">About Me</div>
          <h2 className="section-title">Building the <span>future</span> with code</h2>
        </div>

        <div className="about-grid">
          <div className="about-content fade-in">
            <p>
              I&apos;m <strong style={{ color: '#fff' }}>Ajaykumar M A</strong>, a passionate Full Stack Developer
              from Kerala, India with 1+ year of professional experience building scalable web and mobile
              applications. Currently working at <strong style={{ color: '#6c63ff' }}>Tungston Labs</strong> in Kochi,
              where I craft end-to-end solutions using the MERN stack.
            </p>
            <p>
              My journey started with a BSc in Physics, transitioned into MCA, and evolved into a
              deep passion for software engineering. I specialize in React.js, Node.js, and React
              Native, with a strong focus on REST API development, authentication systems, and
              cloud deployment.
            </p>
            <p>
              I&apos;m driven by performance optimization and delivering user-centric solutions that
              create real-world impact. When I&apos;m not coding, I&apos;m exploring new technologies and
              contributing to open-source projects.
            </p>

            <div className="about-highlights">
              <div className="highlight-item">
                <div className="highlight-icon">📍</div>
                <span>Kerala, India</span>
              </div>
              <div className="highlight-item">
                <div className="highlight-icon">📧</div>
                <span>ajaykumarma007@gmail.com</span>
              </div>
              <div className="highlight-item">
                <div className="highlight-icon">📞</div>
                <span>+91 9895977148</span>
              </div>
              <div className="highlight-item">
                <div className="highlight-icon">🌐</div>
                <span>English · Malayalam · Hindi</span>
              </div>
            </div>
          </div>

          <div className="about-cards fade-in">
            <div className="about-card">
              <div className="about-card-icon">💼</div>
              <div className="about-card-title">Experience</div>
              <div className="about-card-value">1+ Years</div>
            </div>
            <div className="about-card">
              <div className="about-card-icon">🚀</div>
              <div className="about-card-title">Projects</div>
              <div className="about-card-value">13+</div>
            </div>
            <div className="about-card">
              <div className="about-card-icon">🏆</div>
              <div className="about-card-title">Certifications</div>
              <div className="about-card-value">3</div>
            </div>
            <div className="about-card">
              <div className="about-card-icon">🌟</div>
              <div className="about-card-title">Tech Stacks</div>
              <div className="about-card-value">MERN+</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function SkillsSection() {
  return (
    <section id="skills">
      <div className="section-container">
        <div className="fade-in">
          <div className="section-label">Technical Skills</div>
          <h2 className="section-title">My <span>Tech Stack</span></h2>
          <p className="section-subtitle">
            Proficient across the full development lifecycle — from building beautiful interfaces to architecting robust backends and deploying to production.
          </p>
        </div>

        <div className="skills-grid">
          {skills.map((skill) => (
            <div key={skill.category} className="skill-category fade-in">
              <div className="skill-category-header">
                <div className={`skill-category-icon ${skill.iconClass}`}>{skill.icon}</div>
                <div className="skill-category-name">{skill.category}</div>
              </div>
              <div className="skill-tags">
                {skill.tags.map(tag => (
                  <span key={tag} className={`skill-tag ${skill.tagClass}`}>{tag}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function ExperienceSection() {
  return (
    <section id="experience" className="experience-bg">
      <div className="section-container">
        <div className="fade-in">
          <div className="section-label">Work Experience</div>
          <h2 className="section-title">My <span>Journey</span></h2>
          <p className="section-subtitle">
            A track record of delivering impact at every role — from internship to full-time professional development.
          </p>
        </div>

        <div className="timeline">
          {experiences.map((exp, idx) => (
            <div key={idx} className="timeline-item fade-in">
              <div className="timeline-dot" />
              <div className="timeline-card">
                <div className="timeline-header">
                  <div className="timeline-title">{exp.title}</div>
                  <span className="timeline-badge">{exp.badge}</span>
                </div>
                <div className="timeline-company">🏢 {exp.company}</div>
                <div className="timeline-period">
                  📅 {exp.period} &nbsp;·&nbsp; 📍 {exp.location}
                </div>
                <ul className="timeline-bullets">
                  {exp.bullets.map((bullet, i) => (
                    <li key={i}>{bullet}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function ProjectsSection() {
  return (
    <section id="projects">
      <div className="section-container">
        <div className="fade-in">
          <div className="section-label">Featured Work</div>
          <h2 className="section-title">My <span>Projects</span></h2>
          <p className="section-subtitle">
            A selection of projects I&apos;ve built — from safari web experiences to web scrapers and student management systems.
          </p>
        </div>

        <div className="projects-grid">
          {projects.map((project, idx) => (
            <div key={idx} className="project-card fade-in">
              <div className="project-card-header">
                <div className={`project-icon ${project.iconClass}`}>{project.icon}</div>
                <div className="project-links">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link"
                    id={`project-github-${idx}`}
                    title="View on GitHub"
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.342-3.369-1.342-.454-1.155-1.11-1.463-1.11-1.463-.908-.620.069-.608.069-.608 1.003.070 1.531 1.030 1.531 1.030.892 1.529 2.341 1.087 2.91.831.092-.647.35-1.087.636-1.337-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.268 2.75 1.026A9.578 9.578 0 0112 6.836c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.026 2.747-1.026.546 1.377.202 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.161 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
                    </svg>
                  </a>
                </div>
              </div>
              <div className="project-card-body">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-desc">{project.desc}</p>
                <div className="project-tech">
                  {project.tech.map(t => (
                    <span key={t} className="project-tech-tag">{t}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div style={{ textAlign: 'center', marginTop: '40px' }}>
          <a
            href="https://github.com/Ajaykumar-M-A"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary"
            id="view-all-projects"
          >
            View All on GitHub →
          </a>
        </div>
      </div>
    </section>
  )
}

function EducationSection() {
  return (
    <section id="education" className="education-bg">
      <div className="section-container">
        <div className="fade-in">
          <div className="section-label">Education</div>
          <h2 className="section-title">Academic <span>Background</span></h2>
        </div>

        <div className="education-grid">
          {education.map((edu, idx) => (
            <div key={idx} className="edu-card fade-in">
              <div className="edu-icon">{edu.icon}</div>
              <div className="edu-degree">{edu.degree}</div>
              <div className="edu-institution">{edu.institution}</div>
              {edu.university !== edu.institution && (
                <div className="edu-institution" style={{ color: 'var(--text-secondary)', fontSize: '0.85rem' }}>
                  {edu.university}
                </div>
              )}
              <div className="edu-period">📅 {edu.period}</div>
              <div className="edu-location">📍 {edu.location}</div>
            </div>
          ))}
        </div>

        <div style={{ marginTop: '60px' }}>
          <div className="fade-in">
            <div className="section-label">Certifications</div>
            <h3 className="section-title" style={{ fontSize: '2rem' }}>
              <span>Credentials</span> & Achievements
            </h3>
          </div>
          <div className="certs-grid">
            {certifications.map((cert, idx) => (
              <div key={idx} className="cert-card fade-in">
                <span className="cert-icon">{cert.icon}</span>
                <div className="cert-name">{cert.name}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function ContactSection() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    const { name, email, subject, message } = formData
    const gmailUrl = `https://mail.google.com/mail/?view=cm&to=ajaykumarma007@gmail.com&su=${encodeURIComponent(subject || 'Portfolio Contact - Message from ' + name)}&body=${encodeURIComponent(`Hi Ajaykumar,\n\nMy name is ${name}.\nEmail: ${email}\n\n${message}\n\n-- Sent via your portfolio`)}`
    window.open(gmailUrl, '_blank')
    setSent(true)
    setTimeout(() => setSent(false), 3000)
  }

  return (
    <section id="contact" className="contact-bg">
      <div className="section-container">
        <div className="fade-in">
          <div className="section-label">Get In Touch</div>
          <h2 className="section-title">Let&apos;s <span>Connect</span></h2>
          <p className="section-subtitle">
            I&apos;m actively looking for new opportunities. Whether you have a question or just want to say hi, my inbox is always open!
          </p>
        </div>

        <div className="contact-grid">
          <div className="contact-info fade-in">
            <a href="https://mail.google.com/mail/?view=cm&to=ajaykumarma007@gmail.com" target="_blank" rel="noopener noreferrer" className="contact-item" id="contact-email">
              <div className="contact-item-icon email">📧</div>
              <div>
                <div className="contact-item-label">Email</div>
                <div className="contact-item-value">ajaykumarma007@gmail.com</div>
              </div>
            </a>

            <a href="tel:+919895977148" className="contact-item" id="contact-phone">
              <div className="contact-item-icon phone">📞</div>
              <div>
                <div className="contact-item-label">Phone</div>
                <div className="contact-item-value">+91 9895977148</div>
              </div>
            </a>

            <div className="contact-item" style={{ cursor: 'default' }} id="contact-location">
              <div className="contact-item-icon location">📍</div>
              <div>
                <div className="contact-item-label">Location</div>
                <div className="contact-item-value">Kerala, India</div>
              </div>
            </div>

            <a
              href="https://www.linkedin.com/in/ajaykumarma"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-item"
              id="contact-linkedin"
            >
              <div className="contact-item-icon linkedin">💼</div>
              <div>
                <div className="contact-item-label">LinkedIn</div>
                <div className="contact-item-value">linkedin.com/in/ajaykumarma</div>
              </div>
            </a>

            <a
              href="https://github.com/Ajaykumar-M-A"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-item"
              id="contact-github"
            >
              <div className="contact-item-icon github">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.342-3.369-1.342-.454-1.155-1.11-1.463-1.11-1.463-.908-.620.069-.608.069-.608 1.003.070 1.531 1.030 1.531 1.030.892 1.529 2.341 1.087 2.91.831.092-.647.35-1.087.636-1.337-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.268 2.75 1.026A9.578 9.578 0 0112 6.836c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.026 2.747-1.026.546 1.377.202 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.161 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
                </svg>
              </div>
              <div>
                <div className="contact-item-label">GitHub</div>
                <div className="contact-item-value">github.com/Ajaykumar-M-A</div>
              </div>
            </a>
          </div>

          <div className="contact-form fade-in">
            <div className="form-title">Send a Message</div>
            <div className="form-subtitle">Fill the form below and I&apos;ll get back to you ASAP!</div>

            <form onSubmit={handleSubmit} id="contact-form">
              <div className="form-group">
                <label className="form-label" htmlFor="contact-name">Your Name</label>
                <input
                  type="text"
                  id="contact-name"
                  className="form-input"
                  placeholder="John Doe"
                  value={formData.name}
                  onChange={e => setFormData({ ...formData, name: e.target.value })}
                  required
                />
              </div>
              <div className="form-group">
                <label className="form-label" htmlFor="contact-email-input">Your Email</label>
                <input
                  type="email"
                  id="contact-email-input"
                  className="form-input"
                  placeholder="john@example.com"
                  value={formData.email}
                  onChange={e => setFormData({ ...formData, email: e.target.value })}
                  required
                />
              </div>
              <div className="form-group">
                <label className="form-label" htmlFor="contact-subject">Subject</label>
                <input
                  type="text"
                  id="contact-subject"
                  className="form-input"
                  placeholder="Job Opportunity / Collaboration"
                  value={formData.subject}
                  onChange={e => setFormData({ ...formData, subject: e.target.value })}
                />
              </div>
              <div className="form-group">
                <label className="form-label" htmlFor="contact-message">Message</label>
                <textarea
                  id="contact-message"
                  className="form-textarea"
                  placeholder="Hello Ajaykumar, I'd love to discuss..."
                  value={formData.message}
                  onChange={e => setFormData({ ...formData, message: e.target.value })}
                  required
                />
              </div>
              <button type="submit" className="form-submit" id="contact-submit">
                {sent ? '✅ Opening Email Client...' : '🚀 Send Message'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-logo">&lt;Ajay /&gt;</div>
        <p className="footer-text">
          Crafted with <span>❤️</span> by Ajaykumar M A &nbsp;|&nbsp; Full Stack Developer
        </p>
        <div className="footer-socials">
          <a
            href="https://github.com/Ajaykumar-M-A"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-social"
            id="footer-github"
            title="GitHub Profile"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.342-3.369-1.342-.454-1.155-1.11-1.463-1.11-1.463-.908-.620.069-.608.069-.608 1.003.070 1.531 1.030 1.531 1.030.892 1.529 2.341 1.087 2.91.831.092-.647.35-1.087.636-1.337-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.268 2.75 1.026A9.578 9.578 0 0112 6.836c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.026 2.747-1.026.546 1.377.202 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.161 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
            </svg>
          </a>
          <a
            href="https://www.linkedin.com/in/ajaykumarma"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-social"
            id="footer-linkedin"
            title="LinkedIn Profile"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
          </a>
          <a
            href="https://mail.google.com/mail/?view=cm&to=ajaykumarma007@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-social"
            id="footer-email"
            title="Send Email via Gmail"
          >
            ✉️
          </a>
        </div>
      </div>
    </footer>
  )
}

function ScrollToTop() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY > 400)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <button
      className={`scroll-top ${visible ? 'visible' : ''}`}
      id="scroll-to-top"
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      aria-label="Scroll to top"
    >
      ↑
    </button>
  )
}

// ===== INTERSECTION OBSERVER FOR ANIMATIONS =====
function useScrollAnimations() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          }
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    )

    const elements = document.querySelectorAll('.fade-in')
    elements.forEach(el => observer.observe(el))

    return () => observer.disconnect()
  }, [])
}

// ===== MAIN PAGE =====
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

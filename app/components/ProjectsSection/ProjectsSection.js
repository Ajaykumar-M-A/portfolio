import { useState } from 'react'
import { projects } from '../../data/portfolioData'
import GithubIcon from '../icons/GithubIcon'

export default function ProjectsSection() {
  const [activeIndex, setActiveIndex] = useState(0)
  const activeProject = projects[activeIndex]

  return (
    <section id="projects" className="projects-section">
      <div className="section-container">
        <div className="fade-in projects-heading">
          <div>
            <div className="section-label">Featured Work</div>
            <h2 className="section-title">Project highlights with <span>clear product context</span></h2>
          </div>
          <p className="section-subtitle">
            Browse the work by project to see the problem, impact, and stack behind each build.
          </p>
        </div>

        <div className="project-console fade-in">
          <div className="project-tabs" role="tablist" aria-label="Portfolio projects">
            {projects.map((project, idx) => (
              <button
                key={project.title}
                className={`project-tab ${activeIndex === idx ? 'active' : ''}`}
                onClick={() => setActiveIndex(idx)}
                type="button"
                role="tab"
                aria-selected={activeIndex === idx}
              >
                <span>{project.icon}</span>
                {project.title}
              </button>
            ))}
          </div>

          <div className="project-world">
            <div className="project-world-visual" aria-hidden="true">
              <div className={`project-planet ${activeProject.iconClass}`}>
                <span>{activeProject.icon}</span>
              </div>
              <div className="project-ring outer" />
              <div className="project-ring inner" />
              {activeProject.metrics.map((metric, index) => (
                <div className={`metric-chip metric-${index + 1}`} key={metric}>{metric}</div>
              ))}
            </div>

            <div className="project-world-copy">
              <div className="project-label">{activeProject.label}</div>
              <h3>{activeProject.title}</h3>
              <p className="project-desc-large">{activeProject.desc}</p>

              <div className="project-story-grid">
                <div>
                  <span>Problem</span>
                  <p>{activeProject.problem}</p>
                </div>
                <div>
                  <span>Impact</span>
                  <p>{activeProject.impact}</p>
                </div>
              </div>

              <div className="project-tech">
                {activeProject.tech.map(t => (
                  <span key={t} className="project-tech-tag">{t}</span>
                ))}
              </div>

              <a href={activeProject.githubUrl} target="_blank" rel="noopener noreferrer" className="btn-project">
                <GithubIcon />
                View GitHub
              </a>
            </div>
          </div>
        </div>

        <div className="projects-grid compact-projects">
          {projects.slice(0, 2).map((project) => (
            <article key={project.title} className="project-card fade-in">
              <div className="project-card-header">
                <div className={`project-icon ${project.iconClass}`}>{project.icon}</div>
                <span className="project-pill">{project.label}</span>
              </div>
              <div className="project-card-body">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-desc">{project.desc}</p>
                <div className="project-tech">
                  {project.tech.slice(0, 5).map(t => (
                    <span key={t} className="project-tech-tag">{t}</span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

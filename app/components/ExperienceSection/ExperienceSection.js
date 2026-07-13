import { experiences } from '../../data/portfolioData'

export default function ExperienceSection() {
  return (
    <section id="experience" className="experience-bg">
      <div className="section-container">
        <div className="fade-in">
          <div className="section-label">Work Experience</div>
          <h2 className="section-title">Proof from the <span>production timeline</span></h2>
          <p className="section-subtitle">
            Professional experience building and shipping full stack features across web and mobile applications.
          </p>
        </div>

        <div className="timeline">
          {experiences.map((exp) => (
            <div key={`${exp.company}-${exp.title}`} className="timeline-item fade-in">
              <div className="timeline-dot" />
              <div className="timeline-card">
                <div className="timeline-header">
                  <div className="timeline-title">{exp.title}</div>
                  <span className="timeline-badge">{exp.badge}</span>
                </div>
                <div className="timeline-company">{exp.company}</div>
                <div className="timeline-period">
                  {exp.period} - {exp.location}
                </div>
                <ul className="timeline-bullets">
                  {exp.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
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

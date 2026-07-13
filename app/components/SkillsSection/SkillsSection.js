import { skills } from '../../data/portfolioData'

export default function SkillsSection() {
  return (
    <section id="skills">
      <div className="section-container">
        <div className="fade-in">
          <div className="section-label">Technical Skills</div>
          <h2 className="section-title">Stack built for <span>full product delivery</span></h2>
          <p className="section-subtitle">
            Frontend clarity, backend structure, mobile workflows, and deployment habits that support real users.
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

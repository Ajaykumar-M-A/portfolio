import { certifications, education } from '../../data/portfolioData'

export default function EducationSection() {
  return (
    <section id="education" className="education-bg">
      <div className="section-container">
        <div className="fade-in">
          <div className="section-label">Education</div>
          <h2 className="section-title">Academic <span>foundation</span></h2>
        </div>

        <div className="education-grid">
          {education.map((edu) => (
            <div key={edu.degree} className="edu-card fade-in">
              <div className="edu-icon">{edu.icon}</div>
              <div className="edu-degree">{edu.degree}</div>
              <div className="edu-institution">{edu.institution}</div>
              {edu.university !== edu.institution && (
                <div className="edu-institution muted">{edu.university}</div>
              )}
              <div className="edu-period">{edu.period}</div>
              <div className="edu-location">{edu.location}</div>
            </div>
          ))}
        </div>

        <div className="certs-wrap">
          <div className="fade-in">
            <div className="section-label">Certifications</div>
            <h3 className="section-title mini-title">
              <span>Credentials</span> and achievements
            </h3>
          </div>
          <div className="certs-grid">
            {certifications.map((cert) => (
              <div key={cert.name} className="cert-card fade-in">
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

import { focusAreas } from '../../data/portfolioData'

export default function AboutSection() {
  return (
    <section id="about">
      <div className="section-container">
        <div className="fade-in">
          <div className="section-label">About Me</div>
          <h2 className="section-title">A developer who turns product ideas into <span>working systems</span></h2>
        </div>

        <div className="about-grid">
          <div className="about-content fade-in">
            <p>
              I am <strong>Ajaykumar M A</strong>, a Full Stack Developer currently working at
              <strong> Tungston Labs</strong> in Kochi. My strongest work sits where product thinking meets
              implementation: dashboards, booking flows, authentication, REST APIs, mobile experiences, and
              production deployment.
            </p>
            <p>
              This portfolio highlights practical product work, especially customer workflows, booking systems,
              mobile-ready screens, and maintainable backend logic.
            </p>
            <p>
              I like building systems that feel calm to use even when the workflow behind them is complex.
              That means clear navigation, predictable state, fast feedback, and code that another developer can
              confidently extend.
            </p>

            <div className="about-highlights">
              <div className="highlight-item">
                <div className="highlight-icon">IN</div>
                <span>Kerala, India</span>
              </div>
              <div className="highlight-item">
                <div className="highlight-icon">@</div>
                <span>ajaykumarma007@gmail.com</span>
              </div>
              <div className="highlight-item">
                <div className="highlight-icon">+91</div>
                <span>9895977148</span>
              </div>
              <div className="highlight-item">
                <div className="highlight-icon">LAN</div>
                <span>English, Malayalam, Hindi</span>
              </div>
            </div>
          </div>

          <div className="world-stack fade-in">
            {focusAreas.map((area, index) => (
              <div className="world-card" key={area.name} style={{ '--i': index }}>
                <div className="world-card-kicker">Focus 0{index + 1}</div>
                <div className="world-card-title">{area.name}</div>
                <div className="world-card-value">{area.value}</div>
                <p>{area.tone}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

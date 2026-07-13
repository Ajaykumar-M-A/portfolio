import { useState } from 'react'
import GithubIcon from '../icons/GithubIcon'

const contactEmail = 'ajaykumarma007@gmail.com'

function buildMailto({ name, email, subject, message }) {
  const mailSubject = encodeURIComponent(subject || `Portfolio Contact - Message from ${name}`)
  const body = encodeURIComponent(`Hi Ajaykumar,\n\nMy name is ${name}.\nEmail: ${email}\n\n${message}\n\n-- Sent via your portfolio`)
  return `mailto:${contactEmail}?subject=${mailSubject}&body=${body}`
}

export default function ContactSection() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' })
  const [status, setStatus] = useState('idle')
  const [notice, setNotice] = useState('')

  const updateField = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')
    setNotice('')

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })

      if (!response.ok) {
        throw new Error('Email API unavailable')
      }

      setStatus('sent')
      setNotice('Message sent. Thank you for reaching out.')
      setFormData({ name: '', email: '', subject: '', message: '' })
    } catch {
      window.location.href = buildMailto(formData)
      setStatus('fallback')
      setNotice('Opening your mail app with the message ready to send.')
    } finally {
      setTimeout(() => {
        setStatus('idle')
        setNotice('')
      }, 4200)
    }
  }

  return (
    <section id="contact" className="contact-bg">
      <div className="section-container">
        <div className="fade-in">
          <div className="section-label">Get In Touch</div>
          <h2 className="section-title">Let recruiters land on the <span>right signal</span></h2>
          <p className="section-subtitle">
            I am open to full stack, frontend, backend, and React Native opportunities where I can ship practical product features.
          </p>
        </div>

        <div className="contact-grid">
          <div className="contact-info fade-in">
            <a href={`mailto:${contactEmail}`} className="contact-item">
              <div className="contact-item-icon email">@</div>
              <div>
                <div className="contact-item-label">Email</div>
                <div className="contact-item-value">{contactEmail}</div>
              </div>
            </a>

            <a href="tel:+919895977148" className="contact-item">
              <div className="contact-item-icon phone">+91</div>
              <div>
                <div className="contact-item-label">Phone</div>
                <div className="contact-item-value">+91 9895977148</div>
              </div>
            </a>

            <div className="contact-item static-contact">
              <div className="contact-item-icon location">IN</div>
              <div>
                <div className="contact-item-label">Location</div>
                <div className="contact-item-value">Kerala, India</div>
              </div>
            </div>

            <a href="https://www.linkedin.com/in/ajaykumarma" target="_blank" rel="noopener noreferrer" className="contact-item">
              <div className="contact-item-icon linkedin">in</div>
              <div>
                <div className="contact-item-label">LinkedIn</div>
                <div className="contact-item-value">linkedin.com/in/ajaykumarma</div>
              </div>
            </a>

            <a href="https://github.com/Ajaykumar-M-A" target="_blank" rel="noopener noreferrer" className="contact-item">
              <div className="contact-item-icon github">
                <GithubIcon size={20} />
              </div>
              <div>
                <div className="contact-item-label">GitHub</div>
                <div className="contact-item-value">github.com/Ajaykumar-M-A</div>
              </div>
            </a>
          </div>

          <div className="contact-form fade-in">
            <div className="form-title">Send a Message</div>
            <div className="form-subtitle">The form sends through the site, with mail app fallback.</div>

            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label className="form-label" htmlFor="contact-name">Your Name</label>
                <input
                  type="text"
                  id="contact-name"
                  className="form-input"
                  placeholder="Hiring Manager"
                  value={formData.name}
                  onChange={e => updateField('name', e.target.value)}
                  required
                />
              </div>
              <div className="form-group">
                <label className="form-label" htmlFor="contact-email-input">Your Email</label>
                <input
                  type="email"
                  id="contact-email-input"
                  className="form-input"
                  placeholder="name@company.com"
                  value={formData.email}
                  onChange={e => updateField('email', e.target.value)}
                  required
                />
              </div>
              <div className="form-group">
                <label className="form-label" htmlFor="contact-subject">Subject</label>
                <input
                  type="text"
                  id="contact-subject"
                  className="form-input"
                  placeholder="Full Stack Developer opportunity"
                  value={formData.subject}
                  onChange={e => updateField('subject', e.target.value)}
                />
              </div>
              <div className="form-group">
                <label className="form-label" htmlFor="contact-message">Message</label>
                <textarea
                  id="contact-message"
                  className="form-textarea"
                  placeholder="Hi Ajaykumar, I saw your work and wanted to connect..."
                  value={formData.message}
                  onChange={e => updateField('message', e.target.value)}
                  required
                />
              </div>
              <button type="submit" className="form-submit" disabled={status === 'sending'}>
                {status === 'sending' ? 'Sending...' : 'Send Message'}
              </button>
              {notice && <p className="form-notice">{notice}</p>}
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

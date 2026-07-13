import GithubIcon from '../icons/GithubIcon'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-logo">Ajay.dev</div>
        <p className="footer-text">
          Built by Ajaykumar M A | Full Stack Developer
        </p>
        <div className="footer-socials">
          <a href="https://github.com/Ajaykumar-M-A" target="_blank" rel="noopener noreferrer" className="footer-social" title="GitHub Profile">
            <GithubIcon />
          </a>
          <a href="https://www.linkedin.com/in/ajaykumarma" target="_blank" rel="noopener noreferrer" className="footer-social" title="LinkedIn Profile">
            in
          </a>
          <a href="mailto:ajaykumarma007@gmail.com" className="footer-social" title="Send Email">
            @
          </a>
        </div>
      </div>
    </footer>
  )
}

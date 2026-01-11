import './Footer.css'

function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <p className="footer-text">
            Designed & Built with <span className="text-accent">&#60;3</span>
          </p>
          <p className="footer-copyright">
            © {currentYear} • All rights reserved
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

import { useState } from 'react'
import './Navbar.css'

const navLinks = [
  { label: 'NOSOTROS', href: '#nosotros' },
  { label: 'SERVICIOS', href: '#servicios' },
  { label: 'PROYECTOS', href: '#proyectos' },
]

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="navbar">
      <div className="navbar__container">
        <a href="#" className="navbar__logo">
          <span className="navbar__brand">KORBAN</span>
        </a>

        <nav className={`navbar__nav ${menuOpen ? 'navbar__nav--open' : ''}`}>
          {navLinks.map((link) => (
            <a key={link.label} href={link.href} className="navbar__link">
              {link.label}
            </a>
          ))}
        </nav>

        <div className="navbar__right">
          <div className="navbar__socials">
            <a href="#" className="navbar__social-icon" aria-label="Facebook">
              <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
              </svg>
            </a>
            <a href="#" className="navbar__social-icon" aria-label="YouTube">
              <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
                <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.97C18.88 4 12 4 12 4s-6.88 0-8.59.47A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.95 1.97C5.12 20 12 20 12 20s6.88 0 8.59-.47a2.78 2.78 0 0 0 1.95-1.97A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z"/>
                <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="#0a0f1a"/>
              </svg>
            </a>
            <a href="#" className="navbar__social-icon" aria-label="LinkedIn">
              <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                <rect x="2" y="9" width="4" height="12"/>
                <circle cx="4" cy="4" r="2"/>
              </svg>
            </a>
          </div>
          <a href="tel:+541112345678" className="navbar__phone">
            +54 (11) 1234-5678
          </a>
        </div>

        <button
          className="navbar__burger"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menú"
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </header>
  )
}

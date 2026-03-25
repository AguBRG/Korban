import KorbanLogo from './KorbanLogo'
import './Footer.css'

const footerData = [
  {
    heading: 'NOSOTROS',
    links: [
      { label: 'Mensaje del CEO', href: '#' },
      { label: 'Velocidad al mercado', href: '#' },
      { label: 'Equipo de dirección', href: '#' },
      { label: 'Consejo de asesores', href: '#' },
      { label: 'Instalaciones', href: '#' },
      { label: 'Mercados que servimos', href: '#' },
      { label: 'Noticias', href: '#' },
      { label: 'Carreras', href: '#' },
    ],
  },
  {
    heading: 'SERVICIOS',
    links: [
      { label: 'Ingeniería de sistemas', href: '#' },
      { label: 'Prototipado rápido', href: '#' },
      { label: 'Gestión empresarial', href: '#' },
      { label: 'Arquitectura organizacional', href: '#' },
      { label: 'Desarrollo de software', href: '#' },
      { label: 'Diseño electromecánico', href: '#' },
    ],
  },
  {
    heading: 'PRODUCTOS',
    links: [
      { label: 'Defensa e inteligencia', href: '#' },
      { label: 'Industrial y comercial', href: '#' },
    ],
  },
  {
    heading: 'CONTACTO',
    links: [],
    contact: {
      email: 'info@korban.com.ar',
      phone: '+54 (11) 1234-5678',
      address: 'Av. del Libertador 1234, Piso 5\nBuenos Aires, Argentina',
    },
  },
]

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__top">
        <div className="footer__grid">
          {footerData.map((col) => (
            <div key={col.heading} className="footer__col">
              <h4 className="footer__heading">{col.heading}</h4>
              {col.links.length > 0 && (
                <ul className="footer__links">
                  {col.links.map((link) => (
                    <li key={link.label}>
                      <a href={link.href} className="footer__link">
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              )}
              {col.contact && (
                <div className="footer__contact">
                  <a href="#" className="footer__link">{col.contact.email}</a>
                  <a href="#" className="footer__link">{col.contact.phone}</a>
                  <div className="footer__socials">
                    <a href="#" className="footer__social" aria-label="Facebook">f</a>
                    <a href="#" className="footer__social" aria-label="LinkedIn">in</a>
                    <a href="#" className="footer__social" aria-label="YouTube">▶</a>
                  </div>
                  <p className="footer__address">{col.contact.address}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="footer__bottom">
        <div className="footer__bottom-inner">
          <KorbanLogo height={32} />
          <p className="footer__copy">
            © 2025 Korban. Todos los derechos reservados.{' '}
            <a href="#" className="footer__copy-link">Términos de uso</a>{' '}
            •{' '}
            <a href="#" className="footer__copy-link">Política de privacidad</a>
          </p>
        </div>
      </div>
    </footer>
  )
}

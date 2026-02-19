import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelopeSquare } from '@fortawesome/free-solid-svg-icons';
import { faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';
import { trackEvent } from '../../Utils/analytics';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__top">
        <div className="footer__brand">
          <img
            src="https://loyalty-optimized.s3.sa-east-1.amazonaws.com/logoletras.png"
            alt="Loyalty Investments"
            loading="lazy"
          />
          <p className="footer__address">
            Av. del Libertador 6810, Piso 14<br />
            C.A.B.A., Argentina
          </p>
          <a href="tel:+541139875923" className="footer__phone" onClick={() => trackEvent('contact_click', { method: 'phone', location: 'footer' })}>
            +54 11 3987-5923
          </a>
        </div>

        <div className="footer__nav">
          <h4 className="footer__heading">Explora</h4>
          <ul className="footer__links">
            <li><Link to="/">Inicio</Link></li>
            <li><Link to="/quienesSomos">Quiénes somos</Link></li>
            <li><Link to="/servicios">Servicios</Link></li>
            <li><Link to="/comoTrabajamos">Cómo trabajamos</Link></li>
            <li><Link to="/contacto">Contacto</Link></li>
          </ul>
        </div>

        <div className="footer__social">
          <h4 className="footer__heading">Conectar</h4>
          <div className="footer__social-icons">
            <a
              href="https://www.instagram.com/loyalty.investments"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a
              href="https://ar.linkedin.com/company/loyalty-investments"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
            <a href="mailto:info@linv.com.ar" aria-label="Email">
              <FontAwesomeIcon icon={faEnvelopeSquare} />
            </a>
          </div>
        </div>
      </div>

      <div className="footer__divider" />

      <div className="footer__bottom">
        <p>&copy; {new Date().getFullYear()} Loyalty Investments. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;

import React from 'react'
import './Footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faEnvelopeSquare, faMailBulk, faMailForward, faMailReply } from '@fortawesome/free-solid-svg-icons'
import { faInstagram, faLinkedin, faMailchimp } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className="footerContainer">
      <div className='footerTopContainer'>

        <div className='footerImg'>
          <img src="./logoLetras.png" alt="logoFooter" />
        </div>

        <div className="footerLinks">
          <h4>Explora</h4>
          <ul>
            <li><a href="/">Inicio</a></li>
            <li><a href="/quienesSomos">¿Quiénes somos?</a></li>
            <li><a href="/servicios">Servicios</a></li>
            <li><a href="/comoTrabajamos">¿Como trabajamos?</a></li>
            <li><a href="/contacto">Contacto</a></li>
          </ul>
        </div>

        <div className="footerSocial">
          <h4>Síguenos</h4>
          <div className="socialIcons">
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
            <a href="mailto:info@tuempresa.com">
              <FontAwesomeIcon icon={faEnvelopeSquare} />
            </a>
          </div>
        </div>

      </div>

      <div className="footerCopy">
        <p>&copy; {new Date().getFullYear()} Loyalty Investments. Todos los derechos reservados.</p>
      </div>
    </footer>
  )
}

export default Footer

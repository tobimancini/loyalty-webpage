import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <footer className="footerContainer">
        <div className="footerLinks">
          <h4>Links Rápidos</h4>
          <ul>
            <li><a href="#inicio">Inicio</a></li>
            <li><a href="#quienes-somos">¿Quiénes somos?</a></li>
            <li><a href="#servicios">Servicios</a></li>
            <li><a href="#contacto">Contacto</a></li>
          </ul>
        </div>

        <div className="footerSocial">
          <h4>Síguenos</h4>
          <div className="socialIcons">
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faFacebookF} />
            </a>
            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faTwitter} />
            </a>
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faLinkedinIn} />
            </a>
            <a href="mailto:info@tuempresa.com">
              <FontAwesomeIcon icon={faEnvelope} />
            </a>
          </div>
        </div>

        <div className="footerLegal">
          <h4>Información Legal</h4>
          <p><a href="#privacidad">Política de privacidad</a></p>
          <p><a href="#terminos">Términos y condiciones</a></p>
        </div>
        <div className="footerCopy">
          <p>&copy; {new Date().getFullYear()} Tu Empresa. Todos los derechos reservados.</p>
        </div>
    </footer>
  )
}

export default Footer

import React from 'react'
import './Footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelopeSquare } from '@fortawesome/free-solid-svg-icons'
import { faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';


const Footer = () => {
  
  return (
    <footer className="footerContainer">
      <div className='footerTopContainer'>

        <div className='footerImg'>
          <img src="https://loyalty-optimized.s3.sa-east-1.amazonaws.com/logoletras.png" alt="logoFooter" />
        </div>

        <div className="footerLinks">
          <h4>Explora</h4>
          <ul>
            <li><Link to="/">Inicio</Link></li>
            <li><Link to="/quienesSomos">¿Quiénes somos?</Link></li>
            <li><Link to="/servicios">Servicios</Link></li>
            <li><Link to="/comoTrabajamos">¿Como trabajamos?</Link></li>
            <li><Link to="/contacto">Contacto</Link></li>
          </ul>
        </div>

        <div className="footerSocial">
          <h4>Síguenos</h4>
          <div className="socialIcons">
            <Link to="https://www.instagram.com/loyalty.investments?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faInstagram} />
            </Link>
            <Link to="https://ar.linkedin.com/company/loyalty-investments" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faLinkedin} />
            </Link>
            <Link to="mailto:info@linv.com.ar">
              <FontAwesomeIcon icon={faEnvelopeSquare} />
            </Link>
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

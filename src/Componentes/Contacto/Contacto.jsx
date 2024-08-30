import React, { useEffect } from 'react'
import Background from '../Background/Background'
import './Contacto.css'
import { faEnvelope, faMapMarkerAlt, faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';

const Contacto = () => {

  const whatsappNumber = '541132344651'; // Número de teléfono en formato internacional
  const whatsappMessage = 'Hola, me gustaría obtener más información sobre su producto';
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Background>
      <div className='upperContainer'>
        <h3>INFORMACIÓN</h3>
        <h2>Contactanos Ahora</h2>
      </div>
      <div className='contactInfo'>
        <div className='infoItem'>
          <FontAwesomeIcon icon={faMapMarkerAlt} />
          <p>Av. del Libertador 6810, Piso 14, CP 1429, C.A.B.A.</p>
        </div>
        <div className='infoItem'>
          <FontAwesomeIcon icon={faPhone} />
          <p>11-3987-5923</p>
        </div>
        <div className='infoItem'>
          <FontAwesomeIcon icon={faEnvelope} />
          <p>info@linv.com.ar</p>
        </div>
      </div>

      <div className='formContainer'>
        <h3>Envíanos un mensaje ahora!</h3>
          <a href={whatsappLink} target='_blank' rel="noopener noreferrer">
            <button type='submit'>Contacta con nosotros <FontAwesomeIcon icon={faWhatsapp} /></button>
            </a>
      </div>

      <div className='mapContainer'>
        <h3>Nuestra Ubicación</h3>
        <iframe
          title='location'
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26242.997658300876!2d-58.42406886684696!3d-34.54675904688948!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcb6a3e2e4e597%3A0x96db6d53d7b01254!2sAv.%20Del%20Libertador%206810%2C%20C1429BNB%20CABA%2C%20Argentina!5e0!3m2!1sen!2sus!4v1692626093585!5m2!1sen!2sus"
          width="100%" height="450" style={{ border: 0 }} allowFullScreen="" loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"></iframe>
      </div>
    </Background>
  )
}

export default Contacto;

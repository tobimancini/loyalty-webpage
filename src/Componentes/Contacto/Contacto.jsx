import React from 'react'
import Background from '../Background/Background'
import './Contacto.css'
import { faEnvelope, faMapMarkerAlt, faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Contacto = () => {
  return (
    <Background>
      <div className='upperContainer'>
          <h3>INFORMACION</h3>
          <h2>Contactanos Ahora</h2>
        </div>
      <div className='contactInfo'>
        <div className='infoItem'>
          <FontAwesomeIcon icon={faMapMarkerAlt} />
          <p>Av. del Libertador 6810, Piso 14, CP 1429, C.A.B.A.</p>
        </div>
        <div className='infoItem'>
          <FontAwesomeIcon icon={faPhone} />
          <p>011-3987-5923</p>
          <p>+54 9 11 5144-061</p>
        </div>
        <div className='infoItem'>
          <FontAwesomeIcon icon={faEnvelope} />
          <p>info@linv.com.ar</p>
        </div>
      </div>

      <div className='formContainer'>
        <h3>Envíanos un mensaje</h3>
        <form>
          <div className='formGroup'>
            <label htmlFor='name'>Nombre</label>
            <input type='text' id='name' name='name' required />
          </div>

          <div className='formGroup'>
            <label htmlFor='email'>Correo Electrónico</label>
            <input type='email' id='email' name='email' required />
          </div>

          <div className='formGroup'>
            <label htmlFor='subject'>Asunto</label>
            <input type='text' id='subject' name='subject' required />
          </div>

          <div className='formGroup'>
            <label htmlFor='message'>Mensaje</label>
            <textarea id='message' name='message' rows='5' required></textarea>
          </div>

          <button type='submit'>Contacta con nosotros</button>
        </form>
      </div>

      <div className='mapContainer'>
        <h3>Nuestra Ubicación</h3>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26242.997658300876!2d-58.42406886684696!3d-34.54675904688948!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcb6a3e2e4e597%3A0x96db6d53d7b01254!2sAv.%20Del%20Libertador%206810%2C%20C1429BNB%20CABA%2C%20Argentina!5e0!3m2!1sen!2sus!4v1692626093585!5m2!1sen!2sus"
          width="100%" height="450" style={{ border: 0 }} allowFullScreen="" loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"></iframe>
      </div>
    </Background>
  )
}

export default Contacto;

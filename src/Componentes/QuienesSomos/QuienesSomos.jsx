import React from 'react'
import Background from '../Background/Background'
import './QuienesSomos.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBusinessTime, faDotCircle, faHandshake, faPeopleGroup } from '@fortawesome/free-solid-svg-icons'

const QuienesSomos = () => {
  return (
    <Background>
      <div className='container regular'>
        <div className='upperContainer'>
          {/* <img src="./simbolo4.png" alt="logo" />
          <h1>¿Quienes Somos?</h1> */}
          <h3>COMPROMISO</h3>
          <h2>¿Quienes Somos?</h2>
        </div>

        <div className='quienesContainer'>

          <div className='quienesStaffContainer'>
            {/* <h3>COMPROMISO</h3>
            <h2>¿Quienes Somos?</h2> */}
            <div className='staffContainer'>
              <div className='tarjetaContainer'>
                <div className='tarjetaImg presidente'></div>
                <p>Marcos Noceti - Presidente y Fundador</p>
              </div>
              <div className='tarjetaContainer'>
                <div className='tarjetaImg gerente'></div>
                <p>Nicolas Mihura - Gerente General</p>
              </div>
            </div>
          </div>

          <div className='quienesTextContainer'>
            <p className='text'><FontAwesomeIcon icon={faDotCircle} />Somos una empresa de asesoramiento financiero independiente con una trayectoria de
              más de 20 años. Nos especializamos en servicios de banca privada, conectando ahorristas,
              inversores y rentistas con asesoramiento personalizado. Nuestro objetivo es proteger y
              gestionar la riqueza de clientes individuales e institucionales, adaptándonos a sus objetivos
              y perfiles de riesgo específicos.</p>
            <br />
            <p className='text'><FontAwesomeIcon icon={faDotCircle} />Damos servicio en la apertura de cuenta comitente, sumado al asesoramiento y seguimiento
              personalizado de tus operaciones e inversiones.
            </p>
            <div className='icons'>
              <FontAwesomeIcon icon={faPeopleGroup} />
              <FontAwesomeIcon icon={faBusinessTime} />
              <FontAwesomeIcon icon={faHandshake} />
            </div>

            <p className='quote'>"Loyalty nació de una idea clara: poner siempre al cliente en primer lugar." - Marcos Noceti, Presidente y Fundador.</p>
            <p className='quote'>"Creemos que las mejores estrategias nacen de relaciones de confianza genuinas que inspiren y transformen cada oportunidad en un logro compartido." - Nicolas Mihura, Gerente General.</p>


          </div>

        </div>

        <div className='inicioContactoContainer'>
          <div className='info'>
            <h2>Da el Primer Paso</h2>
            <p>Tu tranquilidad financiera empieza aquí. Permítenos ayudarte a proteger y crecer tu patrimonio con el respaldo de nuestros expertos.</p>
            <button>Contactanos Ahora</button>
          </div>
          <div className='logo'>
            <img src="./simbolo3.png" alt="simbolo vertical" />
          </div>
        </div>

      </div>
    </Background>
  )
}

export default QuienesSomos

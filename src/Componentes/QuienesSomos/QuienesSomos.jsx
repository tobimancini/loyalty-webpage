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
          <h1>¿Quienes Somos?</h1>
          <img src="./simbolo4.png" alt="logo" />
        </div>
        <div className='quienesContainer'>
          <p><FontAwesomeIcon icon={faDotCircle} />Somos una empresa de asesoramiento financiero independiente con una trayectoria de
            más de 20 años. Nos especializamos en servicios de banca privada, conectando ahorristas,
            inversores y rentistas con asesoramiento personalizado. Nuestro objetivo es proteger y
            gestionar la riqueza de clientes individuales e institucionales, adaptándonos a sus objetivos
            y perfiles de riesgo específicos.</p>
          <br />
          <p><FontAwesomeIcon icon={faDotCircle} />Damos servicio en la apertura de cuenta comitente, sumado al asesoramiento y seguimiento
            personalizado de tus operaciones e inversiones.
          </p>
          <div className='icons'>
            <FontAwesomeIcon icon={faPeopleGroup} />
            <FontAwesomeIcon icon={faBusinessTime} />
            <FontAwesomeIcon icon={faHandshake} />
          </div>
          <div className='quienesStaffContainer'>
            <h3>COMPROMISO</h3>
            <h2>Los Lideres Detras de Nuestra Empresa</h2>
            <div className='staffContainer'>
              <div className='tarjetaContainer'>
                <div className='tarjetaImg presidente'></div>
                <p>Presidente y Fundador</p>
              </div>
              <div className='tarjetaContainer'>
                <div className='tarjetaImg gerente'></div>
                <p>Gerente General</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </Background>
  )
}

export default QuienesSomos

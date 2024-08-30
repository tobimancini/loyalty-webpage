import React, { useEffect } from 'react'
import Background from '../Background/Background'
import './Servicios.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChartLine, faChartPie, faCoins, faDotCircle, faShield } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'

const Servicios = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Background>
      <div className='container regular'>
        <div className='upperContainer'>
          <h3>SOLUCIONES</h3>
          <h2>Nuestros Servicios</h2>
        </div>

        <div className='serviciosContainer'>
          <div className='servicioContainer'>
            <p className='text'><span>Banca Privada:</span> <br /><br />
              <FontAwesomeIcon icon={faDotCircle} />
              Ofrecemos un servicio integral de gestión de ahorros, adaptado a las necesidades de cada cliente para preservar y potenciar su capital. Los servicios ofrecidos son: Mercado de capitales, Inversión en Real Estate y Gestión de portafolios.</p>
            <FontAwesomeIcon icon={faChartLine} />
          </div>
          <div className='servicioContainer'>
            <p className='text'><span>Asesoramiento Financiero para Individuos:</span> <br /><br />
              <FontAwesomeIcon icon={faDotCircle} />
              Ofrecemos asesoramiento financiero personalizado para ayudarte a alcanzar tus metas a largo plazo. Estamos para guiarte en cada paso.</p>
            <FontAwesomeIcon icon={faChartPie} />
          </div>
          <div className='servicioContainer'>
            <p className='text'><span>Gestión y Protección de Capital para Empresas:</span> <br /><br />
              <FontAwesomeIcon icon={faDotCircle} />
              Brindamos soluciones integrales para la gestión y protección del capital empresarial. Optimiza tus recursos, asegura tu flujo de caja y minimiza los riesgos financieros con nuestro apoyo experto.</p>
            <FontAwesomeIcon icon={faShield} />
          </div>
          <div className='servicioContainer'>
            <p className='text'><span>Optimización Fiscal:</span> <br /><br />
              <FontAwesomeIcon icon={faDotCircle} />
              Desarrollamos estrategias para la optimización fiscal que te permiten reducir tu carga impositiva y mejorar tu rentabilidad. Aprovecha al máximo tus recursos con nuestras soluciones a medida.</p>
            <FontAwesomeIcon icon={faCoins} />
          </div>

        </div>

        <div className='inicioContactoContainer'>
          <div className='info'>
            <h2>Da el Primer Paso</h2>
            <p>Tu tranquilidad financiera empieza aquí. Permítenos ayudarte a proteger y crecer tu patrimonio con el respaldo de nuestros expertos.</p>
            <Link to='/contacto'><button>Contactanos Ahora</button></Link>
          </div>
          <div className='logo'>
            <img src="https://loyalty-optimized.s3.sa-east-1.amazonaws.com/simbolo3.png" alt="simbolo vertical" />
          </div>
        </div>

      </div>
    </Background>
  )
}

export default Servicios

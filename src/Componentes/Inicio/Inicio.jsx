import React, { useEffect, useRef, useState } from 'react'

import Background from '../Background/Background'
import './Inicio.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBalanceScale, faBusinessTime, faChartLine, faCoins, faDotCircle, faGlobe, faHandshake, faPeopleGroup, faShield, faXmark } from '@fortawesome/free-solid-svg-icons';


const Inicio = () => {

  const [carouselPlay, setCarouselPlay] = useState(true);

  const logos = [
    './latin.png',
    './ieb.png',
    './inviu.png',
    './pershing.png',
    './interactive.png'
  ];

  return (
    <Background>
      <div className='container inicioContainer'>

        <div className='heroContainer inicio'>
          <span className='heroOverlay' />
          <div className='heroTextContainer'>
            <h1>Loyalty Investments</h1>
            <p>Asesoramiento Financiero Independiente</p>
            <p>Protegiendo y gestionando tus activos con confianza, protección y credibilidad</p>
            <button>Contactanos</button>
          </div>
          <img className='simbolo' src="./simbolo2.png" alt="logoLoyalty" />
        </div>

        <div className='alianzasContainer'>
          <h2>Alianzas Estrategicas</h2>
          <div className='carouselContainer'>
            <div className="carousel">
              <ul onMouseLeave={()=>setCarouselPlay(true)} onMouseEnter={()=>setCarouselPlay(false)} className="logoList" style={{animationPlayState: carouselPlay ? 'running' : 'paused' }} >
                {logos.map((logo, index) => (
                  <li key={index} className="brandContainer">
                    <img className={`logo${index}`} src={logo} alt={`Logo ${index + 1}`} />
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className='resumenContainer'>
          <h3>TRAYECTORIA</h3>
          <h2>Más de 20 Años a Tu Lado</h2>
          <p><FontAwesomeIcon icon={faDotCircle} />Con más de 20 años de experiencia, Loyalty ofrece asesoramiento financiero independiente,
            especializado en banca privada y gestión de activos para individuos y empresas. Nuestro enfoque se basa en la confianza,
            la protección y la credibilidad.</p>
          <div className='icons'>
            <button>Conoce más sobre nosotros</button>
            <FontAwesomeIcon icon={faPeopleGroup} />
            <FontAwesomeIcon icon={faBusinessTime} />
            <FontAwesomeIcon icon={faHandshake} />
          </div>
        </div>

        <div className='resumenContainer servicios'>
          <h3>ASESORAMIENTO, PROTECCION Y OPTIMIZACION</h3>
          <h2>Tu Futuro Financiero</h2>
          <p><FontAwesomeIcon icon={faDotCircle} />Ofrecemos asesoramiento financiero personalizado para ayudarte a alcanzar tus metas a largo plazo. Desde la planificación de inversiones hasta la estrategia de jubilación, estamos aquí para guiarte en cada paso.</p>
          <p><FontAwesomeIcon icon={faDotCircle} />Brindamos soluciones integrales para la gestión y protección del capital empresarial. Optimiza tus recursos, asegura tu flujo de caja y minimiza los riesgos financieros con nuestro apoyo experto.</p>
          <p><FontAwesomeIcon icon={faDotCircle} />Desarrollamos estrategias para la optimización fiscal que te permiten reducir tu carga impositiva y mejorar tu rentabilidad. Aprovecha al máximo tus recursos con nuestras soluciones a medida.</p>
          <div className='icons'>
            <button>Conoce más sobre nuestros servicios</button>
            <FontAwesomeIcon icon={faChartLine} />
            <FontAwesomeIcon icon={faShield} />
            <FontAwesomeIcon icon={faCoins} />
          </div>
        </div>

        <div className='resumenContainer'>
          <h3>INDEPENDENCIA</h3>
          <h2>Tu Interés, Nuestra Prioridad</h2>
          <p>
            <FontAwesomeIcon icon={faDotCircle} /> Nuestro modelo de negocio independiente garantiza que nuestros intereses estén completamente alineados con los de nuestros clientes, asegurando decisiones objetivas y beneficiosas para ti.
          </p>
          <p>
            <FontAwesomeIcon icon={faDotCircle} /> No pertenecemos a bancos ni a sociedades de bolsa, lo que nos permite ofrecerte soluciones imparciales y ajustadas a tus necesidades específicas.
          </p>
          <p>
            <FontAwesomeIcon icon={faDotCircle} /> Alineamos nuestros objetivos con los tuyos, brindando un servicio personalizado y centrado en maximizar tus resultados financieros.
          </p>
          <div className='icons'>
            <button>Descubre cómo trabajamos</button>
            <FontAwesomeIcon icon={faHandshake} />
            <FontAwesomeIcon icon={faBalanceScale} />
            <FontAwesomeIcon icon={faGlobe} />
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
    </Background >
  )
}

export default Inicio

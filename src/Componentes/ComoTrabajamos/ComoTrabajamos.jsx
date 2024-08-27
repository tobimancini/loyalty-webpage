import React from 'react'
import Background from '../Background/Background'
import '../Servicios/Servicios.css'
import './ComoTrabajamos.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDotCircle } from '@fortawesome/free-solid-svg-icons'
// import logo from '../../../public/simbolo2.png'

const ComoTrabajamos = () => {
  return (
    <Background>
      <div className='container regular'>
        <div className='upperContainer'>
          <h3>PROCESO</h3>
          <h2>¿Como Trabajamos?</h2>
        </div>

        <div className='serviciosContainer comoTrabajamos'>
          <div className='servicioContainer'>
            <p className='text'><span>Proceso de Trabajo:</span> <br /><br />
              <FontAwesomeIcon icon={faDotCircle} /> Identificación de objetivos. <br />
              <FontAwesomeIcon icon={faDotCircle} /> Análisis del perfil de inversor. <br />
              <FontAwesomeIcon icon={faDotCircle} /> Diseño de estrategia financiera. <br />
              <FontAwesomeIcon icon={faDotCircle} /> Propuesta de instrumentos adecuados. <br />
              <FontAwesomeIcon icon={faDotCircle} /> Seguimiento y ajuste de la planificación. <br />
            </p>
          </div>
          <div className='servicioContainer'>
            <p className='text'><span>Ventajas de la Independencia:</span> <br /><br />
              <FontAwesomeIcon icon={faDotCircle} /> Explicar la independencia de bancos y otros intereses. <br />
              <FontAwesomeIcon icon={faDotCircle} /> Alineación de intereses con los clientes. <br />
            </p>
          </div>

        </div>
        
        <div className='comoTrabajamosImg'>
          <img src={"../../../public/simbolo2.png"} alt="logo blanco" className='logoInImg' />
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

export default ComoTrabajamos;

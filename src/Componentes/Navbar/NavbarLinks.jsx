import React from 'react'
import { Link } from 'react-router-dom'

const NavbarLinks = () => {
  return (
    <nav className='navLinks'>
      <Link className='navItem' to='/' >Inicio</Link>
      <Link className='navItem' to='/quienesSomos' >¿Quienes somos?</Link>
      <Link className='navItem' to='/servicios' >Servicios</Link>
      <Link className='navItem' to='/comoTrabajamos' >Como trabajamos</Link>
      <Link className='navItem' to='/contacto' >Contacto</Link>
    </nav>
  )
}

export default NavbarLinks

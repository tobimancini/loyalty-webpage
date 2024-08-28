import React from 'react'
import { Link } from 'react-router-dom';

import NavbarLinks from './NavbarLinks'
import './Navbar.css';

const Navbar = () => {
  return (
    <header className='headerContainer'>
      <Link to={"/"}>
        <img className='headerLogo' src={'https://loyaltyinvestments-tobi.s3.sa-east-1.amazonaws.com/logoCompBlanco.png'} alt="logo" />
      </Link>
        <NavbarLinks />
    </header>
  )
}

export default Navbar

import React from 'react'
import { Link } from 'react-router-dom';

import NavbarLinks from './NavbarLinks'
import './Navbar.css';

const Navbar = () => {
  return (
    <header className='headerContainer'>
      <Link to={"/"}>
        <img className='headerLogo' src={'https://loyaltyvideo.s3.us-east-2.amazonaws.com/logoCompBlanco.png'} alt="logo" />
      </Link>
        <NavbarLinks />
    </header>
  )
}

export default Navbar

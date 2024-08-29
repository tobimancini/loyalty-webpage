import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';

import NavbarLinks from './NavbarLinks'
import './Navbar.css';
import useWindowWidth from '../../Utils/useWindowWidth';
import Hamburger from './Hamburger';

const Navbar = () => {

  const windowWidth = useWindowWidth();
  const isDesktopWidth = windowWidth > 768;

  useEffect(()=>{
    console.log(windowWidth);
  }, [windowWidth])

  return (
    <header className='headerContainer'>
      <Link to={"/"}>
        <img className='headerLogo' src={'https://loyaltyinvestments-tobi.s3.sa-east-1.amazonaws.com/logoCompBlanco.png'} alt="logo" />
      </Link>
      {
        isDesktopWidth ?
          <NavbarLinks />
          :
          <div className="hamburgerBox">
            <Hamburger />
          </div>
      }
    </header>
  )
}

export default Navbar

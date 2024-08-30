import React, { useState } from 'react'
import { Link } from 'react-router-dom';

import NavbarLinks from './NavbarLinks'
import './Navbar.css';
import useWindowWidth from '../../Utils/useWindowWidth';
import Hamburger from './Hamburger';

const Navbar = () => {

  const [navbarOn, setNavbarOn] = useState(false);
  const windowWidth = useWindowWidth();
  const isDesktopWidth = windowWidth > 768;

  return (
    <header className='headerContainer' style={{overflow: !navbarOn? 'hidden' : 'initial'}}>
      <Link to={"/"}>
        <img className='headerLogo' src={'https://loyalty-optimized.s3.sa-east-1.amazonaws.com/logoCompBlanco.png'} alt="logo" />
      </Link>
      {
        isDesktopWidth ?
          <NavbarLinks />
          :
          <div className="hamburgerBox">
            <Hamburger navbarOn={navbarOn} setNavbarOn={setNavbarOn} />
          </div>
      }
    </header>
  )
}

export default Navbar

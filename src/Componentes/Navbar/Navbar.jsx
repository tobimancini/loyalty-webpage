import { useState, useEffect, useCallback } from 'react';
import { Link, useLocation } from 'react-router-dom';
import NavbarLinks from './NavbarLinks';
import Hamburger from './Hamburger';
import useWindowWidth from '../../Utils/useWindowWidth';
import './Navbar.css';

const Navbar = () => {
  const [navbarOn, setNavbarOn] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const windowWidth = useWindowWidth();
  const isDesktop = windowWidth > 768;
  const location = useLocation();

  const handleScroll = useCallback(() => {
    setScrolled(window.scrollY > 80);
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  useEffect(() => {
    setNavbarOn(false);
  }, [location.pathname]);

  useEffect(() => {
    if (navbarOn) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [navbarOn]);

  return (
    <header className={`headerContainer ${scrolled ? 'headerScrolled' : ''}`}>
      <Link to="/" className="headerLogoLink">
        <img className="headerLogo" src="/logoCompBlanco.png" alt="Loyalty Investments" />
      </Link>
      {isDesktop ? (
        <NavbarLinks />
      ) : (
        <Hamburger navbarOn={navbarOn} setNavbarOn={setNavbarOn} />
      )}
    </header>
  );
};

export default Navbar;

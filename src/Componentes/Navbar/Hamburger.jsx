import { Link, useLocation } from 'react-router-dom';
import HamburgerIcon from './HamburgerIcon';

const links = [
  { to: '/', label: 'Inicio' },
  { to: '/quienesSomos', label: 'Quiénes somos' },
  { to: '/servicios', label: 'Servicios' },
  { to: '/comoTrabajamos', label: 'Cómo trabajamos' },
  { to: '/contacto', label: 'Contacto' },
];

const Hamburger = ({ navbarOn, setNavbarOn }) => {
  const location = useLocation();

  const close = () => setNavbarOn(false);

  return (
    <>
      <HamburgerIcon isOpen={navbarOn} toggle={() => setNavbarOn((prev) => !prev)} />

      <div
        className={`hamburger-overlay ${navbarOn ? 'hamburger-overlay--visible' : ''}`}
        onClick={close}
        aria-hidden="true"
      />

      <nav
        className={`hamburger-panel ${navbarOn ? 'hamburger-panel--open' : ''}`}
        role="navigation"
        aria-label="Menú móvil"
      >
        {links.map((link, i) => (
          <Link
            key={link.to}
            onClick={close}
            to={link.to}
            className={`hamburger-link ${location.pathname === link.to ? 'hamburger-link--active' : ''}`}
            style={{ transitionDelay: navbarOn ? `${100 + i * 60}ms` : '0ms' }}
            aria-current={location.pathname === link.to ? 'page' : undefined}
          >
            {link.label}
          </Link>
        ))}
      </nav>
    </>
  );
};

export default Hamburger;

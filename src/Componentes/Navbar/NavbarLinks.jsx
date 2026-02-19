import { Link, useLocation } from 'react-router-dom';

const links = [
  { to: '/', label: 'Inicio' },
  { to: '/quienesSomos', label: 'Quiénes somos' },
  { to: '/servicios', label: 'Servicios' },
  { to: '/comoTrabajamos', label: 'Cómo trabajamos' },
];

const NavbarLinks = () => {
  const location = useLocation();

  return (
    <nav className="navLinks" role="navigation" aria-label="Navegación principal">
      {links.map((link) => (
        <Link
          key={link.to}
          className={`navItem ${location.pathname === link.to ? 'navItem--active' : ''}`}
          to={link.to}
          aria-current={location.pathname === link.to ? 'page' : undefined}
        >
          {link.label}
        </Link>
      ))}
      <Link to="/contacto" className="nav-cta">
        Contactanos
      </Link>
    </nav>
  );
};

export default NavbarLinks;

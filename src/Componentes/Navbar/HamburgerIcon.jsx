import './Navbar.css';

const HamburgerIcon = ({ isOpen, toggle }) => {
  return (
    <button
      className={`hamburger-btn ${isOpen ? 'hamburger-btn--open' : ''}`}
      onClick={toggle}
      aria-label={isOpen ? 'Cerrar menú' : 'Abrir menú'}
      aria-expanded={isOpen}
    >
      <span className="hamburger-line" />
      <span className="hamburger-line" />
      <span className="hamburger-line" />
    </button>
  );
};

export default HamburgerIcon;

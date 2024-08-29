import './Navbar.css'

const HamburgerIcon = ({ toggleHamburger }) => {

    return(
        <div className="hamburgerContainer" onClick={toggleHamburger}>
            <span className="line first" />
            <span className="line second" />
            <span className="line third" />
        </div>
    )
}

export default HamburgerIcon;
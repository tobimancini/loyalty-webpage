import { useState } from "react";
import HamburgerIcon from "./HamburgerIcon";
import { Link } from "react-router-dom";

const Hamburger = () => {

    const [navbarOn, setNavbarOn] = useState(false);

    const navbarStyle = navbarOn ? { animationName: "hamburger" } : { animationName: "hamburgerOut" };

    const toggleHamburger = () => {
        setNavbarOn(prev => !prev)
    }

    return (
        <>
            <HamburgerIcon toggleHamburger={toggleHamburger} />
            <div className="navbarHamburger" style={navbarStyle}>
                <Link onClick={() => { toggleHamburger() }} to={"/"}
                    className={`navItem`}>
                    Inicio
                </Link>

                <Link onClick={toggleHamburger} to={"/quienesSomos"}
                    className={`navItem`}>
                    ¿Quiénes somos?
                </Link>

                <Link onClick={toggleHamburger} to={"/servicios"}
                    className={`navItem`}>
                    Servicios
                </Link>

                <Link onClick={toggleHamburger} to={"/comoTrabajamos"}
                    className={`navItem`}>
                    ¿Como trabajamos?
                </Link>

                <Link onClick={toggleHamburger} to={"/contacto"}
                    className={`navItem`}>
                    Contacto
                </Link>

            </div>
        </>
    )
}

export default Hamburger;
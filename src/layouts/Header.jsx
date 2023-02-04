import { BarSideMenu } from "./BarSideMenu"
//import leoFoto from '../../public/img/Leo_FondoTransp.png';
import leoFoto from '../assets/img/Leo_FondoTransp.png';
import { Link } from "react-router-dom";
import { SocialNet } from "../components/SocialNet";
import { useRef, useContext, useEffect } from "react";
import { NavColorContext } from "../context/NavColorContext";

export const Header = () => {
    const navbarRef = useRef();
    const { navbarBackgroundColor } = useContext(NavColorContext);

    useEffect(() => {
        const { r, g, b, a } = navbarBackgroundColor;
        navbarRef.current.style.backgroundColor = `rgba(${r}, ${g}, ${b}, ${a})`;
    }, [navbarBackgroundColor]);

    return (
        <header className="header">
            <nav ref={navbarRef} className="container navbar navbar-dark bgcolor-menu fixed-top rounded-bottom shadow p-1">
                <div className="container-fluid m-0">
                    <div className='d-flex col align-items-center gap-3 p-0'>
                        <img src={leoFoto} alt="Foto Leo Pereyra" className='img-Foto' />
                        <div className="d-flex row align-items-center m-0">
                            <Link className="navbar-brand font-logo fw-bold m-0 p-0" to="/">
                                Leo Erick Pereyra
                            </Link>
                            <SocialNet />
                        </div>
                    </div>
                    <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <BarSideMenu />
                </div>
            </nav>
        </header>
    )
}

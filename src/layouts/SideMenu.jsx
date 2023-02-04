import { NavLink } from "react-router-dom"
import { SideBarDropdownLink } from "../components/SideBarDropdownLink"
import { SideBarLink } from "../components/SideBarLink"

export const SideMenu = () => {
    return (
        <div className="offcanvas-body">
            <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                <SideBarLink link="/home" label="Home" />
                <SideBarLink link="/experience" label="Experience" />
                <SideBarLink link="/projects" label="Projects" />
                <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Stack
                    </a>
                    <ul className="dropdown-menu dropdown-menu-dark">
                        <SideBarDropdownLink link="/frontend" label="Frontend tech" />
                        <SideBarDropdownLink link="/backend" label="Backend tech" />
                        <li>
                            <hr className="dropdown-divider" />
                        </li>
                        <SideBarDropdownLink link="/others" label="Other knowledge" />
                    </ul>
                </li>
                <SideBarLink link="/resume" label="Resume" />
                <SideBarLink link="/photos" label="Photos" />
                <SideBarLink link="/contact" label="Contact" />
                <SideBarLink link="/login" label="Login" />

            </ul>
        </div>
    )
}

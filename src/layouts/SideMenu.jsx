import { NavLink } from "react-router-dom"

export const SideMenu = () => {
    return (
        <div className="offcanvas-body">
            <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                <li className="nav-item">
                    <NavLink
                        className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
                        to="/home"
                        aria-current="page"
                    >
                        Home
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink
                        className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
                        to="/experience"
                        aria-current="page"
                    >
                        Experience
                    </NavLink>

                </li>
                <li className="nav-item">
                    <NavLink
                        className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
                        to="/projects"
                        aria-current="page"
                    >
                        Projects
                    </NavLink>

                </li>
                <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Stack
                    </a>
                    <ul className="dropdown-menu dropdown-menu-dark">
                        <li>
                            <NavLink
                                className="dropdown-item"
                                to="/frontend"
                                aria-current="page"
                            >
                                Frontend tech
                            </NavLink>
                        </li>

                        <li>
                            <NavLink
                                className="dropdown-item"
                                to="/backend"
                                aria-current="page"
                            >
                                Backend tech
                            </NavLink>
                        </li>
                        <li>
                            <hr className="dropdown-divider" />
                        </li>
                        <li>
                            <NavLink
                                className="dropdown-item"
                                to="/others"
                                aria-current="page"
                            >
                                Other knowledge
                            </NavLink>
                        </li>
                    </ul>
                </li>
                <li className="nav-item">
                    <NavLink
                        className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
                        to="/resume"
                        aria-current="page"
                    >
                        Resume
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink
                        className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
                        to="/photos"
                        aria-current="page"
                    >
                        Photos
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`} to="/contact">Contact</NavLink>
                </li>
            </ul>
        </div>
    )
}

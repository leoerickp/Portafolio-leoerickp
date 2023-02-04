
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

export const SideBarAdmin = () => {
    const { userData } = useSelector(state => state.auth);
    const { user } = userData;
    return (
        <div id="layoutSidenav_nav">
            <nav className="sb-sidenav accordion sb-sidenav-dark" id="sidenavAccordion">
                <div className="sb-sidenav-menu">
                    <div className="nav">
                        <div className="sb-sidenav-menu-heading head-navbar">Home - Profile</div>
                        <NavLink to={"profile"} className="nav-link">
                            <div className="sb-nav-link-icon"><FontAwesomeIcon icon="fa-solid fa-id-card-clip" /></div>
                            Profile information
                        </NavLink>
                        <div className="sb-sidenav-menu-heading head-navbar">Basic information</div>
                        <a className="nav-link collapsed" href="#" data-bs-toggle="collapse" data-bs-target="#collapseLayouts" aria-expanded="false" aria-controls="collapseLayouts">
                            <div className="sb-nav-link-icon"><FontAwesomeIcon icon="fa-solid fa-chalkboard-user" /></div>
                            Tech - Roles
                            <div className="sb-sidenav-collapse-arrow"><i className="fas fa-angle-down"></i></div>
                        </a>
                        <div className="collapse" id="collapseLayouts" aria-labelledby="headingOne" data-bs-parent="#sidenavAccordion">
                            <nav className="sb-sidenav-menu-nested nav">
                                <NavLink to={"skills"} className="nav-link">Tech Skills</NavLink>
                                <NavLink to={"roles"} className="nav-link">Roles</NavLink>
                            </nav>
                        </div>
                        <NavLink to={"users"} className="nav-link">
                            <div className="sb-nav-link-icon"><FontAwesomeIcon icon="fa-solid fa-users" /></div>
                            Users
                        </NavLink>
                        <div className="sb-sidenav-menu-heading head-navbar">Historical information</div>
                        <NavLink to={"projects"} className="nav-link">
                            <div className="sb-nav-link-icon"><FontAwesomeIcon icon="fa-solid fa-diagram-project" /></div>
                            Projects
                        </NavLink>
                        <NavLink to={"experiences"} className="nav-link" href="tables.html">
                            <div className="sb-nav-link-icon"><FontAwesomeIcon icon="fa-solid fa-laptop-file" /></div>
                            Experience
                        </NavLink>
                        <NavLink to={"albums"} className="nav-link" href="tables.html">
                            <div className="sb-nav-link-icon"><FontAwesomeIcon icon="fa-solid fa-image" /></div>
                            Photos
                        </NavLink>
                    </div>
                </div >
                <div className="sb-sidenav-footer">
                    <div className="small">Logged in as:</div>
                    {user.email}
                </div>
            </nav >
        </div >
    )

}
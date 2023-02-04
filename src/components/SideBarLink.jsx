import { NavLink } from 'react-router-dom'

export const SideBarLink = ({ link, label }) => {
    return (
        <li className="nav-item" data-bs-dismiss="offcanvas" aria-label={label}>
            <NavLink
                className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
                to={link}
                aria-current={label}
            >
                {label}
            </NavLink>
        </li>
    )
}

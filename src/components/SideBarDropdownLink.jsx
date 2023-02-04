import { NavLink } from "react-router-dom"

export const SideBarDropdownLink = ({ link, label }) => {
    return (
        <li data-bs-dismiss="offcanvas" aria-label={label}>
            <NavLink
                className="dropdown-item"
                to={link}
                aria-current={label}
            >
                {label}
            </NavLink>
        </li>
    )
}

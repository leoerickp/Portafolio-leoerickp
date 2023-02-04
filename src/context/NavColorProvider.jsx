import { useState } from "react";
import { NavColorContext } from "./NavColorContext";


const navbarBackgroundColorInit = { r: 8, g: 57, b: 82, a: 1 }
export const NavColorProvider = ({ children }) => {
    const [navbarBackgroundColor, setNavbarBackgroundColor] = useState(navbarBackgroundColorInit);

    return (
        <NavColorContext.Provider value={{ navbarBackgroundColor, setNavbarBackgroundColor, navbarBackgroundColorInit }}>
            {children}
        </NavColorContext.Provider>
    )
}

import { useEffect, useState } from "react";
import { NavColorContext } from "./NavColorContext";


export const NavColorProvider = ({ children }) => {
    const [backgroundColor, setBackgroundColor] = useState({ r: 8, g: 57, b: 82, a: 1 });
    useEffect(() => {
        const { r, g, b, a } = backgroundColor;
        document.querySelector('nav').style.backgroundColor = `rgba(${r}, ${g}, ${b}, ${a})`;
    }, [backgroundColor]);

    return (
        <NavColorContext.Provider value={{ backgroundColor, setBackgroundColor }}>
            {children}
        </NavColorContext.Provider>
    )
}

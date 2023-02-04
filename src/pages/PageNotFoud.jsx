import { useContext, useLayoutEffect } from "react";
import { NavLink } from "react-router-dom"
import { NavColorContext } from "../context/NavColorContext";

export const PageNotFoud = ({ pathname }) => {
    const { setNavbarBackgroundColor, navbarBackgroundColorInit } = useContext(NavColorContext);

    useLayoutEffect(() => {
        window.scrollTo(0, 0);
        setNavbarBackgroundColor(navbarBackgroundColorInit)
    }, [pathname]);
    return (
        <section className="section-esp vh-100">
            <h1>Error 404: Page not found</h1>
            <hr />
            <div className="row justify-content-center">
                <p>This page not found or is unathorized resource</p>
                <NavLink to={"/"}>Home</NavLink>
            </div>
        </section>
    )
}

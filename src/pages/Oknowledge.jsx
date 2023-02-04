import { useContext, useLayoutEffect } from "react";
import { DataBaseEngine } from "../components/DataBaseEngine";
import { dbengines } from '../../data/dbengines';
import { otherTech } from '../../data/otherTech';
import { NavColorContext } from "../context/NavColorContext";

export const Oknoledge = ({ pathname }) => {
    const { setNavbarBackgroundColor, navbarBackgroundColorInit } = useContext(NavColorContext);
    useLayoutEffect(() => {
        window.scrollTo(0, 0);
        setNavbarBackgroundColor(navbarBackgroundColorInit)
    }, [pathname]);
    return (
        <section className="section-esp" >
            <h1>Other Knowledge</h1>
            <hr />
            <div className="row justify-content-center">
                <div className="col-md-11">
                    <DataBaseEngine title="Database engines" dbdata={dbengines} />
                    <DataBaseEngine title="Other technologies" dbdata={otherTech} />
                </div>
            </div>
        </section>
    )
}

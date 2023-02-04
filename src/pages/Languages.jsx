import { useContext, useLayoutEffect } from "react";
import { TechRightCard } from "../components/TechRightCard";
import { feskills } from '../../data/frontendskills';
import { NavColorContext } from "../context/NavColorContext";

export const Languages = ({ pathname }) => {
    const { setNavbarBackgroundColor, navbarBackgroundColorInit } = useContext(NavColorContext);
    useLayoutEffect(() => {
        window.scrollTo(0, 0);
        setNavbarBackgroundColor(navbarBackgroundColorInit)
    }, [pathname]);
    return (
        <section className="section-esp" >
            <h1>Frontend technologies</h1>
            <hr />
            <div className="row justify-content-center">
                <div className="col-md-10">
                    {
                        feskills.map((feskill, i) => (
                            <TechRightCard key={feskill.id} isRight={i % 2}{...feskill} />
                        ))
                    }
                </div>
            </div>
        </section>
    )
}

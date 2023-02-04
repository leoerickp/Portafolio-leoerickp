import { useContext, useLayoutEffect } from "react";
import { TechRightCard } from "../components/TechRightCard";
import { beskills } from '../../data/backendskills';
import { NavColorContext } from "../context/NavColorContext";


export const Frameworks = ({ pathname }) => {
    const { setNavbarBackgroundColor, navbarBackgroundColorInit } = useContext(NavColorContext);
    useLayoutEffect(() => {
        window.scrollTo(0, 0);
        setNavbarBackgroundColor(navbarBackgroundColorInit)
    }, [pathname]);
    return (
        <section className="section-esp" >
            <h1>Backend technologies</h1>
            <hr />
            <div className="row justify-content-center">
                <div className="col-md-10">
                    {
                        beskills.map((beskill, i) => (
                            <TechRightCard key={beskill.id} isRight={i % 2}{...beskill} />
                        ))
                    }
                </div>
            </div>

        </section>
    )
}

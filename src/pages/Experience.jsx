import { useContext, useLayoutEffect } from "react";
import { ExpierenceCard } from "../components/ExpierenceCard";
import { experiences } from '../../data/experiences';
import { NavColorContext } from "../context/NavColorContext";

export const Experience = ({ pathname }) => {
    const { setNavbarBackgroundColor, navbarBackgroundColorInit } = useContext(NavColorContext);
    useLayoutEffect(() => {
        window.scrollTo(0, 0);
        setNavbarBackgroundColor(navbarBackgroundColorInit)
    }, [pathname]);
    return (
        <section className="section-esp" >
            <h1>Experience</h1>
            <hr />
            <div className="row justify-content-center">
                <div className="col-md-10 fs-4">
                    {
                        experiences.map(experience => (
                            <ExpierenceCard key={experience.id} experience={experience} />
                        ))
                    }
                </div>
            </div>
        </section>
    )
}

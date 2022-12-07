import { useLayoutEffect } from "react";
import { ExpierenceCard } from "../components/ExpierenceCard";
import { experiences } from '../../data/experiences';

export const Experience = ({ pathname }) => {
    useLayoutEffect(() => {
        window.scrollTo(0, 0);
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

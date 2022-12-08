import { useLayoutEffect } from "react";
import { TechRightCard } from "../components/TechRightCard";
import { beskills } from '../../data/backendskills';


export const Frameworks = ({ pathname }) => {
    useLayoutEffect(() => {
        window.scrollTo(0, 0);
        document.querySelector('nav').style.backgroundColor = "rgba(8, 57, 82, 1)";
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

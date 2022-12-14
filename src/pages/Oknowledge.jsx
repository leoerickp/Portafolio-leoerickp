import { useLayoutEffect } from "react";
import { DataBaseEngine } from "../components/DataBaseEngine";
import { dbengines } from '../../data/dbengines';
import { otherTech } from '../../data/otherTech';

export const Oknoledge = ({ pathname }) => {
    useLayoutEffect(() => {
        window.scrollTo(0, 0);
        document.querySelector('nav').style.backgroundColor = "rgba(8, 57, 82, 1)";
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

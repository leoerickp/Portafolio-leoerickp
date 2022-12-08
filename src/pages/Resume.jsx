import { useLayoutEffect } from 'react';
import resumePdf from '../../public/assets/docs/Resume_Leo_Pereyra_ENG.pdf';
export const Resume = ({ pathname }) => {
    useLayoutEffect(() => {
        window.scrollTo(0, 0);
        document.querySelector('nav').style.backgroundColor = "rgba(8, 57, 82, 1)";
    }, [pathname]);
    return (
        <section className="section-esp" >
            <h1>Resume</h1>
            <hr />
            <div className="row justify-content-center">
                <div className="col-md-11 vh-100">
                    <iframe src={resumePdf} width="100%" height="100%" />
                </div>
            </div>
        </section>
    )
}

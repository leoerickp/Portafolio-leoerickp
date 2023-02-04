import { useContext, useLayoutEffect } from 'react';
import resumePdf from '../assets/docs/Resume_Leo_Pereyra_ENG.pdf';
import { NavColorContext } from '../context/NavColorContext';
export const Resume = ({ pathname }) => {
    const { setNavbarBackgroundColor, navbarBackgroundColorInit } = useContext(NavColorContext);
    useLayoutEffect(() => {
        window.scrollTo(0, 0);
        setNavbarBackgroundColor(navbarBackgroundColorInit)
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

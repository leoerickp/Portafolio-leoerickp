import { useCallback, useEffect, useLayoutEffect, useState } from "react";
import { AnimationOnScroll } from 'react-animation-on-scroll';

export const Home = ({ pathname }) => {
    const [y, setY] = useState(window.scrollY);

    const handleNavigation = useCallback(
        (e) => {
            const window = e.currentTarget;
            if (y > window.scrollY) {
                //console.log("scrolling up");

            } else if (y < window.scrollY) {
                //console.log("scrolling down");
            }
            setY(window.scrollY);
        },
        [y]
    );

    useEffect(() => {
        setY(window.scrollY);
        if (y === 0) {
            document.querySelector('nav').style.backgroundColor = "rgba(8, 57, 82, 0.3)";
        } else {
            document.querySelector('nav').style.backgroundColor = "rgba(8, 57, 82, 1)";
        }
        window.addEventListener("scroll", handleNavigation);

        return () => {
            window.removeEventListener("scroll", handleNavigation);
        };
    }, [handleNavigation]);
    useLayoutEffect(() => {
        window.scrollTo(0, 0);
        document.querySelector('nav').style.backgroundColor = "rgba(8, 57, 82, 0.3)";
    }, [pathname]);

    return (
        <>
            <section className="vh-100">
                <div className="Nu95r">
                    <div className="container ">
                        <div className="mYVXT">
                            <div className="main-message shadow-lg animate__animated animate__bounce">
                                <p>The future is today!</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section >
                <h1>Who I am?</h1>
                <hr />
                <div className="row justify-content-center">
                    <div className="col-md-10 fs-4">
                        <AnimationOnScroll animateIn="animate__backInDown">
                            <div className="card shadow mb-3">
                                <div className="card-body">
                                    <p>I am a Fullstack Developer and Scrum Master with more than 10 years of experience developing BackEnd and FrontEnd solutions with frameworks such as ReactJs, NodeJS, Angular, VueJS and MSSQL, MySQL and PostgreSQL databases, leading projects through agile Scrum, Design Thinking and Kanban methodologies. My goal is to contribute to the development of IT solutions on a global scale, leading dynamic and high-performance teams, promoting research, technological development and corporate growth.</p>
                                </div>
                            </div>
                        </AnimationOnScroll>

                    </div>
                </div>
            </section>

        </>
    )
}

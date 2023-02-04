import { useCallback, useContext, useEffect, useLayoutEffect, useState } from "react";
import { AnimationOnScroll } from 'react-animation-on-scroll';
import { NavColorContext } from "../context/NavColorContext";

export const Home = ({ pathname }) => {
    const { navbarBackgroundColor, setNavbarBackgroundColor } = useContext(NavColorContext);
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
        const { a } = navbarBackgroundColor;
        if (y >= 0 && y < 50) {
            if (a !== 0.3) {
                setNavbarBackgroundColor({ ...navbarBackgroundColor, a: 0.3 });
            }
        }
        else if (y >= 50 && y < 150) {
            if (a !== 0.5) {
                setNavbarBackgroundColor({ ...navbarBackgroundColor, a: 0.5 });
            }
        }
        else if (y >= 150 && y < 250) {
            if (a !== 0.7) {
                setNavbarBackgroundColor({ ...navbarBackgroundColor, a: 0.7 });
            }
        }
        else if (y >= 250 && y < 350) {
            if (a !== 0.9) {
                setNavbarBackgroundColor({ ...navbarBackgroundColor, a: 0.9 });
            }
        }
        else if (y >= 350 && y < 450) {
            if (a !== 1) {
                setNavbarBackgroundColor({ ...navbarBackgroundColor, a: 1 });
            }
        }

        window.addEventListener("scroll", handleNavigation);

        return () => {
            window.removeEventListener("scroll", handleNavigation);
        };
    }, [handleNavigation]);
    useLayoutEffect(() => {
        window.scrollTo(0, 0);
        //document.querySelector('nav').style.navbarBackgroundColor = "rgba(8, 57, 82, 0.3)";

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

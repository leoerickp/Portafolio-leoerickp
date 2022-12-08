import { useLayoutEffect } from "react";
import { AnimationOnScroll } from 'react-animation-on-scroll';

export const Contact = ({ pathname }) => {
    useLayoutEffect(() => {
        window.scrollTo(0, 0);
        document.querySelector('nav').style.backgroundColor = "rgba(8, 57, 82, 1)";
    }, [pathname]);
    return (
        <section className="section-esp vh-100">
            <h1>Contact</h1>
            <hr />
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <AnimationOnScroll animateIn="animate__fadeInDown">
                        <div className="card shadow">

                            <div className="card-body">
                                <form >
                                    <div className="row mb-3">
                                        <label htmlFor="name" className="col-md-4 col-form-label text-md-end">Name:</label>
                                        <div className="col-md-6">
                                            <input type="text" className="form-control" name="name" id="name" placeholder="Ex. Jhon Smith" />
                                        </div>
                                    </div>
                                    <div className="row mb-3">
                                        <label htmlFor="email" className="col-md-4 col-form-label text-md-end">Email:</label>
                                        <div className="col-md-6">
                                            <input type="text" className="form-control" name="subject" id="subject" placeholder="Ex. jsmith@gmail.com" />
                                        </div>
                                    </div>
                                    <div className="row mb-3">
                                        <label htmlFor="subject" className="col-md-4 col-form-label text-md-end">Subject:</label>
                                        <div className="col-md-6">
                                            <input type="text" className="form-control" name="subject" id="subject" placeholder="Ex. Interview for a position" />
                                        </div>
                                    </div>

                                    <div className="row mb-3">
                                        <label htmlFor="message" className="col-md-4 col-form-label text-md-end">Message:</label>
                                        <div className="col-md-6">
                                            <textarea className="form-control" name="message" id="message" placeholder="Message..." rows="4"></textarea>
                                        </div>
                                    </div>
                                    <div className="row mb-3">
                                        <div className="col-md-6 offset-md-4">
                                            <button className="btn btn-primary">Send</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </AnimationOnScroll>
                </div>
            </div >
        </section >
    )
}

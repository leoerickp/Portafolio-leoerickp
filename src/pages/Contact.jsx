import { useContext, useLayoutEffect } from "react";
import { AnimationOnScroll } from 'react-animation-on-scroll';
import { NavColorContext } from "../context/NavColorContext";
import { useForm } from "../hooks/useForm";

const initialFormState = {
    name: '',
    email: '',
    subject: '',
    message: ''
};

export const Contact = ({ pathname }) => {
    const { setNavbarBackgroundColor, navbarBackgroundColorInit } = useContext(NavColorContext);
    const { name, email, subject, message, onChangeInput } = useForm(initialFormState);
    useLayoutEffect(() => {
        window.scrollTo(0, 0);
        setNavbarBackgroundColor(navbarBackgroundColorInit)
    }, [pathname]);
    const onSubmit = (e) => {
        e.preventDefault();
        console.log(message);
    }
    return (
        <section className="section-esp vh-100">
            <h1>Contact</h1>
            <hr />
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <AnimationOnScroll animateIn="animate__fadeInDown">
                        <div className="card shadow">

                            <div className="card-body">
                                <form onSubmit={onSubmit}>
                                    <div className="row mb-3">
                                        <label htmlFor="name" className="col-md-4 col-form-label text-md-end">Name:</label>
                                        <div className="col-md-6">
                                            <input type="text" className="form-control" name="name" value={name} onChange={onChangeInput} id="name" placeholder="Ex. Jhon Smith" />
                                        </div>
                                    </div>
                                    <div className="row mb-3">
                                        <label htmlFor="email" className="col-md-4 col-form-label text-md-end">Email:</label>
                                        <div className="col-md-6">
                                            <input type="text" className="form-control" name="email" value={email} onChange={onChangeInput} id="subject" placeholder="Ex. jsmith@gmail.com" />
                                        </div>
                                    </div>
                                    <div className="row mb-3">
                                        <label htmlFor="subject" className="col-md-4 col-form-label text-md-end">Subject:</label>
                                        <div className="col-md-6">
                                            <input type="text" className="form-control" name="subject" value={subject} onChange={onChangeInput} id="subject" placeholder="Ex. Interview for a position" />
                                        </div>
                                    </div>

                                    <div className="row mb-3">
                                        <label htmlFor="message" className="col-md-4 col-form-label text-md-end">Message:</label>
                                        <div className="col-md-6">
                                            <textarea className="form-control" name="message" value={message} onChange={onChangeInput} id="message" placeholder="Message..." rows="4">{message}</textarea>
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

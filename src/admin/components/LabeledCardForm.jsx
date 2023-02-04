import { useContext } from "react"
import { FormContext } from "../context/form/FormContext"

export const LabeledCardForm = ({ children, closeButton = true }) => {
    const { formTitle, closeForm } = useContext(FormContext)
    return (
        <div className="row justify-content-center">
            <div className="col-md-8">
                {/*<AnimationOnScroll animateIn="animate__fadeInDown">*/}
                <div className="card shadow mb-4">
                    <div className="card-header py-3 d-flex justify-content-between">
                        <h2 className="m-0 font-weight-bold">{formTitle}</h2>
                        {
                            closeButton && <button type="button" className="btn-close" aria-label="Close" onClick={() => closeForm()}></button>
                        }
                    </div>
                    <div className="card-body">

                        {children}

                    </div>
                </div>
                {/*</AnimationOnScroll>*/}
            </div>
        </div>

    )
}

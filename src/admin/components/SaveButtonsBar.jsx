import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useContext } from "react"
import { FormContext } from "../context/form/FormContext"

export const SaveButtonsBar = ({ closeButton = true, disabled = false }) => {
    const { closeForm } = useContext(FormContext);
    return (
        <div className="d-flex gap-2" >
            <button type="submit" className="btn btn-primary" disabled={disabled}>
                {disabled ? (<><span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span> Saving...</>) : (<><FontAwesomeIcon icon="fa-solid fa-cloud-arrow-up" /> Save</>)}
            </button>
            {
                closeButton && <button type="button" className="btn btn-secondary" onClick={() => closeForm()}>Close</button>
            }
        </div>
    )
}

import { useState } from "react";
import { useEffect } from "react";
import { useContext } from "react"
import { FormContext } from "../context/form/FormContext"

export const ConfirmDialog = ({ ConfirmDialogRef, dataMessage: { titleMessage, message, type } }) => {
    const { buttonsEventsHandle: { onAccept, onCancel } } = useContext(FormContext);
    const [isVisibleButtonAccept, setIsVisibleButtonAccept] = useState(true);
    const [acceptCaption, setAcceptCaption] = useState("Save changes");
    const [classAcceptButton, setClassAcceptButton] = useState('btn-primary');
    useEffect(() => {
        setIsVisibleButtonAccept(type === 'Save' || type === 'Delete');
        if (type === 'Save') {
            setAcceptCaption('Save changes');
            setClassAcceptButton('btn-primary')
        }
        if (type === 'Delete') {
            setAcceptCaption('Delete register');
            setClassAcceptButton('btn-danger')
        }
    }, [type])

    const handleAccept = () => {
        onAccept();
    }
    const handleCancel = () => {
        onCancel();
    }
    return (
        <div ref={ConfirmDialogRef} className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h1 className="modal-title fs-5" id="staticBackdropLabel">{titleMessage}</h1>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        {message}
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" onClick={() => handleCancel()}>Close</button>
                        {
                            isVisibleButtonAccept && <button type="button" className={`btn ${classAcceptButton}`} data-bs-dismiss="modal" onClick={() => handleAccept()}>{acceptCaption}</button>
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

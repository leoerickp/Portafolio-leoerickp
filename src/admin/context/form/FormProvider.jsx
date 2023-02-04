import { useRef, useState } from "react";
import { useDataForm } from "../../../hooks";
import { ConfirmDialog } from "../../components/ConfirmDialog";
import { FormContext } from "./FormContext"


export const FormProvider = ({ children }) => {
    const ConfirmDialogRef = useRef();

    const {
        visibleForm,
        showForm,
        closeForm,
        formTitle,
        formValues
    } = useDataForm();
    const [buttonsEventsHandle, setButtonsEventsHandle] = useState({
        onCancel: () => { },
        onAccept: () => { }
    });

    const [dataMessage, setDataMessage] = useState({ titleMessage: '', message: '', type: "Save" });

    const showMessage = (titleMessage = "", message = "", type = "Save", onAccept = () => { }, onCancel = () => { }) => {
        setButtonsEventsHandle({
            ...buttonsEventsHandle, onAccept, onCancel
        })
        setDataMessage({ titleMessage, message, type });
        const modal = new bootstrap.Modal(ConfirmDialogRef.current);
        modal.show();
    }

    const showSaveDialog = (titleMessage = "", message = "", onAccept = () => { }, onCancel = () => { }) => {
        showMessage(titleMessage, message, "Save", onAccept, onCancel);
    }
    const showDeleteDialog = (titleMessage = "", message = "", onAccept = () => { }, onCancel = () => { }) => {
        showMessage(titleMessage, message, "Delete", onAccept, onCancel);
    }
    const showOkDialog = (titleMessage = "", message = "", onAccept = () => { }, onCancel = () => { }) => {
        showMessage(titleMessage, message, "OK", onAccept, onCancel);
    }
    return (
        <FormContext.Provider value={{
            showSaveDialog,
            showDeleteDialog,
            showOkDialog,
            buttonsEventsHandle,
            setButtonsEventsHandle,
            visibleForm,
            showForm,
            closeForm,
            formTitle,
            formValues
        }}>
            {children}
            <ConfirmDialog ConfirmDialogRef={ConfirmDialogRef} dataMessage={dataMessage} />
        </FormContext.Provider>
    )
}

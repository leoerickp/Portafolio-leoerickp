import { useState } from "react";

export const useDataForm = () => {
    const [visibleForm, setVisibleForm] = useState(false);
    const [formTitle, setFormTitle] = useState('Form');
    const [formValues, setFormValues] = useState(null);
    const closeForm = () => {
        setVisibleForm(false);
    }
    const showForm = (formTitle, defaultFormValues = null) => {
        setFormValues(defaultFormValues);
        setFormTitle(formTitle);
        setVisibleForm(true);
    }
    return {
        visibleForm,
        showForm,
        closeForm,
        formTitle,
        formValues
    }
}
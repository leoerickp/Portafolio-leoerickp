import { useState } from "react"

export const useForm = (initalFormState = {}) => {
    const [formState, setFormState] = useState(initalFormState);
    const onChangeInput = ({ target }) => {
        const { name, value } = target;
        setFormState({
            ...formState,
            [name]: value
        })
    }
    const resetForm = () => {
        setFormState(initalFormState);
    }
    return {
        ...formState,
        formState,
        onChangeInput,
        resetForm
    }
}
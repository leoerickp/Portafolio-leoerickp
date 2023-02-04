import { useContext } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { FormContext } from "../../context/form/FormContext";
import { createRegister, updateRegister } from "../../slices/experience/thunks";
import { InputControl } from "../../components/InputControl";
import { CheckInputControl } from "../../components/CheckInputControl";
import { FrameForm } from "../../components/FrameForm";

const schema = yup.object({
    name: yup.string().min(2, 'Min length must be more than 2 characters').required('The user name field is required'),
    email: yup.string().email('The email is not valid').required('The email field is required'),
    password: yup.string().min(6, 'Min length must be more than 6 characters').required('The password field is required'),
    confirmationPassword: yup.string().oneOf([yup.ref('password'), null], 'Passwords must match'),
    isActive: yup.boolean().required()
}).required();
export const UserForm = () => {
    const setDefaultValues = (values) => {
        return {
            name: values?.name || '',
            email: values?.email || '',
            isActive: values?.isActive || true
        }
    }
    const getDataForSaving = (data) => {
        const { name, email, password, isActive } = data;

        return {
            name,
            email,
            password,
            isActive,
        }
    }

    const { formValues } = useContext(FormContext);
    const { register, handleSubmit, formState: { errors } } = useForm({
        defaultValues: setDefaultValues(formValues),
        resolver: yupResolver(schema)
    });

    return (
        <FrameForm options={{ getDataForSaving, updateRegister, createRegister, handleSubmit }}>
            <div className="row mb-3 px-3">
                <InputControl type='text' register={register} errors={errors} nameField='name' labelField='User name' />
            </div>
            <div className="row mb-3 px-3">
                <InputControl type='email' register={register} errors={errors} nameField='email' labelField='Email' />
            </div>
            <div className="row mb-3 px-3">
                <InputControl type='password' register={register} errors={errors} nameField='password' labelField='Password' />
            </div>
            <div className="row mb-3 px-3">
                <InputControl type='password' register={register} errors={errors} nameField='confirmationPassword' labelField='Confirmation password' />
            </div>
            <div className="row mb-3 px-3">
                <CheckInputControl register={register} errors={errors} nameField='isActive' labelField='Active' />
            </div>
        </FrameForm>
    )
}

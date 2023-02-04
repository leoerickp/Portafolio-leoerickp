import { useContext } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { FormContext } from "../../context/form/FormContext";
import { createRegister, updateRegister } from "../../slices/roles/thunks";
import { InputControl } from "../../components/InputControl";
import { FrameForm } from "../../components/FrameForm";

const schema = yup.object({
    roleName: yup.string().min(2, 'Min length must be more than 2 characters').required('The role name field is required'),
}).required();

export const RoleForm = () => {
    const setDefaultValues = (values) => {
        return {
            roleName: values?.roleName || ''
        }
    }
    const getDataForSaving = (data) => {
        const { roleName } = data;
        return {
            roleName
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
                <InputControl type='text' register={register} errors={errors} nameField='roleName' labelField='Role name' />
            </div>
        </FrameForm>
    )
}
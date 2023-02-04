import { useContext } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { FormContext } from "../../context/form/FormContext";
import { createRegister, updateRegister } from "../../slices/experience/thunks";
import { InputControl } from "../../components/InputControl";
import { CheckInputControl } from "../../components/CheckInputControl";
import { FrameForm } from "../../components/FrameForm";

const schema = yup.object({
    company: yup.string().min(2, 'Min length must be more than 2 characters').required('The company code field is required'),
    companyNameEn: yup.string().min(2, 'Min length must be more than 2 characters').required('The company name (English) field is required'),
    companyNameEs: yup.string().nullable().transform((o, c) => o === "" ? null : c).min(2, 'Min length must be more than 2 characters'),
    isVisible: yup.boolean().required()
}).required();
export const ExperienceForm = () => {
    const setDefaultValues = (values) => {
        return {
            company: values?.company || '',
            companyNameEn: values?.companyName?.en || '',
            companyNameEs: values?.companyName?.es || '',
            isVisible: values?.isVisible || true
        }
    }
    const getDataForSaving = (data) => {
        const { company, companyNameEn, companyNameEs, isVisible } = data;

        return {
            company,
            companyName: {
                en: companyNameEn,
                es: companyNameEs
            },
            isVisible,
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
                <InputControl type='text' register={register} errors={errors} nameField='company' labelField='Company Code' />
            </div>
            <div className="row mb-3 px-3">
                <InputControl type='text' register={register} errors={errors} nameField='companyNameEn' labelField='Company name (English)' />
            </div>
            <div className="row mb-3 px-3">
                <InputControl type='text' register={register} errors={errors} nameField='companyNameEs' labelField='Company name (Spanish)' />
            </div>
            <div className="row mb-3 px-3">
                <CheckInputControl register={register} errors={errors} nameField='isVisible' labelField='Visible' />
            </div>
        </FrameForm>
    )
}

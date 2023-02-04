import { useContext, useLayoutEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { FormContext } from "../../context/form/FormContext";
import { LabeledCardForm } from "../../components/LabeledCardForm"
import { SaveButtonsBar } from "../../components/SaveButtonsBar";
import { createRegister, updateRegister } from "../../slices/album/thunks";
import { InputControl } from "../../components/InputControl";
import { CheckInputControl } from "../../components/CheckInputControl";
import { FrameForm } from "../../components/FrameForm";

const schema = yup.object({
    albumName: yup.string().min(2, 'Min length must be more than 2 characters').required('The album name field is required'),
    isVisible: yup.boolean().required()
}).required();
export const AlbumForm = () => {
    const setDefaultValues = (values) => {
        return {
            albumName: values?.albumName || '',
            isVisible: values?.isVisible || true
        }
    }
    const getDataForSaving = (data) => {
        const { albumName, isVisible } = data;

        return {
            albumName,
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
                <InputControl type='text' register={register} errors={errors} nameField='albumName' labelField='Album name' />
            </div>
            <div className="row mb-3 px-3">
                <CheckInputControl register={register} errors={errors} nameField='isVisible' labelField='Visible' />
            </div>
        </FrameForm>
    )
}
/*export const AlbumForm = () => {
    const dispatch = useDispatch();
    const setDefaultValues = (values) => {
        return {
            albumName: values?.albumName || '',
            isVisible: values?.isVisible || true
        }
    }

    const saveData = (data) => {
        const { albumName, isVisible } = data;

        const dataForSaving = {
            albumName,
            isVisible,
        }

        showSaveDialog('Confirmation alert', 'Really, do you like to save the information?', () => {
            if (formValues) {
                dispatch(updateRegister(userData.token, formValues._id, dataForSaving));
            }
            else {
                dispatch(createRegister(userData.token, dataForSaving));
            }
            closeForm();
        });
    }

    const { userData } = useSelector((state) => state.auth);

    const { showSaveDialog, closeForm, formValues } = useContext(FormContext)
    const { register, handleSubmit, getValues, formState: { errors } } = useForm({
        defaultValues: setDefaultValues(formValues),
        resolver: yupResolver(schema)
    });


    useLayoutEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <LabeledCardForm>
            <form onSubmit={handleSubmit(saveData)}>
                <div className="row mb-3 px-3">
                    <InputControl type='text' register={register} errors={errors} nameField='albumName' labelField='Album name' />
                </div>
                <div className="row mb-3 px-3">
                    <CheckInputControl register={register} errors={errors} nameField='isVisible' labelField='Visible' />
                </div>
                <SaveButtonsBar />
            </form>
        </LabeledCardForm >
    )
}*/
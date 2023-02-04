import { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { FormContext } from "../../context/form/FormContext";
import { createRegister, updateRegister } from "../../slices/photos/thunks";
import { InputControl } from "../../components/InputControl";
import { CheckInputControl } from "../../components/CheckInputControl";
import { FrameForm } from "../../components/FrameForm";
import { ImageInput } from "../../components/ImageInput";
import { TextAreaControl } from "../../components/TextAreaControl";
import { config, portfolioApi } from "../../../api/portfolioApi";
import { useSelector } from "react-redux";


const schema = yup.object({
    imgUrl: yup.string().url('Is not a valid URL').required('The image URL field is required'),
    descriptionEn: yup.string().min(2, 'Min length must be more than 2 characters').required('The description (English) field is required'),
    descriptionEs: yup.string().nullable().transform((o, c) => o === "" ? null : c).min(2, 'Min length must be more than 2 characters'),
    isVisible: yup.boolean().required()
}).required();
export const PhotoForm = ({ idAlbum }) => {
    const { userData } = useSelector((state) => state.auth);
    const setDefaultValues = (values) => {
        return {
            imgUrl: values?.imgUrl || '',
            descriptionEn: values?.description?.en || '',
            descriptionEs: values?.description?.es || '',
            isVisible: values?.isVisible || true,
        }
    }
    const getDataForSaving = async (data) => {

        try {
            setIsUploading(true);
            const {
                imgUrl,
                descriptionEn,
                descriptionEs,
                isVisible
            } = data;
            let URL = imgUrl;
            if (formDataFinal) {
                console.log('begin save', formDataFinal);
                const defaultConfig = { headers: { ...config(userData.token).headers, 'content-type': 'multipart/form-data' } };
                const result = await portfolioApi.post('/files/photos/cloudinary', formDataFinal, defaultConfig);
                URL = result.data.secure_url;
                setFormDataFinal(null);
            }
            setIsUploading(false);
            console.log(descriptionEn);
            return {
                imgUrl: URL,
                description: {
                    en: descriptionEn,
                    es: descriptionEs
                },
                isVisible,
                albumId: idAlbum
            }

        } catch (error) {
            return;
        }

    }

    const { formValues } = useContext(FormContext);
    const { register, handleSubmit, getValues, reset, setValue, formState: { errors } } = useForm({
        defaultValues: setDefaultValues(formValues),
        resolver: yupResolver(schema)
    });


    const [imgtmp, setImgtmp] = useState(getValues('imgUrl'));
    const [isUploading, setIsUploading] = useState(false);
    const [formDataFinal, setFormDataFinal] = useState(null);

    useEffect(() => {
        reset(setDefaultValues(formValues));
        setImgtmp(getValues('imgUrl'));
    }, [formValues]);

    const onBeginUploadingPhoto = () => {
        setIsUploading(true);
    }

    const onEndUploadingPhoto = (secure_url, formData) => {
        if (formData) {
            setValue('imgUrl', secure_url);
            setFormDataFinal(formData);
        }
        setIsUploading(false);
    }

    return (
        <FrameForm options={{ getDataForSaving, updateRegister, createRegister, handleSubmit, disabled: isUploading }}>
            <div className="row mb-3 px-3">
                <ImageInput initialImg={imgtmp} classImg={'rounded-3 col-12 shadow'} onEndUploading={onEndUploadingPhoto} onBeginUploading={onBeginUploadingPhoto} />
            </div>

            <div className="row mb-3 px-3">
                <TextAreaControl register={register} errors={errors} nameField='descriptionEn' labelField='Description (English)' placeholder='Write a photo description...' />
            </div>

            <div className="row mb-3 px-3">
                <TextAreaControl register={register} errors={errors} nameField='descriptionEs' labelField='Description (Spanish)' placeholder='Escriba una descripción de la fotografía...' />
            </div>

            <div className="row mb-3 px-3">
                <CheckInputControl register={register} errors={errors} nameField='isVisible' labelField='Visible' />
            </div>
        </FrameForm>
    )
}
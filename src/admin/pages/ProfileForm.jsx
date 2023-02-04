import { yupResolver } from "@hookform/resolvers/yup";
import { format, parseISO } from "date-fns";
import { useContext, useEffect, useLayoutEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import * as yup from "yup";
import { InputControl } from "../components/InputControl";
import { LabeledCardForm } from "../components/LabeledCardForm";
import { SaveButtonsBar } from "../components/SaveButtonsBar";
import { TextAreaControl } from "../components/TextAreaControl";
import { FormContext } from "../context/form/FormContext";
import { createRegister, getProfiles, updateRegister } from "../slices/profile/thunks";
import photoprofile from '../../assets/img/photoprofile.jpg'
import { config, portfolioApi } from "../../api/portfolioApi";
import { ImageInput } from "../components/ImageInput";

const schema = yup.object({
    name: yup.string().min(3, 'Min length must be more than 3 characters').required('The role name field is required'),
    birthDate: yup.date('The brith date field is not a valid date').required('The birth from field is required'),
    englishLevel: yup.string().min(2, 'Min length must be more than 2 characters').required('The role name field is required'),
    email: yup.string().email('The email is not valid').required('The email field is required'),
    cellphone: yup.string().min(2, 'Min length must be more than 2 characters').required('The role name field is required'),
    githubRepository: yup.string().url('Is not a valid URL').required('The GitHub repository URL field is required'),
    linkedIn: yup.string().url('Is not a valid URL').required('The LinkedIn URL field is required'),
    city: yup.string().min(2, 'Min length must be more than 2 characters').required('The role name field is required'),
    facebook: yup.string().url('Is not a valid URL'),
    imgUrl: yup.string().url('Is not a valid URL'),
    aboutMeEn: yup.string().min(2, 'Min length must be more than 2 characters').required('The about me (English) field is required'),
    aboutMeEs: yup.string().nullable().transform((o, c) => o === "" ? null : c).min(2, 'Min length must be more than 2 characters'),
}).required();

export const ProfileForm = () => {

    const setDefaultValues = (values) => {
        return {
            name: values?.name || '',
            birthDate: format(values?.birthDate ? parseISO(values?.birthDate) : new Date(), "yyyy-MM-dd"),
            englishLevel: values?.englishLevel || '',
            email: values?.email || '',
            cellphone: values?.cellphone || '',
            githubRepository: values?.githubRepository || '',
            linkedIn: values?.linkedIn || '',
            city: values?.city || '',
            facebook: values?.facebook || '',
            imgUrl: values?.imgUrl || photoprofile,
            aboutMeEn: values?.aboutMe?.en || '',
            aboutMeEs: values?.aboutMe?.es || '',
        }
    }

    const dispatch = useDispatch();
    const { isLogged, userData } = useSelector((state) => state.auth);

    const { isLoading, data, error, count, limit, offset } = useSelector(
        (state) => state.profile
    );

    const { showSaveDialog, closeForm, formValues, showForm } = useContext(FormContext);

    const { register, handleSubmit, reset, setValue, getValues, formState: { errors } } = useForm({
        defaultValues: setDefaultValues(formValues),
        resolver: yupResolver(schema)
    });

    const reloadData = (limit = 0, offset = 0) => {
        if (isLogged) {
            dispatch(getProfiles(userData.token, limit, offset));
        }
    }

    useEffect(() => {
        reloadData();
    }, []);

    useEffect(() => {
        if (count > 0) {
            showForm("Personal information", data[count - 1]);
        } else {
            showForm("Personal information");
        }
    }, [count, data]);




    const saveData = async (data) => {
        const {
            name,
            birthDate,
            englishLevel,
            email,
            cellphone,
            githubRepository,
            linkedIn,
            city,
            facebook,
            imgUrl,
            aboutMeEn,
            aboutMeEs,
        } = data;
        const dataForSaving = {
            name,
            birthDate,
            englishLevel,
            email,
            cellphone,
            githubRepository,
            linkedIn,
            city,
            facebook,
            imgUrl,
            aboutMe: {
                en: aboutMeEn,
                es: aboutMeEs
            }
        }
        if (!dataForSaving.facebook) {
            delete dataForSaving.facebook;
        }
        if (!dataForSaving.imgUrl) {
            delete dataForSaving.imgUrl;
        }

        showSaveDialog('Confirmation alert', 'Really, do you like to save the information?', async () => {

            try {
                setIsUploading(true);
                if (formDataFinal) {
                    const defaultConfig = { headers: { ...config(userData.token).headers, 'content-type': 'multipart/form-data' } };
                    const result = await portfolioApi.post('/files/personalphoto/cloudinary', formDataFinal, defaultConfig);
                    dataForSaving.imgUrl = result.data.secure_url;
                    setFormDataFinal(null);
                }
                if (count > 0) {
                    dispatch(updateRegister(userData.token, formValues._id, dataForSaving));
                }
                else {
                    dispatch(createRegister(userData.token, dataForSaving));
                }
                closeForm();
                setIsUploading(false);

            } catch (error) {
                console.log(error);
            }
        });
    }

    useEffect(() => {
        reset(setDefaultValues(formValues));
        setImgtmp(getValues('imgUrl'));
    }, [formValues]);

    const [imgtmp, setImgtmp] = useState(getValues('imgUrl'));
    const [isUploading, setIsUploading] = useState(false);
    const [formDataFinal, setFormDataFinal] = useState(null);

    const onBeginUploadingPhoto = () => {
        setIsUploading(true);
    }

    const onEndUploadingPhoto = (secure_url, formData) => {
        setValue('imgUrl', secure_url);
        setFormDataFinal(formData);
        setIsUploading(false);
    }

    useLayoutEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <h1>Profile</h1>
            <hr />
            {isLoading && <Spinner />}
            {
                error !== null
                    ? <div className="alert alert-danger" skill="alert">Data "skills" could not be loaded successfully. Try to <NavLink to="/login" className="alert-link">Login</NavLink> again . Give it a click if you like.</div>
                    : <>
                        <LabeledCardForm closeButton={false}>
                            <form onSubmit={handleSubmit(saveData)} encType="multipart/form-data">
                                <div className="row mb-3 px-3">
                                    <InputControl type='text' register={register} errors={errors} nameField='name' labelField='Full name' />
                                </div>
                                <div className="row mb-3 px-3">
                                    <ImageInput initialImg={imgtmp} onEndUploading={onEndUploadingPhoto} onBeginUploading={onBeginUploadingPhoto} />
                                </div>

                                <div className="row mb-3 px-3">
                                    <InputControl type='date' register={register} errors={errors} nameField='birthDate' labelField='Birth date' />
                                </div>

                                <div className="row mb-3 px-3">
                                    <InputControl type='email' register={register} errors={errors} nameField='email' labelField='Email' />
                                </div>

                                <div className="row mb-3 px-3">
                                    <InputControl type='text' register={register} errors={errors} nameField='cellphone' labelField='Celphone number' />
                                </div>

                                <div className="row mb-3 px-3">
                                    <InputControl type='text' register={register} errors={errors} nameField='city' labelField='City' />
                                </div>

                                <div className="row mb-3 px-3">
                                    <TextAreaControl register={register} errors={errors} nameField='aboutMeEn' labelField='About me (English)' placeholder='Write something about me...' />
                                </div>

                                <div className="row mb-3 px-3">
                                    <TextAreaControl register={register} errors={errors} nameField='aboutMeEs' labelField='Acerca de mi (Spanish)' placeholder='Escriba acerca de mi...' />
                                </div>

                                <div className="row mb-3 px-3">
                                    <InputControl type='text' register={register} errors={errors} nameField='englishLevel' labelField='English level' />
                                </div>

                                <div className="row mb-3 px-3">
                                    <InputControl type='text' register={register} errors={errors} nameField='githubRepository' labelField='Github repository' />
                                </div>
                                <div className="row mb-3 px-3">
                                    <InputControl type='text' register={register} errors={errors} nameField='linkedIn' labelField='LinkedIn profile' />
                                </div>

                                <div className="row mb-3 px-3">
                                    <InputControl type='text' register={register} errors={errors} nameField='facebook' labelField='Facebook' />
                                </div>
                                <SaveButtonsBar closeButton={false} disabled={isUploading} />
                            </form>
                        </LabeledCardForm >
                    </>
            }
        </>
    )
};

import { useContext, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { format, formatISO9075, parseISO } from "date-fns";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { FormContext } from "../../context/form/FormContext";
import { createRegister, updateRegister } from "../../slices/projects/thunks";
import { getRoles } from "../../slices/roles/thunks";
import { getSkills } from "../../slices/skills/thunks";
import { ToggleRoleButtom } from "../../components/ToggleRoleButtom";
import { ToggleSkillButtom } from "../../components/ToggleSkillButtom";
import { InputControl } from "../../components/InputControl";
import { TextAreaControl } from "../../components/TextAreaControl";
import { CheckInputControl } from "../../components/CheckInputControl";
import { HiddenInputControl } from "../../components/HiddenInputControl";
import { FrameForm } from "../../components/FrameForm";


const schema = yup.object({
    projectName: yup.string().min(2, 'Min length must be more than 2 characters').required('The project name field is required'),
    projectTitleEn: yup.string().min(2, 'Min length must be more than 2 characters').required('The project title (English) field is required'),
    projectTitleEs: yup.string().nullable().transform((o, c) => o === "" ? null : c).min(2, 'Min length must be more than 2 characters'),
    companyEn: yup.string().min(2, 'Min length must be more than 2 characters').required('The company (English) field is required'),
    companyEs: yup.string().nullable().transform((o, c) => o === "" ? null : c).min(2, 'Min length must be more than 2 characters'),
    projectDate: yup.date('The project date field is not a valid date').required('The project date field is required'),
    summaryEn: yup.string().min(2, 'Min length must be more than 2 characters').required('The summary (English) field is required'),
    summaryEs: yup.string().nullable().transform((o, c) => o === "" ? null : c).min(2, 'Min length must be more than 2 characters'),
    numRoles: yup.number().min(1, 'Value must be more than 1').required('The roles field is required'),
    numSkills: yup.number().min(1, 'Value must be more than 1').required('The technologies field is required'),
    isVisible: yup.boolean().required()
}).required();
export const ProjectForm = () => {
    const setDefaultValues = (values) => {
        return {
            projectName: values?.projectName || '',
            projectTitleEn: values?.projectTitle?.en || '',
            projectTitleEs: values?.projectTitle?.es || '',
            companyEn: values?.company?.en || '',
            companyEs: values?.company?.es || '',
            projectDate: format(values?.projectDate ? parseISO(values?.projectDate) : new Date(), "yyyy-MM-dd"),
            isVisible: values?.isVisible || true,
            summaryEn: values?.summary?.en || '',
            summaryEs: values?.summary?.es || '',
        }
    }
    const getDataForSaving = (data) => {
        const {
            projectName,
            projectTitleEn,
            projectTitleEs,
            companyEn,
            companyEs,
            projectDate,
            summaryEn,
            summaryEs,
            isVisible
        } = data;
        const developerRolesId = devRoles?.map(devRole => devRole?._id) || [];

        const hardSkillsId = technologies?.map(tech => tech?._id) || [];

        return {
            projectName,
            projectTitle: {
                en: projectTitleEn,
                es: projectTitleEs
            },
            company: {
                en: companyEn,
                es: companyEs
            },
            projectDate: formatISO9075(projectDate, "yyyy-MM-ddThh:MM:ssZ"),
            developerRolesId,
            hardSkillsId,
            summary: {
                en: summaryEn,
                es: summaryEs
            },
            isVisible,
        }
    }

    const { formValues } = useContext(FormContext);
    const { register, handleSubmit, setValue, clearErrors, setError, formState: { errors } } = useForm({
        defaultValues: setDefaultValues(formValues),
        resolver: yupResolver(schema)
    });

    const dispatch = useDispatch();
    const { userData, isLogged } = useSelector((state) => state.auth);
    const [devRoles, setDevRoles] = useState(formValues?.developerRolesId || []);
    const [technologies, setTechnologies] = useState(formValues?.hardSkillsId || []);

    const { isLoading: isLoadingRoles, data: roles } = useSelector(
        (state) => state.roles
    );
    const { isLoading: isLoadingSkills, data: skills } = useSelector(
        (state) => state.skills
    );

    const loadRoles = (limit = 0, offset = 0) => {
        if (isLogged) {
            dispatch(getRoles(userData.token, limit, offset));
        }
    }

    const loadSkills = (limit = 0, offset = 0) => {
        if (isLogged) {
            dispatch(getSkills(userData.token, 1000, offset));
        }
    }

    useEffect(() => {
        loadRoles();
        loadSkills();
    }, []);


    useEffect(() => {
        setValue('numRoles', devRoles.length);
        if (devRoles.length === 0)
            setError('numRoles', { type: 'custom', message: 'Value must be more than 1' });
        else
            clearErrors('numRoles');
    }, [devRoles]);

    useEffect(() => {
        setValue('numSkills', technologies.length);
        if (technologies.length === 0)
            setError('numSkills', { type: 'custom', message: 'Value must be more than 1' });
        else
            clearErrors('numSkills');
    }, [technologies]);


    return (
        <FrameForm options={{ getDataForSaving, updateRegister, createRegister, handleSubmit }}>
            <div className="row mb-3 px-3">
                <InputControl type='text' register={register} errors={errors} nameField='projectName' labelField='Project name' />
            </div>

            <div className="row mb-3 px-3">
                <InputControl type='text' register={register} errors={errors} nameField='projectTitleEn' labelField='Project title (English)' />
            </div>

            <div className="row mb-3 px-3">
                <InputControl type='text' register={register} errors={errors} nameField='projectTitleEs' labelField='Project title (Spanish)' />
            </div>

            <div className="row mb-3 px-3">
                <InputControl type='text' register={register} errors={errors} nameField='companyEn' labelField='Company (English)' />
            </div>

            <div className="row mb-3 px-3">
                <InputControl type='text' register={register} errors={errors} nameField='companyEs' labelField='Company (Spanish)' />
            </div>


            <div className="row mb-3 px-3">
                <InputControl type='date' register={register} errors={errors} nameField='projectDate' labelField='Proyect date' />
            </div>

            <div className="row mb-3 px-3">
                <TextAreaControl register={register} errors={errors} nameField='summaryEn' labelField='Summary (English)' placeholder='Write a project summary...' />
            </div>

            <div className="row mb-3 px-3">
                <TextAreaControl register={register} errors={errors} nameField='summaryEs' labelField='Summary (Spanish)' placeholder='Escriba un resumen del proyecto...' />
            </div>

            <div className="card mb-3">
                <div className="card-header">
                    Roles
                    <HiddenInputControl register={register} errors={errors} nameField='numRoles' />
                </div>
                <div className="card-body d-flex gap-2 flex-wrap">
                    {
                        roles.map(role => (
                            <ToggleRoleButtom key={role._id} role={role} devRoles={devRoles} setDevRoles={setDevRoles} />
                        ))
                    }
                </div>
            </div>

            <div className="card mb-3">
                <div className="card-header">
                    Technologies
                    <HiddenInputControl register={register} errors={errors} nameField='numSkills' />
                </div>
                <div className="card-body d-flex gap-2 flex-wrap">
                    {
                        skills.map(skill => (
                            <ToggleSkillButtom key={skill._id} skill={skill} technologies={technologies} setTechnologies={setTechnologies} />
                        ))
                    }
                </div>
            </div>

            <div className="row mb-3 px-3">
                <CheckInputControl register={register} errors={errors} nameField='isVisible' labelField='Visible' />
            </div>
        </FrameForm>
    )
}
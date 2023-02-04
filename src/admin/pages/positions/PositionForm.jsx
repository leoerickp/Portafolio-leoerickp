import { useContext, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { format, formatISO9075, parseISO } from "date-fns";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { FormContext } from "../../context/form/FormContext";
import { createRegister, updateRegister } from "../../slices/position/thunks";
import { getSkills } from "../../slices/skills/thunks";
import { ToggleSkillButtom } from "../../components/ToggleSkillButtom";
import { InputControl } from "../../components/InputControl";
import { TextAreaControl } from "../../components/TextAreaControl";
import { CheckInputControl } from "../../components/CheckInputControl";
import { HiddenInputControl } from "../../components/HiddenInputControl";
import { StringToArray } from "../../helpers/string-to-array";
import { FrameForm } from "../../components/FrameForm";


const schema = yup.object({
    positionNameEn: yup.string().min(2, 'Min length must be more than 2 characters').required('The postion name (English) field is required'),
    positionNameEs: yup.string().nullable().transform((o, c) => o === "" ? null : c).min(2, 'Min length must be more than 2 characters'),
    dateFrom: yup.date('The position date field is not a valid date').required('The position date from field is required'),
    dateTo: yup.date('The position date field is not a valid date').required('The position date to field is required'),
    achievementsEn: yup.string().min(2, 'Min length must be more than 2 characters').required('The summary (English) field is required'),
    achievementsEs: yup.string().nullable().transform((o, c) => o === "" ? null : c).min(2, 'Min length must be more than 2 characters'),
    numSkills: yup.number().min(1, 'Value must be more than 1').required('The technologies field is required'),
    isVisible: yup.boolean().required()
}).required();
export const PositionForm = ({ idExperience }) => {
    const setDefaultValues = (values) => {
        let EnLines = '';
        let EsLines = '';
        values?.achievements?.forEach(achievement => {
            if (achievement.en) {
                EnLines += achievement.en + '\n';
            }
            if (achievement.es) {
                EnLines += achievement.es + '\n';
            }
        });
        return {
            positionNameEn: values?.positionName?.en || '',
            positionNameEs: values?.positionName?.es || '',
            dateFrom: format(values?.date.from ? parseISO(values?.date.from) : new Date(), "yyyy-MM-dd"),
            dateTo: format(values?.date.to ? parseISO(values?.date.to) : new Date(), "yyyy-MM-dd"),
            achievementsEn: EnLines || '',
            achievementsEs: EsLines || '',
            isVisible: values?.isVisible || true,
        }
    }
    const getDataForSaving = (data) => {
        const {
            positionNameEn,
            positionNameEs,
            dateFrom,
            dateTo,
            achievementsEn,
            achievementsEs,
            isVisible
        } = data;

        const hardSkillsId = technologies?.map(tech => tech?._id) || [];

        const en = StringToArray(achievementsEn);
        const es = achievementsEs ? StringToArray(achievementsEs) : '';
        const n = en.length > es.length ? en.length : es.length;
        let achievements = [];
        for (let i = 0; i < n; i++) {
            achievements[i] = {};
            if (en[i]) achievements[i].en = en[i];
            if (es[i]) achievements[i].es = es[i];
        }

        return {
            positionName: {
                en: positionNameEn,
                es: positionNameEs
            },
            date: {
                from: formatISO9075(dateFrom, "yyyy-MM-ddThh:MM:ssZ"),
                to: formatISO9075(dateTo, "yyyy-MM-ddThh:MM:ssZ")
            },
            hardSkillsId,
            achievements,
            isVisible,
            experienceId: idExperience
        }
    }

    const { formValues } = useContext(FormContext);
    const { register, handleSubmit, setValue, clearErrors, setError, formState: { errors } } = useForm({
        defaultValues: setDefaultValues(formValues),
        resolver: yupResolver(schema)
    });

    const dispatch = useDispatch();
    const { isLogged, userData } = useSelector((state) => state.auth);
    const { isLoading: isLoadingSkills, data: skills } = useSelector((state) => state.skills);
    const [technologies, setTechnologies] = useState(formValues?.hardSkillsId || []);

    const loadSkills = (limit = 0, offset = 0) => {
        if (isLogged) {
            dispatch(getSkills(userData.token, 1000, offset));
        }
    }

    useEffect(() => {
        loadSkills();
    }, []);


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
                <InputControl type='text' register={register} errors={errors} nameField='positionNameEn' labelField='Position name (English)' />
            </div>

            <div className="row mb-3 px-3">
                <InputControl type='text' register={register} errors={errors} nameField='positionNameEs' labelField='Position name (Spanish)' />
            </div>

            <div className="row mb-3 px-3">
                <InputControl type='date' register={register} errors={errors} nameField='dateFrom' labelField='Position date from' />
            </div>

            <div className="row mb-3 px-3">
                <InputControl type='date' register={register} errors={errors} nameField='dateTo' labelField='Position date to' />
            </div>

            <div className="row mb-3 px-3">
                <TextAreaControl register={register} errors={errors} nameField='achievementsEn' labelField='Achievement (English)' placeholder='Write the main achivement in the position...' />
            </div>

            <div className="row mb-3 px-3">
                <TextAreaControl register={register} errors={errors} nameField='achievementsEs' labelField='Achievement (Spanish)' placeholder='Escriba los principales logros en la position...' />
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

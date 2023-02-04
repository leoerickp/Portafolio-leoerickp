import { useContext, useEffect, useLayoutEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { FormContext } from "../../context/form/FormContext";
import { StringToArray } from "../../helpers/string-to-array";
import { createRegister, updateRegister } from "../../slices/skills/thunks";
import { InputControl } from "../../components/InputControl";
import { TextAreaControl } from "../../components/TextAreaControl";
import { CheckInputControl } from "../../components/CheckInputControl";
import { FrameForm } from "../../components/FrameForm";

const schema = yup.object({
    technology: yup.string().min(2, 'Min length must be more than 2 characters').required('The technology field is required'),
    amountPrjs: yup.number().min(0, 'Value must be more than 0').required('The projects amount field is required'),
    imgUrl: yup.string().url().nullable().transform((o, c) => o === "" ? null : c).min(5, 'Min length must be more than 2 characters'),
    knowledgeEn: yup.string().min(2, 'Min length must be more than 2 characters').required('The knowledge (English) field is required'),
    knowledgeEs: yup.string().nullable().transform((o, c) => o === "" ? null : c).min(2, 'Min length must be more than 2 characters'),
    isVisible: yup.boolean().required()
}).required();
export const SkillForm = () => {
    const setDefaultValues = (values) => {
        let EnLines = '';
        let EsLines = '';
        values?.knowledges?.forEach(knowledge => {
            if (knowledge.en) {
                EnLines += knowledge.en + '\n';
            }
            if (knowledge.es) {
                EnLines += knowledge.es + '\n';
            }
        });

        return {
            technology: values?.technology || '',
            selfRate: values?.selfRate || 0,
            amountPrjs: values?.amountPrjs || 0,
            imgUrl: values?.imgUrl || '',
            isVisible: values?.isVisible || true,
            skillType: values?.skillType || "frontend",
            knowledgeEn: EnLines || '',
            knowledgeEs: EsLines || '',
        }
    }
    const getDataForSaving = (data) => {
        const { technology, selfRate, amountPrjs, imgUrl, isVisible, skillType, knowledgeEn, knowledgeEs } = data;
        const en = StringToArray(knowledgeEn);
        const es = knowledgeEs ? StringToArray(knowledgeEs) : '';
        const n = en.length > es.length ? en.length : es.length;
        let knowledges = [];
        for (let i = 0; i < n; i++) {
            knowledges[i] = {};
            if (en[i]) knowledges[i].en = en[i];
            if (es[i]) knowledges[i].es = es[i];
        }

        //TODO: mejorar la validación sobre todo de knowledge
        return {
            technology,
            selfRate,
            amountPrjs,
            imgUrl,
            isVisible,
            skillType,
            knowledges,
        }
    }

    const { formValues } = useContext(FormContext);
    const { register, handleSubmit, getValues, formState: { errors } } = useForm({
        defaultValues: setDefaultValues(formValues),
        resolver: yupResolver(schema)
    });

    const [imageUrl, setImageUrl] = useState('');
    const setImgage = () => {
        setImageUrl(getValues("imgUrl"));
    }
    useEffect(() => {
        if (formValues?.imgUrl) {
            setImageUrl(formValues.imgUrl);
        }
    }, [])


    return (
        <FrameForm options={{ getDataForSaving, updateRegister, createRegister, handleSubmit }}>
            <div className="row mb-3 px-3">
                <InputControl type='text' register={register} errors={errors} nameField='technology' labelField='Technology' />
            </div>

            <div className="row mb-3 px-3 d-flex">
                <label className="form-label" htmlFor="skillType">Skill type</label>
                <select className="form-select form-select-sm" aria-label=".SkillType"
                    {...register("skillType", { required: true })}
                >
                    <option value="frontend">Front End</option>
                    <option value="backend">Back End</option>
                    <option value="dbEngines">DB Engines</option>
                    <option value="otherTech">Other Technologies</option>
                </select>
            </div>

            <div className="row mb-3 px-3">
                <label htmlFor="selfRate" className="form-label">Self rate</label>
                <input type="range" className="form-range" min="0" max="10" step="1" id="selfRate"
                    {...register("selfRate")}
                />
            </div>

            <div className="row mb-3 px-3">
                <InputControl type='number' register={register} errors={errors} nameField='amountPrjs' labelField='Amount of projects' />
            </div>

            <div className="row mb-3 px-3">
                <div className="d-flex gap-2 p-0">
                    <div className="form-floating p-0 w-100">
                        <input type="text" className={`form-control ${errors.imgUrl && 'is-invalid'}`} placeholder="Imagen Control"
                            {...register("imgUrl")}
                            aria-invalid={errors.imgUrl ? "true" : "false"}
                            onBlur={() => setImgage()}
                        />
                        <label htmlFor="imgUrl">Imagen Url</label>
                        <div className="invalid-feedback">
                            {errors.imgUrl?.message}
                        </div>
                    </div>

                    <img src={imageUrl ? imageUrl : 'https://cdn.worldvectorlogo.com/logos/leo.svg'} alt="imageUrl" className="rounded d-block img-tech-mid" />
                </div>
            </div>

            <div className="row mb-3 px-3">
                <TextAreaControl register={register} errors={errors} nameField='knowledgeEn' labelField='Knowledge (English)' placeholder='Write acquired knowledge...' />
            </div>

            <div className="row mb-3 px-3">
                <TextAreaControl register={register} errors={errors} nameField='knowledgeEs' labelField='Conocimiento (Spanish)' placeholder='Escriba los conocimientos adquiridos...' />
            </div>

            <div className="row mb-3 px-3">
                <CheckInputControl register={register} errors={errors} nameField='isVisible' labelField='Visible' />
            </div>
        </FrameForm>
    )
}

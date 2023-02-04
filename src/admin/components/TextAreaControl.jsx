
export const TextAreaControl = ({ register, errors, nameField, labelField, placeholder }) => {
    return (
        <>
            <label htmlFor="knowledgeEn">{labelField}</label>
            <textarea className={`form-control ${errors[nameField] && 'is-invalid'}`} placeholder={placeholder}
                {...register(nameField)}
                aria-invalid={errors[nameField] ? "true" : "false"}
            >
            </textarea>
            <div className="invalid-feedback">
                {errors[nameField]?.message}
            </div>
        </>
    )
}

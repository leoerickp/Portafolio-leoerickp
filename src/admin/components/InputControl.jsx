
export const InputControl = ({ type, register, errors, nameField, labelField }) => {
    return (
        <div className="form-floating p-0">
            <input type={type} className={`form-control ${errors[nameField] && 'is-invalid'}`} placeholder={labelField}
                {...register(nameField)}
                aria-invalid={errors[nameField] ? "true" : "false"}
            />
            <div className="invalid-feedback">
                {errors[nameField]?.message}
            </div>
            <label htmlFor={nameField}>{labelField}</label>
        </div>
    )
}


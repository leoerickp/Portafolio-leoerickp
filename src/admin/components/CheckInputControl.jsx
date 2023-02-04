

export const CheckInputControl = ({ register, errors, nameField, labelField }) => {
    return (
        <div className="form-check form-switch">
            <input className="form-check-input" type="checkbox" role="switch"
                {...register(nameField, {
                    required: false
                })}
                aria-invalid={errors[nameField] ? "true" : "false"}
            />
            <label className="form-check-label" htmlFor="flexSwitchCheckChecked">{labelField}</label>
        </div>
    )
}

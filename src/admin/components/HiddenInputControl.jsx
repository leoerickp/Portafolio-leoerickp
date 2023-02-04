
export const HiddenInputControl = ({ register, errors, nameField }) => {
    return (
        <>
            <input type="hidden" className={`form-control ${errors[nameField] && 'is-invalid'}`}
                {...register(nameField)}
                aria-invalid={errors[nameField] ? "true" : "false"}
            />
            <div className="invalid-feedback">
                {errors[nameField]?.message}
            </div>
        </>
    )
}

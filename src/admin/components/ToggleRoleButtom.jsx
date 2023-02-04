import React from 'react'

export const ToggleRoleButtom = ({ role, devRoles, setDevRoles }) => {
    const updateListDevRoles = (e) => {
        if (!e.target.checked) {
            setDevRoles(devRoles.filter(devRole => devRole._id !== e.target.id));
        }
        else {
            setDevRoles([...devRoles, role]);
        }
    }
    return (
        <>
            <input
                type="checkbox"
                className="btn-check"
                id={role._id}
                autoComplete="off"
                checked={!!devRoles?.find(devRol => devRol.roleName === role.roleName)}
                onChange={updateListDevRoles}
            />
            <label className="btn btn-outline-primary rounded-circle pt-1 pb-1" htmlFor={role._id}>{role.roleName}</label>
        </>
    )
}

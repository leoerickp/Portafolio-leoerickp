import React from 'react'

export const ToggleSkillButtom = ({ skill, technologies, setTechnologies }) => {
    const updateListTechnologies = (e) => {
        if (!e.target.checked) {
            setTechnologies(technologies.filter(tech => tech._id !== e.target.id));
        }
        else {
            setTechnologies([...technologies, skill]);
        }
    }
    return (
        <>
            <input
                type="checkbox"
                className="btn-check"
                id={skill._id}
                autoComplete="off"
                checked={!!technologies?.find(tech => tech.technology === skill.technology)}
                onChange={updateListTechnologies}
            />
            <label className="btn btn-outline-primary rounded-pill pt-1 pb-1 d-flex gap-1 align-items-center" htmlFor={skill._id}>{!!skill.imgUrl && <img src={skill.imgUrl} className="rounded d-block img-tech" alt="skill.technology" />}  {skill.technology}</label>
        </>
    )
}

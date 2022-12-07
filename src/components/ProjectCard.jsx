import { useState } from "react";

export const ProjectCard = ({ project, company, date, role, technologies, summary }) => {
    const [shadow, setShadow] = useState(false);
    const onEnter = (e) => {
        setShadow(true);
    }
    const onLeave = (e) => {
        setShadow(false);
    }
    return (
        <div className={`col-md-3 card p-0 mb-3 ${shadow ? 'shadow' : ''}`} onMouseEnter={onEnter} onMouseLeave={onLeave}>
            <div className="card-header">
                <h5>Proyect: <span>{project}</span></h5>
            </div>
            <div className="card-body">
                <p className="p-card">Company: <span>{company}</span></p>
                <p className="p-card">Date: <span></span>{date}</p>
                <p className="p-card">Role: <span>{role}</span></p>
                <p className="p-card">Technologies: <span>{technologies}</span></p>
                <hr />
                <p className="p-card">Summary: <span>{summary}</span></p>
            </div>
        </div >
    )
}

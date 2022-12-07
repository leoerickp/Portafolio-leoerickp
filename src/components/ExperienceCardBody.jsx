
export const ExperienceCardBody = ({ position }) => {
    return (
        <li className="list-group-item">
            <h3>{position.position}</h3>
            <h5 className="text-end">{position.date}</h5>
            <ul>
                {position.achievements.map(a => (<li key={a}>{a}</li>))}
            </ul>
            <hr />
            <p className="techStack fs-5">Tech Stack: <span>{position.stack}</span></p>
        </li>
    )
}

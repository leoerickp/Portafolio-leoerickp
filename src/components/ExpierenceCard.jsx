import { ExperienceCardBody } from "./ExperienceCardBody";


export const ExpierenceCard = ({ experience }) => {
    const { company, positions } = experience;
    return (
        <div className="card shadow mb-3">
            <div className="card-header">
                <h2>{company}</h2>
            </div>
            <ul className="list-group list-group-flush">
                {
                    positions.map(p => (
                        <ExperienceCardBody key={p.id} position={p} />
                    ))
                }
            </ul>

        </div >
    )
}

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"


export const LabeledCardTable = ({ children, labeledCardData: { title, onAddEvent, onReload, limit, offset } }) => {
    return (
        <div className="card shadow mb-4">
            <div className="card-header py-3 d-flex justify-content-between">
                <h2 className="m-0 font-weight-bold">{title}</h2>
                <div className="gap-1 d-flex">
                    <button className="btn btn-primary" onClick={() => onReload(limit, offset)}><FontAwesomeIcon icon="fa-solid fa-rotate" /></button>
                    <button className="btn btn-primary" onClick={() => onAddEvent()}><FontAwesomeIcon icon="fa-solid fa-file-circle-plus" /> Add new</button>
                </div>
            </div>
            <div className="card-body">
                {children}
            </div>
        </div>
    )
}

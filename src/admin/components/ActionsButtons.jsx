import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

export const ActionsButtons = ({ editData, toggleData, index, isVisible, infoData = null, deleteData = null }) => {
    return (
        <div className="d-flex gap-2">
            {
                infoData && <button className="btn btn-outline-secondary btn-sm" onClick={() => infoData(index)}><FontAwesomeIcon icon="fa-solid fa-circle-info" /></button>
            }
            <button className="btn btn-outline-secondary btn-sm" onClick={() => editData(index)}><FontAwesomeIcon icon="fa-solid fa-pen-to-square" /></button>
            {
                toggleData && (
                    <button className="btn btn-outline-secondary btn-sm" onClick={() => toggleData(index)}>
                        {
                            isVisible
                                ? <FontAwesomeIcon icon="fa-solid fa-eye" />
                                : <FontAwesomeIcon icon="fa-solid fa-eye-slash" />
                        }
                    </button>
                )
            }
            {
                deleteData && <button className="btn btn-outline-secondary btn-sm" onClick={() => deleteData(index)}><FontAwesomeIcon icon="fa-solid fa-trash" /></button>
            }
        </div>
    )
}

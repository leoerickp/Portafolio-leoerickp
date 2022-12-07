import { useState } from "react";

export const OTechKwonCard = ({ imgUrl, name, knowledges }) => {
    const [shadow, setShadow] = useState(false);
    const onEnter = (e) => {
        setShadow(true);
    }
    const onLeave = (e) => {
        setShadow(false);
    }
    return (
        <div className={`col-md-3 card mb-2 pt-2 ${shadow ? 'shadow' : ''}`} onMouseEnter={onEnter} onMouseLeave={onLeave}>
            <img src={imgUrl} alt={name} />
            <div className="card-body">
                <h5 className="card-title">{name}</h5>
                {
                    !!knowledges ? (
                        <ul className="fs-10">
                            {
                                knowledges.map(k => (<li key={k}>{k}</li>))
                            }

                        </ul>
                    )
                        : ''
                }

            </div>
        </div >
    )
}

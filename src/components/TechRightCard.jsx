import { useState } from "react";
import { AnimationOnScroll } from 'react-animation-on-scroll';

export const TechRightCard = ({ isRight, technology, selfRate, amountPrjs, imgUrl, knowledges }) => {
    const [shadow, setShadow] = useState(false);
    const onEnter = (e) => {
        setShadow(true);
    }
    const onLeave = (e) => {
        setShadow(false);
    }
    return (
        <AnimationOnScroll animateIn={isRight ? 'animate__fadeInRightBig' : 'animate__fadeInLeftBig'} delay={0}>
            <div className="row gap-3 justify-content-center">
                {
                    isRight ? (<div className="col"></div>) : ''
                }
                <div className={`col-md-7 card p-0 mb-2 ${shadow ? 'shadow' : ''}`} onMouseEnter={onEnter} onMouseLeave={onLeave}>
                    <div className="card-header">
                        <div className="row align-items-start">
                            {
                                isRight ? (<img src={imgUrl} alt={technology} className="col-md-2 p-0 m-0 rounded img-logo-prg " />) : ''
                            }
                            <div className="col">
                                <h5>Technology: <span>{technology}</span></h5>
                                <hr className="m-0" />
                                <p className="p-card m-0 text-end fs-6">Self-rate: <span>{selfRate}</span> - Amount of projects: <span>{amountPrjs}</span></p>
                            </div>
                            {
                                !isRight ? (<img src={imgUrl} alt={technology} className="col-md-2 p-0 m-0 rounded img-logo-prg " />) : ''
                            }
                        </div>
                    </div>
                    <div className="card-body">
                        <p className="p-card">Knowledge per technology:</p>
                        <ul>
                            {
                                knowledges.map(knowledge => (<li key={knowledge}>{knowledge}</li>))
                            }
                        </ul>
                    </div>
                </div >
                {
                    !isRight ? (<div className="col"></div>) : ''
                }
            </div>
        </AnimationOnScroll>
    )
}

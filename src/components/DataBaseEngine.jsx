
import { OTechKwonCard } from './OTechKwonCard';

export const DataBaseEngine = ({ title, dbdata }) => {
    return (
        <>
            <div className='text-center'>
                <h3>{title}</h3>
                <hr />
            </div>
            <div className="row gap-3 justify-content-center">
                {
                    dbdata.map(db => (
                        <OTechKwonCard
                            key={db.id}
                            imgUrl={db.imgUrl}
                            name={db.name}
                            knowledges={db.knowledges}
                        />
                    ))
                }
            </div>
        </>
    )
}

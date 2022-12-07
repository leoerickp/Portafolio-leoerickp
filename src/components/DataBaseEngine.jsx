
import { OTechKwonCard } from './OTechKwonCard';

export const DataBaseEngine = ({ title, dbdata }) => {
    return (
        <>
            <div className='text-center'>
                <h2>{title}</h2>
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

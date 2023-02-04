import { deleteRegister, getPhotosbyAlbum, updateRegister } from '../../slices/photos/thunks';
import { setOffset, setLimit } from '../../slices/photos/photosSlice'
import { ActionsButtons } from "../../components/ActionsButtons";
import { PhotoForm } from './PhotoForm';
import { ListFrame } from '../../components/ListFrame';
import { useListFrame } from '../../hooks/use-list-frame';

const sTitle = "Photo";
const sParentTitle = 'Albums'
const modelState = 'photos';
const getData = getPhotosbyAlbum;
const DataForm = PhotoForm;
export const Photos = () => {

    const { data, offset, editData, deleteData, toggleData } = useListFrame({
        sTitle,
        modelState,
        updateRegister,
        deleteRegister
    });

    return (
        <ListFrame options={
            {
                sTitle,
                sParentTitle,
                modelState,
                getData,
                setOffset,
                setLimit,
                updateRegister,
                DataForm,
                backButton: true
            }
        }>

            <div className='row gap-3 align-items-start justify-content-center'>
                {
                    data?.map((photo, i) => {
                        return (
                            <div key={photo._id} className="col-12 col-sm-5 rounded-3 card shadow p-0">
                                <img src={photo.imgUrl} className="card-img-top" alt="..." />
                                <div className="card-body p-2">
                                    <ActionsButtons editData={editData} toggleData={toggleData} deleteData={deleteData} index={i} isVisible={photo.isVisible} />
                                </div>
                            </div>
                        )
                    })
                }
            </div>
            <hr />
        </ListFrame>
    )
}

{
    /*
    <table className="table table-hover table-responsive align-middle">
                <thead>
                    <tr>
                        <th scope="col" className="">#</th>
                        <th scope="col" className="">Image URL</th>
                        <th scope="col" className="">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        //JSON.stringify(data)
                        data?.map((photo, i) => {
                            return (
                                <tr key={i} >
                                    <th scope="row">{offset + i + 1}</th>
                                    <td><img src={photo.imgUrl} className="col-12 shadow" /></td>
                                    <td className="d-table-cell">
                                        <ActionsButtons editData={editData} toggleData={toggleData} deleteData={deleteData} index={i} isVisible={photo.isVisible} />
                                    </td>
                                </tr>
                            )
                        })
                    }

                </tbody>
            </table>
    */
}
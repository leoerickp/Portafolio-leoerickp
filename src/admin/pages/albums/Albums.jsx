import { format, parseISO } from "date-fns";
import { ActionsButtons } from "../../components/ActionsButtons";
import { ListFrame } from "../../components/ListFrame";
import { useListFrame } from "../../hooks/use-list-frame";
import { setLimit, setOffset } from "../../slices/album/albums.Slice";
import { getAlbums, updateRegister } from "../../slices/album/thunks";
import { AlbumForm } from "./AlbumForm";

const sTitle = "Album";
const modelState = 'albums';
const getData = getAlbums;
const DataForm = AlbumForm;
const childInfoRoute = `/admin/photos`;
export const Albums = () => {
    const { data, offset, editData, infoData, toggleData } = useListFrame({
        sTitle,
        modelState,
        updateRegister,
        childInfoRoute
    });

    return (
        <ListFrame options={
            {
                sTitle,
                modelState,
                getData,
                setOffset,
                setLimit,
                updateRegister,
                DataForm
            }
        }>
            <table className="table table-hover table-responsive align-middle">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col" >Album name</th>
                        <th scope="col" className="d-none d-md-table-cell">Updated date</th>
                        <th scope="col" className="">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        //JSON.stringify(data)
                        data?.map((album, i) => {
                            return (
                                <tr key={i} >
                                    <th scope="row">{offset + i + 1}</th>
                                    <td className="d-none d-md-table-cell">{album.albumName}</td>
                                    <td className="d-none d-md-table-cell">{format(parseISO(album.updatedDate), "dd/MM/yyyy hh:mm:ss")}</td>
                                    <td className="d-table-cell">
                                        <ActionsButtons editData={editData} toggleData={toggleData} infoData={infoData} index={i} isVisible={album.isVisible} />
                                    </td>
                                </tr>
                            )
                        })
                    }

                </tbody>
            </table>
        </ListFrame>
    )
}
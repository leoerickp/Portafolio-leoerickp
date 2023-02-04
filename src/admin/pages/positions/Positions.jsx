import { deleteRegister, getPositionsbyExperience, updateRegister } from '../../slices/position/thunks';
import { setOffset, setLimit } from '../../slices/position/positionsSlice'
import { ActionsButtons } from "../../components/ActionsButtons";
import { PositionForm } from './PositionForm';
import { format, parseISO } from 'date-fns';
import { ListFrame } from '../../components/ListFrame';
import { useListFrame } from '../../hooks/use-list-frame';


const sTitle = "Position";
const sParentTitle = 'Experiences'
const modelState = 'positions';
const getData = getPositionsbyExperience;
const DataForm = PositionForm;
export const Positions = () => {

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
            <table className="table table-hover table-responsive align-middle">
                <thead>
                    <tr>
                        <th scope="col" className="">#</th>
                        <th scope="col" className="">Position</th>
                        <th scope="col" className="d-none d-md-table-cell">From</th>
                        <th scope="col" className="d-none d-md-table-cell">To</th>
                        <th scope="col" className="">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        //JSON.stringify(data)
                        data?.map((position, i) => {
                            return (
                                <tr key={i} >
                                    <th scope="row">{offset + i + 1}</th>
                                    <td>{position.positionName.en}</td>
                                    <td className="d-none d-md-table-cell">{format(parseISO(position.date.from), "dd/MM/yyyy")}</td>
                                    <td className="d-none d-md-table-cell">{format(parseISO(position.date.to), "dd/MM/yyyy")}</td>
                                    <td className="d-table-cell">
                                        <ActionsButtons editData={editData} toggleData={toggleData} deleteData={deleteData} index={i} isVisible={position.isVisible} />
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

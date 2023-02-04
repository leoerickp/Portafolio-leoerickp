import { format, parseISO } from "date-fns";
import { deleteRegister, getRoles, updateRegister } from "../../slices/roles/thunks";
import { ActionsButtons } from "../../components/ActionsButtons";
import { setLimit, setOffset } from "../../slices/roles/rolesSlice";
import { RoleForm } from "./RoleForm";
import { ListFrame } from "../../components/ListFrame";
import { useListFrame } from "../../hooks/use-list-frame";

const sTitle = "Role";
const modelState = 'roles';
const getData = getRoles;
const DataForm = RoleForm;
export const Roles = () => {
    const { data, offset, deleteData, editData } = useListFrame({
        sTitle,
        modelState,
        updateRegister,
        deleteRegister
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
                        <th scope="col">Role name</th>
                        <th scope="col">Updated date</th>
                        <th scope="col">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        //JSON.stringify(data)
                        data?.map((role, i) => {
                            return (
                                <tr key={i} >
                                    <th scope="row">{offset + i + 1}</th>
                                    <td>{role.roleName}</td>
                                    <td>{format(parseISO(role.updatedDate), "dd/MM/yyyy hh:mm:ss")}</td>
                                    <td className="d-table-cell">
                                        <div className="d-flex gap-2">
                                            <ActionsButtons editData={editData} deleteData={deleteData} index={i} isVisible={role.isVisible} />
                                        </div>
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

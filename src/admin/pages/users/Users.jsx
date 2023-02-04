import { useContext, useEffect, useLayoutEffect } from "react";
import { format, parseISO } from "date-fns";
import { useDispatch, useSelector } from "react-redux";
import { CardTable } from "../../components/CardTable";
import { ActionsButtons } from "../../components/ActionsButtons";
import { FormContext } from "../../context/form/FormContext";
import { setLimit, setOffset } from "../../slices/users/usersSlice";
import { deleteRegister, getUsers, updateRegister } from "../../slices/users/thunks";
import { UserForm } from "./UserForm";
import { ListFrame } from "../../components/ListFrame";
import { useListFrame } from "../../hooks/use-list-frame";

const sTitle = "User";
const modelState = 'users';
const getData = getUsers;
const DataForm = UserForm;
export const Users = () => {
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
                        <th scope="col" className="">#</th>
                        <th scope="col">Name</th>
                        <th scope="col" className="d-none d-md-table-cell">Email</th>
                        <th scope="col" className="d-none d-md-table-cell">Updated date</th>
                        <th scope="col">Active</th>
                        <th scope="col" className="">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        //JSON.stringify(data)
                        data?.map((user, i) => {
                            return (
                                <tr key={i} >
                                    <th scope="row">{offset + i + 1}</th>
                                    <td>{user.name}</td>
                                    <td className="d-none d-md-table-cell">{user.email}</td>
                                    <td className="d-none d-md-table-cell">{format(parseISO(user.createdBy), "yyyy")}</td>
                                    <td>{user.isActive ? 'Active' : 'Inactive'}</td>
                                    <td className="d-table-cell">
                                        <ActionsButtons editData={editData} toggleData={toggleData} deleteData={deleteData} index={i} isVisible={user.isActive} />
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

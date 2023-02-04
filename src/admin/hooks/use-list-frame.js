import { useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { FormContext } from "../context/form/FormContext";


export const useListFrame = ({ sTitle, modelState, updateRegister, deleteRegister, childInfoRoute }) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { userData } = useSelector((state) => state.auth);
    const { data, offset } = useSelector(
        (state) => state[modelState]
    );
    const { showForm, showDeleteDialog } = useContext(FormContext);

    const editData = (index) => {
        showForm("Update " + sTitle, data[index]);
    };
    const deleteData = (index) => {
        showDeleteDialog('Confirmation alert', 'Really, do you like to delete the information?', () => {
            dispatch(deleteRegister(userData.token, data[index]._id));
        });
    }
    const infoData = (index) => {
        if (!!childInfoRoute) {
            navigate(`${childInfoRoute}/${data[index]._id}`);
        }
    };
    const toggleData = (index) => {
        dispatch(
            updateRegister(userData.token, data[index]._id, {
                isVisible: !data[index].isVisible,
            })
        );
    };
    return {
        data,
        deleteData,
        editData,
        infoData,
        offset,
        toggleData,
    };
}
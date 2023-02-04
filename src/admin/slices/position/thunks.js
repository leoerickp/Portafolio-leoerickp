import * as positionsSlice from "./positionsSlice";
import { createData, getDataByParent, removeData, updateData } from "../../helpers/thunks-actions";

const apiUrl = '/positions';
export const getPositionsbyExperience = (token, idExperience, limit, offset) => {
    const params = limit > 0 ? `?limit=${limit}&offset=${offset}` : "";
    return getDataByParent(token, `${apiUrl}/byExperience`, positionsSlice, idExperience, params);
};

export const updateRegister = (token, id, updatedData) => {
    return updateData(token, apiUrl, positionsSlice, id, updatedData);
};

export const deleteRegister = (token, id) => {
    return removeData(token, apiUrl, positionsSlice, id);
};

export const createRegister = (token, newData) => {
    return createData(token, apiUrl, positionsSlice, newData);
};

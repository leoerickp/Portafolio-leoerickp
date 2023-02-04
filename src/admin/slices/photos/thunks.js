import * as photosSlice from "./photosSlice";
import { createData, getDataByParent, removeData, updateData } from "../../helpers/thunks-actions";

const apiUrl = '/photos';

export const getPhotosbyAlbum = (token, idAlbum, limit, offset) => {
    const params = limit > 0 ? `?limit=${limit}&offset=${offset}` : "";
    return getDataByParent(token, `${apiUrl}/byAlbum`, photosSlice, idAlbum, params);
};

export const updateRegister = (token, id, updatedData) => {
    return updateData(token, apiUrl, photosSlice, id, updatedData);
};

export const deleteRegister = (token, id) => {
    return removeData(token, apiUrl, photosSlice, id);
};

export const createRegister = (token, newData) => {
    console.log(newData);
    return createData(token, apiUrl, photosSlice, newData);
};

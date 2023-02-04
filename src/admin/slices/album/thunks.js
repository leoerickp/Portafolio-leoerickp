import * as albumsSlice from "./albums.Slice";
import { createData, getData, removeData, updateData } from "../../helpers/thunks-actions";


const apiUrl = '/albums';
export const getAlbums = (token, limit, offset) => {
  const params = limit > 0 ? `?limit=${limit}&offset=${offset}` : "";
  return getData(token, apiUrl, albumsSlice, params);
};

export const updateRegister = (token, id, updatedData) => {
  return updateData(token, apiUrl, albumsSlice, id, updatedData);
};

export const createRegister = (token, newData) => {
  return createData(token, apiUrl, albumsSlice, newData);
};
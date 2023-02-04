import * as rolesSlice from "./rolesSlice";
import { createData, getData, removeData, updateData } from "../../helpers/thunks-actions";

const apiUrl = '/developer-roles';
export const getRoles = (token, limit, offset) => {
  const params = limit > 0 ? `?limit=${limit}&offset=${offset}` : "";
  return getData(token, apiUrl, rolesSlice, params);
};

export const updateRegister = (token, id, updatedData) => {
  return updateData(token, apiUrl, rolesSlice, id, updatedData);
};

export const deleteRegister = (token, id) => {
  return removeData(token, apiUrl, rolesSlice, id);
};

export const createRegister = (token, newData) => {
  return createData(token, apiUrl, rolesSlice, newData);
};

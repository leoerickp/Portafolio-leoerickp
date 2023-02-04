import * as usersSlice from "./usersSlice";
import { createData, getData, removeData, updateData } from "../../helpers/thunks-actions";

const apiUrl = '/users';
export const getUsers = (token, limit, offset) => {
  const params = limit > 0 ? `?limit=${limit}&offset=${offset}` : "";
  return getData(token, apiUrl, usersSlice, params);
};

export const updateRegister = (token, id, updatedData) => {
  return updateData(token, apiUrl, usersSlice, id, updatedData);
};

export const deleteRegister = (token, id) => {
  return removeData(token, apiUrl, usersSlice, id);
};

export const createRegister = (token, newData) => {
  return createData(token, apiUrl, usersSlice, newData);
};

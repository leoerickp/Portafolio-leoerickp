import * as projectsSlice from "./projectsSlice";
import { createData, getData, removeData, updateData } from "../../helpers/thunks-actions";

const apiUrl = '/projects';
export const getProjects = (token, limit, offset) => {
  const params = limit > 0 ? `?limit=${limit}&offset=${offset}` : "";
  return getData(token, apiUrl, projectsSlice, params);
};

export const updateRegister = (token, id, updatedData) => {
  return updateData(token, apiUrl, projectsSlice, id, updatedData);
};

export const deleteRegister = (token, id) => {
  return removeData(token, apiUrl, projectsSlice, id);
};

export const createRegister = (token, newData) => {
  return createData(token, apiUrl, projectsSlice, newData);
};

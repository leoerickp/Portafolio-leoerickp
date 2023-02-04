import * as skillsSlice from "./skillsSlice";
import { createData, getData, removeData, updateData } from "../../helpers/thunks-actions";

const apiUrl = '/hard-skills';

export const getSkills = (token, limit, offset) => {
  const params = limit > 0 ? `?limit=${limit}&offset=${offset}` : "";
  return getData(token, apiUrl, skillsSlice, params)
};

export const updateRegister = (token, id, updatedData) => {
  return updateData(token, apiUrl, skillsSlice, id, updatedData);
};

export const createRegister = (token, newData) => {
  return createData(token, apiUrl, skillsSlice, newData);
};

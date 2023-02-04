import * as experiencesSlice from "./experiencesSlice";
import { createData, getData, removeData, updateData } from "../../helpers/thunks-actions";

const apiUrl = '/experiences';
export const getExperiences = (token, limit, offset) => {
  const params = limit > 0 ? `?limit=${limit}&offset=${offset}` : "";
  return getData(token, apiUrl, experiencesSlice, params);
};

export const updateRegister = (token, id, updatedData) => {
  return updateData(token, apiUrl, experiencesSlice, id, updatedData);
};

export const createRegister = (token, newData) => {
  return createData(token, apiUrl, experiencesSlice, newData);
};
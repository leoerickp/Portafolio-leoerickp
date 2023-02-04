import * as profileSlice from "./profileSlice";
import { createData, getData, updateData } from "../../helpers/thunks-actions";

const apiUrl = '/profile';

export const getProfiles = (token, limit, offset) => {
  const params = limit > 0 ? `?limit=${limit}&offset=${offset}` : "";
  return getData(token, apiUrl, profileSlice, params);
};

export const updateRegister = (token, id, updatedData) => {
  return updateData(token, apiUrl, profileSlice, id, updatedData);
};

export const createRegister = (token, newData) => {
  return createData(token, apiUrl, profileSlice, newData);
};

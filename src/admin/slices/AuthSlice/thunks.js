import { portfolioApi } from "../../../api/portfolioApi";
import { registerUser } from "./AuthSlice";

export const login = ({ email, password }) => {
  return async (dispatch, getState) => {
    const resp = await portfolioApi
      .post(`/auth/login`, {
        email,
        password,
      })
      .then((resp) => {
        console.log(resp);
        dispatch(registerUser(resp.data));
      });
  };
};

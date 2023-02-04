import { createSlice } from "@reduxjs/toolkit";

export const emptyUserData = () => {
  const userData = JSON.parse(localStorage.getItem("userData"));
  return {
    userData,
    isLogged: !!userData,
  };
};

export const authSlice = createSlice({
  name: "Auth",
  initialState: emptyUserData,

  reducers: {
    registerAuth: (state, action) => {
      localStorage.setItem("userData", JSON.stringify(action.payload));
      state.userData = { ...action.payload };
      state.isLogged = true;
    },
    removeAuth: (state) => {
      localStorage.removeItem("userData");
      state = emptyUserData;
    },
    resetAuth: () => emptyUserData,
  },
});

export const { registerAuth, removeAuth, resetAuth } = authSlice.actions;

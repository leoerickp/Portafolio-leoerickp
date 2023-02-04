import { createSlice } from "@reduxjs/toolkit";

export const projectsSlice = createSlice({
  name: "projects",
  initialState: {
    isLoading: false,
    data: [],
    count: 0,
    error: null,
    limit: 10,
    offset: 0,
    backendResult: null,
  },
  reducers: {
    startLoading: (state) => {
      state.error = null;
      state.startLoading = true;
    },
    endLoading: (state) => {
      state.startLoading = false;
    },
    setData: (state, action) => {
      const { count, data } = action.payload;
      state.data = data;
      state.count = count;
      state.isLoading = false;
    },
    createData: (state, action) => {
      state.data.push(action.payload);
      state.count++;
      let pc = parseInt(state.count / state.limit);
      if (state.count % state.limit > 0) pc++;
      state.offset = pc * state.limit - state.limit;
    },
    updateData: (state, action) => {
      const { id, updatedData } = action.payload;
      state.data = state.data.map((value) => {
        if (value._id === id) {
          return { ...value, ...updatedData };
        }
        return value;
      });
    },
    deleteData: (state, action) => {
      const id = action.payload;
      state.data = state.data.filter(value => value._id !== id);
      state.count--;
    },
    setLimit: (state, action) => {
      state.limit = action.payload;
    },
    setOffset: (state, action) => {
      state.offset = action.payload;
    },
    throwError(state, action) {
      state.error = action.payload;
    },
    setBackendResult(state, action) {
      state.backendResult = action.payload;
    },
  },
});

export const {
  startLoading,
  endLoading,
  setData,
  createData,
  updateData,
  deleteData,
  throwError,
  setLimit,
  setOffset,
  setBackendResult,
} = projectsSlice.actions;

import { createSlice } from "@reduxjs/toolkit";
import { getUser } from "../../../api/admin";

const userSlice = createSlice({
  name: "user",
  initialState: {
    data: [],
    isLoading: false,
    isSuccess: false,
    id: null,
    message: "",
  },
  extraReducers: {
    [getUser.pending]: (state) => {
      state.isLoading = true;
    },
    [getUser.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.isSuccess = true;
      state.data = payload;
    },
    [getUser.rejected]: (state, { payload }) => {
      state.isLoading = false;
      state.isSuccess = false;
      state.message = payload;
    },
  },
  reducers: {
    setRole: (state, { payload }) => {
      state.data = state.data.map((item) => ({
        ...item,
        role: item.id === payload.id ? payload.role : item.role,
      }));
    },
  },
});

export const { setRole } = userSlice.actions;
export default userSlice;

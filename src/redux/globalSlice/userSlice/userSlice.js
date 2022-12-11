import { createSlice } from "@reduxjs/toolkit";
import { getUser } from "../../../api/admin";

const userSlice = createSlice({
  name: "user",
  initialState: {
    data: [],
    role: "ROLE_USER",
    isLoading: false,
    isSuccess: false,
    id: null,
    message: "",
  },
  reducers: {},
  extraReducers: {
    [getUser.pending]: (state, { payload }) => {
      state.isLoading = true;
    },
    [getUser.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.isSuccess = true;
      state.role = "ROLE_ADMIN";
      state.data = payload;
    },
    [getUser.rejected]: (state, { payload }) => {
      state.isLoading = false;
      state.isSuccess = false;
      state.message = payload;
    },
  },
});

export default userSlice;

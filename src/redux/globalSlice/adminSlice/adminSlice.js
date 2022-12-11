import { createSlice } from "@reduxjs/toolkit";
import { getAdmin } from "../../../api/admin";

const adminSlice = createSlice({
  name: "getUserToAdmin",
  initialState: {
    role: "ROLE_USER",
    status: "active",
    message: null,
    data: [],
  },
  reducers: {},
  extraReducers: {
    [getAdmin.pending]: (state) => {
      state.status = "loading";
    },
    [getAdmin.fulfilled]: (state, action) => {
      state.status = "active";
      state.role = "ROLE_ADMIN";
      state.data = action.payload;
    },
    [getAdmin.rejected]: (state, action) => {
      state.status = "active";
      state.message = action.payload;
    },
  },
});

export default adminSlice;

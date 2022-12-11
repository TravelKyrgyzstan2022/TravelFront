import { createSlice } from "@reduxjs/toolkit";
import { getUserFromAdmin } from "../../../api/admin";

const adminSlice = createSlice({
  name: "getAdminToUser",
  initialState: {
    status: "active",
    message: null,
    data: [],
  },
  reducers: {},
  extraReducers: {
    [getUserFromAdmin.pending]: (state) => {
      state.status = "loading";
    },
    [getUserFromAdmin.fulfilled]: (state, action) => {
      state.status = "active";
      state.role = "ROLE_ADMIN";
      state.data = action.payload;
    },
    [getUserFromAdmin.rejected]: (state, action) => {
      state.status = "active";
      state.message = action.payload;
    },
  },
});

export default adminSlice;

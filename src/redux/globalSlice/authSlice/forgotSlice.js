import { createSlice } from "@reduxjs/toolkit";
import { getForgotPass } from "../../../api/auth";

const forgotSlice = createSlice({
  name: "forgot",
  initialState: {
    status: "active",
    email: null,
    verify: null,
    newPass: null,
    message: null,
  },
  reducers: {},
  extraReducers: {
    [getForgotPass.pending]: (state) => {
      state.status = "loading";
    },
    [getForgotPass.fulfilled]: (state, action) => {
      state.status = "active";
      state.email = action.payload;
      state.verify = action.payload;
      state.newPass = action.payload;
    },
    [getForgotPass.pending]: (state, action) => {
      state.status = "active";
      state.message = action.payload;
    },
  },
});

export default forgotSlice;

import { createSlice } from "@reduxjs/toolkit";
import { getVerifyCode } from "../../../api/auth";

const sendVerifySlice = createSlice({
  name: "sendVerify",
  initialState: {
    status: "active",
    verify: null,
    message: "",
  },
  reducers: {},
  extraReducers: {
    [getVerifyCode.pending]: (state) => {
      state.status = "loading";
    },
    [getVerifyCode.fulfilled]: (state, action) => {
      state.status = "active";
      state.verify = action.payload;
    },
    [getVerifyCode.rejected]: (state, action) => {
      state.status = "active";
      state.message = action.payload;
    },
  },
});

export default sendVerifySlice;

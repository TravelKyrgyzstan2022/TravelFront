import { createSlice } from "@reduxjs/toolkit";
import { getActiveEmail } from "../../../api/auth";

const activeEmailSlice = createSlice({
  name: "active",
  initialState: {
    status: "active",
    email: null,
    verify: null,
    message: null,
  },
  reducers: {},
  extraReducers: {
    [getActiveEmail.pending]: (state) => {
      state.status = "loading";
    },
    [getActiveEmail.fulfilled]: (state, action) => {
      state.status = "active";
      state.email = action.payload;
      state.verify = action.payload;
    },
    [getActiveEmail.pending]: (state, action) => {
      state.status = "active";
      state.message = action.payload;
    },
  },
});

export default activeEmailSlice;

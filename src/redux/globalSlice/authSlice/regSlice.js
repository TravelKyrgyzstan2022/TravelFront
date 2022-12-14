import { createSlice } from "@reduxjs/toolkit";
import { register } from "../../../api/auth";

const regSlice = createSlice({
  name: "register",
  initialState: {
    status: "sleep",
    userEmail: null,
    message: null,
  },
  reducers: {},
  extraReducers: {
    [register.pending]: (state) => {
      state.status = "loading";
    },
    [register.fulfilled]: (state, action) => {
      state.status = "active";
      localStorage.setItem("userEmail", action.payload.email);
    },
    [register.rejected]: (state, action) => {
      state.status = "active";
      state.message = action.payload;
    },
  },
});

export default regSlice;

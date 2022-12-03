import { createSlice } from "@reduxjs/toolkit";
import { SignIn } from "../../api/auth";

const authSlice = createSlice({
  name: "auth",
  initialState: { user: null, token: null, status: "active", error: null },
  extraReducers: {
    [SignIn.pending]: (state) => {
      state.status = "loading";
    },
    [SignIn.fulfilled]: (state, action) => {
      state.status = "active";
      state.user = action.payload.user_info;
      localStorage.setItem("token", action.payload.token);
      console.log(action.payload);
    },
    [SignIn.rejected]: (state, action) => {
      state.status = "active";
      state.error = action.payload;
    },
  },
  reducers: {
    setCredentials: (state, action) => {
      const { user, accessToken } = action.payload;
      state.user = user;
      state.token = accessToken;
    },
    logOut: (state, action) => {
      state.user = null;
      state.token = null;
      localStorage.removeItem("token");
    },
  },
});

export default authSlice;
export const { setCredentials, logOut } = authSlice.actions;
export const selectCurrentUser = (state) => state.auth.user;
export const selectCurrentToken = (state) => state.auth.token;

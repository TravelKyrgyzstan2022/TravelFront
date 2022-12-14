import { createSlice } from "@reduxjs/toolkit";
import { SignIn } from "../../../api/auth";
import { getUserFromLocalStorage } from "../../../utils/selectUserLocalStorage";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: getUserFromLocalStorage(),
    token: null,
    status: "active",
    error: null,
    role: localStorage.getItem("role")
      ? localStorage.getItem("role")
      : "ROLE_UNAUTHORIZED",
  },
  extraReducers: {
    [SignIn.pending]: (state) => {
      state.status = "loading";
    },
    [SignIn.fulfilled]: (state, action) => {
      state.status = "active";
      state.user = action.payload.user_info;
      state.role = action.payload.role;
      localStorage.setItem("role", action.payload.role);
      localStorage.setItem("token", action.payload.token);
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
      state.role = "ROLE_UNAUTHORIZED";
      localStorage.removeItem("token");
      localStorage.removeItem("role");
    },
  },
});

export default authSlice;
export const { setCredentials, logOut } = authSlice.actions;
export const selectCurrentUser = (state) => state.auth.user;
export const selectCurrentToken = (state) => state.auth.token;

import { createAsyncThunk } from "@reduxjs/toolkit";
import { API } from "../utils/axiosConfig";

export const SignIn = createAsyncThunk(
  "auth/sign-in",
  async (arg, { rejectWithValue }) => {
    try {
      const response = await API.post("api/account/sign-in", arg);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  }
);

export const register = createAsyncThunk(
  "auth/register",
  async (data, { rejectWithValue }) => {
    try {
      const response = await API.post("api/account/register", data);
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response.data.message);
    }
  }
);

export const getActiveEmail = createAsyncThunk(
  "auth/active",
  async (data, { rejectWithValue }) => {
    try {
      const res = await API.post("api/account/activate", data);
      return res;
    } catch (err) {
      return rejectWithValue(err.res.data.message);
    }
  }
);

export const getVerifyCode = createAsyncThunk(
  "verify/code",
  async (data, { rejectWithValue }) => {
    try {
      const res = await API.post("api/account/send-activation-code", data);
      return res;
    } catch (err) {
      return rejectWithValue(err.res.data.message);
    }
  }
);

export const getForgotPass = createAsyncThunk(
  "auth/forgotPass",
  async (data, { rejectWithValue }) => {
    try {
      const response = await API.post("api/account/forgot-password", data);
      return response;
    } catch (err) {
      return rejectWithValue(err.response.data.message);
    }
  }
);

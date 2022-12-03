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

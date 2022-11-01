import { createAsyncThunk } from "@reduxjs/toolkit";
import { API } from "../utils/axiosConfig";

export const login = createAsyncThunk(
  "auth/login",
  async (data, { rejectWithValue }) => {
    try {
      const response = await API.post("auth/login", data);
      return response.data;
    } catch (err) {
      console.log(err);
      return rejectWithValue(err.response.data.message);
    }
  }
);

export const register = createAsyncThunk(
  "auth/register",
  async (data, { rejectWithValue }) => {
    try {
      const response = await API.post("auth/register", data);
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response.data.message);
    }
  }
);

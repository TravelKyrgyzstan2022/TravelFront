import { createAsyncThunk } from "@reduxjs/toolkit";
import { API } from "../utils/axiosConfig";

export const getUser = createAsyncThunk(
  "user/getData",
  async (arg, { rejectWithValue }) => {
    try {
      const { data } = await API.get("api/v1/admin/users", arg);
      return data;
    } catch (error) {
      rejectWithValue(error.response.data);
    }
  }
);

export const getAdmin = createAsyncThunk(
  "user/admin",
  async (userId, { rejectWithValue }, data) => {
    try {
      const res = await API.put(
        `api/v1/superadmin/new-admin?user_id=${userId}`,
        data
      );
      return res;
    } catch (error) {
      rejectWithValue(error.response.data);
    }
  }
);

export const getUserFromAdmin = createAsyncThunk(
  "admin/user",
  async (userId, { rejectWithValue }, data) => {
    try {
      const res = await API.put(
        `api/v1/superadmin/remove-admin?user_id=${userId}`,
        data
      );
      return res;
    } catch (error) {
      rejectWithValue(error.response.data);
    }
  }
);

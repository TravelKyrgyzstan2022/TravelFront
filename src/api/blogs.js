import { createAsyncThunk } from "@reduxjs/toolkit";
import { API } from "../utils/axiosConfig";

export const getBlog = createAsyncThunk(
  "user/blog",
  async (arg, { rejectWithValue }) => {
    try {
      const res = await API.get("api/v1/blogs", arg);
      return res;
    } catch (err) {
      return rejectWithValue(err.response.data.message);
    }
  }
);

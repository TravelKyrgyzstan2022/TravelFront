import { createAsyncThunk } from "@reduxjs/toolkit";
import { API } from "../utils/axiosConfig";

export const getSupport = createAsyncThunk(
  "support/getSupport",
  async (arg, { rejectWithValue }) => {
    try {
      const res = await API.get("api/v1/admin/support", arg);
      return res.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

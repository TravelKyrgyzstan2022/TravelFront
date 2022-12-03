import { createAsyncThunk } from "@reduxjs/toolkit";
import { API } from "../utils/axiosConfig";

export const getPlace = createAsyncThunk(
  "getPlace/data",
  async (arg, { rejectWithValue }) => {
    try {
      const res = await API.get("api/v1/places", arg);
      return res.data;
    } catch (err) {
      return rejectWithValue(err.response.data.message);
    }
  }
);

export const getCommit = createAsyncThunk(
  "getCommit/data",
  async (arg, { rejectWithValue }) => {
    try {
      const res = await API.get("api/v1/places/:id/comments", arg);
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  }
);

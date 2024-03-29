import { createAsyncThunk } from "@reduxjs/toolkit";
import { API } from "../utils/axiosConfig";

export const getCurrentUser = createAsyncThunk(
  "auth/currentUser",
  async (arg, { rejectWithValue }) => {
    try {
      const res = await API.get("api/v1/user/profile", arg);
      return res;
    } catch (err) {
      return rejectWithValue(err.res.data.message);
    }
  }
);

export const getUserFavs = createAsyncThunk(
  "user/fav",
  async (arg, { rejectWithValue }, placeId) => {
    try {
      const res = await API.post(`api/v1/user/favorites/${placeId}`, arg);
      return res;
    } catch (err) {
      return rejectWithValue(err.res.data.message);
    }
  }
);

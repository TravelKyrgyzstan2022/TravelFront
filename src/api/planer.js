import { createAsyncThunk } from "@reduxjs/toolkit";
import { API } from "../utils/axiosConfig";

export const getUserPlans = createAsyncThunk(
  "plans/user",
  async (arg, { rejectWithValue }) => {
    try {
      const res = await API.get("api/v1/user/plans", arg);
      return res;
    } catch (err) {
      return rejectWithValue(err.res.data.message);
    }
  }
);

export const deleteUserPlan = createAsyncThunk(
  "plans/deleteUser",

  async ({ id }, { rejectWithValue }) => {
    try {
      console.log(id);
      const res = await API.delete(`api/v1/user/plans/${id}`);
      return res.data;
    } catch (err) {
      return rejectWithValue(err.res.data.message);
    }
  }
);

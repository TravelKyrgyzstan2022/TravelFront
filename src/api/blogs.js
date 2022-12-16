import { createAsyncThunk } from "@reduxjs/toolkit";
import { API } from "../utils/axiosConfig";

export const getBlog = createAsyncThunk(
  "user/blog",
  async (arg, { rejectWithValue }) => {
    try {
      const res = await API.get("api/v1/blogs", arg);
      return res.data;
    } catch (err) {
      return rejectWithValue(err.response.data.message);
    }
  }
);


export const getBlogById = createAsyncThunk(
  "getBlogById/data",
  async (id,{ rejectWithValue }) => {
  try {
      const res = await API.get(`api/v1/blogs/${id}`);
      return res.data;
  } catch (err) {
      return rejectWithValue(err.response.data.message);
  }
  }
);


export const getUserBlog = createAsyncThunk(
  "blog/user",
  async (arg, { rejectWithValue }) => {
    try {
      const res = await API.get("api/v1/user/blogs", arg);
      return res;
    } catch (err) {
      return rejectWithValue(err.res.data.message);
    }
  }
);

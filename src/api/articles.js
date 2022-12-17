import { createAsyncThunk } from "@reduxjs/toolkit";
import { API } from "../utils/axiosConfig";

export const getArticle = createAsyncThunk(
  "getArticle/data",
  async (_, { rejectWithValue }) => {
    try {
      const res = await API.get("api/v1/articles");
      return res.data;
    } catch (err) {
      return rejectWithValue(err.response.data.message);
    }
  }
);

export const getArticleById = createAsyncThunk(
  "getArticleById/data",
  async (id, { rejectWithValue }) => {
    try {
      const res = await API.get(`api/v1/articles/${id}`);
      return res.data;
    } catch (err) {
      return rejectWithValue(err.response.data.message);
    }
  }
);

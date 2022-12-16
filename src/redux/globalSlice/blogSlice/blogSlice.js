import { createSlice } from "@reduxjs/toolkit";
import { getBlog, getBlogById } from "../../../api/blogs";

const blogSlice = createSlice({
  name: "blog",
  initialState: {
    data: [],
    blogById: {},
    status: "active",
    message: null,
  },
  reducers: {},
  extraReducers: {
    [getBlog.pending]: (state) => {
      state.status = "loading";
    },
    [getBlog.fulfilled]: (state, action) => {
      state.status = "active";
      state.data = action.payload;
      state.message = null;
    },
    [getBlog.pending]: (state, action) => {
      state.status = "active";
      state.message = action.payload;
    },
    [getBlogById.pending]: (state) => {
      state.status = "loading";
    },
    [getBlogById.fulfilled]: (state, action) => {
        state.loading = "active";
        state.blogById = action.payload;
    },
    [getBlogById.rejected]: (state, action) => {
        state.loading = "active";
        state.error = action.payload;
    },
  },
});

export default blogSlice;

import { createSlice } from "@reduxjs/toolkit";
import { getBlogById } from "../../../api/blogs";

const blogsByIdSlice = createSlice({
  name: "blogsById",
  initialState: {
    status: "active",
    data: [],
    message: null,
  },
  reducers: {},
  extraReducers: {
    [getBlogById.pending]: (state) => {
      state.status = "loading";
    },
    [getBlogById.fulfilled]: (state, action) => {
      state.status = "loading";
      state.data = action.payload;
    },
    [getBlogById.rejected]: (state, action) => {
      state.status = "loading";
      state.message = action.payload;
    },
  },
});

export default blogsByIdSlice;

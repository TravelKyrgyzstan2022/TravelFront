import { createSlice } from "@reduxjs/toolkit";
import { getUserBlog } from "../../../api/blogs";

const userBlogSlice = createSlice({
  name: "userBlog",
  initialState: {
    status: "active",
    data: [],
    message: null,
  },
  reducers: {},
  extraReducers: {
    [getUserBlog.pending]: (state) => {
      state.status = "loading";
    },
    [getUserBlog.fulfilled]: (state, action) => {
      state.status = "active";
      state.data = action.payload.data;
    },
    [getUserBlog.rejected]: (state, action) => {
      state.status = "active";
      state.message = action.payload;
    },
  },
});

export default userBlogSlice;

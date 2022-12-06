import { createSlice } from "@reduxjs/toolkit";
import { getBlog } from "../../../api/blogs";

const blogSlice = createSlice({
  name: "blog",
  initialState: {
    data: [],
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
  },
});

export default blogSlice;

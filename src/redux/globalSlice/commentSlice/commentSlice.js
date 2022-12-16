import { createSlice } from "@reduxjs/toolkit";
import { getComment } from "../../../api/comment";

const commentSlice = createSlice({
  name: "comment",
  initialState: {
    data: [],
    status: "active",
    message: null,
  },
  reducers: {},
  extraReducers: {
    [getComment.pending]: (state) => {
      state.status = "loading";
    },
    [getComment.fulfilled]: (state, action) => {
      state.status = "active";
      state.data = action.payload;
      state.message = null;
    },
    [getComment.rejected]: (state, action) => {
      state.status = "active";
      state.message = action.payload;
    },
  },
});

export default commentSlice;

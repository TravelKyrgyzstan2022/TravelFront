import { createSlice } from "@reduxjs/toolkit";
import { getCurrentUser } from "../../../api/currentUser";

const currentUserSlice = createSlice({
  name: "currentUser",
  initialState: {
    data: [],
    status: "default",
    message: null,
  },
  reducers: {},
  extraReducers: {
    [getCurrentUser.pending]: (state) => {
      state.status = "loading";
    },
    [getCurrentUser.fulfilled]: (state, action) => {
      state.staus = "default";
      state.data = action.payload;
    },
    [getCurrentUser.rejected]: (state, action) => {
      state.status = "default";
      state.message = action.payload;
    },
  },
});

export default currentUserSlice;

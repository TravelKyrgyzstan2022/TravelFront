import { createSlice } from "@reduxjs/toolkit";
import { getSupport } from "../../../api/support";

const supportSlice = createSlice({
  name: "getSupport",
  initialState: {
    status: "active",
    data: [],
    message: null,
  },
  reducers: {},
  extraReducers: {
    [getSupport.pending]: (state) => {
      state.status = "loading";
    },
    [getSupport.fulfilled]: (state, action) => {
      state.data = action.payload;
      state.status = "active";
    },
    [getSupport.rejected]: (state, action) => {
      state.status = "active";
      state.message = action.payload;
    },
  },
});

export default supportSlice;

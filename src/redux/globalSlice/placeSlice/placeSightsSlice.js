import { createSlice } from "@reduxjs/toolkit";
import { getSights } from "../../../api/place";

const placeSightsSlice = createSlice({
  name: "slights",
  initialState: {
    data: [],
    status: "active",
    message: null,
  },
  reducers: {},
  extraReducers: {
    [getSights.pending]: (state) => {
      state.status = "loading";
    },
    [getSights.fulfilled]: (state, action) => {
      state.status = "active";
      state.data = action.payload.data;
      state.message = null;
    },
    [getSights.rejected]: (state, action) => {
      state.message = action.payload;
    },
  },
});

export default placeSightsSlice;

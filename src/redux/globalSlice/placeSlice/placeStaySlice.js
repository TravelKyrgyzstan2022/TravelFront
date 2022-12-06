import { createSlice } from "@reduxjs/toolkit";
import { getStay } from "../../../api/place";

const placeStaySlice = createSlice({
  name: "stayPlace",
  initialState: {
    data: [],
    status: "active",
    error: null,
  },
  reducers: {},
  extraReducers: {
    [getStay.pending]: (state) => {
      state.status = "loading";
    },
    [getStay.fulfilled]: (state, action) => {
      state.loading = "active";
      state.data = action.payload;
    },
    [getStay.rejected]: (state, action) => {
      state.loading = "active";
      state.error = action.payload;
    },
  },
});

export default placeStaySlice;

import { createSlice } from "@reduxjs/toolkit";
import { getPlace } from "../../api/place";

const placeSlice = createSlice({
  name: "place",
  initialState: {
    data: [],
    status: "active",
    error: null,
  },
  reducers: {},
  extraReducers: {
    [getPlace.pending]: (state) => {
      state.status = "loading";
    },
    [getPlace.fulfilled]: (state, action) => {
      state.loading = "active";
      state.data = action.payload;
    },
    [getPlace.rejected]: (state, action) => {
      state.loading = "active";
      state.error = action.payload;
    },
  },
});

export default placeSlice;

import { Info } from "@mui/icons-material";
import { createSlice } from "@reduxjs/toolkit";
import { getCommit } from "../../api/place";

const commitSlice = createSlice({
  name: "commit",
  initialState: {
    data: [],
    status: "active",
    message: null,
  },
  reducers: {},
  extraReducers: {
    [getCommit.pending]: (state) => {
      state.status = "loading";
    },
    [getCommit.fulfilled]: (state, action) => {
      state.status = "active";
      state.data = action.payload.deletion_info;
      state.message = null;
    },
    [getCommit.rejected]: (state, action) => {
      state.status = "active";
      state.message = action.payload;
    },
  },
});

export default commitSlice;

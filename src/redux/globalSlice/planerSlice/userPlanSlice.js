import { createSlice } from "@reduxjs/toolkit";
import { deleteUserPlan, getUserPlans } from "../../../api/planer";

const userPlanSlice = createSlice({
  name: "userPlan",
  initialState: {
    status: "active",
    data: [],
    message: null,
  },
  reducers: {},
  extraReducers: {
    [getUserPlans.pending]: (state) => {
      state.status = "loading";
    },
    [getUserPlans.fulfilled]: (state, action) => {
      state.status = "active";
      state.data = action.payload.data;
    },
    [getUserPlans.rejected]: (state, action) => {
      state.status = "active";
      state.message = action.payload;
    },
    [deleteUserPlan.fulfilled]: (state, action) => {
      state.status = "active";
      state.message = action.payload;
      state.data = state.data.filter((i) => i.id !== action.payload.id);
    },
  },
});

export default userPlanSlice;

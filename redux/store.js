import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./globalSlice/userSlice";
import authSlice from "./globalSlice/authSlice";
import placeSlice from "./globalSlice/placeSlice";
import commitSlice from "./globalSlice/commitSlice";

export const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    user: userSlice.reducer,
    place: placeSlice.reducer,
    commit: commitSlice.reducer,
  },
});

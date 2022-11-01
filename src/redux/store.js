import { configureStore } from "@reduxjs/toolkit";
import generalSlice from "./reducers/generalSlice";

export const store = configureStore({
  reducer: {
    general: generalSlice,
  },
});

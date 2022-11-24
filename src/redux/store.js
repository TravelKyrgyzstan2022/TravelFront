import { configureStore } from "@reduxjs/toolkit";
import  counterSlice  from "./reducers/generalSlice";

export const store = configureStore({
  reducer: {
    general: counterSlice,
  },
});

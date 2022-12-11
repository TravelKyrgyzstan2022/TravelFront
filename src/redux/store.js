import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./globalSlice/userSlice/userSlice";
import authSlice from "./globalSlice/authSlice/authSlice";
import placeSlice from "./globalSlice/placeSlice/placeSlice";
import commitSlice from "./globalSlice/blogSlice/commitSlice";
import blogSlice from "./globalSlice/blogSlice/blogSlice";
import forgotSlice from "./globalSlice/authSlice/forgotSlice";
import activeEmailSlice from "./globalSlice/authSlice/activeEmailSlice";
import placeStaySlice from "./globalSlice/placeSlice/placeStaySlice";
import placeSightsSlice from "./globalSlice/placeSlice/placeSightsSlice";
import placeEatsSlice from "./globalSlice/placeSlice/placeEatsSlice";
import placeGorgesSlice from "./globalSlice/placeSlice/placeGorgesSlice";

export const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    forgot: forgotSlice.reducer,
    active: activeEmailSlice.reducer,
    user: userSlice.reducer,
    place: placeSlice.reducer,
    commit: commitSlice.reducer,
    blog: blogSlice.reducer,
    stayPlace: placeStaySlice.reducer,
    sights: placeSightsSlice.reducer,
    eats: placeEatsSlice.reducer,
    gorges: placeGorgesSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

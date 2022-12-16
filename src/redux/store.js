import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./globalSlice/userSlice/userSlice";
import authSlice from "./globalSlice/authSlice/authSlice";
import placeSlice from "./globalSlice/placeSlice/placeSlice";
import blogSlice from "./globalSlice/blogSlice/blogSlice";
import forgotSlice from "./globalSlice/authSlice/forgotSlice";
import activeEmailSlice from "./globalSlice/authSlice/activeEmailSlice";
import placeStaySlice from "./globalSlice/placeSlice/placeStaySlice";
import placeSightsSlice from "./globalSlice/placeSlice/placeSightsSlice";
import placeEatsSlice from "./globalSlice/placeSlice/placeEatsSlice";
import placeGorgesSlice from "./globalSlice/placeSlice/placeGorgesSlice";
import placeHikingSlice from "./globalSlice/placeSlice/placeHikingSlice";
import placeWaterFallSlice from "./globalSlice/placeSlice/placeWaterFallSlice";
import placeAlpinismSlice from "./globalSlice/placeSlice/placeAlpinismSlice";
import placeLakeSlice from "./globalSlice/placeSlice/placeLakeSlice";
import articleSlice from "./globalSlice/articleSlice/articleSlice";
import supportSlice from "./globalSlice/adminSlice/supportSlice";
import regSlice from "./globalSlice/authSlice/regSlice";
import sendVerifySlice from "./globalSlice/authSlice/sendVerifySlice";
import currentUserSlice from "./globalSlice/userSlice/currentUserSlice";
import commentSlice from "./globalSlice/commentSlice/commentSlice";
import blogsByIdSlice from "./globalSlice/blogSlice/blogsByIdSlice";
import userPlanSlice from "./globalSlice/planerSlice/userPlanSlice";
import userBlogSlice from "./globalSlice/blogSlice/userBlogSlice";

export const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    forgot: forgotSlice.reducer,
    active: activeEmailSlice.reducer,
    user: userSlice.reducer,
    place: placeSlice.reducer,
    blog: blogSlice.reducer,
    stayPlace: placeStaySlice.reducer,
    sights: placeSightsSlice.reducer,
    eats: placeEatsSlice.reducer,
    gorges: placeGorgesSlice.reducer,
    hiking: placeHikingSlice.reducer,
    waterfall: placeWaterFallSlice.reducer,
    alpinism: placeAlpinismSlice.reducer,

    lake: placeLakeSlice.reducer,
    article: articleSlice.reducer,
    support: supportSlice.reducer,
    register: regSlice.reducer,
    verify: sendVerifySlice.reducer,
    currentUser: currentUserSlice.reducer,

    comment: commentSlice.reducer



    blogsById: blogsByIdSlice.reducer,
    userBlog: userBlogSlice.reducer,
    comment: commentSlice.reducer,
    userPlan: userPlanSlice.reducer,

  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

import React, { useEffect, useState } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { SignIn } from "../api/auth";
import Alpinism from "../pages/Alpinism";
import Blogs from "../pages/Blogs";
import Detail from "../pages/DetailPage";
import Eat from "../pages/Eat";
import Events from "../pages/Events";
import Gorges from "../pages/Gorges";
import Hiking from "../pages/Hiking";
import HomePage from "../pages/HomePage/HomePage";
import Lakes from "../pages/Lakes";
import Login2 from "../pages/Login/Login2";
import LoginUser from "../pages/Login/LoginUser";
import Mountains from "../pages/Mountains";
import NotFound from "../pages/NotFound/NotFound";
import { PrivateOffice } from "../pages/PrivateOffice";
import Registr from "../pages/Registr/Registr";
import Sightseeing from "../pages/Sightseeing";
import Stay from "../pages/Stay";
import Waterfall from "../pages/WaterFall";
import { today, getLocalTimeZone } from "@internationalized/date";
import Verification from "../pages/Verification";
import DetailArticlePage from "../pages/DetailArticlePage";
import UserProfile from "../pages/UserProfile/UserProfile";

const UserRoute = () => (
  <Routes>
    <Route path="/" element={<HomePage />} />
    <Route path="/login" element={<LoginUser />} />
    <Route path="/login2" element={<Login2 />} />
    <Route path="/sign" element={<SignIn />} />
    <Route path="/reg" element={<Registr />} />
    <Route path="/verification" element={<Verification />} />
    <Route path="/events" element={<Events />} />
    <Route path="/stay" element={<Stay />} />
    <Route path="/sightseeing" element={<Sightseeing />} />
    <Route path="/eat" element={<Eat />} />
    <Route path="/details/:id" element={<Detail />} />
    <Route path="/gorges" element={<Gorges />} />
    <Route path="/hiking" element={<Hiking />} />
    <Route path="/waterfall" element={<Waterfall />} />
    <Route path="/mountains" element={<Mountains />} />
    <Route path="/alpinism" element={<Alpinism />} />
    <Route path="/lakes" element={<Lakes />} />
    <Route path="/blogs" element={<Blogs />} />
    <Route
      path="/private_office"
      element={<PrivateOffice defaultValue={today(getLocalTimeZone())} />}
    />

    <Route path="/detailarticle/:id" element={<DetailArticlePage />} />
    <Route path="/planner/:id" element={<UserProfile />} />
    <Route
      path="/private_office"
      element={<PrivateOffice defaultValue={today(getLocalTimeZone())} />}
    />

    {/* <Route path="/*" element={<NotFound />} /> */}
  </Routes>
);

export default UserRoute;

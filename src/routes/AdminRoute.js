import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import AdminPage from "../pages/AdminPage/AdminPage";
import Content from "../pages/AdminPanel/Content";
import Dashboard from "../pages/AdminPanel/Dashboard/DashBoard";
import DataBase from "../pages/AdminPanel/DataBase";
import Managers from "../pages/AdminPanel/Managers";
import ReviewsAndBlogs from "../pages/AdminPanel/ReviewsAndBlogs";

const AdminRoute = () => {
  return (
    <Routes>
      <Route path="/" element={<AdminPage />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/database" element={<DataBase />} />
      <Route path="/content" element={<Content />} />
      <Route path="/managers" element={<Managers />} />
      <Route path="/reviewsandblogs" element={<ReviewsAndBlogs />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};

export default AdminRoute;

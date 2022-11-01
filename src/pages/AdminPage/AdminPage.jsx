import React from "react";
import admin from "./AdminPage.module.css";
import { Link } from "react-router-dom";

const AdminPage = () => {
  return (
    <>
      <h2 className={admin.maintxt}>Admin Page</h2>
      <Link to="/">
        <button>Home</button>
      </Link>
    </>
  );
};

export default AdminPage;

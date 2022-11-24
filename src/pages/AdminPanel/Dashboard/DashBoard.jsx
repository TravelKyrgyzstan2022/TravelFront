import React from "react";
import dash from "./index.module.css";

const Dashboard = () => {
  return (
    <div className={dash.container}>
      <form className={dash.form}>
        <input
          className={dash.search}
          type="search"
          placeholder="Поиск по ФИО, электронной почте, дате регистрации"
        />
      </form>
    </div>
  );
};

export default Dashboard;

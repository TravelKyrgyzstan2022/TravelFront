import React from "react";
import db from "./index.module.css";
import Search from "../../../img/search.svg";

const DataBase = () => {
  return (
    <div>
      <div className={db.container}>
        <form className={db.form}>
          <img className={db.img} src={Search} alt="" />
          <input
            className={db.search}
            type="search"
            placeholder="Поиск по ФИО, электронной почте, дате регистрации"
          />
        </form>
        <div className={db.border}></div>
      </div>
    </div>
  );
  }

export default DataBase;

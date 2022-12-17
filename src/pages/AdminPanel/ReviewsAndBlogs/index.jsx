import React from "react";
import rb from "./index.module.css";
import Search from "../../../img/search.svg";
import Title from "../../../img/blogandrev.svg";
import SideBar from "../../../components/SideBar";
import Tab from "../../../components/Tab/Tab";

const ReviewsAndBlogs = (props) => {
  return (
    <div className={rb.main_container}>
      <SideBar />
      <div className={rb.container}>
        <form className={rb.form}>
          <img className={rb.img} src={Search} alt="" />
          <input className={rb.search} type="search" placeholder="Поиск" />
        </form>
        <div className={rb.border}></div>
        <div className={rb.content}>
          <div className={rb.title}>
            <img className={rb.title_image} src={Title} alt="title img" />
            <h3>Одобрение блогов</h3>
          </div>
          <div>
            <Tab />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewsAndBlogs;

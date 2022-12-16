import React from "react";
import mn from "./index.module.css";
import Search from "../../../img/search.svg";
import Mtitle from "../../../img/mtitle.svg";
import Add_Icon from "../../../img/add_managers.svg";
import SideBar from "../../../components/SideBar";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAdmin, getUser } from "../../../api/admin";
import { useEffect } from "react";
import { setRole } from "../../../redux/globalSlice/userSlice/userSlice";

const Managers = () => {
  const dispatch = useDispatch();
  const [id, setId] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(getAdmin({ userId: id })).then((res) => {
      if (res.payload.status === 200) {
        dispatch(setRole({ id: +id, role: "ROLE_ADMIN" }));
      }
    });
  };

  useEffect(() => {
    getUser();
  }, []);

  const managers = useSelector((state) => state.user.data);

  return (
    <div className={mn.main_container}>
      <SideBar />
      <div className={mn.container}>
        <form className={mn.form}>
          <img className={mn.img} src={Search} alt="" />
          <input className={mn.search} type="search" placeholder="Поиск" />
        </form>
        <div className={mn.border}></div>
        <div className={mn.about}>
          <div className={mn.title}>
            <img className={mn.title_image} src={Mtitle} alt="title img" />
            <h3>Менеджеры</h3>
          </div>
          <div className={mn.about_managers}>
            {managers.map((manager) =>
              manager.role !== "ROLE_USER" ? (
                <div className={mn.card}>
                  <img
                    className={mn.icon}
                    src={manager.image_url}
                    alt="title img"
                  />
                  <div className={mn.name}>{manager.first_name}</div>
                  <p className={mn.link}>{manager.role}</p>
                </div>
              ) : null
            )}
          </div>

          <div className={mn.add_mn}>
            <img className={mn.add_icon} src={Add_Icon} alt="" />
            <h3>Добавление менеджера </h3>
          </div>
          <div className={mn.manager_box}>
            <div className={mn.empty}>
              <form onSubmit={handleSubmit}>
                <div className={mn.right}>
                  <input className={mn.input} type="text" placeholder="Имя" />
                  <input
                    className={mn.input}
                    type="text"
                    placeholder="Фамилия"
                  />
                  <input
                    className={mn.input}
                    type="text"
                    placeholder="id"
                    value={id}
                    onChange={(e) => setId(e.target.value)}
                  />
                  <input
                    className={mn.input}
                    type="email"
                    placeholder="Электронная почта"
                  />
                  <div className={mn.btn}>
                    <button
                      onSubmit={handleSubmit}
                      type="submit"
                      className={mn.btn_a}
                    >
                      Добавить менеджера
                    </button>
                  </div>
                </div>
              </form>
              <div className={mn.box}></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Managers;

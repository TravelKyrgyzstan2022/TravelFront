import { useRef } from "react";
import styled from "styled-components";
import { useCalendarState } from "@react-stately/calendar";
import { useLocale, useDateFormatter } from "@react-aria/i18n";
import { createCalendar } from "@internationalized/date";
import calen from "./index.module.css";
import Ava from "../../img/ava.svg";
import FACE_ASK from "../../img/ask_face.svg";
import PLUS_ADD from "../../img/plus-circle.svg";
import Add_plus from "../../img/pencil.svg";
import Background from "../../img/profile_background.png";
import { useState } from "react";
import { useEffect } from "react";
import { logOut } from "../../redux/globalSlice/authSlice/authSlice";
import { useDispatch, useSelector } from "react-redux";
import { Link, Navigate, useNavigate, useParams } from "react-router-dom";
import { getBlog, getBlogById, getUserBlog } from "../../api/blogs";
import { deleteUserPlan, getUserPlans } from "../../api/planer";
import Delete from "../../img/delete.svg";

const StyledWeekView = styled.div`
  display: inline-grid;
  grid-template-columns: auto 1fr auto;
  align-items: center;
`;

const Title = styled.h3`
  grid-area: 1 / span 3;
`;

export function PrivateOffice(props) {
  const [selectDate, setSelectDate] = useState("");
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  let { locale } = useLocale();
  let state = useCalendarState({
    ...props,
    visibleDuration: { weeks: 1 },
    locale,
    createCalendar,
  });
  let ref = useRef();

  useEffect(() => {
    setSelectDate(
      "" + state.value.day + "-" + state.value.month + "-" + state.value.year
    );
  }, []);

  const user = useSelector((state) => state.auth.user);
  const blogs = useSelector((state) => state.userBlog.data);
  console.log(blogs);

  const planner = useSelector((state) => state.userPlan.data);
  console.log(planner);

  const handleExit = () => {
    dispatch(logOut());
    navigate("/");
  };

  useEffect(() => {
    dispatch(getUserPlans());
    dispatch(getUserBlog());
  }, []);

  const handleDelete = (e, planId) => {
    e.preventDefault();
    dispatch(deleteUserPlan({ id }));
  };

  return (
    <div className={calen.container}>
      <img src={Background} alt="" />
      <div className={calen.content}>
        <div className={calen.content_left}>
          <div className={calen.user}>
            <div className={calen.user_header}>
              <img className={calen.ava} src={Ava} alt="ava" />
              <div className={calen.user_title}>
                <h4 className={calen.title}>
                  {user ? user.first_name : "Name"}
                </h4>
                <div className={calen.link}>{user ? user.email : "Email"} </div>
              </div>
            </div>
            <div className={calen.btn_ask__manager}>
              <button
                onClick={(e) => window.open("https://t.me/beNomadCunsult")}
                className={calen.btn}
              >
                <img className={calen.btn_img} src={FACE_ASK} alt="img" />
                Ask manager support
              </button>
              <button className={calen.logOut} onClick={handleExit}>
                Logout
              </button>
            </div>
          </div>
          <div className={calen.blogs1}>
            {planner.map((planner) => (
              <div className={calen.padding}>
                <div className={calen.mini_card}>
                  <div className={calen.mini_card__img}>
                    <img
                      className={calen.image_card}
                      src={planner.place.image_urls}
                      alt="place img"
                    />
                    <p className={calen.mini_card__title}>
                      {planner.place.name}
                    </p>
                    <button className={calen.level}>{planner.date}</button>
                  </div>
                  <div className={calen.mini_card__right}>
                    <div className={calen.tags}>
                      <div className={calen.tag}>Note: {planner.note}</div>
                      <div className={calen.tag}>
                        Address: {planner.place.address}
                      </div>
                      </div>
                    </div>
                      <div className={calen.mini_card__third}>
                      <button className={calen.mini_card__btndel} onClick={handleDelete}><img src={Delete} alt="" /></button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className={calen.content_right}>
          <div className={calen.content_header}>
            <p className={calen.content_right__title}>Your Blogs</p>
            <Link to="/user/blog">
              <img src={PLUS_ADD} alt="" />
            </Link>
          </div>

          <div className={calen.blogs_cards}>
            <div className={calen.blog_card}>
              {blogs.map((blog) => (
                <div className={calen.padding}>
                  <img
                    className={calen.blog_img}
                    src={blog.image_urls}
                    alt=""
                  />
                  <p className={calen.blog_description}>{blog.title}</p>
                  <div className={calen.blog_edit}>
                    <img src={Add_plus} alt="" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

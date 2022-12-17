import { useRef } from "react";
import styled from "styled-components";
import { useCalendarState } from "@react-stately/calendar";
import { useCalendar, useCalendarGrid } from "@react-aria/calendar";
import { useLocale, useDateFormatter } from "@react-aria/i18n";
import { createCalendar } from "@internationalized/date";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { CalendarCell } from "../../components/CalendarCell";
import { CalendarButton } from "../../components/CalendarButton";
import calen from "./index.module.css";
import Ava from "../../img/ava.svg";
import FACE_ASK from "../../img/ask_face.svg";
import PLUS_ADD from "../../img/plus-circle.svg";
import IMAGE from "../../img/blog_img.png";
import Add_plus from "../../img/pencil.svg";
import Background from "../../img/profile_background.png";
import { useState } from "react";
import { useEffect } from "react";
import { logOut } from "../../redux/globalSlice/authSlice/authSlice";
import { useDispatch, useSelector } from "react-redux";
import { Link, Navigate, useNavigate, useParams } from "react-router-dom";
import { getBlog, getBlogById, getUserBlog } from "../../api/blogs";
import { deleteUserPlan, getUserPlans } from "../../api/planer";

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
  const dispatch = useDispatch();
  const navigate = useNavigate();
  let { locale } = useLocale();

  let ref = useRef();

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

  const handleDelete = (planId) => {
    console.log(planner);
    dispatch(deleteUserPlan({ id: planId }));
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
            {planner.map((item) => (
              <div className={calen.padding}>
                <div key={item.id} className={calen.mini_card}>
                  <div className={calen.mini_card__img}>
                    <img
                      className={calen.image_card}
                      src={item.place.image_urls}
                      alt="place img"
                    />
                  </div>
                  <div className={calen.mini_card__right}>
                    <p className={calen.mini_card__title}>{item.place.name}</p>
                    <button className={calen.level}>{item.date}</button>
                    <div className={calen.tags}>
                      <div className={calen.tag}>Note: {item.note}</div>
                      <div className={calen.tag}>
                        Address: {item.place.address}
                      </div>
                      <button onClick={() => handleDelete(item.id)}>
                        Delete
                      </button>
                    </div>
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

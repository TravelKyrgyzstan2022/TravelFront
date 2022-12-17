import React, { useEffect } from "react";
import main from "./HomePage.module.css";
import gorges from "../../img/GORGES_icons.svg";
import hiking from "../../img/hiking_icons.svg";
import sights from "../../img/ALPINISM_icons.svg";
import waterfall from "../../img/waterfall_icons.svg";
import mountains from "../../img/waves_icons.svg";
import lakes from "../../img/lakeee.svg";
import mainbg from "../../img/mainbg.svg";
import Banner from "../../img/banner.png";
import { useTheme } from "styled-components";
import { NavLink, useNavigate } from "react-router-dom";
import TopDestinations from "./TopDestinations";
import PopularArticles from "./PopularArticles";
import StayHotel from "./StayHotel";
import ExtremeTour from "./ExtremeTour";
import Footer from "../../components/Footer/Footer";
import { getBlog } from "../../api/blogs";
import { useDispatch, useSelector } from "react-redux";
import BlogsAndReviews from "./BlogsAndReviews";
import { useTranslation } from "react-i18next";
import { getPlace } from "../../api/place";

const HomePage = () => {
  const navigate = useNavigate();
  const theme = useTheme();
  const dispatch = useDispatch();
  const place = useSelector((state) => state.place.data);

  useEffect(() => {
    dispatch(getPlace());
    dispatch(getBlog());
    window.scrollTo(0, 0);
  }, []);

  const { t, i18n } = useTranslation();

  const handleCheckRole = () => {
    localStorage.getItem("role") === "ROLE_USER"
      ? navigate("/private_office")
      : navigate("/login");
  };

  return (
    <>
      <div className={main.section}>
        <div className={main.container}>
          <img className={main.mainbg} src={mainbg} alt="main background img" />
          <div className={main.intro}>
            <h2 className={main.maintxt}>{t("welcome")}</h2>
            <div className={main.date}>
              <div onClick={handleCheckRole}>{t("start")}</div>
            </div>
            <div className={main.cotegory}>
              <h5 className={main.category_title}>{t("topcategories")}</h5>
              <div className={main.list}>
                <div >
                  <NavLink to="/gorges">
                    <img className={main.icons_categor} src={gorges} alt="gorges img" />
                    <h4 className={main.icons_txt}>{t("gorges")}</h4>
                  </NavLink>
                </div>
                <div>
                  <NavLink to="/hiking">
                    <img className={main.icons_categor} src={hiking} alt="hiking img" />
                    <h4 className={main.icons_txt}>{t("hiking")}</h4>
                  </NavLink>
                </div>
                <div>
                  <NavLink to="/waterfall">
                    <img className={main.icons_categor}  src={waterfall} alt="waterfalls img" />
                    <h4 className={main.icons_txt}>{t("waterfalls")}</h4>
                  </NavLink>
                </div>
                <div>
                <NavLink to="/alpinism">
                    <img className={main.icons_categor} src={lakes} alt="lakes img" />
                  <h4 className={main.icons_txt}>{t("mountains")}</h4>
                </NavLink>
                </div>
                  <div>
                <NavLink to="/lakes">
                  <img className={main.icons_categor} src={mountains} alt="mountains img" />
                    <h4 className={main.icons_txt}>{t("lakes")}</h4>
                </NavLink>
                  </div>
                <div>
                  <NavLink to="/alpinism">
                    <img className={main.icons_categor} src={sights} alt="sight img" />
                    <h4 className={main.icons_txt}>{t("alpinism")}</h4>
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={main.container}>
        {/* BLOG AND REVIEWS */}
        <BlogsAndReviews />

        {/*! POPULAR ARTICLES */}

        <PopularArticles />

        {/*! TOP DESTINATIONS */}
        <h3 className={main.topdis_title}>Top destinations</h3>
        <TopDestinations place={place} />

        {/* !  STAY */}
        <StayHotel />

        {/* ! TRIP */}
        <div className={main.plan_trip}>
          <div className={main.plan_trip__img}>
            <img src={Banner} alt="" />
          </div>
          <div className={main.plan_trip__details}>
            <h3 className={main.plan_trip__title}>Plan your trip with us</h3>
            <button onClick={handleCheckRole} className={main.plan_trip__btn}>
              Plan your trip
            </button>
          </div>
        </div>

        {/* ! EXTRIME TOUR */}
        <ExtremeTour />
      </div>
      <Footer />
    </>
  );
};

export default HomePage;

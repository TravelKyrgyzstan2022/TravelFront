import React, { useEffect } from "react";
import main from "./HomePage.module.css";
import gorges from "../../img/gorges.svg";
import hiking from "../../img/hiking.svg";
import sights from "../../img/alpinism.svg";
import waterfall from "../../img/waterfall.svg";
import mountains from "../../img/mountains.svg";
import lakes from "../../img/lakes.svg";
import mainbg from "../../img/mainbg.svg";
import Banner from "../../img/banner.png";
import { useTheme } from "styled-components";
import { NavLink } from "react-router-dom";
import TopDestinations from "./TopDestinations";
import PopularArticles from "./PopularArticles";
import StayHotel from "./StayHotel";
import ExtremeTour from "./ExtremeTour";
import Footer from "../../components/Footer/Footer";

import { getBlog } from "../../api/blogs";
import { useDispatch, useSelector } from "react-redux";
import { getCommit, getPlace } from "../../api/place";
import BlogsAndReviews from "./BlogsAndReviews";

const HomePage = () => {
  const theme = useTheme();
  const dispatch = useDispatch();
  const place = useSelector((state) => state.place.data);

  useEffect(() => {
    dispatch(getPlace());
    dispatch(getCommit());
    dispatch(getBlog());
  }, []);


  return (
    <>
      <div className={main.section}>
        <div className={main.container}>
          <img className={main.mainbg} src={mainbg} alt="main background img" />
          <div className={main.intro}>
            <h2 className={main.maintxt}>Welcome to Kyrgyzstan!</h2>
            <div className={main.date}>
              <div>Start your journey with us</div>
            </div>
            <div className={main.cotegory}>
              <h5>Top categories</h5>
              <div className={main.list}>
                <div>
                  <NavLink to="/gorges">
                    <img src={gorges} alt="gorges img" />
                  </NavLink>
                </div>
                <div>
                <NavLink to="/hiking">
                  <img src={hiking} alt="hiking img" />
                  </NavLink>
                </div>
                <div>
                  <NavLink to="/waterfall">
                  <img src={waterfall} alt="waterfalls img" />
                  </NavLink>
                </div>
                <div>
                  <img src={mountains} alt="mountains img" />
                </div>
                <NavLink to="/lake">
                <div>
                  <img src={lakes} alt="lakes img" />
                </div>
                </NavLink>
                <div>
                  <NavLink to="/alpinism">
                  <img src={sights} alt="sight img" />
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={main.container}>

        {/* BLOG AND REVIEWS */}
        <BlogsAndReviews/>


        {/*! TOP DESTINATIONS */}
        <h3 className={main.topdis_title}>Top destinations</h3>
        <TopDestinations place={place} />

        {/*! POPULAR ARTICLES */}

        <PopularArticles />

        {/* !  STAY */}
        <StayHotel />

        {/* ! TRIP */}
        <div className={main.plan_trip}>
          <div className={main.plan_trip__img}>
            <img src={Banner} alt="" />
          </div>
          <div className={main.plan_trip__details}>
            <h3 className={main.plan_trip__title}>Plan your trip with us</h3>
            <button className={main.plan_trip__btn}>Plan your trip</button>
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

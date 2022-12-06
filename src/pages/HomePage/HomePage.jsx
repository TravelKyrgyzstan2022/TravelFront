import React from "react";
import main from "./HomePage.module.css";
import gorges from "../../img/gorges.svg";
import hiking from "../../img/hiking.svg";
import sights from "../../img/sights.svg";
import waterfall from "../../img/waterfall.svg";
import mountains from "../../img/mountains.svg";
import lakes from "../../img/lakes.svg";
import mainbg from "../../img/mainbg.svg";
import Banner from "../../img/banner.png";
import { useTheme } from "styled-components";
import { NavLink } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getCommit, getPlace } from "../../api/place";
import TopDestinations from "./TopDestinations";
import PopularArticles from "./PopularArticles";
import StayHotel from "./StayHotel";
import ExtremeTour from "./ExtremeTour";

const HomePage = () => {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const dispatch = useDispatch();
  const place = useSelector((state) => state.place.data);
  const commit = useSelector((state) => state.commit);

  console.log(place);
  useEffect(() => {
    dispatch(getPlace());
  }, []);

  useEffect(() => {
    dispatch(getCommit());
  }, []);

  console.log(commit);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };
  return (
    <>
      <div className={main.section}>
        <div className={main.container}>
          <img className={main.mainbg} src={mainbg} alt="main background img" />
          <div className={main.intro}>
            <h2 className={main.maintxt}>Welcome to Kyrgyzstan!</h2>
            <div className={main.date}>
              <div>Start date</div>
              <div>Due date</div>
              <div className={main.planer}>Plan your trip</div>
            </div>
            <div className={main.cotegory}>
              <h5>Top categories</h5>
              <div className={main.list}>
                <div>
                  <NavLink to='/gorges'>
                  <img src={gorges} alt="gorges img" />
                  </NavLink>
                </div>
                <div>
                  <img src={hiking} alt="hiking img" />
                </div>
                <div>
                  <img src={sights} alt="sight img" />
                </div>
                <div>
                  <img src={waterfall} alt="waterfalls img" />
                </div>
                <div>
                  <img src={mountains} alt="mountains img" />
                </div>
                <div>
                  <img src={lakes} alt="lakes img" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={main.container}>
        {/*! TOP DESTINATIONS */}
        <TopDestinations/>

        {/*! POPULAR ARTICLES */}

        <PopularArticles/>

        {/* !  STAY */}
        <StayHotel/>

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
        <ExtremeTour/>
      </div>
      <Footer />
    </>
  );
};

export default HomePage;

import React, { useEffect } from "react";
import "./index.css";
import GORGES from "../../img/gorges.png";
import hiking from "../../img/hiking.svg";
import alpinism from "../../img/alpinism.svg";
import waterfall from "../../img/waterfall.svg";
import mountains from "../../img/mountains.svg";
import lakes from "../../img/lakes.svg";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import CardCategories from "../../components/Cardotegories";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getGorges } from "../../api/place";
import ButtonCategories from "../../components/ButtonCategories/Button";
import Star from "../../img/star.svg";
import Like from "../../img/like.svg";
import Location from "../../img/location.svg";
import Slider from "react-slick";
import LeftArrow from "../../img/left-arrow.svg";
import RightArrow from "../../img/right-arrow.svg";
import TopDestinations from "../HomePage/TopDestinations";
import homestyle from "../HomePage/HomePage.module.css";
import Footer from "../../components/Footer/Footer";

const Gorges = () => {
  const gorges = useSelector((state) => state.gorges.data);

  const dispatch = useDispatch();


    useEffect(() => {
        dispatch(getGorges())
        window.scrollTo(0, 0)
    },  [])



  return (
    <div className="header">
      <img src={GORGES} alt="" />
      <h4 className="gorges_title">#gorges</h4>
      <div className="cotegory">
        <h5 className="subtitle">Other categories</h5>
        <div className="list">
          <div className="icons">
            <NavLink to="/hiking">
              <img src={hiking} alt="hiking img" />
            </NavLink>
          </div>
          <div className="icons">
            <NavLink to="/waterfall">
              <img src={waterfall} alt="waterfalls img" />
            </NavLink>
          </div>
          <div className="icons">
            <NavLink to="/mountains">
              <img src={mountains} alt="mountains img" />
            </NavLink>
          </div>
          <div className="icons">
            <NavLink to="/lakes">
              <img src={lakes} alt="lakes img" />
            </NavLink>
          </div>
          <div className="icons">
            <NavLink to="/alpinism">
              <img src={alpinism} alt="alpinism img" />
            </NavLink>
          </div>
        </div>
      </div>

      <div className="topdes">
        <h3 className="card_titlee">Choice of our travellers</h3>
        <TopDestinations place={gorges} />
      </div>
      <Footer />
    </div>
    /* 
                    <div className="section2">
                    <h3 className="card2_title">New destinations</h3>
                    </div>
                    <div className="cards2">
                        <CardCategories/>
                    </div> */
    // </div> */}

    // </div>
  );
};

export default Gorges;

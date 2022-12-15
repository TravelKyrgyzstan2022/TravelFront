import React, { useEffect } from "react";
import WATERFALL from "../../img/hiking-header.png";
import gorges from "../../img/gorges.svg";
import alpinism from "../../img/alpinism.svg";
import hiking from "../../img/hiking.svg";
import mountains from "../../img/mountains.svg";
import lakes from "../../img/lakes.svg";
import { NavLink } from "react-router-dom";
import water from "./index.module.css";
import TopDestinations from "../HomePage/TopDestinations";
import { useDispatch, useSelector } from "react-redux";
import { getWaterFall } from "../../api/place";
import Footer from "../../components/Footer/Footer";

const Waterfall = () => {
  const waterfall = useSelector((state) => state.waterfall.data);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getWaterFall());
  }, []);

  return (
    <div>
      <div className={water.header}>
        <img src={WATERFALL} alt="" />
        <h4 className={water.title}>#waterfalls</h4>
        <div className={water.cotegory}>
          <h5 className={water.subtitle}>Other categories</h5>
          <div className={water.list}>
            <div className={water.icons}>
              <NavLink to="/gorges">
                <img src={gorges} alt="gorges img" />
              </NavLink>
            </div>
            <div className={water.icons}>
              <NavLink to="/hiking">
                <img src={hiking} alt="hiking img" />
              </NavLink>
            </div>
            <div className={water.icons}>
              <NavLink to="/mountains">
                <img src={mountains} alt="mountains img" />
              </NavLink>
            </div>
            <div className={water.icons}>
              <NavLink to="/lakes">
                <img src={lakes} alt="lakes img" />
              </NavLink>
            </div>
            <div className={water.icons}>
              <NavLink to="/alpinism">
                <img src={alpinism} alt="alpinism img" />
              </NavLink>
            </div>
          </div>
        </div>

        <div className={water.waterfall_card}>
          <h3 className={water.card_titlee}>Choice of our travellers</h3>
          <TopDestinations place={waterfall} />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Waterfall;

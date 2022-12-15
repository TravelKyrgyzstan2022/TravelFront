import React, { useEffect } from "react";
import LAKES from "../../img/lakes-header.png";
import gorges from "../../img/gorges.svg";
import alpinism from "../../img/alpinism.svg";
import hiking from "../../img/hiking.svg";
import waterfall from "../../img/waterfall.svg";
import mountains from "../../img/mountains.svg";
import { NavLink } from "react-router-dom";
import lakes from "./index.module.css";
import { useDispatch, useSelector } from "react-redux";
import { getLake } from "../../api/place";
import TopDestinations from "../HomePage/TopDestinations";
import Footer from "../../components/Footer/Footer";

const Lakes = () => {
  const lake = useSelector((state) => state.lake.data);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getLake());
  }, []);
  return (
    <div>
      <div className={lakes.header}>
        <img src={LAKES} alt="" />
        <h4 className={lakes.title}>#lakes</h4>
        <div className={lakes.cotegory}>
          <h5 className={lakes.subtitle}>Other categories</h5>
          <div className={lakes.list}>
            <div className={lakes.icons}>
              <NavLink to="/gorges">
                <img src={gorges} alt="gorges img" />
              </NavLink>
            </div>
            <div className={lakes.icons}>
              <NavLink to="/hiking">
                <img src={hiking} alt="hiking img" />
              </NavLink>
            </div>
            <div className={lakes.icons}>
              <NavLink to="/waterfall">
                <img src={waterfall} alt="waterfalls img" />
              </NavLink>
            </div>
            <div className={lakes.icons}>
              <NavLink to="/mountains">
                <img src={mountains} alt="mountains img" />
              </NavLink>
            </div>
            <div className={lakes.icons}>
              <NavLink to="/alpinism">
                <img src={alpinism} alt="alpinism img" />
              </NavLink>
            </div>
          </div>
        </div>

        <div className={lakes.lake_card}>
          <h3 className={lakes.card_titlee}>Choice of our travellers</h3>
          <TopDestinations place={lake} />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Lakes;

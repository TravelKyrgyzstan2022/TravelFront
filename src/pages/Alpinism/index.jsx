import React, { useEffect } from "react";
import ALPINISM from "../../img/alpinism-header.png";
import gorges from "../../img/gorges.svg";
import mountains from "../../img/mountains.svg";
import hiking from "../../img/hiking.svg";
import waterfall from "../../img/waterfall.svg";
import lakes from "../../img/lakes.svg";
import { NavLink } from "react-router-dom";
import alp from "./index.module.css";
import { useDispatch, useSelector } from "react-redux";
import { getAlpinism } from "../../api/place";
import TopDestinations from "../HomePage/TopDestinations";
import Footer from "../../components/Footer/Footer";
const Alpinism = () => {
  const alpinism = useSelector((state) => state.alpinism.data)

  const dispatch = useDispatch()

  useEffect(() => {
      dispatch(getAlpinism())
  },  [])

  return (
    <div>
      <div className={alp.header}>
        <img src={ALPINISM} alt="" />
        <h4 className={alp.title}>#alpinism</h4>
        <div className={alp.cotegory}>
          <h5 className={alp.subtitle}>Other categories</h5>
          <div className={alp.list}>
            <div className={alp.icons}>
              <NavLink to="/gorges">
                <img src={gorges} alt="gorges img" />
              </NavLink>
            </div>
            <div className={alp.icons}>
              <NavLink to="/hiking">
                <img src={hiking} alt="hiking img" />
              </NavLink>
            </div>
            <div className={alp.icons}>
              <NavLink to="/waterfall">
                <img src={waterfall} alt="waterfalls img" />
              </NavLink>
            </div>
            <div className={alp.icons}>
              <NavLink to="/lakes">
                <img src={lakes} alt="lakes img" />
              </NavLink>
            </div>
            <div className={alp.icons}>
              <NavLink to="/mountains">
                <img src={mountains} alt="mountains img" />
              </NavLink>
            </div>
          </div>
        </div>

        <div className={alp.alpinism_card}>
          <h3 className={alp.card_titlee}>Choice of our travellers</h3>
          <TopDestinations place={alpinism}/>
          </div>
      </div>      <Footer />
    </div>
  );
};

export default Alpinism;

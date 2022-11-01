import React from "react";
import cont from "./Content.module.css";
import koltor from "../../img/Kol-Tor.svg";
import kelsuu from "../../img/kelsuu.svg";
import kokmoinok from "../../img/kokmoinok.svg";
import sarychelek from "../../img/sarychelek.svg";
import suusamyr from "../../img/suusamyr.svg";
import racek from "../../img/racek.svg";

const Content = () => {
  return (
    <>
      <div className={cont.container}>
        <div className={cont.header}>
          <h2 className={cont.txt}>Our Best Destinations For You</h2>
          <input
            className={cont.search}
            type="text"
            name=""
            id=""
            placeholder="Search destination"
          />
        </div>
        <div className={cont.list}>
          <div className={cont.item}>
            <img src={koltor} alt="" />
          </div>
          <div className={cont.item}>
            <img src={kelsuu} alt="" />
          </div>
          <div className={cont.item}>
            <img src={kokmoinok} alt="" />
          </div>
          <div className={cont.item}>
            <img src={sarychelek} alt="" />
          </div>
          <div className={cont.item}>
            <img src={suusamyr} alt="" />
          </div>
          <div className={cont.item}>
            <img src={racek} alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Content;

import React from "react";
import main from "./MainPage.module.css";
import forest from "../../img/forest.svg";
import hiking from "../../img/hiking.svg";
import sights from "../../img/sights.svg";
import waterfall from "../../img/waterfall.svg";
import mountains from "../../img/mountains.svg";
import lakes from "../../img/lakes.svg";
import mainbg from "../../img/mainbg.svg";

const MainPage = () => {
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
                  <img src={forest} alt="forest img" />
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
    </>
  );
};

export default MainPage;

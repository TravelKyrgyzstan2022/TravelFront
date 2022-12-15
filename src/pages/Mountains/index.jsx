import React from "react";
import MOUNTAINS from "../../img/mountains-header.png";
import gorges from "../../img/gorges.svg";
import alpinism from "../../img/alpinism.svg";
import hiking from "../../img/hiking.svg";
import waterfall from "../../img/waterfall.svg";
import lakes from "../../img/lakes.svg";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import CardCategories from "../../components/Cardotegories";
import { NavLink } from "react-router-dom";
import mountains from "./index.module.css";
import Footer from "../../components/Footer/Footer";

const Mountains = () => {
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };
  return (
    <div>
      <div className={mountains.header}>
        <img src={MOUNTAINS} alt="" />
        <h4 className={mountains.title}>#mountains</h4>
        <div className={mountains.cotegory}>
          <h5 className={mountains.subtitle}>Other categories</h5>
          <div className={mountains.list}>
            <div className={mountains.icons}>
              <NavLink to="/gorges">
                <img src={gorges} alt="gorges img" />
              </NavLink>
            </div>
            <div className={mountains.icons}>
              <NavLink to="/hiking">
                <img src={hiking} alt="hiking img" />
              </NavLink>
            </div>
            <div className={mountains.icons}>
              <NavLink to="/waterfall">
                <img src={waterfall} alt="waterfalls img" />
              </NavLink>
            </div>
            <div className={mountains.icons}>
              <NavLink to="/lakes">
                <img src={lakes} alt="lakes img" />
              </NavLink>
            </div>
            <div className={mountains.icons}>
              <NavLink to="/alpinism">
                <img src={alpinism} alt="alpinism img" />
              </NavLink>
            </div>
          </div>
        </div>

        <div className={mountains.slider}>
          <h3 className={mountains.card_title}>Choice of our travellers</h3>
          <div className={mountains.slider_buttons}>
            <ArrowBackIcon
              onClick={handleNext}
              className={mountains.arrow_back}
            />
            <ArrowForwardIcon
              onClick={handleBack}
              className={mountains.arrow_next}
            />
          </div>
        </div>
        <div className={mountains.cards1}>
          <CardCategories />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Mountains;

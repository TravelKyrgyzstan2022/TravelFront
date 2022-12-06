import React from "react";
import main from "./HomePage.module.css";
import gorges from "../../img/gorges.svg";
import hiking from "../../img/hiking.svg";
import sights from "../../img/sights.svg";
import waterfall from "../../img/waterfall.svg";
import mountains from "../../img/mountains.svg";
import lakes from "../../img/lakes.svg";
import mainbg from "../../img/mainbg.svg";
import AlaArcha from "../../img/ala-archa.png";
import Location from "../../img/location.svg";
import Star from "../../img/star.svg";
import Plan from "../../img/plan_light.svg";
import Konorchek from "../../img/konorchek.png";
import Comsomolec from "../../img/comsomolec.png";
import Like from "../../img/like.svg";
import Hiking from "../../img/hiking.png";
import Horse from "../../img/horse.png";
import Burana from "../../img/burana.png";
import Transport from "../../img/transport.png";
import Banner from "../../img/banner.png";
import Han_Tengri from "../../img/han-tengri.png";
import Lenin from "../../img/lenin.png";
import Stay from "../../img/stay.svg";
import Place_small from "../../img/place_small.png";
import Compass from "../../img/compass.png";
import Inter from "../../img/inter.png";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import MobileStepper from "@mui/material/MobileStepper";
import Button from "@mui/material/Button";
import { useTheme } from "styled-components";
import { Link, NavLink } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getCommit, getPlace } from "../../api/place";
import { getBlog } from "../../api/blogs";

const HomePage = () => {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const dispatch = useDispatch();
  const place = useSelector((state) => state.place.data);

  useEffect(() => {
    dispatch(getPlace());
    dispatch(getCommit());
    dispatch(getBlog());
  }, []);

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
                  <NavLink to="/gorges">
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
        <div className={main.slider}>
          <h3 className={main.title}>Top destinations</h3>
          {/* <MobileStepper
        // steps={maxSteps}
        // position="static"
        activeStep={activeStep}
    nextButton={ */}
          <div className={main.slider_buttons}>
            <Button
              onClick={handleNext}
              // disabled={activeStep ===  - 1}
            >
              {/* {theme.direction === 'rtl' ? ( */}
              <ArrowBackIcon className={main.arrow_back} />
              {/* // ) : ( */}
              {/* // <KeyboardArrowRight /> */}
              {/* // )} */}
            </Button>
            {/* } */}
            {/* backButton={ */}
            <Button
              onClick={handleBack}
              // disabled={activeStep === 0}
            >
              {/* {theme.direction === 'rtl' ? ( */}
              <ArrowForwardIcon className={main.arrow_next} />
              {/* ) : ( */}
              {/* <KeyboardArrowLeft /> */}
              {/* )} */}
            </Button>
            {/* }
    /> */}
          </div>
        </div>
        <div className={main.cards}>
          {place.map((item, i) => (
            <div className={main.card}>
              <div className={main.img_like}>
                <img className={main.card_img} src={item.image_urls} alt="" />
                <img className={main.card_like} src={Like} alt="" />
              </div>
              <h4 className={main.card_title}>{item.name}</h4>
              <div className={main.pin}>
                <div className={main.location}>
                  <Link to="/region">
                    <div className={main.locatioon}>
                      <img src={Location} alt="" /> <p>{item.region}</p>
                    </div>
                  </Link>
                </div>
                <div className={main.raiting}>
                  <img src={Star} alt="" />
                  <p className={main.raiting_txt}>{item.raiting_count}</p>
                </div>
              </div>
              <div className={main.distribute}>
                <button className={main.distribute_btn} href="">
                  {item.raiting_count}
                </button>
              </div>
              <div className={main.card_button}>
                <button className={main.btn}>
                  <img className={main.btn_img} src={Plan} alt="img" />
                  Add to my trip plan
                </button>
              </div>
            </div>
          ))}
        </div>

        {/*! POPULAR ARTICLES */}

        <div className={main.articles}>
          <div className={main.slider}>
            <h3 className={main.articles_title}>Popular articles</h3>
            <div className={main.slider_buttons}>
              <Button
                onClick={handleNext}
                // disabled={activeStep ===  - 1}
              >
                {/* {theme.direction === 'rtl' ? ( */}
                <ArrowBackIcon className={main.arrow_back} />
                {/* // ) : ( */}
                {/* // <KeyboardArrowRight /> */}
                {/* // )} */}
              </Button>
              {/* } */}
              {/* backButton={ */}
              <Button
                onClick={handleBack}
                // disabled={activeStep === 0}
              >
                {/* {theme.direction === 'rtl' ? ( */}
                <ArrowForwardIcon className={main.arrow_next} />
                {/* ) : ( */}
                {/* <KeyboardArrowLeft /> */}
                {/* )} */}
              </Button>
              {/* }
                /> */}
            </div>
          </div>
          <div className={main.acrticles_cards}>
            <div className={main.art_card}>
              <img className={main.articles_card1} src={Hiking} alt="" />
              <div className={main.art_txt}>
                <p className={main.articles_txt1}>
                  5 Reasons to Visit Kyrgyzstan
                </p>
              </div>
            </div>
            <div className={main.art_card}>
              <img className={main.articles_card2} src={Horse} alt="" />
              <div className={main.art_txt}>
                <p className={main.articles_txt2}>
                  Fun Activities Everyone Should Try While in Kyrgyzstan
                </p>
              </div>
            </div>
            <div className={main.art_card}>
              <img className={main.articles_card3} src={Burana} alt="" />
              <div className={main.art_txt}>
                <p className={main.articles_txt3}>
                  7 Interesting Facts About Kyrgyzstan
                </p>
              </div>
            </div>
            <div className={main.art_card}>
              <img className={main.articles_card4} src={Transport} alt="" />
              <div className={main.art_txt}>
                <p className={main.articles_txt4}>
                  Transportation System in Kyrgyzstan - Handy Lifehacks
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* !  STAY */}

        <div className={main.stay}>
          <div className={main.slider}>
            <h3 className={main.stay_title}>Stay</h3>
            <div className={main.slider_buttons}>
              <Button onClick={handleNext} disabled={activeStep === -1}>
                {/* {theme.direction === 'rtl' ? ( */}
                <ArrowBackIcon className={main.arrow_back} />
                {/* // ) : ( */}
                {/* // <KeyboardArrowRight /> */}
                {/* // )} */}
              </Button>
              {/* } */}
              {/* backButton={ */}
              <Button onClick={handleBack} disabled={activeStep === 0}>
                {/* {theme.direction === 'rtl' ? ( */}
                <ArrowForwardIcon className={main.arrow_next} />
                {/* ) : ( */}
                {/* <KeyboardArrowLeft /> */}
                {/* )} */}
              </Button>
              {/* }
                    /> */}
            </div>
          </div>
          <div className={main.cards}>
            <div className={main.card}>
              <div className={main.img_like}>
                <img className={main.card_img} src={Place_small} alt="" />
                <img className={main.card_like} src={Like} alt="" />
              </div>
              <h4 className={main.card_title}>Hotel “Greenwich”</h4>
              <div className={main.pin}>
                <div className={main.location}>
                  <a className={main.locatioon}>
                    <img src={Location} alt="" /> <p>Bishkek</p>
                  </a>
                </div>
                <div className={main.raiting}>
                  <img src={Star} alt="" />
                  <p className={main.raiting_txt}>4.5</p>
                </div>
              </div>
              <div className={main.card_button}>
                <button className={main.btn}>
                  <img className={main.btn_img} src={Plan} alt="img" />
                  Add to my trip plan
                </button>
              </div>
            </div>

            <div className={main.card}>
              <div className={main.img_like}>
                <img className={main.card_img} src={Compass} alt="" />
                <img className={main.card_like} src={Like} alt="" />
              </div>
              <h4 className={main.card_title}>Hotel “Compass”</h4>
              <div className={main.pin}>
                <div className={main.location}>
                  <a className={main.locatioon}>
                    <img src={Location} alt="" /> <p>Bishkek</p>
                  </a>
                </div>
                <div className={main.raiting}>
                  <img src={Star} alt="" />
                  <p className={main.raiting_txt}>3.9</p>
                </div>
              </div>
              <div className={main.card_button}>
                <button className={main.btn}>
                  <img className={main.btn_img} src={Plan} alt="img" />
                  Add to my trip plan
                </button>
              </div>
            </div>

            <div className={main.card}>
              <div className={main.img_like}>
                <img className={main.card_img} src={Inter} alt="" />
                <img className={main.card_like} src={Like} alt="" />
              </div>
              <h4 className={main.card_title}>Hotel “Inter”</h4>
              <div className={main.pin}>
                <div className={main.location}>
                  <a className={main.locatioon}>
                    <img src={Location} alt="" /> <p>Bishkek</p>
                  </a>
                </div>
                <div className={main.raiting}>
                  <img src={Star} alt="" />
                  <p className={main.raiting_txt}>4.9</p>
                </div>
              </div>
              <div className={main.card_button}>
                <button className={main.btn}>
                  <img className={main.btn_img} src={Plan} alt="img" />
                  Add to my trip plan
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* ! TRIP */}
        <div className={main.plan_trip}>
          <div className={main.plan_trip__img}>
            <img src={Banner} alt="" />
          </div>
          <div className={main.plan_trip__details}>
            <h2 className={main.plan_trip__title}>Plan your trip with us</h2>
            <button className={main.plan_trip__btn}>Plan your trip</button>
          </div>
        </div>

        {/* ! EXTRIME TOUR */}
        <div className={main.extrime_tour}>
          <div className={main.slider}>
            <h3 className={main.title}>Extreme hardcore tours</h3>
            <div className={main.slider_buttons}>
              <Button
                onClick={handleNext}
                // disabled={activeStep ===  - 1}
              >
                {/* {theme.direction === 'rtl' ? ( */}
                <ArrowBackIcon className={main.arrow_back} />
                {/* // ) : ( */}
                {/* // <KeyboardArrowRight /> */}
                {/* // )} */}
              </Button>
              {/* } */}
              {/* backButton={ */}
              <Button
                onClick={handleBack}
                // disabled={activeStep === 0}
              >
                {/* {theme.direction === 'rtl' ? ( */}
                <ArrowForwardIcon className={main.arrow_next} />
                {/* ) : ( */}
                {/* <KeyboardArrowLeft /> */}
                {/* )} */}
              </Button>
              {/* }
                    /> */}
            </div>
          </div>
          <div className={main.cards}>
            <div className={main.card}>
              <div className={main.img_like}>
                <img className={main.card_img} src={Han_Tengri} alt="" />
                <img className={main.card_like} src={Like} alt="" />
              </div>
              <h4 className={main.card_title}>Han-Tengri</h4>
              <div className={main.pin}>
                <div className={main.location}>
                  <a className={main.locatioon}>
                    <img src={Location} alt="" /> <p>Naryn Region</p>
                  </a>
                </div>
                <div className={main.raiting}>
                  <img src={Star} alt="" />
                  <p className={main.raiting_txt}>5.0</p>
                </div>
              </div>
              <div className={main.distribute}>
                <button className={main.distribute_btn3} href="">
                  Hard
                </button>
              </div>
              <div className={main.card_button}>
                <button className={main.btn}>
                  <img className={main.btn_img} src={Plan} alt="img" />
                  Add to my trip plan
                </button>
              </div>
            </div>

            <div className={main.card}>
              <div className={main.img_like}>
                <img className={main.card_img} src={Lenin} alt="" />
                <img className={main.card_like} src={Like} alt="" />
              </div>
              <h4 className={main.card_title}>Lenin</h4>
              <div className={main.pin}>
                <div className={main.location}>
                  <a className={main.locatioon}>
                    <img src={Location} alt="" /> <p>Issyk-Kul Region</p>
                  </a>
                </div>
                <div className={main.raiting}>
                  <img src={Star} alt="" />
                  <p className={main.raiting_txt}>4.3</p>
                </div>
              </div>
              <div className={main.distribute}>
                <button className={main.distribute_btn3} href="">
                  Hard
                </button>
              </div>
              <div className={main.card_button}>
                <button className={main.btn}>
                  <img className={main.btn_img} src={Plan} alt="img" />
                  Add to my trip plan
                </button>
              </div>
            </div>

            <div className={main.card}>
              <div className={main.img_like}>
                <img className={main.card_img} src={Comsomolec} alt="" />
                <img className={main.card_like} src={Like} alt="" />
              </div>
              <h4 className={main.card_title}>Peak “Comsomolec”</h4>
              <div className={main.pin}>
                <div className={main.location}>
                  <a className={main.locatioon}>
                    <img src={Location} alt="" /> <p>Chuy Region</p>
                  </a>
                </div>
                <div className={main.raiting}>
                  <img src={Star} alt="" />
                  <p className={main.raiting_txt}>4.5</p>
                </div>
              </div>
              <div className={main.distribute}>
                <button className={main.distribute_btn3} href="">
                  Hard
                </button>
              </div>
              <div className={main.card_button}>
                <button className={main.btn}>
                  <img className={main.btn_img} src={Plan} alt="img" />
                  Add to my trip plan
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default HomePage;

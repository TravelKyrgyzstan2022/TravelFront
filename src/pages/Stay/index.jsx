import React, { useEffect } from "react";
import stay from "./index.module.css";
import Rating from "@mui/material/Rating";
import Location from "../../img/location.svg";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Plan from "../../img/plan_light.svg";
import STAY from "../../img/stay_page.png";
import { useDispatch, useSelector } from "react-redux";
import { getStay } from "../../api/place";

const Stay = () => {


  const dispatch = useDispatch();
  const stayPlace = useSelector((state) => state.stayPlace.data);
  console.log(stayPlace)
  useEffect(() => {
    dispatch(getStay());
  },[]);


  return (
    <>
      <div>
        <div className={stay.header}>
          <img src={STAY} alt="" />
          <h2 className={stay.title}>
            Kyrgyz People Were Always Famous for Their Hospitality
          </h2>
          <div className={stay.cards}>

            {stayPlace.map((place) => (
            <div className={stay.card}>
              <div className={stay.full_card}>
                <div className={stay.card_left}>
                  <img className={stay.img_card} src={place.image_urls} alt="" />
                </div>
                <div className={stay.card_right}>
                  <div className={stay.title_and__rating}>
                    <h4 className={stay.card_title}>
                      {place.name}
                    </h4>
                    <Rating
                      className={stay.rating}
                      name="customized-10"
                      max={5}
                    />
                  </div>
                  <a className={stay.locatioon}>
                    <img src={Location} alt="" /> <p>{place.region}</p>
                  </a>

                  <div className={stay.card_txt}>
                    <p>
                      {place.description}
                    </p>
                  </div>
                  <div className={stay.tags_and__btn}>
                    <button className={stay.arrow_next}>
                      <ArrowForwardIcon />
                    </button>
                  </div>
                  <div className={stay.card_button}>
                    <button className={stay.btn}>
                      <img className={stay.btn_img} src={Plan} alt="img" />
                      Add to my trip plan
                    </button>
                  </div>
                </div>
              </div>
            </div>
            ))}

          </div>
        </div>
      </div>
    </>
  );
};

export default Stay;

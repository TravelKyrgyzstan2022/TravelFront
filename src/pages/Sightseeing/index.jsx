import React from "react";
import ss from "./index.module.css";
import SulaimanToo from "../../img/sulaiman-too.png";
import Location from "../../img/location.svg";
import Plan from "../../img/plan_light.svg";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Rating from "@mui/material/Rating";
import BURANA from "../../img/Buranaa.png";
import Tashrabat from "../../img/tash-rabat.png";
import SIGHT from "../../img/sight_page.png";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux/es/exports";
import { useEffect } from "react";
import { getSights } from "../../api/place";

const Sightseeing = () => {
  const sights = useSelector((state) => state.sights.data);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getSights());
  }, []);

  return (
    <>
      <div>
        <div className={ss.header}>
          <img src={SIGHT} alt="" />
          <h2 className={ss.title}>
            Are You Ready to See the Most Incredible Sights You Have Ever Seen ?
          </h2>
          <div className={ss.cards}>
            {sights.map((place) => (
              <div id={place.id} className={ss.card}>
                <div className={ss.full_card}>
                  <div className={ss.card_left}>
                    <img className={ss.img_card} src={place.image_urls} alt="" />
                  </div>
                  <div className={ss.card_right}>
                    <div className={ss.title_and__rating}>
                      <h4 className={ss.card_title}>{place.name}</h4>
                      <Rating
                        className={ss.rating}
                        name="customized-10"
                        max={5}
                      />
                    </div>
                    <a className={ss.locatioon}>
                      <img src={Location} alt="" /> <p>{place.region}</p>
                    </a>

                    <div className={ss.card_txt}>
                      <p>{place.description}</p>
                    </div>
                    <div className={ss.tags_and__btn}>
                      <div className={ss.card_tags}>
                        <button className={ss.card_tag} href="">
                          #mountains
                        </button>
                        <button className={ss.card_tag2} href="">
                          #ancientsights
                        </button>
                      </div>
                      <NavLink to="/details_sulaiman__too">
                        <button
                          onClick={(e) => console.log(place.id)}
                          className={ss.arrow_next}
                        >
                          <ArrowForwardIcon />
                        </button>
                      </NavLink>
                    </div>
                    <div className={ss.card_button}>
                      <button className={ss.btn}>
                        <img className={ss.btn_img} src={Plan} alt="img" />
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

export default Sightseeing;

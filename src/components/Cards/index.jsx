import React from "react";
import Location from "../../img/location.svg";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { Rating } from "@mui/material";
import cc from "./index.module.css";
import { Link, NavLink } from "react-router-dom";
import Plan from "../../img/plan_light.svg";

const Card = ({ place }) => {
  return (
    <div className="container">
      <div>
        <div id={place.id} className={cc.card}>
          <div className={cc.full_card}>
            <div className={cc.card_left}>
              <img className={cc.img_card} src={place.image_urls} alt="" />
            </div>
            <div className={cc.card_right}>
              <div className={cc.title_and__rating}>
                <h4 className={cc.card_title}>{place.name}</h4>
                <Rating className={cc.rating} name="customized-10" max={5} />
              </div>
              <a className={cc.locatioon}>
                <img src={Location} alt="" /> <p>{place.region}</p>
              </a>
              <div className={cc.card_txt}>
                <p>{place.description}</p>
              </div>
              <div className={cc.tags_and__btn}>
                <div className={cc.card_tags}></div>
                <NavLink to={`/details/${place.id}`}>
                  <button onClick={(e) => place.id} className={cc.arrow_next}>
                    <ArrowForwardIcon />
                  </button>
                </NavLink>
              </div>
              <div className={cc.card_button}>
                <Link to={`/planner/${place.id}`}>
                  <button className={cc.btn}>
                    <img className={cc.btn_img} src={Plan} alt="img" />
                    Add to my trip plan
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;

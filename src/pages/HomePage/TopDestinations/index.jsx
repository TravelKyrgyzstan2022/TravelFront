import React, { useEffect } from "react";
import "./topdes.css";
import Like from "../../../img/like.svg";
import LeftArrow from "../../../img/left-arrow.svg";
import RightArrow from "../../../img/right-arrow.svg";
import Location from "../../../img/location.svg";
import Star from "../../../img/star.svg";
import Button from "../../../components/Button";
import Slider from "react-slick";
import { Link, NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getPlacesTop } from "../../../api/place";

const TopDestinations = ({ place }) => {
  const SlickArrowLeft = ({ currentSlide, slideCount, ...props }) => (
    <img src={LeftArrow} className="left-arrow" alt="prevArrow" {...props} />
  );

  const SlickArrowRight = ({ currentSlide, slideCount, ...props }) => (
    <img className="right-arrow" src={RightArrow} alt="nextArrow" {...props} />
  );

  const settings = {
    className: "center",
    infinite: true,
    dots: false,
    slidesToShow: 3,
    swipeToSlide: true,
    prevArrow: <SlickArrowLeft />,
    nextArrow: <SlickArrowRight />,
    initialSlide: 0,
  };

  const dispatch = useDispatch();
  const top = useSelector((state) => state.place.data);

  console.log("999", top)

  useEffect(() => {
    dispatch(getPlacesTop());
  }, []);

  return (
    <div className="container">
      <div>
        <Slider {...settings} className="slider">
          {top.map((places) => (
            <NavLink to={`/details/${places.id}`}>
            <div className="card">
              <div className="img_like">
                <img className="card_img" src={places.image_urls} alt="" />
                <img className="card_like" src={Like} alt="" />
              </div>
              <div className="title_and__rating">
                <h4 className="card_title">{places.name}</h4>
                <div className="raiting">
                  <img src={Star} alt="" />
                  <p className="raiting_txt">4.5</p>
                </div>
              </div>
              <div className="pin">
                <div className="location">
                  <div className="locatioon">
                    <img src={Location} alt="" /> <p>{places.region}</p>
                  </div>
                </div>
              </div>
              <div className="card_button">
                <Link to={`/planner/${places.id}`}>
                  <Button />
                </Link>
              </div>
            </div>
            </NavLink>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default TopDestinations;

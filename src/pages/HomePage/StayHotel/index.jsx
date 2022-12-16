import React, { useEffect } from 'react';
import './index.css';
import Location from "../../../img/location.svg";
import Star from "../../../img/star.svg";
import Button from '../../../components/Button';
import Like from "../../../img/like.svg";
import { useDispatch, useSelector } from 'react-redux';
import { getStay } from '../../../api/place';
import LeftArrow from '../../../img/left-arrow.svg';
import RightArrow from '../../../img/right-arrow.svg';
import Slideer  from "react-slick";
import { NavLink } from 'react-router-dom';

const StayHotel = () => {

    const dispatch = useDispatch();
    const stayPlace = useSelector((state) => state.stayPlace.data);
    console.log(stayPlace)
    useEffect(() => {
    dispatch(getStay());
    },[]);

    const  SlickArrowLeft = ({ currentSlide, slideCount, ...props }) => (
        <img  src={LeftArrow} className="left-arrow" alt="prevArrow" {...props} />
        );
        
    const SlickArrowRight = ({ currentSlide, slideCount, ...props }) => (
            <img className='right-arrow' src={RightArrow} alt="nextArrow" {...props} />
    );


    const settings = {
        // className: "center",
        infinite: true,
        dots: false,
        slidesToShow: 3,
        swipeToSlide: true,
        prevArrow: <SlickArrowLeft />,
        nextArrow: <SlickArrowRight />,
        initialSlide: 0,
    };

    return (
                <div className="stay">
                <h3 className="stay_title">Stay</h3>
<div>
            <Slideer {...settings}>
            {stayPlace.map((place) => (
            <NavLink to={`/details/${place.id}`}>
                <div className="card">
                <div className="img_like">
                    <img className="card_img" src={place.image_urls} alt="" />
                    <img className="card_like" src={Like} alt="" />
                </div>
                <div className="title_and__rating">
                <h4 className="card_title">{place.name}</h4>
                    <div className="raiting">
                    <img src={Star} alt="" />
                    <p className="raiting_txt">4.5</p>
                    </div>
                    </div>
                <div className="pin">
                    <div className="location">
                    <a className="locatioon">
                        <img src={Location} alt="" /> <p>{place.region}</p>
                    </a>
                    </div>
                </div>
                <div className="card_button">
                        <Button/>
                </div>
                </div>
            </NavLink>
            ))}
            </Slideer>
            </div>
            </div>
    );
}

export default StayHotel;

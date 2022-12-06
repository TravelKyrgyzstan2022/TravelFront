import React from 'react';
import st from './index.module.css';
import Location from "../../../img/location.svg";
import Star from "../../../img/star.svg";
import Button from '../../../components/Button'
import Slider from "react-slick";
import Place_small from "../../../img/place_small.png";
import Compass from "../../../img/compass.png";
import Inter from "../../../img/inter.png";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Like from "../../../img/like.svg";

const StayHotel = () => {
    return (
        <>
                <div className={st.stay}>
            <div className={st.slider}>
                <h3 className={st.stay_title}>Stay</h3>
                <div className={st.slider_buttons}>
                    <ArrowBackIcon className={st.arrow_back} />
                    <ArrowForwardIcon className={st.arrow_next} />
                </div>
            </div>
            <div className={st.cards}>
                <div className={st.card}>
                <div className={st.img_like}>
                    <img className={st.card_img} src={Place_small} alt="" />
                    <img className={st.card_like} src={Like} alt="" />
                </div>
                <h4 className={st.card_title}>Hotel “Greenwich”</h4>
                <div className={st.pin}>
                    <div className={st.location}>
                    <a className={st.locatioon}>
                        <img src={Location} alt="" /> <p>Bishkek</p>
                    </a>
                    </div>
                    <div className={st.raiting}>
                    <img src={Star} alt="" />
                    <p className={st.raiting_txt}>4.5</p>
                    </div>
                </div>
                <div className={st.card_button}>
                        <Button/>
                </div>
                </div>

                <div className={st.card}>
                <div className={st.img_like}>
                    <img className={st.card_img} src={Compass} alt="" />
                    <img className={st.card_like} src={Like} alt="" />
                </div>
                <h4 className={st.card_title}>Hotel “Compass”</h4>
                <div className={st.pin}>
                    <div className={st.location}>
                    <a className={st.locatioon}>
                        <img src={Location} alt="" /> <p>Bishkek</p>
                    </a>
                    </div>
                    <div className={st.raiting}>
                    <img src={Star} alt="" />
                    <p className={st.raiting_txt}>3.9</p>
                    </div>
                </div>
                <div className={st.card_button}>
                    <Button/>
                </div>
                </div>

                <div className={st.card}>
                <div className={st.img_like}>
                    <img className={st.card_img} src={Inter} alt="" />
                    <img className={st.card_like} src={Like} alt="" />
                </div>
                <h4 className={st.card_title}>Hotel “Inter”</h4>
                <div className={st.pin}>
                    <div className={st.location}>
                    <a className={st.locatioon}>
                        <img src={Location} alt="" /> <p>Bishkek</p>
                    </a>
                    </div>
                    <div className={st.raiting}>
                    <img src={Star} alt="" />
                    <p className={st.raiting_txt}>4.9</p>
                    </div>
                </div>
                <div className={st.card_button}>
                    <Button/>
                </div>
                </div>
            </div>
            </div>
        </>
    );
}

export default StayHotel;

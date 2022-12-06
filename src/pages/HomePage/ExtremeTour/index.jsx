import React from 'react';
import tour from './index.module.css';
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Like from "../../../img/like.svg";
import Location from "../../../img/location.svg";
import Star from "../../../img/star.svg";
import Button from '../../../components/Button';
import Han_Tengri from "../../../img/han-tengri.png";
import Lenin from "../../../img/lenin.png";
import Comsomolec from "../../../img/comsomolec.png";

const ExtremeTour  = () => {
    return (
            <div className={tour.extrime_tour}>
            <div className={tour.slider}>
            <h3 className={tour.title}>Extreme hardcore tours</h3>
            <div className={tour.slider_buttons}>
                <ArrowBackIcon className={tour.arrow_back} />
                <ArrowForwardIcon className={tour.arrow_next} />
            </div>
            </div>
            <div className={tour.cards}>
            <div className={tour.card}>
                <div className={tour.img_like}>
                <img className={tour.card_img} src={Han_Tengri} alt="" />
                <img className={tour.card_like} src={Like} alt="" />
                </div>
                <h4 className={tour.card_title}>Han-Tengri</h4>
                <div className={tour.pin}>
                <div className={tour.location}>
                    <a className={tour.locatioon}>
                    <img src={Location} alt="" /> <p>Naryn Region</p>
                    </a>
                </div>
                <div className={tour.raiting}>
                    <img src={Star} alt="" />
                    <p className={tour.raiting_txt}>5.0</p>
                </div>
                </div>
                <div className={tour.distribute}>
                <button className={tour.distribute_btn3} href="">
                    Hard
                </button>
                </div>
                <div className={tour.card_button}>
                    <Button/>
                </div>
            </div>

            <div className={tour.card}>
                <div className={tour.img_like}>
                <img className={tour.card_img} src={Lenin} alt="" />
                <img className={tour.card_like} src={Like} alt="" />
                </div>
                <h4 className={tour.card_title}>Lenin</h4>
                <div className={tour.pin}>
                <div className={tour.location}>
                    <a className={tour.locatioon}>
                    <img src={Location} alt="" /> <p>Issyk-Kul Region</p>
                    </a>
                </div>
                <div className={tour.raiting}>
                    <img src={Star} alt="" />
                    <p className={tour.raiting_txt}>4.3</p>
                </div>
                </div>
                <div className={tour.distribute}>
                <button className={tour.distribute_btn3} href="">
                    Hard
                </button>
                </div>
                <div className={tour.card_button}>
                    <Button/>
                </div>
            </div>

            <div className={tour.card}>
                <div className={tour.img_like}>
                <img className={tour.card_img} src={Comsomolec} alt="" />
                <img className={tour.card_like} src={Like} alt="" />
                </div>
                <h4 className={tour.card_title}>Peak “Comsomolec”</h4>
                <div className={tour.pin}>
                <div className={tour.location}>
                    <a className={tour.locatioon}>
                    <img src={Location} alt="" /> <p>Chuy Region</p>
                    </a>
                </div>
                <div className={tour.raiting}>
                    <img src={Star} alt="" />
                    <p className={tour.raiting_txt}>4.5</p>
                </div>
                </div>
                <div className={tour.distribute}>
                <button className={tour.distribute_btn3} href="">
                    Hard
                </button>
                </div>
                <div className={tour.card_button}>
                    <Button/>
                </div>
            </div>
            </div>
            </div>
    );
}

export default ExtremeTour ;

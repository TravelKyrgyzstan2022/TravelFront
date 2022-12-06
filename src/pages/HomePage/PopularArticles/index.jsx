import React from 'react';
import art from './index.module.css';
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Hiking from "../../../img/hiking.png";
import Horse from "../../../img/horse.png";
import Burana from "../../../img/burana.png";
import Transport from "../../../img/transport.png";

const PopularArticles = () => {
    return (
        <div>
                <div className={art.articles}>
                <div className={art.slider}>
                    <h3 className={art.articles_title}>Popular articles</h3>
                    <div className={art.slider_buttons}>
                        <ArrowBackIcon className={art.arrow_back} />
                        <ArrowForwardIcon className={art.arrow_next} />
                    </div>
                </div>
                <div className={art.acrticles_cards}>
                    <div className={art.art_card}>
                    <img className={art.articles_card1} src={Hiking} alt="" />
                    <div className={art.art_txt}>
                        <p className={art.articles_txt1}>
                        5 Reasons to Visit Kyrgyzstan
                        </p>
                    </div>
                    </div>
                    <div className={art.art_card}>
                    <img className={art.articles_card2} src={Horse} alt="" />
                    <div className={art.art_txt}>
                        <p className={art.articles_txt2}>
                        Fun Activities Everyone Should Try While in Kyrgyzstan
                        </p>
                    </div>
                    </div>
                    <div className={art.art_card}>
                    <img className={art.articles_card3} src={Burana} alt="" />
                    <div className={art.art_txt}>
                        <p className={art.articles_txt3}>
                        7 Interesting Facts About Kyrgyzstan
                        </p>
                    </div>
                    </div>
                    <div className={art.art_card}>
                    <img className={art.articles_card4} src={Transport} alt="" />
                    <div className={art.art_txt}>
                        <p className={art.articles_txt4}>
                        Transportation System in Kyrgyzstan - Handy Lifehacks
                        </p>
                    </div>
                    </div>
                </div>
                </div>
        </div>
    );
}

export default PopularArticles;

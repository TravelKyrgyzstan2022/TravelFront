import React from 'react';
import Han_Tengri from '../../img/han-tengri.png'
import AlaArcha from '../../img/ala-archa.png'
import Location from "../../img/location.svg"
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Star from "../../img/star.svg"
import Comsomolec from "../../img/comsomolec.png"
import card from "./index.module.css"
import Button from '../Button';
import Like from "../../img/like.svg"

const Card = () => {
    const [activeStep, setActiveStep] = React.useState(0);
    
    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };
    
    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    return (
        <div>
                                <div className={card.slider}>
                    <h3 className={card.title}>You May Also Like</h3>
                    <div className={card.slider_buttons}>
                        <ArrowBackIcon onClick={handleNext} className={card.arrow_back}/>
                        <ArrowForwardIcon onClick={handleBack}  className={card.arrow_next}/>
                    </div>
                    </div>
                    <div  className={card.cards}>
                    <div className={card.card}>
                    <div className={card.img_like}>
                    <img className={card.card_img} src={Han_Tengri} alt="" />
                    <img className={card.card_like} src={Like} alt="" />
                    </div>
                    <h4 className={card.card_title}>Han-Tengri</h4>
                    <div className={card.pin}>
                        <div className={card.location}>
                        <a className={card.locatioon}><img src={Location} alt="" /> <p>Naryn Region</p></a>
                        </div>
                        <div className={card.raiting}>
                            <img src={Star} alt="" />
                            <p className={card.raiting_txt}>5.0</p>
                        </div>
                        </div>
                        <div className={card.distribute}>
                        <button className={card.distribute_btn} href="">Hard</button>
                    </div>
                    <div className={card.card_button}>
                        <Button/>
                    </div>
                </div>

                


                <div className={card.card}>
                    <div className={card.img_like}>
                    <img className={card.card_img} src={Comsomolec} alt="" />
                    <img className={card.card_like} src={Like} alt="" />
                    </div>
                    <h4 className={card.card_title}>Peak “Comsomolec”</h4>
                    <div className={card.pin}>
                        <div className={card.location}>
                        <a className={card.locatioon}><img src={Location} alt="" /> <p>Chuy Region</p></a>
                        </div>
                        <div className={card.raiting}>
                            <img src={Star} alt="" />
                            <p className={card.raiting_txt}>4.5</p>
                        </div>
                        </div>
                        <div className={card.distribute}>
                            <button className={card.distribute_btn} href="">Hard</button>
                    </div>
                    <div className={card.card_button}>
                        <Button/>
                    </div>
                </div>


                <div className={card.card}>
                    <div className={card.img_like}>
                    <img className={card.card_img} src={AlaArcha} alt="" />
                    <img className={card.card_like} src={Like} alt="" />
                    </div>
                    <h4 className={card.card_title}>Ala-Archa national park</h4>
                    <div className={card.pin}>
                        <div className={card.location}>
                        <a className={card.locatioon}><img src={Location} alt="" /> <p>Chuy Region</p></a>
                        </div>
                        <div className={card.raiting}>
                            <img src={Star} alt="" />
                            <p className={card.raiting_txt}>4.3</p>
                        </div>
                        </div>
                        <div className={card.distribute}>
                        <button className={card.distribute_btn3} href="">Easy</button>
                    </div>
                    <div className={card.card_button}>
                        <Button/>
                    </div>
                </div>
                </div>
        </div>
    );
}

export default Card;

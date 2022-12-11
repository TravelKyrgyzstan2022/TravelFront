import React from "react";
import eat from "./index.module.css";
import Location from "../../img/location.svg"
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Navat from "../../img/navat.png"
import Button from "../../components/Button"
import Supara from "../../img/suparaat.png"
import Sonunduk from "../../img/sonunduk.png"
import EAT from "../../img/eat_page.png"
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getEats } from "../../api/place";

const Eat = () => {

    const eats = useSelector((state) => state.eats.data)


    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getEats())
    },[])



return (
    <>
    <div>
    <div className={Eat.header}>
        <img src={EAT} alt="" />
        <h2 className={Eat.title}>National Cuisine</h2>
            <div className={eat.cards}>
                {eats.map((place) => 
        <div className={eat.card}>
            <div className={eat.full_card}>
                <div className={eat.card_left}>
                    <img className={eat.img_card} src={place.image_urls} alt="" />
                </div>
                <div className={eat.card_right}>
                    <div className={eat.title_and__rating}>
                    <h4 className={eat.card_title}>{place.name}</h4>
                    </div>
                <a className={eat.locatioon}><img src={Location} alt="" /> <p>{place.region}</p></a>
                <div className={eat.arrow_btn}>
            <button className={eat.arrow_next}><ArrowForwardIcon /></button>
                </div>
                <div className={eat.card_txt}>
                    <p>{place.description}
                    </p>
                </div>
                <div className={eat.card_button}>
                    <Button/>
            </div>
                </div>
            </div>
        </div>
        )}



            </div>
            </div>
            </div>
    </>
);
};

export default Eat;

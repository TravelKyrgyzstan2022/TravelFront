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
import Card from "../../components/Cards";

const Eat = () => {

    const eats = useSelector((state) => state.eats.data)


    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getEats())
        window.scrollTo(0, 0);
    },[])



return (
    <>
    <div>
    <div className={eat.header}>
        <img src={EAT} alt="" />
        <h2 className={eat.title}>National Cuisine</h2>
            <div className={eat.cards}>
            {eats.map((place) => (
            <Card place={place} />
            ))}
            </div>
            </div>
            </div>
    </>
);
};

export default Eat;

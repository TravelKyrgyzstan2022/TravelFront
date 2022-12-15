import React, { useEffect } from 'react';
import HIKING from "../../img/hiking-header.png";
import gorges from "../../img/gorges.svg";
import alpinism from "../../img/alpinism.svg";
import waterfall from "../../img/waterfall.svg";
import mountains from "../../img/mountains.svg";
import lakes from "../../img/lakes.svg";
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getHiking } from '../../api/place';
import TopDestinations from '../HomePage/TopDestinations';
import hike from "./index.module.css"

const Hiking = () => {

    const hiking = useSelector((state) => state.hiking.data)

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getHiking())
        window.scrollTo(0, 0)
    },  [])

    return (
        <div>
        <div className={hike.header}>
        <img src={HIKING} alt="" />
        <h4 className={hike.hiking_title}>#hiking</h4>
        <div className={hike.category}>
            <h5 className={hike.subtitle}>Other categories</h5>
            <div className={hike.list}>
                <div className={hike.icons}>
                    <NavLink to='/gorges'>
                <img src={gorges} alt="gorges img" />
                </NavLink>
                </div>
                <div className={hike.icons}>
                <NavLink to='/waterfall'>
                <img src={waterfall} alt="waterfalls img" />
                </NavLink>
                </div>
                <div className={hike.icons}>
                    <NavLink to='/mountains'>
                <img src={mountains} alt="mountains img" />
                </NavLink>
                </div>
                <div className={hike.icons}>
                <NavLink to='/lakes'>
                <img src={lakes} alt="lakes img" />
                </NavLink>
                </div>
                <div className={hike.icons}>
                <NavLink to='/alpinism'>
                <img src={alpinism} alt="alpinism img" />
                </NavLink>
                </div>
            </div>
            </div>

            <div className={hike.card_hiking}>
                    <h3 className={hike.card_titlee}>Choice of our travellers</h3>
                    <TopDestinations place={hiking}/>
                    </div>

                    {/* <div className={hike.section2}>
                    <h3 className={hike.card2_title}>New destinations</h3>
                    </div>
                    <div className={hike.cards2}>
                        <CardCategories/>
                    </div> */}
            </div>
            </div>
    );
}

export default Hiking;

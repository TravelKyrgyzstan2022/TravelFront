import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAlpinism } from '../../../api/place';
import tour from './index.module.css';
import TopDestinations from "../TopDestinations";

const ExtremeTour  = () => {
    const alpinism = useSelector((state) => state.alpinism.data)

    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getAlpinism())
    },  [])
    return (
            <div className={tour.extrime_tour}>
            <div className={tour.alpinism}>
            <h3 className={tour.title}>#alpinism</h3>
            <TopDestinations place={alpinism}/>
            </div>
            </div>
    );
}

export default ExtremeTour ;

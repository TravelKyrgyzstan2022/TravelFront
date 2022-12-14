import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { YMaps, Map, Placemark } from "@pbe/react-yandex-maps";
import './index.css'


const MapYandex = ({latitude, longitude}) => {
    
    const getPointOptions = () => {
        return {
            iconColor: '#ff0000' // Цвет маркера, можно менять!
        };
    };
    
    const mapState = {
        center: [latitude, longitude ], // Здесь можно поменять координаты, но эти же координаты 
        //надо вставить в 29стоку
        zoom: 18.2, // Отображение маркера 
        behaviors: ["default", "scrollZoom"]// Убирает
        // увеличение/уменьшение при скролле и.тд
    
    };
    
    return (
        <YMaps>
            <Map
                state={mapState}
                width="100%"
                height="500px">
                <Placemark
                    options={getPointOptions()}
                    geometry={[latitude,longitude]} //Кординаты 
                />
            </Map>
        </YMaps >

    )
}


export default MapYandex;
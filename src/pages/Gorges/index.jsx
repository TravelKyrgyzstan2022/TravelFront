import React, { useEffect } from 'react';
import './index.css'
import GORGES from "../../img/gorges.png"
import hiking from "../../img/hiking.svg";
import alpinism from "../../img/alpinism.svg";
import waterfall from "../../img/waterfall.svg";
import mountains from "../../img/mountains.svg";
import lakes from "../../img/lakes.svg";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import CardCategories from '../../components/Cardotegories';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getGorges } from '../../api/place';
import ButtonCategories from '../../components/ButtonCategories/Button';
import Star from "../../img/star.svg";
import Like from "../../img/like.svg";
import Location from "../../img/location.svg"
import Slider from "react-slick";
import LeftArrow from '../../img/left-arrow.svg';
import RightArrow from '../../img/right-arrow.svg';
import TopDestinations from '../HomePage/TopDestinations';
import homestyle from '../HomePage/HomePage.module.css'

const Gorges = () => {
    const [activeStep, setActiveStep] = React.useState(0);
    
    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };
    
    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const gorges = useSelector((state) => state.gorges.data)

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getGorges())
    },  [])


    // const  SlickArrowLeft = ({ currentSlide, slideCount, ...props }) => (
    //     <img  src={LeftArrow} className="left-arrow" alt="prevArrow" {...props} />
    //     );
        
    // const SlickArrowRight = ({ currentSlide, slideCount, ...props }) => (
    //         <img className='right-arrow' src={RightArrow} alt="nextArrow" {...props} />
    // );


    // const settings = {
    //     className: "center",
    //     infinite: true,
    //     dots: false,
    //     slidesToShow: 3,
    //     swipeToSlide: true,
    //     prevArrow: <SlickArrowLeft />,
    //     nextArrow: <SlickArrowRight />,
    //     initialSlide: 0,
    // };


    return (
        // <div className={homestyle.container}>
        <div>
            <TopDestinations place={gorges}/>
        </div>
        // </div>
        // <div>
        // <div className="header">
        // <img src={GORGES} alt="" />
        // <h4 className="title">#gorges</h4>
        // <div className="cotegory">
        //     <h5 className="subtitle">Other categories</h5>
        //     <div className="list">
        //         <div className="icons">
        //             <NavLink to='/hiking'>
        //         <img src={hiking} alt="hiking img" />
        //         </NavLink>
        //         </div>
        //         <div className="icons">
        //             <NavLink to='/waterfall'>
        //         <img src={waterfall} alt="waterfalls img" />
        //         </NavLink>
        //         </div>
        //         <div className="icons">
        //         <NavLink to='/mountains'>
        //         <img src={mountains} alt="mountains img" />
        //         </NavLink>
        //         </div>
        //         <div className="icons">
        //         <NavLink to='/lakes'>
        //         <img src={lakes} alt="lakes img" />
        //         </NavLink>
        //         </div>
        //         <div className="icons">
        //         <NavLink to='/alpinism'>
        //         <img src={alpinism} alt="alpinism img" />
        //         </NavLink>
        //         </div>
        //     </div>
        //     </div>
        //     <div className="slideer">
        //             <h3 className="card_title">Choice of our travellers</h3>
        //             <div className="slider_buttons">
        //                 <ArrowBackIcon onClick={handleNext} className="arrow_back"/>
        //                 <ArrowForwardIcon onClick={handleBack}  className="arrow_next"/>
        //             </div>
        //             </div>
        //             <div className="cards1">
                        // <div>
                        /* <Slider {...settings} className="slidergorges"> */
                        /* {gorges.map((place) => (
                            <div className="card">
                    <div className="padding">
                    <div className="img_like">
                    <img className="card_img" src={place.image_urls} alt="" />
                    <img className="card_like" src={Like} alt="" />
                    </div>
                    <h4 className="card_subtitle">{place.name}</h4>
                    <div className="pin">
                        <div className="location">
                        <p className="locatioon"><img src={Location} alt="" /> <p>{place.region}</p></p>
                        </div>
                        <div className="raiting">
                            <img src={Star} alt="" />
                            <p className="raiting_txt">4.5</p>
                        </div>
                        </div>
                    <div className="card_tags">
                            <button className="card_tag" href="">#gorges</button> 
                            <button className="card_tag2" href="">#lakes</button> 
                    </div>
                    <div className="card_button">
                        <ButtonCategories/>
                    </div>
                    </div>
                </div>
                ))} */

                /* </Slider> */
/* <div className={homestyle.container}>

                <TopDestinations place={gorges}/>
</div> */

                // </div>
                //     </div>
/* 
                    <div className="section2">
                    <h3 className="card2_title">New destinations</h3>
                    <div className="section2_buttons">
                        <ArrowBackIcon onClick={handleNext} className="arrow_back"/>
                        <ArrowForwardIcon onClick={handleBack}  className="arrow_next"/>
                    </div>
                    </div>
                    <div className="cards2">
                        <CardCategories/>
                    </div> */
        // </div>

        // </div>
    );
}

export default Gorges;

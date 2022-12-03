import React from 'react';
import WATERFALL from "../../img/hiking-header.png";
import gorges from "../../img/gorges.svg";
import alpinism from "../../img/alpinism.svg";
import hiking from "../../img/hiking.svg";
import mountains from "../../img/mountains.svg";
import lakes from "../../img/lakes.svg";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import CardCategories from '../../components/Cardotegories';
import { NavLink } from 'react-router-dom';
import waterfall from './index.module.css'

const Waterfall = () => {
    const [activeStep, setActiveStep] = React.useState(0);
    
    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };
    
    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };
    return (
        <div>
        <div className={waterfall.header}>
        <img src={WATERFALL} alt="" />
        <h4 className={waterfall.title}>#waterfalls</h4>
        <div className={waterfall.cotegory}>
            <h5 className={waterfall.subtitle}>Other categories</h5>
            <div className={waterfall.list}>
                <div className={waterfall.icons}>
                    <NavLink to='/gorges'>
                <img src={gorges} alt="gorges img" />
                </NavLink>
                </div>
                <div className={waterfall.icons}>
                <NavLink to='/hiking'>
                <img src={hiking} alt="hiking img" />
                </NavLink>
                </div>
                <div className={waterfall.icons}>
                <NavLink to='/mountains'>
                <img src={mountains} alt="mountains img" />
                </NavLink>
                </div>
                <div className={waterfall.icons}>
                <NavLink to='/lakes'>
                <img src={lakes} alt="lakes img" />
                </NavLink>
                </div>
                <div className={waterfall.icons}>
                    <NavLink to='/alpinism'>
                <img src={alpinism} alt="alpinism img" />
                </NavLink>
                </div>
            </div>
            </div>

            <div className={waterfall.slider}>
                    <h3 className={waterfall.card_title}>Choice of our travellers</h3>
                    <div className={waterfall.slider_buttons}>
                        <ArrowBackIcon onClick={handleNext} className={waterfall.arrow_back}/>
                        <ArrowForwardIcon onClick={handleBack}  className={waterfall.arrow_next}/>
                    </div>
                    </div>
                    <div className={waterfall.cards1}>
                        <CardCategories/>
                    </div>
            </div>
            </div>
    );
}

export default Waterfall;

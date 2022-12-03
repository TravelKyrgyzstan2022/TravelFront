import React from 'react';
import LAKES from "../../img/lakes-header.png";
import gorges from "../../img/gorges.svg";
import alpinism from "../../img/alpinism.svg";
import hiking from "../../img/hiking.svg";
import waterfall from "../../img/waterfall.svg";
import mountains from "../../img/mountains.svg";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import CardCategories from '../../components/Cardotegories';
import { NavLink } from 'react-router-dom';
import lakes from './index.module.css'

const Lakes = () => {
    const [activeStep, setActiveStep] = React.useState(0);
    
    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };
    
    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };
    return (
        <div>
        <div className={lakes.header}>
        <img src={LAKES} alt="" />
        <h4 className={lakes.title}>#lakes</h4>
        <div className={lakes.cotegory}>
            <h5 className={lakes.subtitle}>Other categories</h5>
            <div className={lakes.list}>
                <div className={lakes.icons}>
                    <NavLink to='/gorges'>
                <img src={gorges} alt="gorges img" />
                </NavLink>
                </div>
                <div className={lakes.icons}>
                <NavLink to='/hiking'>
                <img src={hiking} alt="hiking img" />
                </NavLink>
                </div>
                <div className={lakes.icons}>
                <NavLink to='/waterfall'>
                <img src={waterfall} alt="waterfalls img" />
                </NavLink>
                </div>
                <div className={lakes.icons}>
                <NavLink to='/mountains'>
                <img src={mountains} alt="mountains img" />
                </NavLink>
                </div>
                <div className={lakes.icons}>
                <NavLink to='/alpinism'>
                <img src={alpinism} alt="alpinism img" />
                </NavLink>
                </div>
            </div>
            </div>

            <div className={lakes.slider}>
                    <h3 className={lakes.card_title}>Choice of our travellers</h3>
                    <div className={lakes.slider_buttons}>
                        <ArrowBackIcon onClick={handleNext} className={lakes.arrow_back}/>
                        <ArrowForwardIcon onClick={handleBack}  className={lakes.arrow_next}/>
                    </div>
                    </div>
                    <div className={lakes.cards1}>
                        <CardCategories/>
                    </div>
            </div>
            </div>
    );
}

export default Lakes;

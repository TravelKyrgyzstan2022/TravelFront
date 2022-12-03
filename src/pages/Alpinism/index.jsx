import React from 'react';
import ALPINISM from "../../img/alpinism-header.png";
import gorges from "../../img/gorges.svg";
import mountains from "../../img/mountains.svg";
import hiking from "../../img/hiking.svg";
import waterfall from "../../img/waterfall.svg";
import lakes from "../../img/lakes.svg";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import CardCategories from '../../components/Cardotegories';
import { NavLink } from 'react-router-dom';
import alpinism from './index.module.css'

const Alpinism = () => {
    const [activeStep, setActiveStep] = React.useState(0);
    
    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };
    
    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };
    return (
        <div>
        <div className={alpinism.header}>
        <img src={ALPINISM} alt="" />
        <h4 className={alpinism.title}>#alpinism</h4>
        <div className={alpinism.cotegory}>
            <h5 className={alpinism.subtitle}>Other categories</h5>
            <div className={alpinism.list}>
                <div className={alpinism.icons}>
                    <NavLink to='/gorges'>
                <img src={gorges} alt="gorges img" />
                </NavLink>
                </div>
                <div className={alpinism.icons}>
                <NavLink to='/hiking'>
                <img src={hiking} alt="hiking img" />
                </NavLink>
                </div>
                <div className={alpinism.icons}>
                <NavLink to='/waterfall'>
                <img src={waterfall} alt="waterfalls img" />
                </NavLink>
                </div>
                <div className={alpinism.icons}>
                <NavLink to='/lakes'>
                <img src={lakes} alt="lakes img" />
                </NavLink>
                </div>
                <div className={alpinism.icons}>
                <NavLink to='/mountains'>
                <img src={mountains} alt="mountains img" />
                </NavLink>
                </div>
            </div>
            </div>

            <div className={alpinism.slider}>
                    <h3 className={alpinism.card_title}>Choice of our travellers</h3>
                    <div className={alpinism.slider_buttons}>
                        <ArrowBackIcon onClick={handleNext} className={alpinism.arrow_back}/>
                        <ArrowForwardIcon onClick={handleBack}  className={alpinism.arrow_next}/>
                    </div>
                    </div>
                    <div className={alpinism.cards1}>
                        <CardCategories/>
                    </div>
            </div>
            </div>
    );
}

export default Alpinism;

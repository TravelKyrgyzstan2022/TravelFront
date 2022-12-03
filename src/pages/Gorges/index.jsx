import React from 'react';
import gorges from './index.module.css'
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

const Gorges = () => {
    const [activeStep, setActiveStep] = React.useState(0);
    
    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };
    
    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };
    return (
        <div>
        <div className={gorges.header}>
        <img src={GORGES} alt="" />
        <h4 className={gorges.title}>#gorges</h4>
        <div className={gorges.cotegory}>
            <h5 className={gorges.subtitle}>Other categories</h5>
            <div className={gorges.list}>
                <div className={gorges.icons}>
                    <NavLink to='/hiking'>
                <img src={hiking} alt="hiking img" />
                </NavLink>
                </div>
                <div className={gorges.icons}>
                    <NavLink to='/waterfall'>
                <img src={waterfall} alt="waterfalls img" />
                </NavLink>
                </div>
                <div className={gorges.icons}>
                <NavLink to='/mountains'>
                <img src={mountains} alt="mountains img" />
                </NavLink>
                </div>
                <div className={gorges.icons}>
                <NavLink to='/lakes'>
                <img src={lakes} alt="lakes img" />
                </NavLink>
                </div>
                <div className={gorges.icons}>
                <NavLink to='/alpinism'>
                <img src={alpinism} alt="alpinism img" />
                </NavLink>
                </div>
            </div>
            </div>
            <div className={gorges.slider}>
                    <h3 className={gorges.card_title}>Choice of our travellers</h3>
                    <div className={gorges.slider_buttons}>
                        <ArrowBackIcon onClick={handleNext} className={gorges.arrow_back}/>
                        <ArrowForwardIcon onClick={handleBack}  className={gorges.arrow_next}/>
                    </div>
                    </div>
                    <div className={gorges.cards1}>
                        <CardCategories/>
                    </div>

                    <div className={gorges.section2}>
                    <h3 className={gorges.card2_title}>New destinations</h3>
                    <div className={gorges.section2_buttons}>
                        <ArrowBackIcon onClick={handleNext} className={gorges.arrow_back}/>
                        <ArrowForwardIcon onClick={handleBack}  className={gorges.arrow_next}/>
                    </div>
                    </div>
                    <div className={gorges.cards2}>
                        <CardCategories/>
                    </div>
        </div>
        </div>
    );
}

export default Gorges;

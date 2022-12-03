import React from 'react';
import HIKING from "../../img/hiking-header.png";
import gorges from "../../img/gorges.svg";
import alpinism from "../../img/alpinism.svg";
import waterfall from "../../img/waterfall.svg";
import mountains from "../../img/mountains.svg";
import lakes from "../../img/lakes.svg";
import hiking from "./index.module.css";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import CardCategories from '../../components/Cardotegories';
import { NavLink } from 'react-router-dom';

const Hiking = () => {
    const [activeStep, setActiveStep] = React.useState(0);
    
    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };
    
    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };
    return (
        <div>
        <div className={hiking.header}>
        <img src={HIKING} alt="" />
        <h4 className={hiking.title}>#hiking</h4>
        <div className={hiking.cotegory}>
            <h5 className={hiking.subtitle}>Other categories</h5>
            <div className={hiking.list}>
                <div className={hiking.icons}>
                    <NavLink to='/gorges'>
                <img src={gorges} alt="gorges img" />
                </NavLink>
                </div>
                <div className={hiking.icons}>
                <NavLink to='/waterfall'>
                <img src={waterfall} alt="waterfalls img" />
                </NavLink>
                </div>
                <div className={hiking.icons}>
                    <NavLink to='/mountains'>
                <img src={mountains} alt="mountains img" />
                </NavLink>
                </div>
                <div className={hiking.icons}>
                <NavLink to='/lakes'>
                <img src={lakes} alt="lakes img" />
                </NavLink>
                </div>
                <div className={hiking.icons}>
                <NavLink to='/alpinism'>
                <img src={alpinism} alt="alpinism img" />
                </NavLink>
                </div>
            </div>
            </div>

            <div className={hiking.slider}>
                    <h3 className={hiking.card_title}>Choice of our travellers</h3>
                    <div className={hiking.slider_buttons}>
                        <ArrowBackIcon onClick={handleNext} className={hiking.arrow_back}/>
                        <ArrowForwardIcon onClick={handleBack}  className={hiking.arrow_next}/>
                    </div>
                    </div>
                    <div className={hiking.cards1}>
                        <CardCategories/>
                    </div>

                    <div className={hiking.section2}>
                    <h3 className={hiking.card2_title}>New destinations</h3>
                    <div className={hiking.section2_buttons}>
                        <ArrowBackIcon onClick={handleNext} className={hiking.arrow_back}/>
                        <ArrowForwardIcon onClick={handleBack}  className={hiking.arrow_next}/>
                    </div>
                    </div>
                    <div className={hiking.cards2}>
                        <CardCategories/>
                    </div>
            </div>
            </div>
    );
}

export default Hiking;

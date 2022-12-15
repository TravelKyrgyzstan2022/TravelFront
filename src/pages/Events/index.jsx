import React from "react";
import event from "./index.module.css";
import Location from "../../img/location.svg"
import Plan from "../../img/plan_light.svg"
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import NomadGames from "../../img/nomad-games.png"
import KurmanjanDatka from "../../img/kurmanjan-datka.png"
import Calendar from "../../img/calendar.svg" 
import AdamPerformance from "../../img/adam-performance.png"
import EVENT from "../../img/events_page.png"
import { useEffect } from "react";

const Events = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    },[])
return (
    <div>
        <div className={event.header}>
    <img src={EVENT} alt="" />
    <h2 className={event.title}>Go Explore National Events</h2>
    <div className={event.cards}>
                <div className={event.card}>
                    <div className={event.full_card}>
                        <div className={event.card_left}>
                            <img src={NomadGames} alt="" />
                        </div>
                        <div className={event.card_right}>
                            <div className={event.title_and__rating}>
                            <h4 className={event.card_title}>World Nomad Games</h4>
                            </div>
                        <a className={event.locatioon}><img src={Location} alt="" /> <p>Issyk-Kul Region</p></a>

                        
                        <div className={event.card_txt}>
                            <p>The World Nomad Games are aimed at developing the ethnosport and ethnoculture movement in the world, 
                                as this is the heritage of human civilization.
                            </p>
                        </div>
                        <div className={event.card_calendar_btn}>
                            <button className={event.card_calendar} href=""><img src={Calendar} alt="" /> 25 Nov, Friday 18:30</button> 
                    <button className={event.arrow_next}><ArrowForwardIcon /></button>
                    </div>
                        <div className={event.card_button}>
                        <button className={event.btn}><img className={event.btn_img} src={Plan} alt="img" />Add to my trip plan</button>
                    </div>
                        </div>
                    </div>
                </div>





                <div className={event.card}>
                    <div className={event.full_card}>
                        <div className={event.card_left}>
                            <img src={KurmanjanDatka} alt="" />
                        </div>
                        <div className={event.card_right}>
                            <div className={event.title_and__rating}>
                            <h4 className={event.card_title}>Kurmanjan Datka Performance</h4>
                            </div>
                        <a className={event.locatioon}><img src={Location} alt=""/> <p>Kyrgyz Drama Theatre named after T.Abdymomun</p></a>
                        <div className={event.card_txt}>
                            <p>While traveling in Kyrgyzstan, it is highly likely that
                            will see statues to Kurmanjan Datka is one of the rare women heroes in 
                            Central Asia and she is known by many names, such as “Alai Queen”.</p>
                            </div>
                        <div className={event.card_calendar_btn}>
                            <button className={event.card_calendar2} href=""><img src={Calendar} alt="" /> 25 Nov, Friday 18:30</button> 
                    <button className={event.arrow_next2}><ArrowForwardIcon /></button>
                    </div>
                        <div className={event.card_button}>
                        <button className={event.btn}><img className={event.btn_img} src={Plan} alt="img" />Add to my trip plan</button>
                    </div>
                        </div>
                    </div>
                </div>






                <div className={event.card}>
                    <div className={event.full_card}>
                        <div className={event.card_left}>
                            <img src={AdamPerformance} alt="" />
                        </div>
                        <div className={event.card_right}>
                            <div className={event.title_and__rating}>
                            <h4 className={event.card_title}>Adam Performance</h4>
                            </div>
                        <a className={event.locatioon}><img src={Location} alt=""/> <p>Kyrgyz Theatre named after A. Maldybaev</p></a>
                        <div className={event.card_txt}>
                            <p>The ballet performance "ADAM" will plunge you into an alternative world where the laws of nature fight the laws of man, the world of dreams and reality 
                            are intertwined and creatures are born from this: are they angels or demons? And the task of everyone here is to answer this question.</p>
                            </div>
                        <div className={event.card_calendar_btn}>
                            <button className={event.card_calendar3} href=""><img src={Calendar} alt="" /> 25 Nov, Friday 18:30</button> 
                    <button className={event.arrow_next3}><ArrowForwardIcon /></button>
                    </div>
                        <div className={event.card_button}>
                        <button className={event.btn}><img className={event.btn_img} src={Plan} alt="img" />Add to my trip plan</button>
                    </div>
                        </div>
                    </div>
                </div>




        </div>
    </div>
    </div>
);
};

export default Events;

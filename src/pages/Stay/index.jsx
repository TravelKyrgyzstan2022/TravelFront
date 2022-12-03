import React from "react";
import stay from "./index.module.css";
import Greenwich from "../../img/Greenwich.png"
import Rating from '@mui/material/Rating';
import Location from "../../img/location.svg"
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Plan from "../../img/plan_light.svg"
import Supara from "../../img/supara.png"
import PeopleHostel from "../../img/people-hostel.png"
import STAY from "../../img/stay_page.png"

const Stay = () => {
return (
    <>
    <div>
<div className={stay.header}>
    <img src={STAY} alt="" />
    <h2 className={stay.title}>Kyrgyz People Were Always Famous for Their
Hospitality</h2>
    <div className={stay.cards}>

                <div className={stay.card}>
                    <div className={stay.full_card}>
                        <div className={stay.card_left}>
                            <img src={Greenwich} alt="" />
                        </div>
                        <div className={stay.card_right}>
                            <div className={stay.title_and__rating}>
                            <h4 className={stay.card_title}>Hotel Greenwich</h4>
                            <Rating className={stay.rating} name="customized-10"  max={5} />
                            </div>
                        <a className={stay.locatioon}><img src={Location} alt="" /> <p>Bishkek</p></a>

                        
                        <div className={stay.card_txt}>
                            <p>Lörem ipsum lanektiga monovåfasm att nipyn eunas misiska bev fast ose supraktig: bena rer. 
                                Bens kontrapatologi div eunera, lådade utom dyde oren i oss apide epifydovis så derad. 
                                Sehösade tinar serad dianener i antiv i kesynisade innan nygol mellanförskap. 
                            </p>
                        </div>
                        <div className={stay.tags_and__btn}>
                    <button className={stay.arrow_next}><ArrowForwardIcon /></button>
                    </div>
                        <div className={stay.card_button}>
                        <button className={stay.btn}><img className={stay.btn_img} src={Plan} alt="img" />Add to my trip plan</button>
                    </div>
                        </div>
                    </div>
                </div>



                <div className={stay.card}>
                    <div className={stay.full_card}>
                        <div className={stay.card_left}>
                            <img src={Supara} alt="" />
                        </div>
                        <div className={stay.card_right}>
                            <div className={stay.title_and__rating}>
                            <h4 className={stay.card_title}>Supara Chunkurchak</h4>
                            <Rating className={stay.rating} name="customized-10"  max={5} />
                            </div>
                        <a className={stay.locatioon}><img src={Location} alt="" /> <p>Chuy Region</p></a>

                        
                        <div className={stay.card_txt}>
                            <p>Set in Alamedin, 26 km from Tash-Tyube, Supara Chunkurchak offers accommodation with a restaurant, 
                              free private parking, a fitness centre and a bar. 27 km from Vorontsovskoye and 30 km from Këk-Dzhar, 
                              the property features a garden and a terrace. The accommodation provides a 24-hour front desk, 
                              airport transfers, room service and free WiFi.
                            </p>
                        </div>
                        <div className={stay.tags_and__btn}>
                    <button className={stay.arrow_next2}><ArrowForwardIcon /></button>
                    </div>
                        <div className={stay.card_button}>
                        <button className={stay.btn}><img className={stay.btn_img} src={Plan} alt="img" />Add to my trip plan</button>
                    </div>
                        </div>
                    </div>
                </div>




                <div className={stay.card}>
                    <div className={stay.full_card}>
                        <div className={stay.card_left}>
                            <img src={PeopleHostel} alt="" />
                        </div>
                        <div className={stay.card_right}>
                            <div className={stay.title_and__rating}>
                            <h4 className={stay.card_title}>People Hostel</h4>
                            <Rating className={stay.rating} name="customized-10"  max={5} />
                            </div>
                        <a className={stay.locatioon}><img src={Location} alt="" /> <p>Bishkek</p></a>

                        
                        <div className={stay.card_txt}>
                            <p>Cheap but the same time very comfortable and warm hostel in the centre of Bishkek.
                            </p>
                        </div>
                        <div className={stay.tags_and__btn}>
                    <button className={stay.arrow_next3}><ArrowForwardIcon /></button>
                    </div>
                        <div className={stay.card_button}>
                        <button className={stay.btn}><img className={stay.btn_img} src={Plan} alt="img" />Add to my trip plan</button>
                    </div>
                        </div>
                    </div>
                </div>

      </div>
    </div>
    </div>
    </>
  );
};

export default Stay;

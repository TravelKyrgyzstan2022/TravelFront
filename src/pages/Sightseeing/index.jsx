import React from 'react';
import ss from "./index.module.css"
import SulaimanToo from "../../img/sulaiman-too.png"
import Location from "../../img/location.svg"
import Plan from "../../img/plan_light.svg"
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Rating from '@mui/material/Rating';
import BURANA from "../../img/Buranaa.png"
import Tashrabat from "../../img/tash-rabat.png"
import SIGHT from "../../img/sight_page.png"
import { NavLink } from 'react-router-dom';

const Sightseeing = () => {
    return (
    <>
    <div>
    <div className={ss.header}>
    <img src={SIGHT} alt="" />
    <h2 className={ss.title}>Are You Ready to See the Most Incredible Sights You Have Ever Seen ?</h2>
            <div className={ss.cards}>
                <div className={ss.card}>
                    <div className={ss.full_card}>
                        <div className={ss.card_left}>
                            <img src={SulaimanToo} alt="" />
                        </div>
                        <div className={ss.card_right}>
                            <div className={ss.title_and__rating}>
                            <h4 className={ss.card_title}>Sulaiman-Too</h4>
                            <Rating className={ss.rating} name="customized-10"  max={5} />
                            </div>
                        <a className={ss.locatioon}><img src={Location} alt="" /> <p>Osh</p></a>

                        
                        <div className={ss.card_txt}>
                            <p>Sulaiman-Too - a mountain, is a five-domed limestone remnant, elongated from west to east.
                            Its length is more than 1140 m, width - 560 m. </p>
                        </div>
                        <div className={ss.tags_and__btn}>
                        <div className={ss.card_tags}>
                            <button className={ss.card_tag} href="">#mountains</button> 
                            <button className={ss.card_tag2} href="">#ancientsights</button> 
                    </div>
                    <NavLink to='/details_sulaiman__too'>
                    <button className={ss.arrow_next}><ArrowForwardIcon /></button>
                    </NavLink>
                    </div>
                        <div className={ss.card_button}>
                        <button className={ss.btn}><img className={ss.btn_img} src={Plan} alt="img" />Add to my trip plan</button>
                    </div>
                        </div>
                    </div>
                </div>


                <div className={ss.card}>
                    <div className={ss.full_card}>
                        <div className={ss.card_left}>
                            <img src={BURANA} alt="" />
                        </div>
                        <div className={ss.card_right}>
                            <div className={ss.title_and__rating}>
                            <h4 className={ss.card_title}>Burana</h4>
                            <Rating className={ss.rating} name="customized-5"  max={5} />
                            </div>
                        <a className={ss.locatioon}><img src={Location} alt=""/> <p>Chuy Region</p></a>

                        
                        <div className={ss.card_txt}>
                            <p>Kyrgyzstan in the 10th century was part of the Karakhanid state. It was a very strong state, 
                                which contributed to the development of crafts, trade, construction and the emergence of new cities.</p>
                        </div>
                        <div className={ss.tags_and__btn}>
                        <div className={ss.card_tags}>
                            <button className={ss.card_tag3} href="">#ancientsights</button> 
                    </div>
                    <button className={ss.arrow_next}><ArrowForwardIcon /></button>
                    </div>
                        <div className={ss.card_button}>
                        <button className={ss.btn2}><img className={ss.btn_img} src={Plan} alt="img" />Add to my trip plan</button>
                    </div>
                        </div>
                    </div>
                </div>





                <div className={ss.card}>
                    <div className={ss.full_card}>
                        <div className={ss.card_left}>
                            <img src={Tashrabat} alt="" />
                        </div>
                        <div className={ss.card_right}>
                            <div className={ss.title_and__rating}>
                            <h4 className={ss.card_title}>Tash-Rabat</h4>
                            <Rating className={ss.rating} name="customized-10"  max={5} />
                            </div>
                        <a className={ss.locatioon}><img src={Location} alt="" /> <p>At-Bashy District</p></a>

                        
                        <div className={ss.card_txt}>
                            <p>Tash-Rabat is a unique architectural monument located in the rather picturesque Kara-Koyun gorge of the Naryn region,
                                which is 110 km south of the city of Naryn, at an altitude of 3200 m above sea level. </p>
                        </div>
                        <div className={ss.tags_and__btn}>
                        <div className={ss.card_tags3}>
                            <button className={ss.card_tag} href="">#mountains</button> 
                            <button className={ss.card_tag2} href="">#ancientsights</button> 
                    </div>
                    <button className={ss.arrow_next}><ArrowForwardIcon /></button>
                    </div>
                        <div className={ss.card_button}>
                        <button className={ss.btn3}><img className={ss.btn_img} src={Plan} alt="img" />Add to my trip plan</button>
                    </div>
                        </div>
                    </div>
                </div>





            </div>
        </div>
        </div>
        </>
    );
}

export default Sightseeing;

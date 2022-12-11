import React from 'react';
import SEMENOVKA from '../../img/semenovka.png'
import SUUSAMYR from '../../img/suu-samyr.png'
import Location from "../../img/location.svg"
import Star from "../../img/star.svg"
import SKAZKA from "../../img/skazka.png"
import ctc from "./index.module.css"
import Like from "../../img/like.svg"
import ButtonCategories from '../ButtonCategories/Button';

const CardCategories = () => {

    return (
        <div>
                    <div  className={ctc.cards}>
                    <div className={ctc.card}>
                    <div className={ctc.padding}>
                    <div className={ctc.img_like}>
                    <img className={ctc.card_img} src={SEMENOVKA} alt="" />
                    <img className={ctc.card_like} src={Like} alt="" />
                    </div>
                    <h4 className={ctc.card_title}>Semenovskoye Canyon</h4>
                    <div className={ctc.pin}>
                        <div className={ctc.location}>
                        <a className={ctc.locatioon}><img src={Location} alt="" /> <p>Issyk-Kul Region</p></a>
                        </div>
                        <div className={ctc.raiting}>
                            <img src={Star} alt="" />
                            <p className={ctc.raiting_txt}>4.5</p>
                        </div>
                        </div>
                    <div className={ctc.card_tags}>
                            <button className={ctc.card_tag} href="">#gorges</button> 
                            <button className={ctc.card_tag2} href="">#lakes</button> 
                    </div>
                    <div className={ctc.card_button}>
                        <ButtonCategories/>
                    </div>
                    </div>
                </div>

                


                <div className={ctc.card}>
                <div className={ctc.padding}>
                    <div className={ctc.img_like}>
                    <img className={ctc.card_img} src={SKAZKA} alt="" />
                    <img className={ctc.card_like} src={Like} alt="" />
                    </div>
                    <h4 className={ctc.card_title}>Skazka Canyon</h4>
                    <div className={ctc.pin}>
                        <div className={ctc.location}>
                        <a className={ctc.locatioon}><img src={Location} alt="" /> <p>Chuy Region</p></a>
                        </div>
                        <div className={ctc.raiting}>
                            <img src={Star} alt="" />
                            <p className={ctc.raiting_txt}>4.5</p>
                        </div>
                        </div>
                    <div className={ctc.card_tags}>
                            <button className={ctc.card_tag} href="">#gorges</button> 
                            </div>
                    <div className={ctc.card_button}>
                        <ButtonCategories/>
                    </div>
                    </div>
                </div>


                <div className={ctc.card}>
                    <div className={ctc.padding}>
                    <div className={ctc.img_like}>
                    <img className={ctc.card_img} src={SUUSAMYR} alt="" />
                    <img className={ctc.card_like} src={Like} alt="" />
                    </div>
                    <h4 className={ctc.card_title}>Suu-Samyr Valley</h4>
                    <div className={ctc.pin}>
                        <div className={ctc.location}>
                        <a className={ctc.locatioon}><img src={Location} alt="" /> <p>Chuy Region</p></a>
                        </div>
                        <div className={ctc.raiting}>
                            <img src={Star} alt="" />
                            <p className={ctc.raiting_txt}>4.3</p>
                        </div>
                        </div>
                    <div className={ctc.card_tags}>
                            <button className={ctc.card_tag} href="">#gorges</button> 
                            </div>
                    <div className={ctc.card_button}>
                        <ButtonCategories/>
                    </div>
                </div>
                </div>
                </div>
        </div>
    );
};


export default CardCategories;

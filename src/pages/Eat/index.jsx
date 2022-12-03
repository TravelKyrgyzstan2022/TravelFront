import React from "react";
import eat from "./index.module.css";
import Location from "../../img/location.svg"
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Navat from "../../img/navat.png"
import Button from "../../components/Button"
import Supara from "../../img/suparaat.png"
import Sonunduk from "../../img/sonunduk.png"
import EAT from "../../img/eat_page.png"

const Eat = () => {
  return (
    <>
    <div>
    <div className={Eat.header}>
      <img src={EAT} alt="" />
      <h2 className={Eat.title}>National Cuisine</h2>
          <div className={eat.cards}>
      <div className={eat.card}>
          <div className={eat.full_card}>
              <div className={eat.card_left}>
                  <img src={Navat} alt="" />
              </div>
              <div className={eat.card_right}>
                  <div className={eat.title_and__rating}>
                  <h4 className={eat.card_title}>Navat</h4>
                  </div>
              <a className={eat.locatioon}><img src={Location} alt="" /> <p>Bishkek</p></a>
              <div className={eat.arrow_btn}>
          <button className={eat.arrow_next}><ArrowForwardIcon /></button>
              </div>
              <div className={eat.card_txt}>
                  <p>More than 100 nationalities live in Kyrgyzstan. So 
      here in Navat restaurant you can try cuisine of Central Asia nations.
                  </p>
              </div>
              <div className={eat.card_button}>
                <Button/>
          </div>
              </div>
          </div>
      </div>





      <div className={eat.card}>
          <div className={eat.full_card}>
              <div className={eat.card_left}>
                  <img src={Supara} alt="" />
              </div>
              <div className={eat.card_right}>
                  <div className={eat.title_and__rating}>
                  <h4 className={eat.card_title}>Supara Ethno Complex Restaurant</h4>
                  </div>
              <a className={eat.locatioon}><img src={Location} alt="" /> <p>Chuy Region</p></a>
              <div className={eat.arrow_btn}>
          <button className={eat.arrow_next}><ArrowForwardIcon /></button>
              </div>
              <div className={eat.card_txt}>
                  <p>Ethno complex located on the edge of Bishkek city. 
Here you can get to know the culture of Kyrgyz
nation by enjoying our national food in special
national dwellings called “Urta”.
                  </p>
              </div>
              <div className={eat.card_button}>
                <Button/>
          </div>
              </div>
          </div>
      </div>



      <div className={eat.card}>
          <div className={eat.full_card}>
              <div className={eat.card_left}>
                  <img src={Sonunduk} alt="" />
              </div>
              <div className={eat.card_right}>
                  <div className={eat.title_and__rating}>
                  <h4 className={eat.card_title}>Fast-Casual Cafe “Kyrgyz
Sonunduk”</h4>
                  </div>
              <a className={eat.locatioon}><img src={Location} alt="" /> <p>At-Bashy District</p></a>
              <div className={eat.arrow_btn3}>
          <button className={eat.arrow_next}><ArrowForwardIcon /></button>
              </div>
              <div className={eat.card_txt3}>
                  <p>Kyrgyz Sonunduk is known by their ability
to mix novelty and spirits of nomads. 
                  </p>
              </div>
              <div className={eat.card_button3}>
                <Button/>
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

export default Eat;

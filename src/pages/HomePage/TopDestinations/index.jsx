import React from 'react';
import td from './index.module.css'
import Like from "../../../img/like.svg";
import AlaArcha from "../../../img/ala-archa.png";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Konorchek from "../../../img/konorchek.png";
import Comsomolec from "../../../img/comsomolec.png";
import Location from "../../../img/location.svg";
import Star from "../../../img/star.svg";
import Plan from "../../../img/plan_light.svg";
import Button from '../../../components/Button'
import Slider from "react-slick";

const TopDestinations = () => {
    // const dispatch = useDispatch();
    // const place = useSelector((state) => state.place.data);

    // console.log(place);
    // useEffect(() => {
    // dispatch(getPlace());
    // }, []);


    // const settings = {
    //     dots: true,
    //     infinite: true,
    //     speed: 500,
    //     slidesToShow: 4,
    //     slidesToScroll: 4,
    //     // initialSlide: 0,
    // };
    return (
            <div className={td.container}>
            <div className={td.slider}>
            <h3 className={td.title}>Top destinations</h3>
            <div className={td.slider_buttons}>
                    <ArrowBackIcon className={td.arrow_back} />
                    <ArrowForwardIcon className={td.arrow_next} />
                </div>
            </div>

            {/* <Slider {...settings}> */}
            <div className={td.cards}>
            <div className={td.card}>
                <div className={td.img_like}>
                <img className={td.card_img} src={AlaArcha} alt="" />
                <img className={td.card_like} src={Like} alt="" />
                </div>
                {/* {place.map((item, i) => (
                <h4>{item.name}</h4>
                ))} */}
                <h4 className={td.card_title}>Ala-Medin Gorge</h4>
                <div className={td.pin}>
                <div className={td.location}>
                    <a className={td.locatioon}>
                    <img src={Location} alt="" /> <p>Chuy Region</p>
                    </a>
                </div>
                <div className={td.raiting}>
                    <img src={Star} alt="" />
                    <p className={td.raiting_txt}>4.5</p>
                </div>
                </div>
                <div className={td.distribute}>
                <button className={td.distribute_btn} href="">
                    Easy
                </button>
                </div>
                <div className={td.card_button}>
                    <Button  />
                </div>
            </div>

            <div className={td.card}>
                <div className={td.img_like}>
                <img className={td.card_img} src={Konorchek} alt="" />
                <img className={td.card_like} src={Like} alt="" />
                </div>
                <h4 className={td.card_title}>Konorchek Canyons</h4>
                <div className={td.pin}>
                <div className={td.location}>
                    <a className={td.locatioon}>
                    <img src={Location} alt="" /> <p>Chuy Region</p>
                    </a>
                </div>
                <div className={td.raiting}>
                    <img src={Star} alt="" />
                    <p className={td.raiting_txt}>4.5</p>
                </div>
                </div>
                <div className={td.distribute}>
                <button className={td.distribute_btn2} href="">
                    Normal
                </button>
                </div>
                <div className={td.card_button}>
                    <Button/>
                </div>
            </div>

            <div className={td.card}>
                <div className={td.img_like}>
                <img className={td.card_img} src={Comsomolec} alt="" />
                <img className={td.card_like} src={Like} alt="" />
                </div>
                <h4 className={td.card_title}>Peak “Comsomolec”</h4>
                <div className={td.pin}>
                <div className={td.location}>
                    <a className={td.locatioon}>
                    <img src={Location} alt="" /> <p>Chuy Region</p>
                    </a>
                </div>
                <div className={td.raiting}>
                    <img src={Star} alt="" />
                    <p className={td.raiting_txt}>4.5</p>
                </div>
                </div>
                <div className={td.distribute}>
                <button className={td.distribute_btn3} href="">
                    Hard
                </button>
                </div>
                <div className={td.card_button}>
                    <Button/>
                </div>
            </div>
            </div>
            {/* </Slider> */}
            </div>
    );
}

export default TopDestinations;

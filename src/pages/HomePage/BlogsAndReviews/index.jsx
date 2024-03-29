import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getBlog } from '../../../api/blogs';
import br from './index.module.css';
import LeftArrow from '../../../img/left-arrow.svg'
import RightArrow from '../../../img/right-arrow.svg'; 
import Slider from 'react-slick';
import "./index.css"
import { useTranslation } from 'react-i18next';
import { NavLink } from 'react-router-dom';

const BlogsAndReviews = () => {

    const blog = useSelector((state) => state.blog.data)
    const dispatch = useDispatch()

    console.log("dt643gvc xb", blog)

    useEffect(() => {
        dispatch(getBlog())
    }, []);

    const { t, i18n } = useTranslation();


    const  SlickArrowLeft = ({ currentSlide, slideCount, ...props }) => (
        <img  src={LeftArrow} className="left-arrow" alt="prevArrow" {...props} />
        );
        
    const SlickArrowRight = ({ currentSlide, slideCount, ...props }) => (
            <img className='right-arrow' src={RightArrow} alt="nextArrow" {...props} />
    );


    const settings = {
        className: "center",
        infinite: true,
        dots: false,
        slidesToShow: 3,
        swipeToSlide: true,
        prevArrow: <SlickArrowLeft />,
        nextArrow: <SlickArrowRight />,
        initialSlide: 0,
    };

    return (
        <div className={br.container_blogs}>
            <h3 className={br.container_title}>{t("blogsourtravellers")}</h3>

            <div>
            <Slider {...settings} className="slider">
            {blog.map((blog) => (
            <NavLink to={`/details_blog/${blog.id}`}>
                <div className={br.card}>
                <div className={br.card_image}><img className={br.card_image} src={blog.image_urls} alt="img" /></div>
                <div className={br.card_title}>{blog.title}</div>
                <div className={br.card_user}>{blog.first_name}</div>
                </div>
                </NavLink>
            ))}
                        </Slider>
            </div>
        </div>
    );
}

export default BlogsAndReviews;

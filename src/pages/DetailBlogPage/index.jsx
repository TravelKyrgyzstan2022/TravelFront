import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import details from "./index.module.css";
import blur from "../../img/blur.png";
// import Footer from "../../components/Footer/Footer";
import { getBlogById } from "../../api/blogs";

const DetailBlogPage = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const { blogById } = useSelector((state) => state.blog);

        useEffect(() => {
            dispatch(getBlogById(id))

        }, []);


    return (
        <div>
        <div className={details.header}>
            <img
            className={details.header_img}
            src={blogById.image_urls}
            alt=""
            />
            <img className="blur" src={blur} alt="" />
            <h2 className={details.title}>{blogById.title}</h2>
            <div className={details.content_txt}>
            <div className={details.content}>
                <p className={details.txxt}>{blogById.body}</p>
            </div>
            </div>
        </div>
        {/* <Footer /> */}
        </div>
    );
    };

export default DetailBlogPage;

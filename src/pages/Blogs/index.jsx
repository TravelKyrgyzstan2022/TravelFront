
import React, { useEffect } from "react";
import bl from "./index.module.css";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Blog from "../../img/blog_page.png"
import { useDispatch, useSelector } from "react-redux";
import { getBlog } from "../../api/blogs";

const Blogs = () => {

    const blog = useSelector((state) => state.blog.data)

    console.log("ncjbdxcjdb ", blog)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getBlog())
    }, []);


    return (
        <div>
        <div className={bl.header}>
        <img src={Blog} alt="" />
        <h2 className={bl.title}>Get to Know with Experiences of Our 
    Travellers</h2>
<div>
        <div className={bl.cards}>
    {blog.map((blog) => (
        <div className={bl.card}>
            <div className={bl.full_card}>
                <div className={bl.card_left}>
                    <img className={bl.blog_image} src={blog.image_urls} alt="" />
                </div>
                <div className={bl.card_right}>
                    <div className={bl.title_and__rating}>
                    <h4 className={bl.card_title}>{blog.title}</h4>
                    </div>
                    <p className={bl.user}>By George Michael</p>
                <div className={bl.arrow_btn}>
            <button className={bl.arrow_next}><ArrowForwardIcon /></button>
                </div>
                <div className={bl.card_txt}>
                    <p>{blog.body}
                    </p>
                </div>
                </div>
        </div>
            </div>
        ))}
        </div>
        </div>
        </div>
        </div>
    );


};

export default Blogs;

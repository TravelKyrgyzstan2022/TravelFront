import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getBlog } from '../../../api/blogs';
import br from './index.module.css' 

const BlogsAndReviews = () => {

    const blog = useSelector((state) => state.blog.data)
    const dispatch = useDispatch()

    console.log("dt643gvc xb", blog)

    useEffect(() => {
        dispatch(getBlog())
    }, []);

    return (
        <div className={br.container}>
            <h3 className={br.container_title}>Blogs and reviews by our travellers</h3>

            <div>
            {blog.map((blog) => (
                <div className={br.card}>
                <div className={br.card_image}><img className={br.card_image} src={blog.image_urls} alt="img" /></div>
                <div className={br.card_title}>{blog.title}</div>
                <div className={br.card_user}>By George Michael</div>
                </div>
            ))}
            </div>
        </div>
    );
}

export default BlogsAndReviews;

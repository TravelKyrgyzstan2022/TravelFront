import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getArticleById } from '../../api/articles';
import details from "./index.module.css";
import blur from "../../img/blur.png"


const DetailArticlePage = () => {

    const { id } = useParams()
    
    const dispatch = useDispatch()

    const {articleById} = useSelector((state) => state.article);

    useEffect(() => {
        dispatch(getArticleById(id));
    }, []);

    return (
        <div>
            <div className={details.header}>
        <img className={details.header_img} src={articleById.image_urls} alt="" />
        <img className="blur" src={blur} alt="" />
        <h2 className={details.title}>
        {articleById.title} 
        </h2>
        <div className={details.content_txt}>
        <div className={details.content}>
            <p className={details.txxt}>{articleById.body}</p>
        </div>
        </div>
        </div>
        </div>
    );
}

export default DetailArticlePage;

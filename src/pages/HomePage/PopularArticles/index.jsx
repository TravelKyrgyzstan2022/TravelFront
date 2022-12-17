import React, { useEffect } from "react";
import art from "./index.module.css";
import { useDispatch, useSelector } from "react-redux";
import { getArticle } from "../../../api/articles";
import { NavLink } from "react-router-dom";

const PopularArticles = () => {
  const article = useSelector((state) => state.article.data);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getArticle());
    window.scrollTo(0, 0);
  }, []);


  
  return (
    <div>
      <div className={art.articles}>
        <div className={art.slider}>
          <h3 className={art.articles_title}>Interesting articles</h3>
        </div>
        <div className={art.acrticles_cards}>
          {article.map((article) => (
            <NavLink to={`/details_article/${article.id}`}>
              <div className={art.art_card}>
                <img
                  className={art.articles_card1}
                  src={article.image_urls}
                  alt=""
                />
                <div className={art.art_txt}>
                  <p className={art.articles_txt1}>{article.title}</p>
                </div>
              </div>
            </NavLink>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PopularArticles;

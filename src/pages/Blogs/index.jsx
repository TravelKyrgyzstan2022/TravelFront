import React from "react";
import blog from "./index.module.css";
import AlaToo from "../../img/ala_too.png";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import KolTor from "../../img/kol_tor.png";
import Alpine from "../../img/alpine.png";
import Blog from "../../img/blog_page.png";
import { useSelector } from "react-redux";

const Blogs = () => {
  const blogs = useSelector((state) => state.blogs);
  console.log(blogs);
  return (
    <>
      <div>
        <div className={blog.header}>
          <img src={Blog} alt="" />
          <h2 className={blog.title}>
            Get to Know with Experiences of Our Travellers
          </h2>
          <div className={blog.cards}>
            {}
            <div className={blog.card}>
              <div className={blog.full_card}>
                <div className={blog.card_left}>
                  <img src={AlaToo} alt="" />
                </div>
                <div className={blog.card_right}>
                  <div className={blog.title_and__rating}>
                    <h4 className={blog.card_title}>
                      How I Climbed to Ala-Too Mountains
                    </h4>
                  </div>
                  <p className={blog.user}>By George Michael</p>
                  <div className={blog.arrow_btn}>
                    <button className={blog.arrow_next}>
                      <ArrowForwardIcon />
                    </button>
                  </div>
                  <div className={blog.card_txt}>
                    <p>
                      So I came to Kyrgyzstan last December, firstly I didn’t
                      think that it good be good idea travelling for such a
                      cheap price. However, after I have chosen my first tour
                      the day I was amazed by inspiring beauty of these mighty
                      mountains.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className={blog.full_card}>
              <div className={blog.card_left}>
                <img src={Alpine} alt="" />
              </div>
              <div className={blog.card_right}>
                <div className={blog.title_and__rating}>
                  <h4 className={blog.card_title}>
                    The Alpine Lake on a 4500 metres
                  </h4>
                </div>
                <p className={blog.user}>By George Michael</p>
                <div className={blog.arrow_btn}>
                  <button className={blog.arrow_next}>
                    <ArrowForwardIcon />
                  </button>
                </div>
                <div className={blog.card_txt}>
                  <p>
                    Kel-Suu is a rare alpine lake located on the border of two
                    countries - Kyrgyzstan and China. Sometimes you can
                    literally touch the skies here.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Blogs;

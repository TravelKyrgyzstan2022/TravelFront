import React from "react";
import home from "./HomePage.module.css";
import image from "../../img/image.svg";
import image1 from "../../img/image1.svg";
import intro from "../../video/video.mp4";
import Content from "../../components/Cont/Content";
import { Link } from "react-router-dom";
const HomePage = () => {
  return (
    <>
      <video className={home.video} autoPlay loop muted>
        <source src={intro} type="video/mp4" />
      </video>
      <div className={home.container}>
        <div className={home.texts}>
          <p className={home.welcome}>
            Ready to Explore The Beauty of <br /> Wonderful Kyrgyzstan
          </p>
          <img className={home.img1} src={image} alt="" />
          <div className={home.content}>
            <div className={home.box}>
              Wonderful Issyk Kul Lake <br /> Watch the video
            </div>
            <img className={home.img2} src={image1} alt="" />
            <p className={home.underimg}>
              The largest lake in Kyrgyzstan, one of the 25 largest lakes in the
              world in terms <br /> of area and in sixth place in the list of
              deepest lakes ...{" "}
              <button
                className={home.btn}
                onClick={() =>
                  window.open("https://en.wikipedia.org/wiki/Issyk-Kul")
                }
              >
                Learn More
              </button>
              <Link to="/redux">
                <nav className={home.item}>Redux</nav>
              </Link>
            </p>
          </div>
        </div>
        <Content />
      </div>
    </>
  );
};

export default HomePage;

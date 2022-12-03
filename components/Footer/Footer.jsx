import React from "react";
import logo from "../../img/bnlogo.svg";
import footer from "./Footer.module.css";
import appstore from "../../img/appstore.svg";

const Footer = () => {
  return (
    <>
      <div className={footer.section}>
        <div className={footer.container}>
          <div className={footer.list1}>
            <img className={footer.logo} src={logo} alt="main logo" />
            <div>
              Benomad is now available on iOS.
              <br /> Click the link below to download
            </div>
            <img
              className={footer.appstore}
              src={appstore}
              alt="appstore logo"
            />
          </div>
          <div className={footer.list2}>
            <div className={footer.txt}>About us</div>
            <div className={footer.item1}>
              <div>Contact us</div>
              <div>Sign In</div>
              <div>Blogs</div>
            </div>
          </div>
          <div className={footer.list2}>
            <div className={footer.txt}>Explore</div>
            <div className={footer.item2}>
              <div>Sightseeing</div>
              <div>Stay</div>
              <div>Events</div>
              <div>Eat</div>
            </div>
          </div>
          <div className={footer.list2}>
            <div className={footer.txt}>Top categories</div>
            <div className={footer.item3}>
              <div>Forest</div>
              <div>Hiking</div>
              <div>Ancient sitght</div>
              <div>Waterfalls</div>
              <div>Mountains</div>
              <div>Lakes</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;

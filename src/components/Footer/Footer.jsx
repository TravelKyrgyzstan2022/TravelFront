import React from "react";
import logo from "../../img/bnlogo.svg";
import footer from "./Footer.module.css";
import appstore from "../../img/appstore.svg";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Footer = () => {

  const { t, i18n } = useTranslation();
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
              <Link to="/login">
                <div className={footer.it}>Sign In</div>
              </Link>
              <Link to="/blogs">
                <div className={footer.it}>Blogs</div>
              </Link>
            </div>
          </div>
          <div className={footer.list2}>
            <div className={footer.txt}>Explore</div>
            <div className={footer.item2}>
              <Link to="/sightseeing">
                <div className={footer.it}>{t("sightseeing")}</div>
              </Link>
              <Link to="/stay">
                <div className={footer.it}>{t("stay")}</div>
              </Link>
              <Link to="/events">
                <div className={footer.it}>{t("events")}</div>
              </Link>
              <Link to="/eat">
                <div className={footer.it}>{t("eat")}</div>
              </Link>
            </div>
          </div>
          <div className={footer.list2}>
            <div className={footer.txt}>Top categories</div>
            <div className={footer.item3}>
              <Link to="/gorges">
                <div className={footer.it}>Gorges</div>
              </Link>
              <Link to="/hiking">
                <div className={footer.it}>Hiking</div>
              </Link>
              <Link to="/alpinism">
                <div className={footer.it}>Alpinism</div>
              </Link>
              <Link to="/waterfall">
                <div className={footer.it}>Waterfalls</div>
              </Link>
              <Link to="/mountains">
                <div className={footer.it}>Mountains</div>
              </Link>
              <Link to="/lakes">
                <div className={footer.it}>Lakes</div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;

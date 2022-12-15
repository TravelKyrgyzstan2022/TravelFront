import React from "react";
import ss from "./index.module.css";
import SIGHT from "../../img/sight_page.png";
import { useDispatch, useSelector } from "react-redux/es/exports";
import { useEffect } from "react";
import { getSights } from "../../api/place";
import Card from "../../components/Cards";
import Footer from "../../components/Footer/Footer";

const Sightseeing = () => {
  const sights = useSelector((state) => state.sights.data);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getSights());
  }, []);

  return (
    <>
      <div>
        <div className={ss.header}>
          <img src={SIGHT} alt="" />
          <h2 className={ss.title}>
            Are You Ready to See the Most Incredible Sights You Have Ever Seen ?
          </h2>
          <div className={ss.cards}>
            {sights.map((place) => (
              <Card place={place} />
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Sightseeing;

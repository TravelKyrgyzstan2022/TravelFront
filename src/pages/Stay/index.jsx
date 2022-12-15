import React, { useEffect } from "react";
import stay from "./index.module.css";
import STAY from "../../img/stay_page.png";
import { useDispatch, useSelector } from "react-redux";
import { getStay } from "../../api/place";
import Card from "../../components/Cards";
import Footer from "../../components/Footer/Footer";

const Stay = () => {
  const dispatch = useDispatch();
  const stayPlace = useSelector((state) => state.stayPlace.data);
  console.log(stayPlace);
  useEffect(() => {
    dispatch(getStay());
  }, []);

  return (
    <>
      <div>
        <div className={stay.header}>
          <img src={STAY} alt="" />
          <h2 className={stay.title}>
            Kyrgyz People Were Always Famous for Their Hospitality
          </h2>
          <div className={stay.cards}>
            {stayPlace.map((place) => (
              <Card place={place} />
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Stay;

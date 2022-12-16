import React from "react";
import plan from "./UserProfile.module.css";
import backgrnd from "../../img/plannerBg..png";
import { useState } from "react";
import { API } from "../../utils/axiosConfig";
import { useNavigate, useParams } from "react-router-dom";

const UserProfile = () => {
  const [selectDate, setSelectDate] = useState("");
  const [note, setNote] = useState("");
  const navigate = useNavigate();

  const { id } = useParams();
  const handleSubmit = (e) => {
    e.preventDefault();
    const getPlanner = async () => {
      try {
        const res = await API.post("api/v1/user/plans", {
          date: selectDate,
          note: note,
          place_id: id,
        });
        return res;
      } catch (err) {
        console.log(err);
      }
    };

    getPlanner();
  };
  return (
    <>
      <div className={plan.container}>
        <img height src={backgrnd} alt="header img" className={plan.bg} />
        <form onSubmit={handleSubmit} className={plan.form}>
          <input
            className={plan.dateInp}
            type="date"
            onChange={(e) => setSelectDate(e.target.value)}
            id="dateInp"
            placeholder="Select date"
          />
          <textarea
            type="text"
            name=""
            id=""
            onChange={(e) => setNote(e.target.value)}
            className={plan.text}
            placeholder="Note"
          />
          <button className={plan.btn} type="submit">
            Add
          </button>
        </form>
      </div>
    </>
  );
};

export default UserProfile;

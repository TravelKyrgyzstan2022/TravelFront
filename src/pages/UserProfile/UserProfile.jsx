import React from "react";
import user from "./UserProfile.module.css";
import { useState } from "react";
import { useEffect } from "react";
import { API } from "../../utils/axiosConfig";

const UserProfile = () => {
  const [selectDate, setSelectDate] = useState("");
  const [note, setNote] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const getPlanner = async () => {
      try {
        const res = await API.post("api/v1/user/plans", {
          date: selectDate,
          note: note,
          place_id: 1,
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
      <h2 className={user.text}>User Profile</h2>

      <form onSubmit={handleSubmit}>
        <input
          className={user.dateInp}
          type="date"
          onChange={(e) => setSelectDate(e.target.value)}
        />
        <input
          type="text"
          name=""
          id=""
          onChange={(e) => setNote(e.target.value)}
        />
        <button type="submit">Add</button>
      </form>
    </>
  );
};

export default UserProfile;

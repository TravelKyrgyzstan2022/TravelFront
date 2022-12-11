import React from "react";
import user from "./UserProfile.module.css";
import AirDatepicker from "air-datepicker";
import "air-datepicker/air-datepicker.css";

const UserProfile = () => {
  new AirDatepicker("#el", {
    autoClose: false,
    range: true,
    multipleDatesSeparator: " - ",
  });

  return (
    <>
      <h2 className={user.text}>USer Profile</h2>
      <input className={user.dateInp} type="text" name="" id="el" />
    </>
  );
};

export default UserProfile;

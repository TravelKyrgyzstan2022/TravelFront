import React, { useState, useEffect } from "react";
import "./index.css";
import Background from "../../img/auth_background.png";
import VerificationInput from "react-verification-input";
import { useDispatch, useSelector } from "react-redux";
import { getActiveEmail, getVerifyCode } from "../../api/auth";
import { useNavigate } from "react-router-dom";

const Verification = () => {
  const [verifyInp, setVerifyInp] = useState("");
  let email = localStorage.getItem("userEmail");

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = () => {
    dispatch(
      getActiveEmail({ email: email, verification_code: verifyInp })
    ).then(() => navigate("/"));
  };

  const sendVerifyCode = () => {
    dispatch(getVerifyCode({ email: email }));
  };
  return (
    <div className="containeer">
      <img className="img" src={Background} alt="" />
      <div className="box">
        <p className="box_title">Verification</p>
        <p className="box_txt">Enter 6-digit code that we sent on</p>
        <span className="txt_bold">{email}</span>
        <div className="box_input">
          <VerificationInput
            onChange={setVerifyInp}
            inputField={{
              onChange: (e) => {
                setVerifyInp(e.nativeEvent.target.value);
              },
            }}
            length={6}
            validChars="0-9"
            removeDefaultStyles
            characters={{
              className: "characters",
            }}
            character={{
              className: "character",
              classNameInactive: "character--inactive",
              classNameSelected: "character--selected",
            }}
          />
        </div>
        <div className="btn">
          <button onClick={handleSubmit} className="box_btn">
            Submit
          </button>
        </div>

        <p onClick={sendVerifyCode} className="btn_link">
          Send new code
        </p>
      </div>
    </div>
  );
};

export default Verification;

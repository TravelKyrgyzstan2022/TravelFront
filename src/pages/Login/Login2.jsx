import React, { useState } from "react";
import log from "./Login2.module.css";
import { Link, useNavigate } from "react-router-dom";
import { getForgotPass } from "../../api/auth";
import loginBckgr from "../../img/loginBcg.png";
import { useDispatch } from "react-redux";

const Login2 = () => {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleInp = (e) => setEmail(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(getForgotPass(email));
    setEmail("");
    // navigate("/login");
  };

  return (
    <>
      <section className={log.section}>
        <img
          className={log.loginBckgr}
          src={loginBckgr}
          alt="login background img"
        />
        <div className={log.container}>
          <div className={log.box}>
            <h4 className={log.txt}>Forgot Password</h4>
            <div className={log.content}>
              Can't get in ? Enter your email below and we'll send you an email
              to get this sorted out.
            </div>
            <input
              onChange={handleInp}
              className={log.item}
              type="email"
              placeholder="Email"
            />
            <div className={log.cont}>
              <Link to="/login">
                <button className={log.btn}>Cancel</button>
              </Link>
              <button onClick={handleSubmit} className={log.btn}>
                Send reset email
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Login2;

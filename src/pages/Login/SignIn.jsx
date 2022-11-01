import React from "react";
import sign from "./SignIn.module.css";
import { Link } from "react-router-dom";
import success from "../../img/success.svg";

const SignIn = () => {
  return (
    <>
      <section>
        <div className={sign.container}>
          <h2 className={sign.logo}>be nomad</h2>
          <div className={sign.box}>
            <img className={sign.success} src={success} alt="" />
            <div className={sign.content}>Email sent ! Check your inbox.</div>
            <div className={sign.cont}>
              <Link to="/login">
                <button className={sign.btn}>Back to Sign In</button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SignIn;

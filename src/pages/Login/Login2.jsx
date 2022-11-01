import React from "react";
import log from "./Login2.module.css";
import { Link } from "react-router-dom";

const Login2 = () => {
  return (
    <div>
      <section>
        <div className={log.container}>
          <h2 className={log.logo}>be nomad</h2>
          <div className={log.box}>
            <h4 className={log.txt}>Forgot Password</h4>
            <div className={log.content}>
              Can't get in ? Enter your email below and we'll send you an email
              to get this sorted out.
            </div>
            <input className={log.item} type="email" placeholder="Email" />
            <div className={log.cont}>
              <Link to="/login">
                <button className={log.btn}>Cancel</button>
              </Link>
              <Link to="/sign">
                <button className={log.btn}>Send reset email</button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Login2;

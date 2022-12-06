import React, { useState } from "react";
import log from "./Login2.module.css";
import { Link, useNavigate } from "react-router-dom";
import { getForgotPass } from "../../api/auth";

const Login2 = () => {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();
  const handleInp = (e) => setEmail(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    getForgotPass(email);
    setEmail("");
    navigate("/login");
  };

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
    </div>
  );
};

export default Login2;

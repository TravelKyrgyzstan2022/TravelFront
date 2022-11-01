import React, { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import login from "./LoginUser.module.css";
import { Login, LoginByGoogle } from "../../port/auth";
import { useRef } from "react";

const LoginUser = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    Login(form);
  };

  const googleBtn = useRef(null);

  const handleCallbackResponse = (response) => {
    LoginByGoogle(response.credential);
    console.log(response.credential);
  };
  console.log(process.env.REACT_APP_ID);
  useEffect(() => {
    /* global google */
    google.accounts.id.initialize({
      client_id: process.env.REACT_APP_ID,
      callback: handleCallbackResponse,
    });

    google.accounts.id.renderButton(googleBtn.current, {
      theme: "outline",
      size: "large",
    });
  }, []);

  return (
    <>
      <section>
        <div className={login.container}>
          <h2 className={login.logo}>be nomad</h2>
          <div className={login.box}>
            <p className={login.txt}>Log In</p>
            <input className={login.item} type="email" placeholder="Email" />
            <input
              className={login.item}
              type="password"
              placeholder="Password"
            />
            <div className={login.cont}>
              <Link to="/">
                <button className={login.btn}> Log In</button>
              </Link>
              <Link to="/login2">
                <button className={login.forgot}>Forgot password</button>
              </Link>
              <div className={login.googlebtn} ref={googleBtn}></div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default LoginUser;

import React, { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import log from "./LoginUser.module.css";
import { Login, LoginByGoogle } from "../../port/auth";
import { useRef } from "react";
import { useDispatch } from "react-redux";
import { login }  from "../../redux/reducers/generalSlice"
import { useFormik } from "formik";
import { basicSchema } from "../../schemas";
import LOGO from '../../img/LOGO_night.svg'
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const LoginUser = () => {
  const [credential, setCredentinal] = useState("");
  const [signUser, setSignUser] = useState({
    email: "",
    password: "",
  });
  const googleBtn = useRef(null);

  const dispatch = useDispatch()
  const handleCallbackResponse = (response) => {
    LoginByGoogle(response.credential);
    setCredentinal(response.credential);
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

  // ! FORMIK
    const {values, errors, touched,isSubmitting, handleBlur, handleChange, handleSubmit} = useFormik({
      initialValues:{
        email: "",
        password: ""
      },
      onSubmit: (data, { resetForm }) => {
        console.log(data)
        dispatch(login(data))
        resetForm({data: ''})
      },
      validationSchema: basicSchema,
    })
    console.log(errors)

    // ! Toastify

    const tt = () => {
      toast.success("You have successfully log in!")
        }

  return (
    <>
      <section>
        <div className={log.container}>
          <img className={log.logo} src={LOGO} alt="img" />
          <form onSubmit={handleSubmit} autoComplete="off" className={log.box}>
            <p className={log.txt}>Log In</p>
            <input
              value={values.email}
              className={log.item}
              name = "email"
              type="email"
              placeholder="Email*"
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.email && touched.email && <p className={log.error}>{errors.email}</p>}
            <input
              value={values.password}
              className={log.item}
              name="password"
              type="password"
              placeholder="Password"
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.password && touched.password && <p className={log.error}>{errors.password}</p>}
            <div className={log.cont}>
                <button onClick={tt} disabled={isSubmitting} type="submit" className={log.btn}> Log In</button>
                <ToastContainer/>
                <button className={log.forgot}>Forgot password</button>
              <div className={log.googlebtn} ref={googleBtn}></div>
            </div>
          </form>
          <div>{credential}</div>
        </div>
      </section>
    </>
  );
};

export default LoginUser;

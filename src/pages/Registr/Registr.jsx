import React, { useEffect } from "react";
import reg from "./Registr.module.css";
import { useState } from "react";
import axios from "axios";
import { BASE_URL } from "../../utils/const";
import LOGO from '../../img/LOGO_night.svg'
import { basicSchema } from "../../schemas";
import { useDispatch } from "react-redux";
import { useFormik } from "formik";
import { register } from "../../api/login";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const Registr = () => {

  // const signUp = async () => {
  //   try {
  //     console.log("запрос идет");
  //     console.log(BASE_URL);
  //     await axios.post(BASE_URL + "auth/register", values);
  //     ({
  //       first_name: "",
  //       last_name: "",
  //       email: "",
  //       password: "",
  //     });
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };

   // ! FORMIK


  const dispatch = useDispatch() 

  const {values, errors, touched,isSubmitting, handleBlur, handleChange, handleSubmit} = useFormik({
    initialValues:{
      first_name: "",
      last_name: "",
      email: "",
      password: ""
    },
    onSubmit: (data, { resetForm }) => {
      console.log(data)
      dispatch(register(data))
      resetForm({data: ''})
    },
    validationSchema: basicSchema,
  })
  console.log(errors)


   // ! Toastify

   const tt = () => {
    toast.success("You have successfully sign in!")
      }

  return (
    <>
      <section>
        <div className={reg.container}>
        <img className={reg.logo} src={LOGO} alt="img" />
          <form onSubmit={handleSubmit} autoComplete="off" className={reg.box}>
            <p className={reg.txt}>Sign Up</p>
            <input
              className={reg.item}
              type="text"
              name="first_name"
              placeholder="First Name"
              value={values.first_name}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.first_name && touched.first_name && <p className={reg.error}>{errors.first_name}</p>}
            <input
              className={reg.item}
              name="last_name"
              type="text"
              placeholder="Last Name"
              value={values.last_name}
              onChange={handleChange}    
            />
            {errors.last_name && touched.last_name && <p className={reg.error}>{errors.last_name}</p>}
            <input
              className={reg.item}
              name="email"
              type="email"
              placeholder="Email"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.email && touched.email && <p className={reg.error}>{errors.email}</p>}
            <input
            value={values.password}
            className={reg.item}
            name="password"
            type="password"
            placeholder="Password"
            onChange={handleChange}
            onBlur={handleBlur}
            />
            {errors.password && touched.password && <p className={reg.error}>{errors.password}</p>}
            <div className={reg.cont}>
              <button onClick={tt} disabled={isSubmitting} type="submit" className={reg.btn}>
                Sign Up
              </button>
              <ToastContainer/>
            </div>
            </form>
          </div>
      </section>
    </>
  );
};

export default Registr;
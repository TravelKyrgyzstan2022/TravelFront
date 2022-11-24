import React, { useEffect } from "react";
import reg from "./Registr.module.css";
import { useState } from "react";
import axios from "axios";
import { BASE_URL } from "../../utils/const";

const Registr = () => {
  const [newUser, setNewUser] = useState({
    first_name: "",
    last_name: "",
    email: "",
    password: "",
  });

  const signUp = async () => {
    try {
      console.log("запрос идет");
      console.log(BASE_URL);
      console.log(newUser);
      await axios.post(BASE_URL + "auth/register", newUser);
      setNewUser({
        first_name: "",
        last_name: "",
        email: "",
        password: "",
      });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <section>
        <div className={reg.container}>
          <h2 className={reg.logo}>be nomad</h2>
          <div className={reg.box}>
            <p className={reg.txt}>Sign Up</p>
            <input
              className={reg.item}
              onChange={(e) =>
                setNewUser({ ...newUser, first_name: e.target.value })
              }
              type="text"
              placeholder="First Name"
              value={newUser.first_name}
            />
            <input
              className={reg.item}
              onChange={(e) =>
                setNewUser({ ...newUser, last_name: e.target.value })
              }
              type="text"
              placeholder="Last Name"
              value={newUser.last_name}
            />

            <input
              className={reg.item}
              onChange={(e) =>
                setNewUser({ ...newUser, email: e.target.value })
              }
              type="email"
              placeholder="Email"
              value={newUser.email}
            />
            <input
              className={reg.item}
              onChange={(e) =>
                setNewUser({ ...newUser, password: e.target.value })
              }
              type="password"
              placeholder="Password"
              value={newUser.password}
            />
            <div className={reg.cont}>
              <button onClick={signUp} className={reg.btn}>
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Registr;
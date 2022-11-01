import React from "react";
import reg from "./Registr.module.css";
import { Link } from "react-router-dom";

const Registr = () => {
  return (
    <>
      <section>
        <div className={reg.container}>
          <h2 className={reg.logo}>be nomad</h2>
          <div className={reg.box}>
            <p className={reg.txt}>Sign Up</p>

            <input className={reg.item} type="text" placeholder="Name" />
            <input className={reg.item} type="email" placeholder="Email" />
            <input
              className={reg.item}
              type="password"
              placeholder="Password"
            />
            <div className={reg.cont}>
              <Link to="/sign">
                <button className={reg.btn}>Sign Up</button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Registr;

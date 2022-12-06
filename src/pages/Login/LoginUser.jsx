import { useState } from "react";
import log from "./LoginUser.module.css";
import LOGO from "../../img/LOGO_night.svg";
import { useDispatch } from "react-redux";
import { getActiveEmail, SignIn } from "../../api/auth";
import { Link, useNavigate } from "react-router-dom";

const LoginUser = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleUserInput = (e) => setEmail(e.target.value);
  const handlePwdInput = (e) => setPassword(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(SignIn({ email, password }));
    dispatch(getActiveEmail(email));
    setEmail("");
    setPassword("");
    navigate("/");
  };

  return (
    <>
      <section>
        <div className={log.container}>
          <img className={log.logo} src={LOGO} alt="img" />
          <form autoComplete="off" onSubmit={handleSubmit} className={log.box}>
            <p className={log.txt}>Log In</p>
            <input
              className={log.item}
              name="email"
              type="email"
              placeholder="Email*"
              autoComplete="off"
              value={email}
              onChange={handleUserInput}
              required
            />

            <input
              className={log.item}
              name="password"
              type="password"
              placeholder="Password"
              onChange={handlePwdInput}
              value={password}
              required
            />

            <div className={log.cont}>
              <button type="submit" className={log.btn}>
                Sign In
              </button>
              <div className={log.helpers}>
                <Link to="/login2">
                  <div>Forgot Password?</div>
                </Link>
                <Link to="/reg">
                  <div>Need an Account?</div>
                </Link>
              </div>
            </div>
          </form>
        </div>
      </section>
    </>
  );
};

export default LoginUser;

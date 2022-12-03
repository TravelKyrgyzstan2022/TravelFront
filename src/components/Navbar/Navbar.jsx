import nav from "./Navbar.module.css";
import { Link } from "react-router-dom";
import logo from "../../img/bnlogo.svg";
import logoNight from "../../img/LOGO_night.svg";
import searchIcon from "../../img/searchIcon.svg";
// import Language from "../language/Language";
import { useState } from "react";

const Navbar = () => {
  const [navbar, setNavbar] = useState(false);
  const [style, setStyle] = useState(false);
  const [logoChange, setLogoChange] = useState(
    <img src={logo} alt="project logo" />
  );

  const setBg = () => {
    if (window.scrollY >= 80) {
      setNavbar(true);
      setLogoChange(<img src={logoNight} alt="project logo" />);
    } else {
      setNavbar(false);
      setLogoChange(<img src={logo} alt="project logo" />);
    }
  };

  const setStyles = () => {
    if (window.scrollY >= 80) {
      setStyle(true);
    } else {
      setStyle(false);
    }
  };

  window.addEventListener("scroll", setBg);
  window.addEventListener("scroll", setStyles);
  return (
    <>
      <div className={`${nav.navbar} ${navbar ? nav.active : navbar}`}>
        <div className={nav.container}>
          <Link to="/">
            <nav className={nav.logo}>{logoChange}</nav>
          </Link>
          <nav className={nav.list}>
            <Link to="/">
              <nav className={`${nav.item} ${style ? nav.active : style}`}>
                Home
              </nav>
            </Link>
            <Link to="/sightseeing">
              <nav className={`${nav.item} ${style ? nav.active : style}`}>
                Sighseeing
              </nav>
            </Link>
            <Link to="/stay">
              <nav className={`${nav.item} ${style ? nav.active : style}`}>
                Stay
              </nav>
            </Link>
            <Link to="/events">
              <nav className={`${nav.item} ${style ? nav.active : style}`}>
                Events
              </nav>
            </Link>
            <Link to="/eat">
              <nav className={`${nav.item} ${style ? nav.active : style}`}>
                Eat
              </nav>
            </Link>
            <Link to="/admin">
              <nav className={`${nav.item} ${style ? nav.active : style}`}>
                Admin
              </nav>
            </Link>
            <nav className={nav.search}>
              <input
                className={nav.searchInp}
                type="text"
                placeholder="Search destination"
              />
              <img
                className={nav.searchIcon}
                src={searchIcon}
                alt="search icon"
              />
            </nav>
            <nav className={nav.auth}>
              <Link to="/login">
                <nav className={nav.login}>Log In</nav>
              </Link>
            {/* <Language */}
            </nav>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Navbar;


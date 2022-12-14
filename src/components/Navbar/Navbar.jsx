import nav from "./Navbar.module.css";
import { Link } from "react-router-dom";
import logo from "../../img/bnlogo.svg";
import logoNight from "../../img/LOGO_night.svg";
import searchIcon from "../../img/searchIcon.svg";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  logOut,
  selectCurrentUser,
} from "../../redux/globalSlice/authSlice/authSlice";
import Language from "../language";


const Navbar = () => {
  // const [section, setSection] = useState(false);
  const [navbar, setNavbar] = useState(false);
  const [style, setStyle] = useState(false);
  const [search, setSearch] = useState(false);
  const [logoChange, setLogoChange] = useState(
    <img src={logo} alt="project logo" />
  );

  const dispatch = useDispatch();
  const user = useSelector(selectCurrentUser);

  const handleLogOut = () => {
    dispatch(logOut());
  };

  const setBg = () => {
    if (window.scrollY >= 80) {
      setNavbar(true);
      setStyle(true);
      setSearch(true);
      setLogoChange(<img src={logoNight} alt="project logo" />);
    } else {
      setNavbar(false);
      setStyle(false);
      setSearch(false);
      setLogoChange(<img src={logo} alt="project logo" />);
    }
  };

  window.addEventListener("scroll", setBg);

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
                Sightseeing
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
            <Link to="/blogs">
              <nav className={`${nav.item} ${style ? nav.active : style}`}>
                Blogs
              </nav>
            </Link>

            <nav className={nav.search}>
              <input
                className={`${nav.searchInp} ${search ? nav.active : search}`}
                type="text"
                onFocus="this.placeholder=''"
                onblur="this.placeholder = 'Search destination'"
                placeholder="Search destination"
              />
              <img
                className={nav.searchIcon}
                src={searchIcon}
                alt="search icon"
              />
            </nav>
            <nav className={nav.auth}>
              {user ? (
                <nav className={nav.login} onClick={handleLogOut}>
                  Log Out
                </nav>
              ) : (
                <Link to="/login">
                  <nav className={nav.login}>Login</nav>
                </Link>
              )}

            </nav>
            {/* <Language/> */}
          </nav>
        </div>
      </div>
    </>
  );
};

export default Navbar;

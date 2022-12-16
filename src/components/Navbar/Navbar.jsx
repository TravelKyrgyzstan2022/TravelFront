import nav from "./Navbar.module.css";
import { Link } from "react-router-dom";
import logo from "../../img/bnlogo.svg";
import logoNight from "../../img/LOGO_night.svg";
import searchIcon from "../../img/searchIcon.svg";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectCurrentUser } from "../../redux/globalSlice/authSlice/authSlice";
import Language from "../language";
import { useTranslation } from "react-i18next";

const Navbar = () => {
  const [navbar, setNavbar] = useState(false);
  const [style, setStyle] = useState(false);
  const [search, setSearch] = useState(false);
  const [logoChange, setLogoChange] = useState(
    <img src={logo} alt="project logo" />
  );

  const { t, i18n } = useTranslation();

  // const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);

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

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
                {t("home")}
              </nav>
            </Link>
            <Link to="/sightseeing">
              <nav className={`${nav.item} ${style ? nav.active : style}`}>
                {t("sightseeing")}
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

            {/* <nav className={nav.search}>
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
            </nav> */}
            <nav className={nav.auth}>
              {user ? (
                <Link to="/private_office">
                  <nav className={nav.login}>
                    {user ? user.first_name + " " + user.last_name : "Login"}
                  </nav>
                </Link>
              ) : (
                <Link to="/login">
                  <nav className={nav.login}>Login</nav>
                </Link>
              )}
            </nav>

            <Language i18n={i18n} />
          </nav>
        </div>
      </div>
    </>
  );
};

export default Navbar;

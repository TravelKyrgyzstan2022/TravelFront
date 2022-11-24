import nav from "./Navbar.module.css";
import { Link } from "react-router-dom";
import logo from "../../img/bnlogo.svg";
import searchIcon from "../../img/searchIcon.svg";
import Language from "../language/Language";

const Navbar = () => {
  return (
    <>
      <div className={nav.section}>
        <div className={nav.container}>
          <Link to="/">
            <nav className={nav.logo}>
              <img src={logo} alt="project logo" />
            </nav>
          </Link>
          <nav className={nav.list}>
            <Link to="/">
              <nav className={nav.item}>Home</nav>
            </Link>
            <Link to="/sight">
              <nav className={nav.item}>Sigtseeng</nav>
            </Link>
            <Link to="/stay">
              <nav className={nav.item}>Stay</nav>
            </Link>
            <Link to="/event">
              <nav className={nav.item}>Event</nav>
            </Link>
            <Link to="/eat">
              <nav className={nav.item}>Eat</nav>
            </Link>
          </nav>
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
            <Language />
          </nav>
        </div>
      </div>
    </>
  );
};

export default Navbar;

<Link to="/"></Link>;

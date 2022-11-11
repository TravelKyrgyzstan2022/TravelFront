import nav from "./Navbar.module.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className={nav.section}>
        <div className={nav.container}>
          <Link to="/">
            <nav className={nav.logo}>be Nomad</nav>
          </Link>
          <nav className={nav.list}>
            <Link to="/see">
              <nav className={nav.item}>See and Try</nav>
            </Link>
            <Link to="/eat">
              <nav className={nav.item}>Eat</nav>
            </Link>
            <Link to="/stay">
              <nav className={nav.item}>Stay</nav>
            </Link>
            <Link to="/enter">
              <nav className={nav.item}>Entertainment</nav>
            </Link>
            <Link to="/blog">
              <nav className={nav.item}>Blogs</nav>
            </Link>
          </nav>
          <nav className={nav.auth}>
            <Link to="/login">
              <nav className={nav.login}>Log In</nav>
            </Link>
            <Link to="/reg">
              <nav className={nav.reg}>Register</nav>
            </Link>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Navbar;

<Link to="/"></Link>;

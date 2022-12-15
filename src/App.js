import { useLocation } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";

import { useSelector } from "react-redux";
import AdminRoute from "./routes/AdminRoute";
import UserRoute from "./routes/UserRoute";
import "./components/Location/18n";
import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";
import ScrollToTop from "./routes/Scroll";


const PATHES = {
  "/admin": 1,
  "/database": 1,
  "/content": 1,
  "/managers": 1,
  "/posts": 1,
};

const ROLES = {
  ROLE_ADMIN: <AdminRoute />,
  ROLE_USER: <UserRoute />,
  ROLE_SUPERADMIN: <AdminRoute />,
  ROLE_UNAUTHORIZED: <UserRoute />,
};

function App() {
  const role = useSelector((state) => state.auth.role);
  let location = useLocation();

const { t, i18n } = useTranslation();
// const [allData, setAllData] = useState([]);

// useEffect(() => {
//   if (i18n.language === 'en') {
//     setAllData(en);
//   } else {
//     setAllData(ru);
//   }
// }, [i18n.language]);


  return (
    <>
      <ScrollToTop />
      {ROLES[role]}

      {!PATHES[location.pathname] &&
      role !== "ROLE_ADMIN" &&
      role !== "ROLE_SUPERADMIN" ? (
        <Navbar />
      ) : (
        false
      )}
    </>
  );
}

export default App;

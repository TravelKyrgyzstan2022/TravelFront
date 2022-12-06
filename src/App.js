import { useLocation } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";


import { useSelector } from "react-redux";
import AdminRoute from "./routes/AdminRoute";
import UserRoute from "./routes/UserRoute";


const PATHES = {
  "/admin": 1,
  "/database": 1,
  "/content": 1,
  "/managers": 1,
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
  console.log(role);
  return (
    <>
      {ROLES[role]}
      {!PATHES[location.pathname] && role !== "ROLE_ADMIN" ? <Navbar /> : false}
    </>
  );
}

export default App;

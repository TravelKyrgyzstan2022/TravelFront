import { useSelector } from "react-redux";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import jwt_decode from "jwt-decode";

const RequireAuth = () => {
  const location = useLocation();
  let { role } = useSelector((state) => state.auth.user_info);

  try {
    const accessToken = localStorage.getItem("token") || "";
    const decoded = jwt_decode(accessToken);
    const decodeRole = decoded?.roles[0].split("_").join("");

    if (!role) {
      role = decodeRole;
    }
  } catch (err) {
    console.log(err);
  }

  console.log("RequireAuth auth: ", role);
  return role && { role }.includes(role) ? (
    <Outlet />
  ) : (
    <Navigate to={"/"} state={{ from: location }} replace />
  );
};

export default RequireAuth();

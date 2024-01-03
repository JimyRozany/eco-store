import { Outlet, Navigate } from "react-router-dom";

const PrivateRoutes = () => {
  let isAuth = localStorage.getItem("isAuth");

  return isAuth ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoutes;

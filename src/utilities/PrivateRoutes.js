import { useEffect } from "react";
import { useSelector } from "react-redux";
import { Outlet, Navigate } from "react-router-dom";

const PrivateRoutes = () => {
  let isAuth = localStorage.getItem("isAuth");

  return isAuth ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoutes;

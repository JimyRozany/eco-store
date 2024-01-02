// components
import { Outlet, ScrollRestoration } from "react-router-dom";
import {
  MyNavbar,
  Footer,
  SearchDialog,
  ToastMessage,
  AuthBar,
} from "../../components/index";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setInitialAuth } from "../../features/auth/authSlice";

const DefaultLayout = () => {
  // let isAuth = JSON.parse(localStorage.getItem("isAuth"));
  let isAuth = useSelector((state) => state.auth.isAuth);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setInitialAuth());
  }, [isAuth]);

  const authBarJSX = !isAuth ? <AuthBar /> : <></>;
  return (
    <div>
      <SearchDialog />
      <ToastMessage />
      <ScrollRestoration />
      {authBarJSX}
      <MyNavbar />
      {/* content */}
      <div className="">
        <Outlet />
      </div>
      {/* ****** endcontent ****** */}
      <div className="mt-6">
        <Footer />
      </div>
    </div>
  );
};

export default DefaultLayout;

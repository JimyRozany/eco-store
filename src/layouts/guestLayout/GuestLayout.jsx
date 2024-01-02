// components
import { Outlet, ScrollRestoration } from "react-router-dom";
import { AuthBar, MyNavbar, Footer, SearchDialog, ToastMessage } from "../../components/index";
const GuestLayout = () => {
  return (
    <div>
      <SearchDialog />
      <ToastMessage />
      <ScrollRestoration />
      <AuthBar />
      <MyNavbar />
      {/* content */}
      <div className="">
        <Outlet />
      </div>
      {/* ****** endcontent ****** */}
      <div className="">
        <Footer />
      </div>
    </div>
  );
};

export default GuestLayout;

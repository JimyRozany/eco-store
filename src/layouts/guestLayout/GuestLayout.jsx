// components
import { Outlet } from "react-router-dom";
import { AuthBar, MyNavbar, Footer } from "../../components/index";
const GuestLayout = () => {
  return (
    <div>
      <AuthBar />
      <MyNavbar />
      {/* content */}
      <div className="">
        <Outlet />
      </div>
      {/* ****** endcontent ****** */}
      <Footer />
    </div>
  );
};

export default GuestLayout;

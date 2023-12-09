// components
import { Outlet } from "react-router-dom";
import { MyNavbar, Footer } from "../../components/index";

const DefaultLayout = () => {
  return (
    <div>
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

export default DefaultLayout;

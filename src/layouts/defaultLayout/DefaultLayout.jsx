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
      <div className="mt-6">
        <Footer />
      </div>
    </div>
  );
};

export default DefaultLayout;

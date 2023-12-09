import { useEffect, useState } from "react";
import {
  Navbar,
  MobileNav,
  Typography,
  IconButton,
} from "@material-tailwind/react";
// icons
import { CiSearch, CiHeart } from "react-icons/ci";
import { FaShoppingBag } from "react-icons/fa";
 const  MyNavbar = () => {
  const [openNav, setOpenNav] = useState(false);

  useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  const navList = (
    <ul className="mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-Poppins font-medium text-xl hover:text-mainColor duration-300"
      >
        <a href="#" className="flex items-center">
          Home
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-Poppins font-medium text-xl hover:text-mainColor duration-300"
      >
        <a href="#" className="flex items-center">
          Electronic
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-Poppins font-medium text-xl hover:text-mainColor duration-300"
      >
        <a href="#" className="flex items-center">
          Contact Us
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-Poppins font-medium text-xl hover:text-mainColor duration-300"
      >
        <a href="#" className="flex items-center">
          About
        </a>
      </Typography>
    </ul>
  );

  return (
    <Navbar className="sticky top-0 z-10 h-max min-w-[100vw]  rounded-none px-4 py-2 lg:px-8 lg:py-4 shadow-lg">
      <div className="flex items-center justify-around text-blue-gray-900">
        {/* LOGO */}
        <Typography
          as="a"
          href="#"
          className="mr-4 cursor-pointer py-1.5 font-Poppins font-bold text-2xl text-mainColor"
        >
          Logo
        </Typography>
        {/* ****** end LOGO ********* */}
        {/* Links */}
        <div className="flex items-center justify-between  gap-4 ">
          <div className="mr-4 hidden lg:block">{navList}</div>
          <IconButton
            variant="text"
            className="absolute top-4 right-4 ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
            ripple={false}
            onClick={() => setOpenNav(!openNav)}
          >
            {openNav ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                className="h-6 w-6"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </IconButton>
        </div>
        {/* ********** end Links ************ */}
        {/* action icons */}
        <div className="flex justify-around items-center text-4xl gap-2 mr-4">
          <IconButton variant="text">
            <CiSearch className="text-4xl text-mainDarkColor hover:text-mainColor duration-300" />
          </IconButton>
          <IconButton variant="text">
            <CiHeart className="text-4xl text-mainDarkColor hover:text-mainColor duration-300" />
          </IconButton>
          <div className="relative">
            <IconButton variant="text">
              <FaShoppingBag className="text-4xl text-mainDarkColor hover:text-mainColor duration-300" />
            </IconButton>
            <span className="text-xl absolute top-0 left-6 text-white bg-mainColor px-2 rounded-full">
              {/* TODO:counter products in cart */}0
            </span>
          </div>
        </div>
        {/* ******* end action icons ******** */}
      </div>
      <MobileNav open={openNav}>{navList}</MobileNav>
    </Navbar>
  );
}
export default MyNavbar ;
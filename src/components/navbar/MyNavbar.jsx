import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

// material components
import { Navbar, MobileNav, IconButton, Badge } from "@material-tailwind/react";
// icons
import { CiSearch, CiHeart } from "react-icons/ci";
import { IoMdMenu, IoMdClose } from "react-icons/io";
import { RiShoppingBagLine } from "react-icons/ri";

import { useDispatch, useSelector } from "react-redux";
import { showHideDialog } from "../../features/search/searchSlice";

const MyNavbar = () => {
  const [openNav, setOpenNav] = useState(false);

  const numberCartItems = useSelector((state)=>state.cart.cartItems.length)

  const dispatch = useDispatch();

  // handlers
  const handleSearchButton = () => {
    dispatch(showHideDialog());
  };

  useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  const navList = (
    <ul className="text-mainDarkColor  font-Poppins font-medium lg:flex items-center lg:text-xl">
      <li>
        <h1 className="flex items-center pe-2 active:text-mainColor md:hover:text-mainColor cursor-pointer duration-300">
          Home
        </h1>
      </li>

      <li>
        <h1 className="flex items-center  pe-2 active:text-mainColor md:hover:text-mainColor cursor-pointer duration-300">
          Electronic
        </h1>
      </li>

      <li>
        <h1 className="flex items-center  pe-2 active:text-mainColor md:hover:text-mainColor cursor-pointer duration-300">
          Contact Us
        </h1>
      </li>

      <li>
        <h1 className="flex items-center active:text-mainColor md:hover:text-mainColor cursor-pointer duration-300">
          About
        </h1>
      </li>
    </ul>
  );

  return (
    <Navbar className="sticky top-0 z-10 h-max min-w-[100vw]  rounded-none px-4 py-2 lg:px-8 lg:py-4 shadow-lg">
      <div className="flex items-center justify-around text-blue-gray-900">
        {/* LOGO */}
        <h1 className="mr-4 cursor-pointer py-1.5 font-Poppins font-bold text-2xl text-mainColor">
          Logo
        </h1>
        {/* ****** end LOGO ********* */}
        {/* Links */}
        <div className="flex items-center justify-between  gap-4 ">
          <div className="mr-4 hidden lg:block">{navList}</div>
        </div>
        {/* ********** end Links ************ */}
        {/* action icons */}
        <div className="flex justify-between items-center  lg:gap-2 me-2">
          {/* search Button */}
          <IconButton variant="text" onClick={handleSearchButton}>
            <CiSearch className="text-2xl lg:text-4xl text-mainDarkColor hover:text-mainColor duration-300" />
          </IconButton>
          {/* **** End search Button **** */}
          <IconButton variant="text">
            <CiHeart className="text-2xl lg:text-4xl text-mainDarkColor hover:text-mainColor duration-300" />
          </IconButton>
          {/* Cart button  */}
          <Link to="/cart">
            <Badge content={numberCartItems}>
              <IconButton variant="text" className="p-0 m-0">
                <RiShoppingBagLine className=" text-2xl lg:text-4xl text-mainDarkColor hover:text-mainColor duration-300" />
              </IconButton>
            </Badge>
          </Link>
          {/* **** end Cart button ****  */}
        </div>
        {/* menu button */}
        <IconButton
          variant="text"
          className="absolute top-4 right-4 ml-auto h-6 w-6 text-lg lg:text-xl hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
          ripple={false}
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? <IoMdClose /> : <IoMdMenu />}
        </IconButton>
        {/* ***** end menu button ****  */}
        {/* ******* end action icons ******** */}
      </div>
      <MobileNav open={openNav}>{navList}</MobileNav>
    </Navbar>
  );
};
export default MyNavbar;

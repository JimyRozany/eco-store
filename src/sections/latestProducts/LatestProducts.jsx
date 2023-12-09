import React from "react";
import CardProduct from "../../components/cardProduct/CardProduct";

import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const LatestProducts = () => {
  return (
    <>
      {/* latest products section */}
      <div className="font-Poppins">
        {/* title section */}
        <h1 className="text-2xl font-semibold text-mainDarkColor px-10">
          Latest Products
        </h1>
        {/* ********* end title section ********* */}
        {/* carousel */}

        <div className="w-screen flex justify-center items-center">
          <Carousel
            responsive={responsive}
            draggable={true}
            className="p-4"
            customRightArrow={
              <IoIosArrowForward className="text-5xl bg-white/70  px-2 py-1 rounded-full text-mainDarkColor hover:text-mainVariantColor hover:bg-white duration-500 hover:cursor-pointer absolute right-7 top-[46%]" />
            }
            customLeftArrow={
              <IoIosArrowBack className="text-5xl bg-white/70  px-2 py-1 rounded-full text-mainDarkColor hover:text-mainVariantColor hover:bg-white duration-500 hover:cursor-pointer absolute left-7 top-[46%]" />
            }
            customTransition={"transform 800ms ease-in-out"}
            transitionDuration={800}
          >
            <CardProduct />
            <CardProduct />
            <CardProduct />
            <CardProduct />
            <CardProduct />
            <CardProduct />
            <CardProduct />
            <CardProduct />
            <CardProduct />
          </Carousel>
        </div>

        {/* ********* end carousel ********* */}
      </div>
    </>
  );
};

export default LatestProducts;

import React from "react";
import CardProduct from "../../components/cardProduct/CardProduct";

const PopularProducts = () => {
  return (
    <>
      {/* popular products section */}
      <div className="">
        {/* title section */}
        <h1 className="text-2xl font-semibold text-mainDarkColor px-10">
          Popular Products
        </h1>
        {/* ******* end title section ******* */}
        {/* cards product */}
        <div className="flex justify-center mt-2">
          <div className="grid grid-cols-1 grid-rows-6 gap-2 md:grid-cols-2 md:grid-rows-4 md:gap-1 lg:grid-cols-4 lg:grid-rows-2 lg:gap-5">
            <CardProduct />
            <CardProduct />
            <CardProduct />
            <CardProduct />
            <CardProduct />
            <CardProduct />
            <CardProduct />
            <CardProduct />
          </div>
        </div>
        {/* ******* End cards product ******* */}
      </div>
      {/* ******* end popular products section ******* */}
    </>
  );
};

export default PopularProducts;

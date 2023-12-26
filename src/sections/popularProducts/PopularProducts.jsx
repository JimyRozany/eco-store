import React from "react";
import CardProduct from "../../components/cardProduct/CardProduct";
import { Link } from "react-router-dom";

const PopularProducts = () => {
  const products = JSON.parse(localStorage.getItem("allProducts"));

  const cardProductsJSX = products?.map((item) => {
    if (item.id <= 8) {
      return (
        <Link to={`/show-product/${item.id}`} key={item.id}>
          <CardProduct
            // name={item.title}
            // price={item.price}
            // image={item.image}
            // desc={item.description}
            // rate={item.rating.rate}
            // discount={item.discount}
            {...item}
          />
        </Link>
      );
    }
  });

  return (
    <>
      {/* popular products section */}
      <div className="my-5">
        {/* title section */}
        <h1 className="text-xl md:text-2xl font-semibold text-mainDarkColor px-5 lg:px-10">
          Popular Products
        </h1>
        {/* ******* end title section ******* */}
        {/* cards product */}
        <div className="flex justify-center mt-2">
          <div className="grid grid-cols-2 grid-rows-4 gap-2 md:gap-4 lg:grid-cols-4 lg:grid-rows-2 lg:gap-5">
            {cardProductsJSX}
          </div>
        </div>
        {/* ******* End cards product ******* */}
      </div>
      {/* ******* end popular products section ******* */}
    </>
  );
};

export default PopularProducts;

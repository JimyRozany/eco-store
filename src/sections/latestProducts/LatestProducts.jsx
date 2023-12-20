import { Spinner } from "@material-tailwind/react";
import CardProduct from "../../components/cardProduct/CardProduct";

import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 768 },
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
  const products = useSelector((state) => state.fetchProducts.products);

  const cardProductsJSX = products?.map((product) => {
    if (product.id <= 10)
      return (
        <Link to={`/show-product/${product.id}`} key={product.id}>
          <CardProduct
            name={product.title}
            price={product.price}
            image={product.image}
            desc={product.description}
            rate={product.rating.rate}
            // discount={product.discount}
          />
        </Link>
      );
    else return null;
  });

  return (
    <>
      {/* latest products section */}
      <div className="font-Poppins">
        {/* title section */}
        <h1 className="text-lg md:text-2xl font-semibold text-mainDarkColor px-2 md:px-10">
          Latest Products
        </h1>
        {/* ********* end title section ********* */}
        {/* carousel */}

        <div className="w-scren  px-10">
          <div className="max-w-min flex justify-center items-center  ">
            <Carousel
              responsive={responsive}
              draggable={true}
              className="p-2"
              customRightArrow={
                <IoIosArrowForward className="text-4xl bg-black/20  px-2 py-1 rounded-full text-mainDarkColor hover:text-mainVariantColor  duration-500 hover:cursor-pointer absolute right-7 top-[46%]" />
              }
              customLeftArrow={
                <IoIosArrowBack className="text-4xl bg-black/20  px-2 py-1 rounded-full text-mainDarkColor hover:text-mainVariantColor  duration-500 hover:cursor-pointer absolute left-7 top-[46%]" />
              }
              customTransition={"transform 800ms ease-in-out"}
              transitionDuration={800}
              infinite={true}
            >
              {cardProductsJSX}
            </Carousel>
          </div>
        </div>

        {/* ********* end carousel ********* */}
      </div>
    </>
  );
};

export default LatestProducts;

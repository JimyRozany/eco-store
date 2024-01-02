import { Link } from "react-router-dom";
// components
import { CardProduct } from "../../components/index";
// icons
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
// carousel
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
//redux
import { useSelector } from "react-redux";

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
    items: 2,
  },
};

const LatestProducts = () => {
  const products = useSelector((state) => state.fetchProducts.products);

  const cardProductsJSX = products?.map((product) => {
    if (product.id <= 10)
      return (
        <Link to={`/show-product/${product.id}`} key={product.id}>
          <CardProduct
            // id={product.id}
            // name={product.title}
            // price={product.price}
            // image={product.image}
            // desc={product.description}
            // rate={product.rating.rate}
            // discount={product.discount}
            {...product} // other way
          />
        </Link>
      );
    else return null;
  });

  return (
    <>
      {/* latest products section */}
      <div className="font-Poppins my-5">
        {/* title section */}
        <h1 className="text-lg md:text-2xl font-semibold text-mainDarkColor px-5 lg:px-10">
          Latest Products
        </h1>
        {/* ********* end title section ********* */}
        {/* carousel */}

        <div className="md:px-6 pt-2">
          <div className="max-w-min flex justify-center items-center  ">
            <Carousel
              responsive={responsive}
              draggable={true}
              className="px-5"
              customRightArrow={
                <IoIosArrowForward className="text-4xl bg-black/20  px-2 py-1 rounded-full text-mainDarkColor hover:text-mainVariantColor  duration-500 hover:cursor-pointer absolute right-5 md:right-1 lg:right-7 top-[46%]" />
              }
              customLeftArrow={
                <IoIosArrowBack className="text-4xl bg-black/20  px-2 py-1 rounded-full text-mainDarkColor hover:text-mainVariantColor  duration-500 hover:cursor-pointer absolute left-5 md:left-1 lg:left-7 top-[46%]" />
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


import { useState } from "react";
import { Link, useParams } from "react-router-dom";

// components
import RateStar from "../../components/rate/RateStar";
import CardProduct from "../../components/cardProduct/CardProduct";


// icons
import { FaRegHeart } from "react-icons/fa";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { BiSolidRightArrow } from "react-icons/bi";

//other
import { Button } from "@material-tailwind/react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useDispatch } from "react-redux";
import { addToCart } from "../../features/cart/cartSlice";
import { closeToast, openToast } from "../../features/toastMessage/toastMessage";
import { addToLike } from "../../features/like/likeSlice";

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

const Product = () => {
  const { productId } = useParams();
  const products = JSON.parse(localStorage.getItem("allProducts"));


  const dispatch = useDispatch()

  const product = products.filter((item) => {
    if (item.id === Number(productId)) {
      return item;
    }
  });

  //Ten products in the same category
  const cardProductsJSX = products?.map((item) => {
    if (item.category === product[0].category)
      return (
        <Link to={`/show-product/${item.id}`} key={item.id}>
          <CardProduct
            // name={item.title}
            // price={item.price}
            // image={item.image}
            // desc={item.description}
            // rate={item.rating.rate}
            // discount={item.discount}
            //----
            {...item}
          />
        </Link>
      );
  });

  const [quantity, setQuantity] = useState(1);

  // handlers
  const incrementQuantity = () => {
    setQuantity(quantity + 1);
  };
  const decrementQuantity = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };

  const handleAddToCart = (event) => {
    event.preventDefault();
    dispatch(addToCart(product[0]));
    dispatch(openToast("added successfully"))
    setTimeout(() => {
      dispatch(closeToast())
    }, 3000);
    
  };
  const handleAddToLike = (event) => {
    event.preventDefault();
    dispatch(addToLike(product[0]));
    dispatch(openToast("liked successfully"))
    setTimeout(() => {
      dispatch(closeToast())
    }, 3000);
  };



  return (
    <div className="w-screen p-5">
      <div className=" flex justify-center items-center">
        <div className="md:py-3 lg:p-6 flex flex-col md:flex-row md:justify-center items-center gap-2">
          {/* image product */}
          <div className=" w-40 md:w-60 lg:w-80 m-auto flex justify-center lg:items-center  self-start border border-blue-gray-200 p-1 lg:p-2 rounded-md">
            <img className="w-full h-full" src={product[0].image} alt="" />
          </div>
          {/* ***** end image product ***** */}
          {/* ***** info product ***** */}
          <div className="!font-Poppins w-full md:w-[50%]  md:p-4 lg:p-10">
            {/* product name */}
            <h1 className=" md:w-56 lg:w-auto md:text-xl lg:text-2xl font-medium text-mainDarkColor">
              {product[0].title}
            </h1>
            {/* stock */}
            <h1 className="md:text-md lg:text-xl py-1 lg:py-6">
              Availability:
              <span className="text-mainColor">1 left in stock</span>
            </h1>
            {/* rate & reviews */}
            <div className="flex items-center gap-2">
              <span>Rate:</span>
              <RateStar rate={product[0].rating.rate} />
              <span className="text-gray-400">No reviews</span>
            </div>
            <hr className="md:my-1 lg:my-5" />
            {/* price */}
            <h1 className="text-2xl text-mainColor font-medium">
              ${product[0].price}
            </h1>
            {/* short description */}
            <p className="text-mainDarkColor md:my-1 lg:my-4 line-clamp-3">
              {product[0].description}
            </p>
            {/* buttons */}
            <div className="mt-4">
              <div className="flex justify-start items-center gap-2 md:gap-5 flex-wrap">
                {/* quantity button  */}
                <div className="border border-blue-gray-200  rounded-md flex justify-around items-center p-1 lg:p-2 md:text-lg lg:text-xl w-24 md:w-28 lg:w-38">
                  <span
                    onClick={decrementQuantity}
                    className="hover:cursor-pointer"
                  >
                    -
                  </span>
                  <span>{quantity}</span>
                  <span
                    onClick={incrementQuantity}
                    className="hover:cursor-pointer"
                  >
                    +
                  </span>
                </div>
                <Button  className="bg-mainDarkColor hover:bg-mainColor duration-300 normal-case md:text-md lg:text-lg lg:px-12" onClick={handleAddToCart}>
                  Add To Cart
                </Button>
                <Button className="bg-mainColor hover:bg-mainDarkColor duration-300 normal-case p-2 text-xl lg:text-3xl" onClick={handleAddToLike}>
                  <FaRegHeart />
                </Button>
              </div>
              <div className="w-full mt-4">
                <Button className="w-full lg:w-full bg-mainColor hover:bg-mainDarkColor duration-300 normal-case md:text-md lg:text-xl">
                  Buy it Now
                </Button>
              </div>
            </div>
          </div>
          {/* ***** end info product ***** */}
        </div>
      </div>
      {/* More details & Reviews */}
      <div className="mt-2">
        <div className="flex justify-center items-center gap-2 bg-gray-300">
          <Button
            variant="text"
            className=" text-sm lg:text-lg font-Poppins normal-case font-medium focus:text-mainColor duration-300 hover:bg-none"
          >
            Description
          </Button>
          <Button
            variant="text"
            className="text-sm lg:text-lg  font-Poppins normal-case font-medium focus:text-mainColor duration-300"
          >
            Reviews
          </Button>
        </div>
        <div className=" p-2 lg:py-4 lg:px-20 bg-gray-100">
          <div className="">{product[0].description}</div>
          <div className="">
            <h1 className="text-2xl font-medium py-2">Costumer Reviews</h1>
            <div className="text-gray-800 flex justify-between items-center">
              <span>No Reviews yet</span>
              <span className="underline hover:cursor-pointer hover:text-mainColor">
                Write a review
              </span>
            </div>
          </div>
        </div>
      </div>
      {/* ***** end More details & Reviews ***** */}
      {/* costum products */}
      <div className="px-4 py-2 mt-6">
        <div className="flex justify-between items-center ">
          <h1 className="text-3xl font-medium">Costum product</h1>
          <div className="text-lg hover:text-mainColor duration-300 hover:cursor-pointer flex items-center gap-4">
            <span>View all products</span>
            <BiSolidRightArrow className="text-mainColor" />
          </div>
        </div>
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
          infinite={true}
        >
          {cardProductsJSX !== null ? cardProductsJSX : <>hello </>}
        </Carousel>
      </div>
      {/* ****** endcostum products *****  */}
    </div>
  );
};

export default Product;

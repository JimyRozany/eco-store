import RateStar from "../rate/RateStar";

// icons
import { CiHeart } from "react-icons/ci";
import { CiShoppingCart } from "react-icons/ci";
// redux
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from "../../features/cart/cartSlice";

const CardProduct = ({
  title,
  price,
  image,
  description,
  rating,
  discount = null,
  id,
}) => {
  const dispatch = useDispatch();
  const items = useSelector((state)=> state.cart.cartItems) ;

  const handleAddToCart = (event) => {
    event.preventDefault();
    dispatch(addToCart({ id, title, price, image, description, rating }));
    console.log("cart items from card product ,,,, " ,items);
  };
  const handleRemoveFromCart = (event) => {
    event.preventDefault();
    dispatch(removeFromCart(id));
  };

  return (
    <>
      {/* card  */}
      <div className=" w-36 h-64  md:w-56 md:h-80 p-1 md:p-2 flex flex-col rounded-md shadow-lg border border-red-500">
        {/* card image  */}
        <div className="relative flex justify-center w-32 h-32 md:w-46 md:h-46 rounded-md overflow-hidden self-center group">
          <img
            src={image}
            alt=""
            className="w-full h-full group-hover:scale-125 duration-300 cursor-pointer "
          />
          <div className=" absolute w-full h-fite flex justify-center items-end bg-black/20 -bottom-20 group-hover:bottom-0 group-hover:h-full transition-all duration-300 ">
            <div className="flex items-center p-2 justify-around w-full  ">
              <div className="p-1 bg-[rgba(0,0,0,0.6)] hover:bg-[rgba(0,0,0,1)] rounded-full">
                <CiHeart
                  className=" text-xl md:text-3xl text-white"
                  onClick={handleRemoveFromCart}
                />
              </div>
              <div className="p-1 bg-[rgba(0,0,0,0.6)] hover:bg-[rgba(0,0,0,1)] rounded-full">
                <CiShoppingCart
                  className="text-xl md:text-3xl text-white"
                  onClick={handleAddToCart}
                />
              </div>
            </div>
          </div>
        </div>
        {/* ------ card image ------  */}
        {/* card content */}
        <div className=" mt-2">
          {/* rate */}
          <div className="flex justify-center items-center text-md md:text-lg py-2">
            <RateStar rate={rating.rate} />
          </div>
          {/* ------ rate ------ */}
          <h1 className=" text-md md:text-lg font-medium truncate">{title}</h1>
          <p className="line-clamp-2 text-sm w-auto mb-2 ">{description}</p>
          <p className="text-md md:text-lg font-medium text-center text-mainColor">
            ${price}
            {discount ? (
              <span className="text-lg md:text-xl line-through text-mainDarkColor decoration-mainColor px-2 font-medium">
                ${discount}
              </span>
            ) : (
              <></>
            )}
          </p>
        </div>
        {/* ------ card content ------ */}
      </div>
      {/* ------- card ------ */}
    </>
  );
};

export default CardProduct;

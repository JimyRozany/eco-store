import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getLiked, removeFromLike } from "../../features/like/likeSlice";
import { Link } from "react-router-dom";
import { CardProduct } from "../../components";

// icons
import { IoIosClose } from "react-icons/io";
import { FaHeartCirclePlus } from "react-icons/fa6";
import {
  closeToast,
  openToast,
} from "../../features/toastMessage/toastMessage";

const Like = () => {
  const liked = useSelector((state) => state.like.likedProducts);
  const dispatch = useDispatch();

  // handlers
  const handleRemove = (e, item) => {
    e.preventDefault();
    dispatch(removeFromLike(item));
    dispatch(openToast("removed successfully"));
    setTimeout(() => {
      dispatch(closeToast());
    }, 3000);
  };

  useEffect(() => {
    dispatch(getLiked());
  }, []);

  const likedProductsJSX = liked?.map((item) => {
    return (
      <Link to={`/show-product/${item.id}`}>
        <div className=" relative">
          <CardProduct {...item} />
          <IoIosClose
            className="text-4xl absolute top-1 right-2 hover:scale-125 transition-all duration-200 text-white hover:text-mainColor bg-black/50 rounded-full"
            onClick={(e) => handleRemove(e, item)}
          />
        </div>
      </Link>
    );
  });
  return (
    <div className="w-screen min-h-[300px] flex justify-center ">
      {liked.length !== 0 ? (
        <div className="grid lg:grid-cols-4 gap-4  mt-10">
          {likedProductsJSX}
        </div>
      ) : (
        <div className="mt-10 text-mainDarkColor font-Poppins self-center">
          <h1 className="text-2xl font-medium mb-1">
            Your favorite products list is empty.
          </h1>
          <div className="flex justify-center my-2">
            <FaHeartCirclePlus className="text-5xl" />
          </div>
          <h1 className="inline mr-1 text-lg">Continue browsing</h1>
          <span>
            <Link
              to="/"
              className="font-semibold hover:text-mainColor cursor-pointer transition-all duration-300"
            >
              here.
            </Link>
          </span>
        </div>
      )}
    </div>
  );
};

export default Like;

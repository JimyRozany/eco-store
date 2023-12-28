import { useEffect, useState } from "react";
// images
import airpods from "../../images/airpods.png";
// icons
import { IoIosCloseCircleOutline } from "react-icons/io";
import { LiaCartArrowDownSolid } from "react-icons/lia";
import { FaChevronLeft } from "react-icons/fa6";

import { Button, Checkbox } from "@material-tailwind/react";

// redux
import { useDispatch, useSelector } from "react-redux";
import {
  removeFromCart,
  incrementQuantity,
  decrementQuantity,
  clearCart,
  sumTotalPrice,
  getCart,
} from "../../features/cart/cartSlice";
import { Link } from "react-router-dom";
import { closeToast, openToast } from "../../features/toastMessage/toastMessage";
const Cart = () => {
  const [checkboxInput, setCheckboxInput] = useState(false);

  const cartItems = useSelector((state) => state.cart.cartItems);
  const totalAmount = useSelector((state) => state.cart.totalAmount);
  const dispatch = useDispatch();

  // handlers
  const handleIncrementQuantity = (item) => {
    dispatch(incrementQuantity(item));
  };
  const handleDecrementQuantity = (item) => {
    dispatch(decrementQuantity(item));
  };

  // delete from cart
  const handleRemoveFromCart = (item) => {
    dispatch(removeFromCart(item));
    dispatch(openToast("removed successfully"))
    setTimeout(() => {
      dispatch(closeToast())
    }, 3000);
  };
  // delete all products from cart
  const handleClear = () => {
    dispatch(clearCart());
    dispatch(openToast("cleared successfully"))
    setTimeout(() => {
      dispatch(closeToast())
    }, 3000);
  };

  useEffect(() => {
    dispatch(getCart());
  }, []);

  useEffect(() => {
    dispatch(sumTotalPrice());
  }, [cartItems]);

  const tableRowJSX = cartItems.map((item) => {
    return (
      <>
        <tr className="border-b border-blue-gray-400 " key={item.id}>
          <td className="border-0 md:border-r border-blue-gray-400 block md:table-cell   p-1 lg:px-6 lg:py-4 font-medium">
            <div className=" w-20 sm:w-16 lg:w-20 m-auto">
              <img src={item.image} alt="" className="w-full h-full" />
            </div>
          </td>
          <td className="text-sm lg:text-md border-0 md:border-r  border-blue-gray-400 block md:table-cell text-center  p-1 lg:px-6 py-4 font-medium">
            {item.title}
          </td>
          <td className="text-md lg:text-lg border-0 md:border-r border-blue-gray-400  block md:table-cell text-center  p-1 lg:px-6 py-4 font-medium">
            ${item.price}
          </td>
          <td className="text-md lg:text-xl border-0 md:border-r border-blue-gray-400 block md:table-cell text-center  p-1 lg:px-6 py-4 font-medium">
            <div className="border rounded-md flex justify-around items-center p-2 text-lg w-40 m-auto">
              <span
                onClick={() => handleDecrementQuantity(item)}
                className="hover:cursor-pointer"
              >
                -
              </span>
              <span>{item.cartItemQuantity}</span>
              <span
                onClick={() => handleIncrementQuantity(item)}
                className="hover:cursor-pointer"
              >
                +
              </span>
            </div>
          </td>
          <td className="text-md lg:text-lg border-0 md:border-r border-blue-gray-400 block md:table-cell text-center  p-1 lg:px-6 py-4 font-medium">
            ${(item.price * item.cartItemQuantity).toFixed(2)}
          </td>
          <td className="border-0 md:border-r  border-blue-gray-400 block md:table-cell text-center p-1 lg:px-6 py-4 font-medium ">
            <div className="flex justify-center items-center">
              <IoIosCloseCircleOutline
                className="text-4xl text-mainDarkColor hover:text-mainColor duration-200 cursor-pointer "
                onClick={() => handleRemoveFromCart(item)}
              />
            </div>
          </td>
        </tr>
      </>
    );
  });

  return (
    <div className="w-screen flex justify-center items-start mt-5">
      {cartItems.length !== 0 ? (
        <div className=" lg:px-20 border border-yellow-500">
          {/* products table */}
          <table className=" border border-blue-gray-400 text-center text-sm font-light font-Poppins text-mainDarkColor">
            <thead className="md:border-b border-blue-gray-400 ">
              <tr>
                <th
                  scope="col"
                  colSpan="2"
                  className="  font-medium text-xl uppercase md:border-r border-blue-gray-400 px-6 py-4 hidden md:table-cell"
                >
                  product
                </th>
                <th
                  scope="col"
                  className=" font-medium text-xl uppercase md:border-r border-blue-gray-400 px-6 py-4 hidden md:table-cell"
                >
                  Price
                </th>
                <th
                  scope="col"
                  className=" font-medium text-xl uppercase md:border-r border-blue-gray-400 px-6 py-4 hidden md:table-cell"
                >
                  Quantity
                </th>
                <th
                  scope="col"
                  className=" font-medium text-xl uppercase md:border-r border-blue-gray-400 px-6 py-4 hidden md:table-cell"
                >
                  Total
                </th>
                <th
                  scope="col"
                  className=" font-medium text-xl uppercase md:border-r border-blue-gray-400 px-6 py-4 hidden md:table-cell"
                ></th>
              </tr>
            </thead>
            <tbody>{tableRowJSX}</tbody>
          </table>
          {/* ****** end products table ***** */}

          {/* action buttons */}
          <div className="flex justify-end items-center mt-5">
            <div className="flex gap-2 justify-around items-center">
              <Link to="/">
                <Button className="text-md lg:text-xl bg-mainColor normal-case rounded-full">
                  Continue Shopping
                </Button>
              </Link>
              <Button
                className="text-md lg:text-xl bg-mainColor normal-case rounded-full"
                onClick={handleClear}
              >
                Clear Cart
              </Button>
            </div>
          </div>
          {/* ***** end action buttons ***** */}

          <hr className="my-5" />
          {/* Checkout card */}
          <div className="bg-[#f7f7f7]  md:w-[500px]   p-6 rounded-md my-6 !font-Poppins text-mainDarkColor">
            <h1 className="text-center text-3xl font-medium pb-4">
              Cart Totals
            </h1>
            <table class="border border-gray-500 w-full">
              <thead>
                <tr>
                  <td class="border border-gray-500 font-medium font-Poppins px-2 py-4 text-xl">
                    Subtotal
                  </td>
                  <td class="border border-gray-500 text-end font-Poppins px-2 py-4 text-xl">
                    ${totalAmount}
                  </td>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td class="border border-gray-500 font-medium font-Poppins px-2 py-4 text-xl">
                    Total
                  </td>
                  <td class="border border-gray-500 text-end  font-Poppins px-2 py-4 text-xl">
                    ${totalAmount}
                  </td>
                </tr>
              </tbody>
            </table>
            <Checkbox
              checked={checkboxInput}
              onClick={(e) => setCheckboxInput(e.target.checked)}
              color="deep-orange"
              label="I agree with the terms and conditions"
              className="my-4"
            />
            <Link to="/checkout">
              <Button
                disabled={!checkboxInput}
                className="text-md md:text-lg lg:text-xl normal-case bg-mainColor px-10 rounded-full"
              >
                Proceed to Checkout
              </Button>
            </Link>
          </div>
          {/*  ****** end Checkout card ***** */}
        </div>
      ) : (
        <div className=" w-full flex flex-col justify-around items-center !text-mainDarkColor !font-Poppins ">
          <h1 className="text-2xl md:text-4xl  ">Shopping Cart is Empty.</h1>

          <div className="my-5">
            <LiaCartArrowDownSolid className="text-9xl" />
          </div>
          <h1 className="text-sm">You Have No Items In Your Shopping Cart.</h1>
          <Link to="/">
            <Button
              variant="text"
              className="  my-4 normal-case flex justify-between items-center hover:bg-transparent text-mainDarkColor hover:text-mainColor  transition-all duration-300"
            >
              <FaChevronLeft /> Continue Shopping
            </Button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Cart;

import { useState } from "react";
// images
import airpods from "../../images/airpods.png";
// icons
import { IoIosCloseCircleOutline } from "react-icons/io";
import { Button, Checkbox } from "@material-tailwind/react";

const Cart = () => {
  const [quantity, setQuantity] = useState(1);
  const [checkboxInput, setCheckboxInput] = useState(false);

  // handlers
  const incrementQuantity = () => {
    setQuantity(quantity + 1);
  };
  const decrementQuantity = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };

  return (
    <div className="w-screen flex justify-center items-start mt-5">
      <div className="px-10 w-[80%]">
        {/* products table */}
        <table className="w-full border text-center text-sm font-light font-Poppins text-mainDarkColor">
          <thead className="md:border-b ">
            <tr>
              <th
                scope="col"
                colSpan="2"
                className="  font-medium text-xl uppercase md:border-r px-6 py-4 hidden md:table-cell"
              >
                product
              </th>
              <th
                scope="col"
                className=" font-medium text-xl uppercase md:border-r px-6 py-4 hidden md:table-cell"
              >
                Price
              </th>
              <th
                scope="col"
                className=" font-medium text-xl uppercase md:border-r px-6 py-4 hidden md:table-cell"
              >
                Quantity
              </th>
              <th
                scope="col"
                className=" font-medium text-xl uppercase md:border-r px-6 py-4 hidden md:table-cell"
              >
                Total
              </th>
              <th
                scope="col"
                className=" font-medium text-xl uppercase md:border-r px-6 py-4 hidden md:table-cell"
              ></th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b ">
              <td className="border-0 md:border-r  block md:table-cell text-center  px-6 py-4 font-medium">
                <img src={airpods} alt="" className="w-24 h-24" />
              </td>
              <td className="text-xl border-0 md:border-r  block md:table-cell text-center   px-6 py-4 font-medium">
                name product
              </td>
              <td className="text-xl border-0 md:border-r  block md:table-cell text-center   px-6 py-4 font-medium">
                $35
              </td>
              <td className="text-xl border-0 md:border-r  block md:table-cell text-center   px-6 py-4 font-medium">
                <div className="border rounded-md flex justify-around items-center p-2 text-lg">
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
              </td>
              <td className="text-xl border-0 md:border-r  block md:table-cell text-center   px-6 py-4 font-medium">
                $700
              </td>
              <td className="border-0 md:border-r  block md:table-cell text-center  px-6 py-4 font-medium ">
                <div className="flex justify-center items-center">
                  <IoIosCloseCircleOutline className="text-6xl hover:text-mainColor duration-200 cursor-pointer " />
                </div>
              </td>
            </tr>
          </tbody>
        </table>
        {/* ****** end products table ***** */}

        {/* action buttons */}
        <div className="flex justify-end items-center mt-5">
          <div className="flex gap-4 flex-wrap">
            <Button className="text-xl bg-mainColor normal-case rounded-full">
              Update Cart
            </Button>
            <Button className="text-xl bg-mainColor normal-case rounded-full">
              Continue Shopping
            </Button>
            <Button className="text-xl bg-mainColor normal-case rounded-full">
              Clear Cart
            </Button>
          </div>
        </div>
        {/* ***** end action buttons ***** */}

        <hr className="my-5" />
        {/* Checkout card */}
        <div className="bg-[#f7f7f7]  md:w-[500px]   p-6 rounded-md my-6 !font-Poppins text-mainDarkColor">
          <h1 className="text-center text-3xl font-medium pb-4">Cart Totals</h1>
          <table class="border border-gray-500 w-full">
            <thead>
              <tr>
                <td class="border border-gray-500 font-medium font-Poppins px-2 py-4 text-xl">
                  Subtotal
                </td>
                <td class="border border-gray-500 text-end font-Poppins px-2 py-4 text-xl">
                  $500
                </td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="border border-gray-500 font-medium font-Poppins px-2 py-4 text-xl">
                  Total
                </td>
                <td class="border border-gray-500 text-end  font-Poppins px-2 py-4 text-xl">
                  $550
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
          <Button
            disabled={!checkboxInput}
            className="text-xl normal-case bg-mainColor px-10 rounded-full"
          >
            Proceed to Checkout
          </Button>
        </div>
        {/*  ****** end Checkout card ***** */}
      </div>
    </div>
  );
};

export default Cart;

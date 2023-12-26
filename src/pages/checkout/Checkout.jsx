import { useEffect, useState } from "react";

// icons
import { Button, Input, Badge } from "@material-tailwind/react";

import { IoBagHandleOutline } from "react-icons/io5";

import ReactFlagsSelect from "react-flags-select";

// images
import airpods from "../../images/airpods.png";
import { useDispatch, useSelector } from "react-redux";
import { getCart } from "../../features/cart/cartSlice";
import { Link } from "react-router-dom";

const Checkout = () => {
  const [selected, setSelected] = useState("EG");

  const [deliveryInfo, setDeliveryInfo] = useState({});

  const cartItems = useSelector((state) => state.cart.cartItems);
  const totalAmount = useSelector((state) => state.cart.totalAmount);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCart());
  }, []);

  const cardProductJSX = cartItems.map((item) => {
    return (
      <div
        key={item.id}
        className="block md:flex justify-between items-center w-full mt-2  "
      >
        <div className="block md:flex justify-between items-center gap-1 lg:gap-2 lg:pe-10">
          <Badge
            content={item.cartItemQuantity}
            className="bg-[rgba(0,0,0,0.8)] p-0 text-sm md:text-md w-6 h-6 lg:w-8 lg:h-8"
          >
            <div className="border border-blue-gray-400 w-[100px] h-[100px] ">
              <img src={item.image} alt="" className=" w-full h-full" />
            </div>
          </Badge>
          <h1 className="text-sm lg:text-xl line-clamp-1 ">{item.title}</h1>
        </div>
        <h1 className="text-sm lg:text-xl">${item.price}</h1>
      </div>
    );
  });

  return (
    <div className="">
      {/* navbar */}
      <div className="w-full border-b flex justify-between items-center px-10 lg:px-28 py-4">
        <h1 className="text-xl md:text-4xl font-medium text-mainColor">Logo</h1>
        <Link to="/cart">
          <Badge content={cartItems.length} >
            <IoBagHandleOutline className="text-2xl md:text-4xl text-mainColor hover:opacity-70" />
          </Badge>
        </Link>
      </div>
      {/* ****** end navbar  ****** */}
      {/* content */}
      <div className="flex">
        <div className="border-e w-[50%] py-6 !font-Poppins ">
          <div className="px-2 md:px-5">
            <h1 className="text-lg md:text-2xl text-mainDarkColor">Account</h1>
            <h1 className="text-[14px] md:text-md text-gray-600 pt-2">
              example@email.com
            </h1>
            <hr className="my-3 md:my-6 bg-blue-gray-400 border-none h-[1px]" />
          </div>
          {/* delivery form  */}
          <div className="px-1 md:px-5">
            <h1 className="text-lg md:text-2xl">Delivery</h1>

            <div className="my-2">
              <ReactFlagsSelect
                selected={selected}
                onSelect={(code) => setSelected(code)}
                searchable
                searchPlaceholder="Search countries"
              />
            </div>
            <div className="block lg:flex justify-between items-center gap-4 mb-2">
              <div className="mt-2">
                <Input
                  color="deep-orange"
                  label="First name"
                  className="text-md md:text-xl"
                  value={deliveryInfo.firstName}
                  onChange={(e) =>
                    setDeliveryInfo({
                      ...deliveryInfo,
                      firstName: e.target.value,
                    })
                  }
                />
              </div>
              <div className="mt-2">
                <Input
                  color="deep-orange"
                  label="Last name "
                  className="text-md md:text-xl "
                  alue={deliveryInfo.lastName}
                  onChange={(e) =>
                    setDeliveryInfo({
                      ...deliveryInfo,
                      lastName: e.target.value,
                    })
                  }
                />
              </div>
            </div>
            <Input
              color="deep-orange"
              label="Address"
              className="text-md md:text-xl "
              value={deliveryInfo.address}
              onChange={(e) =>
                setDeliveryInfo({ ...deliveryInfo, address: e.target.value })
              }
            />
            <div className="block lg:flex lg:justify-between lg:items-center lg:gap-1 mt-2">
              <div className="mt-2">
                <Input
                  color="deep-orange"
                  label="City"
                  className="text-md md:text-xl "
                  alue={deliveryInfo.city}
                  onChange={(e) =>
                    setDeliveryInfo({ ...deliveryInfo, city: e.target.value })
                  }
                />
              </div>
              <div className="mt-2">
                <Input
                  color="deep-orange"
                  label="Governorate"
                  className=" text-md md:text-xl "
                  alue={deliveryInfo.governorate}
                  onChange={(e) =>
                    setDeliveryInfo({
                      ...deliveryInfo,
                      governorate: e.target.value,
                    })
                  }
                />
              </div>
              <div className="mt-2">
                <Input
                  color="deep-orange"
                  label="Postal code"
                  className="text-md md:text-xl  "
                  alue={deliveryInfo.postalCode}
                  onChange={(e) =>
                    setDeliveryInfo({
                      ...deliveryInfo,
                      postalCode: e.target.value,
                    })
                  }
                />
              </div>
            </div>
            <div className="mt-4">
              <Button
                disabled={!deliveryInfo.postalCode}
                className="text-md md:text-xl bg-mainColor normal-case w-full"
              >
                Pay Now
              </Button>
            </div>
          </div>
          {/* ***** end delivery form ***** */}
          <hr className="mt-6 h-[1px] w-full bg-blue-gray-400 border-none" />
          {/* footer */}
          <footer className="w-full text-center mt-4 text-sm text-gray-600 font-Poppins">
            All rights reserved Eco Store
          </footer>
          {/* End footer */}
        </div>
        <div className="px-2 lg:px-5 py-5 bg-gray-100 h-screen overflow-scroll">
          {cardProductJSX}
          <div className="grid grid-cols-2 gap-2 mt-6">
            <div className="text-sm md:text-lg text-start">Subtotal</div>
            <div className="text-sm md:text-lg text-end">${totalAmount}</div>
            <div className=" text-sm md:text-lg text-start">Shipping</div>
            <div className="text-end text-[14px] md:text-lg">
              {Object.keys(deliveryInfo).length < 6
                ? "Enter shipping address"
                : "$10"}
            </div>
            <div className="text-start">Total</div>
            <div className="text-end">
              <span className="text-sm">USD </span>$
              <span>
                {Object.keys(deliveryInfo).length < 6
                  ? "--"
                  : Number(totalAmount) + 10}
              </span>
            </div>
          </div>
        </div>
      </div>
      {/* **** end content **** */}
    </div>
  );
};

export default Checkout;

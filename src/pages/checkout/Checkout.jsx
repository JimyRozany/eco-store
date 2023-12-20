import { useEffect, useState } from "react";

// icons
import { Button, Input, Badge } from "@material-tailwind/react";

import { IoBagHandleOutline } from "react-icons/io5";

import ReactFlagsSelect from "react-flags-select";

// images
import airpods from "../../images/airpods.png";

const Checkout = () => {
  const [selected, setSelected] = useState("EG");
  const [postalCode, setPostalCode] = useState(null);

  return (
    <div className="">
      {/* navbar */}
      <div className="w-full border-b flex justify-between items-center px-10 lg:px-40 py-4">
        <h1 className="text-4xl font-medium text-mainColor">Logo</h1>
        <Button variant="text" className="hover:bg-transparent p-0">
          <IoBagHandleOutline className="text-4xl text-mainColor hover:opacity-70" />
        </Button>
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
                  label="First name (optional)"
                  className="text-md md:text-xl"
                />
              </div>
              <div className="mt-2">
                <Input
                  color="deep-orange"
                  label="Last name (optional)"
                  className="text-md md:text-xl "
                />
              </div>
            </div>
            <Input
              color="deep-orange"
              label="Address"
              className="text-md md:text-xl "
            />
            <div className="block lg:flex lg:justify-between lg:items-center lg:gap-1 mt-2">
              <div className="mt-2">
                <Input
                  color="deep-orange"
                  label="City"
                  className="text-md md:text-xl "
                />
              </div>
              <div className="mt-2">
                <Input
                  color="deep-orange"
                  label="Governorate"
                  className=" text-md md:text-xl "
                />
              </div>
              <div className="mt-2">
                <Input
                  color="deep-orange"
                  value={postalCode}
                  onChange={(e) => setPostalCode(e.target.value)}
                  label="Postal code (required)"
                  className="text-md md:text-xl  "
                />
              </div>
            </div>
            <div className="mt-4">
              <Button
                disabled={!postalCode}
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
        <div className="px-5 lg:px-20 py-10 w-[50%] bg-gray-100 h-screen overflow-scroll">
          <div className="flex justify-between items-center w-full">
            <div className="w-[200px] flex justify-between items-center gap-2">
              <Badge
                content="10"
                className="bg-[rgba(0,0,0,0.5)] p-0 text-sm md:text-md w-6 h-6 md:w-8 md:h-8"
              >
                <img
                  src={airpods}
                  alt=""
                  className="border border-blue-gray-400 w-full"
                />
              </Badge>
              <h1 className="text-xl">airpods</h1>
              {/* <div className="absolute ">1</div> */}
            </div>
            <h1 className="text-xl">$39.5</h1>
          </div>
          <div className="flex justify-between items-center w-full mt-2">
            <div className="w-[200px] flex justify-between items-center gap-2">
              <Badge
                content="10"
                className="bg-[rgba(0,0,0,0.5)] p-0 text-sm md:text-md w-6 h-6 md:w-8 md:h-8"
              >
                <img
                  src={airpods}
                  alt=""
                  className="border border-blue-gray-400 w-full"
                />
              </Badge>
              <h1 className="text-xl">airpods</h1>
              {/* <div className="absolute ">1</div> */}
            </div>
            <h1 className="text-xl">$39.5</h1>
          </div>
          <div className="flex justify-between items-center w-full mt-2">
            <div className="w-[200px] flex justify-between items-center gap-2">
              <Badge
                content="10"
                className="bg-[rgba(0,0,0,0.5)] p-0 text-sm md:text-md w-6 h-6 md:w-8 md:h-8"
              >
                <img
                  src={airpods}
                  alt=""
                  className="border border-blue-gray-400 w-full"
                />
              </Badge>
              <h1 className="text-xl">airpods</h1>
              {/* <div className="absolute ">1</div> */}
            </div>
            <h1 className="text-xl">$39.5</h1>
          </div>
          <div className="flex justify-between items-center w-full mt-2">
            <div className="w-[200px] flex justify-between items-center gap-2">
              <Badge
                content="10"
                className="bg-[rgba(0,0,0,0.5)] p-0 text-sm md:text-md w-6 h-6 md:w-8 md:h-8"
              >
                <img
                  src={airpods}
                  alt=""
                  className="border border-blue-gray-400 w-full"
                />
              </Badge>
              <h1 className="text-xl">airpods</h1>
              {/* <div className="absolute ">1</div> */}
            </div>
            <h1 className="text-xl">$39.5</h1>
          </div>
          <div className="flex justify-between items-center w-full mt-2">
            <div className="w-[200px] flex justify-between items-center gap-2">
              <Badge
                content="10"
                className="bg-[rgba(0,0,0,0.5)] p-0 text-sm md:text-md w-6 h-6 md:w-8 md:h-8"
              >
                <img
                  src={airpods}
                  alt=""
                  className="border border-blue-gray-400 w-full"
                />
              </Badge>
              <h1 className="text-xl">airpods</h1>
              {/* <div className="absolute ">1</div> */}
            </div>
            <h1 className="text-xl">$39.5</h1>
          </div>
          <div className="grid grid-cols-2 gap-2 mt-6">
            <div className="text-start">Subtotal</div>
            <div className="text-end">$39.5</div>
            <div className="text-start">Shipping</div>
            <div className="text-end text-[14px] md:text-lg">
              Enter shipping address
            </div>
            <div className="text-start">Total</div>
            <div className="text-end">
              <span>USD</span>$39.5
            </div>
          </div>
        </div>
      </div>
      {/* **** end content **** */}
    </div>
  );
};

export default Checkout;

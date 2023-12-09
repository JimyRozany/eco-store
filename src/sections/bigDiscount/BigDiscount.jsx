import { Button } from "@material-tailwind/react";
// images

import googlePixel from "../../images/google-pixel.jpg";
const BigDiscount = () => {
  return (
    // big discount section
    <div className="w-screen flex justify-center items-center">
      <div className="bg-gray-200 flex flex-col justify-center items-center pt-6 font-Poppins w-[90%]">
        {/* title section */}
        <h1 className="text-md font-medium text-gray-700 uppercase">
          Big Discount
        </h1>
        {/* ****** end title section ****** */}
        {/* product name */}
        <h1 className="text-xl font-semibold text-mainDarkColor my-2">
          Google Pixel Smart Phone
        </h1>
        {/* ****** end product name ****** */}
        {/* price */}
        <h1 className="text-2xl font-bold text-mainColor ">$350.00</h1>
        {/* ****** end price ****** */}

        <Button className="bg-mainColor rounded-full my-4 text-md normal-case">Shop Now</Button>

        <div className="w-[80%] h-40 sm:h-80 overflow-hidden ">
          <img src={googlePixel} alt="" className="w-full hover:scale-125 transition duration-700" />
        </div>
      </div>
    </div>
    // ******* end big discount section *******
  );
};

export default BigDiscount;

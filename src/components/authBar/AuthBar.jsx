import { Button } from "@material-tailwind/react";
import React from "react";
import { Link } from "react-router-dom";

function AuthBar() {
  return (
    <>
      {/* Authentication bar */}
      <div className="w-full text-[12px] lg:text-[18px]  px-5 py-2 flex justify-between border border-gray-300 text-[#323232] ">
        <p className="font-semibold mr-1">(+20)1153791575</p>
        <p className="font-medium mr-1">
          Tell a frined about Eco store & get 20% off"
        </p>
        <div className="flex gap-1 lg:gap-4 font-semibold">
          {/* currency */}
          <div className="">
            <p>USD</p>
            {/* TODO: icon down arrow */}
          </div>
          {/* ******** end currency ******** */}

          <p className="text-gray-300">|</p>
          {/* auth buttons */}
          <div className="flex gap-0 lg:gap-2">
            <Link to="/login">
              <Button
                variant="text"
                className="normal-case text-md py-0 px-2 font-medium"
              >
                login
              </Button>
            </Link>
            <span>/</span>
            <Link to="/signup">
              <Button
                variant="text"
                className="normal-case text-md py-0 px-2 font-medium"
              >
                Signup
              </Button>
            </Link>
          </div>
          {/* ******* end auth buttons ******* */}
        </div>
      </div>
    </>
  );
}

export default AuthBar;

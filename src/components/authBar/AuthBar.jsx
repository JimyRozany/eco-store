import React from "react";

function AuthBar() {
  return (
    <>
      {/* Authentication bar */}
      <div className="w-full text-[12px] md:text-lg  px-5 py-2 flex justify-between border border-gray-300 text-[#323232] ">
        <p className="font-semibold mr-1">(+20)1153791575</p>
        <p className="font-medium mr-1">
          Tell a frined about Eco store & get 20% off"
        </p>
        <div className="flex gap-4 font-semibold">
          {/* currency */}
          <div className="">
            <p>USD</p>
            {/* TODO: icon down arrow */}
          </div>
          {/* ******** end currency ******** */}

          <p className="text-gray-300">|</p>
          {/* auth buttons */}
          <div className="flex gap-2">
            <span>login</span>
            <span>/</span>
            <span>signup</span>
          </div>
          {/* ******* end auth buttons ******* */}
        </div>
      </div>
    </>
  );
}

export default AuthBar;

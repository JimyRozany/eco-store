import { Button } from "@material-tailwind/react";
import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <div className="font-poppins text-center">
        <h1 className="text-2xl text-mainColor font-semibold">My Logo</h1>
        <h1 className="text-6xl font-semibold text-mainDarkColor mt-6 mb-2">
          Opps! Error 404{" "}
        </h1>
        <p className="text-xl text-mainDarkColor">
          Sorry, But the page you are looking for does't exist!
        </p>
        <Link to="/">
          <Button className="mt-4 px-10 bg-mainColor text-2xl normal-case font-Poppins font-medium rounded-full">
            Go Home
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;

import { Card, Input, Button } from "@material-tailwind/react";
import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <div className="w-screen flex justify-center items-center">
      <Card color="transparent" shadow={true} className="font-Poppins p-4">
        <h1 className="text-mainDarkColor text-center text-4xl font-medium ">
          Signup
        </h1>
        <h1 className="mt-2 font-normal text-mainDarkColor text-sm">
          please register useing account detail bellow.
        </h1>
        <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
          <div className="mb-1 flex flex-col gap-6">
            <Input label="First Name" color="deep-orange" />
            <Input label="Last Name" color="deep-orange" />
            <Input label="Email" color="deep-orange" />
            <Input label="password" color="deep-orange" type="password" />
          </div>

          <Button className="mt-6 bg-mainColor normal-case text-xl" fullWidth>
            Signup
          </Button>
          <div className="mt-2">
            <span className="px-2 ">i have an account</span>
            <Link
              to="/login"
              className="mt-4 text-center  hover:text-mainColor hover:cursor-pointer duration-200"
            >
              Login
            </Link>
          </div>
        </form>
      </Card>
    </div>
  );
};

export default Signup;

import { Card, Input, Button } from "@material-tailwind/react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <Card color="transparent" shadow={true} className="font-Poppins p-4">
        <h1 className="text-mainDarkColor text-center text-4xl font-medium ">
          Login
        </h1>
        <h1 className="mt-2 font-normal text-mainDarkColor text-sm">
          please login useing account detail bellow.
        </h1>
        <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
          <div className="mb-1 flex flex-col gap-6">
            <Input label="Email" color="deep-orange" />
            <Input label="password" color="deep-orange" type="password" />
          </div>
          <p className="text-center text-mainDarkColor mt-2 hover:cursor-pointer hover:text-mainColor duration-200">
            Forgot your password
          </p>
          <Button className="mt-6 bg-mainColor normal-case text-xl" fullWidth>
            Login
          </Button>
          <Link to="/signup">
            <h1 className="mt-4 text-center font-normal hover:text-mainColor hover:cursor-pointer">
              Create Account
            </h1>
          </Link>
        </form>
      </Card>
    </div>
  );
};

export default Login;

import { Alert, Card, Input, Button, Spinner } from "@material-tailwind/react";
import { Link, useNavigate } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { authenticateThunk } from "../../features/auth/authSlice";
import { useEffect, useState } from "react";
const Login = () => {
  const [loginInputs, setLoginInputs] = useState({
    userName: "",
    password: "",
  });
  const navigate = useNavigate();

  const errorMessage = useSelector((state) => state.auth.errorMessage);
  const isLoading = useSelector((state) => state.auth.isLoading);
  const isAuth = JSON.parse(localStorage.getItem("isAuth"));

  const dispatch = useDispatch();

  const handleLogin = () => {
    dispatch(authenticateThunk(loginInputs));
  };

  useEffect(() => {
    if (isAuth) {
      navigate("/", { replace: true });
    }
  }, [isAuth]);

  return (
    <div className="w-screen  flex justify-center items-center ">
      <Card color="transparent" shadow={true} className="!font-Poppins p-4">
        {errorMessage && (
          <Alert
            open={errorMessage ? true : false}
            animate={{
              mount: { y: 0 },
              unmount: { y: 100 },
            }}
            color="red"
            className="shadow-md shadow-red-500"
          >
            {errorMessage}
          </Alert>
        )}
        <h1 className="text-mainDarkColor text-center text-4xl font-medium ">
          Login
        </h1>
        <h1 className="mt-2 font-normal text-mainDarkColor text-sm text-center">
          please login useing account detail bellow.
        </h1>

        <form
          className="mt-4 mb-2 w-80 max-w-screen-lg sm:w-96"
          preventScrollReset={true}
        >
          <div className="mb-1 flex flex-col gap-6">
            <Input
              label="user name"
              color="deep-orange"
              value={loginInputs.userName}
              onChange={(e) => {
                setLoginInputs({ ...loginInputs, userName: e.target.value });
              }}
            />
            <Input
              label="password"
              color="deep-orange"
              type="password"
              value={loginInputs.password}
              onChange={(e) => {
                setLoginInputs({ ...loginInputs, password: e.target.value });
              }}
            />
          </div>
          <p className="text-center text-mainDarkColor mt-2 hover:cursor-pointer hover:text-mainColor duration-200">
            Forgot your password
          </p>
          <Button
            className="mt-6 bg-mainColor normal-case text-xl"
            fullWidth
            onClick={() => handleLogin()}
            disabled={isLoading}
            type="submit"
          >
            {isLoading ? (
              <div className="flex justify-center items-center">
                <Spinner className="h-6 w-6" />
              </div>
            ) : (
              "Login"
            )}
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

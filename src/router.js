import { createBrowserRouter } from "react-router-dom";
// layouts
import { DefaultLayout } from "./layouts/index";
// pages
import {
  Home,
  About,
  NotFound,
  Login,
  Signup,
  Cart,
  Product,
  AllProducts,
  Like,
  SearchResult,
  Checkout,
} from "./pages/index";
import PrivateRoutes from "./utilities/PrivateRoutes";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <DefaultLayout />,
    errorElement: <NotFound />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "signup",
        element: <Signup />,
      },
      {
        path: "cart",
        element: <Cart />,
      },
      {
        path: "show-product/:productId",
        element: <Product />,
      },
      {
        path: "all-products",
        element: <AllProducts />,
      },
      {
        path: "liked",
        element: <Like />,
      },
      {
        path: "search-result",
        element: <SearchResult />,
      },
    ],
  },
  {
    path: "/",
    element: <PrivateRoutes />,
    children: [
      {
        path: "checkout",
        element: <Checkout />,
      },
    ],
  },
]);

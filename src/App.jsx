import "./App.css";
import { Route, Routes } from "react-router-dom";
// layouts
import { DefaultLayout, GuestLayout } from "./layouts/index";

// pages
import {
  Home,
  About,
  NotFound,
  Login,
  Signup,
  Cart,
  Product,
  Checkout,
  AllProducts,
} from "./pages/index";

//-----------------------

import { SearchDialog } from "./components/searchDialog/SearchDialog";
import ScrollToTopOnMount from "./components/scrollToTopOnMount/ScrollToTopOnMount";

function App() {
  const token = null;

  return (
    <>
      <SearchDialog />
      <ScrollToTopOnMount />
      <Routes>
        <Route path="/" element={token ? <DefaultLayout /> : <GuestLayout />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/show-product/:productId" element={<Product />} />
          <Route path="/all-products" element={<AllProducts />} />
        </Route>
        <Route path="/checkout" element={<Checkout />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;

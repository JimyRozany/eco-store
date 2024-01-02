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
  Like,
  SearchResult,
} from "./pages/index";

// components

import { SearchDialog } from "./components/searchDialog/SearchDialog";
import ScrollToTopOnMount from "./components/scrollToTopOnMount/ScrollToTopOnMount";
import ToastMessage from "./components/toastMessage/ToastMessage";
import { useSelector } from "react-redux";

function App() {
  
  const token = localStorage.getItem("accessToken");

  return (
    <>
      <SearchDialog />
      <ScrollToTopOnMount />
      <ToastMessage />

      <Routes>
        <Route path="/" element={token ? <DefaultLayout /> : <GuestLayout />}>
          {/* <Route index element={<Home />} /> */}
          {/* <Route path="/about" element={<About />} /> */}
          {/* <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} /> */}
          {/* <Route path="/cart" element={<Cart />} />
          <Route path="/show-product/:productId" element={<Product />} /> */}
          {/* <Route path="/all-products" element={<AllProducts />} />
          <Route path="/liked" element={<Like />} />
          <Route path="/search-result" element={<SearchResult />} /> */}
        </Route>
        <Route path="/checkout" element={<Checkout />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;

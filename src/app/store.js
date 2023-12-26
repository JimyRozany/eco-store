import { configureStore } from "@reduxjs/toolkit";
import searchReducer from "../features/search/searchSlice";
import fetchProductsSlice from "../features/fetchProducts/fetchProductsSlice";
import cartReducer from "../features/cart/cartSlice";
export const store = configureStore({
  reducer: {
    fetchProducts: fetchProductsSlice,
    search: searchReducer,
    cart: cartReducer,
  },
});

import { configureStore } from "@reduxjs/toolkit";
import searchReducer from "../features/search/searchSlice";
import fetchProductsSlice from "../features/fetchProducts/fetchProductsSlice";
import cartReducer from "../features/cart/cartSlice";
import likeReducer from "../features/like/likeSlice";
import toastMessageReducer from "../features/toastMessage/toastMessage";
export const store = configureStore({
  reducer: {
    fetchProducts: fetchProductsSlice,
    search: searchReducer,
    cart: cartReducer,
    like: likeReducer,
    toastMessage: toastMessageReducer,
  },
});

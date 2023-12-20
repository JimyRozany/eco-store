import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchProductsThunk = createAsyncThunk("getAllProducts", async () => {
  const response = await axios.get("https://fakestoreapi.com/products");
  return response.data;
});

const fetchProductsSlice = createSlice({
  name: "fetchProducts",
  initialState: {
    products: [],
    isLoading: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProductsThunk.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(fetchProductsThunk.fulfilled, (state, action) => {
        console.log("from Slice -------------------",action.payload);
        state.products = action.payload;
        state.isLoading = false;
      });
  },
});

export default fetchProductsSlice.reducer;

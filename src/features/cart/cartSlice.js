import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cartSlice",
  initialState: {
    cartItems: [],
    totalAmount: 0,
  },
  reducers: {
    addToCart: (state, action) => {
      /* selecte index of product is exist in cart and add or modify quantity */
      const indexItem = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      );
      if (indexItem >= 0) {
        state.cartItems[indexItem].cartItemQuantity += 1;
      } else {
        const tempProduct = { ...action.payload, cartItemQuantity: 1 };
        state.cartItems.push(tempProduct);
      }
      localStorage.setItem('cartItems' ,JSON.stringify(state.cartItems))
      localStorage.setItem('cartTotalAmount' ,JSON.stringify(state.totalAmount))
    },
    removeFromCart: (state, action) => {
      state.cartItems = state.cartItems.filter(
        (item) => item.id !== action.payload.id
      );
      localStorage.setItem('cartItems' ,JSON.stringify(state.cartItems))
      localStorage.setItem('cartTotalAmount' ,JSON.stringify(state.totalAmount))
    },
    incrementQuantity: (state, action) => {
      const indexItem = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      );
      state.cartItems[indexItem].cartItemQuantity += 1;
      localStorage.setItem('cartItems' ,JSON.stringify(state.cartItems))
      localStorage.setItem('cartTotalAmount' ,JSON.stringify(state.totalAmount))
    },
    decrementQuantity: (state, action) => {
      const indexItem = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      );
      if (state.cartItems[indexItem].cartItemQuantity > 1) {
        state.cartItems[indexItem].cartItemQuantity -= 1;
      }
      localStorage.setItem('cartItems' ,JSON.stringify(state.cartItems))
      localStorage.setItem('cartTotalAmount' ,JSON.stringify(state.totalAmount))
      
    },
    clearCart: (state) => {
      state.cartItems = [];
    },
    sumTotalPrice:(state)=>{
      let total = 0
      state.cartItems.map(
        (item) => (total += item.price * item.cartItemQuantity)
      );
      state.totalAmount = total.toFixed(2)
      localStorage.setItem('cartItems' ,JSON.stringify(state.cartItems))
      localStorage.setItem('cartTotalAmount' ,JSON.stringify(state.totalAmount))
    },
    
    getCart:(state)=>{
      const resultItems = JSON.parse(localStorage.getItem('cartItems'))
      const resultTotalAmount = JSON.parse(localStorage.getItem('cartTotalAmount'))
      state.cartItems = resultItems ;
      state.totalAmount = resultTotalAmount
    }
  },
});

export const {
  addToCart,
  removeFromCart,
  incrementQuantity,
  decrementQuantity,
  clearCart,
  sumTotalPrice,
  
  getCart
} = cartSlice.actions;

export default cartSlice.reducer;

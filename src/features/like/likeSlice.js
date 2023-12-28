import { createSlice } from "@reduxjs/toolkit";


export const likeSlice = createSlice({
  name: "like",
  initialState: {
    likedProducts: [],
  },
  reducers: {
    addToLike: (state, action) => {
      if (state.likedProducts.length === 0) {
        state.likedProducts.push(action.payload);
      } else {
        // check product is exist in like list
        const result = state.likedProducts.find(
          (item) => item.id === action.payload.id
        );
        if (!result) {
          state.likedProducts.push(action.payload);
        }
      }
      localStorage.setItem("liked", JSON.stringify(state.likedProducts));
    },
    removeFromLike: (state, action) => {
      state.likedProducts = state.likedProducts.filter(
        (item) => item.id !== action.payload.id
      );
      localStorage.setItem("liked", JSON.stringify(state.likedProducts));
    },
    getLiked:(state)=>{
        state.likedProducts = JSON.parse(localStorage.getItem("liked"))
    }
  },
});

export const { addToLike ,removeFromLike ,getLiked} = likeSlice.actions;

export default likeSlice.reducer;

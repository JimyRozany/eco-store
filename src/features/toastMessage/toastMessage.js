import { createSlice } from "@reduxjs/toolkit";

const toastMessage = createSlice({
  name: "toastMessage",
  initialState: {
    isOpen: false,
    message: "",
  },
  reducers: {
    openToast: (state, action) => {
      state.message = action.payload;
      state.isOpen = true;
    },
    closeToast: (state) => {
      state.isOpen = false;
    },
  },
});

export const { openToast, closeToast } = toastMessage.actions;

export default toastMessage.reducer;

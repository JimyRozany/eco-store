import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  openDialog: false,
};

export const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    showHideDialog: (state) => {
      state.openDialog = !state.openDialog ;
    },
  },
});

export const { showHideDialog } = searchSlice.actions;

export default searchSlice.reducer;

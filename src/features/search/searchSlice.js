import { createSlice } from "@reduxjs/toolkit";

export const searchSlice = createSlice({
  name: "search",
  initialState: {
    openDialog: false,
    result: [],
    searchKey: "",
  },
  reducers: {
    showHideDialog: (state) => {
      state.openDialog = !state.openDialog;
    },
    searchAction: (state, action) => {
      const searchKey = action.payload;
      const products = JSON.parse(localStorage.getItem("allProducts"));
      const result = products.filter((item) => {
        if (item.title.toLowerCase().includes(searchKey.toLowerCase().trim())) {
          return true;
        } else if (
          item.description
            .toLowerCase()
            .includes(searchKey.toLowerCase().trim())
        ) {
          return true;
        } else if (
          item.category.toLowerCase().includes(searchKey.toLowerCase().trim())
        ) {
          return true;
        }
      });
      state.result = result;
      state.searchKey = searchKey;
    },
  },
});

export const { showHideDialog, searchAction } = searchSlice.actions;

export default searchSlice.reducer;

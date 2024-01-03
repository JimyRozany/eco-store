import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const loginThunk = createAsyncThunk(
  "loginThunk",
  async ({ userName, password }) => {
    const response = await axios.post("https://fakestoreapi.com/auth/login", {
      username: userName,
      password: password,
      //   username: "mor_2314",
      //   password: "83r5^",
    });
    return response;
  }
);

export const getUserInfoThunk = createAsyncThunk(
  "getUserInfoThunk",
  async () => {
    const response = await axios.get("https://fakestoreapi.com/users/1");
    return response;
  }
);

const authSlice = createSlice({
  name: "authentication",
  initialState: {
    userInfo: {},
    token: "",
    isLoading: false,
    errorMessage: "",
    isAuth: false,
  },
  reducers: {
    setInitialAuth: (state) => {
      state.isAuth = JSON.parse(localStorage.getItem("isAuth"));
    },
    logout: (state) => {
      state.userInfo = {};
      state.token = "";
      state.isAuth = false;
      localStorage.removeItem("accessToken");
      localStorage.removeItem("isAuth");
      localStorage.removeItem("USER_INFO");
      state.isLoading = false
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginThunk.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(loginThunk.rejected, (state) => {
        state.errorMessage = "Incorrect user name or password.";
        state.isLoading = false;
      })
      .addCase(loginThunk.fulfilled, (state, action) => {
        state.token = action.payload.data.token;
        localStorage.setItem(
          "accessToken",
          JSON.stringify(action.payload.data.token)
        );
        state.userInfo = JSON.parse(action.payload.config.data);
        state.isLoading = false;
        state.isAuth = true;
        console.log("from auth slice isAuth is ", state.isAuth);
        localStorage.setItem("isAuth", JSON.stringify(state.isAuth));
      })
      .addCase(getUserInfoThunk.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getUserInfoThunk.fulfilled, (state, action) => {
        state.userInfo = action.payload.data;
        localStorage.setItem("USER_INFO", JSON.stringify(action.payload.data));
      });
  },
});

export const { setInitialAuth, logout } = authSlice.actions;

export default authSlice.reducer;

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const authenticateThunk = createAsyncThunk(
  "authenticationThunk",
  async ({userName ,password}) => {
    const response = await axios.post("https://fakestoreapi.com/auth/login", {
      username: userName,
      password: password,
    //   username: "mor_2314",
    //   password: "83r5^",
    });
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
    isAuth:false
  },
  reducers: {
    setInitialAuth: (state) => {
      state.isAuth = JSON.parse(localStorage.getItem("isAuth"))
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(authenticateThunk.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(authenticateThunk.rejected, (state) => {
        state.errorMessage = "Incorrect user name or password.";
        state.isLoading = false
      })
      .addCase(authenticateThunk.fulfilled, (state, action) => {
        state.token = action.payload.data.token;
        localStorage.setItem("accessToken" ,JSON.stringify(action.payload.data.token))
        state.userInfo = JSON.parse(action.payload.config.data)
        state.isLoading = false
        state.isAuth = true
        console.log('from auth slice isAuth is ' , state.isAuth);
        localStorage.setItem("isAuth" ,JSON.stringify(state.isAuth))
      });
  },
});

export const { setInitialAuth } = authSlice.actions;

export default authSlice.reducer;

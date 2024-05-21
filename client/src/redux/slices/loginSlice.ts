/* eslint-disable @typescript-eslint/no-explicit-any */
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const loginUser = createAsyncThunk(
  "loginUser",
  async (payload, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        `http://localhost:3000/users/api/login`,
        payload
      );
      return response;
    } catch (err: any) {
      console.log(err.message);
      if (err.response && err.response.data) {
        return rejectWithValue(err.response.data.message);
      } else {
        return rejectWithValue("An unknown error occurred");
      }
    }
  }
);

const initialState = {
  user: {},
  isLoading: false,
  isError: "",
};

const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        (state.isLoading = true), (state.user = {}), (state.isError = "");
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = action.payload;
        state.isError = "";
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.isLoading = false;
        state.user = {};
        state.isError = action.payload as string;
      });
  },
});

export default loginSlice.reducer;

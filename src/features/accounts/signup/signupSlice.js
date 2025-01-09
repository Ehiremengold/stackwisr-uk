import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { ROOT_URL } from "../../../utils";

const initialState = {
  isError: false,
  isLoading: false,
  isSuccess: false,
  // isAuthenticated: false,
  // accessToken: "",
  // refreshToken: "",
  // email: "",
};

export const signUp = createAsyncThunk(
  "auth/signup",
  async (formData, thunkAPI) => {
    try {
      const response = await axios.post(
        `${ROOT_URL}/api/create-account/`,
        formData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log(response.data);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

const signUpSlice = createSlice({
  name: "signUp",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(signUp.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(signUp.fulfilled, (state, { payload }) => {
        // const { email, access, refresh } = payload;
        state.isLoading = false;
        state.isSuccess = true;
        // state.email = email;
        // state.accessToken = access;
        // state.refreshToken = refresh;
      })
      .addCase(signUp.rejected, (state) => {
        state.isError = true;
      });
  },
});

export default signUpSlice.reducer;

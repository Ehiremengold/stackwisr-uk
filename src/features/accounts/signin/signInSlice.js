import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { ROOT_URL } from "../../../utils";

const initialState = {
  isError: false,
  isLoading: false,
  isAuthenticated: JSON.parse(localStorage.getItem("auth_status")) || false,
  accessToken: "",
  refreshToken: "",
  email: localStorage.getItem("current_user_email") || "",
};

export const signIn = createAsyncThunk(
  "auth/signin",
  async (formData, thunkAPI) => {
    try {
      const response = await axios.post(`${ROOT_URL}/api/token/`, formData, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      console.log(response.data);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

const signInSlice = createSlice({
  name: "signIn",
  initialState,
  reducers: {
    logout: (state) => {
      localStorage.clear();
      state.isAuthenticated = false; // Reset authentication
      state.email = ""; // Reset email;
      // return { ...initialState };
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(signIn.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(signIn.fulfilled, (state, { payload }) => {
        const { email, access, refresh } = payload;
        localStorage.setItem("current_user_email", email);
        localStorage.setItem("auth_status", true);

        state.isLoading = false;
        state.isAuthenticated = true;
        state.email = email;
        state.accessToken = access;
        state.refreshToken = refresh;
      })
      .addCase(signIn.rejected, (state) => {
        state.isError = true;
      });
  },
});

export const { logout } = signInSlice.actions;

export default signInSlice.reducer;

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { ROOT_URL } from "../../../utils";

const initialState = {
  isError: false,
  isLoading: false,
  isAuthenticated: false,
  accessToken: "",
  refreshToken: "",
  email: "",
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
      return { ...initialState };
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(signIn.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(signIn.fulfilled, (state, { payload }) => {
        const { email, access, refresh } = payload;
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

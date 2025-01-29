import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { ROOT_URL } from "../../../utils";

const initialState = {
  isSuccess: false,
  isError: false,
  isLoading: false,
  errorMsg: [],
};

// sample data for this:
// const sample_data = {
//   "email": "user@example.com"
// }
export const forgotPassword = createAsyncThunk(
  "auth/forgotPassword",
  async (formData, thunkAPI) => {
    try {
      const response = await axios.post(
        `${ROOT_URL}/api/auth/password-reset/`,
        formData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

// sample data for this:
// const sample_data = {
//   uid: "abc123",
//   token: "def456",
//   new_password: "NewStrongPassword123!",
// };
export const forgotPasswordConfirm = createAsyncThunk(
  "auth/forgotPasswordConfirm",
  async (formData, thunkAPI) => {
    try {
      const response = await axios.post(
        `${ROOT_URL}/api/auth/password-reset-confirm/`,
        formData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

const forgotPasswordSlice = createSlice({
  name: "passwordReset",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(forgotPassword.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(forgotPassword.fulfilled, (state) => {
        state.isSuccess = true;
        state.isLoading = false;
      })
      .addCase(forgotPassword.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.isError = true;
        state.errorMsg = payload.email[0];
      })
      .addCase(forgotPasswordConfirm.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(forgotPasswordConfirm.fulfilled, (state) => {
        state.isSuccess = true;
        state.isLoading = false;
      })
      .addCase(forgotPasswordConfirm.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.isError = true;
        state.errorMsg = payload.new_password.join(' ');
      });
  },
});

export default forgotPasswordSlice.reducer;

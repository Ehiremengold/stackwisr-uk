import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { ROOT_URL } from "../../../utils";

const initialState = {
  isSuccess: false,
  isError: false,
  isLoading: false,
  errorMsg: {},
};

// sample data for this:
// const sample_data = {
//   "email": "user@example.com"
// }
export const passwordReset = createAsyncThunk(
  "auth/passwordReset",
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
export const passwordResetConfirm = createAsyncThunk(
  "auth/passwordResetConfirm",
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

const passwordResetSlice = createSlice({
  name: "passwordReset",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(passwordReset.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(passwordReset.fulfilled, (state) => {
        state.isSuccess = true;
        state.isLoading = false;
      })
      .addCase(passwordReset.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
        state.errorMsg = state.payload;
      })
      .addCase(passwordResetConfirm.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(passwordResetConfirm.fulfilled, (state) => {
        state.isSuccess = true;
        state.isLoading = false;
      })
      .addCase(passwordResetConfirm.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
        state.errorMsg = state.payload;
      });
  },
});

export default passwordResetSlice.reducer;

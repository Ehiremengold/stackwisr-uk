import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { ROOT_URL } from "../../../utils";

const initialState = {
  isError: false,
  isLoading: false,
  isSuccess: false,
  errorMsg: "",
};

export const createAccount = createAsyncThunk(
  "auth/createAccount",
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

const createAccountSlice = createSlice({
  name: "createAccount",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(createAccount.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createAccount.fulfilled, (state) => {
        state.isLoading = false;
        state.isSuccess = true;
      })
      .addCase(createAccount.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.isError = true;
        if (payload && payload.password) {
          state.errorMsg = payload.password.join("\n");
        } else if(payload && payload.email) {
          state.errorMsg = payload.email;
        }
        // state.errorMsg = payload.join(", ");
      });
  },
});

export default createAccountSlice.reducer;

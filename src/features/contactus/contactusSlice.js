import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { ROOT_URL } from "../../utils";

const initialState = {
  isLoading: false,
  isError: false,
  isSuccess: false,
};

export const contactUs = createAsyncThunk(
  "create/contactUs",
  async (formData, thunkAPI) => {
    try {
      const response = await axios.post(
        `${ROOT_URL}/api/contact-us/`,
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

const contactSlice = createSlice({
  name: "contactUs",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(contactUs.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(contactUs.fulfilled, (state) => {
        state.isLoading = false;
        state.isSuccess = true;
      })
      .addCase(contactUs.rejected, (state) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.isError = true;
      });
  },
});

export default contactSlice.reducer

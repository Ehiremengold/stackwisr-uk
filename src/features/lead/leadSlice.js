import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { ROOT_URL } from "../../utils";
import axios from "axios";

const initialState = {
  isLoading: false,
  isError: false,
  isSuccess: false,
};

export const createLead = createAsyncThunk(
  "create/lead",
  async (formData, thunkAPI) => {
    try {
      const response = await axios.post(`${ROOT_URL}/api/leads/`, formData, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

const leadSlice = createSlice({
  name: "leads",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(createLead.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createLead.fulfilled, (state) => {
        state.isLoading = false;
        state.isSuccess = true;
      })
      .addCase(createLead.rejected, (state) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.isError = true;
      });
  },
});

export default leadSlice.reducer;

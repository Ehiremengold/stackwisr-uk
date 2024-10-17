import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { ROOT_URL } from "../../utils";
import axios from "axios";

const initialState = {
  isLoading: false,
  isError: false,
  testimonials: [],
};
export const getTestimonials = createAsyncThunk(
  "testimonies/getTestimonial",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get(`${ROOT_URL}/api/testimonies/`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

const testimonialSlice = createSlice({
  name: "testimonials",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getTestimonials.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getTestimonials.fulfilled, (state, action) => {
        state.isLoading = false;
        state.testimonials = action.payload;
      })
      .addCase(getTestimonials.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
      });
  },
});

export default testimonialSlice.reducer;

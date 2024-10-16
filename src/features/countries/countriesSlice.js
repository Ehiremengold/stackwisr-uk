import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  countries: [],
  isLoading: false,
  isError: false,
};
const API_URL = "https://restcountries.com/v3.1/all?fields=name";

export const getCountries = createAsyncThunk(
  "countries/getCountries",
  async (_, thunkAPI) => {
    try {
      const resp = await axios.get(API_URL);      
      const sortedCountries = resp.data
        .map((country) => country.name.common)
        .sort((a, b) => a.localeCompare(b));  
      return sortedCountries;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

const countriesSlice = createSlice({
  name: "countries",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getCountries.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getCountries.fulfilled, (state, action) => {
        state.isLoading = false;
        state.countries = action.payload;
      })
      .addCase(getCountries.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
      });
  },
});

export default countriesSlice.reducer;

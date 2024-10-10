import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { ROOT_URL } from "../../utils";

const initialData = {
  isLoading: false,
  isError: true,
  careerpaths: [],
  careerpath: [],
};

const getCareerpaths = createAsyncThunk(
  "careerpaths/getCareerpaths",
  async (_, thunkAPI) => {
    try {
      const response = await axios(`${ROOT_URL}/api/careerpaths/`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

const getCareerpathDetail = createAsyncThunk(
  "careerpaths/getCareerpathsDetail",
  async (slug, thunkAPI) => {
    try {
      const response = await axios(`${ROOT_URL}/api/careerpaths/${slug}/`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

const careerpathSlice = createSlice({
  name: "careerpaths",
  initialData,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getCareerpaths.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getCareerpaths.fulfilled, (state, action) => {
        state.isLoading = false;
        state.careerpaths = action.payload;
      })
      .addCase(getCareerpaths.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
      })
      .addCase(getCareerpathDetail.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getCareerpathDetail.fulfilled, (state, action) => {
        state.isLoading = false;
        state.careerpath = action.payload;
      })
      .addCase(getCareerpathDetail.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
      });
  },
});

export default careerpathSlice.reducer;

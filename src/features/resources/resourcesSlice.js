import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { ROOT_URL } from "../../utils";

const initialState = {
  resources: [],
  isLoading: false,
  isError: false,
  more: false,
  page: 1,
};
export const getResources = createAsyncThunk(
  "resources/getResources",
  async (page = 1, thunkAPI) => {
    try {
      const response = await axios.get(`${ROOT_URL}/api/resources/`, {
        params: { page },
      });
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

export const resourcesSlice = createSlice({
  name: "resources",
  initialState,
  reducers: {
    incrementResources: (state) => {
      state.page += 1;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getResources.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getResources.fulfilled, (state, action) => {
        state.isLoading = false;
        state.resources = [...state.resources, ...action.payload.results];
        action.payload.next ? (state.more = true) : (state.more = false);
      })
      .addCase(getResources.rejected, (state) => {
        state.isLoading = false;
        state.isError = false;
      });
  },
});

export const { incrementResources } = resourcesSlice.actions;
export default resourcesSlice.reducer;

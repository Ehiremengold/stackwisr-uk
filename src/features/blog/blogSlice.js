import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { ROOT_URL } from "../../utils.js";

const initialState = {
  isLoading: false,
  isError: false,
  more: false,
  posts: [],
  latestPosts: [],
  post: [],
  page: 1,
};

const getPostDetail = createAsyncThunk(
  "blog/getPostDetail",
  async (slug, thunkAPI) => {
    try {
      const response = await axios(`${ROOT_URL}/api/blog/post/${slug}/`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

const getPosts = createAsyncThunk(
  "blog/getPosts",
  async (page = 1, thunkAPI) => {
    try {
      const response = await axios(`${ROOT_URL}/api/blog/posts/`, {
        params: { page },
      });
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

// 3 latest blog posts
const latestBlogPosts = createAsyncThunk(
  "blog/latestPosts",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get(`${ROOT_URL}/api/blog/latest-posts/`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

export const blogSlice = createSlice({
  name: "blog",
  initialState,
  reducers: {
    incrementPage: (state) => {
      state.page += 1;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getPosts.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getPosts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.posts = [...state.posts, ...action.payload.results];
        action.payload.next ? (state.more = true) : (state.more = false);
      })
      .addCase(getPosts.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
      })
      .addCase(getPostDetail.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getPostDetail.fulfilled, (state, action) => {
        state.isLoading = false;
        state.post = action.payload;
      })
      .addCase(getPostDetail.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
      })
      .addCase(latestBlogPosts.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(latestBlogPosts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.latestPosts = action.payload;
      })
      .addCase(latestBlogPosts.rejected, (state) => {
        state.isLoading = false;
      });
  },
});

export { getPostDetail, getPosts, latestBlogPosts };
export const { incrementPage } = blogSlice.actions;
export default blogSlice.reducer;

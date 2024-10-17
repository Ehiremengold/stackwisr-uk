import { configureStore } from "@reduxjs/toolkit";
import blogReducer from "./features/blog/blogSlice.js";
import careerpathReducer from "./features/careerpaths/careerpathSlice.js";
import countriesReducer from "./features/countries/countriesSlice.js";
import testimonialReducer from "./features/testimonials/testimonialSlice.js";

export const store = configureStore({
  reducer: {
    blog: blogReducer,
    careerpath: careerpathReducer,
    countries: countriesReducer,
    testimonials: testimonialReducer,
  },
});

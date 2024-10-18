import { configureStore } from "@reduxjs/toolkit";
import blogReducer from "./features/blog/blogSlice.js";
import careerpathReducer from "./features/careerpaths/careerpathSlice.js";
import countriesReducer from "./features/countries/countriesSlice.js";
import testimonialReducer from "./features/testimonials/testimonialSlice.js";
import leadReducer from "./features/lead/leadSlice.js";

export const store = configureStore({
  reducer: {
    blog: blogReducer,
    careerpath: careerpathReducer,
    countries: countriesReducer,
    testimonials: testimonialReducer,
    leads: leadReducer,
  },
});

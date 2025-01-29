import { configureStore } from "@reduxjs/toolkit";
import blogReducer from "./features/blog/blogSlice.js";
import careerpathReducer from "./features/careerpaths/careerpathSlice.js";
import countriesReducer from "./features/countries/countriesSlice.js";
import testimonialReducer from "./features/testimonials/testimonialSlice.js";
import leadReducer from "./features/lead/leadSlice.js";
import resourcesReducer from "./features/resources/resourcesSlice.js";
import contactUsReducer from "./features/contactus/contactusSlice.js";
import signInReducer from "./features/accounts/signin/signInSlice.js";
import createAccountReducer from "./features/accounts/signup/createAccountSlice.js";
import forgotPasswordReducer from "././features/accounts/forgotpassword/forgotpassswordSlice.js";

export const store = configureStore({
  reducer: {
    blog: blogReducer,
    careerpath: careerpathReducer,
    countries: countriesReducer,
    testimonials: testimonialReducer,
    leads: leadReducer,
    resources: resourcesReducer,
    contactUs: contactUsReducer,
    signIn: signInReducer,
    createAccount: createAccountReducer,
    forgotPassword: forgotPasswordReducer,
  },
});

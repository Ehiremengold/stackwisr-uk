import { configureStore } from "@reduxjs/toolkit";
import blogReducer from "./features/blog/blogSlice.js";
import careerpathReducer from "./features/careerpaths/careerpathSlice.js";
import countriesReducer from "./features/countries/countriesSlice.js";
import testimonialReducer from "./features/testimonials/testimonialSlice.js";
import leadReducer from "./features/lead/leadSlice.js";
import resourcesReducer from "./features/resources/resourcesSlice.js";
import contactUsReducer from "./features/contactus/contactusSlice.js";
import signInReducer from "./features/accounts/signin/signInSlice.js";
import signUpReducer from "./features/accounts/signup/signupSlice.js";
import passwordResetReducer from "./features/accounts/passwordreset/passwordresetSlice.js";

export const store = configureStore({
  reducer: {
    blog: blogReducer,
    careerpath: careerpathReducer,
    countries: countriesReducer,
    testimonials: testimonialReducer,
    leads: leadReducer,
    resources: resourcesReducer,
    contactUs: contactUsReducer, // to test
    signIn: signInReducer, // to test
    signUp: signUpReducer, // to test
    passwordReset: passwordResetReducer, // to test
  },
});

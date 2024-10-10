import "./Testimonies.css";
import TestimoniesHero from "./components/TestimoniesHero/TestimoniesHero.jsx";
import { Testimonial } from "../../components/Sections/export.js";
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";

const Testimonies = () => {
  return (
    <>
      <Helmet>
        <title>StackwisR | Testimonies</title>
      </Helmet>
      <motion.div
        initial={{ opacity: 0, y: 50 }} // Starts off-screen and transparent
        animate={{ opacity: 1, y: 0 }} // Moves into view and becomes fully visible
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.7 }} // Customize the speed and easing
      >
        <TestimoniesHero />
      </motion.div>
      <br />
      <Testimonial />
    </>
  );
};

export default Testimonies;

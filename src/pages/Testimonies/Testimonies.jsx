import "./Testimonies.css";
import TestimoniesHero from "./components/TestimoniesHero/TestimoniesHero.jsx";
import { Testimonial } from "../../components/Sections/export.js";
const Testimonies = () => {
  return (
    <>
      <TestimoniesHero />
      <br/>
      <Testimonial />
    </>
  );
};

export default Testimonies;

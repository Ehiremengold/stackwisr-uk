import "./Testimonies.css";
import TestimoniesHero from "./components/TestimoniesHero/TestimoniesHero.jsx";
import { Testimonial } from "../../components/Sections/export.js";
import { Helmet } from "react-helmet";

const Testimonies = () => {
  return (
    <>
      <Helmet>
        <title>StackwisR | Testimonies</title>
      </Helmet>
      <TestimoniesHero />
      <br />
      <Testimonial />
    </>
  );
};

export default Testimonies;

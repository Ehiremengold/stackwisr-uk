import "./Testimonies.css";
import TestimoniesHero from "./components/TestimoniesHero/TestimoniesHero.jsx";
import { Testimonial } from "../../components/Sections/export.js";
import { Helmet } from "react-helmet";
import { motion, useInView } from "framer-motion";
import DelegatesSay from "./components/DelegatesSay/DelegatesSay.jsx";
import { useRef } from "react";
import leftEventIcon from "../../assets/icons/left-events-icon.png";
import rightEventIcon from "../../assets/svg/pink-white.svg";
import sidePink from "../../assets/svg/side-pink.svg";


const Testimonies = () => {
  const delegateSay = useRef(null);
  const delegateSayInView = useInView(delegateSay, {
    threshold: 0.6,
    triggerOnce: true,
  });
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
      <motion.div
        ref={delegateSay}
        initial={{ opacity: 0, y: 50 }}
        animate={delegateSayInView && { opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeInOut" }}
      >
        <DelegatesSay />
      </motion.div>
      <section className="after-test upskill">
        <img src={leftEventIcon} className="left-one-testimony" alt="" />
        <h1>Upskill and begin your Journey to a Leading Tech Role now</h1>
        <a href={"/careerpaths"}>
          <button>Explore Courses</button>
        </a>
        <img src={rightEventIcon} className="right-one-testimony" alt="" />
      </section>
      <section className="after-test join">
      
        <img src={sidePink} alt="" />
        <h1>
          Join over 1000+ delegates who used StackwisR to upskill and handle
          real-life existing projects
        </h1>
      </section>
    </>
  );
};

export default Testimonies;

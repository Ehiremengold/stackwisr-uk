import "./GrowWithStackwisr.css";
import stackwisrProg from "../../../../assets/images/stackwisrprog.png";
import ProgramCards from "./component/ProgramCards/ProgramCards";
import { useRef } from "react";
import { useInView } from "framer-motion";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";

const GrowWithStackwisr = () => {
  const ref = useRef(null); // Create a ref for the image container
  const isInView = useInView(ref, { once: true, threshold: 0.3 }); // Check if the component is in view
  return (
    <section className="grow-with-stackwisr">
      <div className="grow-with-header">
        <div className="grow-with-top">
          <h4>Grow with Stackwisr</h4>
          <div className="desc-bar"></div>
        </div>
        <h1>StackwisR Programmes</h1>
        <p>
          We provide a structured learning paths designed to take you from
          beginner to advanced. Whether you&apos;re just starting out or are a
          seasoned professional looking to up skill, StackwisR offers a clear
          progression in your learning journey
        </p>
      </div>
      <motion.div
        ref={ref} // Attach the ref to the motion div
        initial={{ scale: 0 }} // Start from scale 0 (invisible)
        animate={{ scale: isInView ? 1 : 0 }} // Scale to its original size if in view
        transition={{ duration: 0.8, ease: "easeOut" }} // Animation properties
      >
        <img src={stackwisrProg} className="stackwisr-prog-img" alt="" />
      </motion.div>

      <ProgramCards />
      <a href="/testimonies">
        <button className="explore-courses">
          <h2>Explore Stories</h2>
        </button>
      </a>
    </section>
  );
};
export default GrowWithStackwisr;

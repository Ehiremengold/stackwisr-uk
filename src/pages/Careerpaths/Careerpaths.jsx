import "./Careerpaths.css";
import { Careerpaths as CareerpathSection } from "../../components/Sections/export.js";
import CareerpathHero from "./component/CareerpathHero/CareerpathHero.jsx";
import GrowWithStackwisr from "./component/GrowWithStackwisr/GrowWithStackwisr.jsx";
// import getJobImage from "../../assets/images/get-job.png";
import Recruitment from "./component/Recruitment/Recruitment.jsx";
import { Helmet } from "react-helmet";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const Careerpaths = () => {
  const careerpathsRef = useRef(null);
  const careerpathsIsInView = useInView(careerpathsRef, { once: true, threshold: 0.4 });
  return (
    <>
      <Helmet>
        <title>Stackwisr | Careerpaths</title>
      </Helmet>

      <motion.div
        initial={{ opacity: 0, y: 50 }} // Starts off-screen and transparent
        animate={{ opacity: 1, y: 0 }} // Moves into view and becomes fully visible
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.7 }} // Customize the speed and easing
      >
        <CareerpathHero />
      </motion.div>

      <section className="all-paths-with-bg">
        <motion.div
          ref={careerpathsRef}
          initial={{ opacity: 0, y: 100 }}
          animate={
            careerpathsIsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }
          }
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <CareerpathSection />
        </motion.div>
      </section>
      <GrowWithStackwisr />
      {/* <img className="get-job-image" src={getJobImage} alt="" /> */}
      <Recruitment />
    </>
  );
};
export default Careerpaths;

import "./AboutUs.css";
import AboutHero from "./components/AboutHero/AboutHero";
import AboutUsExplained from "./components/AboutUsExplained/AboutUsExplained";
import WhyStackwisr from "./components/WhyStackwisr/WhyStackwisr";
import HowWeDiffer from "./components/HowWeDiffer/HowWeDiffer.jsx";
import ProjectPack from "../../components/Sections/ProjectPack/ProjectPack.jsx";
import CareerPath from "../../components/Sections/Careerpaths/Careerpaths.jsx";
import GirlGetStarted from "./components/GirlGetStarted/GirlGetStarted.jsx";
import { Helmet } from "react-helmet";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const AboutUs = () => {
  const projectPackRef = useRef(null);
  const projectPackSection = useInView(projectPackRef, { once: true });

  const careerpathsRef = useRef(null);
  const careerpathsIsInView = useInView(careerpathsRef, { once: true });
  return (
    <>
      <Helmet>
        <title>StackwisR | About Us</title>
      </Helmet>
      <motion.div
        initial={{ opacity: 0, y: 50 }} // Starts off-screen and transparent
        animate={{ opacity: 1, y: 0 }} // Moves into view and becomes fully visible
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.7 }} // Customize the speed and easing
      >
        <AboutHero />
      </motion.div>
      <motion.div />
      <AboutUsExplained />
      <WhyStackwisr />
      <HowWeDiffer />
      <motion.div
        ref={projectPackRef}
        initial={{ opacity: 0, x: -200 }} // `x: -200` translates to `translateX(-200px)`
        animate={
          projectPackSection ? { opacity: 1, x: 0 } : { opacity: 0, x: -200 }
        }
        transition={{
          duration: 0.9,
          ease: [0.17, 0.55, 0.55, 1], // cubic-bezier timing function
          delay: 0.3, // Delay for 0.5 seconds
        }}
      >
        <ProjectPack />
      </motion.div>
      <motion.div
        ref={careerpathsRef}
        initial={{ opacity: 0, y: 100 }}
        animate={
          careerpathsIsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }
        }
        transition={{ duration: 0.5 }}
      >
        <CareerPath />
      </motion.div>
      <GirlGetStarted />
    </>
  );
};

export default AboutUs;

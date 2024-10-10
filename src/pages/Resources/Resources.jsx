import "./Resources.css";
import ResourcesHero from "./components/ResourcesHero/ResourcesHero.jsx";
import pinkBg from "../../assets/svg/pinkbg.svg";
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";

const Resources = () => {
  return (
    <>
      <Helmet>
        <title>StackwisR | Resources</title>
      </Helmet>
      <motion.div
        initial={{ opacity: 0, y: 50 }} // Starts off-screen and transparent
        animate={{ opacity: 1, y: 0 }} // Moves into view and becomes fully visible
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.7 }} // Customize the speed and easing
      >
        <ResourcesHero />
      </motion.div>
      <section className="resources-body">
        <img src={pinkBg} className="pink-bg" alt="" />
        <div className="wrapper">
          <div className="our-resources-title">
            <div className="blue-title">
              <div className="desc-bar"></div>
              <h4>Resources</h4>
              <div className="desc-bar"></div>
            </div>
            <h1>Our Resources</h1>
          </div>
        </div>
      </section>
    </>
  );
};
export default Resources;

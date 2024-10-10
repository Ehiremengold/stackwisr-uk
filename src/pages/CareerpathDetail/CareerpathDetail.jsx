import "./CareerpathDetail.css";
import CareerDetailHero from "./components/CareerDetailHero/CareerDetailHero";
import CareerDetail from "./components/CareerDetailSection/CareerDetail";
import AboutCareerPath from "./components/AboutCareerPath/AboutCareerPath.jsx";
import ProductPricing from "./components/ProductPricing/ProductPricing.jsx";
import { motion } from "framer-motion";

const CareerpathDetail = () => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 50 }} // Starts off-screen and transparent
        animate={{ opacity: 1, y: 0 }} // Moves into view and becomes fully visible
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.7 }} // Customize the speed and easing
      >
        <CareerDetailHero />
      </motion.div>
      <CareerDetail />
      <AboutCareerPath />
      <ProductPricing />
    </>
  );
};

export default CareerpathDetail;

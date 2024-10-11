/* eslint-disable react/prop-types */
import './Base.css'
import Header from "./components/Header/Header.jsx";
import Footer from "./components/Footer/Footer.jsx";
import { motion } from "framer-motion";
import logo from "./assets/logo/logo-white.png";
import { useState, useEffect } from "react";

const Base = ({ children }) => {
  const [isLogoVisible, setIsLogoVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLogoVisible(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {isLogoVisible ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 2, ease: "easeInOut" }}
          className="logo-container"
        >
          <img src={logo} alt="Company Logo" className="logo" />
        </motion.div>
      ) : (
        <>
          <Header />
          {children}
          <Footer />
        </>
      )}
    </>
  );
};
export default Base;

/* eslint-disable react/prop-types */
import Header from "./components/Header/Header.jsx";
import Footer from "./components/Footer/Footer.jsx";

const Base = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};
export default Base;

import "./Resources.css";
import ResourcesHero from "./components/ResourcesHero/ResourcesHero.jsx";
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import AllResources from "./components/AllResources/AllResources.jsx";
import cancelIcon from "../../assets/svg/cancel.svg";
import { useState } from "react";
import { useEffect } from "react";
import { getCountries } from "../../features/countries/countriesSlice.js";
import { useDispatch, useSelector } from "react-redux";
import leftEventIcon from "../../assets/icons/left-events-icon.png";
import rightEventIcon from "../../assets/svg/pink-white.svg";
import sidePink from "../../assets/svg/side-pink.svg";

const Resources = () => {
  const dispatch = useDispatch();
  const [openModal, setOpenModal] = useState(false);
  const { countries, isError } = useSelector(
    (store) => store.countries
  );

  useEffect(() => {
    if (openModal) {
      document.body.style.position = "relative";
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.position = "auto";
      document.body.style.overflow = "auto";
    }
  }, [openModal]);

  useEffect(() => {
    dispatch(getCountries());
  }, [dispatch]);

  const clearForm = () => {
    setOpenModal(false);
    document.body.style.overflow = "auto";
    document.querySelector(".js-modal-dark ").classList.remove("show");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

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
        <div className="wrapper">
          <div className="our-resources-title">
            <div className="blue-title">
              <div className="desc-bar"></div>
              <h4>Resources</h4>
              <div className="desc-bar"></div>
            </div>
            <h1>Our Resources</h1>
            <p>
              Get latest materials and equip yourself with what you will help
              you succeed in the industry
            </p>
          </div>
        </div>
        <AllResources openModal={openModal} setOpenModal={setOpenModal} />
      </section>
      {openModal && (
        <div className="modal-dark js-modal-dark show">
          <div className="resource-form-container">
            <div className="resource-form">
              <img
                src={cancelIcon}
                alt="cancel-icon"
                onClick={() => clearForm()}
                className="cancel-icon"
              />
              <h3>Register to get resource</h3>
              <form onSubmit={(e) => handleSubmit(e)}>
                <div className="names">
                  <input
                    type="text"
                    required
                    placeholder="Firstname"
                    name="firstName"
                  />
                  <input
                    type="text"
                    required
                    placeholder="Lastname"
                    name="lastName"
                  />
                </div>
                <div className="email">
                  <input
                    type="email"
                    required
                    placeholder="Email"
                    name="email"
                  />
                </div>
                <div className="country-phone">
                  <select name="country" id="">
                    <option value="Choose a country">Choose a country</option>
                    {isError && (
                      <div className="center-loader">
                        <h4>Error Loading Countries</h4>
                      </div>
                    )}
                    {countries.map((country, index) => {
                      return (
                        <option key={index} value={country}>
                          {country}
                        </option>
                      );
                    })}
                  </select>
                </div>
                <button className="download-resource-btn" type="submit">
                  Download to my email
                </button>
              </form>
            </div>
          </div>
        </div>
      )}
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
export default Resources;

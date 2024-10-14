import { useState } from "react";
import pinkBg from "../../../assets/svg/pinkbg.svg";
import testimonyBanner from "../../../assets/svg/real-story.svg";
import testifier from "../../../assets/images/testifier.jpg";
import testifier2 from "../../../assets/images/testifier-2.jpg";
import "./Testimonial.css";
import { motion, AnimatePresence } from "framer-motion";
// import { NavLink } from "react-router-dom";

const Testimonial = () => {
  const testimonials = [
    {
      name: "Nedum Obi",
      company: "UPS Services",
      testimony:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum saepe sed iste dicta exercitationem et ipsum nostrum nam in illo fugiat ex quaerat repudiandae veritatis veniam, cumque commodi consequatur excepturi!",
      image: testifier,
    },
    {
      name: "Chinwe Okafor",
      company: "Tech Solutions",
      testimony:
        "Dolores provident porro vero tempore labore nostrum adipisci dicta eos ex asperiores nisi suscipit ipsa eveniet rem consequatur est obcaecati.",
      image: testifier2,
    },
    {
      name: "Kunle Adewale",
      company: "Fintech Corp",
      testimony:
        "Quam facilis accusantium assumenda repellendus laboriosam molestiae. Libero maiores est autem magni dolor voluptatem numquam pariatur odit.",
      image: testifier,
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    if (currentIndex < testimonials.length - 1) {
      setCurrentIndex((prevIndex) => prevIndex + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prevIndex) => prevIndex - 1);
    }
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section className="testimonials">
      <img src={pinkBg} className="testimonials-bg" alt="" />
      <div className="wrapper">
        <img src={testimonyBanner} className="testimony-banner" alt="" />
        <h1>Let your success and journey be written in stones</h1>

        <div className="testimonial-display-container">
          <button
            className="left-control"
            onClick={handlePrev}
            disabled={currentIndex === 0}
          >
            &larr;
          </button>

          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              className="testimonial-display-wrapper"
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 100 }}
              transition={{ duration: 0.5 }}
            >
              <div className="testimony__text">
                <h2>{currentTestimonial.name}</h2>
                <h4>Company: {currentTestimonial.company}</h4>
                <p>{currentTestimonial.testimony}</p>
              </div>
              <div className="testimonial-img">
                <img
                  src={currentTestimonial.image}
                  alt={currentTestimonial.name}
                />
              </div>
            </motion.div>
          </AnimatePresence>

          <button
            className="right-control"
            onClick={handleNext}
            disabled={currentIndex === testimonials.length - 1}
          >
            &rarr;
          </button>
        </div>
      </div>
    </section>
  );
};
export default Testimonial;

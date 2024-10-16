import { useState } from "react";
import pinkBg from "../../../assets/svg/pinkbg.svg";
import testimonyBanner from "../../../assets/svg/real-story.svg";
import testifier from "../../../assets/images/testifier.jpg";
import testifier2 from "../../../assets/images/testifier2.png";
import "./Testimonial.css";
import { motion, AnimatePresence } from "framer-motion";

const Testimonial = () => {
  const testimonials = [
    {
      name: "Nedum Obi",
      company: "Data Science Specialist",
      testimony:
        "The return on my investment in the Stackwisr programme was above 1000% in the first 12 months after my completion and continued to grow to above 1500% within the next 6 months.",
      image: testifier,
    },
    {
      name: "Naw Nen Chyangmaja",
      company: "Head of Analytics and Customer Insights",
      testimony:
        "StackwisR gave me not only the theoretical foundation of Data Science but also practical industry experience. They dedicatedly helped me from end to end until my first employment with a Financial Services company in London. My CV has been sought after dramatically since then. Thank you for unlocking my job opportunities that I never had after my university graduation.",
      image: testifier2,
    },
    {
      name: "Chinwe Okafor",
      company: "Tech Solutions",
      testimony:
        "Dolores provident porro vero tempore labore nostrum adipisci dicta eos ex asperiores nisi suscipit ipsa eveniet rem consequatur est obcaecati.",
      image: testifier2,
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

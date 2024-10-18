import "./HowWeDiffer.css";
import blackLadyLearn from "../../../../assets/images/blackSec.png";
import orangeUpPlane from "../../../../assets/svg/orange-plane-up.svg";
import descImg from "../../../../assets/images/top-about.png";
import arrowImg from "../../../../assets/icons/arrow.png";
import buttonCircle from "../../../../assets/svg/button-circle.svg";
import holisiticIcon from "../../../../assets/icons/holistic.png";
import futureProofIcon from "../../../../assets/icons/futureproofed.png";
import returnIcon from "../../../../assets/icons/return.png";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { NavLink } from "react-router-dom";

const HowWeDiffer = () => {
  const cardRef = useRef(null);
  const cardInView = useInView(cardRef, { threshold: 0.4 });

  return (
    <section className="hwd">
      <div className="wrapper">
        <div className="hwd-left">
          <div className="img-container">
            <img src={orangeUpPlane} className="hwd-orange-plane" alt="" />
            <img src={blackLadyLearn} alt="" className="black-lady-learn" />
          </div>
          <div className="hero-text-container">
            <div className="desc-container">
              <img src={descImg} className="desc-img" alt="" />
              <img src={arrowImg} className="desc-img arrow" alt="" />
            </div>

            <div className="hero-text__container">
              <h1>Our Approach to Empower Your Journey</h1>
              <p>increase your relevance to employers with valued experience</p>
            </div>
            <a href="/careerpaths">
              <button className="action-item-btn">
                <img src={buttonCircle} alt="" />
                CLICK TO BEGIN
              </button>
            </a>
          </div>
        </div>

        <div className="hwd-right">
          <div className="hwd-right-title">
            <div className="desc-bar"></div>
            <h1>How we Differ</h1>
          </div>

          <div className="hwd-right-boxes">
            <motion.div
              ref={cardRef}
              className="hwd-right-box-card"
              initial={{ opacity: 0, y: -100 }} // Starts off-screen and transparent
              animate={
                cardInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -100 }
              }
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }} // Customize the speed and easing
            >
              <div className="box-head-row">
                <img src={futureProofIcon} alt="" />
                <h3>Future-Proofed Curriculum</h3>
              </div>
              <p>
                Our programs are designed to anticipate industry shifts and
                equip learners with skills for the future.
              </p>
            </motion.div>
            <motion.div
              ref={cardRef}
              className="hwd-right-box-card"
              initial={{ opacity: 0, x: -100 }} // Starts off-screen and transparent
              animate={
                cardInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -100 }
              }
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }} // Customize the speed and easing
            >
              <div className="box-head-row">
                <img src={returnIcon} alt="" />
                <h3>Return on Investment</h3>
              </div>
              <p>
                Achieve significant career progression and professional growth
                within months of program completion.
              </p>
            </motion.div>
            <motion.div
              ref={cardRef}
              className="hwd-right-box-card"
              initial={{ opacity: 0, y: -100 }} // Starts off-screen and transparent
              animate={
                cardInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -100 }
              }
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }} // Customize the speed and easing
            >
              <div className="box-head-row">
                <img src={holisiticIcon} alt="" />
                <h3>Holistic Talent Development</h3>
              </div>
              <p>
                We nurture not just technical proficiency, but also essential
                soft skills and leadership qualities.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default HowWeDiffer;

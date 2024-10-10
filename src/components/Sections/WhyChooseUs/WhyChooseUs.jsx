import "./WhyChooseUs.css";
import trainer from "../../../assets/svg/trainer.svg";
import handsOn from "../../../assets/svg/hands-on.svg";
import liveClasses from "../../../assets/svg/live-classes.svg";
import resources from "../../../assets/svg/resources.svg";
import training from "../../../assets/svg/training-icon.svg";
import topDrop from "../../../assets/svg/top-drop.svg";
import bottomDrop from "../../../assets/svg/bottom-drop.svg";
import { motion } from "framer-motion";

const WhyChooseUs = ({ imageInContainerRef, imageInWhyChooseUsSection }) => {
  return (
    <section className="why-choose-us">
      <div className="wrapper">
        <img src={topDrop} className="white-spill top" alt="" />
        <img src={bottomDrop} className="white-spill left" alt="" />
        <img src={bottomDrop} className="white-spill bottom" alt="" />
        <div className="why-choose-desc">
          <div className="why-choose-title">
            <div className="desc-bar default"></div>
            <h4>Why Choose Us</h4>
            <div className="desc-bar"></div>
          </div>
          <h1>Get the best From Our Experienced Trainers</h1>
          <p className="why-choose-subtitle">
            Unlock new career opportunities in the most in-demand fields with
            our expert-led programs
          </p>

          <div className="why-choose-grid">
            <div className="why-choose-box">
              <img src={handsOn} alt="" />
              <h3>70% Hands-on Projects</h3>
              <p className="box-subtitle">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Cupiditate consequuntur libero illo expedita odit.{" "}
              </p>
            </div>
            <div className="why-choose-box">
              <img src={training} alt="" />
              <h3>30% Training</h3>
              <p className="box-subtitle">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Cupiditate consequuntur libero illo expedita odit.{" "}
              </p>
            </div>
            <div className="why-choose-box">
              <img src={resources} alt="" />
              <h3>Access to Resources</h3>
              <p className="box-subtitle">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Cupiditate consequuntur libero illo expedita odit.{" "}
              </p>
            </div>
            <div className="why-choose-box">
              <img src={liveClasses} alt="" />
              <h3>Live Classes</h3>
              <p className="box-subtitle">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Cupiditate consequuntur libero illo expedita odit.{" "}
              </p>
            </div>
          </div>
        </div>

        <motion.div className="img-desc">
          <motion.img
            src={trainer}
            alt="Trainer"
            ref={imageInContainerRef}
            initial={{ opacity: 0, y: 100 }} // Starts with opacity 0 and translated 100px down
            animate={imageInWhyChooseUsSection ? { opacity: 1, y: 0 } : {}} // Animate to opacity 1 and original position
            transition={{
              duration: 0.8,
              ease: [0.17, 0.55, 0.55, 1], // Smooth easing
              delay: 0.2,
            }}
          />
        </motion.div>
      </div>
    </section>
  );
};
export default WhyChooseUs;

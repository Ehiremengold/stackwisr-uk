import "./WhyStackwisr.css";
import whyImage from "../../../../assets/images/why.png";
import stackwisrCardBg from "../../../../assets/svg/back-blue.svg";
import expertLed from "../../../../assets/images/expert.png";
import payment from "../../../../assets/images/payment.png";
import proven from "../../../../assets/images/proven.png";
import { motion, useInView } from "framer-motion"; // Import useInView
import { useRef } from "react";

const WhyStackwisr = () => {
  const ref = useRef(null); // Create a ref to track the section
  const isInView = useInView(ref, { once: true, threshold: 0.3 }); // Check if in view

  return (
    <motion.section
      ref={ref} // Attach the ref to the section
      className="why-stackwisr"
      initial={{ opacity: 0, y: 50 }} // Start with opacity 0 and slide down
      animate={isInView ? { opacity: 1, y: 0 } : {}} // Animate when in view
      transition={{ duration: 0.8, ease: "easeOut" }} // Smooth transition
    >
      <div className="wrapper">
        <div className="why-stackwisr-title">
          <div className="line-bar"></div>
          <div className="why-stackwisr-title-texts">
            <h1>Why StackwisR?</h1>
            <h4>How we differ</h4>
          </div>
        </div>

        <div className="why-stackwisr-container">
          <div className="why-stackwisr-left">
            <img src={whyImage} alt="" />
          </div>

          <div className="why-stackwisr-right">
            <div className="left-cards">
              <motion.div
                className="why-stackwisr-card"
                initial={{ opacity: 0, y: 20 }} // Start with opacity 0 and slide up
                animate={isInView ? { opacity: 1, y: 0 } : {}} // Animate to full opacity and original position when in view
                transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }} // Smooth transition
              >
                <img
                  src={stackwisrCardBg}
                  alt=""
                  className="why-stackwisr-card-bg"
                />
                <img src={expertLed} alt="" className="desc-icon" />
                <h4>Expert-Led Training</h4>
                <p>
                  At StackwisR, we offer training led by industry veterans and
                  provide real-world projects to ensure you gain the practical
                  skills that employers demand. Our programs include one-on-one
                  expert mentorship and continuous on-the-job support to help
                  you thrive in your new career.
                </p>
              </motion.div>

              <motion.div
                className="why-stackwisr-card col-2"
                initial={{ opacity: 0, y: 20 }} // Start with opacity 0 and slide up
                animate={isInView ? { opacity: 1, y: 0 } : {}} // Animate to full opacity and original position when in view
                transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }} // Smooth transition
              >
                <img
                  src={stackwisrCardBg}
                  alt=""
                  className="why-stackwisr-card-bg"
                />
                <img src={payment} alt="" className="desc-icon" />
                <h4>Flexible Payment and Support</h4>
                <p>
                  We understand that financial flexibility is crucial, which is
                  why we offer instalment payment plans. Our support doesn’t end
                  at training; we provide continuous guidance and job placement
                  assistance to ensure your success.
                </p>
              </motion.div>
            </div>

            <div className="right-cards">
              <motion.div
                className="why-stackwisr-card"
                initial={{ opacity: 0, y: 20 }} // Start with opacity 0 and slide up
                animate={isInView ? { opacity: 1, y: 0 } : {}} // Animate to full opacity and original position when in view
                transition={{ duration: 0.5, ease: "easeOut", delay: 0.3 }} // Smooth transition
              >
                <img
                  src={stackwisrCardBg}
                  alt=""
                  className="why-stackwisr-card-bg"
                />
                <img src={proven} alt="" className="desc-icon" />
                <h4>Proven Track Record</h4>
                <p>
                  Our results speak for themselves with over 2000+ professionals
                  developed, 500+ businesses benefited, and a 4.7+ customer
                  satisfaction score. Our programs boast a 98% job placement
                  rate, ensuring that our delegates not only learn but also
                  secure employment in their desired fields.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default WhyStackwisr;

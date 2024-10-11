import "./Recruitment.css";
import blackDude from "../../../../assets/svg/blackdude.svg";
import roadMap from "../../../../assets/svg/roadmap.svg";
import rocket from "../../../../assets/images/rocket.png";
import recruitImg from "../../../../assets/images/recruit-img.png";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const Recruitment = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.4 });
  return (
    <section className="how-you-get-the-job" ref={ref}>
      <motion.img
        src={rocket}
        className="rocket-img"
        alt=""
        initial={{ translateY: -50, opacity: 0 }} // Start with upward movement and opacity 0
        animate={{ translateY: isInView ? 0 : -50, opacity: isInView ? 1 : 0 }} // Move to original position and fade in
        transition={{ duration: 0.6, ease: "easeOut" }} // Smooth transition
      />

      <div className="wrapper">
        <div className="the-journey">
          <motion.img
            src={blackDude}
            className="blackdude"
            alt=""
            initial={{ scale: 0, opacity: 0 }} // Start with scale 0 and opacity 0
            animate={{ scale: isInView ? 1 : 0, opacity: isInView ? 1 : 0 }} // Scale to original size and fade in
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }} // Delay for staggered effect
          />

          <div className="the-journey-right">
            <div className="the-journey-top">
              <div className="desc-bar"></div>
              <h5>The Journey</h5>
              <div className="desc-bar-none"></div>
            </div>
            <motion.h1
              initial={{ y: 30, opacity: 0 }} // Start slightly below with opacity 0
              animate={{ y: isInView ? 0 : 30, opacity: isInView ? 1 : 0 }} // Move to original position and fade in
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }} // Delay for a staggered effect
            >
              How You Get The Job
            </motion.h1>
            <motion.p
              initial={{ y: 30, opacity: 0 }} // Start slightly below with opacity 0
              animate={{ y: isInView ? 0 : 30, opacity: isInView ? 1 : 0 }} // Move to original position and fade in
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }} // Delay for a staggered effect
            >
              <span className="at-stackwisr">
                At StackwisR, we&apos;re not just offering training
              </span>
              &nbsp;we&apos;re your career partner, guiding you from interviews
              and job tests to career growth and promotions. Wherever your
              career takes you, we&apos;re with you every step of the way.
            </motion.p>
          </div>
        </div>

        <motion.img
          src={roadMap}
          className="road-map"
          alt=""
          initial={{ translateY: 50, opacity: 0 }} // Start with downward movement and opacity 0
          animate={{ translateY: isInView ? 0 : 50, opacity: isInView ? 1 : 0 }} // Move to original position and fade in
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }} // Delay for staggered effect
        />
      </div>

      <div className="recruitment-box">
        <motion.img
          src={recruitImg}
          alt=""
          initial={{ scale: 0.8, opacity: 0 }} // Start with scale 0.8 and opacity 0
          animate={{ scale: isInView ? 1 : 0.8, opacity: isInView ? 1 : 0 }} // Scale to original size and fade in
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.5 }} // Delay for staggered effect
        />
        <div className="recruitment-text">
          <motion.h1
            initial={{ y: 20, opacity: 0 }} // Start slightly below with opacity 0
            animate={{ y: isInView ? 0 : 20, opacity: isInView ? 1 : 0 }} // Move to original position and fade in
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.8 }} // Delay for staggered effect
          >
            RECRUITMENT
          </motion.h1>
          <motion.p
            initial={{ y: 20, opacity: 0 }} // Start slightly below with opacity 0
            animate={{ y: isInView ? 0 : 20, opacity: isInView ? 1 : 0 }} // Move to original position and fade in
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.9 }} // Delay for staggered effect
          >
            As you advance along your career journey, it’s time to initiate the
            recruitment phase. At this stage, you will already be well-prepared
            for the job market, possessing the skills and confidence necessary
            to excel in interviews. Your thorough preparation will enable you to
            navigate the interview process with ease, showcasing your
            qualifications and strengths effectively. This readiness will
            significantly enhance your chances of landing desirable roles that
            align with your career aspirations, setting you on a path toward
            continued professional growth and success.
          </motion.p>
        </div>
      </div>
    </section>
  );
};
export default Recruitment;
